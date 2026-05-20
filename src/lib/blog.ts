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
}));

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
  "coverImage": coverImage,
  author->{ name, role, "image": image, bio }
`;

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
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
  coverImage?: unknown;
  author?: { name: string; role?: string; image?: unknown; bio?: string } | null;
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
    coverImage: urlFor(raw.coverImage as Parameters<typeof urlFor>[0]) || "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&q=80",
    featured: raw.featured,
    body: raw.body,
    seoTitle: raw.seoTitle,
    seoDescription: raw.seoDescription,
    author: raw.author
      ? {
          name: raw.author.name,
          role: raw.author.role,
          image: urlFor(raw.author.image as Parameters<typeof urlFor>[0]) || undefined,
          bio: raw.author.bio,
        }
      : undefined,
  };
}

let _cache: BlogPost[] | null = null;

export async function fetchAllPosts(): Promise<BlogPost[]> {
  if (_cache) return _cache;          // ← instant return on repeat calls
  
  if (!sanityEnabled || !sanityClient) return (_cache = STATIC);
  try {
    const data = await sanityClient.fetch<SanityRaw[]>(
      `*[_type == "post"] | order(publishedAt desc) { ${POST_FIELDS} }`
    );
    return (_cache = data?.length ? data.map(map) : STATIC);
  } catch (e) {
    console.error("[sanity] fetchAllPosts failed", e);
    return (_cache = STATIC);
  }
}
export async function fetchPostBySlug(slug: string): Promise<BlogPost | null> {
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
  return STATIC.find((p) => p.slug === slug) ?? null;
}

export async function fetchRelatedPosts(slug: string, tag: string): Promise<BlogPost[]> {
  const all = await fetchAllPosts();
  return all.filter((p) => p.slug !== slug && (p.tag === tag || p.tags.some((t) => tag.toLowerCase().includes(t)))).slice(0, 3);
}


