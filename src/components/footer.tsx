import { Link } from "@tanstack/react-router";
import { Globe, Twitter, Github, Linkedin, Mail, Send, Check } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { SITE, SERVICES } from "@/lib/site";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="relative overflow-hidden border-t border-border bg-card">
      {/* ── Image Background & Smooth Overlay ─────────────────────────── */}
      <img
        src="https://images.unsplash.com/photo-1557683316-973673baf926?w=1600&q=80" 
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-[0.04] dark:opacity-[0.02]"
        loading="lazy"
      />
      {/* Radial vignette overlay for structural depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background/30" />

      {/* ── Main Content Container ────────────────────────────────────── */}
      <div className="relative mx-auto max-w-7xl px-4 pt-12 pb-8 md:px-6">
        <div className="grid gap-10 lg:grid-cols-5 lg:items-start">
          
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold text-foreground">
              <span className="grid h-8 w-8 place-items-center rounded-md bg-gradient-to-br from-[var(--neon)] to-[var(--neon-violet)] text-background glow">
                <Globe className="h-4 w-4" strokeWidth={2.5} />
              </span>
              Globe<span className="text-gradient">Stack</span>
            </Link>
            <p className="mt-3 max-w-sm text-xs leading-relaxed text-muted-foreground">
              {SITE.description}
            </p>
            <div className="mt-4 flex gap-2">
              <a href={SITE.social.twitter} aria-label="Twitter" className="grid h-8 w-8 place-items-center rounded-lg border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"><Twitter className="h-3.5 w-3.5" /></a>
              <a href={SITE.social.github} aria-label="GitHub" className="grid h-8 w-8 place-items-center rounded-lg border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"><Github className="h-3.5 w-3.5" /></a>
              <a href={SITE.social.linkedin} aria-label="LinkedIn" className="grid h-8 w-8 place-items-center rounded-lg border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"><Linkedin className="h-3.5 w-3.5" /></a>
            </div>
          </div>

          {/* Inline Condensed Navigation Directory Links */}
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:col-span-3">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">Company</h4>
              <ul className="mt-3 space-y-1.5 text-xs text-muted-foreground">
                <li><Link to="/about" className="hover:text-foreground transition-colors">About</Link></li>
                <li><Link to="/portfolio" className="hover:text-foreground transition-colors">Portfolio</Link></li>
                <li><Link to="/case-studies" className="hover:text-foreground transition-colors">Case Studies</Link></li>
                <li><Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link></li>
                <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">Services</h4>
              <ul className="mt-3 space-y-1.5 text-xs text-muted-foreground">
                {SERVICES.slice(0, 5).map((s) => (
                  <li key={s.slug}>
                    <Link to="/services/$slug" params={{ slug: s.slug }} className="hover:text-foreground transition-colors">
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter Dynamic Grid Box Block */}
            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">Newsletter</h4>
              <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground">
                Get monthly engineering insights and tech field notes.
              </p>

              <form
                onSubmit={(e) => { e.preventDefault(); if (email) setSubscribed(true); }}
                className="mt-3 w-full"
              >
                {subscribed ? (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-2 text-[11px] font-medium text-foreground py-1"
                  >
                    <Check className="h-3.5 w-3.5 text-[var(--neon)] shrink-0" />
                    Subscribed successfully!
                  </motion.div>
                ) : (
                  <div className="relative flex items-center">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email address"
                      className="w-full rounded-lg border border-input bg-background/40 py-2 pl-3 pr-9 text-xs outline-none transition-colors focus:border-glow text-foreground placeholder:text-muted-foreground/60"
                    />
                    <button
                      type="submit"
                      aria-label="Submit"
                      className="absolute right-1 top-1/2 grid h-6 w-6 -translate-y-1/2 place-items-center rounded-md bg-foreground text-background transition-opacity hover:opacity-90 cursor-pointer"
                    >
                      <Send className="h-3 w-3" />
                    </button>
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>

        {/* ── Sub-Footer Divider Line ───────────────────────────────────── */}
        <div className="mt-10 border-t border-border/50 pt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-[11px] text-muted-foreground">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>© {new Date().getFullYear()} Globe Stack.</span>
            <span className="hidden sm:inline text-border">|</span>
            <span className="select-all">Contact: {SITE.email}</span>
            <span className="hidden sm:inline text-border">|</span>
            <span>Free Tool: <Link to="/tools/seo-analyzer" className="hover:text-foreground underline underline-offset-2 transition-colors">SEO Analyzer</Link></span>
          </div>
          {/* <div className="font-mono text-[10px] opacity-80">
            Built with intent
          </div> */}
        </div>
      </div>
    </footer>
  );
}