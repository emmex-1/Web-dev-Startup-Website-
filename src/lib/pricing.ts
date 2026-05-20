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
        name: "Starter",
        usd: "$2,499",
        ngn: "₦4,000,000",
        desc: "Perfect for landing pages and small business sites.",
        featured: false,
        items: [
          "Up to 5 pages",
          "Responsive, mobile-first design",
          "Contact form integration",
          "Basic on-page SEO setup",
          "2 revision rounds",
          "30-day post-launch support",
        ],
      },
      {
        name: "Growth",
        usd: "$7,900",
        ngn: "₦12,640,000",
        desc: "Full-featured site with CMS and e-commerce capability.",
        featured: true,
        items: [
          "Up to 15 pages",
          "CMS integration (Sanity / Contentful)",
          "E-commerce ready (Stripe / Paystack)",
          "Core Web Vitals optimisation",
          "Advanced on-page SEO",
          "5 revision rounds",
          "60-day post-launch support",
        ],
      },
      {
        name: "Enterprise",
        usd: "Custom",
        ngn: "Custom",
        desc: "Bespoke builds for complex or large-scale requirements.",
        featured: false,
        items: [
          "Unlimited pages & sections",
          "Custom architecture & tech stack",
          "Multi-region / CDN deployment",
          "Dedicated project manager",
          "SLA uptime guarantee",
          "Priority support & maintenance plan",
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
        usd: "$3,500",
        ngn: "₦5,600,000",
        desc: "Validate your idea with a focused, shippable product.",
        featured: false,
        items: [
          "Core feature set (3–5 features)",
          "Auth & user management",
          "Basic admin dashboard",
          "Stripe / Paystack billing integration",
          "Deployment on Vercel / Railway",
          "30-day post-launch support",
        ],
      },
      {
        name: "Scale",
        usd: "$12,000+",
        ngn: "₦19,200,000+",
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
        name: "Retainer",
        usd: "$1,800/mo",
        ngn: "₦2,880,000/mo",
        desc: "Ongoing monthly SaaS development partnership.",
        featured: false,
        items: [
          "40 dedicated hours / month",
          "Feature sprints (2-week cycles)",
          "Bug fixes & security patches",
          "Monthly progress reporting",
          "Dedicated Slack channel access",
        ],
      },
    ],
  },

  {
    slug: "ui-ux",
    title: "UI / UX Design",
    tiers: [
      {
        name: "Essentials",
        usd: "$1,800",
        ngn: "₦2,880,000",
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
        usd: "$3,900",
        ngn: "₦6,240,000",
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
        usd: "$9,800",
        ngn: "₦15,680,000",
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
        name: "Local",
        usd: "$390/mo",
        ngn: "₦624,000/mo",
        desc: "Ideal for service businesses targeting a city or region.",
        featured: false,
        items: [
          "Google Business Profile optimisation",
          "10 local citation builds / month",
          "On-page optimisation (up to 5 pages)",
          "NAP consistency audit",
          "Monthly rank tracking report",
        ],
      },
      {
        name: "Authority",
        usd: "$1,200/mo",
        ngn: "₦1,920,000/mo",
        desc: "Content + link-building to dominate your niche.",
        featured: true,
        items: [
          "Full technical SEO audit & fixes",
          "4 SEO-optimised articles / month",
          "8 link-building outreach placements / month",
          "Core Web Vitals monitoring & optimisation",
          "Competitor gap analysis",
          "Bi-weekly reporting & strategy call",
        ],
      },
      {
        name: "Enterprise",
        usd: "$3,400/mo",
        ngn: "₦5,440,000/mo",
        desc: "Full-stack SEO for large sites and multiple markets.",
        featured: false,
        items: [
          "International SEO & hreflang setup",
          "Unlimited pages optimised",
          "12 long-form articles / month",
          "20 high-authority link placements / month",
          "Dedicated SEO strategist",
          "Weekly reporting + priority Slack access",
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
        usd: "$1,900/mo",
        ngn: "₦3,040,000/mo",
        desc: "Automate one key workflow or add a single AI feature.",
        featured: false,
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
        usd: "$3,800/mo",
        ngn: "₦6,080,000/mo",
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
        name: "Platform",
        usd: "$7,500/mo",
        ngn: "₦12,000,000/mo",
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
        name: "Starter",
        usd: "$899",
        ngn: "₦1,440,000",
        desc: "Get your brand presence established on key platforms.",
        featured: false,
        items: [
          "2 social platforms managed",
          "12 posts / month (copy + graphics)",
          "Community management (weekdays)",
          "Monthly performance report",
          "Basic hashtag & audience research",
        ],
      },
      {
        name: "Growth",
        usd: "$1,800/mo",
        ngn: "₦2,880,000/mo",
        desc: "Active growth through content and paid campaigns.",
        featured: true,
        items: [
          "4 social platforms managed",
          "24 posts / month",
          "1 paid ad campaign (Meta or Google)",
          "Ad creative design (up to 6 creatives)",
          "A/B testing & optimisation",
          "Bi-weekly performance report + call",
        ],
      },
      {
        name: "Performance",
        usd: "$4,500/mo",
        ngn: "₦7,200,000/mo",
        desc: "Full-funnel paid media and social management.",
        featured: false,
        items: [
          "All platforms (Meta, Google, TikTok, LinkedIn)",
          "Unlimited posts & creatives",
          "Multi-campaign paid strategy",
          "Funnel landing page design",
          "Weekly reporting + dedicated account manager",
          "Monthly strategy workshop",
        ],
      },
    ],
  },

  {
    slug: "shopify",
    title: "Shopify",
    tiers: [
      {
        name: "Launch",
        usd: "$899",
        ngn: "₦1,440,000",
        desc: "Get your store live fast with a premium theme.",
        featured: false,
        items: [
          "Premium theme setup & customisation",
          "Up to 50 products imported",
          "Payment & shipping configuration",
          "Mobile performance optimisation",
          "Basic SEO meta tags",
          "Launch-day go-live support",
        ],
      },
      {
        name: "Custom Store",
        usd: "$3,200",
        ngn: "₦5,120,000",
        desc: "Fully custom Shopify theme built to your brand.",
        featured: true,
        items: [
          "Bespoke Liquid theme from scratch",
          "Unlimited products",
          "Custom checkout & cart experience",
          "App integrations (Klaviyo, Judge.me, etc.)",
          "Conversion rate optimisation",
          "60-day post-launch support",
        ],
      },
      {
        name: "Shopify Plus",
        usd: "$8,900",
        ngn: "₦14,240,000",
        desc: "Enterprise Shopify with multi-store and full automation.",
        featured: false,
        items: [
          "Shopify Plus store setup",
          "Multi-currency & multi-language",
          "Custom Shopify Scripts & Flows",
          "B2B / wholesale portal",
          "ERP / WMS / 3PL integration",
          "Priority support & SLA",
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
        usd: "$390/mo",
        ngn: "₦624,000/mo",
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
        usd: "$1,200/mo",
        ngn: "₦1,920,000/mo",
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
        usd: "$3,400/mo",
        ngn: "₦5,440,000/mo",
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
    q: "Are the prices final?",
    a: "Tiers are starting points. We always send a fixed-scope proposal after a 30-min discovery call so there are no surprises.",
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
    a: "Yes — early-stage funded startups and registered non-profits get up to 20% off. Just mention it when you reach out.",
  },
];