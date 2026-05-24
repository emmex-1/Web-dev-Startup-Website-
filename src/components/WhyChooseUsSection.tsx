"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const REASONS = [
  {
    t: "Senior-Only Execution",
    d: "Every line of code, every campaign, every design decision — made by operators with 10+ years in production. No juniors. No learning on your budget.",
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80",
  },
  {
    t: "Full-Stack Capability",
    d: "Web engineering, production AI systems, and performance growth under one roof. No hand-offs to external vendors; one tight team handles your entire technical stack.",
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80",
    darkAccent: true,
  },
  {
    t: "Radical Transparency",
    d: "Real-time sprint dashboards, live conversion metrics, and direct Slack access to the engineer touching your code. You always know exactly where your project stands.",
    img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80",
  },
];

export function WhyChooseUsSection() {
  return (
    /* FIX: bg-[var(--section-b)] gives this section a distinct cool-slate tint in light mode */
    <section className="border-b border-border text-foreground py-20 px-4 transition-colors duration-300">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 grid md:grid-cols-[1fr_auto_1fr] md:items-end gap-6">
          <div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-[oklch(0.78_0.18_195)]/20 bg-[oklch(0.78_0.18_195)]/10 px-3 py-1 text-xs font-medium text-[oklch(0.78_0.18_195)]">
              Why Choose Us
            </div>
            <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">
              Your Goals,<br /> Our Commitment.
            </h2>
          </div>
          <div /> {/* spacer */}
          <p className="text-pretty text-sm leading-relaxed text-muted-foreground md:max-w-xs md:ml-auto md:text-right">
            We build websites that rank and convert, AI systems that run in production, and growth engines that compound — all from a single senior team that treats your project like their own.
          </p>
        </div>

        {/* Three cards */}
        <div className="grid gap-4 md:grid-cols-3">
          {REASONS.map((r, i) => (
            <motion.div
              key={r.t}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group flex flex-col overflow-hidden rounded-2xl border transition-all duration-300 ${
                r.darkAccent
                  ? "border-[oklch(0.78_0.18_195)]/20 bg-[oklch(0.78_0.18_195)]/[0.04] dark:bg-[oklch(0.78_0.18_195)]/[0.06]"
                  : "border-border bg-card text-foreground"
              }`}
            >
              {/* Top: title + arrow */}
              <div className="flex items-start justify-between p-5">
                <h3 className="font-display text-base font-semibold text-foreground">{r.t}</h3>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground/60 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[oklch(0.78_0.18_195)]" />
              </div>

              {/* Description */}
              <p className="px-5 text-sm leading-relaxed text-muted-foreground flex-grow">
                {r.d}
              </p>

              {/* Image */}
              <div className="mt-5 overflow-hidden rounded-xl mx-3 mb-3 border border-border/60">
                <img
                  src={r.img}
                  alt={r.t}
                  className="h-44 w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}