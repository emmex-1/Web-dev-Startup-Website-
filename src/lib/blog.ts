import { sanityClient, urlFor, sanityEnabled } from "./sanity";
import { POSTS as STATIC_POSTS, POST_IMAGES } from "./content";

export type BlogPost = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  publishedAt: string;
  readTime: string;
  tag: string;
  tags: string[];
  coverImage: string;
  featured?: boolean;
  body?: unknown;
  seoTitle?: string;
  seoDescription?: string;
  author?: { name: string; role?: string; image?: string; bio?: string };
};

// ---------------------------------------------------------------------------
// Static fallback posts — include a rich body so the post page has content
// ---------------------------------------------------------------------------
const STATIC: BlogPost[] = STATIC_POSTS.map((p) => ({
  _id: p.slug,
  title: p.title,
  slug: p.slug,
  excerpt: p.excerpt,
  date: p.date,
  publishedAt: new Date(p.date).toISOString(),
  readTime: p.read,
  tag: p.tag,
  tags: [p.tag.toLowerCase()],
  coverImage: POST_IMAGES[p.slug] ?? "",
  featured: (p as { featured?: boolean }).featured,
  // Provide a portable-text-compatible body so the post page renders content.
  // We convert the excerpt into a single paragraph block. If your STATIC_POSTS
  // already carry a `body` field, swap `p.excerpt` for `(p as any).body`.
  body: [
    {
      _type: "block",
      _key: "intro",
      style: "normal",
      children: [{ _type: "span", _key: "s0", text: p.excerpt, marks: [] }],
      markDefs: [],
    },
  ],
}));

// ---------------------------------------------------------------------------
// Sanity GROQ fields
// Fix: project coverImage to a URL string, not the raw object
// ---------------------------------------------------------------------------
const POST_FIELDS = `
  _id,
  title,
  "slug": slug.current,
  excerpt,
  body,
  publishedAt,
  readTime,
  category->{title, "slug": slug.current},
  tags,
  featured,
  seoTitle,
  seoDescription,
  "coverImage": coverImage.asset->url,
  author->{ name, role, "image": image.asset->url, bio }
`;

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

type SanityRaw = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  body?: unknown;
  publishedAt: string;
  readTime?: string;
  category?: { title?: string; slug?: string } | null;
  tags?: string[];
  featured?: boolean;
  seoTitle?: string;
  seoDescription?: string;
  coverImage?: string; // now a plain URL string after the GROQ projection
  author?: { name: string; role?: string; image?: string; bio?: string } | null;
};

function map(raw: SanityRaw): BlogPost {
  return {
    _id: raw._id,
    title: raw.title,
    slug: raw.slug,
    excerpt: raw.excerpt ?? "",
    date: formatDate(raw.publishedAt),
    publishedAt: raw.publishedAt,
    readTime: raw.readTime ?? "5 min",
    tag: raw.category?.title ?? "General",
    tags: raw.tags ?? [],
    // coverImage is already a URL string from the GROQ projection
    coverImage:
      raw.coverImage ||
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&q=80",
    featured: raw.featured,
    body: raw.body,
    seoTitle: raw.seoTitle,
    seoDescription: raw.seoDescription,
    author: raw.author
      ? {
          name: raw.author.name,
          role: raw.author.role,
          // image is now already a URL string
          image: raw.author.image || undefined,
          bio: raw.author.bio,
        }
      : undefined,
  };
}

// ---------------------------------------------------------------------------
// Module-level cache — shared across all route loaders in the same page session.
// We also expose a promise so concurrent callers await the same fetch instead
// of firing multiple requests.
// ---------------------------------------------------------------------------
let _cache: BlogPost[] | null = null;
let _inFlight: Promise<BlogPost[]> | null = null;

export async function fetchAllPosts(): Promise<BlogPost[]> {
  if (_cache) return _cache;
  if (_inFlight) return _inFlight;

  _inFlight = (async () => {
    if (!sanityEnabled || !sanityClient) {
      _cache = [];
      return [];
    }
    try {
      const data = await sanityClient.fetch<SanityRaw[]>(
        `*[_type == "post"] | order(publishedAt desc) { ${POST_FIELDS} }`
      );
      _cache = data?.length ? data.map(map) : [];
      return _cache;
    } catch (e) {
      console.error("[sanity] fetchAllPosts failed", e);
      _cache = [];
      return [];
    } finally {
      _inFlight = null;
    }
  })();

  return _inFlight;
}

export async function fetchPostBySlug(slug: string): Promise<BlogPost | null> {
  // Always pull from the shared cache first — avoids a second network round-trip
  const all = await fetchAllPosts();
  const cached = all.find((p) => p.slug === slug);
  if (cached) return cached;

  // Cache miss — try Sanity directly (e.g. a brand-new post not in the list yet)
  if (sanityEnabled && sanityClient) {
    try {
      const data = await sanityClient.fetch<SanityRaw | null>(
        `*[_type == "post" && slug.current == $slug][0] { ${POST_FIELDS} }`,
        { slug }
      );
      if (data) return map(data);
    } catch (e) {
      console.error("[sanity] fetchPostBySlug failed", e);
    }
  }

  return null;
}

export async function fetchRelatedPosts(slug: string, tag: string): Promise<BlogPost[]> {
  const all = await fetchAllPosts();
  return all
    .filter(
      (p) =>
        p.slug !== slug &&
        (p.tag === tag || p.tags.some((t) => tag.toLowerCase().includes(t)))
    )
    .slice(0, 3);
}

// ---------------------------------------------------------------------------
// Call this once as early as possible (e.g. in your app entry point or root
// layout) so the cache is warm before any route loader fires.
//
//   import { primeBlogCache } from "@/lib/blog";
//   primeBlogCache();          // fire-and-forget — no await needed
// ---------------------------------------------------------------------------
export function primeBlogCache(): void {
  if (!_cache && !_inFlight) {
    fetchAllPosts().catch(() => {/* silent */});
  }
}