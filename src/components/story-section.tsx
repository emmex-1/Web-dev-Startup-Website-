"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";

const TIMELINE = [
  {
    year: "2022",
    title: "A JOURNEY OF CULTURE AND INNOVATION",
    subtitle: "Where it all began",
    desc: "Two senior engineers left big tech, fed up with bloated agencies that over-promised and under-delivered. Globe Stack was founded with one strict rule: senior only. We shipped our first three projects—a Shopify rebuild, a React SaaS dashboard, and a custom web app—in 90 days. Every client referred another.",
    imgLeft: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    imgRight: "/media/web.jpg",
    imgBottomLeft: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&q=80",
    imgBottomRight: "/media/saas.jpg"
  },
  {
    year: "2023",
    title: "BUILDING THE SENIOR TEAM",
    subtitle: "Assembling pure craft",
    desc: "The studio grew from 2 to 6 senior operators carefully. We turned down dozens of applicants to find designers and growth specialists matching our high standards. Our first enterprise client infrastructure rebuild cut cloud expenses by 40% immediately.",
    imgLeft: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
    imgRight: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80",
    imgBottomLeft: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80",
    imgBottomRight: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=400&q=80"
  },
  {
    year: "2024",
    title: "PRODUCTION GRADE AI PIVOT",
    subtitle: "Deep tech, zero hype",
    desc: "When LLMs went mainstream, we bypassed basic wrappers and focused on true production engineering: custom RAG pipelines, fine-tunes, and security guardrails. Our automated systems achieved a 47% ticket reduction for fintech systems.",
    imgLeft: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80",
    imgRight: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80",
    imgBottomLeft: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&q=80",
    imgBottomRight: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&q=80"
  },
  {
    year: "2025",
    title: "SCALE WITHOUT COMPROMISE",
    subtitle: "Strict limits, premium impact",
    desc: "Hitting 120+ projects, we introduced an intentional client cap: maximum 8 active engagements at once. We launched the integrated Growth Stack—combining engineered SEO, clean ads, and complete attribution architecture smoothly.",
    imgLeft: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    imgRight: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    imgBottomLeft: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&q=80",
    imgBottomRight: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80"
  },
  {
    year: "2026",
    title: "THE NEXT TRANSPARENT CHAPTER",
    subtitle: "Tooling as a product",
    desc: "Today we're a lean collective of 9 elite builders. We are rolling out real-time custom workspace tooling providing radical transparency into sprints, live conversion metrics, and system operations instantly.",
    imgLeft: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80",
    imgRight: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=600&q=80",
    imgBottomLeft: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=400&q=80",
    imgBottomRight: "https://images.unsplash.com/photo-1581291518655-9523c932eecf?w=400&q=80"
  },
];

export function StorySection() {
  const [active, setActive] = useState(0);
  const current = TIMELINE[active];

  const prev = () => setActive((i) => Math.max(i - 1, 0));
  const next = () => setActive((i) => Math.min(i + 1, TIMELINE.length - 1));

  return (
    /* FIX: bg-[var(--section-a)] gives this section a distinct lavender tint in light mode */
    <section className="border-b border-border bg-[var(--section-a)] text-foreground py-16 sm:py-24 transition-colors duration-300">
      {/* overflow-hidden clips any bleed; w-full + max-w prevent horizontal overflow */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 overflow-hidden w-full">

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            /* min-w-0 prevents grid blowout */
            className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start relative min-w-0"
          >

            {/* Left Image Column */}
            <div className="md:col-span-3 order-2 md:order-1 flex flex-col gap-6 min-w-0">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-md border border-border bg-muted shadow-sm">
                <img
                  src={current.imgLeft}
                  alt="Story layout element left"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="relative aspect-[16/10] w-[85%] hidden md:block overflow-hidden rounded-md border border-border bg-muted self-end min-w-0">
                <img
                  src={current.imgBottomLeft}
                  alt="Story secondary visual left"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Center Content Column */}
            <div className="md:col-span-6 order-1 md:order-2 flex flex-col items-center text-center px-2 sm:px-6 py-4 min-w-0">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-[oklch(0.78_0.18_195)] mb-3">
                OUR STORY
              </span>

              <h2 className="font-display text-3xl sm:text-4xl md:text-[44px] font-bold leading-[1.15] tracking-tight text-foreground max-w-lg mb-8 uppercase">
                {current.title}
              </h2>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl mb-8">
                {current.desc}
              </p>

              <button className="inline-flex items-center gap-2.5 group text-sm font-semibold text-foreground hover:text-[oklch(0.78_0.18_195)] transition-colors duration-200">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card shadow-sm group-hover:border-text-[oklch(0.78_0.18_195)] group-hover:bg-[oklch(0.78_0.18_195)] group-hover:text-white transition-all duration-300">
                  <Play size={14} className="fill-current ml-0.5" />
                </span>
                Learn More About {current.year}
              </button>
            </div>

            {/* Right Image Column */}
            <div className=" hidden md:flex md:col-span-3 order-3 flex flex-col gap-6 min-w-0">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-md border border-border bg-muted shadow-sm">
                <img
                  src={current.imgRight}
                  alt="Story layout element right"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="relative aspect-[16/10] w-[85%] hidden md:block overflow-hidden rounded-md border border-border bg-muted self-start min-w-0">
                <img
                  src={current.imgBottomRight}
                  alt="Story secondary visual right"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

        {/* Arrow Nav */}
        <div className="flex justify-center gap-4 mt-10 md:mt-4">
          <button
            onClick={prev}
            disabled={active === 0}
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-foreground transition-all hover:bg-muted active:scale-95 disabled:opacity-20 disabled:pointer-events-none shadow-sm"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            onClick={next}
            disabled={active === TIMELINE.length - 1}
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-foreground transition-all hover:bg-muted active:scale-95 disabled:opacity-20 disabled:pointer-events-none shadow-sm"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Year Timeline Track */}
        <div className="mt-14 max-w-3xl mx-auto">
          <div className="relative flex items-center justify-between">
            <div className="absolute left-0 right-0 top-1.5 h-px -translate-y-1/2 bg-border z-0" />

            {TIMELINE.map((t, i) => (
              <button
                key={t.year}
                onClick={() => setActive(i)}
                className="relative flex flex-col items-center group focus:outline-none z-10 flex-1"
              >
                <div
                  className={`h-3 w-3 rounded-full border-2 transition-all duration-300 ${
                    i === active
                      ? "scale-125 border-[oklch(0.78_0.18_195)] bg-[oklch(0.78_0.18_195)] ring-4 ring-orange-500/20"
                      : i < active
                      ? "border-[oklch(0.78_0.18_195)]/60 bg-[oklch(0.78_0.18_195)]/60"
                      : "border-muted-foreground/30 bg-background group-hover:border-muted-foreground"
                  }`}
                />
                <span
                  className={`mt-3 font-mono text-xs sm:text-sm font-semibold tracking-wide transition-colors duration-200 ${
                    i === active
                      ? "text-foreground font-bold scale-105"
                      : "text-muted-foreground/60 group-hover:text-foreground"
                  }`}
                >
                  {t.year}
                </span>
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}