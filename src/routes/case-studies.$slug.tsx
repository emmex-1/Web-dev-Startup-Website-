import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { PageHero, Section, CTA } from "@/components/section";
import { CASE_STUDIES, CASE_IMAGES } from "@/lib/content";

import { seo, jsonLdScript, breadcrumbJsonLd, abs } from "@/lib/seo";

export const Route = createFileRoute("/case-studies/$slug")({
  head: ({ params }) => {
    const c = CASE_STUDIES.find((x) => x.slug === params.slug);
    if (!c) return seo({ title: "Case Study — Globe Stack", description: "Case study.", path: `/case-studies/${params.slug}` });
    const base = seo({ title: `${c.title} — Case Study — Globe Stack`, description: c.overview, path: `/case-studies/${c.slug}`, type: "article" });
    const articleLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: c.title,
      description: c.overview,
      author: { "@type": "Organization", name: "Globe Stack" },
      publisher: { "@type": "Organization", name: "Globe Stack" },
      url: abs(`/case-studies/${c.slug}`),
      about: c.industry,
    };
    const crumbs = breadcrumbJsonLd([
      { name: "Home", path: "/" }, { name: "Case Studies", path: "/case-studies" }, { name: c.title, path: `/case-studies/${c.slug}` },
    ]);
    return { ...base, scripts: [jsonLdScript(articleLd), jsonLdScript(crumbs)] };
  },
  loader: ({ params }) => {
    const study = CASE_STUDIES.find((c) => c.slug === params.slug);
    if (!study) throw notFound();
    return { study };
  },
  component: CaseStudyPage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-4 py-32 text-center">
      <h1 className="text-4xl font-bold">Case study not found</h1>
      <Link to="/case-studies" className="mt-6 inline-flex rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground">All case studies</Link>
    </div>
  ),
});

function CaseStudyPage() {
  const { study } = Route.useLoaderData() as { study: typeof CASE_STUDIES[number] };
  const more = CASE_STUDIES.filter((c) => c.slug !== study.slug).slice(0, 3);

  return (
    <>
      <PageHero
        image={CASE_IMAGES[study.slug]}
        eyebrow={`${study.client} · ${study.industry}`}
        title={<>{study.title}</>}
        desc={study.overview}
      >
        <div className="flex flex-wrap items-center gap-3">
          <div className="rounded-full border border-glow bg-card px-4 py-2 font-mono text-xs uppercase tracking-wider text-gradient">{study.result}</div>
          <div className="rounded-full border border-border bg-card px-4 py-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">{study.duration}</div>
          <Link to="/case-studies" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-muted"><ArrowLeft className="h-4 w-4" /> All studies</Link>
        </div>
      </PageHero>

      {/* Screenshot */}
      <div className="mx-auto max-w-7xl px-4 pt-12 md:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-glow">
          <img src={CASE_IMAGES[study.slug]} alt={study.title} className="h-[380px] w-full object-cover md:h-[460px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <div className="font-mono text-xs uppercase tracking-wider opacity-80">Project</div>
            <div className="mt-2 font-display text-3xl font-bold md:text-5xl">{study.client}</div>
          </div>
        </div>
      </div>

      {/* Problem + Solution */}
      <Section eyebrow="The brief" title="Problem & solution.">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="font-mono text-xs uppercase text-muted-foreground">Problem</div>
            <p className="mt-3 text-pretty leading-relaxed">{study.problem}</p>
          </div>
          <div className="rounded-2xl border border-glow bg-card p-8">
            <div className="font-mono text-xs uppercase text-gradient">Solution</div>
            <p className="mt-3 text-pretty leading-relaxed">{study.solution}</p>
          </div>
        </div>
      </Section>

      {/* Process */}
      <Section eyebrow="Process" title="How we got there.">
        <div className="grid gap-4 md:grid-cols-4">
          {study.process.map((p) => (
            <div key={p.step} className="rounded-2xl border border-border bg-card p-6">
              <div className="font-mono text-xs text-gradient">{p.step}</div>
              <h3 className="mt-2 font-display text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Results */}
      <Section eyebrow="Results" title="Outcomes that moved the business.">
        <div className="grid gap-5 md:grid-cols-4">
          {study.results.map((r) => (
            <div key={r.label} className="rounded-2xl border border-glow bg-card p-8 text-center">
              <div className="font-display text-4xl font-bold text-gradient">{r.value}</div>
              <div className="mt-2 text-sm text-muted-foreground">{r.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Screenshots placeholder grid */}
      <Section eyebrow="Screenshots" title="From the build.">
        <div className="grid gap-5 md:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className={`relative h-56 overflow-hidden rounded-2xl border border-border bg-gradient-to-br ${study.color}`}>
              <div className="absolute inset-0 bg-grid opacity-30" />
              <div className="absolute bottom-3 left-3 rounded-full border border-glow bg-background/60 px-2 py-0.5 font-mono text-[10px] uppercase backdrop-blur">Screen {i + 1}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* More */}
      <Section eyebrow="More studies" title="Keep reading.">
        <div className="grid gap-5 md:grid-cols-3">
          {more.map((c) => (
            <Link key={c.slug} to="/case-studies/$slug" params={{ slug: c.slug }} className="group rounded-2xl border border-border bg-card p-6 transition hover:border-glow">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>{c.industry}</span><span className="ml-auto rounded-full border border-glow px-2 py-0.5 font-mono text-[10px] uppercase text-gradient">{c.result}</span>
              </div>
              <h3 className="mt-3 font-display text-lg font-semibold leading-snug">{c.title}</h3>
              <div className="mt-4 inline-flex items-center gap-1 text-sm text-gradient">Read <ArrowUpRight className="h-4 w-4" /></div>
            </Link>
          ))}
        </div>
      </Section>

      <CTA />
    </>
  );
}
