import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { PortableText, type PortableTextBlock } from "@portabletext/react";
import { ArrowLeft, Calendar, Clock, Star, MessageSquare, ChevronRight } from "lucide-react";
import { CTA } from "@/components/section";
import { fetchPostBySlug, fetchAllPosts, fetchRelatedPosts, type BlogPost } from "@/lib/blog";
import { seo, jsonLdScript, abs } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/blog/$slug")({
loader: async ({ params }) => {
  const [post, all] = await Promise.all([
    fetchPostBySlug(params.slug),
    fetchAllPosts(),                          // single fetch
  ]);
  if (!post) throw notFound();

  const related = all
    .filter((p) => p.slug !== post.slug && (p.tag === post.tag || p.tags.some((t) => post.tag.toLowerCase().includes(t))))
    .slice(0, 3);

  const recent = all.filter((p) => p.slug !== post.slug).slice(0, 5);
  const categories = Array.from(new Set(all.map((p) => p.tag)));

  return { post, related, recent, categories };
},
pendingMs: 0, 
  pendingComponent: () => (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-border border-t-primary" />
    </div>
  ),

  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-4 py-32 text-center">
      <h1 className="font-display text-4xl font-bold">Post not found</h1>
      <p className="mt-3 text-muted-foreground">The article you're looking for doesn't exist.</p>
      <Link to="/blog" className="mt-6 inline-flex rounded-md bg-primary px-5 py-3 text-sm text-primary-foreground">Back to blog</Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="mx-auto max-w-2xl px-4 py-32 text-center">
      <h1 className="font-display text-3xl font-bold">Something went wrong</h1>
      <p className="mt-3 text-muted-foreground">{error.message}</p>
    </div>
  ),
  head: ({ params, loaderData }) => {
    const post = loaderData?.post;
    if (!post) return seo({ title: "Article — Globe Stack", description: "Globe Stack blog.", path: `/blog/${params.slug}` });
    const base = seo({
      title: post.seoTitle ?? `${post.title} — Globe Stack`,
      description: post.seoDescription ?? post.excerpt,
      path: `/blog/${post.slug}`,
      image: post.coverImage,
      type: "article",
      publishedTime: post.publishedAt,
      author: post.author?.name,
    });
    const articleLd = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      image: post.coverImage,
      datePublished: post.publishedAt,
      author: { "@type": "Person", name: post.author?.name ?? SITE.name },
      publisher: { "@type": "Organization", name: SITE.name },
      mainEntityOfPage: abs(`/blog/${post.slug}`),
    };
    return { ...base, scripts: [jsonLdScript(articleLd)] };
  },
  component: BlogPostPage,
});

type Comment = { id: string; name: string; message: string; rating: number; createdAt: string };

function extractToc(body: unknown): { id: string; text: string }[] {
  if (!Array.isArray(body)) return [];
  return (body as PortableTextBlock[])
    .filter((b) => b._type === "block" && (b.style === "h2" || b.style === "h3"))
    .map((b) => {
      const text = ((b.children as { text?: string }[]) ?? []).map((c) => c.text ?? "").join("");
      return { id: text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""), text };
    });
}

function BlogPostPage() {
  const { post, related, recent, categories } = Route.useLoaderData() as {
    post: BlogPost; related: BlogPost[]; recent: BlogPost[]; categories: string[];
  };

  const toc = useMemo(() => extractToc(post.body), [post.body]);

  // Comments + ratings (localStorage demo — wire to backend in next phase)
  const storageKey = `comments:${post.slug}`;
  const ratingKey = `rating:${post.slug}`;
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(5);
  const [avgRating, setAvgRating] = useState<number | null>(null);
  const [hover, setHover] = useState(0);

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem(storageKey) ?? "[]") as Comment[];
      setComments(stored);
      const ratings = JSON.parse(localStorage.getItem(ratingKey) ?? "[]") as number[];
      if (ratings.length) setAvgRating(ratings.reduce((a, b) => a + b, 0) / ratings.length);
    } catch { /* ignore */ }
  }, [storageKey, ratingKey]);

  function submitComment(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    const c: Comment = { id: crypto.randomUUID(), name: name.trim(), message: message.trim(), rating, createdAt: new Date().toISOString() };
    const next = [c, ...comments];
    setComments(next);
    localStorage.setItem(storageKey, JSON.stringify(next));
    const ratings = JSON.parse(localStorage.getItem(ratingKey) ?? "[]") as number[];
    ratings.push(rating);
    localStorage.setItem(ratingKey, JSON.stringify(ratings));
    setAvgRating(ratings.reduce((a, b) => a + b, 0) / ratings.length);
    setName(""); setMessage(""); setRating(5);
  }

  const ptComponents = {
    block: {
      h2: ({ children, value }: { children?: React.ReactNode; value?: PortableTextBlock }) => {
        const text = ((value?.children as { text?: string }[]) ?? []).map((c) => c.text ?? "").join("");
        const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
        return <h2 id={id} className="mt-12 mb-4 font-display text-3xl font-bold">{children}</h2>;
      },
      h3: ({ children, value }: { children?: React.ReactNode; value?: PortableTextBlock }) => {
        const text = ((value?.children as { text?: string }[]) ?? []).map((c) => c.text ?? "").join("");
        const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
        return <h3 id={id} className="mt-8 mb-3 font-display text-2xl font-bold">{children}</h3>;
      },
      normal: ({ children }: { children?: React.ReactNode }) => <p className="mb-5 text-base leading-7 text-foreground/90">{children}</p>,
      blockquote: ({ children }: { children?: React.ReactNode }) => <blockquote className="my-8 border-l-4 border-glow bg-card/50 p-5 italic text-foreground/80">{children}</blockquote>,
    },
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={post.coverImage} alt={post.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 py-24 md:px-6 md:py-32">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" /> Back to blog
          </Link>
          <div className="mt-6 inline-flex items-center gap-2">
            <span className="rounded-full bg-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-white backdrop-blur">{post.tag}</span>
            {post.featured && <span className="rounded-full bg-gradient-to-r from-[var(--neon)] to-[var(--neon-violet)] px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-background">Featured</span>}
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="mt-4 font-display text-4xl font-bold leading-tight md:text-6xl"
          >
            {post.title}
          </motion.h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{post.excerpt}</p>
          <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><Calendar className="h-4 w-4" /> {post.date}</span>
            <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4" /> {post.readTime}</span>
            {avgRating !== null && (
              <span className="inline-flex items-center gap-1.5"><Star className="h-4 w-4 fill-yellow-400 text-yellow-400" /> {avgRating.toFixed(1)} ({comments.length})</span>
            )}
          </div>
        </div>
      </section>

      {/* Article body + sidebar */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
          <article className="min-w-0">
            {/* Author */}
            {post.author && (
              <div className="mb-10 flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
                {post.author.image ? (
                  <img src={post.author.image} alt={post.author.name} className="h-14 w-14 rounded-full object-cover" />
                ) : (
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[var(--neon)] to-[var(--neon-violet)] font-display text-lg font-bold text-background">
                    {post.author.name.charAt(0)}
                  </div>
                )}
                <div>
                  <div className="font-medium">{post.author.name}</div>
                  {post.author.role && <div className="text-sm text-muted-foreground">{post.author.role}</div>}
                </div>
              </div>
            )}

            {/* Body */}
            <div className="prose-content">
              {Array.isArray(post.body) ? (
                <PortableText value={post.body as PortableTextBlock[]} components={ptComponents} />
              ) : (
                <p className="text-base leading-7 text-foreground/90">{post.excerpt}</p>
              )}
            </div>

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="mt-10 flex flex-wrap gap-2">
                {post.tags.map((t) => (
                  <span key={t} className="rounded-full border border-border bg-muted/40 px-3 py-1 text-xs text-muted-foreground">#{t}</span>
                ))}
              </div>
            )}

            {/* Comments + rating */}
            <div className="mt-16 border-t border-border pt-10">
              <h2 className="font-display text-2xl font-bold inline-flex items-center gap-2">
                <MessageSquare className="h-5 w-5" /> Comments &amp; ratings
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">Share your take. Ratings are averaged below the article title.</p>

              <form onSubmit={submitComment} className="mt-6 grid gap-3 rounded-2xl border border-border bg-card p-6">
                <div className="grid gap-3 md:grid-cols-2">
                  <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className="rounded-md border border-border bg-background px-3 py-2 text-sm" required />
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <button key={n} type="button" onMouseEnter={() => setHover(n)} onMouseLeave={() => setHover(0)} onClick={() => setRating(n)}>
                        <Star className={`h-6 w-6 ${(hover || rating) >= n ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}`} />
                      </button>
                    ))}
                    <span className="ml-2 text-sm text-muted-foreground">{rating}/5</span>
                  </div>
                </div>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Your comment…" rows={3} className="rounded-md border border-border bg-background px-3 py-2 text-sm" required />
                <button type="submit" className="self-end rounded-md bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:opacity-90">Post comment</button>
              </form>

              <div className="mt-6 space-y-4">
                {comments.length === 0 ? (
                  <p className="text-sm text-muted-foreground">No comments yet — be the first.</p>
                ) : (
                  comments.map((c) => (
                    <div key={c.id} className="rounded-xl border border-border bg-card p-5">
                      <div className="flex items-center justify-between">
                        <div className="font-medium">{c.name}</div>
                        <div className="flex items-center gap-1 text-yellow-400">
                          {Array.from({ length: c.rating }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
                        </div>
                      </div>
                      <div className="mt-1 text-xs text-muted-foreground">{new Date(c.createdAt).toLocaleString()}</div>
                      <p className="mt-3 text-sm text-foreground/90">{c.message}</p>
                    </div>
                  ))
                )}
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-8 lg:sticky lg:top-24 lg:h-fit">
            {toc.length > 0 && (
              <div className="rounded-2xl border border-border bg-card p-6">
                <div className="font-display text-sm font-semibold uppercase tracking-wider text-gradient">Table of contents</div>
                <ul className="mt-4 space-y-2 text-sm">
                  {toc.map((t) => (
                    <li key={t.id}>
                      <a href={`#${t.id}`} className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground">
                        <ChevronRight className="h-3 w-3" /> {t.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="font-display text-sm font-semibold uppercase tracking-wider text-gradient">Recent posts</div>
              <ul className="mt-4 space-y-4">
                {recent.map((r) => (
                  <li key={r.slug}>
                    <Link to="/blog/$slug" params={{ slug: r.slug }} className="group flex gap-3">
                      <img src={r.coverImage} alt={r.title} className="h-14 w-14 rounded-md object-cover" loading="lazy" />
                      <div>
                        <div className="text-sm font-medium leading-tight group-hover:text-gradient">{r.title}</div>
                        <div className="mt-1 text-xs text-muted-foreground">{r.date}</div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="font-display text-sm font-semibold uppercase tracking-wider text-gradient">Categories</div>
              <div className="mt-4 flex flex-wrap gap-2">
                {categories.map((c) => (
                  <Link key={c} to="/blog" className="rounded-full border border-border bg-muted/40 px-3 py-1 text-xs hover:bg-muted">{c}</Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="border-t border-border bg-muted/10 py-16">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <h2 className="font-display text-3xl font-bold md:text-4xl">Related <span className="text-gradient">articles</span></h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {related.map((r) => (
                <Link key={r.slug} to="/blog/$slug" params={{ slug: r.slug }} className="group block overflow-hidden rounded-2xl border border-border bg-card transition hover:border-glow">
                  <div className="relative h-44 overflow-hidden">
                    <img src={r.coverImage} alt={r.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" loading="lazy" />
                  </div>
                  <div className="p-5">
                    <div className="text-xs text-muted-foreground">{r.tag} · {r.readTime}</div>
                    <div className="mt-2 font-display text-base font-semibold leading-snug group-hover:text-gradient">{r.title}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTA title="Want articles like this for your brand?" desc="Our SEO and content team writes for B2B SaaS, e-commerce, and AI startups across Nigeria, USA, UK, Canada and EU." />
    </>
  );
}
