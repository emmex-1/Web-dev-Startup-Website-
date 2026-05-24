"use client";
import { motion } from "framer-motion";

const VALUES = [
  {
    num: "01.",
    title: "Senior Hands, Always",
    desc: "Every website, AI system, and growth campaign is touched exclusively by operators with 10+ years of production experience. No juniors. No exceptions.",
  },
  {
    num: "02.",
    title: "Ship, Then Iterate",
    desc: "We bias toward working software in production. Tight sprints, weekly demos, and real metrics replace endless planning cycles and revision loops.",
  },
  {
    num: "03.",
    title: "Full-Stack Ownership",
    desc: "Web engineering, production AI, and performance growth under one roof. We own the outcome end-to-end — not just the slice of code we're paid for.",
  },
  {
    num: "04.",
    title: "Built for the Next Decade",
    desc: "Clean architecture, documented APIs, and observable AI systems. We engineer for longevity so your stack doesn't need a full rebuild in 18 months.",
  },
];

export function ValuesSection() {
  return (
    /* bg-background so this section contrasts with the section-b of WhyChooseUs above */
    <section className="border-b border-border bg-[var(--section-b)] text-foreground py-20 px-4 transition-colors duration-300">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-[oklch(0.78_0.18_195)] font-semibold">
            Values
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            What we believe.
          </h2>
        </div>

        {/* 4-col cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-[oklch(0.78_0.18_195)]/40 hover:shadow-md"
            >
              {/* Number */}
              <div className="font-mono text-sm font-bold text-orange-500/40 dark:text-[oklch(0.78_0.18_195)]/30">{v.num}</div>

              {/* Title */}
              <h3 className="font-display text-lg font-semibold leading-snug text-foreground">
                {v.title}
              </h3>

              {/* Divider */}
              <div className="h-px w-full bg-border" />

              {/* Description */}
              <p className="text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}