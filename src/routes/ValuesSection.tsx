"use client";
import { motion } from "framer-motion";

const VALUES = [
  {
    num: "01.",
    title: "Craft Over Volume",
    desc: "We'd rather ship one excellent thing than ten mediocre ones. Quality is not negotiable — it's the baseline.",
  },
  {
    num: "02.",
    title: "Default to Action",
    desc: "Bias toward shipping. Iterate from real-world data. Standing still is the riskiest move of all.",
  },
  {
    num: "03.",
    title: "Outcomes Are the Metric",
    desc: "We measure success in revenue moved and products shipped — never in hours billed or lines of code written.",
  },
  {
    num: "04.",
    title: "Long-Term Thinking",
    desc: "Code we ship is maintainable, documented, and built to outlast the sprint. We build for the next five years.",
  },
];

export function ValuesSection() {
  return (
    <section className="border-b border-border bg-background text-foreground py-20 px-4 transition-colors duration-300">
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
              className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-border/80"
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