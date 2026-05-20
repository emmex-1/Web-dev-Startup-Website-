import { createFileRoute } from "@tanstack/react-router";
import { SERVICES } from "@/lib/site";
import { PROJECTS, CASE_STUDIES, POSTS } from "@/lib/content";
import { LOCATIONS } from "@/lib/locations";
import { SITE_URL } from "@/lib/seo";

const STATIC_PATHS = [
  "/", "/about", "/services", "/portfolio", "/case-studies", "/pricing", "/blog", "/locations", "/contact", "/tools/seo-analyzer",
];

function buildSitemap() {
  const today = new Date().toISOString().slice(0, 10);
  const urls: { loc: string; priority: string; changefreq: string }[] = [];
  for (const p of STATIC_PATHS) urls.push({ loc: `${SITE_URL}${p}`, priority: p === "/" ? "1.0" : "0.8", changefreq: "weekly" });
  for (const s of SERVICES) urls.push({ loc: `${SITE_URL}/services/${s.slug}`, priority: "0.9", changefreq: "monthly" });
  for (const p of PROJECTS) urls.push({ loc: `${SITE_URL}/portfolio/${p.slug}`, priority: "0.7", changefreq: "monthly" });
  for (const c of CASE_STUDIES) urls.push({ loc: `${SITE_URL}/case-studies/${c.slug}`, priority: "0.7", changefreq: "monthly" });
  for (const post of POSTS) urls.push({ loc: `${SITE_URL}/blog/${post.slug}`, priority: "0.6", changefreq: "monthly" });
  for (const l of LOCATIONS) urls.push({ loc: `${SITE_URL}/locations/${l.slug}`, priority: "0.8", changefreq: "monthly" });

  const body = urls
    .map((u) => `  <url><loc>${u.loc}</loc><lastmod>${today}</lastmod><changefreq>${u.changefreq}</changefreq><priority>${u.priority}</priority></url>`)
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => new Response(buildSitemap(), { headers: { "content-type": "application/xml; charset=utf-8" } }),
    },
  },
});
