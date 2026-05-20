// lib/services-index-data.ts
// Data for the new sections on the /services index page.
// Import these in services.index.tsx.

export type ProcessStep = { step: string; title: string; desc: string };
export type WhyUsItem = { title: string; desc: string };
export type FaqItem = { q: string; a: string };

/** 4-step process shown on the /services index page.
 *  Matches the "A process built for results." section in the design reference.
 */
export const SERVICES_PROCESS: ProcessStep[] = [
  {
    step: "01",
    title: "Understand",
    desc: "Deep dive into your business goals, constraints, and technical requirements so every decision is grounded in reality.",
  },
  {
    step: "02",
    title: "Design",
    desc: "Create architecture and interfaces that align with your vision and are built to scale from day one.",
  },
  {
    step: "03",
    title: "Build",
    desc: "Develop production-ready code with modern best practices, rigorous testing, and weekly demos.",
  },
  {
    step: "04",
    title: "Ship",
    desc: "Deploy, monitor, and iterate based on real-world feedback and data — not assumptions.",
  },
];

/** Why Choose Us cards for the /services index page. */
export const SERVICES_WHY_US: WhyUsItem[] = [
  {
    title: "Senior-only team",
    desc: "Every engagement is run by a senior operator. No juniors, no hand-offs. The people who pitch are the people who build.",
  },
  {
    title: "Outcome-focused",
    desc: "We scope to results, not hours. You'll always know what metric we're optimising and how we're tracking against it.",
  },
  {
    title: "Transparent pricing",
    desc: "Fixed-scope builds and clearly tiered retainers. No hidden fees, no surprise invoices at the end of the month.",
  },
  {
    title: "Full-stack capability",
    desc: "Six practices under one roof means you get cohesive strategy — no agency-to-agency hand-off gaps or blame-shifting.",
  },
  {
    title: "Fast to start",
    desc: "Most engagements kick off within 5 business days. Discovery call → proposal → kickoff — that's the whole process.",
  },
  {
    title: "You own everything",
    desc: "Code, accounts, data, creative assets. All of it transfers to you. We work in your accounts, on your repos.",
  },
];

/** FAQ items for the /services index page. */
export const SERVICES_FAQ: FaqItem[] = [
  {
    q: "Can I hire you for just one service?",
    a: "Absolutely. Most clients start with one practice — SEO, ads, or a web build — and expand from there. There's no minimum commitment beyond the service itself.",
  },
  {
    q: "How fast can we get started?",
    a: "Most engagements kick off within 5 business days. Discovery call → proposal → kickoff. We don't drag out the sales process.",
  },
  {
    q: "Do you work with early-stage startups?",
    a: "Yes — we have a dedicated track for funded startups with discounted Pilot pricing across most services.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Always. Mutual NDA is standard before any discovery call involving confidential material.",
  },
  {
    q: "Where is your team based?",
    a: "Distributed across North America, Europe, and Asia. Async-first, with overlap hours for every client timezone.",
  },
  {
    q: "What stack do you use?",
    a: "We're stack-agnostic but lean React/TypeScript for web, Python/Node for AI, and Shopify for commerce. We'll use what fits your existing team.",
  },
  {
    q: "Do you offer fixed-price or retainer?",
    a: "Both. Builds are usually fixed-scope; ongoing services (SEO, Ads, Social) are monthly retainers with no lock-in after the first 3 months.",
  },
];