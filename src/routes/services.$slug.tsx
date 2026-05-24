import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, ArrowUpRight, Check, Sparkles, Code2, Search, Target, MessageCircle, ShoppingBag, Plus, Minus, Zap, Palette, Layers, Wrench, Server } from "lucide-react";
import { PageHero, Section, CTA } from "@/components/section";
import { SERVICES, type Service } from "@/lib/site";
import { PROJECTS } from "@/lib/content";
import { PROJECT_IMAGES, SERVICE_IMAGES } from "@/lib/content";

import { seo, jsonLdScript, breadcrumbJsonLd, abs } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/services/$slug")({
  head: ({ params }) => {
    const s = SERVICES.find((x) => x.slug === params.slug);
    if (!s) return seo({ title: "Service — Globe Stack", description: "Globe Stack services.", path: `/services/${params.slug}` });
    const base = seo({ title: `${s.title} — Globe Stack`, description: s.blurb, path: `/services/${s.slug}` });
    const serviceLd = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: s.title,
      description: s.blurb,
      provider: { "@type": "Organization", name: SITE.name, url: abs("/") },
      areaServed: "Worldwide",
      url: abs(`/services/${s.slug}`),
    };
    const faqLd = s.faqs?.length ? {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: s.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    } : null;
    const crumbs = breadcrumbJsonLd([
      { name: "Home", path: "/" }, { name: "Services", path: "/services" }, { name: s.title, path: `/services/${s.slug}` },
    ]);
    return {
      ...base,
      scripts: [jsonLdScript(serviceLd), jsonLdScript(crumbs), ...(faqLd ? [jsonLdScript(faqLd)] : [])],
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
      <Link to="/services" className="mt-6 inline-flex rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground">All services</Link>
    </div>
  ),
});

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = { Code2, Search, Sparkles, Target, MessageCircle, ShoppingBag, Palette, Layers, Wrench, Server };

function ServicePage() {
  const { service } = Route.useLoaderData() as { service: Service };
  const Icon = ICONS[service.icon] ?? Sparkles;
  const related = PROJECTS.filter((p) => p.serviceSlug === service.slug).slice(0, 3);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <PageHero
        image={SERVICE_IMAGES[service.slug]}
        eyebrow="Service"
        title={<><span className="text-gradient">{service.title}</span></>}
        desc={service.blurb}
      >
        <div className="flex items-center gap-3">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground">Get a proposal <ArrowRight className="h-4 w-4" /></Link>
          <Link to="/services" className="inline-flex rounded-md border border-white/30 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10">All services</Link>
        </div>
      </PageHero>

{/* Overview — Text on left, framed image stack with badge on right */}
<Section
  eyebrow="Overview"
  title={
    <>
      What we do as your{" "}
      <span className="text-gradient">
        {service.title.toLowerCase()}
      </span>{" "}
      team.
    </>
  }
>
  <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
    
    {/* LEFT SIDE — Content */}
    <div className="space-y-6 lg:pr-10">
      <p className="text-pretty text-lg leading-relaxed text-muted-foreground max-w-xl">
        {service.overview}
      </p>

      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-3 text-sm">
          <div className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
            <Check className="h-3.5 w-3.5" />
          </div>
          <span className="text-muted-foreground font-medium">
            Ranked among the region's top-tier specialized teams
          </span>
        </div>

        <div className="flex items-center gap-3 text-sm">
          <div className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
            <Check className="h-3.5 w-3.5" />
          </div>
          <span className="text-muted-foreground font-medium">
            Multi-disciplinary execution spanning technical ecosystems
          </span>
        </div>

        <div className="flex items-center gap-3 text-sm">
          <div className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
            <Check className="h-3.5 w-3.5" />
          </div>
          <span className="text-muted-foreground font-medium">
            Trusted by leading enterprises and fast-growing institutions
          </span>
        </div>
      </div>

      <div className="pt-4">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background transition hover:opacity-90"
        >
          Read More <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </div>

    {/* RIGHT SIDE — Visual Frame */}
    <div className="relative mx-auto w-full max-w-md lg:max-w-lg lg:ml-auto">
      
      {/* Background offset frame */}
      <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-3xl bg-muted/40 dark:bg-zinc-900/40 -z-10 border border-border/40" />

      {/* Main image card */}
      <div className="relative aspect-[4/3.8] overflow-hidden rounded-3xl border border-border bg-card p-2 shadow-xl">
        <img
          src={
            SERVICE_IMAGES[service.slug] ||
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
          }
          alt={`${service.title} team preview`}
          className="h-full w-full rounded-2xl object-cover"
        />

        {/* Badge */}
        <div className="absolute bottom-6 right-6 flex items-center gap-3 rounded-2xl border border-border/80 bg-background/95 p-3.5 shadow-xl backdrop-blur-md">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gray-700 text-white shadow-md shadow-gray-500/20">
            <Icon className="h-5 w-5" />
          </div>

          <div className="flex flex-col pr-2">
            <span className="font-display text-sm font-bold text-foreground">
              Top-Tier
            </span>
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">
              Digital Excellence
            </span>
          </div>
        </div>
      </div>
    </div>

  </div>
</Section>
      {/* Who it's for — Image Category style with 4 columns layout */}
      <Section eyebrow="Who it's for" title="Built for teams like yours.">
        <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {service.whoFor.map((w, idx) => (
            <div key={w} className="group relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border bg-card transition duration-300 hover:border-white/40">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
              <img 
                src={`https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80&sig=${idx}`} 
                alt={w} 
                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute right-4 top-4 z-20 grid h-8 w-8 place-items-center rounded-full bg-white/10 border border-white/20 text-white backdrop-blur transition group-hover:bg-white group-hover:text-black">
                <ArrowUpRight className="h-4 w-4" />
              </div>
              <div className="absolute bottom-0 inset-x-0 p-5 z-20">
                <h3 className="font-display text-xl font-bold text-white tracking-tight">{w}</h3>
                <p className="mt-1.5 text-xs text-zinc-300 line-clamp-2 leading-relaxed">Tailored implementations built explicitly to accelerate performance, efficiency, and scale.</p>
              </div>
            </div>
          ))}
        </div>
      </Section>


      {/* Pricing */}
      <Section eyebrow="Pricing" title="Transparent pricing." desc="No surprise invoices. Pick the plan that fits.">
        <div className="grid gap-5 md:grid-cols-3">
          {service.pricing.map((tier) => (
            <div key={tier.name} className={`relative rounded-2xl border bg-card p-8 ${tier.featured ? "border-glow glow" : "border-border"}`}>
              {tier.featured && <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[var(--neon)] to-[var(--neon-violet)] px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-background">Most popular</div>}
              <div className="font-display text-lg font-semibold">{tier.name}</div>
              <div className="mt-4 font-display text-4xl font-bold">{tier.price}</div>
              <p className="mt-2 text-sm text-muted-foreground">{tier.desc}</p>
              <div className="my-6 h-px bg-border" />
              <ul className="space-y-2 text-sm">
                {tier.items.map((it) => (
                  <li key={it} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--neon)]" /><span>{it}</span></li>
                ))}
              </ul>
              <Link to="/contact" className={`mt-8 inline-flex w-full items-center justify-center rounded-md px-4 py-2.5 text-sm font-medium ${tier.featured ? "bg-primary text-primary-foreground" : "border border-border hover:bg-muted"}`}>Get started</Link>
            </div>
          ))}
        </div>
      </Section>

      {/* Problems we solve — Efforless Process style with process tracker row */}
      <Section eyebrow="Problems we solve" title="If any of this sounds familiar…" desc="These are the patterns we see in our discovery calls. We've built a playbook for each.">
        <div className="mx-auto max-w-6xl space-y-5">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {service.problems.map((p, i) => (
              <div key={p} className="flex flex-col justify-between rounded-2xl border border-white/[0.04] bg-[#121215] p-6 transition duration-300 hover:bg-white/[0.02]">
                <div>
                  <div className="font-mono text-xs font-bold tracking-widest text-[var(--neon)]">0{i + 1}.</div>
                  <h4 className="mt-3 font-display font-semibold text-white">Challenge Node</h4>
                  <p className="mt-2 text-xs leading-relaxed text-zinc-400">{p}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xl border border-white/[0.05] bg-white/[0.02] px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((n) => (
                  <div key={n} className="h-6 w-6 rounded-full border border-background bg-zinc-800 flex items-center justify-center text-[9px] font-bold text-white">U{n}</div>
                ))}
              </div>
              <span className="text-xs font-medium text-zinc-400">Align with Businesses that <strong className="text-white">Choose Quality</strong></span>
            </div>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-black transition hover:bg-zinc-200">
              Start Now <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </Section>

      {/* Benefits — Structured Grid Box (BankEase Guiding Principles Layout) */}
      <Section eyebrow="Benefits" title="What you actually get.">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {service.benefits.map((b) => (
              <div key={b.t} className="rounded-2xl border border-white/[0.06] bg-gradient-to-b from-white/[0.04] to-transparent p-6 shadow-xl transition duration-300 hover:border-white/[0.12]">
                <div className="grid h-10 w-10 place-items-center rounded-xl border border-white/[0.08] bg-white/[0.02]">
                  <Zap className="h-4 w-4 text-[var(--neon)]" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-white tracking-wide">{b.t}</h3>
                <p className="mt-2 text-xs leading-relaxed text-zinc-400">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Deliverables */}
      <Section eyebrow="Deliverables" title="Exactly what we hand over.">
        <div className="mx-auto grid max-w-5xl gap-3 md:grid-cols-2">
          {service.deliverables.map((d) => (
            <div key={d} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
              <div className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[var(--neon)] to-[var(--neon-violet)]"><Check className="h-3.5 w-3.5 text-background" /></div>
              <span className="text-sm">{d}</span>
            </div>
          ))}
        </div>
        {/* <div className="mx-auto mt-10 max-w-5xl">
          <h3 className="text-center font-mono text-xs uppercase tracking-wider text-muted-foreground">Capabilities</h3>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {service.features.map((f) => <span key={f} className="rounded-full border border-border bg-card px-3 py-1 text-xs">{f}</span>)}
          </div>
        </div> */}
      </Section>

      

      {/* Process — Linear step-by-step timeline with background text numbers */}
      <Section eyebrow="Process" title="How an engagement runs.">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-y-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-x-8">
            {service.process.map((p, i) => {
              // Map dynamic data step strings (e.g., "01", "1") to simple numbers for calculations
              const stepNum = parseInt(p.step, 10) || (i + 1);
              
              return (
                <div key={p.step} className="group relative flex flex-col items-start pl-2">
                  
                  {/* Huge background watermarked numbers (Adapts gracefully across light/dark modes) */}
                  <div className="absolute -top-8 left-0 select-none font-display text-8xl font-black text-foreground/[0.03] transition duration-300 group-hover:text-[var(--neon)]/[0.06]">
                    0{stepNum}
                  </div>

                  {/* Top connector bar and node indicator wrapper */}
                  <div className="relative flex w-full items-center mb-6">
                    {/* Icon Node Badge */}
                    <div className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-xl border transition-all duration-300 ${
                      stepNum === 3 
                        ? "bg-gradient-to-br from-[var(--neon)] to-[var(--neon-violet)] border-transparent text-background shadow-lg shadow-[var(--neon)]/20" 
                        : "bg-card border-border text-muted-foreground group-hover:border-foreground/40 group-hover:text-foreground"
                    }`}>
                      {/* Dynamically fallback through icons or display numeric value if empty */}
                      {stepNum === 1 && <Target className="h-5 w-5" />}
                      {stepNum === 2 && <Palette className="h-5 w-5" />}
                      {stepNum === 3 && <Code2 className="h-5 w-5" />}
                      {stepNum === 4 && <Layers className="h-5 w-5" />}
                      {stepNum > 4 && <Sparkles className="h-5 w-5" />}
                    </div>

                    {/* Connecting Timeline Horizontal Bar — Hidden on last element on desktop */}
                    {i < service.process.length - 1 && (
                      <div className="absolute left-12 right-0 top-1/2 h-px -translate-y-1/2 bg-border hidden lg:block">
                        {/* Interactive progress bridge line */}
                        <div className={`h-full w-1/2 transition-all duration-500 bg-gradient-to-r ${
                          stepNum === 2 ? "from-border to-[var(--neon)]" : stepNum === 3 ? "from-[var(--neon)] to-border" : "from-transparent to-transparent"
                        }`} />
                        {/* Miniature step sequence point marker */}
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 bg-background px-1.5 font-mono text-[9px] tracking-tight text-muted-foreground/60 border border-border/40 rounded">
                          0{stepNum}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Text Details Area */}
                  <div className="relative z-10">
                    <h3 className={`font-display text-xl font-bold tracking-tight transition-colors ${
                      stepNum === 3 ? "text-[var(--neon)]" : "text-foreground"
                    }`}>
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground max-w-[260px]">
                      {p.desc}
                    </p>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </Section>
            {/* FAQ */}
      <Section eyebrow="FAQ" title="Common questions.">
        <div className="mx-auto max-w-3xl divide-y divide-border rounded-2xl border border-border bg-card">
          {service.faqs.map((f, i) => (
            <button key={f.q} onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full px-6 py-5 text-left">
              <div className="flex items-center justify-between gap-4">
                <span className="font-medium">{f.q}</span>
                {openFaq === i ? <Minus className="h-4 w-4 shrink-0" /> : <Plus className="h-4 w-4 shrink-0" />}
              </div>
              {openFaq === i && <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>}
            </button>
          ))}
        </div>
      </Section>

      {/* Related portfolio */}
      {related.length > 0 && (
        <Section eyebrow="Related work" title="Recent projects in this discipline.">
          <div className="grid gap-5 md:grid-cols-3">
            {related.map((p) => (
              <Link key={p.slug} to="/portfolio/$slug" params={{ slug: p.slug }} className="group overflow-hidden rounded-2xl border border-border bg-card transition hover:border-glow">
                <div className="relative h-48 overflow-hidden">
                  <img src={PROJECT_IMAGES[p.slug]} alt={p.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-white/90 text-black backdrop-blur"><ArrowUpRight className="h-4 w-4" /></div>
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



      {/* Other services */}
      <Section eyebrow="Other services" title="Explore the full stack.">
        <div className="grid gap-3 md:grid-cols-4">
          {SERVICES.filter((s) => s.slug !== service.slug).map((s) => {
            const I = ICONS[s.icon] ?? Sparkles;
            return (
              <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }} className="group flex items-center gap-3 rounded-xl border border-border bg-card p-4 hover:border-glow">
                <div className="grid h-9 w-9 place-items-center rounded-md border border-glow"><I className="h-4 w-4 text-gradient" /></div>
                <div className="flex-1">
                  <div className="text-sm font-medium">{s.title}</div>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground" />
              </Link>
            );
          })}
        </div>
      </Section>

      <CTA title={`Ready to start your ${service.title.toLowerCase()} project?`} desc="Tell us about your goals — we'll send a tailored proposal within one business day." />
    </>
  );
}