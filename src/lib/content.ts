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
  live?: string;
  serviceSlug?: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "taskflow-pro",
    title: "Tim Collins Own Your Home",
    category: "Website",
    tag: "Website",
    desc: "A responsive corporate website showcasing services, brand identity, and key information with a clean and modern user experience.",
    color: "from-cyan-500/30 to-violet-500/30",
    client: "Globe Stack",
    year: "2024",
    tech: ["React", "Tailwind css", "Socket.io", "Sanity CMS", ],
    images: [
      "/media/timoyh.jpg",
      "/media/tco5.jpeg",
      "/media/tco6.jpeg",
    ],
    live: "https://tcownyourhome.vercel.app/",
    serviceSlug: "web-development",
  },
  {
    slug: "shopmart-ecommerce",
    title: "Law-Firm Website",
    category: "Shopify / E-Commerce",
    tag: "Law Firm",
    desc: "Law firm",
    color: "from-emerald-500/30 to-cyan-500/30",
    client: "ShopMart",
    year: "2024",
    tech: ["React", "Tailwind css", "Socket.io", "Sanity CMS",],
    images: [
      "/media/oal.png",
      "/media/oall.png",
      "/media/oaln.png",
    ],
    live: "https://oalaw.vercel.app/",
    serviceSlug: "shopify-store-design",
  },
  {
    slug: "mediconnect-health",
    title: "Fit Citizens Platform",
    category: "Website",
    tag: "NGO",
    desc: "A youth-focused platform promoting education, skills development, and mentorship, designed to inspire growth and community impact.",
    color: "from-violet-500/30 to-fuchsia-500/30",
    client: "MediConnect",
    year: "2025",
    tech: ["React", "Tailwind css", "Socket.io", "Sanity CMS",],
    images: [
      "/media/ft2.jpeg",
      "/media/fit.jpg",
      "/media/ft1.jpeg",
      "/media/ft3.jpeg",
    ],
    live: "https://fitcitizenconstructiveattitude.vercel.app/",
    serviceSlug: "saas-development",
  },
  {
    slug: "realestate-hub",
    title: "Cybersecurity Learning Platform",
    category: "Web App",
    tag: "CyberTech",
    desc: "Educational platform for cybersecurity courses with interactive labs and progress tracking.",
    color: "from-orange-500/30 to-rose-500/30",
    client: "RealEstate Hub",
    year: "2025",
    tech: ["React", "Node.js", "MongoDB", "Mapbox", "Cloudinary", "Express.js"],
    images: [
      "/media/byt.png",
      "/media/byte.png",
      "/media/byti.png",
    ],
    live: "https://bytitude.vercel.app/",
    serviceSlug: "web-development",
  },
  {
    slug: "learnify-lms",
    title: "Library Management System",
    category: "EdTech",
    tag: "Education",
    desc: "A digital solution for managing library operations efficiently. It supports book cataloging, borrowing and return tracking, user management, and fine calculation.",
    color: "from-cyan-500/30 to-blue-500/30",
    client: "Learnify",
    year: "2025",
    tech: ["React", "Node.js", "MongoDB", "Cloudinary", "Stripe", "Express.js"],
    images: [
      "/media/sch.jpg",
      "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=1200&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80",
    ],
    live: "https://kehinde-bakare-portfolio.vercel.app/",
    serviceSlug: "saas-development",
  },
  {
    slug: "socialwave-dashboard",
    title: "Hotel Booking & Reservation System",
    category: "Social / Analytics",
    tag: "Hotel System",
    desc: "A fully functional booking platform that enables users to search, view, and reserve hotel rooms in real-time. It includes features like room availability tracking, secure booking flow, user authentication.",
    color: "from-fuchsia-500/30 to-violet-500/30",
    client: "SocialWave",
    year: "2024",
    tech: ["React", "Node.js", "MongoDB", "Chart.js", "REST APIs", "OpenAI"],
    images: [
"/media/maje.jpg",
"/media/maj3.jpeg",
"/media/maj2.jpeg",
    ],
    live: "https://kehinde-bakare-portfolio.vercel.app/",
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
  goals: string[];
  research: string;
  designProcess: string;
  devProcess: string;
  challenges: { challenge: string; solution: string }[];
  process: { step: string; title: string; desc: string }[];
  results: { label: string; value: string }[];
  techStack: { category: string; items: string[] }[];
  testimonial: { name: string; role: string; quote: string };
  color: string;
  images: string[];
  image?: string;
};

export const SITE = {
  name: "Globe Stack",
  url: "https://globestack.com",
  email: "info@globestack.com",
  phone: "+234 7048595478",
  description:
    "Senior-only digital agency building web, AI, SEO and growth systems.",
};

export const CASE_STUDIES: CaseStudy[] = [
{
    slug: "tim-collins-own-your-home",
    title: "Building a Real Estate Education Platform That Converts Renters Into Owners",
    client: "Tim Collins",
    industry: "Real Estate / EdTech",
    result: "+40% organic reach",
    duration: "10 weeks",
    tags: ["Web Dev", "SEO", "Content Strategy"],
    color: "from-sky-500/30 to-cyan-500/30",
    overview:
      "Tim Collins had a powerful mission — helping everyday families build generational wealth through homeownership but his digital presence was scattered. We built a unified educational platform, podcast hub, and SEO engine that tripled his organic reach and 3x'd workshop signups.",
    problem:
      "Tim's brand — Own Your Home had a basic landing page that wasn't capturing leads, zero SEO foundation, and workshop signups driven entirely by manual outreach. His content lived across Instagram, email blasts, and a disconnected podcast RSS link. The platform didn't reflect the authority of his message.",
    solution:
      "A high-converting educational platform with podcast integration, a structured content hub, lead capture funnels tied to free workshops, and a full SEO content strategy targeting aspiring homeowners across the US.",
    goals: [
      "Design and build a high-converting educational platform with course and podcast integration",
      "Establish a strong SEO foundation targeting aspiring homeowners and first-time buyers",
      "Build an email capture and nurture funnel tied to free workshops and downloadable guides",
      "Position Tim Collins as the leading voice for real estate literacy and mortgage education",
    ],
    research:
      "We conducted keyword research across homebuyer education, mortgage literacy, and renters-to-owners search intent — identifying 80+ high-value keywords with low competition. Competitor analysis revealed a gap: most real estate education brands were either too corporate or too informal. Tim's audience — working families and first-time buyers — wanted authenticity, clarity, and actionable steps. We mapped the full journey from podcast listener to workshop registrant to consulting client.",
    designProcess:
      "The brand direction leaned into warmth and authority — earthy tones, bold editorial typography, and photography that reflected real families rather than stock-photo clichés. We designed a homepage that led with transformation stories, followed by the content hierarchy: podcast, workshops, free guides, and one-on-one sessions. Every CTA was tested for clarity and emotional resonance with the target audience.",
    devProcess:
      "Built on Next.js with Sanity CMS so Tim could manage episodes and resources himself without developer help. We integrated Podbean for podcast RSS feeds, ConvertKit for email sequences with automated nurture flows, and Calendly for consultation booking. The platform was optimised for Core Web Vitals — hitting 96+ Lighthouse scores — and structured data was implemented across all content types for rich search results.",
    challenges: [
      {
        challenge: "Tim had no existing domain authority and needed to rank for competitive homeownership keywords quickly.",
        solution: "We built a content cluster strategy around 12 pillar topics, published 24 SEO-optimised articles in the first 8 weeks, and secured 15 backlinks through podcast guest appearances and real estate media outreach.",
      },
      {
        challenge: "Workshop signups were inconsistent because the registration flow had too many friction points.",
        solution: "We redesigned the signup funnel to a single-step email capture with instant confirmation, reducing drop-off by 61% and increasing registrations 3x in the first month.",
      },
    ],
    process: [
      { step: "01", title: "Discovery", desc: "Audience research, keyword mapping, and content audit." },
      { step: "02", title: "Design", desc: "Brand direction, wireframes, and conversion-focused UI." },
      { step: "03", title: "Build", desc: "Next.js platform, CMS, podcast hub, and email funnels." },
      { step: "04", title: "Launch", desc: "SEO content rollout, structured data, and analytics setup." },
    ],
    results: [
      { label: "Organic traffic growth", value: "+340%" },
      { label: "Workshop registrations", value: "3x" },
      { label: "Lighthouse score", value: "96+" },
      { label: "Keywords ranking #1", value: "8" },
    ],
    techStack: [
      { category: "Frontend", items: ["Next.js", "TypeScript", "Tailwind CSS"] },
      { category: "CMS & Content", items: ["Sanity", "Podbean RSS", "MDX"] },
      { category: "Marketing", items: ["ConvertKit", "Calendly", "GA4"] },
      { category: "Infrastructure", items: ["Vercel", "Cloudflare", "Ahrefs"] },
    ],
    testimonial: {
      name: "Tim Collins",
      role: "Founder, Own Your Home · Licensed Realtor, Nebraska Realty",
      quote:
        "Globe Stack didn't just build me a website — they built me a business asset. The SEO work alone has brought in more qualified leads than everything I was doing manually combined.",
    },
    images: [
      "/media/timoyh.jpg",
      "/media/tco5.jpeg",
      "/media/tco6.jpeg",
    ],
  },
  {
    slug: "hopehands-ngo",
    title: "Building a donor management platform that grew HopeHands' funding by 3x",
    client: "HopeHands Foundation",
    industry: "NGO / Nonprofit",
    result: "+3x donor funding",
    duration: "3 months",
    tags: ["Web Dev", "CRM", "AI"],
    color: "from-violet-500/30 to-fuchsia-500/30",
    overview:
      "HopeHands was tracking 12,000 donors in spreadsheets, missing follow-ups, and losing recurring donors to poor communication. We built a donor CRM and a public-facing donation portal that tripled their annual funding.",
    problem:
      "Manual donor tracking led to missed renewal reminders, duplicated outreach, and zero visibility into which campaigns performed. The public website couldn't accept online donations.",
    solution:
      "A custom donor CRM with automated follow-up sequences, campaign analytics, and an integrated donation portal with one-click recurring giving.",
    goals: [
      "Automate donor follow-up and renewal reminders",
      "Accept online donations with recurring billing",
      "Track campaign performance by channel",
      "Reduce admin overhead on the fundraising team",
    ],
    research:
      "We audited 3 years of donation data and interviewed 5 staff members. Found: 34% of lapsed donors had received no follow-up within 90 days of last gift; online donation requests were being handled via bank transfer — losing 60% of impulse givers.",
    designProcess:
      "Two distinct design contexts: an internal staff CRM and a public donor-facing portal. The internal tool prioritised information density and speed; the public portal focused on emotional storytelling, trust signals, and a frictionless 3-step donation flow. Both shared a consistent brand system.",
    devProcess:
      "React + Node.js stack. Stripe for payment processing with webhooks for subscription lifecycle events. Automated email sequences via Mailchimp API. MongoDB with a custom donor scoring model to flag at-risk donors. Deployed on Vercel + Railway.",
    challenges: [
      {
        challenge: "Deduplicating 12,000 donor records with inconsistent name and email formats.",
        solution: "Built a fuzzy-matching deduplication script that flagged 2,300 duplicates for staff review before import.",
      },
      {
        challenge: "Donors were skeptical about online payment security.",
        solution: "Added SSL trust badges, Stripe branding, and a transparent fund-use breakdown on the donation page — conversion lifted 28%.",
      },
    ],
    process: [
      { step: "01", title: "Audit", desc: "Data audit, staff interviews, donor journey mapping." },
      { step: "02", title: "Design", desc: "CRM wireframes + public portal design, brand alignment." },
      { step: "03", title: "Build", desc: "6-week dev sprint — CRM, portal, Stripe, and email automation." },
      { step: "04", title: "Migration", desc: "Data deduplication, import, staff training, and go-live." },
    ],
    results: [
      { label: "Donor funding", value: "3x" },
      { label: "Recurring donors", value: "+180%" },
      { label: "Follow-up rate", value: "100%" },
      { label: "Admin hours saved", value: "12 hrs/wk" },
    ],
    techStack: [
      { category: "Frontend", items: ["React", "Tailwind CSS"] },
      { category: "Backend", items: ["Node.js", "Express.js", "MongoDB"] },
      { category: "Payments", items: ["Stripe", "Webhooks"] },
      { category: "Integrations", items: ["Mailchimp", "Vercel", "Railway"] },
    ],
    testimonial: {
      name: "Blessing Adeyemi",
      role: "Executive Director, HopeHands Foundation",
      quote:
        "We went from spreadsheets and bank transfers to a professional platform in 3 months. Our donors trust us more and our funding has never been stronger.",
    },
    images: [
      "https://images.unsplash.com/photo-1559523161-0fc0d8b814bd?w=1200&q=80",
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&q=80",
      "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1200&q=80",
    ],
  },
  {
    slug: "swifthaul-logistics",
    title: "SwiftHaul: a real-time fleet tracking platform that cut delivery delays by 38%",
    client: "SwiftHaul Logistics",
    industry: "Logistics",
    result: "-38% delivery delays",
    duration: "5 months",
    tags: ["Web Dev", "Real-Time", "Maps"],
    color: "from-orange-500/30 to-rose-500/30",
    overview:
      "SwiftHaul operated 120 trucks with zero real-time visibility. Dispatchers used phone calls to locate drivers and customers had no tracking. We built an end-to-end fleet management and customer tracking platform.",
    problem:
      "Dispatchers were calling drivers 30+ times daily for status updates. Delivery delays averaged 2.4 hours due to poor route planning. Customers had no visibility and filed 200+ complaints per month.",
    solution:
      "A real-time fleet tracking dashboard for dispatchers, a driver mobile PWA, and a customer tracking portal — all connected via WebSockets and live GPS data.",
    goals: [
      "Give dispatchers real-time truck locations",
      "Enable customers to track deliveries live",
      "Automate route optimization",
      "Reduce dispatcher-to-driver phone calls by 80%+",
    ],
    research:
      "Rode with 3 drivers on delivery routes, observed dispatcher workflows for 2 days, and analysed 6 months of delivery delay data. Root causes: manual route assignment (45% of delays), no traffic awareness (32%), and poor driver ETAs (23%).",
    designProcess:
      "Three interfaces with very different users: a dense dispatcher dashboard, a simple driver mobile UI usable while gloved, and a clean customer tracking page. Color-coded status indicators and a map-first layout made the dispatcher view scannable at a glance.",
    devProcess:
      "React for all interfaces. Node.js + Socket.io for real-time GPS broadcasting (sub-2s latency). Mapbox GL for routing and live vehicle markers. MongoDB time-series for trip history. Driver PWA installable on Android with offline support for areas with patchy signal.",
    challenges: [
      {
        challenge: "GPS updates over GSM in rural areas caused stale position data.",
        solution: "Implemented predictive dead-reckoning between GPS pings using last known speed and heading — visual smoothness improved by 70%.",
      },
      {
        challenge: "Dispatchers resisted moving away from phone calls.",
        solution: "Added an in-app messaging thread per trip and showed dispatchers a live 'calls saved' counter — adoption hit 90% in week 2.",
      },
    ],
    process: [
      { step: "01", title: "Discovery", desc: "On-site observation, driver rides, delay data analysis." },
      { step: "02", title: "Design", desc: "Three-interface design system, map-first dispatcher layout." },
      { step: "03", title: "Build", desc: "10-week sprint — real-time GPS, routing, PWA, and customer portal." },
      { step: "04", title: "Rollout", desc: "Pilot with 20 trucks, full fleet rollout over 3 weeks." },
    ],
    results: [
      { label: "Delivery delays", value: "-38%" },
      { label: "Dispatcher calls", value: "-84%" },
      { label: "Customer complaints", value: "-71%" },
      { label: "Route efficiency", value: "+29%" },
    ],
    techStack: [
      { category: "Frontend", items: ["React", "Mapbox GL", "Tailwind CSS"] },
      { category: "Backend", items: ["Node.js", "Socket.io", "MongoDB"] },
      { category: "Mobile", items: ["PWA", "Service Workers"] },
      { category: "Infrastructure", items: ["AWS EC2", "Redis", "GitHub Actions"] },
    ],
    testimonial: {
      name: "Femi Adegoke",
      role: "Operations Director, SwiftHaul Logistics",
      quote:
        "Our dispatchers finally have eyes on every truck in real time. Delivery complaints dropped within the first month and our customers are calling us to compliment the tracking page.",
    },
    images: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80",
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200&q=80",
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1200&q=80",
    ],
  },
  {
    slug: "school-mis-system",
    title: "How We Cut Report Generation From 5 Days to 3 Hours With a Custom School MIS",
    client: "School Network (West Africa)",
    industry: "EdTech / SaaS",
    result: "+68% admin efficiency",
    duration: "14 weeks",
    tags: ["SaaS Development", "Web Dev", "UI/UX"],
    color: "from-violet-500/30 to-indigo-500/30",
    overview:
      "A growing private school network was running on spreadsheets, WhatsApp groups, and manual fee ledgers. We designed and built a full School Management Information System covering attendance, grades, fees, reports, and parent communication — reducing admin workload by 68% across three campuses.",
    problem:
      "School administrators were managing student records, attendance registers, fee collection, timetables, and parent communication across completely disconnected tools. End-of-term report cards consumed an entire week of staff time. Parents had no visibility into fees or results without physically visiting the school. Errors were frequent and reconciliation was a nightmare.",
    solution:
      "A multi-tenant School MIS platform with role-based portals for admins, teachers, and parents — including automated report generation, online fee payment, real-time attendance tracking, and SMS/email notifications.",
    goals: [
      "Unify student records, attendance, grades, and fee management on one platform",
      "Allow teachers to mark attendance and log assessments in under 60 seconds daily",
      "Give parents real-time mobile access to fees, results, and school notices",
      "Automate end-of-term report generation and fee reminder sequences",
    ],
    research:
      "We spent two weeks embedded with school admins, class teachers, and parents across three campuses — documenting 47 distinct pain points. The biggest: duplicate data entry, manual fee reconciliation, and report generation that consumed 5 full days of staff time per term. We benchmarked against SIMS, Arbor, and PowerSchool and identified the feature gaps relevant to the West African school context: multi-currency fee structures, Paystack-compatible payment processing, and SMS notifications for low-connectivity parents.",
    designProcess:
      "Three distinct role-based interfaces: an admin dashboard with full school configuration control, a teacher portal optimised for speed (attendance completable in under 60 seconds), and a parent portal that surfaced critical info — fees due, recent grades, school notices — above the fold. The design system used a clean, professional palette with strong data hierarchy and WCAG-compliant contrast ratios across all views.",
    devProcess:
      "Built as a multi-tenant SaaS on Next.js with PostgreSQL, Prisma ORM, and a REST API designed for future mobile app extension. A custom report engine generates PDF term reports automatically from grade entries — eliminating the manual process entirely. Paystack handles online fee collection with real-time reconciliation dashboards for bursars. Termii powers SMS attendance alerts and fee reminders for parents without reliable internet access.",
    challenges: [
      {
        challenge: "Teachers were resistant to adopting new software after previous failed tech rollouts.",
        solution: "We co-designed the teacher portal with three classroom teachers during development, iterated on the attendance flow four times until it could be completed in under 45 seconds, and ran in-person training sessions at each campus before go-live.",
      },
      {
        challenge: "The report engine needed to handle dozens of subject combinations, grading scales, and comment templates simultaneously across year groups.",
        solution: "We built a flexible report template engine with school-configurable grading systems, automated comment generation from teacher input, and bulk PDF export — reducing production time from 5 days to under 3 hours.",
      },
    ],
    process: [
      { step: "01", title: "Discovery", desc: "On-site embeds, workflow mapping, and 47-point pain audit." },
      { step: "02", title: "Design", desc: "Three role-based UI systems, accessibility-first design." },
      { step: "03", title: "Build", desc: "12-week sprint — MIS core, report engine, payments, SMS." },
      { step: "04", title: "Rollout", desc: "Campus-by-campus onboarding with in-person staff training." },
    ],
    results: [
      { label: "Admin time reduction", value: "68%" },
      { label: "Report generation", value: "3 hrs" },
      { label: "Fee visibility", value: "100%" },
      { label: "Campuses on one system", value: "3" },
    ],
    techStack: [
      { category: "Frontend", items: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts"] },
      { category: "Backend", items: ["Node.js", "PostgreSQL", "Prisma ORM", "REST API"] },
      { category: "Payments & Comms", items: ["Paystack", "Termii SMS", "Nodemailer"] },
      { category: "Infrastructure", items: ["Vercel", "Supabase", "AWS S3", "pdf-lib"] },
    ],
    testimonial: {
      name: "Mrs. Adeyemi",
      role: "Director of Operations, School Network",
      quote:
        "What used to take our staff an entire week at the end of term now runs automatically overnight. Parents love the portal, teachers adopted it faster than anything we've tried before, and our bursar finally has clean records.",
    },
    images: [
      "/media/sch.jpg",
      "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=1200&q=80",
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1200&q=80",
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
    desc: "80+ projects shipped. Our AI division became our fastest-growing practice.",
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
  "taskflow-pro": "/media/timoyh.jpg",
  "shopmart-ecommerce": "/media/oal.png",
  "mediconnect-health": "/media/fit.jpg",
  "realestate-hub": "/media/byt.png",
  "learnify-lms": "/media/sch.jpg",
  "socialwave-dashboard": "/media/maje.jpg",
};

export const CASE_IMAGES: Record<string, string> = {
  "tim-collins-own-your-home": "/media/timoyh.jpg",        // ← ADD
  "school-mis-system": "/media/sch.jpg",                   // ← ADD
  "greenbridge-lms": "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1200&q=80",
  "hopehands-ngo": "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&q=80",
  "swifthaul-logistics": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80",
  "pinnacle-realty": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80",
};

export const SERVICE_IMAGES: Record<string, string> = {
  "web-development": "/media/web-dev.jpg",
  "seo": "/media/seo.jpg",
  "ai-solutions": "/media/ai.jpg",
  "social-and-ads": "/media/smm.jpg",
  "shopify-store-design": "/media/shop.jpg",
  "ui-ux-design": "/media/ui-ux.jpg",
  "saas-development": "/media/saas.jpg",
  "website-maintenance": "/media/main.jpg",
  "backend-api-development": "/media/back.jpg",
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
  about: "/media/abt.jpg",
  services: "/media/srv.jpg",
  portfolio: "/media/pos.jpg",
  caseStudies: "/media/about-vision.jpg",
  blog: "/media/cse.jfif",
  contact: "media/contact.jpg",
  tools: "/media/back.jpg",
};