import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Plus, Minus, ArrowRight, Lightbulb, Pen, Terminal, Rocket } from "lucide-react";
import { ArrowUpRight, Sparkles, Code2, Search, Target, MessageCircle, ShoppingBag, Palette, Layers, Wrench, Server } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { PageHero, CTA } from "@/components/section";
import { SERVICES } from "@/lib/site";
import { SERVICE_IMAGES, HERO_IMAGES, STACK } from "@/lib/content";
import { SERVICES_FAQ, SERVICES_WHY_US, SERVICES_PROCESS } from "@/lib/services-index-data";
import { WhyChooseUsSection } from "./WhyChooseUsSection";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/services/")({
  head: () =>
    seo({
      title: "Services — Globe Stack",
      description:
        "Web Development, SEO, AI Solutions, Ads Management, Social Media, and Shopify Store Design — all under one roof.",
      path: "/services",
    }),
  component: ServicesIndex,
});

// const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
//   Code2,
//   Search,
//   Sparkles,
//   Target,
//   MessageCircle,
//   ShoppingBag,
// };

const PROCESS_ICONS = [Lightbulb, Pen, Terminal, Rocket];

// Tech icon mapping — uses SVG logos from devicons CDN
const TECH_LOGOS: Record<string, string> = {
  TypeScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  TanStack: "https://avatars.githubusercontent.com/u/72518640?s=200&v=4",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  PostgreSQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  Supabase: "https://avatars.githubusercontent.com/u/54469796?s=200&v=4",
  Cloudflare: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg",
  Vercel: "https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png",
  OpenAI: "https://avatars.githubusercontent.com/u/14957082?s=200&v=4",
  Anthropic: "https://avatars.githubusercontent.com/u/76263028?s=200&v=4",
  Shopify: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/shopify/shopify-original.svg",
  Hydrogen: "https://cdn.shopify.com/s/files/1/0551/4566/0472/files/Shopify_Hydrogen_Logo_200x200.png",
  Tailwind: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  Figma: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  GA4: "https://www.gstatic.com/analytics-suite/header/suite/v2/ic_analytics.ico",
  "Meta Ads": "https://static.xx.fbcdn.net/rsrc.php/yD/r/d4ZIVX-5C-b.ico",
};
const ICONS: Record<string, React.ComponentType<{ className?: string }>> = { Code2, Search, Sparkles, Target, MessageCircle, ShoppingBag, Palette, Layers, Wrench, Server };

function ServicesIndex() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <PageHero
        image={HERO_IMAGES.services}
        eyebrow="Services"
        title={
          <>
            Six disciplines. <span className="text-gradient">One senior team.</span>
          </>
        }
        desc="Pick a single service or let us run end-to-end. Each engagement is led by a senior operator, never an account manager."
      />

      {/* ── Services Grid with header ── */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        {/* Section header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">What we do</p>
          <h2 className="mt-3 font-display text-4xl font-bold leading-tight md:text-5xl">
            Everything your brand needs to{" "}
            <span className="text-gradient">grow online.</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            From zero-to-one product builds to ongoing performance growth — our six practices cover the full digital stack.
            Each is run by a senior team with a proven playbook, not a generalist juggling thirty accounts.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon] ?? Sparkles;
            return (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: (i % 6) * 0.06 }}
                whileHover={{ y: -6 }}
              >
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="group relative block aspect-[4/3] overflow-hidden rounded-3xl border border-border"
                >
                  <img
                    src={SERVICE_IMAGES[s.slug]}
                    alt={s.title}
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
                  <div className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-xl border border-white/20 bg-white/10 text-white backdrop-blur">
                    <Icon className="h-5 w-5" />
                  </div>
                  <ArrowUpRight className="absolute right-5 top-1/2 h-5 w-5 text-white/70 opacity-0 transition group-hover:opacity-100" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <h2 className="font-display text-2xl font-semibold">{s.title}</h2>
                    <p className="mt-2 line-clamp-2 text-sm text-white/85">{s.blurb}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {s.features.slice(0, 3).map((f) => (
                        <span key={f} className="rounded-md bg-white/10 px-2 py-0.5 text-[11px] backdrop-blur">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── Process Section ── */}
      <section className="border-t border-border bg-card/40 px-4 py-24 md:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">How we work</p>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
              A process built for results.
            </h2>
          </div>

          <div className="relative grid gap-0 md:grid-cols-4">
            {/* Connector line */}
            <div className="absolute left-0 right-0 top-[52px] hidden h-px bg-border md:block" />

            {SERVICES_PROCESS.map((step, i) => {
              const StepIcon = PROCESS_ICONS[i] ?? Sparkles;
              const isActive = i === 2; // highlight "Build" step like in the screenshot
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative px-6 pb-0 pt-0 first:pl-0 last:pr-0"
                >
                  {/* Icon bubble */}
                  <div
                    className={`relative z-10 mb-6 grid h-[52px] w-[52px] place-items-center rounded-xl border ${
                      isActive
                        ? "border-transparent bg-gradient-to-br from-[var(--neon)] to-[var(--neon-violet)] text-background shadow-lg shadow-[var(--neon)]/30"
                        : "border-border bg-card text-muted-foreground"
                    }`}
                  >
                    <StepIcon className="h-5 w-5" />
                    {/* Step number badge */}
                    <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full border border-border bg-background font-mono text-[10px] text-muted-foreground">
                      {step.step}
                    </span>
                  </div>

                  {/* Big ghost number */}
                  <div
                    className={`absolute -top-2 left-4 font-display text-8xl font-bold leading-none select-none ${
                      isActive ? "text-[var(--neon)]/10" : "text-muted/10"
                    }`}
                  >
                    {step.step}
                  </div>

                  <h3
                    className={`relative font-display text-xl font-semibold ${
                      isActive ? "text-[var(--neon)]" : ""
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Tech Stack Section ── */}
      <section className="border-t border-border px-4 py-24 md:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 md:grid-cols-2 md:items-center">
            {/* Left text */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Our Tech Stack</p>
              <h2 className="mt-3 font-display text-4xl font-bold leading-tight md:text-5xl">
                Key Technologies &{" "}
                <span className="text-gradient">Platforms</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                We work with leading platforms and technologies that empower digital transformation, accelerate delivery,
                and drive measurable business results.
              </p>
              <Link
                to="/services"
                className="mt-8 inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-3 text-sm font-medium text-background transition hover:opacity-90"
              >
                Explore Tech Stack <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>

            {/* Right grid of tech icons */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur"
            >
              <div className="grid grid-cols-4 gap-3">
                {STACK.slice(0, 16).map((tech, i) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.04 }}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="group flex h-[72px] w-full flex-col items-center justify-center gap-1.5 rounded-xl border border-border bg-background/60 p-2 transition hover:border-glow hover:shadow-sm"
                    title={tech}
                  >
                    {TECH_LOGOS[tech] ? (
                      <img
                        src={TECH_LOGOS[tech]}
                        alt={tech}
                        className="h-8 w-8 object-contain"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).style.display = "none";
                        }}
                      />
                    ) : (
                      <div className="grid h-8 w-8 place-items-center rounded-md bg-gradient-to-br from-[var(--neon)]/20 to-[var(--neon-violet)]/20 text-[10px] font-bold text-gradient">
                        {tech.slice(0, 2)}
                      </div>
                    )}
                    <span className="truncate text-center font-mono text-[9px] text-muted-foreground">{tech}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us — Your Goals, Our Commitment */}
      <WhyChooseUsSection />

      {/* ── FAQ Section ── */}
      <section className="border-t border-border px-4 py-24 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">FAQ</p>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
            Common <span className="text-gradient">questions.</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Everything you need to know before reaching out.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl divide-y divide-border rounded-2xl border border-border bg-card">
          {SERVICES_FAQ.map((f, i) => (
            <button
              key={f.q}
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
              className="w-full px-6 py-5 text-left transition hover:bg-muted/30"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="font-medium">{f.q}</span>
                {openFaq === i ? <Minus className="h-4 w-4 shrink-0 text-muted-foreground" /> : <Plus className="h-4 w-4 shrink-0 text-muted-foreground" />}
              </div>
              {openFaq === i && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mt-3 text-sm leading-relaxed text-muted-foreground"
                >
                  {f.a}
                </motion.p>
              )}
            </button>
          ))}
        </div>
      </section>

      <CTA
        title="Ready to build something great?"
        desc="Tell us about your goals — we'll send a tailored proposal within one business day."
      />
    </>
  );
}