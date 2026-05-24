import { SERVICES } from "./site";

export type PricingTier = {
  name: string;
  usd: string;
  ngn: string;
  desc: string;
  items: string[];
  featured?: boolean;
};

export type PricingService = {
  slug: string;
  title: string;
  tiers: PricingTier[];
};

// ---------------------------------------------------------------------------
// Static pricing data — all 8 services with full tier content.
// NGN values are roughly USD × 1,600 (one-off) or × 1,600/mo, rounded.
// Prices are starting points; a fixed-scope proposal is sent after discovery.
// ---------------------------------------------------------------------------

export const PRICING_SERVICES: PricingService[] = [
  {
    slug: "web-development",
    title: "Web Development",
    tiers: [
      {
        name: "Corporate",
        usd: "$300",
        ngn: "₦350,000",
        desc: "Perfect for landing pages and small business sites.",
        featured: false,
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
        name: "E-COMMERCE",
        usd: "$450",
        ngn: "₦550,000",
        desc: "Full-featured site with e-commerce capability.",
        featured: true,
        items: [
          "Domain & Hosting (1 Year)",
          "Business Emails",
          "On Page SEO",
          "Up to 100 products",
          "Payment Gateway",
          "Advanced on-page SEO",
          "3 revision rounds",
          "Analytics Integration",
          "30-day post-launch support",
        ],
      },
      {
        name: "Custom",
        usd: "XXX,XXX",
        ngn: "XXX,XXX",
        desc: "Bespoke builds for complex or large-scale requirements.",
        featured: false,
        items: [
          "Domain & Hosting (1 Year)",
          "User & Admin Dashboard",
          "Payment Gateway",
          "Continuous Support",
          "Analytics Integration",
          "Social Media Integration",
          "On Page & Off Page SEO",
          "Content Management",
        ],
      },
    ],
  },

  {
    slug: "saas",
    title: "SaaS Development",
    tiers: [
      {
        name: "MVP",
        usd: "$900",
        ngn: "₦1,200,000",
        desc: "Launch and validate your SaaS quickly.",
        featured: false,
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
        usd: "$2,500",
        ngn: "₦2,500,000",
        desc: "Production-grade platform built to grow with you.",
        featured: true,
        items: [
          "Full product scope (unlimited features)",
          "Multi-tenant architecture",
          "Admin & analytics dashboard",
          "Payment gateway + automated invoicing",
          "CI/CD pipeline & staging environment",
          "99.9% uptime SLA",
          "90-day support & bug-fix warranty",
        ],
      },
      {
        name: "CUSTOM",
        usd: "$XXX,XXX",
        ngn: "₦XXX,XXX",
        desc: "Advanced SaaS architecture and enterprise systems.",
        featured: false,
        items: [
        "Multi-tenant architecture",
        "CI/CD pipelines",
        "Dedicated infrastructure",
        "Advanced security",
        "Custom integrations",
        ],
      },
    ],
  },

  {
    slug: "ui-ux",
    title: "UI / UX Design",
    tiers: [
      {
        name: "STARTER",
        usd: "$250",
        ngn: "₦300,000",
        desc: "Fast, clean design for startups moving quickly.",
        featured: false,
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
        usd: "$650",
        ngn: "₦600,000",
        desc: "Full design system with UX research and usability testing.",
        featured: true,
        items: [
          "Up to 30 screens",
          "User research & journey mapping",
          "Full Figma design system",
          "Interactive prototype",
          "Usability testing session",
          "Dev handoff (Figma / Zeplin)",
          "4 revision rounds",
        ],
      },
      {
        name: "Brand + Product",
        usd: "$1,500",
        ngn: "₦1,500,000",
        desc: "Brand identity and full product design in one engagement.",
        featured: false,
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
  },

  {
    slug: "seo",
    title: "SEO",
    tiers: [
      {
        name: "STARTER",
        usd: "$220",
        ngn: "₦200,000",
        desc: "Ideal for service businesses targeting a city or region.",
        featured: false,
        items: [
          "Website SEO Audit",
          "Keyword Research",
          "On-Page SEO (5 Pages)",
          "3 Blog Posts",
          "Titles, Images & Meta Tags",
          "Monthly Reports",
        ],
      },
      {
        name: "GROWTH",
        usd: "$320",
        ngn: "₦350,000",
        desc: "Content + link-building to dominate your niche.",
        featured: true,
        items: [
          "Website SEO Audit",
          "Keyword Research",
          "On-Page SEO (10 Pages)",
          "5 Blog Posts",
          "Titles, Images & Meta Tags",
          "Monthly Reports",
          "GSC & Google Analytics Setup",
        ],
      },
      {
        name: "CUSTOM",
        usd: "$XXX,XXX",
        ngn: "₦XXX,XXX",
        desc: "Full-stack SEO for large sites and multiple markets.",
        featured: false,
        items: [
          "Website SEO Audit",
          "Keyword Research",
          "Backlinks Building",
          "On-Page SEO (xx Pages)",
          "Off-Page SEO",
          "xx Blog Posts",
          "5 Blog Posts",
          "Titles, Images & Meta Tags",
          "Monthly Reports",
          "GSC & Google Analytics Setup",
        ],
      },
    ],
  },

  {
    slug: "ai",
    title: "AI & Automation",
    tiers: [
      {
        name: "Starter",
        usd: "$400",
        ngn: "₦500,000",
        desc: "Automate one key workflow or add a single AI feature.",
        featured: false,
        items: [
          "1 AI workflow or chatbot",
          "OpenAI / Claude API integration",
          "Chatbot integration",
          "Basic RAG pipeline (document Q&A)",
          "Slack or WhatsApp delivery channel",
          "Monthly usage & cost review",
        ],
      },
      {
        name: "Business",
        usd: "$1,200",
        ngn: "₦850,000",
        desc: "Multi-agent systems and internal AI tooling.",
        featured: true,
        items: [
          "Up to 5 AI agents or automated tools",
          "Custom fine-tuning (where applicable)",
          "Document ingestion & vector search pipeline",
          "API + webhook integrations",
          "Internal admin dashboard",
          "Bi-weekly sync & roadmap planning",
        ],
      },
      {
        name: "Enterprise",
        usd: "$XXX,XXX",
        ngn: "₦XXX,XXX",
        desc: "AI at the core of your product or operations.",
        featured: false,
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
  },

  {
    slug: "social-ads",
    title: "Social & Ads",
    tiers: [
      {
        name: "STARTER",
        usd: "$150",
        ngn: "₦150,000",
        desc: "Get your brand presence established on key platforms.",
        featured: false,
        items: [
          "1 social platforms managed",
          "10 posts per month",
          "Account Setup & Optimization",
          "Content Creation",
          "Basic Graphics Design",
          "Community Management",
          "Monthly Analytics Report",
        ],
      },
      {
        name: "PROFESSIONAL",
        usd: "$250 /mo",
        ngn: "₦200,000/mo",
        desc: "Active growth through content and paid campaigns.",
        featured: true,
        items: [
          "2 social platforms managed",
          "15 posts per month",
          "Account Setup & Optimization",
          "Premium Content Creation",
          "Custom Graphics & Videos",
          "Community Management",
          "Hashtag Strategy",
          "Detailed Analytics & Insights",
        ],
      },
      {
        name: "ENTERPRISE",
        usd: "$350/mo",
        ngn: "₦350,000/mo",
        desc: "Full-funnel paid media and social management.",
        featured: false,
        items: [
          "3 - 4 social platforms managed",
          "Daily Posts (30+ per Month)",
          "Account Setup & Optimization",
          "Premium Content Creation",
          "Custom Graphics & Videos",
          "Story Management (Daily)",
          "24/7 Community Management",
          "Hashtag Strategy",
          "Detailed Analytics & Insights",
          "Advanced Paid Ads Campaigns",
          "Dedicated Account Manager",
        ],
      },
    ],
  },

  {
    slug: "shopify",
    title: "Shopify",
    tiers: [
      {
        name: "STARTER",
        usd: "$350",
        ngn: "₦400,000",
        desc: "Get your store live fast with a premium theme.",
        featured: false,
        items: [
          "Premium theme setup & customisation",
          "Custom Domain Integration",
          "Up to 50 products Setup",
          "Payment gateway & shipping integration",
          "Mobile Responsive Design",
          "Basic SEO Setup",
          "1 Week Training & Support",
        ],
      },
      {
        name: "PROFESSIONAL",
        usd: "$500",
        ngn: "₦600,000",
        desc: "Fully custom Shopify theme built to your brand.",
        featured: true,
        items: [
          "Custom Domain & Business Email",
          "Custom Theme Development",
          "Up to 200 Products Setup",
          "Multiple Payment Gateways",
          "Advanced SEO Optimization",
          "Social Media Integration",
          "Email Marketing Setup",
          "Analytics & Tracking Setup",
          "1 Month Training & Suppor",
        ],
      },
      {
        name: "ENTERPRISE",
        usd: "$XXX,XXX",
        ngn: "₦XXX,XXX",
        desc: "Enterprise Shopify with multi-store and full automation.",
        featured: false,
        items: [
          "Fully Custom Store Design",
          "Unlimited Products Setup",
          "Custom App Development",
          "Advanced Marketing Automation",
          "Multi-Currency & Multi-Language",
          "Priority Support & Maintenance",
          "Dedicated Account Manager",
          "Custom Integrations",
          "Ongoing Training & Support",
        ],
      },
    ],
  },

  {
    slug: "maintenance",
    title: "Maintenance",
    tiers: [
      {
        name: "Basic",
        usd: "$80/mo",
        ngn: "₦80,000/mo",
        desc: "Core security, backups, and uptime monitoring.",
        featured: false,
        items: [
          "Daily automated backups",
          "Security patches & dependency updates",
          "Uptime monitoring (99.9% target)",
          "Monthly performance health report",
          "2 hours developer support / month",
        ],
      },
      {
        name: "Pro",
        usd: "$120/mo",
        ngn: "₦150,000/mo",
        desc: "Full-service care with proactive improvements.",
        featured: true,
        items: [
          "Everything in Basic",
          "5 hours developer support / month",
          "Core Web Vitals monitoring & fixes",
          "Monthly content & copy updates",
          "SEO health checks",
          "Priority Slack access",
        ],
      },
      {
        name: "Business",
        usd: "$200/mo",
        ngn: "₦200,000/mo",
        desc: "Dedicated support team for mission-critical sites.",
        featured: false,
        items: [
          "Everything in Pro",
          "20 hours developer support / month",
          "Dedicated account manager",
          "Emergency response SLA (4-hour response)",
          "Quarterly strategy & roadmap review",
        ],
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// FAQ
// ---------------------------------------------------------------------------

export const PRICING_FAQ = [
  {
    q: "Can I switch between USD and NGN?",
    a: "Yes — toggle at the top of the page. We invoice in either currency, plus EUR, GBP, CAD, or INR on request.",
  },
  {
    q: "Are the prices negotiable?",
    a: "We provide competitive and transparent pricing tailored to your specific requirements. Our packages are carefully structured to ensure successful project delivery while offering excellent value. We're committed to working within your budget to deliver a high-quality website that meets all your business needs.",
  },
  {
    q: "Do you offer custom pricing?",
    a: "Always. If your project doesn't fit a tier, we'll quote it from scratch — usually within one business day.",
  },
  {
    q: "What payment methods do you accept?",
    a: "Bank transfer, ACH, wire, Paystack, Stripe, and crypto. NGN clients can pay locally via Paystack or bank transfer.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Yes — most builds are 50% to start, 50% on delivery. Larger projects can be milestone-billed across 3–4 stages.",
  },
  {
    q: "Are there discounts for non-profits or startups?",
    a: "Yes — early-stage funded startups and registered non-profits get up to 5% off. Just mention it when you reach out.",
  },
    {
    q: "How long does it take to build a website?",
    a: "Development time varies by package: Corporate takes 1-2 weeks, E-Commerce takes 2-4 weeks, and Custom takes 4-6 weeks depending on complexity and specific requirements. We'll provide a detailed project timeline during our initial consultation to ensure your website launches on schedule!",
  },
];