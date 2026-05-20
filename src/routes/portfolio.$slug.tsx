import {
  createFileRoute,
  Link,
  notFound,
  useNavigate,
  useRouterState,
} from "@tanstack/react-router";
import { useState, useEffect, useCallback, useRef } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  Github,
  Figma,
  X,
  ChevronLeft,
  ChevronRight,
  Check,
  FileText,
  Maximize2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PageHero, Section, CTA } from "@/components/section";
import { PROJECTS, PROJECT_IMAGES } from "@/lib/content";
import { SERVICES } from "@/lib/site";
import { seo, jsonLdScript, breadcrumbJsonLd, abs } from "@/lib/seo";

// TanStack Router's `state` prop is typed against HistoryState.
// Cast through `unknown` to store arbitrary modal metadata without
// requiring a global HistoryState module augmentation.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const modalState = { modal: true } as any;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const plainState = {} as any;

export const Route = createFileRoute("/portfolio/$slug")({
  head: ({ params }) => {
    const p = PROJECTS.find((x) => x.slug === params.slug);
    if (!p)
      return seo({
        title: "Project — Globe Stack",
        description: "Project case.",
        path: `/portfolio/${params.slug}`,
      });
    const base = seo({
      title: `${p.title} — Portfolio — Globe Stack`,
      description: p.desc,
      path: `/portfolio/${p.slug}`,
    });
    const workLd = {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: p.title,
      description: p.desc,
      url: abs(`/portfolio/${p.slug}`),
      keywords: p.tech.join(", "),
      ...(p.client ? { creator: { "@type": "Organization", name: p.client } } : {}),
      ...(p.year ? { datePublished: p.year } : {}),
    };
    const crumbs = breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Portfolio", path: "/portfolio" },
      { name: p.title, path: `/portfolio/${p.slug}` },
    ]);
    return { ...base, scripts: [jsonLdScript(workLd), jsonLdScript(crumbs)] };
  },
  loader: ({ params }) => {
    const project = PROJECTS.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  component: ProjectPage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-4 py-32 text-center">
      <h1 className="text-4xl font-bold">Project not found</h1>
      <Link
        to="/portfolio"
        className="mt-6 inline-flex rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground"
      >
        All projects
      </Link>
    </div>
  ),
});

// ─── Static copy helpers ────────────────────────────────────────────────────

function getProjectOverview(slug: string): string {
  const map: Record<string, string> = {
    "northwind-saas":
      "Northwind Logistics needed a B2B analytics platform that could ingest live shipment data and surface actionable dashboards for their operations team. The legacy reporting stack was a patchwork of Excel exports and a 5-year-old BI tool that couldn't keep up with real-time demand. We rebuilt from scratch on TanStack Start with Supabase Realtime, delivering sub-second dashboard updates and a 62% reduction in page load times.",
    "lumen-shopify":
      "Lumen's theme-based Shopify store had hit its ceiling. A 4.2s mobile LCP and a PDP that hadn't been touched in two years were costing them sales every day, especially during peak season. We moved them to Shopify Hydrogen with Sanity CMS, rebuilt every above-the-fold element with CRO intent, and shipped a testing program that lifted conversion 38% in the first 60 days.",
    "atlas-ai":
      "Atlas Finance's support team was handling 12,000 tickets a month — 60% of them repetitive questions that any well-trained system could answer. We scoped, built, and shipped a RAG copilot trained on their internal docs and historical ticket resolutions. It lives in-app and as an agent-assist layer, reducing first-response time to under 5 seconds and cutting ticket volume 47%.",
    "orbit-ads":
      "Orbit Apparel had proved their unit economics at $40k/mo in ad spend and wanted to scale to $400k — without watching ROAS collapse. We built a full-funnel media plan across Meta, Google, and TikTok, paired with a weekly creative production pipeline and an MMM-backed attribution setup that gave them real signal beyond platform-reported numbers.",
    "vector-seo":
      "Vector Tools had a great developer product and near-zero organic presence. All traffic was brand-only. We built a topical authority engine: keyword universe mapping, pillar + cluster content produced by senior dev writers, technical SEO fixes, and a digital PR campaign that earned 40+ quality backlinks in the first 4 months.",
    "pulse-social":
      "Pulse Health's founder had a compelling story but zero time to tell it. We productized their insights into a founder-led content engine — one hour of their time per week turned into 20+ pieces of content across LinkedIn, TikTok, and X. In 12 months they went from 3k to 200k followers and generated $2M+ in inbound pipeline.",
  };
  return (
    map[slug] ??
    "A senior-led engagement built on clear goals, tight sprints, and measurable outcomes. We owned the project end-to-end — from discovery through launch and post-launch optimization."
  );
}

function getProjectChallenge(slug: string): string {
  const map: Record<string, string> = {
    "northwind-saas": "Legacy BI tooling with no real-time capability, a team of 40 relying on stale CSV exports, and a codebase that couldn't be extended without breaking something.",
    "lumen-shopify": "Mobile LCP above 4.2s, conversion rate stuck at 1.4%, and a merchandising team blocked from shipping landing pages without a developer.",
    "atlas-ai": "12,000 monthly tickets, 60% repetitive, an offshore team scaling linearly with growth, and no way to measure answer quality before shipping to users.",
    "orbit-ads": "Creative fatigue after 18 months on one platform, attribution completely broken post-iOS 17, and no clear path to 10x spend without destroying ROAS.",
    "vector-seo": "Brand-only organic traffic, zero rankings on money keywords, and a fragmented content stack spread across three tools with no workflow.",
    "pulse-social": "Inconsistent posting, generic content that got no engagement, and a founder spending 8+ hours a week on social with nothing to show for it.",
  };
  return map[slug] ?? "Complex constraints, ambitious goals, and a need for a team that could own the outcome — not just the deliverable.";
}

function getProjectFeatures(slug: string): string[] {
  const map: Record<string, string[]> = {
    "northwind-saas": [
      "Real-time shipment tracking dashboard",
      "Custom KPI builder with drag-and-drop widgets",
      "Role-based access control (RBAC)",
      "CSV / API data ingestion pipeline",
      "Supabase Realtime websocket integration",
      "Automated anomaly detection alerts",
      "Multi-tenant workspace support",
      "Exportable PDF / CSV reports",
    ],
    "lumen-shopify": [
      "Headless Shopify Hydrogen storefront",
      "Sanity CMS for non-dev merchandising",
      "Sub-2s mobile LCP via edge caching",
      "A/B testing infrastructure (Optimizely)",
      "Custom PDP with variant swatches & size guide",
      "Loyalty & referral program integration",
      "Automated stock-low urgency nudges",
      "One-click upsell flow on checkout",
    ],
    "atlas-ai": [
      "RAG pipeline on internal knowledge base",
      "GPT-4o agent with function calling",
      "In-app floating chat widget",
      "Agent-assist layer for human agents",
      "Automated ticket triage & tagging",
      "Confidence scoring with escalation logic",
      "GDPR-compliant conversation storage",
      "Admin analytics dashboard",
    ],
    "orbit-ads": [
      "Full-funnel Meta + Google + TikTok setup",
      "Weekly creative production pipeline",
      "MMM-backed attribution modelling",
      "Dynamic product ads with catalog segmentation",
      "Lookalike audience architecture",
      "Incrementality testing framework",
      "Automated budget pacing rules",
      "Weekly performance reporting suite",
    ],
    "vector-seo": [
      "Keyword universe mapping (5,000+ terms)",
      "Pillar + cluster content architecture",
      "Technical SEO audit & remediation",
      "Core Web Vitals optimisation",
      "Schema markup implementation",
      "Digital PR & link acquisition campaign",
      "Content calendar & editorial workflow",
      "Monthly rank tracking dashboards",
    ],
    "pulse-social": [
      "Founder content strategy & positioning",
      "Weekly long-form LinkedIn posts",
      "Short-form TikTok & Reels repurposing",
      "X/Twitter thread engine",
      "1-hour/week interview-based capture process",
      "Content performance analytics",
      "Community engagement playbook",
      "Inbound pipeline attribution reporting",
    ],
  };
  return map[slug] ?? [
    "Discovery & strategy sprint",
    "UX wireframing & design system",
    "Full-stack engineering & QA",
    "Performance optimisation",
    "Post-launch monitoring & support",
  ];
}

// ─── Image Gallery ───────────────────────────────────────────────────────────

interface GalleryProps {
  images: string[];
  title: string;
}

function ImageGallery({ images, title }: GalleryProps) {
  const [idx, setIdx] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  const prev = useCallback(
    () => setIdx((i) => (i - 1 + images.length) % images.length),
    [images.length],
  );
  const next = useCallback(
    () => setIdx((i) => (i + 1) % images.length),
    [images.length],
  );

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") setLightbox(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [prev, next]);

  // Swipe support via framer-motion drag
  const handleDragEnd = (_: unknown, info: { offset: { x: number } }) => {
    if (info.offset.x < -60) next();
    if (info.offset.x > 60) prev();
  };

  return (
    <>
      {/* Main viewer */}
      <div className="relative overflow-hidden rounded-2xl border border-glow bg-black shadow-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            onDragEnd={handleDragEnd}
            className="cursor-grab active:cursor-grabbing"
          >
            <img
              src={images[idx]}
              alt={`${title} — screenshot ${idx + 1} of ${images.length}`}
              className="h-[320px] w-full object-cover md:h-[460px]"
              draggable={false}
            />
          </motion.div>
        </AnimatePresence>

        {/* Gradient overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        {/* Expand button */}
        <button
          onClick={() => setLightbox(true)}
          aria-label="Open fullscreen"
          className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur transition hover:bg-black/70"
        >
          <Maximize2 className="h-4 w-4" />
        </button>

        {/* Counter badge */}
        <div className="absolute bottom-4 right-4 rounded-full border border-white/20 bg-black/50 px-3 py-1 font-mono text-[11px] text-white backdrop-blur">
          {idx + 1} / {images.length}
        </div>

        {/* Arrow nav */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur transition hover:bg-black/70"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur transition hover:bg-black/70"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}

        {/* Dot indicators */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Go to image ${i + 1}`}
                className={`rounded-full transition-all ${
                  i === idx ? "h-2 w-6 bg-white" : "h-2 w-2 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Thumbnail strip */}
      {images.length > 1 && (
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                i === idx
                  ? "border-[var(--neon)] opacity-100 shadow-[0_0_12px_var(--neon)]"
                  : "border-border opacity-50 hover:opacity-80"
              }`}
            >
              <img src={src} alt={`Thumbnail ${i + 1}`} className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
            onClick={() => setLightbox(false)}
          >
            <button
              onClick={() => setLightbox(false)}
              className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20"
              aria-label="Close lightbox"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.img
              key={idx}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.25 }}
              src={images[idx]}
              alt={`${title} — fullscreen`}
              className="max-h-[90vh] max-w-[90vw] rounded-xl object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); prev(); }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); next(); }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}
            <div className="absolute bottom-6 font-mono text-sm text-white/50">
              {idx + 1} / {images.length} — press ← → to navigate, Esc to close
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ─── Modal wrapper ────────────────────────────────────────────────────────────

interface ProjectModalProps {
  project: (typeof PROJECTS)[number];
  onClose: () => void;
}

function ProjectModal({ project, onClose }: ProjectModalProps) {
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);
  const service = SERVICES.find((s) => s.slug === project.serviceSlug);
  const images = project.images ?? [PROJECT_IMAGES[project.slug]];
  const related = PROJECTS.filter((p) => p.slug !== project.slug).slice(0, 3);
  const features = getProjectFeatures(project.slug);

  // Lock body scroll while modal is open
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, []);

  // Keyboard: Escape closes
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const goFullPage = () => {
    navigate({ to: "/portfolio/$slug", params: { slug: project.slug }, state: {} });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} project preview`}
    >
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Panel */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.97 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex h-[95dvh] w-full max-w-4xl flex-col overflow-hidden rounded-t-3xl border border-border bg-background sm:h-[90vh] sm:rounded-3xl"
      >
        {/* ── Top bar ── */}
        <div className="flex shrink-0 items-center justify-between border-b border-border px-5 py-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              {project.category}
            </span>
            {project.year && (
              <span className="rounded-md border border-border bg-muted/50 px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                {project.year}
              </span>
            )}
            {project.live && (
              <span className="flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-medium text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={goFullPage}
              className="hidden items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs font-medium transition hover:bg-muted sm:flex"
            >
              <Maximize2 className="h-3.5 w-3.5" /> Full page
            </button>
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="grid h-8 w-8 place-items-center rounded-full border border-border bg-muted/50 text-muted-foreground transition hover:bg-muted hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* ── Scrollable body ── */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto overscroll-contain">
          <div className="px-5 pb-10 pt-6 md:px-8">

            {/* Title + CTAs */}
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="font-display text-2xl font-bold leading-tight md:text-3xl">
                  {project.title}
                </h2>
                {project.client && (
                  <p className="mt-1 text-sm text-muted-foreground">
                    {project.client}
                  </p>
                )}
              </div>
              <div className="flex shrink-0 flex-wrap gap-2">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
                  >
                    <ExternalLink className="h-3.5 w-3.5" /> Live site
                  </a>
                )}
                <Link
                  to="/portfolio/$slug"
                  params={{ slug: project.slug }}
                  state={plainState}
                  className="inline-flex items-center gap-1.5 rounded-md border border-border px-4 py-2 text-sm font-medium transition hover:bg-muted"
                >
                  <FileText className="h-3.5 w-3.5" /> Case study
                </Link>
              </div>
            </div>

            {/* ── Image Gallery ── */}
            <ImageGallery images={images} title={project.title} />



            {/* ── Overview ── */}
            <div className="mt-8">
              <h3 className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Overview
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {getProjectOverview(project.slug)}
              </p>
              <div className="mt-4 rounded-xl border border-border bg-card/60 p-4">
                <h4 className="mb-1.5 text-sm font-semibold">The challenge</h4>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {getProjectChallenge(project.slug)}
                </p>
              </div>
            </div>

            {/* ── Features Built ── */}
            <div className="mt-8">
              <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Features built
              </h3>
              <div className="grid gap-2 sm:grid-cols-2">
                {features.map((f) => (
                  <div
                    key={f}
                    className="flex items-start gap-2.5 rounded-lg border border-border bg-card/50 px-3.5 py-3 text-sm"
                  >
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[var(--neon)]/15">
                      <Check className="h-2.5 w-2.5 text-[var(--neon)]" />
                    </span>
                    {f}
                  </div>
                ))}
              </div>
            </div>

            {/* ── Tech Stack ── */}
            <div className="mt-8">
              <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Tech stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="flex items-center gap-1.5 rounded-md border border-border bg-card px-3 py-1.5 font-mono text-xs transition hover:border-glow"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--neon)]" />
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* ── Meta row ── */}
            <div className="mt-8 flex flex-wrap gap-2">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs transition hover:bg-muted"
                >
                  <ExternalLink className="h-3 w-3" /> Live site
                </a>
              )}
              <a
                href="#"
                className="flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs transition hover:bg-muted"
              >
                <Github className="h-3 w-3" /> Repo
              </a>
              <a
                href="#"
                className="flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs transition hover:bg-muted"
              >
                <Figma className="h-3 w-3" /> Design
              </a>
              {service && (
                <Link
                  to="/services/$slug"
                  params={{ slug: service.slug }}
                  className="flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs font-medium text-gradient transition hover:bg-muted"
                >
                  <ArrowUpRight className="h-3 w-3" /> {service.title}
                </Link>
              )}
            </div>

            {/* ── Related Projects ── */}
            <div className="mt-10">
              <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Related projects
              </h3>
              <div className="grid gap-3 sm:grid-cols-3">
                {related.map((p, i) => (
                  <motion.div
                    key={p.slug}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.07 + 0.15 }}
                    whileHover={{ y: -4 }}
                  >
                    <Link
                      to="/portfolio/$slug"
                      params={{ slug: p.slug }}
                      state={modalState}
                      className="group block overflow-hidden rounded-xl border border-border bg-card transition hover:border-glow"
                    >
                      <div className="relative h-28 overflow-hidden">
                        <img
                          src={PROJECT_IMAGES[p.slug]}
                          alt={p.title}
                          className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                        <div className="absolute right-2 top-2 grid h-7 w-7 place-items-center rounded-full bg-white/90 text-black opacity-0 transition group-hover:opacity-100">
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </div>
                        <div className="absolute bottom-2 left-2 rounded-full border border-white/20 bg-black/40 px-2 py-0.5 font-mono text-[9px] text-white backdrop-blur">
                          {p.tag}
                        </div>
                      </div>
                      <div className="p-3">
                        <div className="font-mono text-[10px] text-muted-foreground">{p.category}</div>
                        <h4 className="mt-0.5 text-sm font-semibold leading-snug">{p.title}</h4>
                        <div className="mt-2 flex flex-wrap gap-1">
                          {p.tech.slice(0, 2).map((t) => (
                            <span
                              key={t}
                              className="rounded border border-border bg-muted/50 px-1.5 py-0.5 font-mono text-[9px] text-muted-foreground"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ── Bottom CTA ── */}
            <div className="mt-10 rounded-2xl border border-glow bg-card/60 p-6 text-center">
              <h3 className="font-display text-xl font-bold">
                Like what you see?
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Tell us about your project and we'll scope it within one business day.
              </p>
              <div className="mt-5 flex flex-wrap justify-center gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
                >
                  Start your project <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/portfolio/$slug"
                  params={{ slug: project.slug }}
                  state={plainState}
                  className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium transition hover:bg-muted"
                >
                  Full case study <FileText className="h-4 w-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Route component — modal vs full page ────────────────────────────────────

function ProjectPage() {
  const { project } = Route.useLoaderData() as {
    project: (typeof PROJECTS)[number];
  };
  const navigate = useNavigate();
  const routerState = useRouterState();

  // Detect modal mode: Link passes `state.modal = true` from the portfolio grid
  const isModal = ((routerState.location.state as unknown) as Record<string, unknown> | null)?.modal === true;

  const handleClose = () => {
    navigate({ to: "/portfolio" });
  };

  // ── Modal mode ──────────────────────────────────────────────────────────────
  if (isModal) {
    return (
      <AnimatePresence>
        <ProjectModal project={project} onClose={handleClose} />
      </AnimatePresence>
    );
  }

  // ── Full-page mode (direct URL visit or "Full page" / "Case study" click) ──
  const service = SERVICES.find((s) => s.slug === project.serviceSlug);
  const more = PROJECTS.filter((p) => p.slug !== project.slug).slice(0, 3);
  const images = project.images ?? [PROJECT_IMAGES[project.slug]];

  return (
    <>
      {/* ── Hero ── */}
      <PageHero
        image={PROJECT_IMAGES[project.slug]}
        eyebrow={project.category}
        title={<><span className="text-gradient">{project.title}</span></>}
        desc={project.desc}
      >
        <div className="flex flex-wrap items-center gap-3">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
            >
              Visit live site <ExternalLink className="h-4 w-4" />
            </a>
          )}
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10"
          >
            <ArrowLeft className="h-4 w-4" /> All projects
          </Link>
        </div>
      </PageHero>

      {/* ── Image gallery ── */}
      <div className="mx-auto max-w-5xl px-4 pt-12 md:px-6">
        <ImageGallery images={images} title={project.title} />
      </div>

      {/* ── Project overview & meta ── */}
      <Section eyebrow="Overview" title="About this project.">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-3">
          {/* Long copy */}
          <div className="space-y-5 text-pretty leading-relaxed text-muted-foreground md:col-span-2">
            <p>{getProjectOverview(project.slug)}</p>
            <div>
              <h4 className="mb-2 font-display text-base font-semibold text-foreground">
                The challenge
              </h4>
              <p>{getProjectChallenge(project.slug)}</p>
            </div>
          </div>

          {/* Meta sidebar */}
          <div className="rounded-2xl border border-border bg-card p-6 text-sm">
            <dl className="space-y-4">
              <div>
                <dt className="font-mono text-xs uppercase text-muted-foreground">Client</dt>
                <dd className="mt-1 font-medium">{project.client ?? "Confidential"}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase text-muted-foreground">Year</dt>
                <dd className="mt-1 font-medium">{project.year ?? "—"}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase text-muted-foreground">Category</dt>
                <dd className="mt-1 font-medium">{project.category}</dd>
              </div>
              {service && (
                <div>
                  <dt className="font-mono text-xs uppercase text-muted-foreground">Service</dt>
                  <dd className="mt-1">
                    <Link
                      to="/services/$slug"
                      params={{ slug: service.slug }}
                      className="font-medium text-gradient"
                    >
                      {service.title}
                    </Link>
                  </dd>
                </div>
              )}
              <div className="border-t border-border pt-4">
                <dt className="mb-2 font-mono text-xs uppercase text-muted-foreground">Links</dt>
                <div className="flex flex-wrap gap-2">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs hover:bg-muted"
                    >
                      <ExternalLink className="h-3 w-3" /> Live site
                    </a>
                  )}
                  <a href="#" className="flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs hover:bg-muted">
                    <Github className="h-3 w-3" /> Repo
                  </a>
                  <a href="#" className="flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs hover:bg-muted">
                    <Figma className="h-3 w-3" /> Design
                  </a>
                </div>
              </div>
            </dl>
          </div>
        </div>

        {/* Features Built */}
        <div className="mx-auto mt-12 max-w-5xl">
          <h3 className="mb-5 font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Features built
          </h3>
          <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
            {getProjectFeatures(project.slug).map((f) => (
              <div
                key={f}
                className="flex items-start gap-2.5 rounded-xl border border-border bg-card/60 px-4 py-3.5 text-sm"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--neon)]/15">
                  <Check className="h-3 w-3 text-[var(--neon)]" />
                </span>
                {f}
              </div>
            ))}
          </div>
        </div>

        {/* Tech stack */}
        <div className="mx-auto mt-10 max-w-5xl">
          <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Tech stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="flex items-center gap-1.5 rounded-md border border-border bg-card px-3 py-1.5 font-mono text-xs transition hover:border-glow"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--neon)]" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </Section>


      {/* ── More projects ── */}
      <Section eyebrow="More work" title="Keep exploring.">
        <div className="grid gap-5 md:grid-cols-3">
          {more.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              whileHover={{ y: -5 }}
            >
              <Link
                to="/portfolio/$slug"
                params={{ slug: p.slug }}
                state={modalState}
                className="group block overflow-hidden rounded-2xl border border-border bg-card transition hover:border-glow"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={PROJECT_IMAGES[p.slug]}
                    alt={p.title}
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-white/90 text-black backdrop-blur">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                  <div className="absolute bottom-3 left-3 rounded-full border border-white/20 bg-black/40 px-2 py-0.5 font-mono text-[10px] text-white backdrop-blur">
                    {p.tag}
                  </div>
                </div>
                <div className="p-5">
                  <div className="text-xs text-muted-foreground">{p.category}</div>
                  <h3 className="mt-1 font-display text-lg font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                  <div className="mt-3 flex flex-wrap gap-1">
                    {p.tech.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="rounded border border-border bg-muted/50 px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      <CTA />
    </>
  );
}