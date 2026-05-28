import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, CheckCircle } from "lucide-react";
import { PageHero, CTA } from "@/components/section";
import { HERO_IMAGES } from "@/lib/content";
import { seo } from "@/lib/seo";
import { motion } from "framer-motion";

import solImage from "/media/yo.jfif";
import aceImage from "/media/yoy.jfif";

// Modular Section Components Imports
import { StorySection } from "../components/story-section";
import { TeamSection } from "../components/TeamSection";
import { WhyChooseUsSection } from "../components/WhyChooseUsSection";
import { ValuesSection } from "../components/ValuesSection";
import { PartnershipsSection } from "../components/PartnershipsSection";
import { MissionVisionSection } from "../components/MissionVisionSection";

export const Route = createFileRoute("/about")({
  head: () =>
    seo({
      title: "About | Rexsolv",
      description:
        "Rexsolv is a senior-only tech studio building websites, AI systems, and growth engines for ambitious brands.",
      path: "/about",
    }),
  component: AboutPage,
});

const STATS = [
  { v: "20+", l: "Projects shipped" },
  { v: "25+", l: "Happy clients" },
  { v: "7y", l: "Avg. senior experience" },
  { v: "98%", l: "Client growth" },
];

function AboutPage() {
  return (
    // FIX: Wrapped whole page container with overflow-x-hidden to neutralize unexpected layout shifts
    <div className="w-full overflow-x-hidden">
      <PageHero
        image={HERO_IMAGES.about}
        eyebrow="About"
        title={<>Built by senior operators, for ambitious brands.</>}
        desc="Rexsolv is a small, senior-only studio. We take on a handful of clients per quarter and treat each project like it's our own."
      >
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform active:scale-[0.98] hover:opacity-90"
        >
          Work with us <ArrowRight className="h-4 w-4" />
        </Link>
      </PageHero>

      {/* Story — Interactive timeline */}
      <StorySection />

      {/* Stats strip */}
      <section className="border-b border-border bg-[var(--section-b)] py-10 transition-colors duration-300">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 gap-x-4 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
          {STATS.map((s) => (
            <div key={s.l} className="text-center">
              <div className="font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
                {s.v}
              </div>
              <div className="mt-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground sm:text-xs">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MISSION & VISION SECTION */}
      <section className="py-16 sm:py-24 bg-background text-foreground border-b border-border overflow-hidden transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[72px] max-w-[1200px] mx-auto items-start min-w-0">

            {/* Left Column */}
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-2 mb-5">
                <span className="text-[oklch(0.78_0.18_195)] text-xl">•</span>
                <span className="text-muted-foreground text-sm font-semibold tracking-wide">
                  Our Identity
                </span>
              </div>
              <h2 className="text-foreground font-display font-bold leading-tight mb-5 text-3xl sm:text-4xl">
                A Purposeful Blueprint<br />for Modern<br />Digital Craft.
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-[420px] mb-10">
                Rexsolv counters the industry standard of bloated agency timelines. We combine hyper-focused senior talent with transparent engineering practices to take products from concept to launch efficiently.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex-1 rounded-[18px] min-h-[340px] relative overflow-hidden flex flex-col justify-end group border border-border/40 shadow-sm"
              >
                <img src={solImage} alt="Our Mission" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/10" />
                <span
                  className="absolute top-2 right-4 text-white/5 font-bold leading-none select-none pointer-events-none font-display"
                  style={{ fontSize: "clamp(4rem, 15vw, 7.5rem)" }}
                >
                  M
                </span>
                <div className="relative z-10 p-7">
                  <div className="inline-flex items-center gap-2 bg-[oklch(0.78_0.18_195)]/20 border border-[oklch(0.78_0.18_195)]/30 rounded-full px-3.5 py-1 mb-3 w-fit">
                    <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.78_0.18_195)] inline-block" />
                    <span className="text-[oklch(0.78_0.18_195)] text-[10px] font-bold tracking-[0.15em] uppercase">Mission</span>
                  </div>
                  <h3 className="text-white font-bold text-2xl sm:text-3xl mb-3 font-display">Why We Build</h3>
                  <ul className="space-y-2">
                    {[
                      "Ship production-grade web and AI systems that scale",
                      "Enforce senior execution across every sprint and stack layer",
                      "Keep teams lean to eliminate unnecessary overhead and delay",
                      "Deliver transparent, stack-agnostic, enterprise-ready architecture"
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-white/80 text-sm">
                        <CheckCircle size={13} className="text-[oklch(0.78_0.18_195)] shrink-0" />{item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-7 xl:pt-28 min-w-0">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="rounded-[18px] min-h-[340px] relative overflow-hidden flex flex-col justify-end group border border-border/40 shadow-sm"
              >
                <img src={aceImage} alt="Our Vision" className="absolute inset-0 w-full h-full object-cover object-[60%_center] transition-transform duration-500 group-hover:scale-[1.02]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/10" />
                <span
                  className="absolute top-2 right-4 text-white/5 font-bold leading-none select-none pointer-events-none font-display"
                  style={{ fontSize: "clamp(4rem, 15vw, 7.5rem)" }}
                >
                  V
                </span>
                <div className="relative z-10 p-7">
                  <div className="inline-flex items-center gap-2 bg-[oklch(0.78_0.18_195)]/20 border border-[oklch(0.78_0.18_195)]/30 rounded-full px-3.5 py-1 mb-3 w-fit">
                    <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.78_0.18_195)] inline-block" />
                    <span className="text-[oklch(0.78_0.18_195)] text-[10px] font-bold tracking-[0.15em] uppercase">Vision</span>
                  </div>
                  <h3 className="text-white font-bold text-2xl sm:text-3xl mb-3 font-display">Where We're Going</h3>
                  <ul className="space-y-2">
                    {[
                      "Prove small senior pods consistently out-build enterprise agencies",
                      "Make codebase and campaign observability a default — not a privilege",
                      "Engineer AI and web systems built to run for the next decade",
                      "Become the go-to technical partner for founders building serious platforms"
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-white/80 text-sm">
                        <CheckCircle size={13} className="text-[oklch(0.78_0.18_195)] shrink-0" />{item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
                  Whether refining an active web platform, deploying a production AI system, or scaling growth with engineered SEO and paid media — our two pillars guarantee precision execution and clear metrics.
                </p>
                <button className="inline-flex items-center gap-3 bg-[oklch(0.78_0.18_195)] hover:opacity-90 active:scale-95 transition-all text-background font-bold text-sm rounded-full pl-6 pr-2 py-2.5 border-none cursor-pointer group shadow-sm">
                  Explore Our Services
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-background text-foreground shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <ArrowUpRight size={14} className="text-[oklch(0.78_0.18_195)]" />
                  </span>
                </button>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Downstream components */}
      <TeamSection />
      <WhyChooseUsSection />
      <ValuesSection />
      <PartnershipsSection />
      <CTA />
    </div>
  );
}