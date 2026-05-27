import { createFileRoute, Link } from "@tanstack/react-router";
import { fetchAllPosts, type BlogPost } from "@/lib/blog";
import {
  ArrowRight, ArrowUpRight, ArrowLeft, Sparkles, Code2, Search, Target,
  MessageCircle, ShoppingBag, Star, Plus, Minus, ExternalLink, Eye, X,
  ShieldCheck, Rocket, Users, Zap, Award, TrendingUp, Play, ChevronLeft, ChevronRight,
  CheckCircle, Cpu, BarChart2, Quote,
} from "lucide-react";
import { useState, useEffect, useCallback, useRef, useMemo, memo, type JSX } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { CTA } from "@/components/section";
import { SERVICES } from "@/lib/site";
import {
  PROJECTS, CASE_STUDIES, POSTS, PROJECT_IMAGES,
  CASE_IMAGES, SERVICE_IMAGES, POST_IMAGES, PROCESS,
} from "@/lib/content";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => seo({
    title: "Globe Stack Technologies | Web development, Web app, AI, SEO, Ads, Social, Shopify",
    description: "Globe Stack is a full-stack tech studio. We build websites, web apps, ship AI, run ads, manage social, optimize SEO, develop e-commerce stores and design Shopify stores that convert.",
    path: "/",
  }),
  component: Home,
});

/* ─── Types ─── */
const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2, Search, Sparkles, Target, MessageCircle, ShoppingBag,
};

const SERVICE_BLURBS: Record<string, string> = {
  "web-development": "High-performance sites & web apps built on modern stacks.",
  "ui-ux-design": "Interfaces that convert — from wireframes to pixel-perfect Figma.",
  "saas-development": "End-to-end SaaS builds with auth, billing & multi-tenancy.",
  "seo": "Technical SEO, content strategy & link building backed by data.",
  "ai-solutions": "Custom AI agents, RAG systems & automations that move metrics.",
  "social-and-ads": "Full-funnel paid media + organic content under one senior team.",
  "shopify-store-design": "Custom Shopify themes & CRO — we design stores that sell.",
  "website-maintenance": "Ongoing support, security patches & performance tuning.",
  "backend-api-development": "REST & GraphQL APIs, integrations, and scalable infrastructure.",
};

/* ─── Static data ─── */
const ABOUT_CARDS = [
  {
    tag: "Vision-driven",
    t: "Built for the long game",
    d: "From brand systems to product foundations, we architect digital strategies designed for compounding growth — not vanity launches that fade.",
    img: "/media/about-vision.jpg",
  },
  {
    tag: "Full-stack craft",
    t: "Web, AI & Commerce unified",
    d: "Every project ships with modern tech: performant web apps, intelligent AI integrations, and conversion-optimised Shopify stores, all from one senior team.",
    img: "/media/about-craft.jpg",
  },
];

const WHY_CARDS = [
  { t: "Strategy + Execution", d: "We don't just design or code. We help shape the product, plan the roadmap, and build solutions that align with your business goals.", icon: Users, img: "/media/why-team.jpg" },
  { t: "Built for Growth", d: "From websites to SaaS platforms and AI systems, everything is designed to scale as your users, traffic, and business grow.", icon: TrendingUp, img: "/media/why-outcomes.jpg" },
  { t: "Transparent Process", d: "Weekly updates, shared workspaces, and live progress tracking mean you're always informed from kickoff to launch.", icon: ShieldCheck, img: "/media/why-transparency.jpg" },
  { t: "Performance First", d: "Fast loading, SEO-ready, secure, and optimized products built with clean architecture that lasts beyond launch.", icon: Award, img: "/media/why-qualit.jpg" },
];

const STACK_GROUPS = [
  { name: "Web Development", items: ["TypeScript", "React", "Next.js", "TanStack", "Node.js", "Tailwind", "Express.js", "MongoDB", "PostgreSQL"] },
  { name: "AI & ML", items: ["OpenAI", "Anthropic", "LangChain", "pgvector", "Python", "Hugging Face"] },
  { name: "Commerce", items: ["Shopify", "Wordpress", "Hydrogen", "Stripe", "Klaviyo", "Sanity", "Webflow"] },
  { name: "Growth & Marketing", items: ["GA4", "Meta Ads", "Google Ads", "Ahrefs", "BigQuery", "Notion"] },
];

const TESTIMONIALS_DATA = [
  { name: "Adebayo David", role: "CEO, Niscala.io", avatar: "AO", quote: "Globe Stack rebuilt our entire web platform and integrated a custom AI assistant. Traffic doubled in 3 months and our team is more productive than ever." },
  { name: "Chioma Eze", role: "Founder, SAMTIV", avatar: "CE", quote: "Their Shopify setup and Meta Ads strategy took us from zero to 6 figures online in under 90 days. The senior team approach is the real deal." },
  { name: "Emeka Nwosu", role: "Head of Growth, IEA", avatar: "EN", quote: "The SEO work Globe Stack did transformed our organic channel. We went from page 4 to ranking #1 for our core keywords within 5 months." },
  { name: "Fatima Al-Hassan", role: "CTO, BOKING", avatar: "FA", quote: "Clean code, great communication, and they shipped on time. The AI automation they built saved our ops team 20+ hours a week." },
  { name: "Tunde Adeleke", role: "Director, Greenfield Ventures", avatar: "TA", quote: "Working with Globe Stack felt like having an in-house team. They understood our business goals and every deliverable reflected that." },
  { name: "Olusegun Daniel", role: "E-commerce Manager, StyleHouse", avatar: "NO", quote: "Our Shopify conversion rate went from 1.2% to 3.8% after their redesign. The attention to UX and page speed was exceptional." },
];

const FAQ_DATA = [
  { q: "What services does Globe Stack offer?", a: "We offer end-to-end digital services: custom web development, AI integration, SEO, paid advertising (Meta & Google Ads), social media management, and Shopify store design and optimisation — all delivered by a senior-only team." },
  { q: "Do you work with startups or established businesses?", a: "Both. We've worked with early-stage founders who need their first product shipped, and with established brands scaling into new digital channels. Our process adapts to where you are." },
  { q: "How long does a typical project take?", a: "A focused web project typically takes 4–8 weeks. SEO and ads are ongoing engagements with measurable monthly milestones. AI integrations vary — we scope these during discovery to give you an honest timeline." },
  { q: "Will I own everything you build?", a: "Absolutely. All code, content, ad accounts, SEO assets, and credentials are yours. We hand over full ownership at the end of every engagement." },
  { q: "How do you measure success?", a: "Through the metrics that matter to your business — organic traffic, conversion rate, ROAS, revenue. We set targets together at the start, track them in shared dashboards, and report weekly." },
  { q: "Can Globe Stack handle everything my business needs digitally?", a: "Yes. That's exactly why we built Globe Stack. Instead of managing five separate agencies, you get one senior team across web, AI, SEO, ads, social, and commerce — with unified strategy and accountable delivery." },
];

/* ─── Shared animation variants ─── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const staggerCache: Record<number, Variants> = {};
function staggerContainer(stagger = 0.08): Variants {
  if (!staggerCache[stagger]) {
    staggerCache[stagger] = {
      hidden: {},
      show: { transition: { staggerChildren: stagger } },
    };
  }
  return staggerCache[stagger];
}

const VIEWPORT_ONCE = { once: true, amount: 0.15 } as const;
const VIEWPORT_ONCE_MARGIN = { once: true, amount: 0.1, margin: "-40px" } as const;

/* ─── Home ─── */
function Home(): JSX.Element {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <CaseStudies />
      <WhyUs />
      <Process />
      <Stack />
      <Testimonials />
      <Blog />
      <FAQs />
      <CTA />
    </>
  );
}

/* ============================== HERO ============================== */
function HeroVisual(): JSX.Element {
  return (
    <div className="relative flex justify-center items-center">
      <div
        className="absolute inset-0 mx-auto h-[500px] w-[500px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(14,165,233,0.18) 0%, transparent 70%)" }}
      />
      <img
        src="/media/downl.png"
        className="relative z-10 w-[340px] md:w-[420px]"
        alt="Laptop UI"
        width={420}
        height={420}
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />
    </div>
  );
}

function Hero(): JSX.Element {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const t = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.src = "/media/bg.mp4";
        videoRef.current.load();
      }
    }, 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      className="relative overflow-hidden border-b border-border text-white"
      style={{ background: "linear-gradient(160deg,#020d1a 0%,#041e38 50%,#061428 100%)", minHeight: "100vh" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <video
          ref={videoRef}
          className="h-full w-full object-cover opacity-15"
          autoPlay
          loop
          muted
          playsInline
          suppressHydrationWarning
        />
        <div className="absolute inset-0 bg-black/40" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(14,165,233,0.25) 0%, transparent 60%)" }}
        />
      </div>

      <div
        className="relative mx-auto max-w-7xl px-4 md:px-6 flex flex-col"
        style={{ minHeight: "100vh", paddingTop: "10rem", paddingBottom: "2rem" }}
      >
        {/* Desktop-only top row badges */}
        <div className="hidden md:flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex w-max items-center rounded-full border border-sky-400/40 bg-sky-500/10 px-4 py-2 text-xs font-medium text-sky-200"
          >
            ✦ Next-Level Business
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-row sm:flex-col gap-6 sm:gap-3"
          >
            {[
              { t: "Future-Ready", s: "Strategies", icon: <ArrowUpRight className="h-4 w-4" /> },
              { t: "24/7 Customer", s: "Support", icon: <ArrowRight className="h-4 w-4" /> },
            ].map((c) => (
              <div key={c.t} className="flex items-center gap-4 border-b border-sky-300/20 pb-2 text-sm text-sky-100">
                <div className="leading-tight">
                  <div>{c.t}</div>
                  <div>{c.s}</div>
                </div>
                <div className="ml-auto flex h-6 w-10 items-center justify-end text-sky-300">
                  <div className="mr-2 h-px flex-1 bg-sky-300/40" />
                  {c.icon}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Mobile hero */}
        <div className="relative mt-0 flex flex-col gap-7 md:hidden">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="absolute inset-0 -mx-4 pointer-events-none"
            style={{ top: "-2rem", bottom: "-2rem" }}
          >
            <img
              src="/media/downl.png"
              alt=""
              aria-hidden="true"
              width={500}
              height={500}
              className="absolute inset-0 h-full w-full object-contain object-center opacity-60"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 ml-4 inline-flex w-max items-center rounded-full border border-sky-400/40 bg-sky-500/10 px-4 py-2 text-xs font-medium text-sky-200"
          >
            ✦ Next-Level Business
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative z-10 space-y-4 pl-4"
          >
            <h2 className="font-display text-[2.75rem] font-bold leading-[1.08] tracking-tight">
              Build Smarter,<br />
              Grow <span className="text-sky-400">Faster.</span>
            </h2>
            <p className="text-base sm:text-lg text-sky-100/80 leading-relaxed max-w-[20rem]">
              We design, build, and grow digital products Websites, AI solutions,
              UI/UX design, e-commerce systems, SEO, ads, social media, and Shopify
              all under one senior team.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="relative z-10 flex items-center gap-3 px-4"
          >
            <Link
              to="/contact"
              className="flex-1 text-center rounded-full px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              style={{ background: "linear-gradient(135deg,#0ea5e9,#06b6d4)", boxShadow: "0 0 28px -5px rgba(14,165,233,0.7)" }}
            >
              Start a project
            </Link>
            <Link
              to="/portfolio"
              className="flex-1 text-center rounded-full px-4 py-3 text-sm font-semibold text-white/80 border border-sky-400/50 bg-sky-500/15 hover:bg-sky-500/25 hover:text-white transition"
            >
              View our work
            </Link>
          </motion.div>
        </div>

        {/* Desktop center */}
        <div className="relative flex-1 mt-8 md:mt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="hidden md:block select-none text-center relative z-20 pointer-events-none"
            style={{ lineHeight: 0.88 }}
          >
            <svg
              viewBox="0 0 1200 220"
              className="w-full"
              aria-hidden="true"
              style={{ overflow: "visible" }}
            >
              <defs>
                <linearGradient id="gsGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.22)" />
                  <stop offset="60%" stopColor="rgba(186,230,253,0.06)" />
                  <stop offset="100%" stopColor="rgba(56,189,248,0.15)" />
                </linearGradient>
              </defs>
              <text
                x="50%"
                y="190"
                textAnchor="middle"
                fill="url(#gsGrad)"
                fontFamily="var(--font-display, sans-serif)"
                fontWeight="800"
                fontSize="200"
                letterSpacing="-4"
              >
                GLOBE STACK
              </text>
            </svg>
          </motion.div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
            className="hidden md:flex absolute inset-0 mt-0 items-center justify-center pointer-events-none"
          >
            <div className="w-[460px] lg:w-[540px]">
              <HeroVisual />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="hidden md:block absolute left-0 bottom-0 max-w-sm z-30"
          >
            <h2 className="font-display text-3xl font-bold leading-tight lg:text-4xl">
              Build Smarter,<br />
              Grow <span className="text-sky-400">Faster.</span>
            </h2>
            <p className="mt-3 text-sm text-white/60 leading-relaxed md:text-base">
              We design, build, and grow digital products websites, AI solutions, SEO, ads, social, and Shopify all under one senior team.
            </p>
            <div className="mt-5 flex items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                style={{ background: "linear-gradient(135deg,#0ea5e9,#06b6d4)", boxShadow: "0 0 30px -5px rgba(14,165,233,0.7)" }}
              >
                Start a Project
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white/80 border border-sky-400/50 bg-sky-500/15 hover:bg-sky-500/25 hover:text-white transition"
              >
                View our work
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="hidden md:block absolute right-0 bottom-0 max-w-xs text-right z-30"
          >
            <p className="text-sm text-white/50 md:text-base leading-relaxed">
              One senior team. Every digital channel. Outcomes that compound. We love to give you the best digital experience.
            </p>
            <div className="mt-5 flex items-center gap-3 justify-end">
              <Link
                to="/contact"
                aria-label="Get started"
                className="grid h-12 w-12 place-items-center rounded-full border border-sky-400/50 bg-sky-500/15 text-white hover:bg-sky-500/25 transition"
              >
                <Play className="h-4 w-4 fill-current" />
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-10 md:mt-15 flex flex-col gap-3"
        >
          <div className="grid grid-cols-1 gap-3 rounded-2xl border border-sky-400/20 bg-white/5 p-3 sm:grid-cols-2">
            <div className="flex items-center justify-around gap-2 rounded-xl px-2 py-2">
              {[
                { v: "35+", l: "Happy Clients" },
                { v: "95%", l: "Growth" },
                { v: "7+", l: "Years" },
              ].map((s) => (
                <div key={s.l} className="flex flex-col items-center text-center">
                  <div className="font-display text-2xl font-bold">{s.v}</div>
                  <div className="text-xs text-sky-200/60">{s.l}</div>
                </div>
              ))}
            </div>
            <div className="hidden sm:flex flex-wrap items-center justify-center gap-x-4 gap-y-2 rounded-xl border border-sky-400/10 px-3 py-2">
              <span className="text-xs text-sky-300/50 uppercase tracking-wider whitespace-nowrap">Trusted by</span>
              {["Cowrywise", "Andela", "✺ OAL.", "Carbon"].map((b) => (
                <span key={b} className="text-sm font-semibold text-sky-100/50 whitespace-nowrap">{b}</span>
              ))}
            </div>
          </div>

          {/* Mobile marquee — pure CSS, zero JS */}
          <div className="sm:hidden relative overflow-hidden rounded-xl border border-sky-400/10 bg-white/5 py-2.5">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#020d1a] to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#020d1a] to-transparent z-10" />
            <div className="flex w-max" style={{ animation: "marquee 16s linear infinite" }}>
              {(["a", "b"] as const).map((rep) => (
                <div key={rep} className="flex items-center gap-8 px-6">
                  <span className="text-[10px] uppercase tracking-widest text-sky-300/40 font-mono">Trusted by</span>
                  {["Cowrywise", "Andela", "✺ OAL.", "Carbon"].map((b) => (
                    <span key={b} className="text-sm font-semibold text-sky-100/55 whitespace-nowrap">{b}</span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================== ABOUT ============================== */
function About() {
  const cards = [
    {
      tag: "Vision-driven",
      t: "Built for the long game",
      d: "From brand systems to product foundations, we architect digital strategies designed for compounding growth — not vanity launches that fade.",
      img: "/media/about-vision.jpg",
    },
    {
      tag: "Full-stack craft",
      t: "Web, AI & Commerce unified",
      d: "Every project ships with modern tech: performant web apps, intelligent AI integrations, and conversion-optimised Shopify stores, all from one senior team.",
      img: "/media/about-craft.jpg",
    },
  ];

  // return (
  //   <section className="relative border-t border-border py-20 md:py-32 bg-[var(--section-a)]">
  //     <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
  //       <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
  //         <div className="font-mono text-xs uppercase tracking-wider ">About Us</div>
  //         <h2 className="mt-3 font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
  //           Your Growth Partner Across Every Digital Channel
  //         </h2>
  //         <p className="mt-6 max-w-md text-muted-foreground">
  //           Globe Stack is a full-stack tech studio built by senior specialists. We handle web development, AI integration, SEO, paid ads, social media, and Shopify so you get one accountable team delivering measurable outcomes across every touchpoint.
  //         </p>
  //         <Link to="/about" className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background hover:opacity-90">
  //           Our Story
  //           <span className="grid h-7 w-7 place-items-center rounded-full bg-background text-foreground"><Zap className="h-3.5 w-3.5" /></span>
  //         </Link>
  //       </motion.div>

  //       <div className="grid gap-5 sm:grid-cols-2">
  //         {cards.map((c, i) => (
  //           <motion.div
  //             key={c.t}
  //             initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
  //             whileHover={{ y: -6 }}
  //             className="group relative aspect-[3/4] overflow-hidden rounded-3xl border border-border"
  //           >
  //             <img src={c.img} alt={c.t} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" loading="eager" />
  //             <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/60" />
  //             <div className="absolute inset-0 flex flex-col p-6 text-white">
  //               <div className="font-display text-xl font-semibold italic">
  //                 {c.tag} <span className="not-italic"></span>
  //               </div>
  //               <div className="mt-1 text-xs text-white/70">Our Values</div>
  //               <div className="mt-auto">
  //                 <div className="font-display text-2xl font-bold leading-tight">{c.t}</div>
  //                 <p className="mt-2 line-clamp-3 text-sm text-white/80">{c.d}</p>
  //                 <div className="mt-4 flex items-center justify-between">
  //                   <Link to="/about" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-xs backdrop-blur">
  //                     Learn More <span className="grid h-5 w-5 place-items-center rounded-full bg-white text-black"><Zap className="h-2.5 w-2.5" /></span>
  //                   </Link>
  //                   <div className="font-display text-5xl font-bold text-white/20">0{i + 1}</div>
  //                 </div>
  //               </div>
  //             </div>
  //           </motion.div>
  //         ))}
  //       </div>
  //     </div>
  //   </section>
  // );


    return (
    <section className="relative border-t border-border py-20 md:py-32  bg-[var(--section-a)]">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">About Us</div>
          <h2 className="mt-3 font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
              Your Growth Partner Across Every Digital Channel
          </h2>
          <p className="mt-6 max-w-md text-muted-foreground">
             Globe Stack is a full-stack tech studio built by senior specialists. We handle web development, AI integration, SEO, paid ads, social media, and Shopify so you get one accountable team delivering measurable outcomes across every touchpoint.
          </p>
          <Link to="/about" className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background hover:opacity-90">
             Our Story
            <span className="grid h-7 w-7 place-items-center rounded-full bg-background text-foreground"><Zap className="h-3.5 w-3.5" /></span>
          </Link>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2">
          {cards.map((c, i) => (
            <motion.div
              key={c.t}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative aspect-[3/4] overflow-hidden rounded-3xl border border-border"
            >
              <img src={c.img} alt={c.t} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/60" />
              <div className="absolute inset-0 flex flex-col p-6 text-white">
                <div className="font-display text-xl font-semibold italic">
                  {c.tag} <span className="not-italic"></span>
                </div>
                <div className="mt-1 text-xs text-white/70">Our Values</div>
                <div className="mt-auto">
                  <div className="font-display text-2xl font-bold leading-tight">{c.t}</div>
                  <p className="mt-2 line-clamp-3 text-sm text-white/80">{c.d}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <Link to="/about" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-xs backdrop-blur">
                      Learn More <span className="grid h-5 w-5 place-items-center rounded-full bg-white text-black"><Zap className="h-2.5 w-2.5" /></span>
                    </Link>
                    <div className="font-display text-5xl font-bold text-white/20">0{i + 1}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ============================== SLIDER HOOK ============================== */
function useAutoSlider(count: number, intervalMs = 5000) {
  const [index, setIndex] = useState(0);
  const pausedRef = useRef(false);

  const setPaused = useCallback((v: boolean) => {
    pausedRef.current = v;
  }, []);

  useEffect(() => {
    if (count <= 1) return;

    const tick = () => {
      if (!pausedRef.current && document.visibilityState === "visible") {
        setIndex((i) => (i + 1) % count);
      }
    };

    const id = setInterval(tick, intervalMs);
    return () => clearInterval(id);
  }, [count, intervalMs]);

  return { index, setIndex, setPaused };
}

function SliderArrows({ onPrev, onNext }: { onPrev: () => void; onNext: () => void }): JSX.Element {
  return (
    <div className="flex gap-2">
      <button
        onClick={onPrev}
        aria-label="Previous slide"
        className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card transition hover:bg-muted"
      >
        <ArrowLeft className="h-4 w-4" />
      </button>
      <button
        onClick={onNext}
        aria-label="Next slide"
        className="grid h-11 w-11 place-items-center rounded-full bg-foreground text-background transition hover:opacity-90"
      >
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}

/* ============================== SERVICES ============================== */
function Services() {
  const perView = 3;
  const max = Math.max(0, SERVICES.length - perView);
  const { index, setIndex, setPaused } = useAutoSlider(max + 1, 6000);
  const next = useCallback(() => setIndex((i) => (i >= max ? 0 : i + 1)), [max, setIndex]);
  const prev = useCallback(() => setIndex((i) => (i <= 0 ? max : i - 1)), [max, setIndex]);

  return (
    <section className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* CENTERED HEADER */}
{/* CENTERED HEADER */}
<motion.div
  className="mb-10 text-center"
  variants={staggerContainer(0.1)}
  initial="hidden"
  whileInView="show"
  viewport={VIEWPORT_ONCE}
>
  <motion.div
    variants={fadeUp}
    transition={{ duration: 0.4 }}
    className="font-mono text-xs uppercase tracking-wider text-muted-foreground"
  >
    Services
  </motion.div>

  <motion.h2
    variants={fadeUp}
    transition={{ duration: 0.4 }}
    className="mt-3 font-display text-3xl font-bold tracking-tight md:text-5xl"
  >
    What we do best.
  </motion.h2>

  <motion.p
    variants={fadeUp}
    transition={{ duration: 0.4 }}
    className="mt-3 mx-auto max-w-xl text-muted-foreground"
  >
    From idea to revenue, we power every stage of your digital growth.
  </motion.p>
</motion.div>

        {/* Desktop slider */}
        <div className="hidden md:block" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <div className="overflow-hidden">
            <div
              className="flex gap-5 transition-transform duration-700 ease-out"
              style={{ transform: `translateX(calc(-${index} * (100% / ${perView})))` }}
            >
              {SERVICES.map((s, i) => (
                <ServiceCard key={s.slug} s={s} className="w-[calc((100%-2.5rem)/3)] shrink-0" />
              ))}
            </div>
          </div>
<div className="mt-8 flex items-center justify-between">
  <div className="flex gap-1.5">
    {Array.from({ length: max + 1 }).map((_, i) => (
      <button
        key={i}
        onClick={() => setIndex(i)}
        aria-label={`Slide ${i + 1}`}
        className={`h-1.5 rounded-full transition-all ${
          i === index
            ? "w-8 bg-foreground"
            : "w-1.5 bg-border"
        }`}
      />
    ))}
  </div>

  <div className="flex items-center gap-4">
    <Link
      to="/services"
      className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium hover:bg-muted"
    >
      Browse all services
      <ArrowUpRight className="h-4 w-4" />
    </Link>

    <SliderArrows onPrev={prev} onNext={next} />
  </div>
</div>
</div>

        {/* Mobile scrollable */}
        <div className="mt-10 -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto scrollbar-hide px-4 md:hidden">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.slug} s={s} className="w-[80%] shrink-0 snap-start" />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  s,
  className = "",
}: {
  s: typeof SERVICES[number];
  className?: string;
}) {
  const Icon = ICONS[s.icon] ?? Sparkles;
  const blurb = SERVICE_BLURBS[s.slug] ?? s.blurb;

  return (
    <Link
      to="/services/$slug"
      params={{ slug: s.slug }}
      className={`group relative aspect-[3/4] overflow-hidden rounded-3xl border border-border bg-card ${className}`}
    >
      <img
        src={SERVICE_IMAGES[s.slug]}
        alt={s.title}
        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
        loading="lazy"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/40" />

      <div className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full glass border border-white/20 opacity-0 transition group-hover:opacity-100">
        <ArrowUpRight className="h-4 w-4 text-white" />
      </div>

<div className="absolute inset-0 flex flex-col justify-end p-6 pointer-events-none"> <div className="grid h-11 w-11 place-items-center rounded-xl bg-black/50 border border-white/20 pointer-events-auto"> <Icon className="h-5 w-5 text-white" /> </div> <h3 className="mt-4 font-display text-2xl font-bold leading-tight text-white drop-shadow-lg">{s.title}</h3> <p className="mt-2 text-sm text-white/70 leading-relaxed line-clamp-2">{blurb}</p> </div> </Link>
  );
}

/* ============================== PORTFOLIO ============================== */
function ScreenshotModal({ project, onClose }: { project: typeof PROJECTS[number]; onClose: () => void }): JSX.Element {
  const images = useMemo(() => project.images ?? [PROJECT_IMAGES[project.slug]], [project]);
  const [imgIdx, setImgIdx] = useState(0);
  const prev = useCallback(() => setImgIdx((i) => (i <= 0 ? images.length - 1 : i - 1)), [images.length]);
  const next = useCallback(() => setImgIdx((i) => (i >= images.length - 1 ? 0 : i + 1)), [images.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, prev, next]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} screenshots`}
      className="fixed inset-0 z-[100] grid place-items-center bg-background/90 p-4"
      style={{ backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl rounded-2xl border border-border bg-card shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-border p-4">
          <div>
            <div className="text-xs text-muted-foreground">{project.category}</div>
            <div className="font-display text-lg font-semibold">{project.title}</div>
          </div>
          <div className="flex items-center gap-3">
            {images.length > 1 && (
              <span className="text-xs text-muted-foreground">{imgIdx + 1} / {images.length}</span>
            )}
            <button onClick={onClose} aria-label="Close modal" className="grid h-9 w-9 place-items-center rounded-full hover:bg-muted">
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden bg-zinc-950" style={{ height: "min(65vh, 520px)" }}>
          <img
            src={images[imgIdx]}
            alt={`${project.title} screenshot ${imgIdx + 1}`}
            className="h-full w-full object-contain"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
          <div className="absolute bottom-4 left-4 text-white">
            <div className="font-mono text-[10px] uppercase opacity-80">Preview</div>
            <div className="font-display text-xl font-bold">{project.title}</div>
          </div>

          {images.length > 1 && (
            <>
              <button onClick={prev} aria-label="Previous screenshot" className="absolute left-3 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-black/50 text-white hover:bg-black/70 transition">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button onClick={next} aria-label="Next screenshot" className="absolute right-3 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-black/50 text-white hover:bg-black/70 transition">
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}
        </div>

        {images.length > 1 && (
          <div className="flex gap-2 overflow-x-auto p-3 scrollbar-hide">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setImgIdx(i)}
                aria-label={`View screenshot ${i + 1}`}
                className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition ${
                  i === imgIdx ? "border-violet-500" : "border-border opacity-60 hover:opacity-100"
                }`}
              >
                <img src={img} alt={`Thumbnail ${i + 1}`} className="h-full w-full object-cover" loading="lazy" decoding="async" />
              </button>
            ))}
          </div>
        )}

        {project.live && (
          <div className="flex items-center justify-end gap-2 border-t border-border p-4">
            <Link to="/portfolio/$slug" params={{ slug: project.slug }} className="rounded-full border border-border px-4 py-2 text-sm hover:bg-muted">Case details</Link>
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-90">
              Visit live site <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

function Portfolio(): JSX.Element {
  const [shotFor, setShotFor] = useState<string | null>(null);
  const project = useMemo(() => PROJECTS.find((p) => p.slug === shotFor) ?? null, [shotFor]);

  return (
    <section className="border-t border-border py-20 md:py-28 bg-[var(--section-a)]">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          className="mb-10 text-center"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
        >
          <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Portfolio</motion.div>
          <motion.h2 variants={fadeUp} transition={{ duration: 0.5 }} className="mt-3 font-display text-3xl font-bold tracking-tight md:text-5xl">Recent shipped work.</motion.h2>
          <motion.p variants={fadeUp} transition={{ duration: 0.5 }} className="mt-3 mx-auto max-w-xl text-muted-foreground">
            A curated selection of web apps, AI products, e-commerce stores, and growth campaigns we've built and launched.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer(0.04)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE_MARGIN}
        >
          {PROJECTS.slice(0, 6).map((p, idx) => {
            const images = p.images ?? [PROJECT_IMAGES[p.slug]];
            /*
              FIX: First 3 portfolio cards should load eagerly — they're typically
              visible when the user scrolls to this section. After that, lazy.
            */
            const isEager = idx < 3;
            return (
              <motion.div
                key={p.slug}
                variants={fadeUp}
                transition={{ duration: 0.3 }}
                className="group overflow-hidden rounded-2xl border border-border bg-card transform-gpu transition-all duration-300 hover:border-glow hover:-translate-y-1"
              >
                <div className="relative h-56 overflow-hidden bg-zinc-950">
                  <img
                    src={images[0]}
                    alt={p.title}
                    width={600}
                    height={224}
                    className="h-full w-full object-cover object-top transition-transform duration-500 will-change-transform group-hover:scale-105"
                    loading={isEager ? "eager" : "lazy"}
                    fetchPriority={isEager ? "high" : "auto"}
                    decoding={isEager ? "sync" : "async"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 rounded-full border border-white/30 bg-black/40 px-2.5 py-1 font-mono text-[10px] uppercase text-white">{p.tag}</div>
                  {images.length > 1 && (
                    <div className="absolute top-3 right-3 rounded-full bg-black/60 px-2 py-1 font-mono text-[10px] text-white">
                      {images.length} shots
                    </div>
                  )}
                  {/* Desktop: hover overlay with action buttons */}
                  <div className="absolute inset-0 hidden md:flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="flex gap-2">
                      <button
                        onClick={() => setShotFor(p.slug)}
                        aria-label={`View screenshots for ${p.title}`}
                        className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-4 py-2 text-xs font-medium text-black hover:bg-white"
                      >
                        <Eye className="h-3.5 w-3.5" /> Screenshots
                      </button>
                      {p.live && (
                        <a href={p.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background hover:opacity-90">
                          <ExternalLink className="h-3.5 w-3.5" /> Live site
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <div className="text-xs text-muted-foreground">{p.category}</div>
                  <Link to="/portfolio/$slug" params={{ slug: p.slug }} className="mt-1 block font-display text-lg font-semibold hover:text-gradient">{p.title}</Link>
                  <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{p.desc}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.tech.slice(0, 4).map((t) => (
                      <span key={t} className="rounded-md bg-muted px-2 py-0.5 font-mono text-[10px] text-muted-foreground">{t}</span>
                    ))}
                    {p.tech.length > 4 && (
                      <span className="rounded-md bg-muted px-2 py-0.5 font-mono text-[10px] text-muted-foreground">+{p.tech.length - 4}</span>
                    )}
                  </div>

                  {/*
                    FIX: Mobile action buttons — always visible, no hover needed.
                    On desktop these are hidden (desktop uses the image overlay above).
                    Two tappable buttons side-by-side with clear visual affordance.
                  */}
                  <div className="mt-4 flex items-center gap-2 md:hidden">
                    <button
                      onClick={() => setShotFor(p.slug)}
                      aria-label={`View screenshots for ${p.title}`}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full border border-border bg-muted px-3 py-2 text-xs font-medium hover:bg-muted/80 active:scale-95 transition"
                    >
                      <Eye className="h-3.5 w-3.5" />
                      Screenshots {images.length > 1 && `(${images.length})`}
                    </button>
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-foreground px-3 py-2 text-xs font-medium text-background hover:opacity-90 active:scale-95 transition"
                      >
                        <ExternalLink className="h-3.5 w-3.5" /> Live site
                      </a>
                    )}
                  </div>

                  {/* Desktop bottom row — kept for desktop non-hover state */}
                  <div className="mt-2 hidden md:flex items-center justify-between gap-2">
                    <button
                      onClick={() => setShotFor(p.slug)}
                      aria-label={`View ${images.length} screenshots for ${p.title}`}
                      className="inline-flex items-center gap-1.5 text-xs font-medium hover:text-gradient"
                    >
                      <Eye className="h-3.5 w-3.5" /> View screenshots {images.length > 1 && `(${images.length})`}
                    </button>
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-medium hover:text-gradient">
                        Live link <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="mt-10 flex justify-center"
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          transition={{ duration: 0.5 }}
        >
          <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background hover:opacity-90">
            View all projects
            <span className="grid h-7 w-7 place-items-center rounded-full bg-background text-foreground"><ArrowRight className="h-3.5 w-3.5" /></span>
          </Link>
        </motion.div>
      </div>

      {project !== null && <ScreenshotModal project={project} onClose={() => setShotFor(null)} />}
    </section>
  );
}

/* ============================== CASE STUDY MODAL ============================== */
function CaseStudyModal({ cs, onClose }: { cs: typeof CASE_STUDIES[number]; onClose: () => void }): JSX.Element {
  const [imgIdx, setImgIdx] = useState(0);
  const images = useMemo(() => cs.images ?? [CASE_IMAGES[cs.slug] ?? ""], [cs]);
  const prevImg = useCallback(() => setImgIdx((i) => (i <= 0 ? images.length - 1 : i - 1)), [images.length]);
  const nextImg = useCallback(() => setImgIdx((i) => (i >= images.length - 1 ? 0 : i + 1)), [images.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[200] flex items-start justify-center bg-background/95 overflow-y-auto py-6 px-4"
      style={{ backdropFilter: "blur(8px)" }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={cs.title}
    >
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 32 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative w-full max-w-4xl rounded-3xl border border-border bg-card shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close case study"
          className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full bg-background/80 hover:bg-muted border border-border transition"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="relative h-64 overflow-hidden rounded-t-3xl md:h-80">
          <img src={images[0]} alt={cs.title} width={800} height={320} className="h-full w-full object-cover" loading="lazy" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
          <div className="absolute inset-x-6 bottom-6">
            <div className="flex flex-wrap gap-2 mb-3">
              {cs.tags.map((t) => (
                <span key={t} className="rounded-full bg-white/15 border border-white/25 px-3 py-1 text-xs text-white">{t}</span>
              ))}
            </div>
            <h2 className="font-display text-2xl font-bold text-white leading-tight md:text-3xl">{cs.title}</h2>
            <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-white/70">
              <span className="font-mono uppercase">{cs.client}</span>
              <span>·</span>
              <span>{cs.industry}</span>
              <span>·</span>
              <span>{cs.duration}</span>
              <span className="ml-auto rounded-full bg-white/90 px-3 py-1 font-semibold text-black text-xs">{cs.result}</span>
            </div>
          </div>
        </div>

        <div className="p-6 md:p-8 space-y-8">
          <div>
            <SectionLabel icon={<Target className="h-4 w-4" />} label="Problem Statement" />
            <p className="mt-3 text-muted-foreground leading-relaxed">{cs.problem}</p>
          </div>
          <div>
            <SectionLabel icon={<CheckCircle className="h-4 w-4" />} label="Goals & Objectives" />
            <ul className="mt-3 space-y-2">
              {cs.goals.map((g, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-0.5 h-5 w-5 shrink-0 grid place-items-center rounded-full bg-muted font-mono text-[10px] font-bold">{i + 1}</span>
                  {g}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionLabel icon={<Search className="h-4 w-4" />} label="Research & Discovery" />
            <p className="mt-3 text-muted-foreground leading-relaxed">{cs.research}</p>
          </div>
          <div>
            <SectionLabel icon={<Sparkles className="h-4 w-4" />} label="Design Process" />
            <p className="mt-3 text-muted-foreground leading-relaxed">{cs.designProcess}</p>
          </div>
          <div>
            <SectionLabel icon={<Code2 className="h-4 w-4" />} label="Development Process" />
            <p className="mt-3 text-muted-foreground leading-relaxed">{cs.devProcess}</p>
          </div>
          <div>
            <SectionLabel icon={<Zap className="h-4 w-4" />} label="Challenges & Solutions" />
            <div className="mt-3 space-y-3">
              {cs.challenges.map((c, i) => (
                <div key={i} className="rounded-2xl border border-border bg-muted/40 p-4">
                  <div className="text-sm font-semibold mb-1">Challenge</div>
                  <p className="text-sm text-muted-foreground">{c.challenge}</p>
                  <div className="mt-2 text-sm font-semibold text-sky-500">Solution</div>
                  <p className="text-sm text-muted-foreground">{c.solution}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionLabel icon={<Eye className="h-4 w-4" />} label="Screenshots" />
            <div className="mt-3 relative overflow-hidden rounded-2xl bg-zinc-950" style={{ height: "min(60vh, 460px)" }}>
              <img
                src={images[imgIdx]}
                alt={`${cs.client} screenshot ${imgIdx + 1}`}
                className="h-full w-full object-contain"
                loading="lazy"
                decoding="async"
              />
              {images.length > 1 && (
                <>
                  <button onClick={prevImg} aria-label="Previous screenshot" className="absolute left-3 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-black/60 text-white hover:bg-black/80 transition">
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button onClick={nextImg} aria-label="Next screenshot" className="absolute right-3 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-black/60 text-white hover:bg-black/80 transition">
                    <ChevronRight className="h-5 w-5" />
                  </button>
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                    {images.map((_, i) => (
                      <button key={i} onClick={() => setImgIdx(i)} aria-label={`Screenshot ${i + 1}`} className={`h-1.5 rounded-full transition-all ${i === imgIdx ? "w-6 bg-white" : "w-1.5 bg-white/40"}`} />
                    ))}
                  </div>
                </>
              )}
            </div>
            {images.length > 1 && (
              <div className="mt-2 flex gap-2 overflow-x-auto scrollbar-hide">
                {images.map((img, i) => (
                  <button key={i} onClick={() => setImgIdx(i)} aria-label={`View screenshot ${i + 1}`} className={`h-14 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition ${i === imgIdx ? "border-sky-500" : "border-border opacity-60 hover:opacity-100"}`}>
                    <img src={img} alt="" className="h-full w-full object-cover" loading="lazy" decoding="async" />
                  </button>
                ))}
              </div>
            )}
          </div>
          <div>
            <SectionLabel icon={<BarChart2 className="h-4 w-4" />} label="Final Results & Outcomes" />
            <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {cs.results.map((r) => (
                <div key={r.label} className="rounded-2xl border border-border bg-muted/40 p-4 text-center">
                  <div className="font-display text-2xl font-bold">{r.value}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{r.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionLabel icon={<Cpu className="h-4 w-4" />} label="Tech Stack" />
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {cs.techStack.map((group) => (
                <div key={group.category} className="rounded-xl border border-border p-3">
                  <div className="mb-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{group.category}</div>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <span key={item} className="rounded-md bg-muted px-2 py-0.5 font-mono text-xs">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-muted/40 p-6">
            <Quote className="h-6 w-6 text-muted-foreground mb-3" />
            <p className="font-display text-lg font-medium leading-snug">"{cs.testimonial.quote}"</p>
            <div className="mt-4 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-sky-500 font-mono text-sm font-bold text-white">
                {cs.testimonial.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
              </div>
              <div>
                <div className="text-sm font-semibold">{cs.testimonial.name}</div>
                <div className="text-xs text-muted-foreground">{cs.testimonial.role}</div>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-foreground p-6 text-center text-background">
            <h3 className="font-display text-xl font-bold">Want similar results for your project?</h3>
            <p className="mt-2 text-sm text-background/70">Let's build something that moves your metrics.</p>
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-semibold text-foreground hover:opacity-90">
                Book a discovery call <ArrowRight className="h-4 w-4" />
              </Link>
              <button onClick={onClose} className="text-sm text-background/60 hover:text-background/90">Close case study</button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function SectionLabel({ icon, label }: { icon: React.ReactNode; label: string }): JSX.Element {
  return (
    <div className="flex items-center gap-2">
      <span className="grid h-7 w-7 place-items-center rounded-lg bg-muted text-muted-foreground">{icon}</span>
      <span className="font-display text-base font-semibold">{label}</span>
    </div>
  );
}

/* ============================== CASE STUDIES ============================== */
function CaseStudies(): JSX.Element {
  const [activeCase, setActiveCase] = useState<string | null>(null);
  const cats = useMemo(
    () => ["All", ...Array.from(new Set(CASE_STUDIES.flatMap((c) => c.tags)))],
    []
  );
  const [active, setActive] = useState("All");
  const list = useMemo(
    () => active === "All" ? CASE_STUDIES : CASE_STUDIES.filter((c) => c.tags.includes(active)),
    [active]
  );
  const modalCase = useMemo(() => CASE_STUDIES.find((c) => c.slug === activeCase) ?? null, [activeCase]);

  return (
    <section className="border-t border-border py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          transition={{ duration: 0.5 }}
          className="font-display text-6xl font-bold tracking-tight md:text-8xl lg:text-[5rem] leading-[0.9]"
        >
          Case Studies
        </motion.h2>
        <motion.div
          className="mt-10 grid items-end gap-8 md:grid-cols-2"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
        >
          <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="flex items-center gap-4">
            <div className="grid h-14 w-16 place-items-center rounded-full bg-foreground text-background font-display text-sm font-bold">80+</div>
            <div className="text-sm text-muted-foreground">Projects completed across web, AI, commerce & growth.</div>
          </motion.div>
          <motion.p variants={fadeUp} transition={{ duration: 0.5 }} className="text-pretty text-muted-foreground md:text-lg">
            Explore a selection of crafted work combining unique design and rich technology. We always build from scratch — creating memorable brands, high-performing websites, and digital products that convert.
          </motion.p>
        </motion.div>

        <div className="mt-10 flex flex-wrap gap-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition ${
                active === c ? "border-foreground bg-foreground text-background" : "border-border hover:bg-muted"
              }`}
            >
              {active === c && <span className="h-2 w-2 rounded-full bg-[var(--neon)]" />}
              {c}
            </button>
          ))}
        </div>

        <motion.div
          className="mt-8 grid gap-5 md:grid-cols-2"
          variants={staggerContainer(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE_MARGIN}
        >
          {list.map((c, idx) => (
            <motion.div
              key={c.slug}
              variants={fadeUp}
              transition={{ duration: 0.3 }}
              className="transform-gpu transition-transform duration-300 hover:-translate-y-1.5"
            >
              <button
                onClick={() => setActiveCase(c.slug)}
                aria-label={`View case study: ${c.title}`}
                className="group relative block w-full overflow-hidden rounded-3xl border border-border bg-card transition hover:border-glow text-left"
              >
                <div className="relative h-52 overflow-hidden">
                  {/*
                    FIX: Case study images — first 2 visible cards get eager loading.
                    Explicit dimensions prevent CLS. will-change-transform pre-promotes
                    the layer so hover scale doesn't stutter.
                  */}
                  <img
                    src={CASE_IMAGES[c.slug]}
                    alt={c.title}
                    width={600}
                    height={208}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 will-change-transform group-hover:scale-105"
                    loading={idx < 2 ? "eager" : "lazy"}
                    fetchPriority={idx < 2 ? "high" : "auto"}
                    decoding={idx < 2 ? "sync" : "async"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
                  <div className="absolute right-3 top-3 rounded-full bg-white/95 px-3 py-1 font-mono text-[10px] uppercase text-black">{c.result}</div>
                  <div className="absolute right-3 bottom-3 grid h-10 w-10 place-items-center rounded-full bg-foreground text-background opacity-0 transition-opacity group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                    <span className="font-mono uppercase">{c.client}</span>
                    <span>·</span>
                    <span>{c.industry}</span>
                    <span>·</span>
                    <span>{c.duration}</span>
                  </div>
                  <h3 className="mt-3 font-display text-xl font-semibold leading-tight">{c.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {c.tags.map((t) => <span key={t} className="rounded-md bg-muted px-2 py-1 text-xs">{t}</span>)}
                  </div>
                </div>
              </button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 flex justify-center"
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          transition={{ duration: 0.5 }}
        >
          <Link to="/case-studies" className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background hover:opacity-90">
            View all case studies
            <span className="grid h-7 w-7 place-items-center rounded-full bg-background text-foreground"><ArrowRight className="h-3.5 w-3.5" /></span>
          </Link>
        </motion.div>
      </div>

      <AnimatePresence mode="wait">
        {modalCase !== null && (
          <CaseStudyModal key={modalCase.slug} cs={modalCase} onClose={() => setActiveCase(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

/* ============================== WHY US ============================== */
function WhyUs() {
  const cards = [
    {
      t: "Strategy + Execution",
      d: "We don't just design or code. We help shape the product, plan the roadmap, and build solutions that align with your business goals.",
      icon: Users,
      img: "/media/why-team.jpg",
    },
    {
      t: "Built for Growth",
      d: "From websites to SaaS platforms and AI systems, everything is designed to scale as your users, traffic, and business grow.",
      icon: TrendingUp,
      img: "/media/why-outcomes.jpg",
    },
    {
      t: "Transparent Process",
      d: "Weekly updates, shared workspaces, and live progress tracking mean you're always informed from kickoff to launch.",
      icon: ShieldCheck,
      img: "/media/why-transparency.jpg",
    },
    {
      t: "Performance First",
      d: "Fast loading, SEO-ready, secure, and optimized products built with clean architecture that lasts beyond launch.",
      icon: Award,
      img: "/media/why-qualit.jpg",
    },
  ];

  return (
    <section className="border-t border-border py-20 md:py-32 bg-[var(--section-a)]">
      <div className="mx-auto max-w-7xl px-4 md:px-6">

        {/* Mobile layout */}
        <div className="lg:hidden">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-gradient">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--neon)]" /> Why Globe Stack
            </div>
            <h2 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
              Why Choose Us
            </h2>
            <p className="mt-6 max-w-md text-muted-foreground">
              This isn't just another agency. It's a transformation for your product, your growth, and your team. Built by senior operators who have actually shipped.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {cards.map((c, i) => {
              const I = c.icon;
              return (
                <motion.div
                  key={c.t}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  whileHover={{ y: -6 }}
                  className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-card"
                >
                  <img src={c.img} alt={c.t} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/20" />
                  <div className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-xl border border-white/20 bg-white/10 text-white backdrop-blur">
                    <I className="h-5 w-5" />
                  </div>
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                    <h3 className="font-display text-xl font-semibold">{c.t}</h3>
                    <p className="mt-2 text-sm text-white/80">{c.d}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <div className="mt-8">
            <Link to="/about" className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background hover:opacity-90">
              More about us
              <span className="grid h-7 w-7 place-items-center rounded-full bg-background text-foreground"><ArrowUpRight className="h-3.5 w-3.5" /></span>
            </Link>
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden lg:grid gap-16 lg:grid-cols-2">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-gradient">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--neon)]" /> Why Globe Stack
            </div>
            <h2 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
              Why Choose Us
            </h2>
            <p className="mt-6 max-w-md text-muted-foreground">
              This isn't just another agency. It's a transformation for your product, your growth, and your team. Built by senior operators who have actually shipped.
            </p>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background hover:opacity-90">
              More about us
              <span className="grid h-7 w-7 place-items-center rounded-full bg-background text-foreground"><ArrowUpRight className="h-3.5 w-3.5" /></span>
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {cards.map((c, i) => {
              const I = c.icon;
              return (
                <motion.div
                  key={c.t}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  whileHover={{ y: -6 }}
                  className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-card"
                >
                  <img src={c.img} alt={c.t} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/20" />
                  <div className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-xl border border-white/20 bg-white/10 text-white backdrop-blur">
                    <I className="h-5 w-5" />
                  </div>
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                    <h3 className="font-display text-xl font-semibold">{c.t}</h3>
                    <p className="mt-2 text-sm text-white/80">{c.d}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}


/* ============================== PROCESS ============================== */
function Process(): JSX.Element {
  return (
    <section className="border-t border-border bg-foreground py-20 text-background md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          className="mb-12 text-center"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
        >
          <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--neon)]" /> {PROCESS.length} step process
          </motion.div>
          <motion.h2 variants={fadeUp} transition={{ duration: 0.5 }} className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight md:text-5xl">
            Effortless Process,<br />Continuous Delivery.
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5"
          variants={staggerContainer(0.05)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE_MARGIN}
        >
          {PROCESS.map((p) => (
            <motion.div
              key={p.step}
              variants={fadeUp}
              transition={{ duration: 0.35 }}
              className="rounded-2xl border border-background/10 bg-background/5 p-6"
            >
              <div className="font-display text-2xl font-bold">{p.step}.</div>
              <h3 className="mt-3 font-display text-lg font-semibold leading-tight">{p.title}</h3>
              <p className="mt-3 text-sm text-background/70">{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          transition={{ duration: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-background/10 bg-background/5 p-4"
        >
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {["MC", "DP", "PS"].map((a) => (
                <div key={a} className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-[var(--neon)] to-[var(--neon-violet)] font-mono text-[10px] font-bold text-foreground ring-2 ring-foreground">{a}</div>
              ))}
            </div>
            <div className="text-sm text-background/80">Trusted by founders who choose quality.</div>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-background px-5 py-3 text-sm font-medium text-foreground">
            Start now
            <span className="grid h-6 w-6 place-items-center rounded-full bg-foreground text-background"><ArrowRight className="h-3.5 w-3.5" /></span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================== STACK ============================== */
function Stack(): JSX.Element {
  return (
    <section className="relative border-t border-border py-20 md:py-32 bg-[var(--section-b)]">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          className="text-center"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
        >
          <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 rounded-full border border-glow px-3 py-1 font-mono text-xs uppercase tracking-wider">
            Stack of Technology
          </motion.div>
          <motion.h2 variants={fadeUp} transition={{ duration: 0.5 }} className="mt-4 font-display text-3xl font-bold tracking-tight md:text-5xl">Tools we reach for.</motion.h2>
          <motion.p variants={fadeUp} transition={{ duration: 0.5 }} className="mx-auto mt-3 max-w-xl text-muted-foreground">Stack-agnostic, but here's what powers most of our work — modern, fast, and battle-tested.</motion.p>
        </motion.div>

        <div className="relative mt-16 grid gap-5 md:grid-cols-2">
          <div className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block">
            <div className="grid h-32 w-32 place-items-center rounded-full border border-glow bg-card/80 text-center">
              <div className="font-display text-sm font-bold leading-tight">Stack of<br />Technology</div>
            </div>
          </div>
          {STACK_GROUPS.map((g, i) => (
            <motion.div
              key={g.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT_ONCE}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className="rounded-3xl border border-border bg-card p-6 md:p-8"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-glow px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-gradient">{g.name}</div>
              <div className="mt-5 flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span key={it} className="rounded-xl border border-border bg-background/60 px-3 py-2 font-mono text-xs">{it}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================== TESTIMONIALS ============================== */
function Testimonials(): JSX.Element {
  const data = TESTIMONIALS_DATA;
  const perView = 3;
  const max = useMemo(() => Math.max(0, data.length - perView), [data.length]);
  const { index, setIndex, setPaused } = useAutoSlider(max + 1, 6000);
  const next = useCallback(() => setIndex((i) => (i >= max ? 0 : i + 1)), [max, setIndex]);
  const prev = useCallback(() => setIndex((i) => (i <= 0 ? max : i - 1)), [max, setIndex]);
  const paginationDots = useMemo(() => Array.from({ length: max + 1 }, (_, i) => i), [max]);

  const slidePercent = useMemo(() => `${-index * (100 / perView)}%`, [index, perView]);

  return (
    <section className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          className="mb-10 text-center"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
        >
          <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Testimonials</motion.div>
          <motion.h2 variants={fadeUp} transition={{ duration: 0.5 }} className="mt-3 font-display text-3xl font-bold tracking-tight md:text-5xl">What clients say.</motion.h2>
          <motion.p variants={fadeUp} transition={{ duration: 0.5 }} className="mt-3 mx-auto max-w-md text-muted-foreground">Real results from founders and teams who trusted us with their digital growth.</motion.p>
        </motion.div>

        <div className="hidden md:block" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-5 transform-gpu"
              animate={{ x: slidePercent }}
              transition={{ type: "tween", duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
            >
              {data.map((t) => (
                <div key={t.name} className="w-[calc((100%-2.5rem)/3)] shrink-0">
                  <TestimonialCard t={t} />
                </div>
              ))}
            </motion.div>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <div className="flex gap-1.5">
              {paginationDots.map((i) => (
                <button key={i} onClick={() => setIndex(i)} aria-label={`Go to slide ${i + 1}`} className={`h-1.5 rounded-full transition-all ${i === index ? "w-8 bg-foreground" : "w-1.5 bg-border"}`} />
              ))}
            </div>
            <SliderArrows onPrev={prev} onNext={next} />
          </div>
        </div>

        <div className="mt-10 -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto scrollbar-hide px-4 md:hidden" style={{ WebkitOverflowScrolling: "touch" }}>
          {data.map((t) => (
            <div key={t.name} className="w-[88%] shrink-0 snap-start"><TestimonialCard t={t} /></div>
          ))}
        </div>
      </div>
    </section>
  );
}

const TestimonialCard = memo(function TestimonialCard({ t }: { t: typeof TESTIMONIALS_DATA[number] }): JSX.Element {
  return (
    <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-7">
      <p className="mt-5 flex-1 text-pretty font-display text-lg font-medium leading-snug md:text-xl">"{t.quote}"</p>
      <div className="mt-6 flex items-center gap-3">
        <div className="grid h-11 w-11 place-items-center rounded-full bg-[var(--neon)] font-mono text-sm font-bold text-background">{t.avatar}</div>
        <div>
          <div className="text-sm font-medium">{t.name}</div>
          <div className="text-xs text-muted-foreground">{t.role}</div>
          <div className="flex gap-0.5 text-[var(--neon)]">{[0, 1, 2, 3, 4].map((i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
        </div>
      </div>
    </div>
  );
});

/* ============================== BLOG ============================== */
// function Blog(): JSX.Element {
//   const perView = 3;
//   const max = useMemo(() => Math.max(0, POSTS.length - perView), []);
//   const { index, setIndex, setPaused } = useAutoSlider(max + 1, 6000);
//   const next = useCallback(() => setIndex((i) => (i >= max ? 0 : i + 1)), [max, setIndex]);
//   const prev = useCallback(() => setIndex((i) => (i <= 0 ? max : i - 1)), [max, setIndex]);
//   const paginationDots = useMemo(() => Array.from({ length: max + 1 }, (_, i) => i), [max]);
//   const slidePercent = useMemo(() => `${-index * (100 / perView)}%`, [index, perView]);

//   return (
//     <section className="border-t border-border py-20 md:py-28 bg-[var(--section-c)]">
//       <div className="mx-auto max-w-7xl px-4 md:px-6">
//         <motion.div
//           className="mb-10 text-center"
//           variants={staggerContainer(0.1)}
//           initial="hidden"
//           whileInView="show"
//           viewport={VIEWPORT_ONCE}
//         >
//           <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Blog</motion.div>
//           <motion.h2 variants={fadeUp} transition={{ duration: 0.5 }} className="mt-3 font-display text-3xl font-bold tracking-tight md:text-5xl">Article categories.</motion.h2>
//           <motion.p variants={fadeUp} transition={{ duration: 0.5 }} className="mt-3 max-w-md mx-auto text-muted-foreground">Field notes, deep-dives, and frameworks from our work.</motion.p>
//           <motion.div variants={fadeIn} transition={{ duration: 0.5 }} className="mt-4 flex justify-center">
//             <Link to="/blog" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium hover:bg-muted">
//               Browse all articles <ArrowUpRight className="h-4 w-4" />
//             </Link>
//           </motion.div>
//         </motion.div>

//         <div className="hidden md:block" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
//           <div className="overflow-hidden">
//             <motion.div
//               className="flex gap-5 transform-gpu"
//               animate={{ x: slidePercent }}
//               transition={{ type: "tween", duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
//             >
//               {POSTS.map((p) => (
//                 <BlogCard key={p.slug} p={p} className="w-[calc((100%-2.5rem)/3)] shrink-0" />
//               ))}
//             </motion.div>
//           </div>
//           <div className="mt-8 flex items-center justify-between">
//             <div className="flex gap-1.5">
//               {paginationDots.map((i) => (
//                 <button key={i} onClick={() => setIndex(i)} aria-label={`Go to slide ${i + 1}`} className={`h-1.5 rounded-full transition-all ${i === index ? "w-8 bg-foreground" : "w-1.5 bg-border"}`} />
//               ))}
//             </div>
//             <SliderArrows onPrev={prev} onNext={next} />
//           </div>
//         </div>

//         <div className="mt-10 -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto scrollbar-hide px-4 md:hidden" style={{ WebkitOverflowScrolling: "touch" }}>
//           {POSTS.map((p) => (
//             <BlogCard key={p.slug} p={p} className="w-[80%] shrink-0 snap-start" />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


/* ============================== BLOG ============================== */

// Unified shape for both static and Sanity posts
type BlogCardPost = {
  slug: string;
  title: string;
  excerpt: string;
  tag: string;
  date: string;
  read: string;
  coverImage?: string; // Sanity posts have this; static posts use POST_IMAGES
};

function Blog(): JSX.Element {
  // Start with static posts for instant render, then merge with Sanity data
  const [posts, setPosts] = useState<BlogCardPost[]>(
    POSTS.map((p) => ({ ...p, read: p.read }))
  );

  const perView = 3;
  const max = useMemo(() => Math.max(0, posts.length - perView), [posts.length]);
  const { index, setIndex, setPaused } = useAutoSlider(max + 1, 6000);
  const next = useCallback(() => setIndex((i) => (i >= max ? 0 : i + 1)), [max, setIndex]);
  const prev = useCallback(() => setIndex((i) => (i <= 0 ? max : i - 1)), [max, setIndex]);
  const paginationDots = useMemo(() => Array.from({ length: max + 1 }, (_, i) => i), [max]);
  const slidePercent = useMemo(() => `${-index * (100 / perView)}%`, [index, perView]);

  useEffect(() => {
    fetchAllPosts().then((all) => {
      const sanitySlugs = new Set(all.map((p) => p.slug));
      // Static posts not in Sanity (keep them as fallback)
      const staticOnly = POSTS
        .filter((p) => !sanitySlugs.has(p.slug))
        .map((p) => ({ slug: p.slug, title: p.title, excerpt: p.excerpt, tag: p.tag, date: p.date, read: p.read }));
      // Sanity posts mapped to BlogCardPost shape
      const sanityMapped: BlogCardPost[] = all.map((p) => ({
        slug: p.slug,
        title: p.title,
        excerpt: p.excerpt,
        tag: p.tag,
        date: p.date,
        read: p.readTime,
        coverImage: p.coverImage,
      }));
      setPosts([...sanityMapped, ...staticOnly]);
    });
  }, []);

  return (
    <section className="border-t border-border py-20 md:py-28 bg-[var(--section-c)]">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          className="mb-10 text-center"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
        >
          <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Blog</motion.div>
          <motion.h2 variants={fadeUp} transition={{ duration: 0.5 }} className="mt-3 font-display text-3xl font-bold tracking-tight md:text-5xl">Article categories.</motion.h2>
          <motion.p variants={fadeUp} transition={{ duration: 0.5 }} className="mt-3 max-w-md mx-auto text-muted-foreground">Field notes, deep-dives, and frameworks from our work.</motion.p>
          <motion.div variants={fadeIn} transition={{ duration: 0.5 }} className="mt-4 flex justify-center">
            <Link to="/blog" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium hover:bg-muted">
              Browse all articles <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </motion.div>

        <div className="hidden md:block" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-5 transform-gpu"
              animate={{ x: slidePercent }}
              transition={{ type: "tween", duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
            >
              {posts.map((p) => (
                <BlogCard key={p.slug} p={p} className="w-[calc((100%-2.5rem)/3)] shrink-0" />
              ))}
            </motion.div>
          </div>
          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-1.5">
              {paginationDots.map((i) => (
                <button key={i} onClick={() => setIndex(i)} aria-label={`Go to slide ${i + 1}`} className={`h-1.5 rounded-full transition-all ${i === index ? "w-8 bg-foreground" : "w-1.5 bg-border"}`} />
              ))}
            </div>
            <SliderArrows onPrev={prev} onNext={next} />
          </div>
        </div>

        <div className="mt-10 -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto scrollbar-hide px-4 md:hidden" style={{ WebkitOverflowScrolling: "touch" }}>
          {posts.map((p) => (
            <BlogCard key={p.slug} p={p} className="w-[80%] shrink-0 snap-start" />
          ))}
        </div>
      </div>
    </section>
  );
}

// const BlogCard = memo(function BlogCard({ p, className = "" }: { p: typeof POSTS[number]; className?: string }): JSX.Element {
//   return (
//     <Link to="/blog/$slug" params={{ slug: p.slug }} preload="intent" className={`group relative aspect-[3/4] overflow-hidden rounded-3xl border border-border bg-card transform-gpu ${className}`}>
//       <img
//         src={POST_IMAGES[p.slug]}
//         alt={p.title}
//         width={400}
//         height={533}
//         className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 will-change-transform group-hover:scale-105"
//         loading="lazy"
//         decoding="async"
//       />
//       <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/15 pointer-events-none" />
//       <div className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-black/50 text-white opacity-0 transition-opacity group-hover:opacity-100">
//         <ArrowUpRight className="h-4 w-4" />
//       </div>
//       <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
//         <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[10px] font-mono uppercase">{p.tag}</div>
//         <h3 className="mt-4 font-display text-xl font-bold leading-tight">{p.title}</h3>
//         <p className="mt-2 line-clamp-2 text-sm text-white/80">{p.excerpt}</p>
//         <div className="mt-4 flex items-center justify-between text-xs text-white/70">
//           <span>{p.date}</span>
//           <span>{p.read} read</span>
//         </div>
//       </div>
//     </Link>
//   );
// });


const BlogCard = memo(function BlogCard({ p, className = "" }: { p: BlogCardPost; className?: string }): JSX.Element {
  // Sanity posts carry coverImage directly; static posts fall back to the POST_IMAGES map
  const imgSrc = p.coverImage || POST_IMAGES[p.slug] || "";

  return (
    <Link to="/blog/$slug" params={{ slug: p.slug }} preload="intent" className={`group relative aspect-[3/4] overflow-hidden rounded-3xl border border-border bg-card transform-gpu ${className}`}>
      <img
        src={imgSrc}
        alt={p.title}
        width={400}
        height={533}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 will-change-transform group-hover:scale-105"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/15 pointer-events-none" />
      <div className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-black/50 text-white opacity-0 transition-opacity group-hover:opacity-100">
        <ArrowUpRight className="h-4 w-4" />
      </div>
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[10px] font-mono uppercase">{p.tag}</div>
        <h3 className="mt-4 font-display text-xl font-bold leading-tight">{p.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-white/80">{p.excerpt}</p>
        <div className="mt-4 flex items-center justify-between text-xs text-white/70">
          <span>{p.date}</span>
          <span>{p.read} read</span>
        </div>
      </div>
    </Link>
  );
});

/* ============================== FAQ ============================== */
function FAQs(): JSX.Element {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="border-t border-border py-20 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <motion.div
          variants={staggerContainer(0.07)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
        >
          <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-gradient">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--neon)]" /> FAQ
          </motion.div>
          <motion.h2 variants={fadeUp} transition={{ duration: 0.5 }} className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">Questions & Answers</motion.h2>
          <motion.p variants={fadeUp} transition={{ duration: 0.5 }} className="mt-6 max-w-md text-muted-foreground">
            Everything you need to know about working with Globe Stack — how we engage, what we deliver, and how we're different.
          </motion.p>
          <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="mt-8 space-y-3">
            {FAQ_DATA.map((f, i) => (
              <div key={f.q} className="overflow-hidden rounded-2xl border border-border bg-card transition hover:border-glow">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-medium">{f.q}</span>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-muted">
                    {open === i ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <AnimatePresence mode="sync" initial={false}>
                  {open === i && (
                    <motion.div
                      key={`faq-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <div className="px-6 pb-6 text-sm text-muted-foreground">{f.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="relative lg:sticky lg:top-24 lg:self-start"
        >
          <div className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-card transform-gpu">
            <img
              src="/media/download.png"
              alt="Globe Stack team at work"
              width={500}
              height={625}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 will-change-transform group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
            <div className="absolute inset-x-6 bottom-6">
              <div className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/10 p-4 text-white" style={{ backdropFilter: "blur(8px)" }}>
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-[var(--neon)] to-[var(--neon-violet)] text-background">
                  <Rocket className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-display text-lg font-semibold">30+ Projects shipped</div>
                  <div className="text-xs text-white/75">Across 6 disciplines & 4 continents</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}