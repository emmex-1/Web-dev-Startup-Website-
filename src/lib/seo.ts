import { SITE } from "./site";

// Canonical site origin used for absolute URLs (canonical, og:url, sitemap).
// Override via VITE_SITE_URL at build time when the real domain is known.
export const SITE_URL =
  (typeof import.meta !== "undefined" && (import.meta as { env?: { VITE_SITE_URL?: string } }).env?.VITE_SITE_URL) ||
  "https://rexsolv.com";

export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.svg`;

export function abs(path: string) {
  if (!path) return SITE_URL;
  if (/^https?:\/\//.test(path)) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

type SeoInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  author?: string;
};

export function seo({ title, description, path, image, type = "website", publishedTime, author }: SeoInput) {
  const url = abs(path);
  const img = image ? abs(image) : DEFAULT_OG_IMAGE;
  const meta = [
    { title },
    { name: "description", content: description },
    { name: "theme-color", content: "#0a0a0f" },
    { property: "og:site_name", content: SITE.name },
    { property: "og:type", content: type },
    { property: "og:locale", content: "en_US" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:image", content: img },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: img },
  ] as Array<Record<string, string>>;
  if (publishedTime) meta.push({ property: "article:published_time", content: publishedTime });
  if (author) meta.push({ property: "article:author", content: author });
  return {
    meta,
    links: [{ rel: "canonical", href: url }],
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE_URL,
    description: SITE.description,
    email: SITE.email,
    telephone: SITE.phone,
    sameAs: [SITE.social.twitter, SITE.social.github, SITE.social.linkedin],
    logo: `${SITE_URL}/lol.svg`,
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/blog?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: abs(it.path),
    })),
  };
}

export function jsonLdScript(data: unknown) {
  return {
    type: "application/ld+json",
    children: JSON.stringify(data),
  };
}
