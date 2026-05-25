// lib/site.ts

export const SITE = {
  name: "Globe Stack",
  tagline: "Engineering the digital edge.",
  description:
    "Globe Stack is a global tech studio building web apps, SaaS, UI/UX, AI solutions, SEO, social & ads, and Shopify experiences for ambitious brands in Nigeria, the USA, UK, Canada, India, France, Germany, and worldwide.",
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
  icon: string;
  blurb: string;
  overview: string;
    heroImage?: string;        // 👈 add this
  whoForImages?: string[];  
  whoFor: string[];
  problems: string[];
  benefits: { t: string; d: string }[];
  deliverables: string[];
  features: string[];
  pricing: { name: string; price: string; desc: string; items: string[]; featured?: boolean }[];
  process: ProcessStep[];
  faqs: ServiceFAQ[];
};

// ─────────────────────────────────────────────
// DEFAULT PROCESS (override per-service below)
// ─────────────────────────────────────────────
const DEFAULT_PROCESS: ProcessStep[] = [
  { step: "01", title: "Discover", desc: "Kickoff workshop to align on goals, users, and constraints." },
  { step: "02", title: "Plan", desc: "Strategy, scope, and a concrete roadmap with milestones." },
  { step: "03", title: "Execute", desc: "Tight sprints with weekly demos and async updates." },
  { step: "04", title: "Launch", desc: "QA, performance, analytics, and a clean handoff." },
  { step: "05", title: "Optimize", desc: "Iterate on real-world data to compound results." },
];

export const SERVICES: Service[] = [
  // ─────────────────────────────────────────────
  // 1. WEB DEVELOPMENT
  // ─────────────────────────────────────────────
  {
    slug: "web-development",
    title: "Web Development",
    icon: "Code2",
    blurb:
      "From marketing sites to complex SaaS dashboards — built on modern stacks for speed, scale, and SEO.",
    overview:
      "We design and ship production-grade web experiences — fast, accessible, SEO-friendly, and built to last. Whether you need a marketing site that converts or a multi-tenant web app, we own it end-to-end: architecture, design, build, and deployment. Every project uses TypeScript, proper testing, and a CI/CD pipeline so your team can confidently push changes on day two.",
    whoFor: [
      "Funded startups launching a new product",
      "Scale-ups replatforming away from legacy stacks",
      "Marketing teams who need a CMS that won't fight them",
      "Founders who want a senior team, not a freelancer relay race",
    ],
    problems: [
      "Slow Core Web Vitals tanking SEO and ad quality scores",
      "Marketing teams blocked by engineering for every page edit",
      "Spaghetti codebases that break with every deploy",
      "Designs that look great in Figma but feel cheap in the browser",
    ],
    benefits: [
      {
        t: "Faster pages, more revenue",
        d: "We routinely cut LCP by 50%+ — faster pages rank higher and convert more visitors into customers.",
      },
      {
        t: "SEO baked in from line one",
        d: "Semantic HTML, structured data, server-side rendering, and sitemaps — not bolted on as an afterthought.",
      },
      {
        t: "Maintainable codebase",
        d: "TypeScript end-to-end, tested, and documented. Every engineer who touches it after us will thank you.",
      },
      {
        t: "You own everything",
        d: "Repo, docs, infra accounts, and CMS — all yours from day one. No vendor lock-in, no hostage situations.",
      },
    ],
    deliverables: [
      "Custom design system in Figma",
      "Production TypeScript codebase with tests",
      "Headless CMS configured for non-technical editors",
      "CI/CD pipeline and cloud infrastructure",
      "Analytics, SEO baseline, and structured data",
      "Handoff documentation and 30-day post-launch support",
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
      {
        name: "Corporate",
        price: "$300",
        desc: "Perfect for landing pages and small business sites.",
        items: [
          "Up to 5 pages",
          "Domain & Hosting (1 Year)",
          "Business Emails",
          "Responsive, mobile-first design",
          "Contact form integration",
          "Basic on-page SEO setup",
          "2 revision rounds",
          "30-day post-launch support",
        ],
      },
      {
        name: "E-Commerce",
        price: "$450",
        desc: "Full-featured site with e-commerce capability.",
        items: [
          "Domain & Hosting (1 Year)",
          "Business Emails",
          "On-page SEO",
          "Up to 100 products",
          "Payment Gateway",
          "Advanced on-page SEO",
          "3 revision rounds",
          "Analytics Integration",
          "30-day post-launch support",
        ],
        featured: true,
      },
      {
        name: "Custom",
        price: "Custom",
        desc: "Bespoke builds for complex or large-scale requirements.",
        items: [
          "Domain & Hosting (1 Year)",
          "User & Admin Dashboard",
          "Payment Gateway",
          "Continuous Support",
          "Analytics Integration",
          "Social Media Integration",
          "On-page & Off-page SEO",
          "Content Management",
        ],
      },
    ],
    process: [
      { step: "01", title: "Discovery", desc: "Goals, users, constraints, and a shared definition of done." },
      { step: "02", title: "Architecture", desc: "Stack selection, data model, and component library planning." },
      { step: "03", title: "Build", desc: "Two-week sprints with live previews and weekly Loom updates." },
      { step: "04", title: "QA & Launch", desc: "Cross-browser, performance, and accessibility audit before go-live." },
      { step: "05", title: "Iterate", desc: "Post-launch data review and a prioritised improvement backlog." },
    ],
    faqs: [
      {
        q: "What stack do you use?",
        a: "We default to React + TypeScript with TanStack Start or Next.js, Postgres, and Vercel. We're stack-agnostic and will match your team's existing setup if needed.",
      },
      {
        q: "Can you work with our existing designers?",
        a: "Absolutely — we plug into Figma teams seamlessly. We can also lead design in-house if you don't have one.",
      },
      {
        q: "Do you offer ongoing maintenance after launch?",
        a: "Yes. Most clients move to our Website Maintenance retainer for bug fixes, performance tuning, and content updates.",
      },
      {
        q: "Will the site be SEO-ready on day one?",
        a: "Always. Server-side rendering, structured data, sitemaps, and performance budgets are non-negotiable on every project.",
      },
      {
        q: "How long does a typical project take?",
        a: "A marketing site takes 2–3 weeks. A web app or platform is typically 4–8 weeks depending on scope. We'll give you a firm timeline after discovery.",
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 2. UI/UX DESIGN
  // ─────────────────────────────────────────────
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    icon: "Palette",
    blurb:
      "Product design, design systems, and conversion-focused UX — from wireframes to pixel-perfect Figma.",
    overview:
      "Senior product designers who think in flows, not just screens. We map user journeys, identify drop-off points, and design interfaces that feel obvious to users and impossible to misuse. Every design is tokenised and built for engineering handoff — no more developer interpretations of vague specs.",
    whoFor: [
      "Founders shipping a v1 product who can't afford the wrong UX",
      "SaaS teams whose dashboard 'works but feels clunky'",
      "Marketing teams that need a consistent design system",
      "Developers who want precise, engineering-ready specs",
    ],
    problems: [
      "Users dropping off at key flows — signup, checkout, onboarding",
      "Inconsistent UI across pages, teams, and platforms",
      "No design system — every new screen is built from scratch",
      "Designs that look great in review but ship poorly in code",
    ],
    benefits: [
      {
        t: "Conversion-driven design",
        d: "Every screen is reviewed against a measurable funnel target. We don't design pretty — we design effective.",
      },
      {
        t: "Tokenised design systems",
        d: "Figma tokens that map directly to your CSS — designers and developers work from the same source of truth.",
      },
      {
        t: "Clickable prototypes",
        d: "Stakeholders test real flows before a line of code is written, saving weeks of back-and-forth.",
      },
      {
        t: "Engineering-ready handoffs",
        d: "Annotated specs, component inventory, and a Loom walkthrough. Your developers will implement it correctly first time.",
      },
    ],
    deliverables: [
      "UX research report and user flow maps",
      "Low-fidelity wireframes for all key flows",
      "High-fidelity Figma designs (all breakpoints)",
      "Interactive prototype for stakeholder testing",
      "Design system with tokens and component library",
      "Annotated engineering handoff documentation",
    ],
    features: [
      "Product design",
      "Design systems",
      "UX research & usability testing",
      "Interactive prototyping",
      "Mobile + web (iOS, Android, responsive)",
      "Figma, Framer, Webflow",
    ],
    pricing: [
      {
        name: "Starter",
        price: "$250",
        desc: "Fast, clean design for startups moving quickly.",
        items: [
          "Up to 10 screens",
          "Wireframes + hi-fi mockups",
          "Component library in Figma",
          "1 user persona & flow map",
          "2 revision rounds",
        ],
      },
      {
        name: "Professional",
        price: "$650",
        desc: "Full design system with UX research and usability testing.",
        items: [
          "Up to 30 screens",
          "User research & journey mapping",
          "Full Figma design system",
          "Interactive prototype",
          "Usability testing session",
          "Dev handoff (Figma / Zeplin)",
          "4 revision rounds",
        ],
        featured: true,
      },
      {
        name: "Brand + Product",
        price: "$1,500",
        desc: "Brand identity and full product design in one engagement.",
        items: [
          "Brand identity system (logo, colors, type)",
          "Unlimited screens",
          "Motion & micro-interaction specs",
          "Design QA during development",
          "Style guide documentation",
          "Handoff + developer support calls",
        ],
      },
    ],
    process: [
      { step: "01", title: "Research", desc: "User interviews, competitor audit, and analytics review." },
      { step: "02", title: "Wireframe", desc: "Low-fidelity flows to validate structure before visual design." },
      { step: "03", title: "Design", desc: "High-fidelity screens built against the design system." },
      { step: "04", title: "Prototype", desc: "Clickable prototype for stakeholder review and usability testing." },
      { step: "05", title: "Handoff", desc: "Annotated specs, tokens, and a Loom walkthrough for developers." },
    ],
    faqs: [
      {
        q: "Do you design for mobile as well as web?",
        a: "Yes — iOS, Android, and responsive web at all breakpoints. We follow native patterns for mobile so interactions feel right on each platform.",
      },
      {
        q: "Does the design system work with Tailwind / our CSS framework?",
        a: "Yes. We export design tokens as JSON that map directly to Tailwind config, or any CSS custom-property setup your team uses.",
      },
      {
        q: "Do you run user research?",
        a: "Yes — on Professional and Enterprise tiers we run user interviews, card sorts, and moderated usability tests.",
      },
      {
        q: "Can you also build what you design?",
        a: "Absolutely — we pair UI/UX with our Web Development or SaaS Development team for end-to-end delivery from concept to production.",
      },
      {
        q: "What if we already have a brand identity?",
        a: "We work within your existing brand guidelines. If they need extending for a digital context, we'll document any additions as part of the design system.",
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 3. SAAS DEVELOPMENT
  // ─────────────────────────────────────────────
  {
    slug: "saas-development",
    title: "SaaS Development",
    icon: "Layers",
    blurb:
      "End-to-end SaaS builds — auth, billing, multi-tenancy, dashboards, and the boring infrastructure that makes them work.",
    overview:
      "We build production SaaS products from idea to first revenue. Authentication, role-based access control, multi-tenant data isolation, Stripe billing with dunning, admin dashboards, customer portals, and the CI/CD pipeline to keep it all shipping. We've done this enough times to avoid the expensive mistakes that plague first-time SaaS builds.",
    whoFor: [
      "Founders building a v1 SaaS and need to move fast without building a mess",
      "Teams replatforming a legacy SaaS onto a modern, maintainable stack",
      "Agencies productising a service into self-serve software",
      "Enterprises spinning out internal tools as commercial SaaS",
    ],
    problems: [
      "Auth, billing, and tenant isolation consuming months of engineering time",
      "No clear path from validated prototype to production-ready product",
      "Costly data modelling mistakes discovered too late to fix cheaply",
      "Customer dashboards that feel half-finished and increase churn",
    ],
    benefits: [
      {
        t: "Faster time to first revenue",
        d: "We've shipped dozens of SaaS — reusable patterns mean you skip the month of boilerplate and get straight to your differentiator.",
      },
      {
        t: "Multi-tenant done right from day one",
        d: "Row-level security, audit logs, and admin tooling built in, not bolted on when you're already at scale.",
      },
      {
        t: "Stripe billing that handles everything",
        d: "Subscriptions, metered usage, trials, proration, dunning, and customer self-serve portal — all wired up.",
      },
      {
        t: "Built for your team to own",
        d: "Documented codebase, CI/CD, and a one-week handoff sprint so your engineers can ship confidently from day one.",
      },
    ],
    deliverables: [
      "Architecture document and data model",
      "Auth system with RBAC and tenant isolation",
      "Customer dashboard and admin panel",
      "Stripe or Paddle billing integration",
      "REST or tRPC API with documentation",
      "CI/CD pipeline and observability setup",
    ],
    features: [
      "Multi-tenant architecture",
      "Auth & RBAC (with SSO/SAML on Enterprise)",
      "Stripe / Paddle billing",
      "Admin & customer dashboards",
      "API design & documentation",
      "Observability & logging",
    ],
    pricing: [
      {
        name: "MVP",
        price: "$900",
        desc: "Launch and validate your SaaS quickly.",
        items: [
          "Core feature set (3–5 features)",
          "Auth & user management",
          "Basic admin dashboard",
          "Stripe / Paystack integration",
          "Deployment setup",
          "30-day post-launch support",
        ],
      },
      {
        name: "Scale",
        price: "$2,500",
        desc: "Production-grade platform built to grow with you.",
        items: [
          "Full product scope (unlimited features)",
          "Multi-tenant architecture",
          "Admin & analytics dashboard",
          "Payment gateway + automated invoicing",
          "CI/CD pipeline & staging environment",
          "99.9% uptime SLA",
          "90-day support & bug-fix warranty",
        ],
        featured: true,
      },
      {
        name: "Custom",
        price: "Custom",
        desc: "Advanced SaaS architecture and enterprise systems.",
        items: [
          "Multi-tenant architecture",
          "CI/CD pipelines",
          "Dedicated infrastructure",
          "Advanced security",
          "Custom integrations",
        ],
      },
    ],
    process: [
      { step: "01", title: "Discovery", desc: "Use-case mapping, data model draft, and stack selection." },
      { step: "02", title: "Foundation", desc: "Auth, billing, and tenant isolation — the hard stuff first." },
      { step: "03", title: "Features", desc: "Core product features in two-week sprints with live demos." },
      { step: "04", title: "Beta", desc: "Private beta with real users, feedback loops, and fast iteration." },
      { step: "05", title: "Launch", desc: "Production hardening, observability, and team handoff." },
    ],
    faqs: [
      {
        q: "What tech stack do you use for SaaS?",
        a: "TypeScript end-to-end — React + TanStack Start or Next.js on the frontend, Node.js with tRPC or Hono on the backend, Postgres + Supabase for data, and Stripe for billing.",
      },
      {
        q: "Do you handle Stripe billing edge cases?",
        a: "Yes — subscriptions, usage-based, free trials, plan changes with proration, dunning sequences, and customer self-serve portals. We've shipped this setup over two dozen times.",
      },
      {
        q: "Can you scale this to enterprise customers?",
        a: "Yes — SSO/SAML, SCIM, audit logs, and SOC2-friendly architecture are available on the Enterprise tier.",
      },
      {
        q: "Who owns the IP and codebase?",
        a: "You do — always. The full repo, all infrastructure accounts, and every line of documentation transfers to you at handoff.",
      },
      {
        q: "What if we already have some of the app built?",
        a: "We do a codebase audit first, identify what can stay and what needs replacing, and slot our work in alongside yours.",
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 4. SEO
  // ─────────────────────────────────────────────
  {
    slug: "seo",
    title: "SEO",
    icon: "Search",
    blurb:
      "Technical SEO, content strategy, and link building backed by data — not guesswork.",
    overview:
      "We build durable organic growth engines — technical foundation, topical authority, and content that ranks AND converts. No spammy backlinks, no thin AI-generated articles, no vanity metrics. We report on revenue, leads, and pipeline, then show you exactly how SEO is contributing to each.",
    whoFor: [
      "B2B SaaS teams chasing high-intent search demand in a competitive category",
      "DTC brands fighting for category keywords against well-funded rivals",
      "Marketplaces that need to scale programmatic SEO across thousands of pages",
      "Teams whose organic traffic has flatlined or dropped after a core update",
    ],
    problems: [
      "Stuck on page 2–4 for money keywords while competitors own the first three results",
      "Crawl issues, duplicate content, or botched site migrations killing rankings",
      "Content that ranks but attracts the wrong visitors who never convert",
      "A backlink profile that hasn't grown in years and can't compete for authority",
    ],
    benefits: [
      {
        t: "Compounding organic traffic",
        d: "Organic search is the lowest-cost acquisition channel — once the flywheel is turning, it keeps building without a proportional increase in spend.",
      },
      {
        t: "Top-3 rankings on bottom-of-funnel queries",
        d: "We prioritise keywords where purchase intent is highest, so the traffic we bring in actually converts to revenue.",
      },
      {
        t: "A topical moat that's hard to copy",
        d: "Building genuine subject-matter authority takes 6–12 months — which means once you have it, competitors can't buy their way in.",
      },
      {
        t: "Honest, revenue-linked reporting",
        d: "No vanity impressions metrics. Every monthly report ties SEO activity directly to leads, pipeline, and assisted conversions.",
      },
    ],
    deliverables: [
      "Full 100+ point technical SEO audit and remediation roadmap",
      "Keyword universe mapped to buyer journey stages",
      "Monthly SEO content production (fully written, not briefed)",
      "Backlink outreach and digital PR campaign",
      "Live performance dashboard (rankings, traffic, conversions)",
      "Monthly strategy call with recorded Loom summary",
    ],
    features: [
      "Technical SEO audits",
      "Keyword & competitor research",
      "On-page optimisation",
      "Content production",
      "Backlink outreach",
      "Monthly reporting & strategy",
    ],
    pricing: [
      {
        name: "Starter",
        price: "$220/mo",
        desc: "Ideal for service businesses targeting a city or region.",
        items: [
          "Website SEO Audit",
          "Keyword Research",
          "On-Page SEO (5 pages)",
          "3 blog posts/month",
          "Titles, images & meta tags",
          "Monthly reports",
        ],
      },
      {
        name: "Growth",
        price: "$320/mo",
        desc: "Content + link-building to dominate your niche.",
        items: [
          "Website SEO Audit",
          "Keyword Research",
          "On-Page SEO (10 pages)",
          "5 blog posts/month",
          "Titles, images & meta tags",
          "Monthly reports",
          "GSC & Google Analytics Setup",
        ],
        featured: true,
      },
      {
        name: "Custom",
        price: "Custom",
        desc: "Full-stack SEO for large sites and multiple markets.",
        items: [
          "Website SEO Audit",
          "Keyword Research",
          "Backlinks Building",
          "On-Page SEO (custom volume)",
          "Off-Page SEO",
          "Custom blog post volume",
          "Titles, images & meta tags",
          "Monthly reports",
          "GSC & Google Analytics Setup",
        ],
      },
    ],
    process: [
      { step: "01", title: "Audit", desc: "Full technical audit and keyword universe mapping." },
      { step: "02", title: "Quick Wins", desc: "Remediate high-impact technical issues in weeks 1–4." },
      { step: "03", title: "Content", desc: "Publish topical content targeting buyer-journey keywords." },
      { step: "04", title: "Authority", desc: "Earn backlinks through digital PR and outreach campaigns." },
      { step: "05", title: "Compound", desc: "Monthly reviews to reallocate effort to highest-ROI activities." },
    ],
    faqs: [
      {
        q: "How long before I see results?",
        a: "Technical fixes typically show ranking improvements within 30–60 days. Content rankings compound from month 3 onward, with meaningful traffic gains by month 6.",
      },
      {
        q: "Do you write the content yourselves?",
        a: "Yes — senior writers with subject-matter expertise, reviewed by an SEO strategist. No bulk AI generation.",
      },
      {
        q: "How do you build backlinks?",
        a: "Ethically — digital PR, HARO responses, podcast appearances, and earned editorial placements. No PBNs, no paid links.",
      },
      {
        q: "Do you handle international and multi-language SEO?",
        a: "Yes, including hreflang implementation, multi-region content strategy, and local link building for each market.",
      },
      {
        q: "What if I had a penalty or traffic drop?",
        a: "We do a dedicated recovery audit first, identify the cause (algorithm update, manual action, or migration issue), and map a recovery plan before any retainer begins.",
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 5. AI SOLUTIONS
  // ─────────────────────────────────────────────
  {
    slug: "ai-solutions",
    title: "AI Solutions",
    icon: "Sparkles",
    blurb:
      "We design and ship AI features that actually move metrics — chatbots, RAG, automations, and internal copilots.",
    overview:
      "AI products that ship to real users — not just demos. We architect, build, and operate LLM-powered systems with proper evaluation pipelines, guardrails, cost controls, and monitoring. Whether you need a customer-facing chatbot, an internal knowledge assistant, or a complex multi-step agent, we treat AI like production software — because it is.",
    whoFor: [
      "Product teams adding AI features to an existing product and need it done properly",
      "Support and operations teams drowning in repetitive, high-volume work",
      "Founders building an AI-first product and need a senior technical partner",
      "Companies with proprietary data that's ready to power a RAG system",
    ],
    problems: [
      "Demos that look magical in a notebook but hallucinate in front of real users",
      "No eval pipeline — you find out about quality regressions from customer complaints",
      "LLM costs spiraling with no visibility into what's driving spend",
      "No senior AI engineers in-house to own the architecture long-term",
    ],
    benefits: [
      {
        t: "Production-grade from the start",
        d: "Evals, guardrails, cost controls, latency monitoring, and fallback logic built in from day one — not retrofitted after launch.",
      },
      {
        t: "Use cases that move real metrics",
        d: "We scope engagements to measurable outcomes — deflection rate, resolution time, hours saved — not novelty features.",
      },
      {
        t: "Vendor-flexible architecture",
        d: "OpenAI, Anthropic, Gemini, open-source — we benchmark per task and don't lock you into one provider.",
      },
      {
        t: "Knowledge transfer included",
        d: "Your team understands how every component works and can extend it confidently after handoff.",
      },
    ],
    deliverables: [
      "Use-case scoping and ROI estimate document",
      "Working prototype with evaluation suite",
      "Production deployment with monitoring",
      "Eval pipeline and guardrails",
      "Cost and latency dashboard",
      "Engineering documentation and runbook",
    ],
    features: [
      "RAG & vector search",
      "Custom AI agents",
      "Workflow automation",
      "LLM fine-tuning",
      "Voice & vision models",
      "Eval pipelines & guardrails",
    ],
    pricing: [
      {
        name: "Starter",
        price: "$400",
        desc: "Automate one key workflow or add a single AI feature.",
        items: [
          "1 AI workflow or chatbot",
          "OpenAI / Claude API integration",
          "Basic RAG pipeline (document Q&A)",
          "Slack or WhatsApp delivery channel",
          "Monthly usage & cost review",
        ],
      },
      {
        name: "Business",
        price: "$1,200",
        desc: "Multi-agent systems and internal AI tooling.",
        items: [
          "Up to 5 AI agents or automated tools",
          "Custom fine-tuning (where applicable)",
          "Document ingestion & vector search pipeline",
          "API + webhook integrations",
          "Internal admin dashboard",
          "Bi-weekly sync & roadmap planning",
        ],
        featured: true,
      },
      {
        name: "Enterprise",
        price: "Custom",
        desc: "AI at the core of your product or operations.",
        items: [
          "Unlimited agents & automation pipelines",
          "LLMOps & model performance monitoring",
          "Private cloud or on-premise deployment",
          "Data privacy & compliance layer",
          "SLA + dedicated AI engineer",
          "Weekly strategy & roadmap call",
        ],
      },
    ],
    process: [
      { step: "01", title: "Scope", desc: "Map use cases, expected ROI, and data availability." },
      { step: "02", title: "Prototype", desc: "Working proof-of-concept with initial eval suite." },
      { step: "03", title: "Production", desc: "Integration, guardrails, monitoring, and cost controls." },
      { step: "04", title: "Evaluate", desc: "Systematic quality checks before and after every model update." },
      { step: "05", title: "Improve", desc: "Fine-tune, swap models, and expand to new use cases." },
    ],
    faqs: [
      {
        q: "Which models do you use?",
        a: "Whatever fits the use case — GPT-4o, Claude, Gemini, Llama 3, or a fine-tuned open-source model. We benchmark per task and give you the honest recommendation.",
      },
      {
        q: "Who owns the IP — code, prompts, and fine-tuned weights?",
        a: "You do. Everything transfers to you at handoff. We sign NDAs before discovery.",
      },
      {
        q: "Can you work with our private data securely?",
        a: "Yes — we sign NDAs and BAAs, support deployment in your own VPC, and can use self-hosted models where data residency requires it.",
      },
      {
        q: "Do you offer ongoing model maintenance?",
        a: "Yes — model updates, eval drift monitoring, and cost optimisation are available on a monthly retainer post-launch.",
      },
      {
        q: "What does a RAG system actually cost to run?",
        a: "Highly variable, but we'll give you a realistic cost estimate as part of the scoping document — including a breakdown by embedding, inference, and storage.",
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 6. SOCIAL MEDIA & ADS
  // ─────────────────────────────────────────────
  {
    slug: "social-and-ads",
    title: "Social Media & Ad Management",
    icon: "MessageCircle",
    blurb:
      "Founder-led content, community management, and full-funnel paid media on Meta, Google, TikTok, and LinkedIn — under one team.",
    overview:
      "One senior team running your organic social and paid media end-to-end strategy, creative production, scheduling, community management, attribution, and reporting. No more finger-pointing between your ad agency and your social agency. Organic builds your audience and demand, paid captures and converts it one coherent strategy.",
    whoFor: [
      "DTC brands that need a constant drum of short-form content alongside paid scale",
      "Founders building a personal brand that feeds their company's pipeline",
      "B2B teams running both LinkedIn thought leadership and paid demand-gen simultaneously",
      "Companies tired of coordinating separate ad and social agencies with no unified view",
    ],
    problems: [
      "ROAS declining while organic engagement is also falling — a double squeeze",
      "Creative fatigue hitting both organic feed posts and paid ad sets at the same time",
      "iOS 17+ and cookie deprecation making attribution murky and decisions hard",
      "No single team owning the full funnel from first impression to conversion",
    ],
    benefits: [
      {
        t: "Full-funnel ownership under one roof",
        d: "Organic builds awareness and warm audiences, paid captures and retargets them — one strategy, one team, one P&L.",
      },
      {
        t: "Operators who've done it at scale",
        d: "Our strategists have managed $10M+ in paid spend and grown 200k+ audiences — not account managers reading from a playbook.",
      },
      {
        t: "A weekly creative engine",
        d: "Fresh graphics, captions, and short-form video dropping every week — enough to fuel both your organic feed and paid creative testing.",
      },
      {
        t: "Transparent dashboards, not PDF reports",
        d: "Live Looker Studio dashboards, weekly Loom summaries, and direct Slack access to your account lead.",
      },
    ],
    deliverables: [
      "Content strategy and paid media plan document",
      "Monthly content calendar (all platforms)",
      "Graphics, captions, and short-form video production",
      "Campaign builds across Meta, Google, TikTok, and LinkedIn",
      "Creative production (static, carousel, and UGC video)",
      "Attribution setup and analytics dashboard",
      "Community management and inbox responses",
      "Bi-weekly strategy call with performance review",
    ],
    features: [
      "Content strategy & calendars",
      "Short-form video production",
      "Community management",
      "Paid ads (Meta, Google, TikTok, LinkedIn)",
      "Creative production (static + UGC)",
      "Attribution dashboards",
    ],
    pricing: [
      {
        name: "Starter",
        price: "$150/mo",
        desc: "Get your brand presence established on key platforms.",
        items: [
          "1 social platform managed",
          "10 posts per month",
          "Account setup & optimisation",
          "Content creation",
          "Basic graphics design",
          "Community management",
          "Monthly analytics report",
        ],
      },
      {
        name: "Professional",
        price: "$250/mo",
        desc: "Active growth through content and paid campaigns.",
        items: [
          "2 social platforms managed",
          "15 posts per month",
          "Account setup & optimisation",
          "Premium content creation",
          "Custom graphics & videos",
          "Community management",
          "Hashtag strategy",
          "Detailed analytics & insights",
        ],
        featured: true,
      },
      {
        name: "Enterprise",
        price: "$350/mo",
        desc: "Full-funnel paid media and social management.",
        items: [
          "3–4 social platforms managed",
          "Daily posts (30+ per month)",
          "Premium content creation",
          "Custom graphics & videos",
          "Story management (daily)",
          "24/7 community management",
          "Advanced paid ads campaigns",
          "Dedicated account manager",
        ],
      },
    ],
    process: [
      { step: "01", title: "Audit", desc: "Review existing accounts, ads, creatives, and attribution setup." },
      { step: "02", title: "Strategy", desc: "Content pillars, audience mapping, and campaign architecture." },
      { step: "03", title: "Produce", desc: "First content batch and campaign builds ready before go-live." },
      { step: "04", title: "Publish", desc: "Launch with scheduled posting and live ad campaigns." },
      { step: "05", title: "Optimise", desc: "Weekly creative and bid optimisation based on live performance." },
    ],
    faqs: [
      {
        q: "Which platforms do you cover?",
        a: "Organic: LinkedIn, X (Twitter), Instagram, TikTok, YouTube Shorts, Threads, Facebook. Paid: Meta, Google, TikTok, LinkedIn, YouTube, Pinterest, Reddit.",
      },
      {
        q: "Do you produce creative in-house?",
        a: "Yes — in-house designers and video editors, plus a UGC partner network for authentic creator content. Weekly creative drops.",
      },
      {
        q: "What's the minimum ad spend you work with?",
        a: "We work best with $5k+/month in managed paid spend. Below that threshold, we'd recommend starting with organic to build audiences before paying to amplify.",
      },
      {
        q: "Do we own our ad accounts and social pages?",
        a: "Always. We work as a team member in your accounts — you own everything and can remove access at any time.",
      },
      {
        q: "How do you handle attribution after iOS 17?",
        a: "Server-side conversion APIs, first-party data strategies, and mixed-media modelling. We'll set it up properly and show you what we can and can't measure confidently.",
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 7. SHOPIFY STORE DESIGN
  // ─────────────────────────────────────────────
  {
    slug: "shopify-store-design",
    title: "Shopify Store Design",
    icon: "ShoppingBag",
    blurb:
      "Custom Shopify themes, app integrations, and CRO — we design stores that sell.",
    overview:
      "We design and build Shopify stores that convert — custom themes, fast product pages, app integrations, and ongoing CRO. From a theme customisation to a full headless Hydrogen build. Every decision is made against one question: does this help someone buy faster or with more confidence?",
    whoFor: [
      "DTC brands launching or replatforming to Shopify for the first time",
      "Existing stores stuck on a stock theme that looks generic and doesn't convert",
      "Brands migrating from WooCommerce, BigCommerce, or Magento",
      "Shopify Plus merchants ready for a headless, high-performance storefront",
    ],
    problems: [
      "Store conversion rate stuck under 2% with no clear idea why",
      "Slow mobile page loads killing the ROI on paid traffic",
      "Product pages that look identical to every other Shopify store",
      "Marketing team can't ship landing pages without blocking engineering",
    ],
    benefits: [
      {
        t: "Conversion-first, always",
        d: "Every section, layout choice, and CTA placement is justified by its impact on add-to-cart rate, AOV, or checkout completion.",
      },
      {
        t: "Mobile LCP under 1.5 seconds",
        d: "Even with high-resolution product photography, our stores load fast on mobile — protecting your paid traffic ROI.",
      },
      {
        t: "Marketer-friendly section architecture",
        d: "Section-based page builder logic means your team can create, test, and ship landing pages without touching code.",
      },
      {
        t: "Built to scale with your business",
        d: "Subscriptions, bundles, loyalty, multi-currency, multi-region, and headless — all scoped and executed when you need them.",
      },
    ],
    deliverables: [
      "Custom theme design in Figma (all templates)",
      "Built Shopify theme or Hydrogen storefront",
      "App integrations (reviews, subscriptions, loyalty, upsells)",
      "Platform migration from previous store",
      "CRO testing setup (A/B testing infrastructure)",
      "Theme documentation and marketing team training",
    ],
    features: [
      "Custom Shopify theme design",
      "App integrations",
      "Platform migrations",
      "CRO & A/B testing",
      "Subscriptions & memberships",
      "Headless commerce (Hydrogen)",
    ],
    pricing: [
      {
        name: "Theme",
        price: "$3,900",
        desc: "Premium theme customisation — your brand on a solid Shopify foundation.",
        items: [
          "Brand-aligned theme redesign",
          "Up to 8 page templates",
          "App integration (up to 3)",
          "Mobile performance optimisation",
          "3-week delivery",
        ],
      },
      {
        name: "Custom",
        price: "$9,800",
        desc: "Fully custom Shopify build — design, development, and migration included.",
        items: [
          "Bespoke design (Figma + build)",
          "All page templates",
          "App integrations (up to 6)",
          "Platform migration",
          "CRO testing setup",
          "5–7 week delivery",
        ],
        featured: true,
      },
      {
        name: "Plus",
        price: "Custom",
        desc: "Shopify Plus stores, headless Hydrogen, and multi-region builds.",
        items: [
          "Hydrogen / headless storefront",
          "Multi-region and multi-currency",
          "Custom checkout extensions",
          "Dedicated team + SLA",
          "Ongoing CRO retainer option",
        ],
      },
    ],
    process: [
      { step: "01", title: "CRO Audit", desc: "Review existing store analytics and identify the biggest conversion leaks." },
      { step: "02", title: "Design", desc: "Custom Figma designs for homepage, PDP, collection, cart, and checkout." },
      { step: "03", title: "Build", desc: "Theme or Hydrogen build with app integrations and migration." },
      { step: "04", title: "QA", desc: "Cross-device testing, payment flow checks, and performance audit." },
      { step: "05", title: "CRO", desc: "Post-launch A/B tests to compound the gains month over month." },
    ],
    faqs: [
      {
        q: "Do you migrate stores from other platforms?",
        a: "Yes — we've done dozens of migrations from WooCommerce, BigCommerce, Magento, and Squarespace, including products, customers, orders, and redirect mapping.",
      },
      {
        q: "Is headless Shopify worth it for us?",
        a: "Honestly, it depends on your stage and traffic. We'll tell you upfront if the performance and flexibility gains justify the cost and complexity for your specific situation.",
      },
      {
        q: "Which Shopify apps do you recommend?",
        a: "We default to a lean app stack: Klaviyo, Judge.me, Recharge (subscriptions), and Shopify-native features. We avoid bloating the store with apps that slow it down.",
      },
      {
        q: "Do you run CRO after launch?",
        a: "Yes — many clients move onto a monthly CRO retainer where we test PDP layouts, cart flows, checkout steps, and bundle offers systematically.",
      },
      {
        q: "Can you integrate with our ERP or fulfilment software?",
        a: "Yes — we've connected Shopify to NetSuite, ShipBob, Linnworks, and custom fulfilment APIs. Scope depends on the systems involved.",
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 8. WEBSITE MAINTENANCE & SUPPORT
  // ─────────────────────────────────────────────
  {
    slug: "website-maintenance",
    title: "Website Maintenance & Support",
    icon: "Wrench",
    blurb:
      "Ongoing maintenance, security patches, content updates, performance tuning, and on-call support — for any web stack.",
    overview:
      "A senior team on retainer for all the work that keeps a live website healthy: bug fixes, content updates, security patches, plugin and dependency updates, performance audits, and emergency response when something breaks. We cover any stack — WordPress, Shopify, Webflow, or custom React — and most tickets are resolved same business day.",
    whoFor: [
      "Companies whose dev agency disappeared after launch and left no documentation",
      "Marketing teams who have a website but no in-house developer to maintain it",
      "Founders who want a reliable technical partner for ongoing site issues",
      "Businesses running WordPress, Shopify, Webflow, or custom builds that need regular care",
    ],
    problems: [
      "Page speed and SEO rankings declining because nobody's fixing performance issues",
      "Security vulnerabilities, outdated plugins, and missing patches creating risk",
      "A growing backlog of small fixes that nobody is assigned to own",
      "The site crashing on a traffic spike with no one to call",
    ],
    benefits: [
      {
        t: "Same-day resolution on most tickets",
        d: "We don't queue maintenance tickets for weeks — the majority of bugs and updates are resolved within one business day.",
      },
      {
        t: "Senior engineers on every plan",
        d: "Not outsourced interns — actual web engineers familiar with your specific stack handle every ticket.",
      },
      {
        t: "Proactive monitoring you don't have to think about",
        d: "Uptime monitoring, Core Web Vitals tracking, and security scanning running in the background before something becomes a crisis.",
      },
      {
        t: "Flat monthly cost, no surprises",
        d: "You know exactly what you're paying. Hours roll over if unused, so you never lose value in a slow month.",
      },
    ],
    deliverables: [
      "Monthly uptime, performance, and security report",
      "Security patches and dependency updates",
      "Content updates (copy, images, new pages)",
      "Bug fixes and minor feature additions",
      "Quarterly Core Web Vitals audit",
      "Emergency on-call support access",
    ],
    features: [
      "WordPress / Shopify / Webflow",
      "Custom React, Next.js, Vue",
      "Performance tuning",
      "Security patches & backups",
      "Uptime monitoring",
      "Same-day support",
    ],
    pricing: [
      {
        name: "Starter",
        price: "$390/mo",
        desc: "Up to 4 hours per month — content and small fixes covered.",
        items: [
          "Up to 4 hours/month (rolls over 1 month)",
          "Content updates (copy, images)",
          "Bug fixes",
          "Security patch notifications",
          "Email support (4hr response)",
        ],
      },
      {
        name: "Professional",
        price: "$1,200/mo",
        desc: "Up to 12 hours per month — everything in Starter plus proactive care.",
        items: [
          "Up to 12 hours/month (rolls over 1 month)",
          "Uptime + performance monitoring",
          "Quarterly Core Web Vitals audit",
          "Dependency and plugin updates",
          "Slack direct support (1hr response)",
          "Monthly report",
        ],
        featured: true,
      },
      {
        name: "Enterprise",
        price: "$3,400/mo",
        desc: "Up to 40 hours per month — dedicated engineer, on-call access.",
        items: [
          "Up to 40 hours/month",
          "Dedicated senior engineer",
          "On-call emergency response (30 min)",
          "Quarterly technology roadmap",
          "Priority Slack + phone support",
          "Monthly strategy review",
        ],
      },
    ],
    process: [
      { step: "01", title: "Onboarding", desc: "Full site audit, access transfer, and documentation of your stack." },
      { step: "02", title: "Baseline", desc: "Security scan, performance audit, and dependency review." },
      { step: "03", title: "Monitor", desc: "Uptime, performance, and security alerts running 24/7." },
      { step: "04", title: "Maintain", desc: "Monthly tasks: patches, updates, content, and fixes." },
      { step: "05", title: "Report", desc: "Monthly report with metrics, work completed, and next priorities." },
    ],
    faqs: [
      {
        q: "Do unused hours roll over?",
        a: "Yes — up to one full month. So if you have a quiet month, you carry forward those hours without losing them.",
      },
      {
        q: "What are your response time commitments?",
        a: "Starter: email with a 4-hour business response. Professional: Slack with a 1-hour response. Enterprise: Slack/phone with a 30-minute emergency response.",
      },
      {
        q: "Can you take over maintenance from another agency?",
        a: "Yes — our onboarding sprint includes a full audit, credential transfer, documentation, and a fix list for anything we find. We've done this dozens of times.",
      },
      {
        q: "What stacks do you support?",
        a: "WordPress (including WooCommerce), Shopify, Webflow, Wix, Squarespace, and any custom React, Next.js, or Vue application.",
      },
      {
        q: "Do you take on sites built by other agencies?",
        a: "Yes — as long as the code is reasonable, we'll maintain it. If it needs a refactor, we'll tell you before starting.",
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 9. BACKEND & API DEVELOPMENT
  // ─────────────────────────────────────────────
  {
    slug: "backend-api-development",
    title: "Backend & API Development",
    icon: "Server",
    blurb:
      "REST + GraphQL APIs, third-party integrations, data pipelines, and serverless infrastructure — built for scale.",
    overview:
      "We design and ship the backends that power web, mobile, and AI products. Typed APIs, relational and NoSQL databases, message queues, third-party integrations, and the observability stack to keep everything running. Clean architecture that your team can extend, not a black box that only we understand.",
    whoFor: [
      "Mobile teams who need a production-grade API to power their iOS or Android app",
      "Frontend teams blocked on features because backend work isn't moving",
      "Companies integrating CRM, ERP, or payment systems and need it done reliably",
      "Engineering teams migrating from a monolith to a service-oriented architecture",
    ],
    problems: [
      "Slow, inconsistent, or completely undocumented APIs blocking every other team",
      "Third-party integrations that break with every API version change",
      "No observability — you find out the API is down from a customer tweet",
      "Unexpected traffic spikes causing failures with no scaling strategy in place",
    ],
    benefits: [
      {
        t: "APIs your frontend team can trust",
        d: "Typed, versioned, documented with OpenAPI, and tested. No more guessing what a field returns.",
      },
      {
        t: "Integrations built to handle failure",
        d: "Idempotency, retries, webhook signature verification, and graceful degradation — built in from the start.",
      },
      {
        t: "Observable from day one",
        d: "Structured logs, metrics, and distributed tracing wired up before launch. You'll know about problems before your users do.",
      },
      {
        t: "Right-sized infrastructure",
        d: "We don't default to over-engineered Kubernetes clusters. We pick the simplest infrastructure that handles your actual load and budget.",
      },
    ],
    deliverables: [
      "API design document and OpenAPI specification",
      "Database schema, ERD, and migration scripts",
      "Auth system with rate limiting and API key management",
      "Third-party integration implementations",
      "Observability setup (logging, metrics, tracing)",
      "CI/CD pipeline and deployment documentation",
    ],
    features: [
      "REST & GraphQL APIs",
      "Node.js, Python, Go",
      "Postgres, MongoDB, Redis",
      "Stripe, HubSpot, Salesforce integrations",
      "Serverless & containerised deployment",
      "OpenAPI documentation",
    ],
    pricing: [
      {
        name: "Starter",
        price: "$3,200",
        desc: "A single API or third-party integration, delivered in two weeks.",
        items: [
          "Up to 10 API endpoints",
          "Auth + rate limiting",
          "OpenAPI documentation",
          "Basic observability",
          "2-week delivery",
        ],
      },
      {
        name: "Professional",
        price: "$9,800",
        desc: "Full production backend or integration suite — built and handed off.",
        items: [
          "Full REST or GraphQL API",
          "Database design + migrations",
          "Third-party integrations (up to 4)",
          "Full observability stack",
          "CI/CD pipeline",
          "4–6 week delivery",
        ],
        featured: true,
      },
      {
        name: "Enterprise",
        price: "Custom",
        desc: "Platforms, data infrastructure, and microservices.",
        items: [
          "Microservices or event-driven architecture",
          "Data pipelines and ETL",
          "Dedicated engineering team",
          "SLA and guaranteed response time",
          "12+ weeks with retainer option",
        ],
      },
    ],
    process: [
      { step: "01", title: "API Design", desc: "Define resources, authentication patterns, and data contracts before writing code." },
      { step: "02", title: "Schema", desc: "Database design, indexing strategy, and migration plan." },
      { step: "03", title: "Build", desc: "Endpoints, integrations, and business logic in two-week sprints." },
      { step: "04", title: "Harden", desc: "Auth, rate limiting, error handling, and load testing." },
      { step: "05", title: "Deploy", desc: "Production deployment, observability wired up, and full documentation." },
    ],
    faqs: [
      {
        q: "Which languages and frameworks do you use?",
        a: "TypeScript + Node.js by default with tRPC or Hono. Python for AI/data pipelines. Go for high-throughput, latency-sensitive services.",
      },
      {
        q: "Do you handle database design as well?",
        a: "Yes — schema design, index optimisation, migration scripts, and query performance tuning. We use Postgres as our default, but also work with MongoDB, MySQL, and Redis.",
      },
      {
        q: "Can you integrate with our existing CRM or ERP?",
        a: "Yes — we've built integrations with Salesforce, HubSpot, NetSuite, SAP, and numerous industry-specific platforms. Scope depends on the API quality of the target system.",
      },
      {
        q: "Will you work in our existing codebase?",
        a: "Yes — we work in your repos, follow your conventions, and write code your team can own. No parallel repositories or black-box services.",
      },
      {
        q: "Do you offer ongoing support after the project?",
        a: "Yes — most clients move onto our Website Maintenance & Support retainer for ongoing fixes, dependency updates, and performance tuning.",
      },
    ],
  },
];