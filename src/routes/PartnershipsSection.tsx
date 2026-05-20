"use client";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const PARTNERS = [
  { title: "Google Cloud", detail: "Workspace, BigQuery, Vertex AI." },
  { title: "Shopify Partners", detail: "Plus & Hydrogen specialists." },
  { title: "OpenAI Build", detail: "Production GPT integrations." },
  { title: "Meta Business", detail: "Performance media partner." },
];

const CERT_IMAGE = "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=600&q=80";

export function PartnershipsSection() {
  return (
    <section className="border-b border-border bg-muted/30 text-foreground py-20 px-4 transition-colors duration-300">
      <div className="mx-auto max-w-7xl">
        {/* Two-col split layout configuration */}
        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          {/* Left Block: context labels and badge grids */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Eyebrow metadata label */}
            <div className="mb-4 font-mono text-[10px] uppercase tracking-widest text-[oklch(0.78_0.18_195)] font-semibold">
              LEGAL &amp; COMPLIANCE
            </div>

            <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">
              Registered &amp; Verified.
            </h2>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
              Globe Stack is a legally incorporated studio, ensuring transparency,
              accountability, and trust in every engagement — from first call to
              final delivery.
            </p>

            {/* Verification Items List Container */}
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-[oklch(0.78_0.18_195)]" />
                <span className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Studio Reg. No.:</span>{" "}
                  GS-2022-LLC
                </span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-[oklch(0.78_0.18_195)]" />
                <span className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Name:</span>{" "}
                  GLOBE STACK LIMITED
                </span>
              </div>
            </div>

            {/* Sub Grid Panel: Partner items array mapping */}
            <div className="mt-10">
              <p className="mb-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60 font-semibold">
                Certified Partners
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {PARTNERS.map((p, i) => (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="flex items-start gap-3 rounded-xl border border-border bg-card p-3 shadow-sm"
                  >
                    <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-[oklch(0.78_0.18_195)]/20 bg-[oklch(0.78_0.18_195)]/10">
                      <ShieldCheck className="h-4 w-4 text-[oklch(0.78_0.18_195)]" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">{p.title}</div>
                      <div className="text-xs text-muted-foreground/70">{p.detail}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Block: Certificate Preview Card UI */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="w-full max-w-md overflow-hidden rounded-2xl border border-border bg-card p-4 shadow-sm">
              <div className="overflow-hidden rounded-xl border border-border/60 bg-muted">
                <img
                  src={CERT_IMAGE}
                  alt="Certificate of Incorporation"
                  className="w-full object-cover mix-blend-normal dark:opacity-90 dark:contrast-125"
                  loading="lazy"
                />
              </div>
              <p className="mt-3 text-center text-xs text-muted-foreground/60 font-mono">
                Certificate of Incorporation — Globe Stack Limited
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}