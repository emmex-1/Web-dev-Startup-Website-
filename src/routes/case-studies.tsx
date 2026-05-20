import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, X, ArrowLeft, CheckCircle2, Zap, BarChart3, Users, Quote, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { PageHero, CTA } from "@/components/section";
import { CASE_STUDIES, CASE_IMAGES, HERO_IMAGES } from "@/lib/content";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/case-studies")({
  head: () =>
    seo({
      title: "Case Studies — Globe Stack",
      description:
        "Real outcomes for real clients — deep-dive case studies from Globe Stack.",
      path: "/case-studies",
    }),
  component: CaseStudiesPage,
});

// ─── Extended data (supplements CASE_STUDIES from content.ts) ────────────────
const EXTENDED: Record<
  string,
  {
    goals: string[];
    research: { title: string; desc: string }[];
    design: { title: string; desc: string }[];
    development: { title: string; desc: string }[];
    challenges: { challenge: string; solution: string }[];
    tech: { category: string; items: string[] }[];
    testimonial: { quote: string; name: string; role: string; avatar: string };
    screenshots: { label: string; color: string }[];
  }
> = {
  "lumen-skincare-shopify": {
    goals: [
      "Reduce mobile LCP from 4.2s to under 1.5s",
      "Increase conversion rate by at least 20%",
      "Enable marketing team to ship landing pages without dev help",
      "Grow average order value through better merchandising",
    ],
    research: [
      {
        title: "Funnel Analysis",
        desc: "Identified 68% cart abandonment driven by slow PDP and confusing bundle selection UI via Hotjar session replays.",
      },
      {
        title: "Competitor Benchmark",
        desc: "Audited 7 DTC beauty competitors — found clear best-in-class patterns for social proof placement and urgency triggers.",
      },
      {
        title: "User Interviews",
        desc: "6 customer interviews revealed confusion around ingredient transparency and subscription terms, leading to copy overhaul.",
      },
    ],
    design: [
      {
        title: "Design System",
        desc: "Created a bespoke component library in Figma: 48-token spacing scale, 6-shade color ramps, and typographic hierarchy.",
      },
      {
        title: "PDP Redesign",
        desc: "Above-the-fold buying flow: hero image, star rating, key ingredient callouts, and a persistent sticky add-to-cart.",
      },
      {
        title: "CMS-driven Templates",
        desc: "Built 5 editorial collection templates in Sanity that the marketing team can assemble without writing code.",
      },
    ],
    development: [
      {
        title: "Shopify Hydrogen",
        desc: "Full Remix-based headless storefront with streaming SSR, edge caching on Cloudflare, and incremental product data hydration.",
      },
      {
        title: "Sanity CMS",
        desc: "Structured content with live preview, custom desk tools, and a GROQ API layer serving the storefront.",
      },
      {
        title: "Klaviyo Integration",
        desc: "Custom flow triggers for browse abandonment, post-purchase upsell, and subscription win-back sequences.",
      },
    ],
    challenges: [
      {
        challenge: "Shopify's storefront API rate limits caused checkout latency spikes during flash sales.",
        solution:
          "Implemented a server-side cart session cache with optimistic UI updates, eliminating visible latency and preventing rate-limit errors under 3k concurrent users.",
      },
      {
        challenge: "The Sanity CMS migration had to happen live with zero customer-facing downtime.",
        solution:
          "Built a dual-read bridge layer that served content from both the old theme and new Sanity simultaneously during the 2-week transition window.",
      },
    ],
    tech: [
      { category: "Frontend", items: ["Shopify Hydrogen", "React", "TypeScript", "Tailwind CSS"] },
      { category: "CMS & Content", items: ["Sanity", "GROQ", "Portable Text"] },
      { category: "Commerce", items: ["Shopify Plus", "Shopify Storefront API", "ReCharge Subscriptions"] },
      { category: "Marketing", items: ["Klaviyo", "Yotpo", "Triplewhale"] },
    ],
    testimonial: {
      quote:
        "Globe Stack rebuilt our Shopify store and our revenue 2.6x'd in 5 months. They feel like an in-house team — they pushed back when our ideas weren't optimal and always had data to back their decisions.",
      name: "Maya Chen",
      role: "CEO, Lumen Skincare",
      avatar: "MC",
    },
    screenshots: [
      { label: "Product Detail Page", color: "from-emerald-500/20 to-cyan-500/20" },
      { label: "Collection Grid", color: "from-cyan-500/20 to-teal-500/20" },
      { label: "Cart & Checkout", color: "from-teal-500/20 to-emerald-500/20" },
    ],
  },
  "atlas-ai-support-copilot": {
    goals: [
      "Deflect at least 40% of repetitive support tickets automatically",
      "Maintain CSAT score above 4.2 / 5 for AI-handled queries",
      "Provide agent-assist mode for complex queries",
      "Integrate into existing Intercom and Zendesk workflows",
    ],
    research: [
      {
        title: "Ticket Clustering",
        desc: "Used k-means clustering on 12k historical tickets — 62% fell into just 9 issue categories, making RAG a strong fit.",
      },
      {
        title: "Content Gap Analysis",
        desc: "Mapped existing help docs against the 9 categories. Found 3 major gaps that needed new content before any RAG pipeline could work.",
      },
      {
        title: "Agent Shadowing",
        desc: "Spent 4 hours shadowing support agents to understand edge cases and the emotional register needed for financial product queries.",
      },
    ],
    design: [
      {
        title: "Conversation Design",
        desc: "Wrote 60+ sample dialogues covering tone, escalation paths, and refusal patterns for regulated financial queries.",
      },
      {
        title: "Agent Assist UI",
        desc: "Designed a sidebar panel in Zendesk that surfaces the 3 most relevant knowledge snippets and a draft reply for agent review.",
      },
      {
        title: "Escalation UX",
        desc: "Designed seamless human handoff with full context transfer — agents see the entire AI conversation history on pickup.",
      },
    ],
    development: [
      {
        title: "RAG Pipeline",
        desc: "pgvector on Supabase with OpenAI text-embedding-3-large. Hybrid search combining dense vectors with BM25 keyword matching for higher recall.",
      },
      {
        title: "Eval Suite",
        desc: "400+ golden question-answer pairs used in CI/CD to catch regression. Automated RAGAS scoring on every deploy.",
      },
      {
        title: "Guardrails",
        desc: "Custom classifier for regulated financial advice — routes to human agent when confidence < 0.82 or query contains regulated terms.",
      },
    ],
    challenges: [
      {
        challenge: "Retrieval was hallucinating product terms from old, superseded documentation still in the corpus.",
        solution:
          "Built a document versioning layer with hard expiry dates. Added a reranker step using Cohere Rerank 3 to deprioritize stale content.",
      },
      {
        challenge: "Fintech compliance team required full auditability of every AI-generated response.",
        solution:
          "Implemented an immutable response log with citation tracking — every answer stores the exact source chunks used, queryable by compliance.",
      },
    ],
    tech: [
      { category: "AI & ML", items: ["OpenAI GPT-4o", "text-embedding-3-large", "Cohere Rerank 3", "LangChain"] },
      { category: "Database", items: ["Supabase", "pgvector", "PostgreSQL"] },
      { category: "Backend", items: ["Node.js", "TypeScript", "Hono"] },
      { category: "Integrations", items: ["Intercom", "Zendesk", "Slack Alerts"] },
    ],
    testimonial: {
      quote:
        "Their AI team shipped a production RAG copilot in 8 weeks. Support tickets dropped 47%. The eval suite they built caught 3 major regressions before they ever touched production. Insane quality.",
      name: "Daniel Park",
      role: "VP Engineering, Atlas Finance",
      avatar: "DP",
    },
    screenshots: [
      { label: "In-app Copilot Widget", color: "from-violet-500/20 to-fuchsia-500/20" },
      { label: "Agent Assist Panel", color: "from-fuchsia-500/20 to-purple-500/20" },
      { label: "Analytics Dashboard", color: "from-purple-500/20 to-violet-500/20" },
    ],
  },
  "vector-seo-organic-growth": {
    goals: [
      "Rank in top 3 for 100+ high-intent developer keywords",
      "Drive at least $50k MRR attributable to organic search",
      "Build domain authority from DR 22 to DR 40+",
      "Establish Vector as the go-to resource for the CLI tooling category",
    ],
    research: [
      {
        title: "Keyword Universe",
        desc: "Mapped 2,400 keywords across 6 topic clusters. Prioritized by traffic × conversion intent × difficulty score.",
      },
      {
        title: "SERP Analysis",
        desc: "Analysed top 10 results for 80 target keywords — identified a structural gap: most competitors had shallow, listicle-style content.",
      },
      {
        title: "Backlink Profile Audit",
        desc: "Vector had 40 referring domains, nearly all brand mentions. Zero editorial links from dev publications or open source projects.",
      },
    ],
    design: [
      {
        title: "Site Architecture",
        desc: "Designed a hub-and-spoke IA: 6 pillar pages, each supporting 8–12 cluster articles organized by use-case, not feature.",
      },
      {
        title: "Content Templates",
        desc: "Built 3 editorial templates (tutorial, comparison, glossary) optimised for featured snippets and SGE AI summaries.",
      },
      {
        title: "Webflow Migration",
        desc: "Redesigned the blog with performance and structured data as primary requirements — every post gets Article + HowTo schema.",
      },
    ],
    development: [
      {
        title: "Technical SEO Fixes",
        desc: "Resolved 140+ crawl errors, implemented hreflang for 4 locales, fixed canonical duplication across tag + category pages.",
      },
      {
        title: "Core Web Vitals",
        desc: "Moved all images to WebP with LQIP blur-up, eliminated render-blocking JS, achieved LCP < 1.8s across all key landing pages.",
      },
      {
        title: "Schema Markup",
        desc: "Automated JSON-LD generation for Article, FAQPage, and HowTo types — driven by Webflow CMS fields.",
      },
    ],
    challenges: [
      {
        challenge: "Developer audience was skeptical of SEO-optimised content — early articles felt too shallow and hurt credibility.",
        solution:
          "Brought in two senior engineers as writers, creating deeply technical tutorials (avg. 3,200 words) that ranked AND earned developer respect.",
      },
      {
        challenge: "Google algorithm update in month 4 wiped out 30% of early ranking gains.",
        solution:
          "Pivoted content strategy to focus on proprietary data and original benchmarks — content Google can't find elsewhere recovered rankings within 6 weeks.",
      },
    ],
    tech: [
      { category: "Technical SEO", items: ["Screaming Frog", "Ahrefs", "Google Search Console", "Semrush"] },
      { category: "CMS & Site", items: ["Webflow", "Finsweet Attributes", "Cloudflare"] },
      { category: "Content Ops", items: ["Notion", "Surfer SEO", "Clearscope"] },
      { category: "Analytics", items: ["GA4", "Heap", "Looker Studio"] },
    ],
    testimonial: {
      quote:
        "We went from invisible to ranking #1 on our money keywords. Globe Stack's process is unreal — they treated SEO like a product, not a service. Data-driven decisions at every step.",
      name: "Priya Sharma",
      role: "Founder, Vector Tools",
      avatar: "PS",
    },
    screenshots: [
      { label: "Pillar Page Layout", color: "from-cyan-500/20 to-blue-500/20" },
      { label: "Cluster Article", color: "from-blue-500/20 to-indigo-500/20" },
      { label: "Analytics Dashboard", color: "from-indigo-500/20 to-cyan-500/20" },
    ],
  },
  "orbit-ads-roas": {
    goals: [
      "Scale monthly ad spend from $40k to $400k without ROAS decay",
      "Build a repeatable creative production pipeline",
      "Reduce customer acquisition cost by 25%+",
      "Achieve true cross-platform attribution to guide budget allocation",
    ],
    research: [
      {
        title: "Account Teardown",
        desc: "Found $12k/mo in wasted spend: broad match cannibalization, overlapping audiences, and 40+ zombie ad sets with no conversion in 90 days.",
      },
      {
        title: "Creative Audit",
        desc: "Analysed 180 historical creatives — 3 hooks drove 71% of all conversions. Entire creative strategy rebuilt around these archetypes.",
      },
      {
        title: "Attribution Modelling",
        desc: "Built a data-driven MMM model in BigQuery to understand true platform contribution — Meta was getting 40% over-attributed.",
      },
    ],
    design: [
      {
        title: "Creative System",
        desc: "Designed a modular creative framework: 3 core hooks × 4 formats × 2 audiences = 24 testable variants per sprint.",
      },
      {
        title: "Landing Page Programme",
        desc: "Built 12 performance landing pages with CRO-focused design — each matched to specific ad creative and audience segment.",
      },
      {
        title: "Reporting Dashboard",
        desc: "Custom Looker Studio dashboard blending Meta, Google, and TikTok data with MMM-adjusted ROAS by channel and creative.",
      },
    ],
    development: [
      {
        title: "Campaign Architecture",
        desc: "Rebuilt Meta structure to Advantage+ Shopping Campaigns with CBO, consolidating 80 ad sets into 12 high-signal campaigns.",
      },
      {
        title: "BigQuery Data Pipeline",
        desc: "Automated ETL pulling from Meta, Google, and TikTok APIs into BigQuery for daily MMM model updates.",
      },
      {
        title: "Creative Automation",
        desc: "Used Meta's Dynamic Creative Optimization with 6 headlines, 6 bodies, and 8 creative assets — machine-tested at scale.",
      },
    ],
    challenges: [
      {
        challenge: "Creative fatigue hit hard at $100k+/mo — winning ads burned out within 2–3 weeks.",
        solution:
          "Built a UGC creator network of 14 micro-influencers on monthly retainer, delivering 12 raw assets/week to sustain creative velocity.",
      },
      {
        challenge: "iOS privacy changes made Facebook's reported ROAS 35% higher than actual due to modelled conversions.",
        solution:
          "Implemented server-side Conversions API with first-party data matching, restoring signal quality and bringing reported vs actual ROAS within 8%.",
      },
    ],
    tech: [
      { category: "Paid Media", items: ["Meta Ads", "Google Ads", "TikTok Ads", "Pinterest Ads"] },
      { category: "Analytics", items: ["GA4", "BigQuery", "Looker Studio", "Northbeam"] },
      { category: "Creative", items: ["CapCut", "Adobe Premiere", "Figma", "Canva Teams"] },
      { category: "Attribution", items: ["Meta CAPI", "Google Enhanced Conversions", "Triplewhale"] },
    ],
    testimonial: {
      quote:
        "Best ad agency we've worked with — and we've worked with five. 4.2 ROAS at $400k/mo is something we thought was impossible at our stage. Globe Stack proved us wrong every single month.",
      name: "Marcus Webb",
      role: "CMO, Orbit Apparel",
      avatar: "MW",
    },
    screenshots: [
      { label: "Performance Dashboard", color: "from-orange-500/20 to-rose-500/20" },
      { label: "Creative Matrix", color: "from-rose-500/20 to-red-500/20" },
      { label: "Attribution Model", color: "from-red-500/20 to-orange-500/20" },
    ],
  },
};

// ─── Modal Component ──────────────────────────────────────────────────────────
function CaseStudyModal({
  study,
  onClose,
}: {
  study: (typeof CASE_STUDIES)[number];
  onClose: () => void;
}) {
  const ext = EXTENDED[study.slug];

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-end justify-center sm:items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Sheet */}
      <motion.div
        className="relative z-10 flex h-[95vh] w-full max-w-5xl flex-col overflow-hidden rounded-t-3xl bg-background sm:rounded-3xl sm:h-[92vh] border border-border"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", damping: 28, stiffness: 260 }}
      >
        {/* Fixed Header */}
        <div className="flex-none border-b border-border bg-background/95 backdrop-blur px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="rounded-full border border-glow bg-card px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-gradient">
              {study.result}
            </span>
            <span className="hidden sm:block text-sm text-muted-foreground">
              {study.client} · {study.industry} · {study.duration}
            </span>
          </div>
          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition hover:bg-muted hover:text-foreground"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          {/* Hero Banner */}
          <div className="relative h-64 md:h-80 overflow-hidden">
            <img
              src={CASE_IMAGES[study.slug]}
              alt={study.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <div className="font-mono text-xs uppercase tracking-wider text-white/60 mb-2">
                {study.client} · {study.industry}
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-white leading-tight max-w-2xl">
                {study.title}
              </h2>
              <p className="mt-2 text-white/70 text-sm max-w-xl leading-relaxed">
                {study.overview}
              </p>
            </div>
          </div>

          {/* Key Metrics Bar */}
          <div className={`grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-border border-b border-border bg-gradient-to-r ${study.color}`}>
            {study.results.map((r) => (
              <div key={r.label} className="p-5 text-center">
                <div className="font-display text-3xl font-bold text-gradient">{r.value}</div>
                <div className="mt-1 text-xs text-muted-foreground">{r.label}</div>
              </div>
            ))}
          </div>

          <div className="p-6 md:p-8 space-y-12">

            {/* Problem Statement */}
            <section>
              <SectionLabel icon={<Zap className="h-4 w-4" />} label="Problem Statement" />
              <div className="mt-4 rounded-2xl border border-border bg-card p-6 md:p-8">
                <h3 className="font-display text-xl font-semibold mb-3">What was holding them back</h3>
                <p className="text-muted-foreground leading-relaxed">{study.problem}</p>
              </div>
            </section>

            {/* Goals */}
            <section>
              <SectionLabel icon={<CheckCircle2 className="h-4 w-4" />} label="Goals & Objectives" />
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {ext?.goals.map((g, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
                  >
                    <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gradient-to-br from-primary/30 to-primary/10 font-mono text-[10px] text-gradient font-bold">
                      {i + 1}
                    </span>
                    <span className="text-sm leading-relaxed">{g}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Research & Discovery */}
            <section>
              <SectionLabel icon={<BarChart3 className="h-4 w-4" />} label="Research & Discovery" />
              <div className="mt-4 grid gap-4 md:grid-cols-3">
                {ext?.research.map((r) => (
                  <div key={r.title} className="rounded-2xl border border-border bg-card p-5">
                    <div className="font-semibold text-sm mb-2">{r.title}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Design Process */}
            <section>
              <SectionLabel icon={<BarChart3 className="h-4 w-4" />} label="Design Process" />
              <div className="mt-4 grid gap-4 md:grid-cols-3">
                {ext?.design.map((d) => (
                  <div key={d.title} className="rounded-2xl border border-glow/50 bg-card p-5">
                    <div className="font-semibold text-sm mb-2 text-gradient">{d.title}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Build Process */}
            <section>
              <SectionLabel icon={<Zap className="h-4 w-4" />} label="Process" />
              <div className="mt-4 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
                {study.process.map((p) => (
                  <div key={p.step} className="rounded-2xl border border-border bg-card p-5">
                    <div className="font-mono text-xs text-gradient mb-2">{p.step}</div>
                    <h4 className="font-semibold mb-1">{p.title}</h4>
                    <p className="text-sm text-muted-foreground">{p.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Development */}
            <section>
              <SectionLabel icon={<BarChart3 className="h-4 w-4" />} label="Development Process" />
              <div className="mt-4 grid gap-4 md:grid-cols-3">
                {ext?.development.map((d) => (
                  <div key={d.title} className="rounded-2xl border border-border bg-card p-5">
                    <div className="font-semibold text-sm mb-2">{d.title}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Challenges & Solutions */}
            <section>
              <SectionLabel icon={<Zap className="h-4 w-4" />} label="Challenges & Solutions" />
              <div className="mt-4 space-y-4">
                {ext?.challenges.map((c, i) => (
                  <div key={i} className="rounded-2xl border border-border bg-card overflow-hidden">
                    <div className="p-5 md:p-6 border-b border-border">
                      <div className="font-mono text-[10px] uppercase text-rose-400 mb-2 tracking-wider">Challenge</div>
                      <p className="text-sm leading-relaxed">{c.challenge}</p>
                    </div>
                    <div className="p-5 md:p-6">
                      <div className="font-mono text-[10px] uppercase text-gradient mb-2 tracking-wider">Solution</div>
                      <p className="text-sm leading-relaxed text-muted-foreground">{c.solution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Screenshots */}
            <section>
              <SectionLabel icon={<BarChart3 className="h-4 w-4" />} label="From the Build" />
              <div className="mt-4 grid gap-4 md:grid-cols-3">
                {ext?.screenshots.map((s) => (
                  <div
                    key={s.label}
                    className={`relative h-44 overflow-hidden rounded-2xl border border-border bg-gradient-to-br ${s.color}`}
                  >
                    <div className="absolute inset-0 bg-grid opacity-20" />
                    <div className="absolute bottom-3 left-3 rounded-full border border-glow bg-background/60 px-2 py-0.5 font-mono text-[10px] uppercase backdrop-blur">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Tech Stack */}
            <section>
              <SectionLabel icon={<Zap className="h-4 w-4" />} label="Tech Stack" />
              <div className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
                {ext?.tech.map((t) => (
                  <div key={t.category} className="rounded-2xl border border-border bg-card p-5">
                    <div className="font-mono text-[10px] uppercase text-muted-foreground mb-3 tracking-wider">
                      {t.category}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {t.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-md bg-muted px-2 py-1 text-xs font-medium"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Testimonial */}
            <section>
              <SectionLabel icon={<Users className="h-4 w-4" />} label="Client Testimonial" />
              <div className={`mt-4 rounded-2xl border border-glow bg-gradient-to-br ${study.color} p-6 md:p-8`}>
                <Quote className="h-8 w-8 text-foreground/20 mb-4" />
                <p className="text-lg md:text-xl leading-relaxed font-medium">
                  {ext?.testimonial.quote}
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary/40 to-primary/20 font-mono text-xs font-bold text-gradient border border-glow">
                    {ext?.testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{ext?.testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{ext?.testimonial.role}</div>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="rounded-3xl border border-glow bg-card p-8 md:p-10 text-center">
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">
                Want similar results?
              </h3>
              <p className="text-muted-foreground max-w-md mx-auto mb-6">
                Let's talk about your project. Discovery calls are free, and we come prepared.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:opacity-90"
                  onClick={onClose}
                >
                  Book a discovery call
                  <ExternalLink className="h-4 w-4" />
                </Link>
                <button
                  onClick={onClose}
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition hover:bg-muted"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to case studies
                </button>
              </div>
            </section>

            <div className="h-4" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function SectionLabel({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-muted-foreground">{icon}</span>
      <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
function CaseStudiesPage() {
  const [active, setActive] = useState<(typeof CASE_STUDIES)[number] | null>(null);

  const handleOpen = useCallback((c: (typeof CASE_STUDIES)[number]) => {
    setActive(c);
  }, []);

  const handleClose = useCallback(() => {
    setActive(null);
  }, []);

  return (
    <>
      <PageHero
        image={HERO_IMAGES.caseStudies}
        eyebrow="Case Studies"
        title={
          <>
            Outcomes, <span className="text-gradient">in detail.</span>
          </>
        }
        desc="How we moved real metrics for real clients."
      />

      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          {CASE_STUDIES.map((c, i) => (
            <motion.div
              key={c.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.07 }}
              whileHover={{ y: -6 }}
            >
              <button
                onClick={() => handleOpen(c)}
                className="group block w-full text-left overflow-hidden rounded-3xl border border-border bg-card transition hover:border-glow focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={CASE_IMAGES[c.slug]}
                    alt={c.title}
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 font-mono text-[10px] uppercase text-black">
                    {c.result}
                  </span>
                  <div className="absolute bottom-3 left-3 text-white">
                    <div className="font-mono text-[10px] uppercase opacity-80">{c.client}</div>
                  </div>
                </div>

                {/* Body */}
                <div className="p-7">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                    <span>{c.industry}</span>
                    <span>·</span>
                    <span>{c.duration}</span>
                  </div>
                  <h2 className="mt-3 font-display text-xl font-semibold leading-tight md:text-2xl">
                    {c.title}
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {c.overview}
                  </p>

                  {/* Mini metrics */}
                  <div className="mt-4 grid grid-cols-4 gap-2">
                    {c.results.map((r) => (
                      <div key={r.label} className="rounded-xl bg-muted/60 p-2 text-center">
                        <div className="font-display text-base font-bold text-gradient">
                          {r.value}
                        </div>
                        <div className="mt-0.5 text-[10px] text-muted-foreground leading-tight">
                          {r.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-2">
                      {c.tags.map((t) => (
                        <span key={t} className="rounded-md bg-muted px-2 py-1 text-xs">
                          {t}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-gradient">
                      View case study{" "}
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <CTA />

      {/* Modal */}
      <AnimatePresence>
        {active && <CaseStudyModal study={active} onClose={handleClose} />}
      </AnimatePresence>
    </>
  );
}