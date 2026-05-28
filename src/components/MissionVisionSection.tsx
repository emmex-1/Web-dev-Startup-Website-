"use client";
import { motion } from "framer-motion";
import { Compass, Eye } from "lucide-react";

const CARDS = [
  {
    phase: "PURPOSE",
    icon: Compass,
    title: "Our Mission",
    tagline: "Why we build.",
    points: [
      "Help ambitious brands ship scalable products that compound value",
      "Ensure senior execution across every structural layer of code",
      "Maintain a lean elite collective to skip bloated overhead completely",
      "Deliver pristine, production-ready tech architecture transparently",
    ],
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80",
  },
  {
    phase: "HORIZON",
    icon: Eye,
    title: "Our Vision",
    tagline: "Where we are traveling.",
    points: [
      "Prove small senior pods consistently out-execute enterprise agencies",
      "Turn absolute workspace visibility into a core product standard",
      "Engineer systems for the next decade, never just the next release",
      "Become the premier technical partner for global technology founders",
    ],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
];

export function MissionVisionSection() {
  return (
    <section className="border-b border-border bg-background text-foreground py-20 px-4 transition-colors duration-300">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-4 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-orange-500" />
          <span className="font-mono text-xs uppercase tracking-widest text-orange-500 font-semibold">
            Identity
          </span>
        </div>
        <div className="mb-12 grid max-w-3xl gap-6 md:grid-cols-2 md:items-end">
          <h2 className="font-display text-4xl font-bold leading-tight text-foreground md:text-5xl tracking-tight">
            A Purposeful Framework for Lasting Impact.
          </h2>
          <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
            Rexsolv's internal philosophy targets the root causes of agency breakdown — combining senior skillsets with structural milestones to take ideas to deployment reliably.
          </p>
        </div>

        {/* Two content cards */}
        <div className="grid gap-5 md:grid-cols-2">
          {CARDS.map((card, i) => {
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-border"
              >
                {/* Background image component */}
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  {/* Dense gradient mask handles underlying contrast regardless of active theme */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30" />

                  {/* Absolute Badge */}
                  <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 px-3 py-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                    <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-orange-400">
                      {card.phase}
                    </span>
                  </div>

                  {/* Content markup overlay block */}
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <h3 className="font-display text-3xl font-bold tracking-tight">{card.title}</h3>
                    <p className="mt-1 text-sm text-white/60">{card.tagline}</p>
                    <ul className="mt-4 space-y-2">
                      {card.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-2.5 text-sm text-white/85">
                          <svg
                            className="mt-0.5 h-4 w-4 shrink-0 text-orange-400"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" />
                            <path
                              d="M6.5 10.5l2.5 2.5 4.5-5"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom micro copy */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground"
        >
          Whether expanding infrastructure or validating an optimized prototype, our values dictate high-precision, senior execution without structural compromises.
        </motion.p>
      </div>
    </section>
  );
}