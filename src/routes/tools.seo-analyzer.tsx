import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Search, Loader2, Check, X, AlertTriangle, Zap, ExternalLink } from "lucide-react";
import { PageHero, CTA } from "@/components/section";

import { seo } from "@/lib/seo";

export const Route = createFileRoute("/tools/seo-analyzer")({
  head: () => seo({
    title: "Free SEO Analyzer — Rexsolv",
    description: "Free, instant SEO audit. Analyze any URL for meta tags, headings, images, and more.",
    path: "/tools/seo-analyzer",
  }),
  component: SeoAnalyzer,
});

type Check = { label: string; status: "pass" | "warn" | "fail"; detail: string };
type Result = {
  url: string;
  title: string;
  description: string;
  score: number;
  checks: Check[];
  stats: { headings: Record<string, number>; images: number; imagesNoAlt: number; links: number; words: number };
};

const PROXIES = [
  (u: string) => `https://api.allorigins.win/raw?url=${encodeURIComponent(u)}`,
  (u: string) => `https://corsproxy.io/?${encodeURIComponent(u)}`,
];

async function fetchHtml(url: string): Promise<string> {
  let lastErr: unknown;
  for (const p of PROXIES) {
    try {
      const res = await fetch(p(url));
      if (!res.ok) continue;
      const text = await res.text();
      if (text && text.length > 100) return text;
    } catch (e) { lastErr = e; }
  }
  throw new Error("Could not fetch the URL. It may block proxies. Try another URL.");
}

function analyze(url: string, html: string): Result {
  const doc = new DOMParser().parseFromString(html, "text/html");
  const title = doc.querySelector("title")?.textContent?.trim() ?? "";
  const description = doc.querySelector('meta[name="description"]')?.getAttribute("content")?.trim() ?? "";
  const ogTitle = doc.querySelector('meta[property="og:title"]')?.getAttribute("content") ?? "";
  const ogImage = doc.querySelector('meta[property="og:image"]')?.getAttribute("content") ?? "";
  const canonical = doc.querySelector('link[rel="canonical"]')?.getAttribute("href") ?? "";
  const viewport = doc.querySelector('meta[name="viewport"]')?.getAttribute("content") ?? "";
  const h1s = doc.querySelectorAll("h1");
  const headings = { h1: h1s.length, h2: doc.querySelectorAll("h2").length, h3: doc.querySelectorAll("h3").length };
  const imgs = Array.from(doc.querySelectorAll("img"));
  const imagesNoAlt = imgs.filter((i) => !i.getAttribute("alt")).length;
  const links = doc.querySelectorAll("a[href]").length;
  const text = doc.body?.textContent?.replace(/\s+/g, " ").trim() ?? "";
  const words = text.split(" ").filter(Boolean).length;
  const lang = doc.documentElement.getAttribute("lang") ?? "";
  const ld = doc.querySelectorAll('script[type="application/ld+json"]').length;

  const checks: Check[] = [
    { label: "Title tag", status: title ? (title.length >= 30 && title.length <= 65 ? "pass" : "warn") : "fail", detail: title ? `${title.length} chars — "${title}"` : "Missing <title>." },
    { label: "Meta description", status: description ? (description.length >= 70 && description.length <= 160 ? "pass" : "warn") : "fail", detail: description ? `${description.length} chars` : "Missing meta description." },
    { label: "Single H1", status: h1s.length === 1 ? "pass" : h1s.length === 0 ? "fail" : "warn", detail: `Found ${h1s.length} <h1> tag${h1s.length === 1 ? "" : "s"}.` },
    { label: "Heading structure", status: headings.h2 > 0 ? "pass" : "warn", detail: `H2: ${headings.h2}, H3: ${headings.h3}` },
    { label: "Image alt text", status: imgs.length === 0 ? "warn" : imagesNoAlt === 0 ? "pass" : imagesNoAlt < imgs.length / 3 ? "warn" : "fail", detail: imgs.length === 0 ? "No images detected." : `${imagesNoAlt} of ${imgs.length} images missing alt.` },
    { label: "Open Graph", status: ogTitle && ogImage ? "pass" : ogTitle || ogImage ? "warn" : "fail", detail: `og:title ${ogTitle ? "✓" : "✗"} · og:image ${ogImage ? "✓" : "✗"}` },
    { label: "Canonical URL", status: canonical ? "pass" : "warn", detail: canonical || "No <link rel=canonical> found." },
    { label: "Mobile viewport", status: viewport ? "pass" : "fail", detail: viewport || "Missing viewport meta." },
    { label: "Lang attribute", status: lang ? "pass" : "warn", detail: lang ? `lang="${lang}"` : "Missing <html lang>." },
    { label: "Structured data", status: ld > 0 ? "pass" : "warn", detail: ld > 0 ? `${ld} JSON-LD block(s)` : "No JSON-LD detected." },
    { label: "Word count", status: words > 300 ? "pass" : words > 100 ? "warn" : "fail", detail: `~${words.toLocaleString()} words on page.` },
    { label: "HTTPS", status: url.startsWith("https://") ? "pass" : "fail", detail: url.startsWith("https://") ? "Secure." : "Not served over HTTPS." },
  ];

  const score = Math.round((checks.filter((c) => c.status === "pass").length / checks.length) * 100);

  return { url, title, description, score, checks, stats: { headings, images: imgs.length, imagesNoAlt, links, words } };
}

function SeoAnalyzer() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Result | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setResult(null);
    let target = url.trim();
    if (!target) return;
    if (!/^https?:\/\//.test(target)) target = "https://" + target;
    try {
      new URL(target);
    } catch {
      setError("Please enter a valid URL.");
      return;
    }
    setLoading(true);
    try {
      const html = await fetchHtml(target);
      setResult(analyze(target, html));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <PageHero image="/media/back.jpg" eyebrow="Free Tool" title={<>Free <span className="text-gradient">SEO Analyzer.</span></>} desc="Get an instant SEO audit of any public URL — meta tags, headings, images, structured data, and more.">
        <form onSubmit={onSubmit} className="mt-2 flex max-w-2xl flex-col gap-2 sm:flex-row">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input value={url} onChange={(e) => setUrl(e.target.value)} placeholder="https://example.com" className="w-full rounded-md border border-input bg-background py-3 pl-10 pr-3 text-sm" />
          </div>
          <button disabled={loading} className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground disabled:opacity-50">
            {loading ? <><Loader2 className="h-4 w-4 animate-spin" /> Analyzing</> : <><Zap className="h-4 w-4" /> Analyze</>}
          </button>
        </form>
        {error && <div className="mt-3 inline-flex items-center gap-2 rounded-md border border-destructive/50 bg-destructive/10 px-3 py-2 text-sm text-destructive"><AlertTriangle className="h-4 w-4" /> {error}</div>}
      </PageHero>

      <div className="mx-auto max-w-5xl px-4 py-16 md:px-6">
        {!result && !loading && (
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { t: "Meta & OG tags", d: "Title, description, Open Graph, Twitter cards." },
              { t: "Content structure", d: "Headings, word count, link analysis." },
              { t: "Technical signals", d: "Canonical, viewport, lang, HTTPS, structured data." },
            ].map((c) => (
              <div key={c.t} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-display text-lg font-semibold">{c.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
        )}

        {result && (
          <div className="space-y-6">
            <div className="grid items-center gap-6 rounded-2xl border border-border bg-card p-8 md:grid-cols-[auto_1fr]">
              <ScoreRing score={result.score} />
              <div>
                <a href={result.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 font-mono text-xs text-muted-foreground hover:text-foreground">{result.url} <ExternalLink className="h-3 w-3" /></a>
                <h2 className="mt-2 font-display text-2xl font-semibold leading-tight">{result.title || "(no title)"}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{result.description || "(no description)"}</p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs">
                  <Stat label="H1" value={result.stats.headings.h1} />
                  <Stat label="H2" value={result.stats.headings.h2} />
                  <Stat label="Images" value={result.stats.images} />
                  <Stat label="No alt" value={result.stats.imagesNoAlt} />
                  <Stat label="Links" value={result.stats.links} />
                  <Stat label="Words" value={result.stats.words} />
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              {result.checks.map((c, i) => (
                <div key={c.label} className={`flex items-start gap-4 p-5 ${i > 0 ? "border-t border-border" : ""}`}>
                  <StatusIcon status={c.status} />
                  <div className="flex-1">
                    <div className="font-medium">{c.label}</div>
                    <div className="mt-0.5 text-sm text-muted-foreground">{c.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <CTA title="Want experts to fix this for you?" desc="Our SEO team turns audits into rankings. See our SEO retainer plans." />
    </>
  );
}

function ScoreRing({ score }: { score: number }) {
  const circumference = 2 * Math.PI * 42;
  const offset = circumference - (score / 100) * circumference;
  const color = score >= 80 ? "var(--neon)" : score >= 60 ? "oklch(0.78 0.18 80)" : "oklch(0.65 0.22 25)";
  return (
    <div className="relative grid h-32 w-32 place-items-center">
      <svg className="absolute inset-0 -rotate-90" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="42" fill="none" stroke="var(--border)" strokeWidth="8" />
        <circle cx="50" cy="50" r="42" fill="none" stroke={color} strokeWidth="8" strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={offset} />
      </svg>
      <div className="text-center">
        <div className="font-display text-3xl font-bold">{score}</div>
        <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Score</div>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return <span className="rounded-md bg-muted px-2 py-1 font-mono"><b>{value}</b> {label}</span>;
}

function StatusIcon({ status }: { status: "pass" | "warn" | "fail" }) {
  if (status === "pass") return <div className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[var(--neon)]/20 text-[var(--neon)]"><Check className="h-4 w-4" /></div>;
  if (status === "warn") return <div className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-yellow-500/20 text-yellow-500"><AlertTriangle className="h-4 w-4" /></div>;
  return <div className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-destructive/20 text-destructive"><X className="h-4 w-4" /></div>;
}
