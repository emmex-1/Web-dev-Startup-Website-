import { Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { Menu, X, Moon, Sun, ChevronDown, Globe, ChevronRight, ArrowUpRight } from "lucide-react";
import { useTheme } from "./theme-provider";
import { SERVICES } from "@/lib/site";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/pricing", label: "Pricing" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

// ── Services Sub-Screen for mobile drawer ──
function ServicesSubScreen({
  onBack,
  onClose,
}: {
  onBack: () => void;
  onClose: () => void;
}) {
  return (
    <div className="absolute inset-0 flex flex-col bg-background overflow-y-auto animate-slide-in-right">
      {/* Sub-screen header */}
      <div className="flex items-center gap-3 px-5 pt-5 pb-4 border-b border-border shrink-0">
        <button
          onClick={onBack}
          className="flex items-center justify-center w-9 h-9 rounded-full border border-border bg-muted cursor-pointer"
          aria-label="Back"
        >
          <ChevronRight className="h-4 w-4 rotate-180 text-foreground" />
        </button>
        <span className="font-semibold text-base text-foreground">Services</span>
      </div>

      <div className="flex-1 px-5 py-5 space-y-2">
        <Link
          to="/services"
          onClick={onClose}
          className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold text-primary hover:bg-muted transition-colors"
        >
          All Services
          <ArrowUpRight className="h-4 w-4" />
        </Link>
        <div className="border-t border-border my-2" />
        {SERVICES.map((s) => (
          <Link
            key={s.slug}
            to="/services/$slug"
            params={{ slug: s.slug }}
            onClick={onClose}
            className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-muted transition-colors group"
          >
            <div>
              <div className="text-sm font-medium text-foreground">{s.title}</div>
              {/* <div className="text-xs text-muted-foreground mt-0.5">{s.short}</div> */}
            </div>
            <ChevronRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
          </Link>
        ))}
      </div>
    </div>
  );
}

export function Header() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false);
  const [mobileSubScreen, setMobileSubScreen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Track scroll for background state adaptations
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const closeAll = () => {
    setOpen(false);
    setMobileSubScreen(false);
  };

  const handleSvcEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setSvcOpen(true);
  };
  const handleSvcLeave = () => {
    closeTimer.current = setTimeout(() => setSvcOpen(false), 180);
  };

  return (
    <>
      {/* ── Outer wrapper container mimicking style of Code 1 ── */}
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}>
        <div className="mx-auto max-w-7xl px-4">
          <div
            className={`flex items-center justify-between px-4 md:px-6 py-3 transition-all duration-300 ${
              scrolled ? "glass rounded-2xl shadow-lg" : "rounded-2xl"
            }`}
          >
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 font-display text-lg font-bold shrink-0"
            >
              <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-[var(--neon)] to-[var(--neon-violet)] text-background glow">
                <Globe className="h-4 w-4" strokeWidth={2.5} />
              </span>
              Globe<span className="text-gradient">Stack</span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-0.5 lg:flex">
              {NAV.slice(0, 2).map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  className="relative rounded-full px-3 py-1.5 text-sm text-muted-foreground transition hover:text-foreground hover:bg-muted"
                  activeProps={{ className: "relative rounded-full px-3 py-1.5 text-sm text-foreground font-medium bg-muted" }}
                  activeOptions={{ exact: true }}
                >
                  {n.label}
                </Link>
              ))}

              {/* Services dropdown */}
              <div
                className="relative"
                onMouseEnter={handleSvcEnter}
                onMouseLeave={handleSvcLeave}
              >
                <Link
                  to="/services"
                  className="flex items-center gap-1 rounded-full px-3 py-1.5 text-sm text-muted-foreground transition hover:text-foreground hover:bg-muted"
                >
                  Services
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${svcOpen ? "rotate-180" : ""}`}
                  />
                </Link>
                {svcOpen && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full w-80 pt-3">
                    <div className="rounded-2xl border border-border bg-popover p-2 shadow-xl">
                      <Link
                        to="/services"
                        className="block rounded-xl px-3 py-2 text-sm font-medium hover:bg-muted transition-colors"
                      >
                        All Services →
                      </Link>
                      <div className="my-1 border-t border-border" />
                      {SERVICES.map((s) => (
                        <Link
                          key={s.slug}
                          to="/services/$slug"
                          params={{ slug: s.slug }}
                          className="block rounded-xl px-3 py-2 hover:bg-muted transition-colors"
                        >
                          <div className="text-sm font-medium">{s.title}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {NAV.slice(2).map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  className="relative rounded-full px-3 py-1.5 text-sm text-muted-foreground transition hover:text-foreground hover:bg-muted"
                  activeProps={{ className: "relative rounded-full px-3 py-1.5 text-sm text-foreground font-medium bg-muted" }}
                >
                  {n.label}
                </Link>
              ))}

              <Link
                to="/tools/seo-analyzer"
                className="ml-2 rounded-full border border-glow px-3 py-1.5 text-sm font-medium text-foreground hover:bg-muted transition-colors"
              >
                Free SEO Tool
              </Link>
            </nav>

            {/* Right controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggle}
                aria-label="Toggle theme"
                className="grid h-9 w-9 place-items-center rounded-full border border-border hover:bg-muted transition-colors"
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </button>

              <Link
                to="/contact"
                className="hidden rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity md:inline-block"
              >
                Start a project
              </Link>

              {/* Burger */}
              <button
                onClick={() => setOpen((v) => !v)}
                aria-label="Toggle menu"
                className="grid h-9 w-9 place-items-center rounded-full border border-border hover:bg-muted transition-colors lg:hidden"
                style={{ background: open ? "hsl(var(--primary))" : undefined }}
              >
                {open ? (
                  <X className="h-4 w-4 text-primary-foreground" />
                ) : (
                  <Menu className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── MOBILE FULLSCREEN DRAWER ── */}
      {open && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 lg:hidden bg-black/50 backdrop-blur-sm"
            onClick={closeAll}
          />

          {/* Drawer panel */}
          <div
            className="fixed z-50 lg:hidden flex flex-col overflow-hidden"
            style={{
              bottom: 0,
              left: 0,
              right: 0,
              top: "68px",
              background: "hsl(var(--background))",
              borderTopLeftRadius: 28,
              borderTopRightRadius: 28,
              borderTop: "1px solid hsl(var(--border))",
            }}
          >
            {/* Drag handle pill */}
            <div className="flex justify-center pt-3 pb-1 shrink-0">
              <div className="w-10 h-1 rounded-full bg-muted-foreground/30" />
            </div>

            {/* Inner container — clips sub-screen */}
            <div className="relative flex-1 overflow-hidden">

              {/* Main screen */}
              {!mobileSubScreen && (
                <div className="absolute inset-0 flex flex-col overflow-y-auto">
                  <nav className="flex-1 px-4 pt-3 pb-4 space-y-1">
                    {NAV.map((n) => (
                      <Link
                        key={n.to}
                        to={n.to}
                        onClick={closeAll}
                        className="flex items-center justify-between px-4 py-3.5 rounded-2xl text-base font-medium text-foreground hover:bg-muted transition-colors"
                        activeProps={{ className: "flex items-center justify-between px-4 py-3.5 rounded-2xl text-base font-medium bg-primary text-primary-foreground" }}
                        activeOptions={{ exact: n.to === "/" }}
                      >
                        {n.label}
                      </Link>
                    ))}

                    {/* Services trigger */}
                    <button
                      onClick={() => setMobileSubScreen(true)}
                      className="w-full flex items-center justify-between px-4 py-3.5 rounded-2xl text-base font-medium text-foreground hover:bg-muted transition-colors border-none bg-transparent cursor-pointer"
                    >
                      <span>Services</span>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                          {SERVICES.length} services
                        </span>
                        <ChevronRight className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </button>

                    <Link
                      to="/tools/seo-analyzer"
                      onClick={closeAll}
                      className="flex items-center px-4 py-3.5 rounded-2xl text-base font-medium text-gradient hover:bg-muted transition-colors"
                    >
                      Free SEO Analyzer
                    </Link>
                  </nav>

                  {/* Bottom CTA */}
                  <div className="shrink-0 px-4 pb-8 pt-3 border-t border-border">
                    <p className="text-muted-foreground text-xs text-center mb-3">
                      Ready to grow your digital presence?
                    </p>
                    <Link to="/contact" onClick={closeAll}>
                      <button className="w-full flex items-center justify-center gap-3 bg-primary hover:opacity-90 text-primary-foreground font-bold text-sm rounded-2xl px-6 py-4 transition-opacity border-none cursor-pointer">
                        Start a Project
                        <span className="flex items-center justify-center w-7 h-7 rounded-full bg-primary-foreground/20 shrink-0">
                          <ArrowUpRight className="h-4 w-4" />
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
              )}

              {/* Services sub-screen */}
              {mobileSubScreen && (
                <ServicesSubScreen
                  onBack={() => setMobileSubScreen(false)}
                  onClose={closeAll}
                />
              )}
            </div>
          </div>
        </>
      )}

      <style>{`
        @keyframes slide-in-right {
          from { transform: translateX(100%); }
          to   { transform: translateX(0); }
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.28s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
      `}</style>
    </>
  );
}