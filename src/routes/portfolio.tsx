import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowUpRight,
  ExternalLink,
  Monitor,
  Tablet,
  Smartphone,
  ArrowRight,
  Plus,
  Minus,
  Zap,
  Users,
  TrendingUp,
  Clock,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PageHero, CTA } from "@/components/section";
import { PROJECTS, PROJECT_IMAGES, HERO_IMAGES } from "@/lib/content";
import { seo } from "@/lib/seo";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const modalState = { modal: true } as any;

export const Route = createFileRoute("/portfolio")({
  head: () =>
    seo({
      title: "Portfolio — Globe Stack",
      description:
        "Selected work from Globe Stack — web apps, AI, Shopify, SEO, ads, and social.",
      path: "/portfolio",
    }),
  component: PortfolioPage,
});

const PORTFOLIO_FAQ = [
  {
    q: "How quickly can you build my website?",
    a: "Most marketing sites ship in 2–3 weeks. Web apps and SaaS dashboards typically take 4–8 weeks depending on scope. We'll give you a hard timeline before we start — no vague estimates.",
  },
  {
    q: "What will my website cost?",
    a: "Marketing sites start at $2,499. Full web apps and commerce builds typically run $7,900–$15,000+. Every project gets a fixed-scope proposal so you know exactly what you're paying before we start.",
  },
  {
    q: "What kind of websites do you specialize in?",
    a: "We work across SaaS, DTC e-commerce, AI-native products, marketing sites, and performance dashboards. Our sweet spot is anything requiring real engineering — not just a theme tweak.",
  },
  {
    q: "Do you offer other services besides web design?",
    a: "Yes — we run SEO, paid ads, social content, AI solutions, and Shopify builds as standalone or bundled practices. Many clients start with a build and add growth services after launch.",
  },
  {
    q: "Will you help me after my website goes live?",
    a: "Always. All builds include 30-day post-launch support. Beyond that, most clients move onto a lightweight maintenance retainer for fixes and iteration.",
  },
  {
    q: "What do you need from me to get started?",
    a: "A 45-minute discovery call, your brand assets (logo, colors, fonts), any existing copy, and a clear brief on goals. We handle strategy, design, and build from there.",
  },
  {
    q: "What else do I need to know?",
    a: "We're a senior-only studio. No juniors, no hand-offs. The team that pitches you is the team that builds. We sign NDAs before any sensitive call and you own 100% of the output.",
  },
];

const STATS = [
  { icon: Zap, value: "300+", label: "Projects shipped" },
  { icon: Users, value: "4.9/5", label: "Client satisfaction" },
  { icon: TrendingUp, value: "$12M+", label: "Revenue generated" },
  { icon: Clock, value: "5 days", label: "Avg. kickoff time" },
];

const CATEGORY_ICONS: Record<string, string> = {
  All: "✦",
  "Web App": "⬡",
  Shopify: "⬟",
  "AI Solutions": "◈",
  Ads: "◉",
  SEO: "◎",
  Social: "◐",
};

function PortfolioPage() {
  const cats = ["All", ...Array.from(new Set(PROJECTS.map((p) => p.category)))];
  const [active, setActive] = useState("All");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const filtered =
    active === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <>
      <PageHero
        image={HERO_IMAGES.portfolio}
        eyebrow="Portfolio"
        title={<>Selected <span className="text-gradient">work.</span></>}
        desc="Selected projects we've designed and developed for modern businesses — real goals, real constraints, provable results."
      >
        <div className="flex flex-wrap items-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
          >
            Start your project <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10"
          >
            Case studies <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </PageHero>

      {/* Stats strip */}
      <div className="border-b border-t border-border bg-card/60">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-border md:grid-cols-4">
          {STATS.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-center gap-3 px-8 py-6">
              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-glow bg-background">
                <Icon className="h-4 w-4 text-gradient" />
              </div>
              <div>
                <div className="font-display text-xl font-bold">{value}</div>
                <div className="text-xs text-muted-foreground">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Projects section */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Featured projects
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold leading-tight md:text-5xl">
            Work we're <span className="text-gradient">proud to ship.</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Every project here is a real client engagement. Click any card for the
            full story — screenshots, stack, metrics, and live links.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                active === c
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "border border-border bg-card hover:border-glow hover:bg-muted"
              }`}
            >
              <span className="font-mono text-[11px]">{CATEGORY_ICONS[c] ?? "◆"}</span>
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div
                key={p.slug}
                layout
                initial={{ opacity: 0, y: 28, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.45, delay: (i % 6) * 0.05 }}
                whileHover={{ y: -6 }}
              >
                {/*
                  Use Link with `state={{ modal: true }}` so the slug route
                  knows to render as a modal overlay instead of a full page.
                  TanStack Router will still navigate to /portfolio/$slug,
                  keeping the URL shareable, but the layout renders the
                  modal on top of this portfolio grid.
                */}
                <Link
                  to="/portfolio/$slug"
                  params={{ slug: p.slug }}
                  state={modalState}
                  className="group block overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-glow hover:shadow-[0_8px_40px_-12px_var(--neon)]"
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={PROJECT_IMAGES[p.slug]}
                      alt={p.title}
                      className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <div className="absolute bottom-3 left-3 rounded-full border border-white/20 bg-black/50 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-white backdrop-blur">
                      {p.tag}
                    </div>
                    <div className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white backdrop-blur transition-all group-hover:bg-white group-hover:text-black">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                    {p.year && (
                      <div className="absolute left-3 top-3 rounded-md bg-black/40 px-2 py-0.5 font-mono text-[10px] text-white/70 backdrop-blur">
                        {p.year}
                      </div>
                    )}
                  </div>

                  {/* Body */}
                  <div className="p-5">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-muted-foreground">{p.category}</span>
                      {p.live && (
                        <span className="flex items-center gap-1 text-xs font-medium text-gradient">
                          Live <ExternalLink className="h-3 w-3" />
                        </span>
                      )}
                    </div>
                    <h3 className="mt-1.5 font-display text-lg font-semibold leading-snug">{p.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>

                    {/* Tech chips */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.tech.slice(0, 4).map((t) => (
                        <span key={t} className="rounded-md border border-border bg-muted/60 px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                          {t}
                        </span>
                      ))}
                      {p.tech.length > 4 && (
                        <span className="rounded-md border border-border bg-muted/60 px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                          +{p.tech.length - 4}
                        </span>
                      )}
                    </div>


                    {/* CTA row */}
                    <div className="mt-4 flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 text-sm font-medium transition group-hover:text-gradient">
                        View project <ArrowUpRight className="h-3.5 w-3.5" />
                      </span>
                      {p.live && (
                        <a
                          href={p.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="ml-auto flex items-center gap-1 rounded-md border border-border px-2.5 py-1 text-xs hover:bg-muted"
                        >
                          <ExternalLink className="h-3 w-3" /> Live demo
                        </a>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Responsive Showcase */}
      <section className="border-t border-border bg-card/40 px-4 py-20 md:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Built for every screen</p>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
              Pixel-perfect <span className="text-gradient">across devices.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
              Every project is engineered and tested across desktop, tablet, and mobile. Responsive is not an afterthought — it's the default.
            </p>
          </div>
          <div className="flex flex-col items-end justify-center gap-4 md:flex-row md:items-end">
            <motion.div
              initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="w-full md:w-[55%]"
            >
              <div className="rounded-t-xl border border-border bg-card p-1.5 shadow-2xl">
                <div className="flex items-center gap-1.5 rounded-t-lg border-b border-border bg-muted/40 px-3 py-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
                  <div className="mx-auto rounded-md border border-border bg-background px-8 py-0.5 font-mono text-[9px] text-muted-foreground">
                    globestack.io/portfolio
                  </div>
                </div>
                <img src={PROJECT_IMAGES["northwind-saas"]} alt="Desktop" className="h-48 w-full rounded-b-sm object-cover" />
              </div>
              <div className="mt-2 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
                <Monitor className="h-3.5 w-3.5" /> Desktop
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
              className="w-full md:w-[28%]"
            >
              <div className="rounded-xl border-[3px] border-border bg-card p-1 shadow-xl">
                <img src={PROJECT_IMAGES["lumen-shopify"]} alt="Tablet" className="h-44 w-full rounded-lg object-cover" />
                <div className="py-1.5 text-center"><div className="mx-auto h-1 w-6 rounded-full bg-border" /></div>
              </div>
              <div className="mt-2 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
                <Tablet className="h-3.5 w-3.5" /> Tablet
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full md:w-[16%]"
            >
              <div className="rounded-[2rem] border-[4px] border-border bg-card p-1.5 shadow-xl">
                <div className="mb-1 flex justify-center"><div className="h-1.5 w-10 rounded-full bg-border" /></div>
                <img src={PROJECT_IMAGES["atlas-ai"]} alt="Mobile" className="h-40 w-full rounded-[1.5rem] object-cover" />
                <div className="mt-1 flex justify-center"><div className="h-4 w-4 rounded-full border border-border" /></div>
              </div>
              <div className="mt-2 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
                <Smartphone className="h-3.5 w-3.5" /> Mobile
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border px-4 py-24 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">FAQ</p>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
            Frequently asked <span className="text-gradient">questions.</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground">Everything you need to know before reaching out.</p>
        </div>
        <div className="mx-auto mt-12 max-w-3xl divide-y divide-border rounded-2xl border border-border bg-card">
          {PORTFOLIO_FAQ.map((f, i) => (
            <button
              key={f.q}
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
              className="w-full px-6 py-5 text-left transition hover:bg-muted/30"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="font-medium">{f.q}</span>
                {openFaq === i
                  ? <Minus className="h-4 w-4 shrink-0 text-muted-foreground" />
                  : <Plus className="h-4 w-4 shrink-0 text-muted-foreground" />}
              </div>
              <AnimatePresence>
                {openFaq === i && (
                  <motion.p
                    key="ans"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.22 }}
                    className="mt-3 overflow-hidden text-left text-sm leading-relaxed text-muted-foreground"
                  >
                    {f.a}
                  </motion.p>
                )}
              </AnimatePresence>
            </button>
          ))}
        </div>
      </section>

      <CTA
        title="Ready to build something you're proud of?"
        desc="Tell us about your project — we'll send a scoped proposal within one business day."
      />

      {/*
        Outlet renders the modal when navigating to /portfolio/$slug.
        When `state.modal` is true the child route renders as an overlay
        instead of replacing this page. Wire this up in your router layout
        so that the /portfolio route keeps its content visible while the
        $slug child is active.
      */}
      <Outlet />
    </>
  );
}