import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PageHero, CTA } from "@/components/section";
import { LOCATIONS } from "@/lib/locations";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/locations/")({
  head: () =>
    seo({
      title: "Where We Work — Nigeria, USA, UK, Canada, India, France, Germany | Globe Stack",
      description: "Globe Stack delivers web, SaaS, AI, SEO, social & ads, and Shopify across Nigeria (Lagos, Abuja), USA, UK, Canada, India, France, Germany and worldwide.",
      path: "/locations",
    }),
  component: LocationsIndex,
});

function LocationsIndex() {
  return (
    <>
      <PageHero
        image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80"
        eyebrow="Global delivery"
        title={<>Where we <span className="text-gradient">work</span>.</>}
        desc="Nigerian roots, global delivery. Pick your region for local context, currency, and case studies."
      />
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {LOCATIONS.map((l, i) => (
            <motion.div
              key={l.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.05 }}
              whileHover={{ y: -6 }}
            >
              <Link
                to="/locations/$slug"
                params={{ slug: l.slug }}
                className="group relative block aspect-[4/3] overflow-hidden rounded-3xl border border-border"
              >
                <img src={l.hero} alt={l.city} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
                <div className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-xl border border-white/20 bg-white/10 text-2xl backdrop-blur">{l.flag}</div>
                <ArrowUpRight className="absolute left-5 top-5 h-5 w-5 text-white/70 opacity-0 transition group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <div className="font-mono text-[10px] uppercase tracking-wider text-white/70">{l.region}</div>
                  <h2 className="mt-1 font-display text-2xl font-semibold">{l.city}</h2>
                  <p className="mt-2 line-clamp-2 text-sm text-white/85">{l.intro}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      <CTA />
    </>
  );
}
