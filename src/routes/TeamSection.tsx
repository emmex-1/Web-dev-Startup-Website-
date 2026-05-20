"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const TEAM = [
  {
    name: "Maya Okafor",
    role: "Engineering Lead",
    img: "/media/kenny.png",
    bio: "12+ years shipping React, TypeScript, and distributed systems.",
  },
  {
    name: "Daniel Park",
    role: "AI & Backend",
    img: "/media/daniel.jfif",
    bio: "Production RAG, LLM evals, and cloud infra for fintech & SaaS.",
  },
  {
    name: "Priya Sharma",
    role: "Design & UX",
    img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&q=80",
    bio: "Brand systems, product UX, and motion. Ex-agency creative director.",
  },
  {
    name: "Marcus Webb",
    role: "Growth & Performance",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    bio: "$10M+ in managed media. SEO, paid, and lifecycle in one head.",
  },
];

export function TeamSection() {
  return (
    <section className="border-b border-border bg-muted/20 text-foreground py-20 px-4 transition-colors duration-300">
      <div className="mx-auto max-w-7xl">
        {/* Header row */}
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-2 font-mono text-xs uppercase tracking-widest text-[oklch(0.78_0.18_195)] font-semibold">
              Team
            </p>
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Meet the senior squad.
            </h2>
          </div>
          {/* <button className="rounded-full border border-border bg-card px-4 py-1.5 text-xs text-muted-foreground hover:border-foreground hover:text-foreground transition-all shadow-sm">
            View all →
          </button> */}
        </div>

        {/* 4-col card grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer border border-border"
            >
              {/* Image fills the card */}
              <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                <img
                  src={m.img}
                  alt={m.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Dark overlay for text readability across light/dark themes */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                {/* Arrow icon top-right */}
                <div className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full border border-white/20 bg-black/40 opacity-0 backdrop-blur-sm transition duration-300 group-hover:opacity-100">
                  <ArrowUpRight className="h-4 w-4 text-white" />
                </div>

                {/* Bottom text */}
                <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                  <div className="font-display text-lg font-semibold leading-tight">
                    {m.name}
                  </div>
                  <div className="mt-0.5 text-xs font-medium text-white/75">{m.role}</div>
                  <p className="mt-2 text-xs leading-relaxed text-white/85 transition duration-300">
                    {m.bio}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}