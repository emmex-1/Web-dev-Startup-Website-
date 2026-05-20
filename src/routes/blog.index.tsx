import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, ArrowRight, Calendar, Clock } from "lucide-react";
import { PageHero, CTA, Section } from "@/components/section";
import { HERO_IMAGES } from "@/lib/content";
import { fetchAllPosts, type BlogPost } from "@/lib/blog";
import { seo, jsonLdScript } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/blog/")({
  loader: () => fetchAllPosts(),
  head: ({ loaderData }) => {
    const base = seo({
      title: "Blog — Web, AI, SEO, Shopify | Globe Stack",
      description: "Practical writing on web development, AI, SEO, ads, social, and Shopify from Globe Stack — for teams in Nigeria, USA, UK, Canada, India, and worldwide.",
      path: "/blog",
    });
    const blogLd = {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: `${SITE.name} Blog`,
      blogPost: (loaderData ?? []).slice(0, 10).map((p: BlogPost) => ({
        "@type": "BlogPosting",
        headline: p.title,
        datePublished: p.publishedAt,
        url: `/blog/${p.slug}`,
      })),
    };
    return { ...base, scripts: [jsonLdScript(blogLd)] };
  },
  component: BlogPage,
});

const PAGE_SIZE = 9;

function BlogPage() {
  const all = Route.useLoaderData() as BlogPost[];
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [active, setActive] = useState("All");
  const [sort, setSort] = useState<"newest" | "oldest">("newest");
  const [page, setPage] = useState(1);

  const tags = useMemo(() => ["All", ...Array.from(new Set(all.map((p) => p.tag)))], [all]);

  const filtered = useMemo(() => {
    let list = all.filter((p) =>
      (active === "All" || p.tag === active) &&
      (query === "" || (p.title + p.excerpt).toLowerCase().includes(query.toLowerCase()))
    );
    list = [...list].sort((a, b) => {
      const da = new Date(a.publishedAt).getTime();
      const db = new Date(b.publishedAt).getTime();
      return sort === "newest" ? db - da : da - db;
    });
    return list;
  }, [all, active, query, sort]);

  const featured = all.filter((p) => p.featured).slice(0, 3);
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const visible = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <>
      <PageHero
        image={HERO_IMAGES.blog}
        eyebrow="Blog"
        title={<>Field notes from <span className="text-gradient">the work.</span></>}
        desc="Practical writing on web, AI, SEO, ads, social, and commerce — for teams in Nigeria and around the world."
      >
        <div className="mt-2 flex max-w-xl items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 backdrop-blur">
          <Search className="h-4 w-4 text-white/80" />
          <input
            value={query}
            onChange={(e) => { setQuery(e.target.value); setPage(1); }}
            placeholder="Search articles…"
            className="w-full bg-transparent text-sm text-white placeholder:text-white/60 focus:outline-none"
          />
        </div>
      </PageHero>

      {/* Featured strip */}
      {featured.length > 0 && (
        <Section eyebrow="Editor's picks" title="Featured reads.">
          <div className="grid gap-6 md:grid-cols-3">
            {featured.map((p, i) => (
              <motion.div key={p.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Link to="/blog/$slug" params={{ slug: p.slug }} preload="intent" className="group block overflow-hidden rounded-2xl border border-border bg-card transition hover:border-glow">
                  <div className="relative h-56 overflow-hidden">
                    <img src={p.coverImage} alt={p.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2 py-0.5 font-mono text-[10px] uppercase text-black">Featured</span>
                  </div>
                  <div className="p-6">
                    <div className="text-xs text-muted-foreground">{p.tag} · {p.readTime}</div>
                    <h3 className="mt-2 font-display text-xl font-semibold leading-snug group-hover:text-gradient">{p.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.excerpt}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </Section>
      )}

      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        {/* Filters */}
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {tags.map((t) => (
              <button
                key={t}
                onClick={() => { setActive(t); setPage(1); }}
                className={`rounded-full px-4 py-1.5 text-sm transition ${active === t ? "bg-primary text-primary-foreground" : "border border-border hover:bg-muted"}`}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-muted-foreground">Sort:</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as "newest" | "oldest")}
              className="rounded-md border border-border bg-card px-3 py-1.5"
            >
              <option value="newest">Newest first</option>
              <option value="oldest">Oldest first</option>
            </select>
          </div>
        </div>

        {/* Grid */}
        {visible.length === 0 ? (
          <div className="rounded-2xl border border-border bg-card p-12 text-center text-muted-foreground">
            No articles match your filters.
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visible.map((p, i) => (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 6) * 0.05 }}
                whileHover={{ y: -6 }}
              >
                <Link to="/blog/$slug" params={{ slug: p.slug }} preload="intent"   className="group block h-full overflow-hidden rounded-2xl border border-border bg-card transition hover:border-glow">
                  <div className="relative h-44 overflow-hidden">
                    <img src={p.coverImage} alt={p.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2 py-0.5 font-mono text-[10px] uppercase text-black">{p.tag}</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1"><Calendar className="h-3 w-3" />{p.date}</span>
                      <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" />{p.readTime}</span>
                    </div>
                    <h3 className="mt-3 font-display text-lg font-semibold leading-snug group-hover:text-gradient">{p.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{p.excerpt}</p>
                    <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-gradient">
                      Read article <ArrowRight className="h-3 w-3" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-2">
            <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1} className="rounded-md border border-border px-4 py-2 text-sm disabled:opacity-40">Previous</button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                onClick={() => setPage(n)}
                className={`rounded-md px-3 py-2 text-sm ${n === page ? "bg-primary text-primary-foreground" : "border border-border hover:bg-muted"}`}
              >
                {n}
              </button>
            ))}
            <button onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page === totalPages} className="rounded-md border border-border px-4 py-2 text-sm disabled:opacity-40">Next</button>
          </div>
        )}
      </div>

      <CTA title="Want this kind of writing for your brand?" desc="Our SEO and content team produces 200+ articles a year for clients across Nigeria, USA, UK, and EU." />
    </>
  );
}
