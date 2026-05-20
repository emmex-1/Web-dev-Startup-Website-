import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { SITE_URL, organizationJsonLd, websiteJsonLd } from "@/lib/seo";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-gradient">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">The page you're looking for doesn't exist.</p>
        <a href="/" className="mt-6 inline-flex rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">Go home</a>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
        <button onClick={() => { router.invalidate(); reset(); }} className="mt-6 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">Try again</button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#0a0a0f" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "format-detection", content: "telephone=no" },
      { name: "author", content: "Globe Stack" },
      { name: "keywords", content: "web development, SEO, AI solutions, ads management, social media, Shopify, tech studio" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/og-default.svg", type: "image/svg+xml" },
      { rel: "alternate", type: "application/rss+xml", title: "Globe Stack Blog", href: `${SITE_URL}/blog` },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(organizationJsonLd()) },
      { type: "application/ld+json", children: JSON.stringify(websiteJsonLd()) },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
        <script dangerouslySetInnerHTML={{ __html: `try{var t=localStorage.getItem('theme')||'dark';document.documentElement.classList.toggle('dark',t==='dark');}catch(e){}` }} />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            <Outlet />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
