export type Project = {
  slug: string;
  title: string;
  category: string;
  tag: string;
  desc: string;
  color: string;
  images?: string[];
  image?: string;
  client?: string;
  year?: string;
  tech: string[];
  // results: { label: string; value: string }[];
  live?: string;
  serviceSlug?: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "northwind-saas",
    title: "Northwind SaaS",
    category: "Web App",
    tag: "SaaS",
    desc: "B2B analytics platform with realtime dashboards.",
    color: "from-cyan-500/30 to-violet-500/30",
    client: "Northwind Logistics",
    year: "2026",
    tech: ["TanStack Start", "TypeScript", "PostgreSQL", "Supabase", "Tailwind"],
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&q=80",
    ],
 
    live: "https://northwind.example.com",
    serviceSlug: "web-development",
  },
  {
    slug: "lumen-shopify",
    title: "Lumen Skincare",
    category: "Shopify",
    tag: "DTC",
    desc: "Headless Shopify rebuild — +38% conversion.",
    color: "from-emerald-500/30 to-cyan-500/30",
    client: "Lumen Skincare",
    year: "2025",
    tech: ["Shopify Hydrogen", "React", "Klaviyo", "Sanity"],
    images: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1200&q=80",
      "https://images.unsplash.com/photo-1522335789203-aaa2f7a8c7e8?w=1200&q=80",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&q=80",
    ],

    live: "https://lumen.example.com",
    serviceSlug: "shopify-store-design",
  },
  {
    slug: "atlas-ai",
    title: "Atlas AI Copilot",
    category: "AI Solutions",
    tag: "AI",
    desc: "RAG-powered support copilot for fintech.",
    color: "from-violet-500/30 to-fuchsia-500/30",
    client: "Atlas Finance",
    year: "2026",
    tech: ["OpenAI", "pgvector", "Node.js", "LangChain"],
    images: [
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&q=80",
      "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=1200&q=80",
    ],

    serviceSlug: "ai-solutions",
  },
  {
    slug: "orbit-ads",
    title: "Orbit Ads Engine",
    category: "Ads",
    tag: "Performance",
    desc: "Multi-platform attribution dashboard.",
    color: "from-orange-500/30 to-rose-500/30",
    client: "Orbit Apparel",
    year: "2025",
    tech: ["Meta Ads", "Google Ads", "GA4", "BigQuery"],
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
      "https://images.unsplash.com/photo-1483181957632-8bda974cbc91?w=1200&q=80",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80",
    ],

    serviceSlug: "social-and-ads",
  },
  {
    slug: "vector-seo",
    title: "Vector SEO Push",
    category: "SEO",
    tag: "Growth",
    desc: "8x organic traffic in 7 months.",
    color: "from-cyan-500/30 to-blue-500/30",
    client: "Vector Tools",
    year: "2026",
    tech: ["Ahrefs", "Screaming Frog", "Notion", "Webflow"],
    images: [
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=1200&q=80",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&q=80",
      "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1200&q=80",
    ],
 
    serviceSlug: "seo",
  },
  {
    slug: "pulse-social",
    title: "Pulse Social",
    category: "Social",
    tag: "Brand",
    desc: "Founder-led content engine — 200k followers.",
    color: "from-fuchsia-500/30 to-violet-500/30",
    client: "Pulse Health",
    year: "2025",
    tech: ["LinkedIn", "X", "TikTok", "CapCut", "Notion"],
    images: [
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&q=80",
      "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1200&q=80",
      "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=1200&q=80",
    ],

    serviceSlug: "social-and-ads",
  },
];

export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  industry: string;
  result: string;
  duration: string;
  tags: string[];
  overview: string;
  problem: string;
  solution: string;
  process: { step: string; title: string; desc: string }[];
  results: { label: string; value: string }[];
  color: string;
  image?: string;
};

export const SITE = {
  name: "Globe Stack",
  url: "https://globestack.com",
  email: "hello@globestack.io",
  phone: "+234xxxxxxxxx",
  description:
    "Senior-only digital agency building web, AI, SEO and growth systems.",
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "lumen-skincare-shopify",
    title: "How Lumen 2.6x'd revenue with a headless Shopify rebuild",
    client: "Lumen Skincare",
    industry: "DTC Beauty",
    result: "+260% revenue",
    duration: "5 months",
    tags: ["Shopify", "CRO", "Web Dev"],
    color: "from-emerald-500/30 to-cyan-500/30",
    overview: "Lumen had outgrown its theme-based Shopify store. Slow load times and a clunky PDP were leaving money on the table during peak season.",
    problem: "Mobile LCP > 4.2s, conversion stuck at 1.4%, and the merchandising team couldn't ship landing pages without a developer.",
    solution: "We rebuilt the storefront on Shopify Hydrogen with a Sanity CMS, redesigned the PDP for above-the-fold buying, and shipped a CRO testing program.",
    process: [
      { step: "01", title: "Audit", desc: "Funnel teardown, Lighthouse, session replays, and a competitor benchmark." },
      { step: "02", title: "Design", desc: "New PDP, cart drawer, and editorial collection pages." },
      { step: "03", title: "Build", desc: "Headless Hydrogen storefront with Sanity CMS and Klaviyo." },
      { step: "04", title: "Optimize", desc: "Weekly A/B tests on PDP, cart, and checkout copy." },
    ],
    results: [
      { label: "Revenue", value: "2.6x" },
      { label: "Conversion rate", value: "+38%" },
      { label: "Mobile LCP", value: "1.1s" },
      { label: "AOV", value: "+22%" },
    ],
  },
  {
    slug: "atlas-ai-support-copilot",
    title: "Cutting fintech support tickets 47% with a RAG copilot",
    client: "Atlas Finance",
    industry: "Fintech",
    result: "-47% tickets",
    duration: "8 weeks",
    tags: ["AI", "RAG"],
    color: "from-violet-500/30 to-fuchsia-500/30",
    overview: "Atlas's support team was buried in repetitive tickets. They wanted an AI copilot that could resolve common issues without sounding like a chatbot.",
    problem: "12k monthly tickets, 60% repetitive, and an offshore team scaling linearly with growth.",
    solution: "A RAG copilot trained on internal docs and historical tickets, deployed in-app and as an agent assist tool.",
    process: [
      { step: "01", title: "Discovery", desc: "Ticket clustering and content gap analysis." },
      { step: "02", title: "Prototype", desc: "RAG pipeline with pgvector and OpenAI." },
      { step: "03", title: "Evals", desc: "Built an eval suite with 400+ golden questions." },
      { step: "04", title: "Ship", desc: "Phased rollout with guardrails and human handoff." },
    ],
    results: [
      { label: "Tickets", value: "-47%" },
      { label: "First response", value: "<5s" },
      { label: "CSAT", value: "+19%" },
      { label: "Cost / ticket", value: "-71%" },
    ],
  },
  {
    slug: "vector-seo-organic-growth",
    title: "From page 4 to position 1: 8x organic traffic for Vector",
    client: "Vector Tools",
    industry: "Dev Tools",
    result: "8x organic",
    duration: "7 months",
    tags: ["SEO", "Content"],
    color: "from-cyan-500/30 to-blue-500/30",
    overview: "Vector had a great product and zero organic presence. We built a content engine targeting high-intent dev queries.",
    problem: "Brand-only traffic, no rankings on money keywords, and a fragmented content stack.",
    solution: "Topical authority strategy: pillar + cluster content, technical SEO fixes, and a backlink campaign.",
    process: [
      { step: "01", title: "Audit", desc: "Tech audit + keyword universe mapping." },
      { step: "02", title: "Build", desc: "Migrated to a fast Webflow setup, fixed crawl issues." },
      { step: "03", title: "Publish", desc: "10 articles/mo from senior dev writers." },
      { step: "04", title: "Earn links", desc: "Outreach + digital PR." },
    ],
    results: [
      { label: "Organic sessions", value: "8x" },
      { label: "Top-3 keywords", value: "182" },
      { label: "MRR from SEO", value: "+$74k" },
      { label: "DR", value: "+18" },
    ],
  },
  {
    slug: "orbit-ads-roas",
    title: "Scaling Orbit's ad spend to $400k/mo at 4.2 ROAS",
    client: "Orbit Apparel",
    industry: "Apparel",
    result: "4.2x ROAS",
    duration: "Ongoing",
    tags: ["Ads", "Meta", "Google"],
    color: "from-orange-500/30 to-rose-500/30",
    overview: "Orbit needed to scale from $40k/mo to $400k/mo without crashing ROAS.",
    problem: "Creative fatigue, attribution gaps, and over-reliance on one platform.",
    solution: "Full-funnel media plan across Meta, Google, and TikTok, plus a creative production pipeline.",
    process: [
      { step: "01", title: "Audit", desc: "Account teardown + attribution model." },
      { step: "02", title: "Creative", desc: "Weekly creative sprints with UGC partners." },
      { step: "03", title: "Scale", desc: "Tiered campaign structure across platforms." },
      { step: "04", title: "Iterate", desc: "Bi-weekly optimization & MMM checks." },
    ],
    results: [
      { label: "Spend", value: "$400k/mo" },
      { label: "ROAS", value: "4.2x" },
      { label: "CAC", value: "-31%" },
      { label: "New customers", value: "+5.8x" },
    ],
  },
];

export const POSTS = [
  { slug: "modern-seo-2026", title: "Modern SEO in 2026: AI search, EEAT, and what still works", excerpt: "How to rank when half your traffic comes from LLM citations.", date: "May 2, 2026", read: "8 min", tag: "SEO" },
  { slug: "rag-in-production", title: "Shipping RAG to production without losing your mind", excerpt: "A pragmatic guide to embeddings, evals, and guardrails.", date: "Apr 21, 2026", read: "12 min", tag: "AI" },
  { slug: "shopify-headless-roi", title: "Is headless Shopify worth it? A real ROI breakdown", excerpt: "We rebuilt 6 stores headless. Here's what we learned.", date: "Apr 8, 2026", read: "9 min", tag: "Shopify" },
  { slug: "core-web-vitals-2026", title: "Core Web Vitals in 2026: INP is now your boss", excerpt: "What changed, what to measure, and how to fix it.", date: "Mar 30, 2026", read: "6 min", tag: "Web Dev" },
  { slug: "meta-ads-creative", title: "Meta ads creative testing framework that actually scales", excerpt: "A repeatable system for shipping winning creatives.", date: "Mar 14, 2026", read: "7 min", tag: "Ads" },
  { slug: "social-content-engine", title: "Build a founder-led content engine in 30 days", excerpt: "The exact process we use with our clients.", date: "Mar 1, 2026", read: "10 min", tag: "Social" },
];

export const TESTIMONIALS = [
  { name: "Maya Chen", role: "CEO, Lumen Skincare", quote: "Globe Stack rebuilt our Shopify store and our revenue 2.6x'd in 5 months. They feel like an in-house team.", avatar: "MC" },
  { name: "Daniel Park", role: "VP Eng, Atlas Finance", quote: "Their AI team shipped a production RAG copilot in 8 weeks. Support tickets dropped 47%. Insane.", avatar: "DP" },
  { name: "Priya Sharma", role: "Founder, Vector Tools", quote: "We went from invisible to ranking #1 on our money keywords. Their SEO process is unreal.", avatar: "PS" },
  { name: "Marcus Webb", role: "CMO, Orbit Apparel", quote: "Best ad agency we've worked with — and we've worked with five. 4.2 ROAS at $400k/mo.", avatar: "MW" },
];

export const STACK = [
  "TypeScript", "React", "Next.js", "TanStack", "Node.js", "Python",
  "PostgreSQL", "Supabase", "Cloudflare", "Vercel", "OpenAI", "Anthropic",
  "Shopify", "Hydrogen", "Tailwind", "Figma", "GA4", "Meta Ads",
];

export const FAQ = [
  { q: "How fast can we get started?", a: "Most engagements kick off within 5 business days. Discovery call → proposal → kickoff." },
  { q: "Do you work with early-stage startups?", a: "Yes — we have a dedicated track for funded startups including discounted Pilot pricing." },
  { q: "Where is your team based?", a: "Distributed across North America, Europe, and Asia. Async-first, with overlap hours for every client." },
  { q: "Do you offer fixed-price or retainer?", a: "Both. Builds are usually fixed-scope; ongoing services (SEO, Ads, Social) are monthly retainers." },
  { q: "What stack do you use?", a: "We're stack-agnostic but lean React/TypeScript for web, Python/Node for AI, and Shopify for commerce." },
  { q: "Do you sign NDAs?", a: "Always. Mutual NDA is standard before any discovery call with confidential material." },
];

export const PROCESS = [
  { step: "01", title: "Discover", desc: "Deep-dive into your goals, users, and constraints." },
  { step: "02", title: "Design", desc: "Strategy, architecture, and UX before a line of code." },
  { step: "03", title: "Build", desc: "Tight 1–2 week sprints with weekly demos." },
  { step: "04", title: "Launch", desc: "QA, perf, SEO, analytics — then we ship." },
  { step: "05", title: "Grow", desc: "Optimize, iterate, and scale post-launch." },
];

export type CompanyStory = {
  year: string;
  title: string;
  desc: string;
  img: string;
  detail: string;
};

export const COMPANY_STORIES: CompanyStory[] = [
  {
    year: "2022",
    title: "The Beginning",
    desc: "Globe Stack was founded with a single mission: build senior-only digital teams that deliver real outcomes.",
    img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80",
    detail: "Two engineers and a designer left an agency to build something better. We took on our first three clients — a SaaS startup, a DTC brand, and a fintech company. All three are still with us today.",
  },
  {
    year: "2023",
    title: "Breaking Through",
    desc: "We doubled our team and tripled our client roster, shipping over 60 projects across 4 disciplines.",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80",
    detail: "Added AI & ML capabilities as generative AI hit the mainstream. Launched our Shopify practice and became a Shopify Plus partner. Our first $1M ARR client engagement.",
  },
  {
    year: "2024",
    title: "Going Global",
    desc: "Expanded to serve clients across 18 countries with team members on 3 continents.",
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80",
    detail: "Launched our growth practice — ads, SEO, and social — becoming a true full-stack studio. Shipped 120+ projects. Maintained a 4.9/5 client satisfaction score across all engagements.",
  },
  {
    year: "2025",
    title: "The Inflection",
    desc: "300+ projects shipped. Our AI division became our fastest-growing practice.",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
    detail: "Production RAG systems, LLM evals, and AI-native product builds. Helped clients cut costs and grow revenue simultaneously. Named a top agency by multiple industry publications.",
  },
  {
    year: "2026",
    title: "Today",
    desc: "A senior-only studio running the full stack for ambitious brands worldwide.",
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80",
    detail: "We're still small by design, deliberate about the clients we take on, and focused entirely on outcomes. Every engagement is run by people who've been in the trenches. No fluff, no junior hand-offs, no excuses.",
  },
];

export const PROJECT_IMAGES: Record<string, string> = {
  "northwind-saas": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
  "lumen-shopify": "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1200&q=80",
  "atlas-ai": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
  "orbit-ads": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
  "vector-seo": "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=1200&q=80",
  "pulse-social": "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&q=80",
};

export const CASE_IMAGES: Record<string, string> = {
  "lumen-skincare-shopify": "https://images.unsplash.com/photo-1522335789203-aaa2f7a8c7e8?w=1200&q=80",
  "atlas-ai-support-copilot": "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&q=80",
  "vector-seo-organic-growth": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
  "orbit-ads-roas": "https://images.unsplash.com/photo-1483181957632-8bda974cbc91?w=1200&q=80",
};

export const SERVICE_IMAGES: Record<string, string> = {
  "web-development": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80",
  "seo": "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=1200&q=80",
  "ai-solutions": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
  "social-and-ads": "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&q=80",
  "shopify-store-design": "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1200&q=80",
 "ui-ux-design": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80",
  "saas-development": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
  "website-maintenance": "https://images.unsplash.com/photo-1581091012184-7e0cdfbb6797?w=1200&q=80",
  "backend-api-development": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80",
};

export const POST_IMAGES: Record<string, string> = {
  "modern-seo-2026": "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=1200&q=80",
  "rag-in-production": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
  "shopify-headless-roi": "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1200&q=80",
  "core-web-vitals-2026": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80",
  "meta-ads-creative": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
  "social-content-engine": "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&q=80",
};

export const HERO_IMAGES: Record<string, string> = {
  about: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80",
  services: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80",
  portfolio: "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=1600&q=80",
  caseStudies: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600&q=80",
  blog: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1600&q=80",
  contact: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1600&q=80",
  tools: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80",
};