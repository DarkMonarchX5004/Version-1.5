import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { Toaster } from "@/components/ui/sonner";
import { CartProvider } from "@/lib/cart-context";
import { CartDrawer } from "@/components/canevia/CartDrawer";
import { CheckoutModal } from "@/components/canevia/CheckoutModal";
import { B2BModal } from "@/components/canevia/B2BModal";
import { CommandSearch } from "@/components/canevia/CommandSearch";
import { MagneticCursor } from "@/components/canevia/MagneticCursor";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#080807] text-[#FAF7F0] px-6">
      <div className="max-w-md text-center">
        <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase font-semibold">
          Error 404
        </span>
        <h1 className="mt-2 text-7xl font-display font-semibold text-white">404</h1>
        <h2 className="mt-4 text-xl font-display font-medium text-white">
          Page Not Found
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-[#A8A49A] leading-relaxed">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-[#D4AF37] px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#080807] transition-all hover:bg-[#EAD698] shadow-md"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#080807] text-[#FAF7F0] px-6">
      <div className="max-w-md text-center">
        <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase font-semibold">
          Notice
        </span>
        <h1 className="mt-2 text-xl font-display font-semibold text-white">
          Something went wrong
        </h1>
        <p className="mt-2 text-xs text-[#A8A49A] leading-relaxed">
          An unexpected error occurred while loading this page. You can try reloading or return home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-[#D4AF37] px-5 py-2 text-xs font-semibold uppercase tracking-wider text-[#080807] transition-colors hover:bg-[#EAD698]"
          >
            Try Again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-[#282824] bg-[#141412] px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[#1E1E1A]"
          >
            Return Home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#080807" },
      { name: "author", content: "Kothule Industries" },
      { property: "og:site_name", content: "CANEVIA Pure Sugarcane Jaggery" },
      { property: "og:locale", content: "en_IN" },
      { name: "format-detection", content: "telephone=no" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;800&family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap",
      },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "CANEVIA",
          legalName: "Kothule Industries",
          url: "https://canevia.com",
          logo: "https://canevia.com/favicon.png",
          description:
            "Pure single-origin sugarcane jaggery crafted by Kothule Industries in Maharashtra. Hand-cut golden cubes, fine powder, and slow-boiled syrup clarified naturally with wild okra.",
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+91-9922341509",
            contactType: "Customer Support & Wholesale Desk",
            email: "princegojo5004@gmail.com",
            areaServed: "IN",
            availableLanguage: ["English", "Hindi", "Marathi"],
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark bg-[#080807]">
      <head>
        <HeadContent />
      </head>
      <body className="bg-[#080807] text-[#FAF7F0] selection:bg-[#D4AF37] selection:text-[#080807] overflow-x-hidden antialiased">
        <div className="film-grain" aria-hidden="true" />
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
      <CartProvider>
        <MagneticCursor />
        <Outlet />
        <CartDrawer />
        <CheckoutModal />
        <B2BModal />
        <CommandSearch />
        <Toaster
          position="bottom-right"
          richColors
          toastOptions={{
            style: {
              background: "#141412",
              border: "1px solid #282824",
              color: "#FAF7F0",
            },
          }}
        />
      </CartProvider>
    </QueryClientProvider>
  );
}
