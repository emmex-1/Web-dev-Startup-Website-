export const SITE = {
  name: "Globe Stack",
  tagline: "Engineering the digital edge.",
  description: "Globe Stack is a global tech studio building web apps, SaaS, UI/UX, AI solutions, SEO, social & ads, and Shopify experiences for ambitious brands in Nigeria, the USA, UK, Canada, India, France, Germany, and worldwide.",
  email: "info@globestack.com",
  phone: "+234 7048595478",
  social: {
    twitter: "https://twitter.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
};

type ServiceFAQ = { q: string; a: string };
type ProcessStep = { step: string; title: string; desc: string };

export type Service = {
  slug: string;
  title: string;
  // short: string;
  icon: string;
  blurb: string;
  overview: string;
  whoFor: string[];
  problems: string[];
  benefits: { t: string; d: string }[];
  deliverables: string[];
  features: string[];
  pricing: { name: string; price: string; desc: string; items: string[]; featured?: boolean }[];
  process: ProcessStep[];
  faqs: ServiceFAQ[];
};

const DEFAULT_PROCESS: ProcessStep[] = [
  { step: "01", title: "Discover", desc: "Kickoff workshop to align on goals, users, and constraints." },
  { step: "02", title: "Plan", desc: "Strategy, scope, and a concrete roadmap with milestones." },
  { step: "03", title: "Execute", desc: "Tight sprints with weekly demos and async updates." },
  { step: "04", title: "Launch", desc: "QA, performance, analytics, and a clean handoff." },
  { step: "05", title: "Optimize", desc: "Iterate on real-world data to compound results." },
];

export const SERVICES: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    // short: "High-performance web apps & marketing sites.",
    icon: "Code2",
    blurb: "From marketing sites to complex SaaS dashboards  built on modern stacks for speed, scale, and SEO.",
    overview: "We design and ship production-grade web experiences fast, accessible, SEO-friendly, and built to last. Whether you need a marketing site that converts or a multi-tenant SaaS, we own it end-to-end.",
    whoFor: [
      "Funded startups launching a new product",
      "Scale-ups replatforming away from legacy stacks",
      "Marketing teams who need a CMS that won't fight them",
      "Founders who want a senior team, not a freelancer relay race",
    ],
    problems: [
      "Slow Core Web Vitals tanking SEO and conversions",
      "Marketing teams blocked by engineering for every page edit",
      "Spaghetti codebases that break with every deploy",
      "Designs that look great in Figma but feel cheap in the browser",
    ],
    benefits: [
      { t: "Faster pages, more revenue", d: "We routinely cut LCP by 50%+ and lift conversion alongside it." },
      { t: "SEO baked in", d: "Semantic HTML, schema, sitemaps, and SSR — not bolted on." },
      { t: "Maintainable code", d: "Typed, tested, documented. Your future engineers will thank us." },
      { t: "Real ownership", d: "You get the repo, the docs, and a senior team that stays close." },
    ],
    deliverables: [
      "Custom design system in Figma",
      "Production codebase (TypeScript, tested)",
      "CI/CD pipeline & cloud infra",
      "CMS configured for non-technical editors",
      "Analytics & SEO baseline",
      "Handoff docs and 30-day post-launch support",
    ],
    features: [
      "React, Next.js, TanStack Start",
      "Headless CMS integrations",
      "Performance & Core Web Vitals",
      "API & database architecture",
      "Accessibility (WCAG 2.2)",
      "CI/CD & cloud deployment",
    ],
    pricing: [
      { name: "CORPORATE", price: "$300", desc: "Marketing site up to 6 pages.", items: ["Custom design", "CMS-ready", "SEO baseline", "2 weeks delivery"] },
      { name: "Scale", price: "$7,900", desc: "Web app or e-commerce build.", items: ["Custom backend", "Auth & dashboard", "Integrations", "4–6 weeks"], featured: true },
      { name: "Enterprise", price: "Custom", desc: "Multi-team platforms.", items: ["Architecture audit", "Dedicated squad", "SLA & support", "12+ weeks"] },
    ],
    process: DEFAULT_PROCESS,
    faqs: [
      { q: "What stack do you use?", a: "We default to React + TypeScript with TanStack Start or Next.js, but we're stack-agnostic and will pick what fits your team." },
      { q: "Can you work with our existing designers?", a: "Yes — we plug into Figma teams happily. We can also lead design in-house." },
      { q: "Do you offer ongoing maintenance?", a: "Yes. After launch, most clients move onto a small monthly retainer for fixes and iteration." },
      { q: "Will the site be SEO-ready on launch?", a: "Always. SSR, schema, sitemaps, performance budgets — non-negotiable." },
    ],
  },

  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    // short: "",
    icon: "Palette",
    blurb: "Product design, design systems, and conversion-focused UX — from wireframes to pixel-perfect Figma.",
    overview: "Senior product designers who think in flows, not just screens. We design interfaces that feel obvious to users, scale across teams, and lift the metrics that matter.",
    whoFor: [
      "Founders shipping a v1 product",
      "SaaS teams replatforming a clunky dashboard",
      "Marketing teams that need a design system",
      "Anyone whose product 'works but feels off'",
    ],
    problems: [
      "Drop-off at key flows (signup, checkout, onboarding)",
      "Designs that look great in Figma but ship wrong",
      "Inconsistent UI across pages and platforms",
      "No design system — every screen is bespoke",
    ],
    benefits: [
      { t: "Conversion-driven", d: "Every flow is reviewed against measurable funnel targets." },
      { t: "Design systems", d: "Tokenised, themable, and ready for engineering." },
      { t: "Real prototypes", d: "Figma + animation prototypes you can actually click through." },
      { t: "Engineer handoff", d: "Specs, tokens, and a Loom walkthrough — devs love us." },
    ],
    deliverables: [
      "UX research + flow maps",
      "Wireframes + prototypes",
      "High-fidelity Figma designs",
      "Design system + tokens",
      "Engineer handoff doc",
      "Animation specs",
    ],
    features: ["Product design", "Design systems", "UX research", "Prototyping", "Mobile + web", "Figma, Framer, Webflow"],
    pricing: [
      { name: "Starter", price: "$1,800", desc: "Single page or flow redesign.", items: ["Up to 6 screens", "1 round of revisions", "Figma file"] },
      { name: "Professional", price: "$5,400", desc: "Full product or marketing site.", items: ["Up to 25 screens", "Design system", "Prototype", "Engineer handoff"], featured: true },
      { name: "Enterprise", price: "$12,000+", desc: "Multi-product design system.", items: ["Unlimited screens", "Tokenised system", "Dedicated designer", "Quarterly retainer"] },
    ],
    process: DEFAULT_PROCESS,
    faqs: [
      { q: "Do you do mobile design?", a: "Yes — iOS, Android, and responsive web. Native patterns where they matter." },
      { q: "Will you build the design system?", a: "Yes, in Figma with proper tokens, variants, and documentation. Engineers can hook it straight into Tailwind or any framework." },
      { q: "Do you handle research?", a: "Yes — user interviews, usability testing, and analytics review on Pro and Enterprise tiers." },
      { q: "Can you also build it?", a: "Absolutely — we pair UI/UX with our Web Development team for end-to-end delivery." },
    ],
  },

  {
    slug: "saas-development",
    title: "SaaS Development",
    // short: "Build & ship multi-tenant SaaS.",
    icon: "Layers",
    blurb: "End-to-end SaaS builds — auth, billing, multi-tenancy, dashboards, and the boring infrastructure that makes them work.",
    overview: "We build production SaaS products from idea to revenue. Auth, RBAC, multi-tenant data, Stripe billing, admin dashboards, customer dashboards — and the architecture to scale them.",
    whoFor: [
      "Founders building a v1 SaaS product",
      "Teams replatforming legacy SaaS to a modern stack",
      "Agencies productising a service into software",
      "Enterprises spinning out internal tools as SaaS",
    ],
    problems: [
      "Auth, billing, and tenant isolation eating months of dev time",
      "No clear path from prototype to production",
      "Costly mistakes in data modelling caught too late",
      "Customer dashboards that feel half-finished",
    ],
    benefits: [
      { t: "Faster time to revenue", d: "We've shipped dozens of SaaS — patterns and infra are already in our toolkit." },
      { t: "Multi-tenant done right", d: "Row-level security, audit logs, and admin tooling from day one." },
      { t: "Stripe / Paddle billing", d: "Subscriptions, metered billing, dunning, and customer portals." },
      { t: "Built to hand off", d: "Clean codebase, docs, and CI so your team can take it forward." },
    ],
    deliverables: [
      "Architecture + data model",
      "Auth + RBAC + tenant isolation",
      "Customer + admin dashboards",
      "Billing integration (Stripe/Paddle)",
      "API + webhooks",
      "CI/CD + observability",
    ],
    features: ["Multi-tenant architecture", "Auth & RBAC", "Stripe / Paddle billing", "Admin dashboards", "API design", "Observability & logging"],
    pricing: [
      { name: "Starter", price: "$8,900", desc: "MVP SaaS in 4–6 weeks.", items: ["Auth + billing", "1 core feature", "Customer dashboard"] },
      { name: "Professional", price: "$24,000", desc: "Production SaaS, 8–12 weeks.", items: ["Multi-tenant", "Admin tools", "Integrations", "API"], featured: true },
      { name: "Enterprise", price: "Custom", desc: "Platforms & marketplaces.", items: ["Dedicated squad", "SSO / SAML", "SLA & support", "12+ weeks"] },
    ],
    process: DEFAULT_PROCESS,
    faqs: [
      { q: "What stack do you use for SaaS?", a: "TypeScript end-to-end — React + TanStack Start or Next.js, Node/tRPC or Hono backends, Postgres + Supabase, Stripe for billing." },
      { q: "Do you handle Stripe billing?", a: "Yes — subscriptions, usage-based, trials, dunning, and customer portal. We've shipped this dozens of times." },
      { q: "Can you scale to enterprise?", a: "Yes — SSO/SAML, SCIM, audit logs, and SOC2-friendly architecture available on Enterprise tier." },
      { q: "Who owns the IP?", a: "You do. Repo, infra, and docs all transfer." },
    ],
  },

  // {
  //   slug: "ui/ux",
  //   title: "UI/UX",
  //   short: "High-performance web apps & marketing sites.",
  //   icon: "Code2",
  //   blurb: "From marketing sites to complex SaaS dashboards — built on modern stacks for speed, scale, and SEO.",
  //   overview: "We design and ship production-grade web experiences — fast, accessible, SEO-friendly, and built to last. Whether you need a marketing site that converts or a multi-tenant SaaS, we own it end-to-end.",
  //   whoFor: [
  //     "Funded startups launching a new product",
  //     "Scale-ups replatforming away from legacy stacks",
  //     "Marketing teams who need a CMS that won't fight them",
  //     "Founders who want a senior team, not a freelancer relay race",
  //   ],
  //   problems: [
  //     "Slow Core Web Vitals tanking SEO and conversions",
  //     "Marketing teams blocked by engineering for every page edit",
  //     "Spaghetti codebases that break with every deploy",
  //     "Designs that look great in Figma but feel cheap in the browser",
  //   ],
  //   benefits: [
  //     { t: "Faster pages, more revenue", d: "We routinely cut LCP by 50%+ and lift conversion alongside it." },
  //     { t: "SEO baked in", d: "Semantic HTML, schema, sitemaps, and SSR — not bolted on." },
  //     { t: "Maintainable code", d: "Typed, tested, documented. Your future engineers will thank us." },
  //     { t: "Real ownership", d: "You get the repo, the docs, and a senior team that stays close." },
  //   ],
  //   deliverables: [
  //     "Custom design system in Figma",
  //     "Production codebase (TypeScript, tested)",
  //     "CI/CD pipeline & cloud infra",
  //     "CMS configured for non-technical editors",
  //     "Analytics & SEO baseline",
  //     "Handoff docs and 30-day post-launch support",
  //   ],
  //   features: [
  //     "React, Next.js, TanStack Start",
  //     "Headless CMS integrations",
  //     "Performance & Core Web Vitals",
  //     "API & database architecture",
  //     "Accessibility (WCAG 2.2)",
  //     "CI/CD & cloud deployment",
  //   ],
  //   pricing: [
  //     { name: "Launch", price: "$2,499", desc: "Marketing site up to 6 pages.", items: ["Custom design", "CMS-ready", "SEO baseline", "2 weeks delivery"] },
  //     { name: "Scale", price: "$7,900", desc: "Web app or e-commerce build.", items: ["Custom backend", "Auth & dashboard", "Integrations", "4–6 weeks"], featured: true },
  //     { name: "Enterprise", price: "Custom", desc: "Multi-team platforms.", items: ["Architecture audit", "Dedicated squad", "SLA & support", "12+ weeks"] },
  //   ],
  //   process: DEFAULT_PROCESS,
  //   faqs: [
  //     { q: "What stack do you use?", a: "We default to React + TypeScript with TanStack Start or Next.js, but we're stack-agnostic and will pick what fits your team." },
  //     { q: "Can you work with our existing designers?", a: "Yes — we plug into Figma teams happily. We can also lead design in-house." },
  //     { q: "Do you offer ongoing maintenance?", a: "Yes. After launch, most clients move onto a small monthly retainer for fixes and iteration." },
  //     { q: "Will the site be SEO-ready on launch?", a: "Always. SSR, schema, sitemaps, performance budgets — non-negotiable." },
  //   ],
  // },

  {
    slug: "seo",
    title: "SEO",
    // short: "Rank higher. Convert more.",
    icon: "Search",
    blurb: "Technical SEO, content strategy, and link building backed by data — not guesswork.",
    overview: "We build durable organic growth engines: technical foundation, topical authority, and content that ranks AND converts. No spammy backlinks, no thin content.",
    whoFor: [
      "B2B SaaS chasing high-intent search demand",
      "DTC brands competing on category keywords",
      "Marketplaces that need to scale programmatic SEO",
      "Teams whose organic traffic flatlined or dropped",
    ],
    problems: [
      "Stuck on page 2–4 for your money keywords",
      "Crawl issues, duplicate content, or messy migrations",
      "Content that ranks but doesn't convert",
      "Backlink profile that hasn't grown in years",
    ],
    benefits: [
      { t: "Compounding traffic", d: "Organic is the cheapest channel — once it's working, it keeps working." },
      { t: "Real rankings", d: "We aim for top-3 on bottom-of-funnel queries that drive revenue." },
      { t: "Defensible moat", d: "Topical authority is hard to copy and hard to lose." },
      { t: "Honest reporting", d: "No vanity metrics. We report on revenue, leads, and pipeline." },
    ],
    deliverables: [
      "Full technical SEO audit + roadmap",
      "Keyword universe & content briefs",
      "Monthly content production",
      "Backlink outreach campaigns",
      "Live performance dashboard",
      "Monthly strategy call",
    ],
    features: ["Technical SEO audits", "Keyword strategy", "On-page optimization", "Content briefs", "Backlink outreach", "Monthly reporting"],
    pricing: [
      { name: "Audit", price: "$899", desc: "One-time deep audit.", items: ["100+ point audit", "Roadmap", "Competitor analysis"] },
      { name: "Growth", price: "$1,800/mo", desc: "Ongoing SEO retainer.", items: ["4 articles/mo", "Tech fixes", "Backlinks", "Reporting"], featured: true },
      { name: "Authority", price: "$4,500/mo", desc: "Aggressive scale.", items: ["10 articles/mo", "PR backlinks", "Dedicated strategist"] },
    ],
    process: DEFAULT_PROCESS,
    faqs: [
      { q: "How long until I see results?", a: "Tech wins land in 30–60 days. Content rankings typically compound from month 3 onward." },
      { q: "Do you write the content yourselves?", a: "Yes — senior writers with subject-matter expertise, edited by an SEO strategist." },
      { q: "Will you build links?", a: "Yes, ethically — digital PR, HARO, and earned placements. No PBNs." },
      { q: "Do you handle international SEO?", a: "Yes, including hreflang, multi-region content, and local link building." },
    ],
  },
  {
    slug: "ai-solutions",
    title: "AI Solutions",
    // short: "Custom AI agents & automations.",
    icon: "Sparkles",
    blurb: "We design and ship AI features that actually move metrics — chatbots, RAG, automations, and internal copilots.",
    overview: "AI products that ship to real users — not demos. We architect, build, and operate LLM-powered systems with proper evals, guardrails, and monitoring.",
    whoFor: [
      "Product teams adding AI features to existing apps",
      "Support & ops teams drowning in repetitive work",
      "Founders exploring an AI-first product",
      "Companies with proprietary data ready for RAG",
    ],
    problems: [
      "Demos that look magical but break in production",
      "Hallucinations and no way to measure quality",
      "Costs spiraling out of control with no observability",
      "Teams without senior AI engineers in-house",
    ],
    benefits: [
      { t: "Production-grade", d: "Evals, guardrails, monitoring, and cost controls from day one." },
      { t: "Real ROI", d: "We pick use cases that move dollars — not novelty features." },
      { t: "Vendor-flexible", d: "OpenAI, Anthropic, open-source — we pick the right model per task." },
      { t: "Knowledge transfer", d: "Your team learns how it works and can extend it." },
    ],
    deliverables: [
      "Use-case scoping document",
      "Working prototype with evals",
      "Production deployment + monitoring",
      "Eval suite & guardrails",
      "Cost & latency dashboard",
      "Engineering documentation",
    ],
    features: ["RAG & vector search", "Custom AI agents", "Workflow automation", "LLM fine-tuning", "Voice & vision models", "Eval & guardrails"],
    pricing: [
      { name: "Pilot", price: "$3,500", desc: "Validate one AI use case.", items: ["Discovery", "Working prototype", "2-week sprint"] },
      { name: "Production", price: "$12,000+", desc: "Ship to real users.", items: ["Full integration", "Evals & monitoring", "6–8 weeks"], featured: true },
      { name: "Embedded", price: "Custom", desc: "AI team-as-a-service.", items: ["Dedicated engineers", "Roadmap ownership", "Quarterly contracts"] },
    ],
    process: DEFAULT_PROCESS,
    faqs: [
      { q: "Which models do you use?", a: "Whatever fits — GPT, Claude, Gemini, Llama, or a fine-tuned open-source model. We benchmark per use case." },
      { q: "Who owns the IP?", a: "You do. Code, prompts, evals, and weights all transfer to you." },
      { q: "Can you work with our data?", a: "Yes. We sign NDAs and BAAs, and can deploy in your VPC if needed." },
      { q: "Do you offer ongoing model maintenance?", a: "Yes — model updates, eval drift monitoring, and cost optimization on retainer." },
    ],
  },
  {
    slug: "social-and-ads",
    title: "Social Media & Ad Management",
    // short: "Content + paid media that compounds.",
    icon: "MessageCircle",
    blurb: "Founder-led content, community management, and full-funnel paid media on Meta, Google, TikTok, and LinkedIn — under one team.",
    overview: "One senior team running organic social and paid media end-to-end — strategy, creative production, posting, community, attribution, and reporting. No more handoffs between an ad agency and a social agency.",
    whoFor: [
      "DTC brands needing constant short-form content + paid scale",
      "Founders building personal brand around their company",
      "B2B teams running both thought leadership and paid demand-gen",
      "Companies tired of juggling separate ad and social agencies",
    ],
    problems: [
      "Inconsistent posting and falling ROAS at the same time",
      "Creative fatigue across both organic and paid",
      "iOS 17+ and cookie deprecation breaking attribution",
      "No single team owning the full funnel",
    ],
    benefits: [
      { t: "Full-funnel ownership", d: "Organic builds demand, paid captures it — one team, one strategy." },
      { t: "Senior strategists", d: "Operators who've spent $10M+ and grown 200k+ followings." },
      { t: "Creative engine", d: "Weekly drops that fuel both feed posts and paid ads." },
      { t: "Honest reporting", d: "Live dashboards, weekly Looms, direct Slack access." },
    ],
    deliverables: [
      "Content + paid strategy doc",
      "Monthly content calendar",
      "Graphics, captions, short-form video",
      "Campaign builds across Meta, Google, TikTok, LinkedIn",
      "Creative production (static + UGC video)",
      "Attribution + analytics dashboard",
      "Community management",
      "Bi-weekly strategy call",
    ],
    features: ["Content strategy", "Short-form video", "Community management", "Paid ads (Meta, Google, TikTok, LinkedIn)", "Creative production", "Attribution dashboards"],
    pricing: [
      { name: "Starter", price: "$1,800/mo", desc: "Organic-led, 2 platforms.", items: ["12 posts/mo", "1 ad platform up to $10k spend", "Monthly report"] },
      { name: "Growth", price: "$3,800/mo", desc: "Full-funnel across 3 platforms.", items: ["20 posts + reels", "3 ad platforms up to $50k spend", "Bi-weekly calls"], featured: true },
      { name: "Scale", price: "$7,500/mo", desc: "Premium organic + paid scale.", items: ["UGC sourcing", "Influencer mgmt", "Custom dashboards", "Dedicated lead"] },
    ],
    process: DEFAULT_PROCESS,
    faqs: [
      { q: "Which platforms do you cover?", a: "Organic: LinkedIn, X, Instagram, TikTok, YouTube Shorts, Threads. Paid: Meta, Google, TikTok, LinkedIn, YouTube, Reddit." },
      { q: "Do you produce creative?", a: "Yes — in-house designers, editors, and a UGC partner network. Weekly creative drops feed both organic and paid." },
      { q: "What's the minimum ad spend?", a: "We work best with $5k+/mo in paid spend. Below that, focus on organic first." },
      { q: "Who owns the accounts?", a: "You do, always. We work in your accounts under our user." },
    ],
  },
  {
    slug: "shopify-store-design",
    title: "Shopify Store Design",
    // short: "DTC stores built to convert.",
    icon: "ShoppingBag",
    blurb: "Custom Shopify themes, app integrations, and CRO — we design stores that sell.",
    overview: "We design and build Shopify stores that convert — custom themes, fast PDPs, app integrations, and ongoing CRO. Theme tweaks to full headless Hydrogen builds.",
    whoFor: [
      "DTC brands launching or replatforming",
      "Stores stuck on a stock theme that doesn't convert",
      "Brands moving from WooCommerce / BigCommerce / Magento",
      "Shopify Plus brands going headless",
    ],
    problems: [
      "Theme conversion stuck under 2%",
      "Slow mobile load times killing paid traffic ROI",
      "PDP that looks like everyone else's",
      "Marketing team blocked from shipping landing pages",
    ],
    benefits: [
      { t: "Conversion-first design", d: "Every section earns its place by lifting a metric." },
      { t: "Blazing fast", d: "Mobile LCP under 1.5s — even with heavy product imagery." },
      { t: "Marketer-friendly", d: "Section-based pages let your team ship without engineering." },
      { t: "Built for scale", d: "Subscriptions, bundles, multi-region, headless — all on the table." },
    ],
    deliverables: [
      "Custom theme design (Figma)",
      "Built theme or Hydrogen storefront",
      "App integrations (reviews, subs, loyalty)",
      "Migration from previous platform",
      "CRO testing setup",
      "Theme docs & training",
    ],
    features: ["Custom theme design", "App integrations", "Migration from other platforms", "CRO & A/B testing", "Subscriptions & memberships", "Headless commerce"],
    pricing: [
      { name: "Theme", price: "$3,900", desc: "Premium theme customization.", items: ["Brand-fit design", "Up to 8 templates", "3 weeks"] },
      { name: "Custom", price: "$9,800", desc: "Fully custom Shopify build.", items: ["Bespoke design", "App integrations", "Migration", "5–7 weeks"], featured: true },
      { name: "Plus", price: "Custom", desc: "Shopify Plus & headless.", items: ["Hydrogen / headless", "Multi-region", "Dedicated team"] },
    ],
    process: DEFAULT_PROCESS,
    faqs: [
      { q: "Do you migrate stores from other platforms?", a: "Yes — we've done dozens of migrations from WooCommerce, BigCommerce, Magento, and Squarespace." },
      { q: "Can you go headless?", a: "Yes, with Hydrogen. We'll honestly tell you whether it's worth it for your stage." },
      { q: "What apps do you recommend?", a: "We're app-light by default — Klaviyo, Judge.me, Recharge, and Shopify-native features cover most needs." },
      { q: "Do you run CRO post-launch?", a: "Yes. Many clients move onto a CRO retainer where we test PDP, cart, and checkout monthly." },
    ],
  },
  
  
  {
    slug: "website-maintenance",
    title: "Website Maintenance & Support",
    // short: "Keep your site fast, secure, and shipping.",
    icon: "Wrench",
    blurb: "Ongoing maintenance, security patches, content updates, performance tuning, and on-call support — for any web stack.",
    overview: "A senior team on retainer for the small (and not-so-small) work that keeps a website healthy: bug fixes, content updates, security patches, performance audits, and emergency response.",
    whoFor: [
      "Companies whose dev agency disappeared after launch",
      "Marketing teams with no in-house developer",
      "Founders who want a hotline for site issues",
      "Anyone running WordPress, Shopify, Webflow, or custom",
    ],
    problems: [
      "Slow page speed and dropping SEO",
      "Security vulnerabilities and outdated plugins",
      "Backlog of small fixes nobody owns",
      "Site crashes on traffic spikes",
    ],
    benefits: [
      { t: "Same-day turnaround", d: "Most tickets resolved within one business day." },
      { t: "Senior engineers", d: "Not interns — actual web engineers on every retainer." },
      { t: "Proactive monitoring", d: "Uptime, performance, and security alerts you don't have to set up." },
      { t: "Predictable cost", d: "Flat monthly fee, rolled-over hours, no surprise invoices." },
    ],
    deliverables: [
      "Monthly uptime + performance report",
      "Security patches + dependency updates",
      "Content updates (copy, images, pages)",
      "Bug fixes + small features",
      "Quarterly performance audit",
      "On-call emergency support",
    ],
    features: ["WordPress / Shopify / Webflow", "Custom React & Next.js sites", "Performance tuning", "Security & backups", "Uptime monitoring", "Same-day support"],
    pricing: [
      { name: "Starter", price: "$390/mo", desc: "Up to 4 hours/mo.", items: ["Content updates", "Bug fixes", "Email support"] },
      { name: "Professional", price: "$1,200/mo", desc: "Up to 12 hours/mo.", items: ["Everything in Starter", "Performance audit", "Slack support"], featured: true },
      { name: "Enterprise", price: "$3,400/mo", desc: "Up to 40 hours/mo.", items: ["Dedicated engineer", "On-call", "Quarterly roadmap"] },
    ],
    process: DEFAULT_PROCESS,
    faqs: [
      { q: "Do unused hours roll over?", a: "Yes — up to 1 month, so you don't lose them in slow weeks." },
      { q: "What's your response time?", a: "Email: 4 business hours. Slack (Pro+): 1 business hour. Emergency: 30 minutes." },
      { q: "Can you take over from another agency?", a: "Yes — onboarding includes a full audit, access transfer, and documentation." },
      { q: "What stacks do you support?", a: "WordPress, Shopify, Webflow, Wix, Squarespace, and any custom React / Next.js / Vue setup." },
    ],
  },
  {
    slug: "backend-api-development",
    title: "Backend & API Development",
    // short: "APIs, integrations, and infrastructure.",
    icon: "Server",
    blurb: "REST + GraphQL APIs, third-party integrations, data pipelines, and serverless infrastructure — built for scale.",
    overview: "We design and ship the backends that power web, mobile, and AI products. APIs, databases, queues, integrations, and the observability to keep them healthy.",
    whoFor: [
      "Mobile teams needing an API to back their app",
      "Frontend teams blocked on backend work",
      "Companies integrating CRM, ERP, or payment systems",
      "Teams migrating from monoliths to services",
    ],
    problems: [
      "Slow, inconsistent, or undocumented APIs",
      "Integrations that break every release",
      "No observability — you find out from customers",
      "Scaling pain at unexpected traffic",
    ],
    benefits: [
      { t: "Production-grade APIs", d: "Typed, documented, versioned, and tested." },
      { t: "Integrations that hold", d: "Webhooks, retries, idempotency — done right." },
      { t: "Observable by default", d: "Logs, metrics, and tracing wired up day one." },
      { t: "Cost-aware", d: "Right-sized infra, not over-engineered Kubernetes." },
    ],
    deliverables: [
      "API design + OpenAPI spec",
      "Database schema + migrations",
      "Auth + rate limiting",
      "Third-party integrations",
      "Observability dashboards",
      "Deployment + CI/CD",
    ],
    features: ["REST & GraphQL", "Node.js, Python, Go", "Postgres, Mongo, Redis", "Stripe, HubSpot, Salesforce", "Serverless & containers", "OpenAPI docs"],
    pricing: [
      { name: "Starter", price: "$3,200", desc: "Single API or integration.", items: ["Up to 10 endpoints", "Auth + docs", "2 weeks"] },
      { name: "Professional", price: "$9,800", desc: "Production backend or integration suite.", items: ["Full API + DB", "Integrations", "Observability", "4–6 weeks"], featured: true },
      { name: "Enterprise", price: "Custom", desc: "Platforms & data infra.", items: ["Microservices", "Event-driven", "Dedicated team"] },
    ],
    process: DEFAULT_PROCESS,
    faqs: [
      { q: "Which languages do you use?", a: "TypeScript by default; Python for AI/data; Go for high-throughput services." },
      { q: "Do you handle databases?", a: "Yes — Postgres, MySQL, Mongo, Redis, and Supabase. Schema design, migrations, and tuning included." },
      { q: "Can you integrate with our existing stack?", a: "Yes — we work in your repos and your cloud." },
      { q: "Do you offer ongoing support?", a: "Yes — most clients move onto a Maintenance retainer after launch." },
    ],
  },
];
