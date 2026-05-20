import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, ArrowUpRight, ArrowLeft, Sparkles, Code2, Search, Target,
  MessageCircle, ShoppingBag, Star, Plus, Minus, ExternalLink, Eye, X,
  ShieldCheck, Rocket, Users, Zap, Award, TrendingUp, Play, ChevronLeft, ChevronRight,
} from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { CTA } from "@/components/section";
import { SERVICES } from "@/lib/site";
import { PROJECTS, CASE_STUDIES, POSTS, TESTIMONIALS, FAQ, PROCESS, PROJECT_IMAGES, CASE_IMAGES, SERVICE_IMAGES, POST_IMAGES } from "@/lib/content";
import { seo } from "@/lib/seo";
import Lottie from "lottie-react";


export const Route = createFileRoute("/")({
  head: () => seo({
    title: "Globe Stack — Web, AI, SEO, Ads, Social, Shopify",
    description: "Globe Stack is a full-stack tech studio. We build web apps, ship AI, run ads, manage social, optimize SEO, and design Shopify stores that convert.",
    path: "/",
  }),
  component: Home,
});

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2, Search, Sparkles, Target, MessageCircle, ShoppingBag,
};

function Home() {
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






// function Orb() {
//   const [animation, setAnimation] = useState<any>(null);

//   useEffect(() => {
//     fetch("/media/orb.json")
//       .then((res) => res.json())
//       .then(setAnimation);
//   }, []);

//   if (!animation) return null;

//   return (
//     <Lottie
//       animationData={animation}
//       muted
//       loop
//       autoplay
//       preload="metadata"
//       className="h-full w-full object-contain"
//     />
//   );
// }

// /* ============================== HERO ============================== */
// function Hero() {
//   return (
//     <section className="relative overflow-hidden border-b border-border bg-[#0a0710] text-white">
//       <div className="absolute inset-0">
//         <video
//           className="h-full w-full object-cover opacity-50"
//           src="/media/bg.mp4"
//           autoPlay loop muted playsInline preload="metadata"
//         />
//         <div className="absolute inset-0 bg-black/70" />
//         <div className="absolute inset-x-0 top-0 h-1/2 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.35),transparent_60%)]" />
//         <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[radial-gradient(ellipse_at_bottom,rgba(120,40,200,0.4),transparent_60%)]" />
//       </div>

//       <div className="relative mx-auto max-w-7xl px-4 pt-16 pb-10 md:px-6 md:pt-20 md:pb-12">
//         <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
//           <motion.div
//             initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
//             className="inline-flex w-max items-center rounded-full border border-violet-400/40 bg-violet-500/10 px-4 py-2 text-xs font-medium text-violet-200 backdrop-blur"
//           >
//             Next-Level Business
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
//             className="flex flex-col gap-3"
//           >
//             {[
//               { t: "Future-Ready", s: "Strategies", icon: <ArrowUpRight className="h-4 w-4" /> },
//               { t: "24/7 Customer", s: "Support", icon: <ArrowRight className="h-4 w-4" /> },
//             ].map((c) => (
//               <div key={c.t} className="flex items-center gap-6 border-b border-violet-300/20 pb-2 text-sm text-violet-100">
//                 <div className="leading-tight">
//                   <div>{c.t}</div>
//                   <div>{c.s}</div>
//                 </div>
//                 <div className="ml-auto flex h-6 w-12 items-center justify-end text-violet-200">
//                   <div className="mr-2 h-px flex-1 bg-violet-300/40" />
//                   {c.icon}
//                 </div>
//               </div>
//             ))}
//           </motion.div>
//         </div>

//         <div className="relative mt-10 md:mt-14">
//           <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
//             <motion.div
//               initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1, ease: "easeOut" }}
//               className="relative aspect-square w-[260px] sm:w-[340px] md:w-[440px] lg:w-[520px]"
//             >
//               <div className="absolute inset-0 -z-10 rounded-full bg-violet-500/40 blur-3xl animate-pulse-glow" />
//               <Orb />
//             </motion.div>
//           </div>

//           <motion.h1
//             initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }}
//             className="select-none text-center font-display font-extrabold tracking-tight"
//             style={{ fontSize: "clamp(3.5rem, 18vw, 16rem)", lineHeight: 0.9 }}
//           >
//             <span className="bg-gradient-to-b from-white/30 to-white/5 bg-clip-text text-transparent">
//               GLOBE&nbsp;STACK
//             </span>
//           </motion.h1>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }}
//             className="relative z-20 mt-6 max-w-md md:absolute md:left-0 md:bottom-2 md:mt-0"
//           >
//             <h2 className="font-display text-3xl font-bold leading-tight md:text-5xl">
//               Boost Efficiency,<br />
//               Maximize <span className="text-violet-400">Impact.</span>
//             </h2>
//             <p className="text-sm text-violet-100/80 md:text-base">
//               We design, build, and grow digital products — web, AI, SEO, ads, social, and Shopify, all under one senior team.
//             </p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.6 }}
//             className="relative z-20 mt-6 md:absolute md:right-0 md:bottom-2 md:mt-0 md:max-w-xs md:text-right"
//           >
//             <p className="text-sm text-violet-100/80 md:text-base">
//               We design, build, and grow digital products — web, AI, SEO, ads, social, and Shopify, all under one senior team.
//             </p>
//             <div className="mt-5 flex items-center gap-3 md:justify-end">
//               <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_30px_-5px_rgba(168,85,247,0.7)] hover:opacity-95">
//                 Get Started
//               </Link>
//               <button aria-label="Play intro" className="grid h-12 w-12 place-items-center rounded-full border border-violet-400/50 bg-violet-500/20 text-white backdrop-blur hover:bg-violet-500/30">
//                 <Play className="h-4 w-4 fill-current" />
//               </button>
//             </div>
//           </motion.div>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.8 }}
//           className="relative z-20 mt-10 grid gap-3 rounded-2xl border border-violet-300/20 bg-white/5 p-3 backdrop-blur md:mt-16 md:grid-cols-2"
//         >
//           <div className="flex items-center gap-4 rounded-xl px-2">
//             <div className="flex flex-col">
//               <div className="font-display text-2xl font-bold">125<sup className="text-sm">k+</sup></div>
//               <div className="text-xs text-violet-200/70">Happy Client</div>
//             </div>
//             <Link to="/contact" className="grid h-16 w-16 place-items-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-center text-xs font-bold leading-tight text-white shadow-[0_0_24px_-4px_rgba(168,85,247,0.7)]">
//               Join<br />Now
//             </Link>
//             <div className="flex flex-col">
//               <div className="font-display text-2xl font-bold">95<sup className="text-sm">%</sup></div>
//               <div className="text-xs text-violet-200/70">Growth</div>
//             </div>
//             <div className="flex flex-col">
//               <div className="font-display text-2xl font-bold">25</div>
//               <div className="text-xs text-violet-200/70">Years</div>
//             </div>
//           </div>
//           <div className="flex items-center gap-6 overflow-hidden rounded-xl px-3 py-2">
//             <span className="whitespace-nowrap text-xs underline underline-offset-4 text-violet-100/80">Trusted by.</span>
//             <div className="flex flex-1 items-center justify-around gap-6 text-sm font-semibold text-violet-100/80">
//               {["Niscala.io", "SAMTIV", "✺ IEA.", "‖ BOKING"].map((b) => (
//                 <span key={b} className="whitespace-nowrap">{b}</span>
//               ))}
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

function HeroVisual() {
  return (
    <div className="relative flex justify-center">

      {/* glow */}
      <div className="absolute inset-0 mx-auto h-[500px] w-[500px] rounded-full bg-fuchsia-500/20 blur-3xl" />

      {/* laptop */}
      <img
        src="/media/reall.png"
        className="relative z-10 w-[340px] md:w-[520px]"
        alt="Laptop UI"
      />
    </div>
  );
}

/* ============================== HERO ============================== */
function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-[#0a0710] text-white">
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover opacity-50"
          src="/media/bg.mp4"
          autoPlay loop muted playsInline preload="metadata"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-x-0 top-0 h-1/2 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.35),transparent_60%)]" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[radial-gradient(ellipse_at_bottom,rgba(120,40,200,0.4),transparent_60%)]" />
      </div>

{/* 
      <div className="absolute inset-0">
  <img
    className="h-full w-full object-cover opacity-60"
    src="/media/yoy.jfif"
    alt="Hero background"
    loading="lazy"
    decoding="async"
  />

  <div className="absolute inset-0 bg-black/60" />

  <div className="absolute inset-x-0 top-0 h-1/2 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.35),transparent_60%)]" />
  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[radial-gradient(ellipse_at_bottom,rgba(120,40,200,0.4),transparent_60%)]" />
</div> */}

      <div className="relative mx-auto max-w-7xl px-4 pt-16 pb-10 md:px-6 md:pt-20 md:pb-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex w-max items-center rounded-full border border-violet-400/40 bg-violet-500/10 px-4 py-2 text-xs font-medium text-violet-200 backdrop-blur"
          >
            Next-Level Business
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-3"
          >
            {[
              { t: "Future-Ready", s: "Strategies", icon: <ArrowUpRight className="h-4 w-4" /> },
              { t: "24/7 Customer", s: "Support", icon: <ArrowRight className="h-4 w-4" /> },
            ].map((c) => (
              <div key={c.t} className="flex items-center gap-6 border-b border-violet-300/20 pb-2 text-sm text-violet-100">
                <div className="leading-tight">
                  <div>{c.t}</div>
                  <div>{c.s}</div>
                </div>
                <div className="ml-auto flex h-6 w-12 items-center justify-end text-violet-200">
                  <div className="mr-2 h-px flex-1 bg-violet-300/40" />
                  {c.icon}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="relative mt-10 md:mt-14">
          <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1, ease: "easeOut" }}
              className="relative aspect-square w-[260px] sm:w-[340px] md:w-[440px] lg:w-[520px]"
            >
              <div className="absolute inset-0 -z-10 rounded-full bg-violet-500/40 blur-3xl animate-pulse-glow" />
              <HeroVisual />
            </motion.div>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }}
            className="select-none text-center font-display font-extrabold tracking-tight"
            style={{ fontSize: "clamp(3.5rem, 16vw, 16rem)", lineHeight: 0.9 }}
          >
            <span className="bg-gradient-to-b from-white/30 to-white/5 bg-clip-text text-transparent">
              GLOBE&nbsp;STACK
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }}
            className="relative z-20 mt-6 max-w-md md:absolute md:left-0 md:bottom-2 md:mt-0"
          >
            <h2 className="font-display text-3xl font-bold leading-tight md:text-5xl">
              Boost Efficiency,<br />
              Maximize <span className="text-violet-400">Impact.</span>
            </h2>
            <p className="text-sm text-violet-100/80 md:text-base">
              We design, build, and grow digital products — web, AI, SEO, ads, social, and Shopify, all under one senior team.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.6 }}
            className="relative z-20 mt-6 md:absolute md:right-0 md:bottom-2 md:mt-0 md:max-w-xs md:text-right"
          >
            <p className="text-sm text-violet-100/80 md:text-base">
              We design, build, and grow digital products — web, AI, SEO, ads, social, and Shopify, all under one senior team.
            </p>
            <div className="mt-5 flex items-center gap-3 md:justify-end">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_30px_-5px_rgba(168,85,247,0.7)] hover:opacity-95">
                Get Started
              </Link>
              <button aria-label="Play intro" className="grid h-12 w-12 place-items-center rounded-full border border-violet-400/50 bg-violet-500/20 text-white backdrop-blur hover:bg-violet-500/30">
                <Play className="h-4 w-4 fill-current" />
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.8 }}
          className="relative z-20 mt-10 grid gap-3 rounded-2xl border border-violet-300/20 bg-white/5 p-3 backdrop-blur md:mt-16 md:grid-cols-2"
        >
          <div className="flex items-center gap-9 rounded-xl px-2">
            <div className="flex flex-col">
              <div className="font-display text-2xl font-bold">125<sup className="text-sm">k+</sup></div>
              <div className="text-xs text-violet-200/70">Happy Client</div>
            </div>
            {/* <Link to="/contact" className="grid h-16 w-16 place-items-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-center text-xs font-bold leading-tight text-white shadow-[0_0_24px_-4px_rgba(168,85,247,0.7)]">
              Join<br />Now
            </Link> */}
            <div className="flex flex-col">
              <div className="font-display text-2xl font-bold">95<sup className="text-sm">%</sup></div>
              <div className="text-xs text-violet-200/70">Growth</div>
            </div>
            <div className="flex flex-col">
              <div className="font-display text-2xl font-bold">25</div>
              <div className="text-xs text-violet-200/70">Years</div>
            </div>
          </div>
          <div className="flex items-center gap-6 overflow-hidden rounded-xl px-3 py-2">
            <span className="whitespace-nowrap text-xs underline underline-offset-4 text-violet-100/80">Trusted by.</span>
            <div className="flex flex-1 items-center justify-around gap-6 text-sm font-semibold text-violet-100/80">
              {["Niscala.io", "SAMTIV", "✺ IEA.", "‖ BOKING"].map((b) => (
                <span key={b} className="whitespace-nowrap">{b}</span>
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
    { tag: "Vision-driven", t: "Built for the long game", d: "From brand systems to product foundations, we design for compounding wins, not vanity launches.", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80" },
    { tag: "Next-gen styled", t: "Modern stacks, modern craft", d: "Every project ships on the tech and design language buyers and search engines reward today.", img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80" },
  ];
  return (
    <section className="relative border-t border-border py-20 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">About Us</div>
          <h2 className="mt-3 font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
            Empowering Visionary Founders From Day One
          </h2>
          <p className="mt-6 max-w-md text-muted-foreground">
            We create intuitive and visually engaging digital experiences that enhance user interaction and move the metrics that matter.
          </p>
          <Link to="/about" className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background hover:opacity-90">
            Start Today
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
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused || count <= 1) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % count), intervalMs);
    return () => clearInterval(id);
  }, [paused, count, intervalMs]);
  return { index, setIndex, setPaused };
}

function SliderArrows({ onPrev, onNext }: { onPrev: () => void; onNext: () => void }) {
  return (
    <div className="flex gap-2">
      <button onClick={onPrev} aria-label="Previous" className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card transition hover:border-glow hover:bg-muted">
        <ArrowLeft className="h-4 w-4" />
      </button>
      <button onClick={onNext} aria-label="Next" className="grid h-11 w-11 place-items-center rounded-full bg-foreground text-background transition hover:opacity-90">
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
        <div className="mb-10 text-center">
          <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Services</div>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-5xl">What we do best.</h2>
        </div>

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
                <button key={i} onClick={() => setIndex(i)} aria-label={`Slide ${i + 1}`} className={`h-1.5 rounded-full transition-all ${i === index ? "w-8 bg-foreground" : "w-1.5 bg-border"}`} />
              ))}
            </div>
            <div className="flex items-center gap-4">
              <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium hover:bg-muted">
                Browse all services <ArrowUpRight className="h-4 w-4" />
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

function ServiceCard({ s, className = "" }: { s: typeof SERVICES[number]; className?: string }) {
  const Icon = ICONS[s.icon] ?? Sparkles;
  return (
    <Link to="/services/$slug" params={{ slug: s.slug }} className={`group relative aspect-[3/4] overflow-hidden rounded-3xl border border-border bg-card ${className}`}>
      <img src={SERVICE_IMAGES[s.slug]} alt={s.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/40" />
      <div className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full glass border border-white/20 opacity-0 transition group-hover:opacity-100">
        <ArrowUpRight className="h-4 w-4 text-white" />
      </div>
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <div className="grid h-11 w-11 place-items-center rounded-xl glass border border-white/20">
          <Icon className="h-5 w-5 text-white" />
        </div>
        <h3 className="mt-4 font-display text-2xl font-bold leading-tight text-white drop-shadow-lg">{s.title}</h3>
        {/* <p className="mt-2 line-clamp-2 text-sm text-white/85 drop-shadow">{s.short}</p> */}
      </div>
    </Link>
  );
}

/* ============================== PORTFOLIO ============================== */
function ScreenshotModal({ project, onClose }: { project: typeof PROJECTS[number]; onClose: () => void }) {
  const images = project.images ?? [PROJECT_IMAGES[project.slug]];
  const [imgIdx, setImgIdx] = useState(0);
  const prev = () => setImgIdx((i) => (i <= 0 ? images.length - 1 : i - 1));
  const next = () => setImgIdx((i) => (i >= images.length - 1 ? 0 : i + 1));

  return (
    <div
      className="fixed inset-0 z-[100] grid place-items-center bg-background/90 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl rounded-2xl border border-border bg-card shadow-2xl"
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
            <button onClick={onClose} className="grid h-9 w-9 place-items-center rounded-full hover:bg-muted">
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="relative aspect-video overflow-hidden">
          <img
            src={images[imgIdx]}
            alt={`${project.title} screenshot ${imgIdx + 1}`}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 text-white">
            <div className="font-mono text-[10px] uppercase opacity-80">Preview</div>
            <div className="font-display text-xl font-bold">{project.title}</div>
          </div>

          {images.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-black/50 text-white backdrop-blur hover:bg-black/70 transition"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-black/50 text-white backdrop-blur hover:bg-black/70 transition"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}
        </div>

        {/* Thumbnail strip */}
        {images.length > 1 && (
          <div className="flex gap-2 overflow-x-auto p-3 scrollbar-hide">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setImgIdx(i)}
                className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-lg border-2 transition ${
                  i === imgIdx ? "border-violet-500" : "border-border opacity-60 hover:opacity-100"
                }`}
              >
                <img src={img} alt={`Thumb ${i + 1}`} className="h-full w-full object-cover" />
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

function Portfolio() {
  const [shotFor, setShotFor] = useState<string | null>(null);
  const project = PROJECTS.find((p) => p.slug === shotFor);

  return (
    <section className="border-t border-border bg-card/30 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* CENTERED HEADER */}
        <div className="mb-10 text-center">
          <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Portfolio</div>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-5xl">Recent shipped work.</h2>
          <div className="mt-4 flex justify-center">
            <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium hover:bg-muted">
              View all <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.slice(0, 6).map((p, idx) => {
            const images = p.images ?? [PROJECT_IMAGES[p.slug]];
            return (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.07 }}
                className="group overflow-hidden rounded-2xl border border-border bg-card transition hover:border-glow"
              >
                <div className="relative h-56 overflow-hidden">
                  <img src={images[0]} alt={p.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute bottom-3 left-3 rounded-full border border-white/30 bg-black/40 px-2.5 py-1 font-mono text-[10px] uppercase text-white backdrop-blur">{p.tag}</div>
                  {/* Image count badge */}
                  {images.length > 1 && (
                    <div className="absolute top-3 right-3 rounded-full bg-black/60 px-2 py-1 font-mono text-[10px] text-white backdrop-blur">
                      {images.length} shots
                    </div>
                  )}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition group-hover:opacity-100">
                    <div className="flex gap-2">
                      <button onClick={() => setShotFor(p.slug)} className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-4 py-2 text-xs font-medium text-black backdrop-blur hover:bg-white">
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

                  {/* Tech stack */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.tech.slice(0, 4).map((t) => (
                      <span key={t} className="rounded-md bg-muted px-2 py-0.5 font-mono text-[10px] text-muted-foreground">{t}</span>
                    ))}
                    {p.tech.length > 4 && (
                      <span className="rounded-md bg-muted px-2 py-0.5 font-mono text-[10px] text-muted-foreground">+{p.tech.length - 4}</span>
                    )}
                  </div>

                  <div className="mt-4 flex items-center justify-between gap-2">
                    <button onClick={() => setShotFor(p.slug)} className="inline-flex items-center gap-1.5 text-xs font-medium hover:text-gradient">
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
        </div>
      </div>

      {project && <ScreenshotModal project={project} onClose={() => setShotFor(null)} />}
    </section>
  );
}

/* ============================== CASE STUDIES ============================== */
function CaseStudies() {
  const cats = ["All", ...Array.from(new Set(CASE_STUDIES.flatMap((c) => c.tags)))];
  const [active, setActive] = useState("All");
  const list = active === "All" ? CASE_STUDIES : CASE_STUDIES.filter((c) => c.tags.includes(active));

  return (
    <section className="border-t border-border py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* CENTERED HEADER */}
        
          <h2 className="font-display text-6xl font-bold tracking-tight md:text-8xl lg:text-[5rem] leading-[0.9]">
            Case Studies
          </h2>
        </div>
        <div className="mt-10 grid items-end gap-8 md:grid-cols-2">
          <div className="flex items-center gap-4">
            <div className="grid h-14 w-18 place-items-center rounded-full bg-foreground text-background font-display text-sm font-bold">300+</div>
            <div className="text-sm text-muted-foreground">Projects completed across web, AI, commerce & growth.</div>
          </div>
          <p className="text-pretty text-muted-foreground md:text-lg">
            Explore a selection of crafted work combining unique design and rich technology. We always build from scratch creating memorable brands, engaging websites, and digital products.
          </p>
        </div>

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

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {list.map((c, i) => (
            <motion.div
              key={c.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: (i % 4) * 0.06 }}
              whileHover={{ y: -6 }}
            >
              <Link to="/case-studies/$slug" params={{ slug: c.slug }} className="group relative block overflow-hidden rounded-3xl border border-border bg-card transition hover:border-glow">
                <div className="relative h-52 overflow-hidden">
                  <img src={CASE_IMAGES[c.slug]} alt={c.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute right-3 top-3 rounded-full bg-white/95 px-3 py-1 font-mono text-[10px] uppercase text-black">{c.result}</div>
                  <div className="absolute right-3 bottom-3 grid h-10 w-10 place-items-center rounded-full bg-foreground text-background opacity-0 transition group-hover:opacity-100">
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
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link to="/case-studies" className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background hover:opacity-90">
            View all case studies
            <span className="grid h-7 w-7 place-items-center rounded-full bg-background text-foreground"><ArrowRight className="h-3.5 w-3.5" /></span>
          </Link>
        </div>
    </section>
  );
}

/* ============================== WHY US ============================== */
function WhyUs() {
  const cards = [
    { t: "Senior-only team", d: "Every contributor has 7+ years. No bait-and-switch, no juniors learning on your dime.", icon: Users, img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80" },
    { t: "Outcomes, not hours", d: "We're paid to move your metrics — revenue, ranks, retention — not to fill a timesheet.", icon: TrendingUp, img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80" },
    { t: "Radical transparency", d: "Live dashboards, weekly demos, shared Slack. You always know exactly where things stand.", icon: ShieldCheck, img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80" },
    { t: "Built to last", d: "Code we ship is documented, tested, and maintainable — long after our engagement ends.", icon: Award, img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80" },
  ];
  return (
    <section className="border-t border-border bg-card/30 py-20 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-gradient">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--neon)]" /> Why Globe Stack
          </div>
          <h2 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
            Why Choose Us
          </h2>
          <p className="mt-6 max-w-md text-muted-foreground">
            This isn't just another agency. It's a transformation — for your product, your growth, and your team. Built by senior operators who have actually shipped.
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
    </section>
  );
}

/* ============================== PROCESS ============================== */
function Process() {
  return (
    <section className="border-t border-border bg-foreground py-20 text-background md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* CENTERED HEADER */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider ">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--neon)]" /> {PROCESS.length} step process
          </div>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight md:text-5xl">
            Effortless Process,<br />Continuous Delivery.
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {PROCESS.map((p) => (
            <div key={p.step} className="rounded-2xl border border-background/10 bg-background/5 p-6">
              <div className="font-display text-2xl font-bold">{p.step}.</div>
              <h3 className="mt-3 font-display text-lg font-semibold leading-tight">{p.title}</h3>
              <p className="mt-3 text-sm text-background/70">{p.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-background/10 bg-background/5 p-4">
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
        </div>
      </div>
    </section>
  );
}

/* ============================== STACK ============================== */
function Stack() {
  const groups = [
    { name: "Web Development", items: ["TypeScript", "React", "Next.js", "TanStack", "Node.js", "Tailwind", "PostgreSQL"] },
    { name: "AI & ML", items: ["OpenAI", "Anthropic", "LangChain", "pgvector", "Python", "Hugging Face"] },
    { name: "Commerce", items: ["Shopify", "Hydrogen", "Stripe", "Klaviyo", "Sanity", "Webflow"] },
    { name: "Growth & Marketing", items: ["GA4", "Meta Ads", "Google Ads", "Ahrefs", "BigQuery", "Notion"] },
  ];
  return (
    <section className="relative border-t border-border bg-card/30 py-20 md:py-32">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        {/* CENTERED HEADER */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-glow glass px-3 py-1 font-mono text-xs uppercase tracking-wider text-gradient">
            Stack of Technology
          </div>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-5xl">Tools we reach for.</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">Stack-agnostic, but here's what powers most of our work — modern, fast, and battle-tested.</p>
        </div>

        <div className="relative mt-16 grid gap-5 md:grid-cols-2">
          <div className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block">
            <div className="grid h-32 w-32 place-items-center rounded-full border border-glow glass text-center">
              <div className="font-display text-sm font-bold leading-tight">Stack of<br />Technology</div>
            </div>
          </div>
          {groups.map((g) => (
            <div key={g.name} className="rounded-3xl border border-border bg-card p-6 md:p-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-glow px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-gradient">{g.name}</div>
              <div className="mt-5 flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span key={it} className="rounded-xl border border-border bg-background/60 px-3 py-2 font-mono text-xs">{it}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================== TESTIMONIALS ============================== */
function Testimonials() {
  const perView = 3;
  const max = Math.max(0, TESTIMONIALS.length - perView);
  const { index, setIndex, setPaused } = useAutoSlider(max + 1, 6000);
  const next = () => setIndex((i) => (i >= max ? 0 : i + 1));
  const prev = () => setIndex((i) => (i <= 0 ? max : i - 1));

  return (
    <section className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* CENTERED HEADER */}
        <div className="mb-10 text-center">
          <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Testimonials</div>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-5xl">What clients say.</h2>
        </div>

        <div className="hidden md:block" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <div className="overflow-hidden">
            <div className="flex gap-5 transition-transform duration-700 ease-out" style={{ transform: `translateX(calc(-${index} * (100% / ${perView})))` }}>
              {TESTIMONIALS.map((t) => (
                <div key={t.name} className="w-[calc((100%-2.5rem)/3)] shrink-0">
                  <TestimonialCard t={t} />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <div className="flex gap-1.5">
              {Array.from({ length: max + 1 }).map((_, i) => (
                <button key={i} onClick={() => setIndex(i)} aria-label={`Slide ${i + 1}`} className={`h-1.5 rounded-full transition-all ${i === index ? "w-8 bg-foreground" : "w-1.5 bg-border"}`} />
              ))}
            </div>
            <SliderArrows onPrev={prev} onNext={next} />
          </div>
        </div>

        <div className="mt-10 -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto scrollbar-hide px-4 md:hidden">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="w-[88%] shrink-0 snap-start"><TestimonialCard t={t} /></div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ t }: { t: typeof TESTIMONIALS[number] }) {
  return (
    <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-7">
      <div className="flex gap-0.5 text-[var(--neon)]">{[0,1,2,3,4].map((i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
      <p className="mt-5 flex-1 text-pretty font-display text-lg font-medium leading-snug md:text-xl">"{t.quote}"</p>
      <div className="mt-6 flex items-center gap-3">
        <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-[var(--neon)] to-[var(--neon-violet)] font-mono text-sm font-bold text-background">{t.avatar}</div>
        <div>
          <div className="text-sm font-medium">{t.name}</div>
          <div className="text-xs text-muted-foreground">{t.role}</div>
        </div>
      </div>
    </div>
  );
}

/* ============================== BLOG ============================== */
function Blog() {
  const perView = 3;
  const max = Math.max(0, POSTS.length - perView);
  const { index, setIndex, setPaused } = useAutoSlider(max + 1, 6000);
  const next = () => setIndex((i) => (i >= max ? 0 : i + 1));
  const prev = () => setIndex((i) => (i <= 0 ? max : i - 1));

  return (
    <section className="border-t border-border bg-card/30 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* CENTERED HEADER */}
        <div className="mb-10 text-center">
          <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Blog</div>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-5xl">Article categories.</h2>
          <p className="mt-3 max-w-md mx-auto text-muted-foreground">Field notes, deep-dives, and frameworks from our work.</p>
          <div className="mt-4 flex justify-center">
            <Link to="/blog" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium hover:bg-muted">
              Browse all articles <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="hidden md:block" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <div className="overflow-hidden">
            <div className="flex gap-5 transition-transform duration-700 ease-out" style={{ transform: `translateX(calc(-${index} * (100% / ${perView})))` }}>
              {POSTS.map((p, i) => (
                <BlogCard key={p.slug} p={p} className="w-[calc((100%-2.5rem)/3)] shrink-0" />
              ))}
            </div>
          </div>
          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-1.5">
              {Array.from({ length: max + 1 }).map((_, i) => (
                <button key={i} onClick={() => setIndex(i)} aria-label={`Slide ${i + 1}`} className={`h-1.5 rounded-full transition-all ${i === index ? "w-8 bg-foreground" : "w-1.5 bg-border"}`} />
              ))}
            </div>
            <SliderArrows onPrev={prev} onNext={next} />
          </div>
        </div>

        <div className="mt-10 -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto scrollbar-hide px-4 md:hidden">
          {POSTS.map((p, i) => (
            <BlogCard key={p.slug} p={p} className="w-[80%] shrink-0 snap-start" />
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogCard({ p, className = "" }: { p: typeof POSTS[number]; className?: string }) {
  return (
    <Link to="/blog" className={`group relative aspect-[3/4] overflow-hidden rounded-3xl border border-border bg-card ${className}`}>
      <img src={POST_IMAGES[p.slug]} alt={p.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/15" />
      <div className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur opacity-0 transition group-hover:opacity-100">
        <ArrowUpRight className="h-4 w-4" />
      </div>
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[10px] font-mono uppercase backdrop-blur">
          {p.tag}
        </div>
        <h3 className="mt-4 font-display text-xl font-bold leading-tight">{p.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-white/80">{p.excerpt}</p>
        <div className="mt-4 flex items-center justify-between text-xs text-white/70">
          <span>{p.date}</span>
          <span>{p.read} read</span>
        </div>
      </div>
    </Link>
  );
}

/* ============================== FAQ ============================== */
function FAQs() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="border-t border-border py-20 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-gradient">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--neon)]" /> FAQ
          </div>
          <h2 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">Questions & Answers</h2>
          <p className="mt-6 max-w-md text-muted-foreground">
            Get clarity on how we work, what we deliver, and how we partner with founders and teams to ship outcomes that matter.
          </p>
          <div className="mt-8 space-y-3">
            {FAQ.map((f, i) => (
              <div key={f.q} className="overflow-hidden rounded-2xl border border-border bg-card transition hover:border-glow">
                <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left">
                  <span className="font-medium">{f.q}</span>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-muted">
                    {open === i ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                {open === i && <div className="px-6 pb-6 text-sm text-muted-foreground">{f.a}</div>}
              </div>
            ))}
          </div>
        </div>

        <div className="relative lg:sticky lg:top-24 lg:self-start">
          <div className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-card">
            <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80" alt="Globe Stack team at work" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
            <div className="absolute inset-x-6 bottom-6">
              <div className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/10 p-4 text-white backdrop-blur-md">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-[var(--neon)] to-[var(--neon-violet)] text-background">
                  <Rocket className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-display text-lg font-semibold">120+ Projects shipped</div>
                  <div className="text-xs text-white/75">Across 6 disciplines & 4 continents</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}