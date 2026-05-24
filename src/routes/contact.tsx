import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  Mail, Phone, MapPin, Send, Check, ArrowUpRight,
  Clock, Globe, Code2, ShoppingBag, BarChart2,
  Megaphone, Layers, BrainCircuit, MessageSquare,
  Linkedin, Twitter, Github, CheckCircle,
} from "lucide-react";
import { HERO_IMAGES, SITE } from "@/lib/content";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    seo({
      title: "Contact — Globe Stack",
      description:
        "Tell us about your project. Globe Stack responds within one business day.",
      path: "/contact",
    }),
  component: ContactPage,
});

// ─── Data ─────────────────────────────────────────────────────────────────────

const infoCards = [
  {
    icon: MapPin,
    accent: "from-cyan-500 to-blue-600",
    bg: "bg-cyan-50/60 dark:bg-cyan-950/30",
    border: "border-cyan-200/60 dark:border-cyan-800/40",
    title: "Remote-First HQ",
    lines: ["Nigeria", "North America", "UK"],
    action: null,
  },
  {
    icon: Phone,
    accent: "from-cyan-500 to-blue-600",
    bg: "bg-cyan-50/60 dark:bg-cyan-950/30",
    border: "border-violet-200/60 dark:border-violet-800/40",
    title: "Schedule a Call",
    lines: ["Book via Calendly", "Mon–Fri, 9am – 6pm EST",],
    action: { label: "Book a call", href: "#" },
  },
  {
    icon: Mail,
    accent: "from-cyan-500 to-blue-600",
    bg: "bg-cyan-50/60 dark:bg-cyan-950/30",
    border: "border-fuchsia-200/60 dark:border-fuchsia-800/40",
    title: "Email Us",
    lines: ["info@globestack.com", "We reply within 24 hours"],
    action: { label: "Send Email", href: "mailto:info@globestack.com" },
  },
  {
    icon: Clock,
    accent: "from-cyan-500 to-blue-600",
    bg: "bg-cyan-50/60 dark:bg-cyan-950/30",
    border: "border-sky-200/60 dark:border-sky-800/40",
    title: "Response Time",
    lines: ["Less than 24h for enquiries", "Less than 48h for proposals", "Urgent? Call directly"],
    action: null,
  },
];

const serviceTypes = [
  { value: "web-development",       label: "Web Development",    icon: Code2 },
  { value: "shopify",               label: "Shopify / Commerce", icon: ShoppingBag },
  { value: "ai-solutions",          label: "AI Solutions",       icon: BrainCircuit },
  { value: "seo",                   label: "SEO & Content",      icon: BarChart2 },
  { value: "ads",                   label: "Paid Ads",           icon: Megaphone },
  { value: "social",                label: "Social Media",       icon: MessageSquare },
  { value: "ui-ux",                 label: "UI / UX Design",     icon: Layers },
  { value: "not-sure",              label: "Not sure yet",       icon: Globe },
];

const budgets = ["Under $5k", "$5k – $15k", "$15k – $50k", "$50k – $100k", "$100k+"];

const timelines = ["ASAP", "1 – 2 months", "3 – 6 months", "6+ months", "Flexible"];

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,

    transition: {
      delay: i * 0.09,
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

// ─── Page ─────────────────────────────────────────────────────────────────────

function ContactPage() {
  const [form, setForm] = useState({
    name: "", email: "", company: "", phone: "",
    service: "", budget: "", timeline: "", referral: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1400);
  };

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-background px-2 sm:px-3 pt-2 pb-0">
        <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]">
          {/* Background image */}
          <img
            src={HERO_IMAGES.contact}
            alt="Contact Globe Stack"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {/* Overlays */}
          <div className="absolute inset-0 bg-black/78" />
          <div className="absolute inset-0 bg-grid opacity-20" />
          {/* Radial glows */}
          <div className="absolute -inset-x-10 -top-32 h-72 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.35),transparent_60%)] pointer-events-none" />
          <div className="absolute -inset-x-10 -bottom-32 h-72 bg-[radial-gradient(ellipse_at_bottom,rgba(168,85,247,0.30),transparent_60%)] pointer-events-none" />
          {/* Decorative vertical bars — right side */}
          <div className="absolute top-0 right-0 h-full flex items-center gap-1.5 pr-8 pointer-events-none">
            <div className="w-[3px] rounded-full bg-cyan-400/60"   style={{ height: "52%" }} />
            <div className="w-[3px] rounded-full bg-violet-500/50" style={{ height: "36%" }} />
            <div className="w-[3px] rounded-full bg-sky-600/35"    style={{ height: "20%" }} />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-end min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] px-6 sm:px-12 lg:px-20 pb-10 sm:pb-16 pt-28 sm:pt-36">
            <motion.div
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block" />
              <span className="text-cyan-400 text-xs font-bold uppercase tracking-[0.22em] font-mono">
                Get In Touch
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.18 }}
              className="text-white font-bold leading-tight mb-4 font-display"
              style={{ fontSize: "clamp(40px, 6.5vw, 88px)" }}
            >
              Let's build{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                something.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="text-white/65 max-w-xl leading-relaxed mb-7 font-sans"
              style={{ fontSize: "clamp(13px, 1.5vw, 16px)" }}
            >
              Whether you need a product built, an audience grown, or AI woven into your stack — tell us about it. We respond within one business day, come prepared, and skip the sales theatre.
            </motion.p>

            {/* Breadcrumb pill */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.44 }}>
              <div
                className="inline-flex items-center gap-1.5 border border-white/25 rounded-full px-4 py-2"
                style={{ backdropFilter: "blur(8px)", background: "rgba(255,255,255,0.07)" }}
              >
                <Link to="/" className="text-white/60 hover:text-white text-xs font-medium no-underline transition-colors font-mono">
                  Home
                </Link>
                <span className="text-white/35 text-xs">/</span>
                <span className="text-white text-xs font-semibold font-mono">Contact</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── INFO CARDS ───────────────────────────────────────────────────── */}
      <section className="bg-muted/30 py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {infoCards.map((card, i) => (
              <motion.div
                key={i} custom={i} initial="hidden" whileInView="visible"
                viewport={{ once: true }} variants={fadeUp}
                className={`relative group rounded-2xl border ${card.border} ${card.bg} bg-card p-6 flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
              >
                {/* top accent bar */}
                {/* <div className={`h-[3px] w-0 group-hover:w-full transition-all duration-500 rounded-full mb-5 bg-gradient-to-r ${card.accent}`} /> */}

                {/* icon */}
                <div className={`w-11 h-11 rounded-xl mb-4 flex items-center justify-center bg-gradient-to-br ${card.accent} text-white shrink-0`}>
                  <card.icon size={18} />
                </div>

                <p className="font-semibold text-sm text-foreground mb-2 font-display">{card.title}</p>
                {card.lines.map((line, j) => (
                  <p key={j} className={`text-sm leading-relaxed ${j === 0 ? "text-foreground/80 font-medium" : "text-muted-foreground"}`}>
                    {line}
                  </p>
                ))}

                {card.action && (
                  <a
                    href={card.action.href}
                    className={`inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wide no-underline mt-4 bg-gradient-to-r ${card.accent} bg-clip-text text-transparent hover:gap-2 transition-all duration-200`}
                  >
                    {card.action.label} <ArrowUpRight size={11} className={`bg-gradient-to-r ${card.accent} text-transparent`} style={{ color: "transparent", filter: "none" }} />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORM + SIDEBAR ───────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">

            {/* ── FORM (3 cols) ── */}
            <motion.div
              initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.65 }}
              className="lg:col-span-3"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 inline-block" />
                <span className="text-cyan-500 text-xs font-bold uppercase tracking-[0.22em] font-mono">
                  Start a Project
                </span>
              </div>
              <h2 className="font-display font-bold text-foreground leading-tight mb-2"
                style={{ fontSize: "clamp(26px, 3.2vw, 42px)" }}>
                We'd love to hear<br />from you
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8 max-w-md">
                Fill out the form — the more detail you give us, the faster we can come back with a tailored proposal. We skip the generic pitch decks.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
                  className="rounded-3xl border border-glow bg-card p-10 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center mx-auto mb-5">
                    <Check size={30} className="text-white" />
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-2">Message received!</h3>
                  <p className="text-muted-foreground text-sm mb-6 max-w-xs mx-auto">
                    We'll review your brief and come back within one business day.
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center">
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name:"",email:"",company:"",phone:"",service:"",budget:"",timeline:"",referral:"",message:"" }); }}
                      className="rounded-full border border-border px-5 py-2.5 text-sm font-medium hover:bg-muted transition-colors"
                    >
                      Send another
                    </button>
                    <Link to="/case-studies"
                      className="rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition-opacity no-underline"
                    >
                      See our work
                    </Link>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField label="Full Name *" placeholder="Your name" value={form.name}
                      onChange={(v) => set("name", v)} required />
                    <FormField label="Email Address *" placeholder="you@company.com" type="email"
                      value={form.email} onChange={(v) => set("email", v)} required />
                  </div>

                  {/* Company + Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField label="Company / Brand" placeholder="Globe Inc." value={form.company}
                      onChange={(v) => set("company", v)} />
                    <FormField label="Phone (optional)" placeholder="+1 234 567 8900" type="tel"
                      value={form.phone} onChange={(v) => set("phone", v)} />
                  </div>

                  {/* Service Type */}
                  <div>
                    <FieldLabel>Service Needed</FieldLabel>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {serviceTypes.map((s) => {
                        const active = form.service === s.value;
                        return (
                          <button key={s.value} type="button" onClick={() => set("service", s.value)}
                            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border transition-all duration-200 cursor-pointer ${
                              active
                                ? "bg-foreground text-background border-foreground"
                                : "bg-muted/50 text-muted-foreground border-border hover:border-foreground/40 hover:text-foreground"
                            }`}
                          >
                            <s.icon size={12} /> {s.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Budget */}
                  <div>
                    <FieldLabel>Estimated Budget</FieldLabel>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {budgets.map((b) => {
                        const active = form.budget === b;
                        return (
                          <button key={b} type="button" onClick={() => set("budget", b)}
                            className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-200 cursor-pointer ${
                              active
                                ? "bg-gradient-to-r from-cyan-500 to-violet-500 text-white border-transparent"
                                : "bg-muted/40 text-muted-foreground border-border hover:border-foreground/40 hover:text-foreground"
                            }`}
                          >
                            {b}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Timeline */}
                  <div>
                    <FieldLabel>Project Timeline</FieldLabel>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {timelines.map((t) => {
                        const active = form.timeline === t;
                        return (
                          <button key={t} type="button" onClick={() => set("timeline", t)}
                            className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-200 cursor-pointer ${
                              active
                                ? "bg-foreground text-background border-foreground"
                                : "bg-muted/40 text-muted-foreground border-border hover:border-foreground/40 hover:text-foreground"
                            }`}
                          >
                            {t}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* How did you hear about us */}
                  <div>
                    <FieldLabel>How did you hear about us?</FieldLabel>
                    <select
                      value={form.referral} onChange={(e) => set("referral", e.target.value)}
                      className="mt-1.5 w-full h-11 px-4 rounded-xl border border-input bg-muted/40 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all text-foreground"
                    >
                      <option value="">Select one…</option>
                      <option>Google / Search</option>
                      <option>LinkedIn</option>
                      <option>Twitter / X</option>
                      <option>Referral from a friend</option>
                      <option>Existing client referral</option>
                      <option>Case study / Blog post</option>
                      <option>Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <FieldLabel>Project Details *</FieldLabel>
                    <textarea
                      rows={5} required value={form.message}
                      onChange={(e) => set("message", e.target.value)}
                      placeholder="What are you trying to build, grow, or fix? The more context you give us, the better our proposal."
                      className="mt-1.5 w-full px-4 py-3 rounded-xl border border-input bg-muted/40 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit" disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-3 bg-foreground hover:opacity-90 disabled:opacity-60 active:scale-[0.98] transition-all text-background font-bold text-sm rounded-full py-4 border-none cursor-pointer"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 rounded-full border-2 border-background/30 border-t-background animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Message
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-background/15 shrink-0">
                          <Send size={13} className="text-background" />
                        </span>
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-muted-foreground pt-1">
                    No spam, no cold-pitching. We treat your details with respect.
                  </p>
                </form>
              )}
            </motion.div>

            {/* ── SIDEBAR (2 cols) ── */}
            <motion.div
              initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.1 }}
              className="lg:col-span-2 flex flex-col gap-5"
            >
              {/* Map */}
              <div className="relative rounded-3xl overflow-hidden border border-border shadow-md" style={{ height: "clamp(220px,30vw,320px)" }}>
                <iframe
                  title="Globe Stack — Remote HQ"
                  src="https://www.google.com/maps?q=San+Francisco,+California&output=embed"
                  width="100%" height="100%"
                  style={{ border: 0 }} allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                {/* Map badge */}
                <div className="absolute bottom-4 left-4">
                  <div className="bg-background rounded-xl px-3.5 py-2.5 shadow-lg flex items-center gap-2.5 border border-border">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center shrink-0">
                      <Globe size={14} className="text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-xs text-foreground font-display">Globe Stack</p>
                      <p className="text-muted-foreground text-[10px]">Remote-first · Worldwide</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick contact buttons */}
              <div className="grid grid-cols-2 gap-3">
                <a href="mailto:hello@globestack.io"
                  className="flex items-center gap-2.5 bg-foreground hover:opacity-90 rounded-2xl px-4 py-4 no-underline group transition-all duration-200">
                  <div className="w-9 h-9 rounded-xl bg-background/15 flex items-center justify-center shrink-0">
                    <Mail size={15} className="text-background" />
                  </div>
                  <div>
                    <p className="text-background/60 text-[10px] uppercase tracking-widest font-mono">Email</p>
                    <p className="text-background font-bold text-xs">Send a message</p>
                  </div>
                </a>
                <a href="#"
                  className="flex items-center gap-2.5 bg-gradient-to-br from-cyan-500 to-violet-500 hover:opacity-90 rounded-2xl px-4 py-4 no-underline transition-all duration-200">
                  <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                    <Phone size={15} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white/70 text-[10px] uppercase tracking-widest font-mono">Call</p>
                    <p className="text-white font-bold text-xs">Book a slot</p>
                  </div>
                </a>
              </div>

              {/* Why work with us */}
              {/* <div className="rounded-2xl border border-border bg-card p-5">
                <p className="font-display font-bold text-sm text-foreground mb-4">Why teams choose Globe Stack</p>
                <div className="space-y-3">
                  {[
                    "Senior-only — no junior hand-offs",
                    "Fixed-scope builds or monthly retainers",
                    "Data-driven decisions at every step",
                    "Full-stack: web, AI, ads, SEO, social",
                    "Async-first, responsive across timezones",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <CheckCircle size={14} className="text-cyan-500 mt-0.5 shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div> */}

              {/* Social */}
              <div className="rounded-2xl border border-border bg-card p-5">
                <p className="font-display font-bold text-sm text-foreground mb-4">Follow Globe Stack</p>
                <div className="flex items-center gap-3">
                  {[
                    { icon: Linkedin, href: "#", label: "LinkedIn", hover: "hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 dark:hover:bg-blue-950/40 dark:hover:border-blue-800" },
                    { icon: Twitter,  href: "#", label: "Twitter",  hover: "hover:bg-sky-50 hover:text-sky-500 hover:border-sky-200 dark:hover:bg-sky-950/40 dark:hover:border-sky-800" },
                    { icon: Github,   href: "#", label: "GitHub",   hover: "hover:bg-gray-100 hover:text-gray-900 hover:border-gray-300 dark:hover:bg-gray-800 dark:hover:border-gray-600" },
                  ].map(({ icon: Icon, href, label, hover }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                      className={`w-10 h-10 rounded-xl bg-muted/60 border border-border flex items-center justify-center text-muted-foreground transition-all duration-200 no-underline ${hover}`}
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Testimonial snippet */}
              {/* <div className="rounded-2xl border border-glow bg-gradient-to-br from-cyan-500/5 to-violet-500/5 p-5">
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-foreground/80 italic mb-3">
                  "Globe Stack rebuilt our Shopify store and our revenue 2.6x'd in 5 months. They feel like an in-house team."
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center font-mono text-[10px] font-bold text-white">
                    MC
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground">Maya Chen</p>
                    <p className="text-[10px] text-muted-foreground">CEO, Lumen Skincare</p>
                  </div>
                </div>
              </div> */}
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <label className="block text-[11px] font-bold uppercase tracking-widest text-muted-foreground font-mono">
      {children}
    </label>
  );
}

function FormField({
  label, placeholder, value, onChange, type = "text", required,
}: {
  label: string; placeholder: string; value: string;
  onChange: (v: string) => void; type?: string; required?: boolean;
}) {
  return (
    <div>
      <FieldLabel>{label}</FieldLabel>
      <input
        type={type} placeholder={placeholder} value={value} required={required}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1.5 w-full h-11 px-4 rounded-xl border border-input bg-muted/40 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all"
      />
    </div>
  );
}