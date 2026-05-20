import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  Plus,
  Minus,
  ArrowRight,
  Zap,
  Globe,
  Layout,
  Search,
  Bot,
  Megaphone,
  ShoppingBag,
  Wrench,
  Server,
} from "lucide-react";
import { PageHero, Section, CTA } from "@/components/section";
import { PRICING_SERVICES, PRICING_FAQ } from "@/lib/pricing";
import { seo, jsonLdScript } from "@/lib/seo";
import { SITE } from "@/lib/site";

// ---------------------------------------------------------------------------
// Route
// ---------------------------------------------------------------------------

export const Route = createFileRoute("/pricing")({
  head: () => {
    const base = seo({
      title: "Pricing — Web, SaaS, UI/UX, SEO, AI, Shopify | Globe Stack",
      description:
        "Transparent pricing in USD and NGN for web development, SaaS, UI/UX, SEO, AI, social & ads, Shopify, maintenance, and backend/API. Serving Nigeria, USA, UK, Canada, India, EU and worldwide.",
      path: "/pricing",
    });
    const faqLd = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: PRICING_FAQ.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    };
    return { ...base, scripts: [jsonLdScript(faqLd)] };
  },
  component: PricingPage,
});

// ---------------------------------------------------------------------------
// Slug → icon map (keeps pricing.ts data-only)
// ---------------------------------------------------------------------------

const SERVICE_ICONS: Record<string, React.ElementType> = {
  "web-development": Globe,
  saas: Zap,
  "ui-ux": Layout,
  seo: Search,
  ai: Bot,
  "social-ads": Megaphone,
  shopify: ShoppingBag,
  maintenance: Wrench,
  "backend-api": Server,
};

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

function PricingPage() {
  const [filter, setFilter] = useState<string>("all");
  const [currency, setCurrency] = useState<"USD" | "NGN">("USD");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const visible = useMemo(
    () =>
      filter === "all"
        ? PRICING_SERVICES
        : PRICING_SERVICES.filter((s) => s.slug === filter),
    [filter]
  );

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <PageHero
        image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&q=80"
        eyebrow="Pricing"
        title={
          <>
            Plans for every{" "}
            <span className="text-gradient">stage of growth.</span>
          </>
        }
        desc={`Filter by service, toggle between USD and NGN, compare plans, and get started. Serving ${SITE.name} clients in Nigeria, USA, UK, Canada, India, and worldwide.`}
      >
        <div className="flex flex-wrap items-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Get a custom quote <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center rounded-lg border border-white/30 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors"
          >
            All services
          </Link>
        </div>
      </PageHero>

      {/* ── Sticky filter bar ────────────────────────────────────────────── */}
      <div className="sticky top-16 z-30 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex py-3 items-center justify-between">
            {/* Filter pills */}
            <div className="flex flex-wrap items-center gap-1.5 min-w-0">
              <FilterPill
                active={filter === "all"}
                onClick={() => setFilter("all")}
              >
                All services
              </FilterPill>
              {PRICING_SERVICES.map((s) => {
                const Icon = SERVICE_ICONS[s.slug];
                return (
                  <FilterPill
                    key={s.slug}
                    active={filter === s.slug}
                    onClick={() => setFilter(s.slug)}
                  >
                    {Icon && <Icon className="h-3 w-3 shrink-0" />}
                    {s.title}
                  </FilterPill>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ── Pricing sections ─────────────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl space-y-20 px-4 py-16 md:px-6">
        {visible.map((svc, idx) => {
          const Icon = SERVICE_ICONS[svc.slug];
          return (
            <motion.section
              key={svc.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: idx * 0.04 }}
            >
              {/* Section Header with Centered Currency Switcher */}
              <div className="mb-10 flex flex-col gap-6 border-b border-border/60 pb-6">
                
                {/* Top Row: Title & Link */}
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start gap-3">
                    {Icon && (
                      <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground">
                        <Icon className="h-5 w-5" />
                      </div>
                    )}
                    <div>
                      <div className="flex items-center gap-3">
                        <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                          Pricing Package
                        </p>
                      </div>
                      <h2 className="mt-0.5 font-display text-2xl font-bold md:text-3xl">
                        {svc.title}
                      </h2>
                    </div>
                  </div>
                  
                  <Link
                    to="/services/$slug"
                    params={{ slug: svc.slug }}
                    className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors shrink-0 sm:mt-1"
                  >
                    Service details <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>

                {/* Bottom Row: Perfectly Centered Currency Toggle */}
                <div className="flex w-full justify-center pt-2">
                  <div className="inline-flex shrink-0 items-center rounded-xl border border-border bg-card p-1 text-sm shadow-sm">
                    <button
                      onClick={() => setCurrency("USD")}
                      className={`rounded-lg px-4 py-1.5 text-xs font-semibold transition-all ${
                        currency === "USD"
                          ? "bg-primary text-primary-foreground shadow-sm"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      USD $
                    </button>
                    <button
                      onClick={() => setCurrency("NGN")}
                      className={`rounded-lg px-4 py-1.5 text-xs font-semibold transition-all ${
                        currency === "NGN"
                          ? "bg-primary text-primary-foreground shadow-sm"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      NGN ₦
                    </button>
                  </div>
                </div>

              </div>
              {/* Tier cards */}
              <div className="grid gap-5 md:grid-cols-3">
                {svc.tiers.map((tier) => {
                  const price =
                    currency === "USD" ? tier.usd : tier.ngn;
                  const isMonthly = price.includes("/mo");
                  const basePrice = price.replace("/mo", "");

                  return (
                    <div
                      key={tier.name}
                      className={`relative flex flex-col rounded-2xl border bg-card p-7 transition-all hover:shadow-md ${
                        tier.featured
                          ? "border-[var(--neon)] ring-1 ring-[var(--neon)]/20"
                          : "border-border"
                      }`}
                    >
                      {/* Popular badge */}
                      {tier.featured && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                          <span className="inline-flex items-center rounded-full bg-gradient-to-r from-[var(--neon)] to-[var(--neon-violet)] px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-background">
                            Most popular
                          </span>
                        </div>
                      )}

                      {/* Tier name */}
                      <p className="font-display text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                        {tier.name}
                      </p>

                      {/* Price */}
                      <div className="mt-3 flex items-end gap-1">
                        <span className="font-display text-3xl font-bold leading-none md:text-4xl">
                          {basePrice}
                        </span>
                        {isMonthly && (
                          <span className="mb-0.5 text-sm text-muted-foreground">
                            /mo
                          </span>
                        )}
                      </div>

                      {/* Description */}
                      <p className="mt-2 text-sm text-muted-foreground">
                        {tier.desc}
                      </p>

                      <div className="my-5 h-px bg-border" />

                      {/* Feature list */}
                      <ul className="flex flex-1 flex-col gap-2.5">
                        {tier.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 text-sm"
                          >
                            <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[var(--neon)]/15">
                              <Check className="h-2.5 w-2.5 text-[var(--neon)]" />
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA */}
                      <Link
                        to="/contact"
                        className={`mt-7 inline-flex w-full items-center justify-center rounded-lg px-4 py-2.5 text-sm font-medium transition-all ${
                          tier.featured
                            ? "bg-primary text-primary-foreground hover:opacity-90"
                            : "border border-border hover:bg-muted"
                        }`}
                      >
                        {price === "Custom" ? "Request a quote" : "Get started"}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </motion.section>
          );
        })}
      </div>

      {/* ── Compare table ────────────────────────────────────────────────── */}
      <Section
        eyebrow="Compare"
        title="All plans side by side."
        desc={`Compare every tier${
          filter !== "all" ? ` for ${visible[0]?.title}` : ""
        }. Toggle currency above.`}
      >
        <div className="overflow-x-auto rounded-2xl border border-border bg-card">
          <table className="min-w-full text-sm">
            <thead className="border-b border-border bg-muted/40">
              <tr>
                {(
                  [
                    ["Service", "w-40"],
                    ["Tier", "w-36"],
                    [`Price (${currency})`, "w-40"],
                    ["Top inclusions", ""],
                  ] as [string, string][]
                ).map(([label, width]) => (
                  <th
                    key={label}
                    className={`px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground ${width}`}
                  >
                    {label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {visible.flatMap((svc) =>
                svc.tiers.map((t) => (
                  <tr
                    key={`${svc.slug}-${t.name}`}
                    className={`transition-colors hover:bg-muted/30 ${
                      t.featured ? "bg-[var(--neon)]/[0.03]" : ""
                    }`}
                  >
                    <td className="px-5 py-4 font-medium">{svc.title}</td>
                    <td className="px-5 py-4">
                      <span className="inline-flex items-center gap-2">
                        {t.name}
                        {t.featured && (
                          <span className="rounded-full bg-[var(--neon)]/15 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-[var(--neon)]">
                            Popular
                          </span>
                        )}
                      </span>
                    </td>
                    <td className="px-5 py-4 font-mono text-sm">
                      {currency === "USD" ? t.usd : t.ngn}
                    </td>
                    <td className="px-5 py-4 text-muted-foreground">
                      {t.items.slice(0, 3).join(" · ")}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </Section>

      {/* ── Custom build CTA ─────────────────────────────────────────────── */}
      <Section>
        <div className="relative overflow-hidden rounded-3xl border border-glow bg-card">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=80"
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover opacity-[0.12]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/95" />

          <div className="relative grid gap-8 p-10 md:grid-cols-[1.6fr_1fr] md:items-center md:p-14">
            <div>
              <span className="inline-flex rounded-full border border-glow px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-gradient">
                Custom builds
              </span>
              <h3 className="mt-3 font-display text-3xl font-bold leading-tight md:text-4xl">
                Need something built{" "}
                <span className="text-gradient">exactly for you?</span>
              </h3>
              <p className="mt-3 max-w-lg text-base text-muted-foreground">
                None of the tiers fit? Reach out — we'll scope a bespoke build,
                send a fixed-price proposal, and start within 5 business days.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
              >
                Reach out to us <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center justify-center rounded-lg border border-border bg-background/50 px-5 py-3 text-sm font-medium hover:bg-muted transition-colors"
              >
                See case studies
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <Section eyebrow="FAQ" title="Pricing questions, answered.">
        <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-border bg-card">
          {PRICING_FAQ.map((f, i) => (
            <div key={f.q} className="border-b border-border last:border-0">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-muted/40"
                aria-expanded={openFaq === i}
              >
                <span className="text-sm font-medium">{f.q}</span>
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground">
                  {openFaq === i ? (
                    <Minus className="h-3 w-3" />
                  ) : (
                    <Plus className="h-3 w-3" />
                  )}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {openFaq === i && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.22, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">
                      {f.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Footer CTA ───────────────────────────────────────────────────── */}
      <CTA
        title="Ready to start?"
        desc="Pick a tier or get a custom quote — we'll respond within one business day."
      />
    </>
  );
}

// ---------------------------------------------------------------------------
// FilterPill 
// ---------------------------------------------------------------------------

function FilterPill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
        active
          ? "bg-primary text-primary-foreground"
          : "border border-border text-muted-foreground hover:bg-muted hover:text-foreground"
      }`}
    >
      {children}
    </button>
  );
}