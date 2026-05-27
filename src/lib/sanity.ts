
import { createClient, type SanityClient } from "@sanity/client";
// import imageUrlBuilder from "@sanity/image-url";
import { createImageUrlBuilder } from "@sanity/image-url";

// Set VITE_SANITY_PROJECT_ID in your env once you create a Sanity project at sanity.io/manage.
// While unset, the blog falls back to static posts in src/lib/content.ts so the site keeps working.
export const SANITY_PROJECT_ID =
  (import.meta.env.VITE_SANITY_PROJECT_ID as string | undefined) ?? "";
export const SANITY_DATASET =
  (import.meta.env.VITE_SANITY_DATASET as string | undefined) ?? "production";
export const sanityEnabled = SANITY_PROJECT_ID.length > 0;

export const sanityClient: SanityClient | null = sanityEnabled
  ? createClient({
      projectId: SANITY_PROJECT_ID,
      dataset: SANITY_DATASET,
      apiVersion: "2024-10-01",
      useCdn: false,
    })
  : null;

// const builder = sanityClient ? imageUrlBuilder(sanityClient) : null;
const builder = sanityClient
  ? createImageUrlBuilder(sanityClient)
  : null;

// Sanity image source can be a string URL, asset ref, or full image object.
// Using a permissive type to keep callers ergonomic without pulling in the full SanityImageSource type.
type ImageSource = string | { asset?: { _ref?: string; url?: string }; _ref?: string } | undefined | null;

export function urlFor(source: ImageSource) {
  if (!builder || !source) return "";
  try {
    return builder.image(source as Parameters<typeof builder.image>[0]).url();
  } catch {
    return "";
  }
}

export type SanityPost = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  body?: unknown;
  publishedAt: string;
  readTime?: string;
  category?: string;
  tags?: string[];
  views?: number;
  coverImage?: string;
  author?: { name: string; role?: string; image?: string; bio?: string };
};

export const POST_QUERY_FIELDS = `
  _id,
  title,
  "slug": slug.current,
  excerpt,
  body,
  publishedAt,
  readTime,
  category,
  tags,
  views,
  "coverImage": coverImage.asset->url,
  "author": author->{ name, role, "image": image.asset->url, bio }
`;

export async function fetchPosts(): Promise<SanityPost[]> {
  if (!sanityClient) return [];
  return sanityClient.fetch(`*[_type == "post"] | order(publishedAt desc) { ${POST_QUERY_FIELDS} }`);
}

export async function fetchPostBySlug(slug: string): Promise<SanityPost | null> {
  if (!sanityClient) return null;
  return sanityClient.fetch(
    `*[_type == "post" && slug.current == $slug][0] { ${POST_QUERY_FIELDS} }`,
    { slug }
  );
}

export async function fetchRelatedPosts(slug: string, category?: string): Promise<SanityPost[]> {
  if (!sanityClient) return [];
  return sanityClient.fetch(
    `*[_type == "post" && slug.current != $slug && (category == $category || count(tags[@ in *[_type=="post" && slug.current==$slug][0].tags]) > 0)] | order(publishedAt desc) [0...3] { ${POST_QUERY_FIELDS} }`,
    { slug, category: category ?? "" }
  );
}
