export type Location = {
  slug: string;
  city: string;
  region: string;
  country: string;
  countryCode: string;
  flag: string;
  hero: string;
  intro: string;
  localKeywords: string[];
  highlights: { t: string; d: string }[];
  industries: string[];
  testimonial?: { quote: string; name: string; role: string };
};

export const LOCATIONS: Location[] = [
  {
    slug: "nigeria",
    city: "Nigeria",
    region: "West Africa",
    country: "Nigeria",
    countryCode: "NG",
    flag: "🇳🇬",
    hero: "https://images.unsplash.com/photo-1618828665011-0abd973f7bb8?w=1600&q=80",
    intro: "Globe Stack partners with Nigerian startups, SMEs, and enterprises across Lagos, Abuja, Port Harcourt, and Kano. We deliver world-class web, SaaS, AI, SEO, and Shopify work — billed in NGN or USD.",
    localKeywords: ["web development Nigeria", "SEO agency Lagos", "AI solutions Abuja", "Shopify designer Nigeria", "SaaS developer Lagos"],
    highlights: [
      { t: "Local + global", d: "Nigerian roots, global delivery standards. We sell to your customers in Lagos and London." },
      { t: "NGN pricing", d: "Transparent NGN invoicing with USD parity for international clients." },
      { t: "Same-day calls", d: "WAT-friendly hours, on Slack and WhatsApp." },
    ],
    industries: ["Fintech", "E-commerce", "EdTech", "Logistics", "Media"],
    testimonial: { quote: "Globe Stack rebuilt our fintech dashboard and shipped on time. Best engineering team we've worked with in Nigeria.", name: "Adaeze O.", role: "CTO, Lagos fintech" },
  },
  {
    slug: "lagos",
    city: "Lagos",
    region: "Lagos State",
    country: "Nigeria",
    countryCode: "NG",
    flag: "🇳🇬",
    hero: "https://images.unsplash.com/photo-1618828665011-0abd973f7bb8?w=1600&q=80",
    intro: "Lagos is the engine of African tech. We build for Lagos brands across Victoria Island, Lekki, Ikeja, and Yaba — from MVPs to scale-ups.",
    localKeywords: ["web development Lagos", "Lagos SEO agency", "Lagos Shopify expert", "Lagos software developer", "AI startup Lagos"],
    highlights: [
      { t: "On-the-ground in Lagos", d: "We meet in VI, Lekki, and Ikeja. In-person workshops available." },
      { t: "Naira-friendly", d: "Local invoicing, local payments, local context." },
      { t: "Investor-ready", d: "Decks, demo days, and growth metrics our team has shipped before." },
    ],
    industries: ["Fintech", "PayTech", "Logistics", "E-commerce", "EdTech"],
  },
  {
    slug: "abuja",
    city: "Abuja",
    region: "FCT",
    country: "Nigeria",
    countryCode: "NG",
    flag: "🇳🇬",
    hero: "https://images.unsplash.com/photo-1618828665011-0abd973f7bb8?w=1600&q=80",
    intro: "Abuja's government, NGOs, and enterprise clients trust Globe Stack for compliant, secure, scalable digital products.",
    localKeywords: ["web development Abuja", "Abuja SEO", "Abuja software company", "Abuja AI consultant"],
    highlights: [
      { t: "Government-grade", d: "We work with public-sector and NGO clients on compliant builds." },
      { t: "Enterprise comfort", d: "SSO, audit logs, and security baked in." },
      { t: "Hybrid delivery", d: "Async-first with Abuja-friendly meeting hours." },
    ],
    industries: ["Government", "Healthcare", "NGO", "Energy"],
  },
  {
    slug: "usa",
    city: "United States",
    region: "North America",
    country: "United States",
    countryCode: "US",
    flag: "🇺🇸",
    hero: "https://images.unsplash.com/photo-1496588152823-86ff7695e68f?w=1600&q=80",
    intro: "From SF to NYC, Austin to Miami — Globe Stack ships product for venture-backed US startups and growth-stage companies.",
    localKeywords: ["web development USA", "SaaS developer USA", "SEO agency United States", "AI consultant US", "Shopify expert USA"],
    highlights: [
      { t: "Coast-to-coast coverage", d: "PT–ET overlap hours, weekly demos, async-first." },
      { t: "USD billing", d: "Net-30, ACH, wire — paperwork your finance team will thank you for." },
      { t: "MSA-ready", d: "DPAs, NDAs, BAAs, SOC2-friendly architecture available." },
    ],
    industries: ["SaaS", "Fintech", "AI", "DTC", "Healthtech"],
    testimonial: { quote: "They feel like an in-house team. Our SaaS shipped in 9 weeks.", name: "Jamie L.", role: "Founder, NYC SaaS" },
  },
  {
    slug: "uk",
    city: "United Kingdom",
    region: "Europe",
    country: "United Kingdom",
    countryCode: "GB",
    flag: "🇬🇧",
    hero: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1600&q=80",
    intro: "London, Manchester, Edinburgh — we partner with UK fintech, retail, and B2B SaaS teams on web, AI, and growth.",
    localKeywords: ["web development UK", "SEO agency London", "Shopify designer UK", "AI agency UK", "SaaS developer London"],
    highlights: [
      { t: "GMT overlap", d: "Daily standups in your timezone." },
      { t: "GDPR-native", d: "DPA, DPO support, and EU data residency available." },
      { t: "GBP / EUR billing", d: "Invoicing in your currency, VAT-compliant." },
    ],
    industries: ["Fintech", "Retail", "Media", "B2B SaaS"],
  },
  {
    slug: "canada",
    city: "Canada",
    region: "North America",
    country: "Canada",
    countryCode: "CA",
    flag: "🇨🇦",
    hero: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=1600&q=80",
    intro: "Toronto, Vancouver, Montreal — Globe Stack helps Canadian startups and enterprises build and grow digital products.",
    localKeywords: ["web development Canada", "Toronto SEO agency", "Vancouver software developer", "Canadian SaaS builder"],
    highlights: [
      { t: "Canadian-friendly hours", d: "PT and ET overlap with weekly demos." },
      { t: "PIPEDA-compliant", d: "Privacy and data handling that matches Canadian law." },
      { t: "CAD billing", d: "Invoice in CAD or USD." },
    ],
    industries: ["SaaS", "Cleantech", "Fintech", "Healthtech"],
  },
  {
    slug: "india",
    city: "India",
    region: "South Asia",
    country: "India",
    countryCode: "IN",
    flag: "🇮🇳",
    hero: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=1600&q=80",
    intro: "Bangalore, Mumbai, Delhi, Hyderabad — Globe Stack works with Indian product teams scaling globally.",
    localKeywords: ["web development India", "SEO agency Bangalore", "Shopify expert India", "AI consultant Mumbai"],
    highlights: [
      { t: "IST overlap", d: "Indian working hours, daily syncs." },
      { t: "INR / USD billing", d: "Invoice in INR with GST or USD globally." },
      { t: "Global standards", d: "We deliver work that's competitive with anyone in SF or London." },
    ],
    industries: ["SaaS", "EdTech", "Fintech", "D2C"],
  },
  {
    slug: "france",
    city: "France",
    region: "Europe",
    country: "France",
    countryCode: "FR",
    flag: "🇫🇷",
    hero: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1600&q=80",
    intro: "Paris, Lyon, Bordeaux — nous aidons les marques françaises à construire des produits numériques de classe mondiale.",
    localKeywords: ["développement web France", "agence SEO Paris", "expert Shopify France", "agence IA Paris"],
    highlights: [
      { t: "Heures CET", d: "Standups quotidiens à votre fuseau horaire." },
      { t: "RGPD-natif", d: "Conformité RGPD, DPA, hébergement UE disponibles." },
      { t: "Facturation EUR", d: "TVA-compatible, paiement SEPA." },
    ],
    industries: ["Luxe", "DTC", "SaaS", "Médias"],
  },
  {
    slug: "germany",
    city: "Germany",
    region: "Europe",
    country: "Germany",
    countryCode: "DE",
    flag: "🇩🇪",
    hero: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1600&q=80",
    intro: "Berlin, München, Hamburg — Globe Stack baut digitale Produkte für deutsche Startups und den Mittelstand.",
    localKeywords: ["Webentwicklung Deutschland", "SEO Agentur Berlin", "Shopify Experten München", "KI Agentur Deutschland"],
    highlights: [
      { t: "CET-Stunden", d: "Tägliche Stand-ups in Ihrer Zeitzone." },
      { t: "DSGVO-konform", d: "AVV, DPO-Support, EU-Hosting verfügbar." },
      { t: "EUR-Rechnung", d: "USt.-konform, SEPA-Zahlung." },
    ],
    industries: ["B2B SaaS", "Industrie 4.0", "Mittelstand", "Fintech"],
  },
];

export function findLocation(slug: string) {
  return LOCATIONS.find((l) => l.slug === slug);
}
