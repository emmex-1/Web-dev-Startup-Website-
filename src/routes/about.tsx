import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, CheckCircle } from "lucide-react";
import { PageHero, CTA } from "@/components/section";
import { HERO_IMAGES } from "@/lib/content";
import { seo } from "@/lib/seo";
import { motion } from "framer-motion";

import solImage from "/media/yo.jfif";
import aceImage from "/media/yoy.jfif";

// Modular Section Components Imports
import { StorySection } from "./story-section";
import { TeamSection } from "./TeamSection";
import { WhyChooseUsSection } from "./WhyChooseUsSection";
import { ValuesSection } from "./ValuesSection";
import { PartnershipsSection } from "./PartnershipsSection";

export const Route = createFileRoute("/about")({
  head: () =>
    seo({
      title: "About — Globe Stack",
      description:
        "Globe Stack is a senior-only tech studio building web, AI, and growth for ambitious brands.",
      path: "/about",
    }),
  component: AboutPage,
});

const STATS = [
  { v: "300+", l: "Projects shipped" },
  { v: "120+", l: "Happy clients" },
  { v: "12y", l: "Avg. senior experience" },
  { v: "4.9/5", l: "Client satisfaction" },
];

function AboutPage() {
  return (
    <>
      <PageHero
        image={HERO_IMAGES.about}
        eyebrow="About"
        title={<>Built by senior operators, for ambitious brands.</>}
        desc="Globe Stack is a small, senior-only studio. We take on a handful of clients per quarter and treat each project like it's our own."
      >
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform active:scale-[0.98] hover:opacity-90"
        >
          Work with us <ArrowRight className="h-4 w-4" />
        </Link>
      </PageHero>



      {/* Story — Interactive timeline engineered with your reference asymmetrical design */}
      <StorySection />
{/* Stats strip — Light/Dark Adaptive and Centered */}
<section className="border-b border-border bg-card/30 py-10 transition-colors duration-300">
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

      {/* ══════════════════════════ MISSION & VISION SECTION ════════════════════════════ */}
      {/*
        FIX 1: Replaced `overflow-x-hidden` with `overflow-hidden` so the section itself
                clips any overflow in both axes — stopping it from contributing to page-level
                horizontal scroll while still masking the decorative watermark letters.
      */}
      <section className="py-16 sm:py-24 bg-background text-foreground border-b border-border overflow-hidden transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16">
          {/*
            FIX 2: Added `min-w-0` to the grid wrapper so flex/grid children cannot
                    blow past the container boundary on narrow viewports.
          */}
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
                Globe Stack counters the industry standard of bloated agency timelines. We combine hyper-focused senior talent with transparent engineering practices to take products from concept to launch efficiently.
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
                {/*
                  FIX 3: The decorative watermark letter was `text-[120px]` with no overflow
                          constraint on the card, letting it push card width on mobile.
                          Changed to `text-[clamp(4rem,15vw,7.5rem)]` so it scales with viewport
                          and stays well within the card boundaries at all sizes.
                          Also added `overflow-hidden` is already on the parent card (line above),
                          so this just needs the font-size fix.
                */}
                <span className="absolute top-2 right-4 text-white/5 font-bold leading-none select-none pointer-events-none font-display"
                  style={{ fontSize: "clamp(4rem, 15vw, 7.5rem)" }}>
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
                      "Ship scalable code that drives revenue",
                      "Enforce senior execution across all sprint layers",
                      "Keep teams lean to bypass unnecessary management overhead",
                      "Deliver stack-agnostic, enterprise-grade architecture"
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-white/80 text-sm">
                        <CheckCircle size={13} className="text-[oklch(0.78_0.18_195)] shrink-0" />{item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* Right Column
                FIX 4: `lg:pt-28` caused the column to extend beyond the section height on
                        mid-range viewports (1024–1200 px), pushing overall page height and
                        contributing to scroll issues. Kept for large screens only via a safer
                        `xl:pt-28` so it only applies when there's room for it.
            */}
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
                {/* Same watermark fix applied here */}
                <span className="absolute top-2 right-4 text-white/5 font-bold leading-none select-none pointer-events-none font-display"
                  style={{ fontSize: "clamp(4rem, 15vw, 7.5rem)" }}>
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
                      "Prove that dedicated talent out-performs bloated agency setups",
                      "Provide codebase observability directly to founders",
                      "Build software loops meant to run for the next decade",
                      "Remain the absolute go-to collective for ambitious platforms"
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
                  Whether refining an active framework or building complex cloud systems from the ground up, our two pillars prioritize code performance, absolute alignment, and clear metrics.
                </p>
                <button className="inline-flex items-center gap-3 bg-[oklch(0.78_0.18_195)] hover:opacity-90 active:scale-95 transition-all text-background font-bold text-sm rounded-full pl-6 pr-2 py-2.5 border-none cursor-pointer group shadow-sm">
                  Explore Our Strategy
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
    </>
  );
}