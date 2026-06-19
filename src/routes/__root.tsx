import { Outlet, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/hooks/useAuth";

import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "StarSeeker — Find Your Astrologer" },
      { name: "description", content: "Browse 200+ verified astrologers for birth chart readings, compatibility, career guidance, and more. No booking fees. No middlemen." },
      { name: "author", content: "StarSeeker" },
      { property: "og:title", content: "StarSeeker — Find Your Astrologer" },
      { property: "og:description", content: "Browse 200+ verified astrologers for birth chart readings, compatibility, career guidance, and more. No booking fees. No middlemen." },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "StarSeeker — Find Your Astrologer" },
      { name: "twitter:description", content: "Browse 200+ verified astrologers for birth chart readings, compatibility, career guidance, and more. No booking fees. No middlemen." },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Miranda+Sans:wght@400;500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
}
