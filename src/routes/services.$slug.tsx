// routes/services.$slug.tsx
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight, ArrowUpRight, Check, Sparkles, Code2, Search, Target,
  MessageCircle, ShoppingBag, Plus, Minus, Zap, Palette, Layers,
  Wrench, Server,
} from "lucide-react";
import { PageHero, Section, CTA } from "@/components/section";
import { SERVICES, type Service } from "@/lib/site";
import { PRICING_SERVICES } from "@/lib/pricing";
import { PROJECTS } from "@/lib/content";
import { PROJECT_IMAGES, SERVICE_IMAGES } from "@/lib/content";
import { seo, jsonLdScript, breadcrumbJsonLd, abs } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/services/$slug")({
  head: ({ params }) => {
    const s = SERVICES.find((x) => x.slug === params.slug);
    if (!s)
      return seo({
        title: "Service — Rexsolv",
        description: "Rexsolv services.",
        path: `/services/${params.slug}`,
      });
    const base = seo({
      title: `${s.title} — Rexsolv`,
      description: s.blurb,
      path: `/services/${s.slug}`,
    });
    const serviceLd = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: s.title,
      description: s.blurb,
      provider: { "@type": "Organization", name: SITE.name, url: abs("/") },
      areaServed: "Worldwide",
      url: abs(`/services/${s.slug}`),
    };
    const faqLd = s.faqs?.length
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: s.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }
      : null;
    const crumbs = breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: s.title, path: `/services/${s.slug}` },
    ]);
    return {
      ...base,
      scripts: [
        jsonLdScript(serviceLd),
        jsonLdScript(crumbs),
        ...(faqLd ? [jsonLdScript(faqLd)] : []),
      ],
    };
  },
  loader: ({ params }) => {
    const service = SERVICES.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  component: ServicePage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-4 py-32 text-center">
      <h1 className="text-4xl font-bold">Service not found</h1>
      <Link
        to="/services"
        className="mt-6 inline-flex rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground"
      >
        All services
      </Link>
    </div>
  ),
});

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2, Search, Sparkles, Target, MessageCircle, ShoppingBag,
  Palette, Layers, Wrench, Server,
};

// Maps service slugs from site.ts to the slugs used in pricing.ts
const PRICING_SLUG_MAP: Record<string, string> = {
  "web-development": "web-development",
  "ui-ux-design": "ui-ux",
  "saas-development": "saas",
  "seo": "seo",
  "ai-solutions": "ai",
  "social-and-ads": "social-ads",
  "shopify-store-design": "shopify",
  "website-maintenance": "maintenance",
};

const WHO_FOR_IMAGES: Record<string, string[]> = {
  "web-development": [
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80", // code on screen
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80", // monitor + code
    "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=800&q=80", // dev workspace
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80", // laptop developer
  ],
  "ui-ux-design": [
    "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80", // design tools
    "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=800&q=80", // wireframe sketching
    "https://images.unsplash.com/photo-1545235617-7a424c1a60cc?auto=format&fit=crop&w=800&q=80", // design on tablet
    "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?auto=format&fit=crop&w=800&q=80", // colour palette design
  ],
  "saas-development": [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80", // dashboard analytics
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80", // team on laptops
    "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80", // startup office
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80", // product board
  ],
  "seo": [
    "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80", // search analytics
    "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80", // graphs growth
    "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80", // B2B meeting
    "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=800&q=80", // content writing
  ],
  "ai-solutions": [
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80", // AI abstract
    "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=800&q=80", // robot / automation
    "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80", // AI neural
    "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=800&q=80", // tech data
  ],
  "social-and-ads": [
    "https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&w=800&q=80", // social media phone
    "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&w=800&q=80", // content creator
    "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=800&q=80", // ads dashboard
    "https://images.unsplash.com/photo-1432888622747-4eb9a8f5a07d?auto=format&fit=crop&w=800&q=80", // analytics laptop
  ],
  "shopify-store-design": [
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80", // ecommerce shopping
    "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80", // retail store
    "https://images.unsplash.com/photo-1523289333742-be1143f6b766?auto=format&fit=crop&w=800&q=80", // brand packaging
    "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=800&q=80", // online shopping
  ],
  "website-maintenance": [
    "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80", // server / infra
    "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80", // monitoring screen
    "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80", // tech support
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80", // business founder
  ],
  "backend-api-development": [
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80", // server rack
    "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=800&q=80", // code terminal
    "https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&w=800&q=80", // API / integration
    "https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=800&q=80", // engineer coding
  ],
};

// Fallback in case a new service slug isn't mapped yet
const DEFAULT_WHO_FOR_IMAGES = [
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80",
];

const CARD_IMAGES = [
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80", // team meeting
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80", // collaboration
  "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80", // developers
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80", // office workspace
];


function ServicePage() {
  const { service } = Route.useLoaderData() as { service: Service };
  const Icon = ICONS[service.icon] ?? Sparkles;
  // At the top of ServicePage, derive the image array for this service:
const whoForImages = WHO_FOR_IMAGES[service.slug] ?? DEFAULT_WHO_FOR_IMAGES;
  const related = PROJECTS.filter((p) => p.serviceSlug === service.slug).slice(0, 3);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [currency, setCurrency] = useState<"usd" | "ngn">("usd");

  const pricingSlug = PRICING_SLUG_MAP[service.slug] ?? service.slug;
  const matchedPricingService = PRICING_SERVICES.find((ps) => ps.slug === pricingSlug);

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <PageHero
        image={SERVICE_IMAGES[service.slug]}
        eyebrow="Service"
        title={<><span className="text-gradient">{service.title}</span></>}
        desc={service.blurb}
      >
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
          >
            Get a proposal <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/services"
            className="inline-flex rounded-md border border-white/30 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10"
          >
            All services
          </Link>
        </div>
      </PageHero>

      {/* ── 1. Overview ─────────────────────────────────────────────────────
           section-a = white (light) / zinc-950 (dark)
      ──────────────────────────────────────────────────────────────────────── */}
      <Section
        className="section-a " 
        eyebrow="Overview"
        title={
          <>
            What we do as your{" "}
            <span className="text-gradient">{service.title.toLowerCase()}</span>{" "}
            team.
          </>
        }
      >
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
          {/* LEFT — Content */}
          <div className="space-y-6 lg:pr-10">
            <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              {service.overview}
            </p>

            <div className="space-y-3 pt-2">
              {[
                "Senior-only team — no juniors, no hand-offs",
                "End-to-end ownership from strategy through delivery",
                "Transparent pricing and honest timelines",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm">
                  <div className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <span className="font-medium text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background transition hover:opacity-90"
              >
                Get a proposal <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* RIGHT — Visual frame */}
          <div className="relative mx-auto w-full max-w-md lg:ml-auto lg:max-w-lg">
            <div className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-3xl border border-border/40 bg-muted/40 dark:bg-zinc-900/40" />
            <div className="relative aspect-[4/3.8] overflow-hidden rounded-3xl border border-border bg-card p-2 shadow-xl">
              <img
                src={
                  // SERVICE_IMAGES[service.slug] ||
                  "/media/socials.jpg"
                }
                alt={`${service.title} overview`}
                className="h-full w-full rounded-2xl object-cover"
              />
              <div className="absolute inset-2 rounded-2xl bg-black/45" />
              <div className="absolute bottom-6 right-6 flex items-center gap-3 rounded-2xl border border-border/80 bg-background/95 p-3.5 shadow-xl backdrop-blur-md">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gray-700 text-white shadow-md shadow-gray-500/20">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex flex-col pr-2">
                  <span className="font-display text-sm font-bold text-foreground">Top-Tier</span>
                  <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                    Digital Excellence
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── 2. Who it's for ─────────────────────────────────────────────────
           section-b = cool grey (light) / slightly lighter dark
      ──────────────────────────────────────────────────────────────────────── */}
      <Section
        className="bg-[var(--section-a)]"
        eyebrow="Who it's for"
        title="Built for teams like yours."
      >
        <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {service.whoFor.map((w, idx) => (
            <div
              key={w}
              className="group relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border bg-card transition duration-300 hover:border-white/40"
            >
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/40 to-transparent" />
<img
  src={whoForImages[idx]}
  alt={w}
  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
/>
{/* black overlay */}
<div className="absolute inset-0 z-10 bg-black/50" />
              <div className="absolute right-4 top-4 z-20 grid h-8 w-8 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition group-hover:bg-white group-hover:text-black">
                <ArrowUpRight className="h-4 w-4" />
              </div>
              <div className="absolute inset-x-0 bottom-0 z-20 p-5">
                <h3 className="font-display text-xl font-bold tracking-tight text-white">{w}</h3>
                <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-zinc-300">
                  Tailored delivery built to accelerate performance, efficiency, and scale.
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── 3. Pricing ──────────────────────────────────────────────────────
           section-a = white / dark base
      ──────────────────────────────────────────────────────────────────────── */}
      <Section
        className="section-a"
        eyebrow="Pricing"
        title="Transparent pricing."
        desc="No surprise invoices. Pick the plan that fits your stage and budget."
      >
        {/* Currency Toggle */}
        <div className="flex justify-center mb-10">
          <div className="flex items-center gap-1 rounded-full border border-border bg-card p-1 shadow-sm">
            <button
              onClick={() => setCurrency("usd")}
              className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                currency === "usd"
                  ? "bg-foreground text-background shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              🇺🇸 USD
            </button>
            <button
              onClick={() => setCurrency("ngn")}
              className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                currency === "ngn"
                  ? "bg-foreground text-background shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              🇳🇬 NGN
            </button>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {service.pricing.map((tier, idx) => {
            const matchedTier = matchedPricingService?.tiers[idx];
            const displayPrice =
              currency === "ngn" && matchedTier?.ngn
                ? matchedTier.ngn
                : tier.price;
            const secondaryPrice =
              currency === "ngn" && matchedTier?.usd
                ? matchedTier.usd
                : null;

            return (
              <div
                key={tier.name}
                className={`relative rounded-2xl border bg-card p-8 ${
                  tier.featured ? "border-glow glow" : "border-border"
                }`}
              >
                {tier.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[var(--neon)] to-[var(--neon-violet)] px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-background">
                    Most popular
                  </div>
                )}
                <div className="font-display text-lg font-semibold">{tier.name}</div>
                <div className="mt-4 font-display text-4xl font-bold transition-all duration-200">
                  {displayPrice}
                </div>
                {secondaryPrice && (
                  <div className="mt-1 text-xs text-muted-foreground">≈ {secondaryPrice}</div>
                )}
                <p className="mt-2 text-sm text-muted-foreground">{tier.desc}</p>
                <div className="my-6 h-px bg-border" />
                <ul className="space-y-2 text-sm">
                  {tier.items.map((it) => (
                    <li key={it} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--neon)]" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`mt-8 inline-flex w-full items-center justify-center rounded-md px-4 py-2.5 text-sm font-medium ${
                    tier.featured
                      ? "bg-primary text-primary-foreground"
                      : "border border-border hover:bg-muted"
                  }`}
                >
                  Get started
                </Link>
              </div>
            );
          })}
        </div>
      </Section>

      {/* ── 4. Problems we solve ────────────────────────────────────────────
           section-pinned-dark — cards use hard dark colours, pin bg to dark always
      ──────────────────────────────────────────────────────────────────────── */}
      <Section
        className="section-pinned-dark )]"
        eyebrow="Problems we solve"
        title="If any of this sounds familiar…"
        desc="These are the patterns we see every discovery call. We've built a playbook for each."
      >
        <div className="mx-auto max-w-6xl space-y-5">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {service.problems.map((p, i) => (
              <div
                key={p}
                className="flex flex-col justify-between rounded-2xl border border-white/[0.04] bg-[#121215] p-6 transition duration-300 hover:bg-white/[0.02]"
              >
                <div>
                  <div className="font-mono text-xs font-bold tracking-widest text-[var(--neon)]">
                    0{i + 1}.
                  </div>
                  <h4 className="mt-3 font-display font-semibold text-white">Challenge</h4>
                  <p className="mt-2 text-xs leading-relaxed text-zinc-400">{p}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center justify-between gap-4 rounded-xl border border-white/[0.05] bg-white/[0.02] px-6 py-4 sm:flex-row">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((n) => (
                  <div
                    key={n}
                    className="flex h-6 w-6 items-center justify-center rounded-full border border-background bg-zinc-800 text-[9px] font-bold text-white"
                  >
                    U{n}
                  </div>
                ))}
              </div>
              <span className="text-xs font-medium text-zinc-400">
                Align with businesses that{" "}
                <strong className="text-white">choose quality</strong>
              </span>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-black transition hover:bg-zinc-200"
            >
              Start now <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </Section>

      {/* ── 5. Benefits ─────────────────────────────────────────────────────
           section-pinned-dark — keeps visual continuity with Problems above
      ──────────────────────────────────────────────────────────────────────── */}
      <Section
        className="section-pinned-dark bg-[var(--section-b)]"
        eyebrow="Benefits"
        title="What you actually get."
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {service.benefits.map((b) => (
              <div
  key={b.t}
  className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-lg"
>
  <div className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-muted">
    <Zap className="h-4 w-4 text-[var(--neon)]" />
  </div>

  <h3 className="mt-4 font-display text-lg font-semibold tracking-wide text-foreground">
    {b.t}
  </h3>

  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
    {b.d}
  </p>
</div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── 6. Deliverables ─────────────────────────────────────────────────
           section-b = grey tint — back to light after the dark block
      ──────────────────────────────────────────────────────────────────────── */}
      <Section
        className="section-b"
        eyebrow="Deliverables"
        title="Exactly what we hand over."
      >
        <div className="mx-auto grid max-w-5xl gap-3 md:grid-cols-2">
          {service.deliverables.map((d) => (
            <div
              key={d}
              className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
            >
              <div className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[var(--neon)] to-[var(--neon-violet)]">
                <Check className="h-3.5 w-3.5 text-background" />
              </div>
              <span className="text-sm">{d}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* ── 7. Process ──────────────────────────────────────────────────────
           section-c = soft indigo tint — visual variety before FAQ
      ──────────────────────────────────────────────────────────────────────── */}
      <Section
        className="bg-[var(--section-a)]"
        eyebrow="Process"
        title="How an engagement runs."
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-y-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-x-8">
            {service.process.map((p, i) => {
              const stepNum = parseInt(p.step, 10) || i + 1;
              return (
                <div key={p.step} className="group relative flex flex-col items-start pl-2">
                  {/* Ghost number */}
                  <div className="absolute -top-8 left-0 select-none font-display text-8xl font-black text-foreground/[0.03] transition duration-300 group-hover:text-[var(--neon)]/[0.06]">
                    0{stepNum}
                  </div>

                  {/* Icon + connector */}
                  <div className="relative mb-6 flex w-full items-center">
                    <div
                      className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-xl border transition-all duration-300 ${
                        stepNum === 3
                          ? "border-transparent bg-gradient-to-br from-[var(--neon)] to-[var(--neon-violet)] text-background shadow-lg shadow-[var(--neon)]/20"
                          : "border-border bg-card text-muted-foreground group-hover:border-foreground/40 group-hover:text-foreground"
                      }`}
                    >
                      {stepNum === 1 && <Target className="h-5 w-5" />}
                      {stepNum === 2 && <Palette className="h-5 w-5" />}
                      {stepNum === 3 && <Code2 className="h-5 w-5" />}
                      {stepNum === 4 && <Layers className="h-5 w-5" />}
                      {stepNum > 4 && <Sparkles className="h-5 w-5" />}
                    </div>

                    {i < service.process.length - 1 && (
                      <div className="absolute left-12 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-border lg:block">
                        <div
                          className={`h-full w-1/2 bg-gradient-to-r transition-all duration-500 ${
                            stepNum === 2
                              ? "from-border to-[var(--neon)]"
                              : stepNum === 3
                              ? "from-[var(--neon)] to-border"
                              : "from-transparent to-transparent"
                          }`}
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 rounded border border-border/40 bg-background px-1.5 font-mono text-[9px] tracking-tight text-muted-foreground/60">
                          0{stepNum}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Text */}
                  <div className="relative z-10">
                    <h3
                      className={`font-display text-xl font-bold tracking-tight transition-colors ${
                        stepNum === 3 ? "text-[var(--neon)]" : "text-foreground"
                      }`}
                    >
                      {p.title}
                    </h3>
                    <p className="mt-2 max-w-[260px] text-sm leading-relaxed text-muted-foreground">
                      {p.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* ── 8. FAQ ──────────────────────────────────────────────────────────
           section-a = clean white / dark — standard before CTA
      ──────────────────────────────────────────────────────────────────────── */}
      <Section
        className="section-a"
        eyebrow="FAQ"
        title="Common questions."
      >
        <div className="mx-auto max-w-3xl divide-y divide-border rounded-2xl border border-border bg-card">
          {service.faqs.map((f, i) => (
            <button
              key={f.q}
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
              className="w-full px-6 py-5 text-left transition hover:bg-muted/30"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="font-medium">{f.q}</span>
                {openFaq === i ? (
                  <Minus className="h-4 w-4 shrink-0" />
                ) : (
                  <Plus className="h-4 w-4 shrink-0" />
                )}
              </div>
              {openFaq === i && (
                <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
              )}
            </button>
          ))}
        </div>
      </Section>

      {/* ── 9. Related portfolio ────────────────────────────────────────────
           section-b = grey tint
      ──────────────────────────────────────────────────────────────────────── */}
      {related.length > 0 && (
        <Section
          className="section-b"
          eyebrow="Related work"
          title="Recent projects in this discipline."
        >
          <div className="grid gap-5 md:grid-cols-3">
            {related.map((p) => (
              <Link
                key={p.slug}
                to="/portfolio/$slug"
                params={{ slug: p.slug }}
                className="group overflow-hidden rounded-2xl border border-border bg-card transition hover:border-glow"
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
                </div>
                <div className="p-5">
                  <div className="text-xs text-muted-foreground">{p.category}</div>
                  <h3 className="mt-1 font-display text-lg font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </Section>
      )}

      {/* ── 10. Other services ──────────────────────────────────────────────
           section-a = clean white / dark
      ──────────────────────────────────────────────────────────────────────── */}
      <Section
        className="bg-[var(--section-d)]"
        eyebrow="Other services"
        title="Explore the full stack."
      >
        <div className="grid gap-3 md:grid-cols-4">
          {SERVICES.filter((s) => s.slug !== service.slug).map((s) => {
            const I = ICONS[s.icon] ?? Sparkles;
            return (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group flex items-center gap-3 rounded-xl border border-border bg-card p-4 hover:border-glow"
              >
                <div className="grid h-9 w-9 place-items-center rounded-md border border-glow">
                  <I className="h-4 w-4 text-gradient" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium">{s.title}</div>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground" />
              </Link>
            );
          })}
        </div>
      </Section>

      {/* ── CTA ─────────────────────────────────────────────────────────────
           Has its own background image — no section class needed
      ──────────────────────────────────────────────────────────────────────── */}
      <CTA
        title={`Ready to start your ${service.title.toLowerCase()} project?`}
        desc="Tell us about your goals — we'll send a tailored proposal within one business day."
      />
    </>
  );
}