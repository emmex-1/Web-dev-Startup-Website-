import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, ArrowLeft, X, CheckCircle2, Zap, BarChart3, Users, Quote,
  ExternalLink, ChevronLeft, ChevronRight, Eye, Search, Sparkles, Code2,
  Target, BarChart2, Cpu,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { PageHero, CTA } from "@/components/section";
import { CASE_STUDIES, CASE_IMAGES } from "@/lib/content";
import { HERO_IMAGES } from "@/lib/content";
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

// ─── Extended data ─────────────────────────────────────────────────────────────
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
      { title: "Funnel Analysis", desc: "Identified 68% cart abandonment driven by slow PDP and confusing bundle selection UI via Hotjar session replays." },
      { title: "Competitor Benchmark", desc: "Audited 7 DTC beauty competitors — found clear best-in-class patterns for social proof placement and urgency triggers." },
      { title: "User Interviews", desc: "6 customer interviews revealed confusion around ingredient transparency and subscription terms, leading to copy overhaul." },
    ],
    design: [
      { title: "Design System", desc: "Created a bespoke component library in Figma: 48-token spacing scale, 6-shade color ramps, and typographic hierarchy." },
      { title: "PDP Redesign", desc: "Above-the-fold buying flow: hero image, star rating, key ingredient callouts, and a persistent sticky add-to-cart." },
      { title: "CMS-driven Templates", desc: "Built 5 editorial collection templates in Sanity that the marketing team can assemble without writing code." },
    ],
    development: [
      { title: "Shopify Hydrogen", desc: "Full Remix-based headless storefront with streaming SSR, edge caching on Cloudflare, and incremental product data hydration." },
      { title: "Sanity CMS", desc: "Structured content with live preview, custom desk tools, and a GROQ API layer serving the storefront." },
      { title: "Klaviyo Integration", desc: "Custom flow triggers for browse abandonment, post-purchase upsell, and subscription win-back sequences." },
    ],
    challenges: [
      {
        challenge: "Shopify's storefront API rate limits caused checkout latency spikes during flash sales.",
        solution: "Implemented a server-side cart session cache with optimistic UI updates, eliminating visible latency and preventing rate-limit errors under 3k concurrent users.",
      },
      {
        challenge: "The Sanity CMS migration had to happen live with zero customer-facing downtime.",
        solution: "Built a dual-read bridge layer that served content from both the old theme and new Sanity simultaneously during the 2-week transition window.",
      },
    ],
    tech: [
      { category: "Frontend", items: ["Shopify Hydrogen", "React", "TypeScript", "Tailwind CSS"] },
      { category: "CMS & Content", items: ["Sanity", "GROQ", "Portable Text"] },
      { category: "Commerce", items: ["Shopify Plus", "Shopify Storefront API", "ReCharge Subscriptions"] },
      { category: "Marketing", items: ["Klaviyo", "Yotpo", "Triplewhale"] },
    ],
    testimonial: {
      quote: "Globe Stack rebuilt our Shopify store and our revenue 2.6x'd in 5 months. They feel like an in-house team — they pushed back when our ideas weren't optimal and always had data to back their decisions.",
      name: "Maya Chen", role: "CEO, Lumen Skincare", avatar: "MC",
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
      { title: "Ticket Clustering", desc: "Used k-means clustering on 12k historical tickets — 62% fell into just 9 issue categories, making RAG a strong fit." },
      { title: "Content Gap Analysis", desc: "Mapped existing help docs against the 9 categories. Found 3 major gaps that needed new content before any RAG pipeline could work." },
      { title: "Agent Shadowing", desc: "Spent 4 hours shadowing support agents to understand edge cases and the emotional register needed for financial product queries." },
    ],
    design: [
      { title: "Conversation Design", desc: "Wrote 60+ sample dialogues covering tone, escalation paths, and refusal patterns for regulated financial queries." },
      { title: "Agent Assist UI", desc: "Designed a sidebar panel in Zendesk that surfaces the 3 most relevant knowledge snippets and a draft reply for agent review." },
      { title: "Escalation UX", desc: "Designed seamless human handoff with full context transfer — agents see the entire AI conversation history on pickup." },
    ],
    development: [
      { title: "RAG Pipeline", desc: "pgvector on Supabase with OpenAI text-embedding-3-large. Hybrid search combining dense vectors with BM25 keyword matching for higher recall." },
      { title: "Eval Suite", desc: "400+ golden question-answer pairs used in CI/CD to catch regression. Automated RAGAS scoring on every deploy." },
      { title: "Guardrails", desc: "Custom classifier for regulated financial advice — routes to human agent when confidence < 0.82 or query contains regulated terms." },
    ],
    challenges: [
      {
        challenge: "Retrieval was hallucinating product terms from old, superseded documentation still in the corpus.",
        solution: "Built a document versioning layer with hard expiry dates. Added a reranker step using Cohere Rerank 3 to deprioritize stale content.",
      },
      {
        challenge: "Fintech compliance team required full auditability of every AI-generated response.",
        solution: "Implemented an immutable response log with citation tracking — every answer stores the exact source chunks used, queryable by compliance.",
      },
    ],
    tech: [
      { category: "AI & ML", items: ["OpenAI GPT-4o", "text-embedding-3-large", "Cohere Rerank 3", "LangChain"] },
      { category: "Database", items: ["Supabase", "pgvector", "PostgreSQL"] },
      { category: "Backend", items: ["Node.js", "TypeScript", "Hono"] },
      { category: "Integrations", items: ["Intercom", "Zendesk", "Slack Alerts"] },
    ],
    testimonial: {
      quote: "Their AI team shipped a production RAG copilot in 8 weeks. Support tickets dropped 47%. The eval suite they built caught 3 major regressions before they ever touched production. Insane quality.",
      name: "Daniel Park", role: "VP Engineering, Atlas Finance", avatar: "DP",
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
      { title: "Keyword Universe", desc: "Mapped 2,400 keywords across 6 topic clusters. Prioritized by traffic × conversion intent × difficulty score." },
      { title: "SERP Analysis", desc: "Analysed top 10 results for 80 target keywords — identified a structural gap: most competitors had shallow, listicle-style content." },
      { title: "Backlink Profile Audit", desc: "Vector had 40 referring domains, nearly all brand mentions. Zero editorial links from dev publications or open source projects." },
    ],
    design: [
      { title: "Site Architecture", desc: "Designed a hub-and-spoke IA: 6 pillar pages, each supporting 8–12 cluster articles organized by use-case, not feature." },
      { title: "Content Templates", desc: "Built 3 editorial templates (tutorial, comparison, glossary) optimised for featured snippets and SGE AI summaries." },
      { title: "Webflow Migration", desc: "Redesigned the blog with performance and structured data as primary requirements — every post gets Article + HowTo schema." },
    ],
    development: [
      { title: "Technical SEO Fixes", desc: "Resolved 140+ crawl errors, implemented hreflang for 4 locales, fixed canonical duplication across tag + category pages." },
      { title: "Core Web Vitals", desc: "Moved all images to WebP with LQIP blur-up, eliminated render-blocking JS, achieved LCP < 1.8s across all key landing pages." },
      { title: "Schema Markup", desc: "Automated JSON-LD generation for Article, FAQPage, and HowTo types — driven by Webflow CMS fields." },
    ],
    challenges: [
      {
        challenge: "Developer audience was skeptical of SEO-optimised content — early articles felt too shallow and hurt credibility.",
        solution: "Brought in two senior engineers as writers, creating deeply technical tutorials (avg. 3,200 words) that ranked AND earned developer respect.",
      },
      {
        challenge: "Google algorithm update in month 4 wiped out 30% of early ranking gains.",
        solution: "Pivoted content strategy to focus on proprietary data and original benchmarks — content Google can't find elsewhere recovered rankings within 6 weeks.",
      },
    ],
    tech: [
      { category: "Technical SEO", items: ["Screaming Frog", "Ahrefs", "Google Search Console", "Semrush"] },
      { category: "CMS & Site", items: ["Webflow", "Finsweet Attributes", "Cloudflare"] },
      { category: "Content Ops", items: ["Notion", "Surfer SEO", "Clearscope"] },
      { category: "Analytics", items: ["GA4", "Heap", "Looker Studio"] },
    ],
    testimonial: {
      quote: "We went from invisible to ranking #1 on our money keywords. Globe Stack's process is unreal — they treated SEO like a product, not a service. Data-driven decisions at every step.",
      name: "Priya Sharma", role: "Founder, Vector Tools", avatar: "PS",
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
      { title: "Account Teardown", desc: "Found $12k/mo in wasted spend: broad match cannibalization, overlapping audiences, and 40+ zombie ad sets with no conversion in 90 days." },
      { title: "Creative Audit", desc: "Analysed 180 historical creatives — 3 hooks drove 71% of all conversions. Entire creative strategy rebuilt around these archetypes." },
      { title: "Attribution Modelling", desc: "Built a data-driven MMM model in BigQuery to understand true platform contribution — Meta was getting 40% over-attributed." },
    ],
    design: [
      { title: "Creative System", desc: "Designed a modular creative framework: 3 core hooks × 4 formats × 2 audiences = 24 testable variants per sprint." },
      { title: "Landing Page Programme", desc: "Built 12 performance landing pages with CRO-focused design — each matched to specific ad creative and audience segment." },
      { title: "Reporting Dashboard", desc: "Custom Looker Studio dashboard blending Meta, Google, and TikTok data with MMM-adjusted ROAS by channel and creative." },
    ],
    development: [
      { title: "Campaign Architecture", desc: "Rebuilt Meta structure to Advantage+ Shopping Campaigns with CBO, consolidating 80 ad sets into 12 high-signal campaigns." },
      { title: "BigQuery Data Pipeline", desc: "Automated ETL pulling from Meta, Google, and TikTok APIs into BigQuery for daily MMM model updates." },
      { title: "Creative Automation", desc: "Used Meta's Dynamic Creative Optimization with 6 headlines, 6 bodies, and 8 creative assets — machine-tested at scale." },
    ],
    challenges: [
      {
        challenge: "Creative fatigue hit hard at $100k+/mo — winning ads burned out within 2–3 weeks.",
        solution: "Built a UGC creator network of 14 micro-influencers on monthly retainer, delivering 12 raw assets/week to sustain creative velocity.",
      },
      {
        challenge: "iOS privacy changes made Facebook's reported ROAS 35% higher than actual due to modelled conversions.",
        solution: "Implemented server-side Conversions API with first-party data matching, restoring signal quality and bringing reported vs actual ROAS within 8%.",
      },
    ],
    tech: [
      { category: "Paid Media", items: ["Meta Ads", "Google Ads", "TikTok Ads", "Pinterest Ads"] },
      { category: "Analytics", items: ["GA4", "BigQuery", "Looker Studio", "Northbeam"] },
      { category: "Creative", items: ["CapCut", "Adobe Premiere", "Figma", "Canva Teams"] },
      { category: "Attribution", items: ["Meta CAPI", "Google Enhanced Conversions", "Triplewhale"] },
    ],
    testimonial: {
      quote: "Best ad agency we've worked with — and we've worked with five. 4.2 ROAS at $400k/mo is something we thought was impossible at our stage. Globe Stack proved us wrong every single month.",
      name: "Marcus Webb", role: "CMO, Orbit Apparel", avatar: "MW",
    },
    screenshots: [
      { label: "Performance Dashboard", color: "from-orange-500/20 to-rose-500/20" },
      { label: "Creative Matrix", color: "from-rose-500/20 to-red-500/20" },
      { label: "Attribution Model", color: "from-red-500/20 to-orange-500/20" },
    ],
  },
};

// ─── Fallback EXTENDED entries for slugs that don't have custom data ───────────
function getExtended(slug: string, study: typeof CASE_STUDIES[number]) {
  if (EXTENDED[slug]) return EXTENDED[slug];
  // Generate a reasonable fallback from the study's own data
  return {
    goals: study.goals ?? [],
    research: [
      { title: "Discovery", desc: study.research ?? "" },
    ],
    design: [
      { title: "Design Process", desc: study.designProcess ?? "" },
    ],
    development: [
      { title: "Development", desc: study.devProcess ?? "" },
    ],
    challenges: study.challenges ?? [],
    tech: study.techStack ?? [],
    testimonial: study.testimonial
      ? {
          quote: study.testimonial.quote,
          name: study.testimonial.name,
          role: study.testimonial.role,
          avatar: study.testimonial.name.split(" ").map((n: string) => n[0]).join("").slice(0, 2),
        }
      : { quote: "", name: "", role: "", avatar: "" },
    screenshots: [
      { label: "Screen 1", color: "from-sky-500/20 to-cyan-500/20" },
      { label: "Screen 2", color: "from-cyan-500/20 to-teal-500/20" },
      { label: "Screen 3", color: "from-teal-500/20 to-emerald-500/20" },
    ],
  };
}

// ─── Section label (shared) ────────────────────────────────────────────────────
function SectionLabel({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="grid h-7 w-7 place-items-center rounded-lg bg-muted text-muted-foreground">{icon}</span>
      <span className="font-display text-base font-semibold">{label}</span>
    </div>
  );
}

// ─── Full Modal (mirrors index.tsx CaseStudyModal exactly) ────────────────────
function CaseStudyModal({
  cs,
  onClose,
}: {
  cs: typeof CASE_STUDIES[number];
  onClose: () => void;
}) {
  const ext = getExtended(cs.slug, cs);
  const images = cs.images ?? [CASE_IMAGES[cs.slug]];
  const [imgIdx, setImgIdx] = useState(0);
  const prevImg = () => setImgIdx((i) => (i <= 0 ? images.length - 1 : i - 1));
  const nextImg = () => setImgIdx((i) => (i >= images.length - 1 ? 0 : i + 1));

  // Lock body scroll & Escape key
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handler);
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] flex items-start justify-center bg-background/95 backdrop-blur-md overflow-y-auto py-6 px-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="relative w-full max-w-4xl rounded-3xl border border-border bg-card shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full bg-background/80 hover:bg-muted border border-border transition"
          >
            <X className="h-4 w-4" />
          </button>

          {/* ── 1. Hero Banner ── */}
          <div className="relative h-64 overflow-hidden rounded-t-3xl md:h-80">
            <img src={images[0]} alt={cs.title} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
            <div className="absolute inset-x-6 bottom-6">
              <div className="flex flex-wrap gap-2 mb-3">
                {cs.tags.map((t) => (
                  <span key={t} className="rounded-full bg-white/15 border border-white/25 px-3 py-1 text-xs text-white backdrop-blur">{t}</span>
                ))}
              </div>
              <h2 className="font-display text-2xl font-bold text-white leading-tight md:text-3xl">{cs.title}</h2>
              <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-white/70">
                <span className="font-mono uppercase">{cs.client}</span>
                <span>·</span>
                <span>{cs.industry}</span>
                <span>·</span>
                <span>{cs.duration}</span>
                <span className="ml-auto rounded-full bg-white/90 px-3 py-1 font-semibold text-black text-xs">{cs.result}</span>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-8 space-y-8">

            {/* ── 2. Problem ── */}
            <div>
              <SectionLabel icon={<Target className="h-4 w-4" />} label="Problem Statement" />
              <p className="mt-3 text-muted-foreground leading-relaxed">{cs.problem}</p>
            </div>

            {/* ── 3. Goals ── */}
            {ext.goals.length > 0 && (
              <div>
                <SectionLabel icon={<CheckCircle2 className="h-4 w-4" />} label="Goals & Objectives" />
                <ul className="mt-3 space-y-2">
                  {ext.goals.map((g, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-0.5 h-5 w-5 shrink-0 grid place-items-center rounded-full bg-muted font-mono text-[10px] font-bold">{i + 1}</span>
                      {g}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* ── 4. Research ── */}
            <div>
              <SectionLabel icon={<Search className="h-4 w-4" />} label="Research & Discovery" />
              <div className="mt-3 grid gap-4 md:grid-cols-1">
                {ext.research.map((r) => (
                  <div key={r.title} className="rounded-2xl border border-border bg-muted/40 p-5">
                    <div className="font-semibold text-sm mb-2">{r.title}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── 5. Design ── */}
            <div>
              <SectionLabel icon={<Sparkles className="h-4 w-4" />} label="Design Process" />
              <div className="mt-3 grid gap-4 md:grid-cols-1">
                {ext.design.map((d) => (
                  <div key={d.title} className="rounded-2xl border border-border bg-muted/40 p-5">
                    <div className="font-semibold text-sm mb-2">{d.title}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── 6. Development ── */}
            <div>
              <SectionLabel icon={<Code2 className="h-4 w-4" />} label="Development Process" />
              <div className="mt-3 grid gap-4 md:grid-cols-1">
                {ext.development.map((d) => (
                  <div key={d.title} className="rounded-2xl border border-border bg-muted/40 p-5">
                    <div className="font-semibold text-sm mb-2">{d.title}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── 7. Challenges ── */}
            {ext.challenges.length > 0 && (
              <div>
                <SectionLabel icon={<Zap className="h-4 w-4" />} label="Challenges & Solutions" />
                <div className="mt-3 space-y-3">
                  {ext.challenges.map((c, i) => (
                    <div key={i} className="rounded-2xl border border-border bg-muted/40 p-4">
                      <div className="text-sm font-semibold mb-1">Challenge</div>
                      <p className="text-sm text-muted-foreground">{c.challenge}</p>
                      <div className="mt-2 text-sm font-semibold text-sky-500">Solution</div>
                      <p className="text-sm text-muted-foreground">{c.solution}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ── 8. Screenshots ── */}
            <div>
              <SectionLabel icon={<Eye className="h-4 w-4" />} label="Screenshots" />
              <div className="mt-3 relative overflow-hidden rounded-2xl bg-zinc-950" style={{ height: "min(60vh, 460px)" }}>
                <img
                  src={images[imgIdx]}
                  alt={`${cs.client} screenshot ${imgIdx + 1}`}
                  className="h-full w-full object-contain"
                />
                {images.length > 1 && (
                  <>
                    <button onClick={prevImg} className="absolute left-3 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-black/60 text-white hover:bg-black/80 transition">
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button onClick={nextImg} className="absolute right-3 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-black/60 text-white hover:bg-black/80 transition">
                      <ChevronRight className="h-5 w-5" />
                    </button>
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                      {images.map((_, i) => (
                        <button key={i} onClick={() => setImgIdx(i)} className={`h-1.5 rounded-full transition-all ${i === imgIdx ? "w-6 bg-white" : "w-1.5 bg-white/40"}`} />
                      ))}
                    </div>
                  </>
                )}
              </div>
              {images.length > 1 && (
                <div className="mt-2 flex gap-2 overflow-x-auto scrollbar-hide">
                  {images.map((img, i) => (
                    <button key={i} onClick={() => setImgIdx(i)} className={`h-14 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition ${i === imgIdx ? "border-sky-500" : "border-border opacity-60 hover:opacity-100"}`}>
                      <img src={img} alt="" className="h-full w-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* ── 9. Results ── */}
            <div>
              <SectionLabel icon={<BarChart2 className="h-4 w-4" />} label="Final Results & Outcomes" />
              <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {cs.results.map((r) => (
                  <div key={r.label} className="rounded-2xl border border-border bg-muted/40 p-4 text-center">
                    <div className="font-display text-2xl font-bold">{r.value}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{r.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── 10. Tech Stack ── */}
            <div>
              <SectionLabel icon={<Cpu className="h-4 w-4" />} label="Tech Stack" />
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {ext.tech.map((group) => (
                  <div key={group.category} className="rounded-xl border border-border p-3">
                    <div className="mb-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{group.category}</div>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <span key={item} className="rounded-md bg-muted px-2 py-0.5 font-mono text-xs">{item}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── 11. Testimonial ── */}
            {ext.testimonial.quote && (
              <div className="rounded-2xl border border-border bg-muted/40 p-6">
                <Quote className="h-6 w-6 text-muted-foreground mb-3" />
                <p className="font-display text-lg font-medium leading-snug">"{ext.testimonial.quote}"</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-sky-500 font-mono text-sm font-bold text-white">
                    {ext.testimonial.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{ext.testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{ext.testimonial.role}</div>
                  </div>
                </div>
              </div>
            )}

            {/* ── 12. CTA ── */}
            <div className="rounded-2xl border border-border bg-foreground p-6 text-center text-background">
              <h3 className="font-display text-xl font-bold">Want similar results for your project?</h3>
              <p className="mt-2 text-sm text-background/70">Let's build something that moves your metrics.</p>
              <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-semibold text-foreground hover:opacity-90"
                >
                  Book a discovery call <ArrowRight className="h-4 w-4" />
                </Link>
                <button onClick={onClose} className="text-sm text-background/60 hover:text-background/90">Close case study</button>
              </div>
            </div>

          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
function CaseStudiesPage() {
  const [active, setActive] = useState<typeof CASE_STUDIES[number] | null>(null);

  // Collect all unique tags for filter
  const cats = ["All", ...Array.from(new Set(CASE_STUDIES.flatMap((c) => c.tags)))];
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? CASE_STUDIES
      : CASE_STUDIES.filter((c) => c.tags.includes(activeFilter));

  // Related = 2 studies that are NOT the open one (or just the last 2 if none open)
  const relatedStudies = CASE_STUDIES.filter((c) => c.slug !== active?.slug).slice(0, 2);

  const handleOpen = useCallback((c: typeof CASE_STUDIES[number]) => setActive(c), []);
  const handleClose = useCallback(() => setActive(null), []);

  return (
    <>
      <PageHero
        image={HERO_IMAGES.caseStudies}
        eyebrow="Case Studies"
        title={<>Outcomes, <span className="text-gradient">in detail.</span></>}
        desc="How we moved real metrics for real clients — deep dives into the work."
      />

      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">

        {/* ── Header row matching index.tsx style ── */}
        <div className="mb-10 grid items-end gap-8 md:grid-cols-2">
          <div className="flex items-center gap-4">
            <div className="grid h-14 w-16 place-items-center rounded-full bg-foreground text-background font-display text-sm font-bold">
              {CASE_STUDIES.length}+
            </div>
            <div className="text-sm text-muted-foreground">
              Projects completed across web, AI, commerce &amp; growth.
            </div>
          </div>
          <p className="text-pretty text-muted-foreground md:text-lg">
            Explore crafted work combining senior engineering with measurable outcomes. We always build from scratch — never from templates.
          </p>
        </div>

        {/* ── Filter tabs (identical pattern to index.tsx) ── */}
        <div className="mb-8 flex flex-wrap gap-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setActiveFilter(c)}
              className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition ${
                activeFilter === c
                  ? "border-foreground bg-foreground text-background"
                  : "border-border hover:bg-muted"
              }`}
            >
              {activeFilter === c && <span className="h-2 w-2 rounded-full bg-[var(--neon)]" />}
              {c}
            </button>
          ))}
        </div>

        {/* ── Case study grid ── */}
        <AnimatePresence mode="popLayout">
          <div className="grid gap-5 md:grid-cols-2">
            {filtered.map((c, i) => (
              <motion.div
                key={c.slug}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: (i % 4) * 0.06 }}
                whileHover={{ y: -6 }}
              >
                <button
                  onClick={() => handleOpen(c)}
                  className="group relative block w-full overflow-hidden rounded-3xl border border-border bg-card transition hover:border-glow text-left"
                >
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={CASE_IMAGES[c.slug]}
                      alt={c.title}
                      className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute right-3 top-3 rounded-full bg-white/95 px-3 py-1 font-mono text-[10px] uppercase text-black">
                      {c.result}
                    </div>
                    <div className="absolute right-3 bottom-3 grid h-10 w-10 place-items-center rounded-full bg-foreground text-background opacity-0 transition group-hover:opacity-100">
                      <ExternalLink className="h-4 w-4" />
                    </div>
                    <div className="absolute bottom-3 left-3 text-white">
                      <div className="font-mono text-[10px] uppercase opacity-80">{c.client}</div>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                      <span className="font-mono uppercase">{c.client}</span>
                      <span>·</span>
                      <span>{c.industry}</span>
                      <span>·</span>
                      <span>{c.duration}</span>
                    </div>
                    <h3 className="mt-3 font-display text-xl font-semibold leading-tight">{c.title}</h3>
                    <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{c.overview}</p>

                    {/* Mini metrics */}
                    <div className="mt-4 grid grid-cols-4 gap-2">
                      {c.results.map((r) => (
                        <div key={r.label} className="rounded-xl bg-muted/60 p-2 text-center">
                          <div className="font-display text-base font-bold text-gradient">{r.value}</div>
                          <div className="mt-0.5 text-[10px] text-muted-foreground leading-tight">{r.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {c.tags.map((t) => (
                        <span key={t} className="rounded-md bg-muted px-2 py-1 text-xs">{t}</span>
                      ))}
                    </div>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>

        {/* ── Related Case Studies ── */}
        <div className="mt-20">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">More work</p>
              <h2 className="font-display text-2xl font-bold md:text-3xl">Related case studies.</h2>
            </div>
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background hover:opacity-90"
            >
              Start a project <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {relatedStudies.map((c, i) => (
              <motion.div
                key={c.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
              >
                <button
                  onClick={() => handleOpen(c)}
                  className="group relative block w-full overflow-hidden rounded-3xl border border-border bg-card transition hover:border-glow text-left"
                >
                  {/* Compact image */}
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={CASE_IMAGES[c.slug]}
                      alt={c.title}
                      className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
                    <div className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 font-mono text-[10px] uppercase text-black">
                      {c.result}
                    </div>
                    <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
                      {c.tags.map((t) => (
                        <span key={t} className="rounded-full bg-white/15 border border-white/25 px-2 py-0.5 text-[10px] text-white backdrop-blur">{t}</span>
                      ))}
                    </div>
                  </div>

                  {/* Compact body */}
                  <div className="flex items-start justify-between gap-4 p-5">
                    <div className="min-w-0">
                      <div className="text-xs text-muted-foreground mb-1">
                        {c.client} · {c.industry}
                      </div>
                      <h3 className="font-display text-lg font-semibold leading-snug line-clamp-2">{c.title}</h3>
                    </div>
                    <div className="shrink-0 grid h-9 w-9 place-items-center rounded-full border border-border bg-muted transition group-hover:border-foreground group-hover:bg-foreground group-hover:text-background">
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="mt-6 flex justify-center sm:hidden">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background hover:opacity-90"
            >
              Start a project <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

      </div>

      <CTA />

      {/* Modal */}
      <AnimatePresence>
        {active && <CaseStudyModal cs={active} onClose={handleClose} />}
      </AnimatePresence>
    </>
  );
}