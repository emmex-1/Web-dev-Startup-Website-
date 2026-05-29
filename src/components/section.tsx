import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Section({ id, eyebrow, title, desc, children, className = "" }: { id?: string; eyebrow?: string; title?: React.ReactNode; desc?: React.ReactNode; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28 ${className}`}>
      {(eyebrow || title || desc) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          {eyebrow && <div className="mb-3 inline-flex rounded-full border border-glow px-3 py-1 font-mono text-xs uppercase tracking-wider text-gradient">{eyebrow}</div>}
          {title && <h2 className="text-balance text-3xl font-bold tracking-tight md:text-5xl">{title}</h2>}
          {desc && <p className="mt-4 text-pretty text-muted-foreground md:text-lg">{desc}</p>}
        </motion.div>
      )}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={eyebrow || title ? "mt-14" : ""}
      >
        {children}
      </motion.div>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  desc,
  children,
  image,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  desc?: React.ReactNode;
  children?: React.ReactNode;
  image?: string;
}) {
  const bg =
    image ??
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80";

  return (
    <section className="px-2 sm:px-3 pt-2 pb-0 md:px-4">
      <div className="mx-auto max-w-7xl">

        {/* Rounded hero container */}
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] text-white">

          {/* Background */}
          <div className="absolute inset-0">
            <img
              src={bg}
              alt="page hero background pics"
              className="h-full w-full object-cover"
              loading="eager"
            />

            <div className="absolute inset-0 bg-black/80" />
            <div className="absolute inset-0 bg-grid opacity-30" />

            {/* <div className="absolute -inset-x-10 -top-32 h-72 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.45),transparent_60%)]" /> */}

            {/* <div className="absolute -inset-x-10 -bottom-32 h-72 bg-[radial-gradient(ellipse_at_bottom,rgba(56,189,248,0.35),transparent_60%)]" /> */}
          </div>

          {/* Content */}
          <div className="relative flex min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] items-center">
            <div className="w-full px-6 pt-24 pb-16 sm:py-16 sm:px-10 lg:px-16">

              {eyebrow && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mb-4 inline-flex rounded-full border border-white/30 bg-white/5 px-3 py-1 font-mono text-xs uppercase tracking-wider text-white/90 backdrop-blur"
                >
                  {eyebrow}
                </motion.div>
              )}

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.05 }}
                className="max-w-3xl text-balance font-display text-4xl font-bold tracking-tight md:text-6xl"
              >
                {title}
              </motion.h1>

              {desc && (
                <motion.p
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.15 }}
                  className="mt-5 max-w-2xl text-pretty text-lg text-white/80"
                >
                  {desc}
                </motion.p>
              )}

              {children && (
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.25 }}
                  className="mt-8"
                >
                  {children}
                </motion.div>
              )}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CTA({ 
  title = "Ready to ship something exceptional?", 
  desc = "Tell us about your project. We'll get back within one business day." 
}: { 
  title?: string; 
  desc?: string; 
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-3xl border border-glow bg-black p-10 text-center md:p-16 shadow-2xl"
      >
        {/* ── Background Image kept fully clear ────────────────────────── */}
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80" 
          alt="section bckground image" 
          className="absolute inset-0 h-full w-full object-cover opacity-100" 
          loading="lazy" 
        />
        
        {/* ── Dark Tint Overlay & Decorative Technical Grid ─────────────── */}
        <div className="absolute inset-0 bg-black/75 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
        <div className="absolute inset-0 bg-grid opacity-20" />

        {/* ── Content Wrapper (Text and buttons forced to light/dark balance) ── */}
        <div className="relative z-10">
          <h3 className="text-balance text-3xl font-bold md:text-5xl text-white tracking-tight">
            {title}
          </h3>
          <p className="mx-auto mt-4 max-w-xl text-sm md:text-base text-slate-300 leading-relaxed">
            {desc}
          </p>
          
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Start a project <ArrowRight className="h-4 w-4" />
            </Link>
            
            <Link 
              to="/portfolio" 
              className="inline-flex items-center justify-center rounded-xl border border-slate-700/60 bg-slate-900/40 backdrop-blur-sm px-6 py-3.5 text-sm font-semibold text-white hover:bg-slate-800/60 transition-colors"
            >
              See our work
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
