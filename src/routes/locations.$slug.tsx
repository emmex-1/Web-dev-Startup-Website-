import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { PageHero, Section, CTA } from "@/components/section";
import { LOCATIONS, findLocation, type Location } from "@/lib/locations";
import { SERVICES } from "@/lib/site";
import { seo, jsonLdScript, breadcrumbJsonLd, abs } from "@/lib/seo";

export const Route = createFileRoute("/locations/$slug")({
  head: ({ params }) => {
    const l = findLocation(params.slug);
    if (!l) return seo({ title: "Location — Globe Stack", description: "Globe Stack locations.", path: `/locations/${params.slug}` });
    const base = seo({
      title: `Web, SaaS, AI, SEO & Shopify in ${l.city} | Globe Stack`,
      description: `${l.intro} Keywords: ${l.localKeywords.join(", ")}.`,
      path: `/locations/${l.slug}`,
    });
    const placeLd = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: `Globe Stack — ${l.city}`,
      description: l.intro,
      address: { "@type": "PostalAddress", addressCountry: l.countryCode, addressRegion: l.region },
      areaServed: l.city,
      url: abs(`/locations/${l.slug}`),
    };
    const crumbs = breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Locations", path: "/locations" },
      { name: l.city, path: `/locations/${l.slug}` },
    ]);
    return { ...base, scripts: [jsonLdScript(placeLd), jsonLdScript(crumbs)] };
  },
  loader: ({ params }) => {
    const l = findLocation(params.slug);
    if (!l) throw notFound();
    return { location: l };
  },
  component: LocationPage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-4 py-32 text-center">
      <h1 className="text-4xl font-bold">Location not found</h1>
      <Link to="/locations" className="mt-6 inline-flex rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground">All locations</Link>
    </div>
  ),
});

function LocationPage() {
  const { location: l } = Route.useLoaderData() as { location: Location };
  return (
    <>
      <PageHero
        image={l.hero}
        eyebrow={`${l.flag} ${l.region}`}
        title={<>Web, SaaS & growth in <span className="text-gradient">{l.city}</span>.</>}
        desc={l.intro}
      >
        <div className="flex flex-wrap items-center gap-3">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground">
            Start a project <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/pricing" className="inline-flex rounded-md border border-white/30 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10">See pricing</Link>
        </div>
      </PageHero>

      <Section eyebrow="Why local" title={`Why teams in ${l.city} pick Globe Stack.`}>
        <div className="grid gap-5 md:grid-cols-3">
          {l.highlights.map((h) => (
            <div key={h.t} className="rounded-2xl border border-border bg-card p-6">
              <div className="font-display text-lg font-semibold">{h.t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{h.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Services" title={`Services we deliver in ${l.city}.`}>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="group flex items-start justify-between gap-3 rounded-xl border border-border bg-card p-5 hover:border-glow"
            >
              <div>
                <div className="font-display text-base font-semibold">{s.title}</div>
                {/* <div className="mt-1 text-xs text-muted-foreground">{s.short}</div> */}
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground" />
            </Link>
          ))}
        </div>
      </Section>

      <Section eyebrow="Industries" title={`Industries we serve in ${l.city}.`}>
        <div className="flex flex-wrap justify-center gap-2">
          {l.industries.map((i) => (
            <span key={i} className="rounded-full border border-border bg-card px-4 py-1.5 text-sm">{i}</span>
          ))}
        </div>
      </Section>

      <Section eyebrow="SEO keywords" title="What clients search for here.">
        <div className="mx-auto grid max-w-4xl gap-3 md:grid-cols-2">
          {l.localKeywords.map((k) => (
            <div key={k} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--neon)]" />
              <span className="text-sm">{k}</span>
            </div>
          ))}
        </div>
      </Section>

      {l.testimonial && (
        <Section>
          <blockquote className="mx-auto max-w-3xl rounded-3xl border border-glow bg-card p-10 text-center">
            <p className="font-display text-xl leading-relaxed md:text-2xl">"{l.testimonial.quote}"</p>
            <footer className="mt-6 text-sm text-muted-foreground">— {l.testimonial.name}, {l.testimonial.role}</footer>
          </blockquote>
        </Section>
      )}

      <Section eyebrow="Other locations" title="Or explore other regions.">
        <div className="flex flex-wrap justify-center gap-2">
          {LOCATIONS.filter((x) => x.slug !== l.slug).map((x) => (
            <Link key={x.slug} to="/locations/$slug" params={{ slug: x.slug }} className="rounded-full border border-border bg-card px-4 py-1.5 text-sm hover:border-glow">
              {x.flag} {x.city}
            </Link>
          ))}
        </div>
      </Section>

      <CTA title={`Ready to build in ${l.city}?`} desc="Tell us what you need — we'll send a tailored proposal in your local currency." />
    </>
  );
}
