import { o as notFound } from "../_libs/tanstack__router-core.mjs";
import { c as createRouter, a as createRootRoute, b as createFileRoute, l as lazyRouteComponent, H as HeadContent, S as Scripts, O as Outlet, L as Link } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { z as zodValidator, f as fallback } from "../_libs/tanstack__zod-adapter.mjs";
import { c as createClient } from "../_libs/supabase__supabase-js.mjs";
import { S as Sparkles, C as CircleCheck, M as MapPin, a as Star } from "../_libs/lucide-react.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/tiny-invariant.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/tiny-warning.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
const AuthContext = reactExports.createContext({
  user: null,
  session: null,
  loading: true,
  signOut: async () => {
  }
});
function useAuth() {
  return reactExports.useContext(AuthContext);
}
function AuthProvider({ children }) {
  const [user, setUser] = reactExports.useState(null);
  const [session, setSession] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    if (typeof window === "undefined") {
      setLoading(false);
      return;
    }
    let subscription;
    import("./client-CEawXNEK.mjs").then(({ supabase }) => {
      const { data } = supabase.auth.onAuthStateChange((_event, session2) => {
        setSession(session2);
        setUser(session2?.user ?? null);
        setLoading(false);
      });
      subscription = data.subscription;
      supabase.auth.getSession().then(({ data: { session: session2 } }) => {
        setSession(session2);
        setUser(session2?.user ?? null);
        setLoading(false);
      });
    }).catch(() => {
      setLoading(false);
    });
    return () => {
      subscription?.unsubscribe();
    };
  }, []);
  const signOut = reactExports.useCallback(async () => {
    if (typeof window === "undefined") return;
    const { supabase } = await import("./client-CEawXNEK.mjs");
    await supabase.auth.signOut();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AuthContext, { value: { user, session, loading, signOut }, children });
}
const appCss = "/assets/styles-yp4LvFtq.css";
const Route$l = createRootRoute({
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
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Miranda+Sans:wght@400;500;600;700&display=swap" }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AuthProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
const $$splitComponentImporter$j = () => import("./specialities-DLxGRi25.mjs");
const Route$k = createFileRoute("/specialities")({
  head: () => ({
    meta: [{
      title: "Browse Astrologers by Speciality │ StarSeeker"
    }, {
      name: "description",
      content: "Every astrologer has a tradition and an approach — Vedic, Western, Psychological, Evolutionary, Karmic and more. Browse all 30+ specialities and find the right practitioner."
    }, {
      property: "og:title",
      content: "Browse Astrologers by Speciality │ StarSeeker"
    }, {
      property: "og:description",
      content: "Browse 30+ astrology specialities and find the tradition that resonates with you."
    }, {
      property: "og:url",
      content: "/specialities"
    }],
    links: [{
      rel: "canonical",
      href: "/specialities"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$j, "component")
});
const $$splitComponentImporter$i = () => import("./sessions-BIVSzEFC.mjs");
const Route$j = createFileRoute("/sessions")({
  head: () => ({
    meta: [{
      title: "Find an Astrologer for Your Reading │ StarSeeker"
    }, {
      name: "description",
      content: "Whatever life question is calling for clarity, we have an astrologer who specialises in exactly that. Browse all session types to find practitioners who focus on what matters most."
    }, {
      property: "og:title",
      content: "Find an Astrologer for Your Reading │ StarSeeker"
    }, {
      property: "og:description",
      content: "Browse every type of astrology session — birth charts, synastry, transits, solar returns, and more."
    }, {
      property: "og:url",
      content: "/sessions"
    }],
    links: [{
      rel: "canonical",
      href: "/sessions"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$i, "component")
});
const $$splitComponentImporter$h = () => import("./login-iMK9V-oV.mjs");
const Route$i = createFileRoute("/login")({
  component: lazyRouteComponent($$splitComponentImporter$h, "component")
});
const $$splitComponentImporter$g = () => import("./join-DAeY-5pH.mjs");
const Route$h = createFileRoute("/join")({
  head: () => ({
    meta: [{
      title: "List Your Profile — Reach More Seekers │ StarSeeker"
    }, {
      name: "description",
      content: "Join StarSeeker and reach thousands of seekers actively searching for professional astrologers. Free basic listing. Zero commission. Your profile. Your bookings."
    }, {
      property: "og:title",
      content: "List Your Profile — For Astrologers | StarSeeker"
    }, {
      property: "og:description",
      content: "Free basic listing. Zero commission. Direct enquiries."
    }, {
      property: "og:url",
      content: "/join"
    }],
    links: [{
      rel: "canonical",
      href: "/join"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$g, "component")
});
const $$splitComponentImporter$f = () => import("./horoscopes-CH6s8wX4.mjs");
const Route$g = createFileRoute("/horoscopes")({
  head: () => ({
    meta: [{
      title: "Daily Horoscopes — All 12 Signs │ StarSeeker"
    }, {
      name: "description",
      content: "Your daily astrological guidance for every sign of the zodiac. Written by professional astrologers, updated every morning. Select your sign."
    }, {
      property: "og:title",
      content: "Daily Horoscopes — All 12 Signs | StarSeeker"
    }, {
      property: "og:description",
      content: "Free daily forecasts for every zodiac sign, written by professional astrologers."
    }, {
      property: "og:url",
      content: "/horoscopes"
    }],
    links: [{
      rel: "canonical",
      href: "/horoscopes"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$f, "component")
});
const $$splitComponentImporter$e = () => import("./faq-hRTMj1UG.mjs");
const Route$f = createFileRoute("/faq")({
  head: () => ({
    meta: [{
      title: "Frequently Asked Questions │ StarSeeker"
    }, {
      name: "description",
      content: "Everything you need to know about finding and booking a professional astrologer through StarSeeker — pricing, sessions, traditions, and how it all works."
    }, {
      property: "og:title",
      content: "Frequently Asked Questions | StarSeeker"
    }, {
      property: "og:description",
      content: "Answers about booking, pricing, reading types, and our practitioner listings."
    }, {
      property: "og:url",
      content: "/faq"
    }],
    links: [{
      rel: "canonical",
      href: "/faq"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$e, "component")
});
const $$splitComponentImporter$d = () => import("./editor-CdfH-R4a.mjs");
const editorSearchSchema = objectType({
  draft: fallback(stringType(), "").default("")
});
const Route$e = createFileRoute("/editor")({
  validateSearch: zodValidator(editorSearchSchema),
  component: lazyRouteComponent($$splitComponentImporter$d, "component")
});
const $$splitComponentImporter$c = () => import("./dashboard-DmxdpSNf.mjs");
const Route$d = createFileRoute("/dashboard")({
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const $$splitComponentImporter$b = () => import("./countries-CvdTAbIm.mjs");
const Route$c = createFileRoute("/countries")({
  head: () => ({
    meta: [{
      title: "Find Astrologers by Country │ StarSeeker"
    }, {
      name: "description",
      content: "StarSeeker lists professional astrologers across 20+ countries worldwide. Select your country to browse practitioners in your region — or filter by city for local options."
    }, {
      property: "og:title",
      content: "Find Astrologers by Country | StarSeeker"
    }, {
      property: "og:description",
      content: "Browse practitioners in 20+ countries worldwide."
    }, {
      property: "og:url",
      content: "/countries"
    }],
    links: [{
      rel: "canonical",
      href: "/countries"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./contact-49QMh1Uv.mjs");
const Route$b = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact StarSeeker"
    }, {
      name: "description",
      content: "Get in touch with the StarSeeker team. We typically reply within one business day."
    }, {
      property: "og:title",
      content: "Contact StarSeeker"
    }, {
      property: "og:description",
      content: "Get in touch. We reply within one business day."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./blog-DfrfXaEy.mjs");
const Route$a = createFileRoute("/blog")({
  head: () => ({
    meta: [{
      title: "Astrology Guides & Resources │ StarSeeker"
    }, {
      name: "description",
      content: "Deepen your understanding of astrology with our library of guides, explainers, and practitioner insights — from beginner introductions to advanced chart technique."
    }, {
      property: "og:title",
      content: "Astrology Guides & Resources | StarSeeker"
    }, {
      property: "og:description",
      content: "Beginner guides, chart techniques, sign deep dives, relationships, career, spirituality, Vedic astrology."
    }, {
      property: "og:url",
      content: "/blog"
    }],
    links: [{
      rel: "canonical",
      href: "/blog"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./about-CZYjxXnK.mjs");
const Route$9 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About StarSeeker — Our Mission"
    }, {
      name: "description",
      content: "StarSeeker connects seekers with verified astrologers worldwide. Free for seekers. Zero commission for practitioners. Built with care, respect, and craft."
    }, {
      property: "og:title",
      content: "About StarSeeker"
    }, {
      property: "og:description",
      content: "Connecting seekers with verified astrologers worldwide. Free. Zero commission."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./index-Drm2Enpx.mjs");
const Route$8 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "StarSeeker — Find & Book a Professional Astrologer"
    }, {
      name: "description",
      content: "Browse 200+ verified professional astrologers for birth chart readings, compatibility, career guidance, and more. No booking fees. No middlemen."
    }, {
      property: "og:title",
      content: "StarSeeker — Find & Book a Professional Astrologer"
    }, {
      property: "og:description",
      content: "200+ verified astrologers across 30+ specialities and 20+ countries. Free for seekers, zero commission for practitioners."
    }, {
      property: "og:type",
      content: "website"
    }, {
      property: "og:url",
      content: "/"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./astrologers.index-BEU0H5yF.mjs");
const Route$7 = createFileRoute("/astrologers/")({
  head: () => ({
    meta: [{
      title: "Browse Professional Astrologers — StarSeeker"
    }, {
      name: "description",
      content: "Browse 200+ verified astrologers. Filter by tradition, session, and country. Book private readings with the world's most trusted practitioners."
    }, {
      property: "og:title",
      content: "Browse Professional Astrologers — StarSeeker"
    }, {
      property: "og:description",
      content: "Premium directory of verified astrologers. Vedic, psychological, evolutionary and more."
    }, {
      property: "og:url",
      content: "/astrologers"
    }],
    links: [{
      rel: "canonical",
      href: "/astrologers"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
function PremiumAstrologerCard({
  a,
  delay = 0
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/astrologers/$slug", params: {
    slug: a.slug
  }, className: "group relative rounded-2xl border border-border/70 bg-white/80 backdrop-blur p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_color-mix(in_oklab,var(--primary)_45%,transparent)] hover:border-primary/40 animate-[fade-up_0.5s_ease-out_both]", style: {
    animationDelay: `${delay}ms`
  }, children: [
    a.featured && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "absolute top-4 right-4 inline-flex items-center gap-1 text-[10px] font-medium uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3 w-3" }),
      " Featured"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-14 w-14 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-lg font-semibold text-primary shrink-0 ring-2 ring-white shadow-sm", children: a.name.split(" ").map((n) => n[0]).slice(0, 2).join("") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-semibold text-foreground group-hover:text-primary transition-colors truncate", children: a.name }),
          a.verified && /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-primary shrink-0" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground truncate", children: a.tagline }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 flex items-center gap-1 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3 w-3" }),
          " ",
          a.location
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex flex-wrap gap-1.5", children: a.specialities.slice(0, 3).map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] px-2 py-0.5 rounded-full bg-primary/5 text-primary border border-primary/15", children: s }, s)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 pt-4 border-t border-border/70 flex items-center justify-between text-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-foreground font-medium", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-3.5 w-3.5 fill-amber-500 text-amber-500" }),
        " ",
        a.rating,
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground font-normal", children: [
          "(",
          a.reviews,
          ")"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/80 font-medium", children: a.price })
    ] })
  ] });
}
const astrologers = [
  {
    slug: "ananya-sharma",
    name: "Ananya Sharma",
    tagline: "Vedic & Karmic Astrology · 15+ years",
    location: "Mumbai, India",
    country: "India",
    countrySlug: "india",
    city: "Mumbai",
    citySlug: "mumbai",
    languages: ["English", "Hindi", "Marathi"],
    experience: 15,
    rating: 4.9,
    reviews: 312,
    price: "$80 / 60 min",
    specialities: ["Vedic Astrology", "Karmic Astrology", "Predictive Astrology"],
    sessions: ["Birth Chart Reading", "Compatibility / Synastry", "Annual Forecast", "Online / Virtual Session"],
    bio: "Mumbai-based Vedic astrologer specialising in karmic patterns and life timing.",
    longBio: "Ananya has spent 15 years studying classical Vedic texts under traditional gurus. Her approach blends Parashari fundamentals with modern psychological insight, helping clients understand the deeper karmic story behind transit windows, relationship dynamics, and career inflection points.",
    verified: true,
    featured: true
  },
  {
    slug: "marcus-bellweather",
    name: "Marcus Bellweather",
    tagline: "Psychological Astrology · Jungian approach",
    location: "London, United Kingdom",
    country: "United Kingdom",
    countrySlug: "united-kingdom",
    city: "London",
    citySlug: "london",
    languages: ["English"],
    experience: 22,
    rating: 4.8,
    reviews: 184,
    price: "£120 / 75 min",
    specialities: ["Psychological Astrology", "Evolutionary Astrology"],
    sessions: ["Natal Chart Analysis", "Career & Life Path", "Online / Virtual Session"],
    bio: "Jungian astrologer working at the intersection of archetype and lived experience.",
    longBio: "Marcus trained with the Centre for Psychological Astrology in London. He treats the natal chart as a mirror for the soul's developmental arc — particularly useful at moments of transition or identity reorientation.",
    verified: true,
    featured: true
  },
  {
    slug: "lucia-fernandez",
    name: "Lucia Fernández",
    tagline: "Love, synastry & relationship astrology",
    location: "Barcelona, Spain",
    country: "Spain",
    countrySlug: "spain",
    city: "Barcelona",
    citySlug: "barcelona",
    languages: ["Spanish", "English", "Catalan"],
    experience: 9,
    rating: 4.9,
    reviews: 226,
    price: "€75 / 60 min",
    specialities: ["Love & Relationships", "Synastry", "Composite Charts"],
    sessions: ["Compatibility / Synastry", "Love & Relationships", "Online / Virtual Session"],
    bio: "Helping seekers understand love through the lens of synastry and composite work.",
    longBio: "Lucia is a relationship-focused astrologer based in Barcelona. She specialises in synastry, composite charts, and the timing of relationship milestones using progressions and transits.",
    verified: true,
    featured: true
  },
  {
    slug: "david-okoye",
    name: "David Okoye",
    tagline: "Career & vocational astrology",
    location: "Lagos, Nigeria",
    country: "Nigeria",
    countrySlug: "nigeria",
    city: "Lagos",
    citySlug: "lagos",
    languages: ["English"],
    experience: 11,
    rating: 4.7,
    reviews: 98,
    price: "$60 / 60 min",
    specialities: ["Career & Life Path", "Predictive Astrology"],
    sessions: ["Career & Life Path", "Transit Forecast", "Online / Virtual Session"],
    bio: "Vocational guidance through MC, 10th house and Jupiter cycles.",
    longBio: "David works with professionals navigating career change, entrepreneurship and timing. His approach combines traditional chart analysis with modern coaching frameworks.",
    verified: true
  },
  {
    slug: "isabelle-laurent",
    name: "Isabelle Laurent",
    tagline: "Hellenistic & traditional astrology",
    location: "Paris, France",
    country: "France",
    countrySlug: "france",
    city: "Paris",
    citySlug: "paris",
    languages: ["French", "English"],
    experience: 18,
    rating: 4.9,
    reviews: 271,
    price: "€110 / 75 min",
    specialities: ["Hellenistic Astrology", "Traditional Astrology", "Horary"],
    sessions: ["Natal Chart Analysis", "Annual Forecast", "Online / Virtual Session"],
    bio: "Classical methods, modern questions. Specialist in zodiacal releasing.",
    longBio: "Isabelle trained in the Hellenistic tradition and uses time-lord techniques like zodiacal releasing and profections to identify life chapters and peak windows.",
    verified: true
  },
  {
    slug: "raj-patel",
    name: "Raj Patel",
    tagline: "Vedic, Nakshatra & remedial astrology",
    location: "Delhi, India",
    country: "India",
    countrySlug: "india",
    city: "Delhi",
    citySlug: "delhi",
    languages: ["English", "Hindi", "Gujarati"],
    experience: 25,
    rating: 4.8,
    reviews: 410,
    price: "$70 / 60 min",
    specialities: ["Vedic Astrology", "Nakshatra Astrology", "Remedial Astrology"],
    sessions: ["Birth Chart Reading", "Annual Forecast", "Predictive Astrology", "Online / Virtual Session"],
    bio: "25 years of Jyotish practice rooted in classical texts.",
    longBio: "Raj combines Vimshottari dasha analysis with nakshatra study and traditional remedial recommendations. His client base spans India, the UK, and the US diaspora.",
    verified: true
  },
  {
    slug: "elena-volkova",
    name: "Elena Volkova",
    tagline: "Evolutionary & soul-based astrology",
    location: "Berlin, Germany",
    country: "Germany",
    countrySlug: "germany",
    city: "Berlin",
    citySlug: "berlin",
    languages: ["English", "German", "Russian"],
    experience: 13,
    rating: 4.9,
    reviews: 156,
    price: "€95 / 60 min",
    specialities: ["Evolutionary Astrology", "Karmic Astrology", "Psychological Astrology"],
    sessions: ["Natal Chart Analysis", "Career & Life Path", "Online / Virtual Session"],
    bio: "Pluto-centric evolutionary work for the spiritually curious.",
    longBio: "Elena studied with the Jeffrey Wolf Green school of Evolutionary Astrology. She focuses on the soul's evolutionary intent as shown through Pluto, the Nodes, and their planetary rulers.",
    verified: true
  },
  {
    slug: "maya-johnson",
    name: "Maya Johnson",
    tagline: "Modern psychological astrology for women",
    location: "New York City, United States",
    country: "United States",
    countrySlug: "united-states",
    city: "New York City",
    citySlug: "new-york-city",
    languages: ["English"],
    experience: 7,
    rating: 4.8,
    reviews: 134,
    price: "$110 / 60 min",
    specialities: ["Psychological Astrology", "Love & Relationships", "Career & Life Path"],
    sessions: ["Natal Chart Analysis", "Solar Return Reading", "Online / Virtual Session"],
    bio: "Approachable, grounded readings for modern lives.",
    longBio: "Maya blends classical chart analysis with contemporary psychology. Her sessions are warm, practical, and ideal for first-time seekers.",
    verified: true
  },
  {
    slug: "thomas-richter",
    name: "Thomas Richter",
    tagline: "Mundane & financial astrology",
    location: "Zurich, Switzerland",
    country: "Switzerland",
    countrySlug: "switzerland",
    city: "Zurich",
    citySlug: "zurich",
    languages: ["German", "English"],
    experience: 20,
    rating: 4.7,
    reviews: 88,
    price: "CHF 180 / 75 min",
    specialities: ["Mundane Astrology", "Financial Astrology"],
    sessions: ["Transit Forecast", "Annual Forecast", "Online / Virtual Session"],
    bio: "Cycles, markets, and the larger collective story.",
    longBio: "Thomas applies mundane astrology to financial cycles, geopolitics, and long-range planning for executives and family offices.",
    verified: true
  },
  {
    slug: "sara-mendez",
    name: "Sara Méndez",
    tagline: "Family & child chart specialist",
    location: "Mexico City, Mexico",
    country: "Mexico",
    countrySlug: "mexico",
    city: "Mexico City",
    citySlug: "mexico-city",
    languages: ["Spanish", "English"],
    experience: 12,
    rating: 4.9,
    reviews: 201,
    price: "$65 / 60 min",
    specialities: ["Child Chart Reading", "Family Astrology", "Karmic Astrology"],
    sessions: ["Child Chart Reading", "Birth Chart Reading", "Online / Virtual Session"],
    bio: "Supporting parents through chart-informed parenting.",
    longBio: "Sara works with parents and families, reading children's charts to help caregivers understand temperament, learning style, and karmic inheritance.",
    verified: true
  },
  {
    slug: "yuki-tanaka",
    name: "Yuki Tanaka",
    tagline: "Eastern + Western synthesis",
    location: "Tokyo, Japan",
    country: "Japan",
    countrySlug: "japan",
    city: "Tokyo",
    citySlug: "tokyo",
    languages: ["Japanese", "English"],
    experience: 16,
    rating: 4.8,
    reviews: 147,
    price: "¥18,000 / 60 min",
    specialities: ["Vedic Astrology", "Psychological Astrology"],
    sessions: ["Birth Chart Reading", "Annual Forecast", "Online / Virtual Session"],
    bio: "Bridging Jyotish, Western tropical, and Japanese 9-star ki.",
    longBio: "Yuki offers a unique multi-system view, drawing on Vedic, Western, and Japanese 9-star ki astrology to give clients a layered perspective on their charts.",
    verified: true
  },
  {
    slug: "olivia-pearce",
    name: "Olivia Pearce",
    tagline: "Lunar living & solar return work",
    location: "Sydney, Australia",
    country: "Australia",
    countrySlug: "australia",
    city: "Sydney",
    citySlug: "sydney",
    languages: ["English"],
    experience: 8,
    rating: 4.9,
    reviews: 165,
    price: "AU$140 / 60 min",
    specialities: ["Lunar Astrology", "Predictive Astrology"],
    sessions: ["Lunar Return", "Solar Return Reading", "Annual Forecast", "Online / Virtual Session"],
    bio: "Living in rhythm with the Moon — practical lunar guidance.",
    longBio: "Olivia helps clients live in conscious rhythm with the Moon. Her solar and lunar return work is rooted in classical predictive technique with a modern, livable framing.",
    verified: true
  }
];
const specialities = [
  {
    slug: "vedic-astrology",
    name: "Vedic Astrology",
    icon: "🕉️",
    short: "Ancient Indian system using sidereal calculations and lunar mansions.",
    long: "Vedic astrology (Jyotish) is the classical Indian system of astrology, rooted in the sidereal zodiac and refined over thousands of years. It places special emphasis on dashas (planetary periods), nakshatras (lunar mansions), and remedial measures."
  },
  {
    slug: "love-relationships",
    name: "Love & Relationships",
    icon: "💞",
    short: "Synastry, composite, and timing for partnerships.",
    long: "Love and relationship astrology examines compatibility through synastry (comparing two charts), composite charts (the relationship itself), and predictive techniques for relationship timing."
  },
  {
    slug: "career-life-path",
    name: "Career & Life Path",
    icon: "🧭",
    short: "Vocation, calling, and timing for major career moves.",
    long: "Career astrology focuses on the Midheaven, 10th house, and significators of vocation. Practitioners help clients align their work with their chart's underlying calling and identify supportive timing windows."
  },
  {
    slug: "predictive-astrology",
    name: "Predictive Astrology",
    icon: "🔮",
    short: "Transits, progressions, and timing of life events.",
    long: "Predictive astrologers use transits, progressions, solar arcs, and traditional time-lord techniques to identify upcoming windows of opportunity, challenge, and transformation."
  },
  {
    slug: "psychological-astrology",
    name: "Psychological Astrology",
    icon: "🧠",
    short: "Jungian, archetypal, and depth-oriented chart work.",
    long: "Psychological astrology treats the chart as a map of the psyche. Influenced by Jung, it explores archetypes, complexes, and the individuation process."
  },
  {
    slug: "karmic-astrology",
    name: "Karmic Astrology",
    icon: "♾️",
    short: "Lunar nodes, soul lessons, and past-life patterns.",
    long: "Karmic astrology centers the lunar nodes, Saturn, Pluto, and the 12th house to reveal soul-level patterns, inherited lessons, and the path of growth in this lifetime."
  },
  {
    slug: "hellenistic-astrology",
    name: "Hellenistic Astrology",
    icon: "🏛️",
    short: "Traditional Greek-era technique revival.",
    long: "Hellenistic astrology revives the techniques of the ancient Greek tradition: sect, zodiacal releasing, profections, and triplicity rulers."
  },
  {
    slug: "evolutionary-astrology",
    name: "Evolutionary Astrology",
    icon: "🌱",
    short: "Pluto-centric soul evolution work.",
    long: "Evolutionary astrology, developed by Jeffrey Wolf Green, places Pluto and the lunar nodes at the center of chart interpretation to describe the soul's intent and evolution."
  },
  {
    slug: "horary-astrology",
    name: "Horary Astrology",
    icon: "❓",
    short: "Answering specific questions from the moment chart.",
    long: "Horary astrology answers a specific question using the chart cast for the moment the question is asked. A traditional technique with strict rules and remarkable specificity."
  },
  {
    slug: "lunar-astrology",
    name: "Lunar Astrology",
    icon: "🌙",
    short: "Living in rhythm with lunar cycles.",
    long: "Lunar astrology focuses on the Moon's cycles, lunar returns, and the eight-phase Moon as a framework for daily and monthly living."
  },
  {
    slug: "child-chart-reading",
    name: "Child Chart Reading",
    icon: "👶",
    short: "Chart-informed parenting and family dynamics.",
    long: "Specialists in child charts help parents understand temperament, learning style, sensitivities, and the timing of developmental windows."
  },
  {
    slug: "financial-astrology",
    name: "Financial Astrology",
    icon: "📈",
    short: "Markets, business cycles, and timing.",
    long: "Financial astrology applies mundane and electional methods to markets, investment timing, and business strategy."
  }
];
const sessions = [
  {
    slug: "birth-chart-reading",
    name: "Birth Chart Reading",
    duration: "60–90 min",
    description: "A comprehensive interpretation of your natal chart — the snapshot of the sky at your moment of birth.",
    ideal: "First-time seekers, anyone who wants a full overview of their chart.",
    prep: "Have your exact date, time, and place of birth ready. The more precise the time, the more accurate the chart."
  },
  {
    slug: "natal-chart-analysis",
    name: "Natal Chart Analysis",
    duration: "75–90 min",
    description: "A deep, focused analysis of natal placements with attention to themes you most want to explore.",
    ideal: "Seekers who have already had a basic reading and want to go deeper.",
    prep: "Bring 2–3 questions or life themes you want to explore."
  },
  {
    slug: "compatibility-synastry",
    name: "Compatibility / Synastry",
    duration: "75–90 min",
    description: "Comparison of two charts to understand the dynamics of a partnership — romantic, family, or business.",
    ideal: "Couples, parents and children, business partners.",
    prep: "Both people's full birth data. Both parties don't have to attend, but their permission is appreciated."
  },
  {
    slug: "solar-return-reading",
    name: "Solar Return Reading",
    duration: "60–75 min",
    description: "A reading of the chart cast for your exact solar return — the moment the Sun returns to its natal position each year.",
    ideal: "Anyone within ~2 months of their birthday wanting a year-ahead overview.",
    prep: "Birth data and your current location (for relocation purposes)."
  },
  {
    slug: "career-life-path",
    name: "Career & Life Path",
    duration: "60–75 min",
    description: "Focused reading on vocation, calling, and timing windows for career moves.",
    ideal: "Anyone in a career transition or wanting to understand their professional calling.",
    prep: "A brief note on your career history and current questions."
  },
  {
    slug: "love-relationships",
    name: "Love & Relationships",
    duration: "60–75 min",
    description: "Focused reading on relationship themes, partnership timing, and emotional patterns.",
    ideal: "Anyone exploring love-related questions, single or partnered.",
    prep: "Your birth data plus your partner's if applicable."
  },
  {
    slug: "transit-forecast",
    name: "Transit Forecast",
    duration: "60 min",
    description: "A look ahead at the major transits shaping the next 6–18 months.",
    ideal: "Seekers wanting to understand timing windows.",
    prep: "Birth data and the time period you want to cover."
  },
  {
    slug: "annual-forecast",
    name: "Annual Forecast",
    duration: "75 min",
    description: "Year-ahead reading combining solar return, profections, and major transits.",
    ideal: "Annual planning, big-decision years, milestone birthdays.",
    prep: "Birth data and your goals for the year."
  },
  {
    slug: "lunar-return",
    name: "Lunar Return",
    duration: "45 min",
    description: "Reading of the chart cast for the Moon's monthly return — the emotional weather for the coming 28 days.",
    ideal: "Seekers wanting to live in conscious rhythm with the Moon.",
    prep: "Birth data and current location."
  },
  {
    slug: "predictive-astrology",
    name: "Predictive Astrology",
    duration: "75 min",
    description: "Traditional time-lord techniques (profections, zodiacal releasing) for identifying peak life chapters.",
    ideal: "Seekers fascinated by classical timing methods.",
    prep: "Birth data with exact time of birth."
  },
  {
    slug: "child-chart-reading",
    name: "Child Chart Reading",
    duration: "60 min",
    description: "Reading of a child's natal chart for parents seeking insight into temperament and development.",
    ideal: "Parents, caregivers, grandparents.",
    prep: "Child's full birth data."
  },
  {
    slug: "online-virtual-session",
    name: "Online / Virtual Session",
    duration: "Varies",
    description: "Any of the above readings delivered via video call. The default format for international clients.",
    ideal: "Anyone outside the astrologer's home city.",
    prep: "A quiet space, headphones, and your birth data."
  }
];
const countries = [
  {
    slug: "united-states",
    name: "United States",
    flag: "🇺🇸",
    cities: [{ slug: "new-york-city", name: "New York City" }, { slug: "los-angeles", name: "Los Angeles" }, { slug: "san-francisco", name: "San Francisco" }]
  },
  {
    slug: "united-kingdom",
    name: "United Kingdom",
    flag: "🇬🇧",
    cities: [{ slug: "london", name: "London" }, { slug: "manchester", name: "Manchester" }]
  },
  {
    slug: "india",
    name: "India",
    flag: "🇮🇳",
    cities: [{ slug: "mumbai", name: "Mumbai" }, { slug: "delhi", name: "Delhi" }, { slug: "bangalore", name: "Bangalore" }]
  },
  {
    slug: "australia",
    name: "Australia",
    flag: "🇦🇺",
    cities: [{ slug: "sydney", name: "Sydney" }, { slug: "melbourne", name: "Melbourne" }]
  },
  {
    slug: "germany",
    name: "Germany",
    flag: "🇩🇪",
    cities: [{ slug: "berlin", name: "Berlin" }, { slug: "munich", name: "Munich" }]
  },
  {
    slug: "france",
    name: "France",
    flag: "🇫🇷",
    cities: [{ slug: "paris", name: "Paris" }]
  },
  {
    slug: "spain",
    name: "Spain",
    flag: "🇪🇸",
    cities: [{ slug: "barcelona", name: "Barcelona" }, { slug: "madrid", name: "Madrid" }]
  },
  {
    slug: "mexico",
    name: "Mexico",
    flag: "🇲🇽",
    cities: [{ slug: "mexico-city", name: "Mexico City" }]
  },
  {
    slug: "japan",
    name: "Japan",
    flag: "🇯🇵",
    cities: [{ slug: "tokyo", name: "Tokyo" }]
  },
  {
    slug: "nigeria",
    name: "Nigeria",
    flag: "🇳🇬",
    cities: [{ slug: "lagos", name: "Lagos" }]
  },
  {
    slug: "switzerland",
    name: "Switzerland",
    flag: "🇨🇭",
    cities: [{ slug: "zurich", name: "Zurich" }]
  },
  {
    slug: "brazil",
    name: "Brazil",
    flag: "🇧🇷",
    cities: [{ slug: "sao-paulo", name: "São Paulo" }]
  }
];
const zodiacSigns = [
  {
    slug: "aries",
    name: "Aries",
    symbol: "♈",
    dates: "Mar 21 – Apr 19",
    element: "Fire",
    modality: "Cardinal",
    ruler: "Mars",
    traits: ["Bold", "Direct", "Pioneering", "Impulsive"],
    description: "Aries is the cardinal fire sign — the spark, the initiator, the one who begins. Ruled by Mars, Aries energy is courageous, restless, and built for action."
  },
  {
    slug: "taurus",
    name: "Taurus",
    symbol: "♉",
    dates: "Apr 20 – May 20",
    element: "Earth",
    modality: "Fixed",
    ruler: "Venus",
    traits: ["Grounded", "Sensual", "Patient", "Stubborn"],
    description: "Taurus is the fixed earth sign — steady, sensual, devoted to the tangible. Ruled by Venus, it cherishes beauty, comfort, and the slow accumulation of value."
  },
  {
    slug: "gemini",
    name: "Gemini",
    symbol: "♊",
    dates: "May 21 – Jun 20",
    element: "Air",
    modality: "Mutable",
    ruler: "Mercury",
    traits: ["Curious", "Witty", "Adaptable", "Restless"],
    description: "Gemini is the mutable air sign — the messenger, the connector, the curious mind. Ruled by Mercury, Gemini thrives on language, learning, and lateral thinking."
  },
  {
    slug: "cancer",
    name: "Cancer",
    symbol: "♋",
    dates: "Jun 21 – Jul 22",
    element: "Water",
    modality: "Cardinal",
    ruler: "Moon",
    traits: ["Nurturing", "Intuitive", "Sensitive", "Protective"],
    description: "Cancer is the cardinal water sign — the home-builder, the feeler, the keeper of memory. Ruled by the Moon, Cancer attunes to emotional currents others miss."
  },
  {
    slug: "leo",
    name: "Leo",
    symbol: "♌",
    dates: "Jul 23 – Aug 22",
    element: "Fire",
    modality: "Fixed",
    ruler: "Sun",
    traits: ["Generous", "Expressive", "Loyal", "Proud"],
    description: "Leo is the fixed fire sign — the heart, the performer, the creative force. Ruled by the Sun, Leo shines through self-expression and warm-hearted leadership."
  },
  {
    slug: "virgo",
    name: "Virgo",
    symbol: "♍",
    dates: "Aug 23 – Sep 22",
    element: "Earth",
    modality: "Mutable",
    ruler: "Mercury",
    traits: ["Precise", "Helpful", "Analytical", "Discerning"],
    description: "Virgo is the mutable earth sign — the craftsperson, the analyst, the one who refines. Ruled by Mercury, Virgo serves through skill, precision, and care."
  },
  {
    slug: "libra",
    name: "Libra",
    symbol: "♎",
    dates: "Sep 23 – Oct 22",
    element: "Air",
    modality: "Cardinal",
    ruler: "Venus",
    traits: ["Diplomatic", "Aesthetic", "Fair", "Indecisive"],
    description: "Libra is the cardinal air sign — the partner, the diplomat, the lover of balance. Ruled by Venus, Libra weaves harmony through relationship and beauty."
  },
  {
    slug: "scorpio",
    name: "Scorpio",
    symbol: "♏",
    dates: "Oct 23 – Nov 21",
    element: "Water",
    modality: "Fixed",
    ruler: "Pluto / Mars",
    traits: ["Intense", "Perceptive", "Loyal", "Private"],
    description: "Scorpio is the fixed water sign — the depth-diver, the alchemist, the keeper of secrets. Co-ruled by Mars and Pluto, Scorpio transforms through truth."
  },
  {
    slug: "sagittarius",
    name: "Sagittarius",
    symbol: "♐",
    dates: "Nov 22 – Dec 21",
    element: "Fire",
    modality: "Mutable",
    ruler: "Jupiter",
    traits: ["Adventurous", "Philosophical", "Optimistic", "Blunt"],
    description: "Sagittarius is the mutable fire sign — the seeker, the philosopher, the cross-cultural traveler. Ruled by Jupiter, Sagittarius expands toward meaning."
  },
  {
    slug: "capricorn",
    name: "Capricorn",
    symbol: "♑",
    dates: "Dec 22 – Jan 19",
    element: "Earth",
    modality: "Cardinal",
    ruler: "Saturn",
    traits: ["Disciplined", "Ambitious", "Strategic", "Reserved"],
    description: "Capricorn is the cardinal earth sign — the architect, the elder, the long-game player. Ruled by Saturn, Capricorn builds structures that last."
  },
  {
    slug: "aquarius",
    name: "Aquarius",
    symbol: "♒",
    dates: "Jan 20 – Feb 18",
    element: "Air",
    modality: "Fixed",
    ruler: "Saturn / Uranus",
    traits: ["Innovative", "Independent", "Humanitarian", "Detached"],
    description: "Aquarius is the fixed air sign — the futurist, the systems-thinker, the community-builder. Co-ruled by Saturn and Uranus, Aquarius reimagines what's possible."
  },
  {
    slug: "pisces",
    name: "Pisces",
    symbol: "♓",
    dates: "Feb 19 – Mar 20",
    element: "Water",
    modality: "Mutable",
    ruler: "Jupiter / Neptune",
    traits: ["Compassionate", "Imaginative", "Spiritual", "Boundary-fluid"],
    description: "Pisces is the mutable water sign — the dreamer, the mystic, the channel. Co-ruled by Jupiter and Neptune, Pisces dissolves the boundary between self and source."
  }
];
const blogPosts = [
  {
    slug: "how-to-read-your-birth-chart",
    title: "How to Read Your Birth Chart: A Beginner's Guide",
    excerpt: "Your birth chart is a snapshot of the sky at the moment you were born. Here's how to start reading yours.",
    category: "Beginner Guides",
    readTime: "8 min",
    date: "2026-05-12",
    body: "Your natal chart shows where every planet was at the moment of your birth, mapped onto a wheel of 12 houses. The three most important placements to know first are your Sun, Moon, and Rising sign — together they form what astrologers call the 'big three.'\n\nThe Sun shows your core identity and creative will. The Moon describes your emotional inner life. The Rising sign (Ascendant) describes how you meet the world and how others first perceive you. Once you understand these three, you have a strong foundation to explore the rest of the chart."
  },
  {
    slug: "saturn-return-explained",
    title: "Saturn Return Explained: The Cosmic Coming-of-Age",
    excerpt: "Every 29.5 years, Saturn returns to where it was at your birth — and life as you know it tends to restructure.",
    category: "Transits",
    readTime: "10 min",
    date: "2026-05-05",
    body: "Saturn takes about 29.5 years to orbit the Sun. When it returns to the position it occupied at your birth — usually around ages 28–30, 58–60, and 87–89 — you experience what astrologers call a Saturn Return.\n\nThis is the cosmic coming-of-age. Structures that no longer fit collapse. Choices that were postponed demand to be made. By the end of it, you're recognisably more yourself than you were before."
  },
  {
    slug: "synastry-vs-composite-charts",
    title: "Synastry vs Composite Charts: What's the Difference?",
    excerpt: "Two powerful tools for understanding relationships — and when to use which.",
    category: "Relationships",
    readTime: "7 min",
    date: "2026-04-28",
    body: "Synastry compares two individual charts side by side. It shows how your planets activate the other person's chart — the chemistry, the friction, the karmic threads.\n\nA composite chart, by contrast, treats the relationship itself as a third entity, with its own birth chart calculated from the midpoints of both people's planets. Use synastry to understand each person's experience of the relationship; use composite to understand the relationship's own character and trajectory."
  },
  {
    slug: "12th-house-mysteries",
    title: "The 12th House: The Mystery Zone of the Chart",
    excerpt: "The most misunderstood house — and what it really represents.",
    category: "Houses",
    readTime: "9 min",
    date: "2026-04-21",
    body: "The 12th house has a fearsome reputation: hidden enemies, self-undoing, institutions. But it's also the house of the unconscious, of dreams, of the soul's connection to something larger than itself.\n\nPlanets in the 12th tend to operate below the surface — powerfully present, but rarely loud. Working with the 12th house is less about fixing what's there and more about learning to listen to it."
  },
  {
    slug: "mercury-retrograde-real-talk",
    title: "Mercury Retrograde: Real Talk",
    excerpt: "Three or four times a year, Mercury appears to move backwards. Here's what actually happens.",
    category: "Transits",
    readTime: "6 min",
    date: "2026-04-14",
    body: "Mercury retrograde is an optical illusion — Mercury never actually reverses direction. But the experience of it is real: a slowdown in communication, technology, and travel. Three weeks where it pays to review rather than launch.\n\nThe wisdom isn't to do nothing — it's to do the kind of work that retrograde supports: revisit, revise, reconnect, refine."
  },
  {
    slug: "north-node-life-purpose",
    title: "The North Node: Your Life Purpose Compass",
    excerpt: "What the lunar nodes reveal about why you're here.",
    category: "Karmic Astrology",
    readTime: "11 min",
    date: "2026-04-07",
    body: "The lunar nodes are mathematical points, not planets — where the Moon's orbit crosses the ecliptic. The South Node represents what's familiar and karmically inherited. The North Node points toward what your soul is here to grow into.\n\nIt rarely feels comfortable. The North Node is the direction of stretch, of awkward newness, of the life you're learning to live."
  },
  {
    slug: "houses-explained",
    title: "The 12 Houses Explained Simply",
    excerpt: "Each house is a stage of life. Here's the whole map in one place.",
    category: "Beginner Guides",
    readTime: "12 min",
    date: "2026-03-31",
    body: "The 12 houses divide the chart into 12 life areas — self, money, communication, home, creativity, work, relationships, transformation, philosophy, career, community, and the unconscious. Together they form a complete map of human experience."
  },
  {
    slug: "moon-sign-emotional-self",
    title: "Your Moon Sign: The Emotional Self",
    excerpt: "The Moon describes how you feel, soothe, and need to be cared for.",
    category: "Planets",
    readTime: "8 min",
    date: "2026-03-24",
    body: "Where your Sun says 'I am,' your Moon says 'I feel.' Your Moon sign describes your emotional baseline, what soothes you, and how you instinctively respond to stress."
  },
  {
    slug: "rising-sign-mask-or-truth",
    title: "Rising Sign: Mask or Truth?",
    excerpt: "Your Ascendant is how the world meets you — and it's more than a mask.",
    category: "Beginner Guides",
    readTime: "7 min",
    date: "2026-03-17",
    body: "Your Rising sign (Ascendant) was on the eastern horizon at your birth. It colours your appearance, your default mode of meeting strangers, and the way your chart's themes get filtered before they reach the world."
  },
  {
    slug: "transit-vs-progression",
    title: "Transits vs Progressions: Two Clocks of the Chart",
    excerpt: "Astrology uses two main timing systems — and they answer different questions.",
    category: "Predictive",
    readTime: "9 min",
    date: "2026-03-10",
    body: "Transits are real-time — where the planets are right now, hitting your natal chart. Progressions are symbolic — the chart aged forward at a rate of one day per year. Transits describe the weather; progressions describe inner ripening."
  },
  {
    slug: "venus-retrograde-relationships",
    title: "Venus Retrograde and Your Relationships",
    excerpt: "Every 18 months, Venus retrogrades — and the past tends to revisit.",
    category: "Transits",
    readTime: "8 min",
    date: "2026-03-03",
    body: "Venus retrogrades roughly every 18 months for about 40 days. During this time, ex-partners reappear, relationship patterns surface, and values get reexamined. It's not the moment for new love commitments — it's the moment to integrate."
  },
  {
    slug: "chart-ruler",
    title: "The Chart Ruler: A Key You Might Be Missing",
    excerpt: "Your Rising sign's ruling planet is the captain of your chart.",
    category: "Technique",
    readTime: "7 min",
    date: "2026-02-24",
    body: "The ruler of your Rising sign — your 'chart ruler' — is one of the most important planets in your entire chart. Its sign, house, and aspects describe how your whole life unfolds."
  }
];
astrologers.filter((a) => a.featured);
const $$splitComponentImporter$5 = () => import("./specialities._slug-DG1aS6cD.mjs");
const $$splitErrorComponentImporter$5 = () => import("./specialities._slug-cmB5Z8Y_.mjs");
const $$splitNotFoundComponentImporter$5 = () => import("./specialities._slug-GzCURW-I.mjs");
const Route$6 = createFileRoute("/specialities/$slug")({
  loader: ({
    params
  }) => {
    const speciality = specialities.find((s) => s.slug === params.slug);
    if (!speciality) throw notFound();
    const matches = astrologers.filter((a) => a.specialities.some((x) => x.toLowerCase() === speciality.name.toLowerCase()));
    return {
      speciality,
      matches
    };
  },
  head: ({
    loaderData
  }) => ({
    meta: loaderData ? [{
      title: `${loaderData.speciality.name} Astrologers — Find an Expert | StarSeeker`
    }, {
      name: "description",
      content: `${loaderData.speciality.short} Browse ${loaderData.matches.length} expert ${loaderData.speciality.name} astrologers.`
    }, {
      property: "og:title",
      content: `${loaderData.speciality.name} Astrologers | StarSeeker`
    }, {
      property: "og:description",
      content: loaderData.speciality.short
    }] : []
  }),
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$5, "notFoundComponent"),
  errorComponent: lazyRouteComponent($$splitErrorComponentImporter$5, "errorComponent"),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./sessions._slug-BVO_4Wn_.mjs");
const $$splitErrorComponentImporter$4 = () => import("./sessions._slug-C473zDJx.mjs");
const $$splitNotFoundComponentImporter$4 = () => import("./sessions._slug-DteXAWQN.mjs");
const Route$5 = createFileRoute("/sessions/$slug")({
  loader: ({
    params
  }) => {
    const session = sessions.find((s) => s.slug === params.slug);
    if (!session) throw notFound();
    const matches = astrologers.filter((a) => a.sessions.some((x) => x.toLowerCase() === session.name.toLowerCase()));
    return {
      session,
      matches
    };
  },
  head: ({
    loaderData
  }) => ({
    meta: loaderData ? [{
      title: `${loaderData.session.name} — Find & Book an Astrologer | StarSeeker`
    }, {
      name: "description",
      content: `${loaderData.session.description} Browse ${loaderData.matches.length} astrologers offering ${loaderData.session.name}.`
    }, {
      property: "og:title",
      content: `${loaderData.session.name} | StarSeeker`
    }, {
      property: "og:description",
      content: loaderData.session.description
    }] : []
  }),
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$4, "notFoundComponent"),
  errorComponent: lazyRouteComponent($$splitErrorComponentImporter$4, "errorComponent"),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./horoscopes._sign-Cs0b5Zje.mjs");
const $$splitErrorComponentImporter$3 = () => import("./horoscopes._sign-CFi0vRqu.mjs");
const $$splitNotFoundComponentImporter$3 = () => import("./horoscopes._sign-Dava2iKQ.mjs");
const Route$4 = createFileRoute("/horoscopes/$sign")({
  loader: ({
    params
  }) => {
    const sign = zodiacSigns.find((s) => s.slug === params.sign);
    if (!sign) throw notFound();
    return {
      sign
    };
  },
  head: ({
    loaderData
  }) => ({
    meta: loaderData ? [{
      title: `${loaderData.sign.name} Horoscope, Traits & Personality | StarSeeker`
    }, {
      name: "description",
      content: `${loaderData.sign.name} (${loaderData.sign.dates}): ${loaderData.sign.description}`
    }, {
      property: "og:title",
      content: `${loaderData.sign.name} Horoscope & Personality | StarSeeker`
    }, {
      property: "og:description",
      content: loaderData.sign.description
    }] : []
  }),
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$3, "notFoundComponent"),
  errorComponent: lazyRouteComponent($$splitErrorComponentImporter$3, "errorComponent"),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./countries._slug-D7s9P01P.mjs");
const $$splitErrorComponentImporter$2 = () => import("./countries._slug-CjOzUj-e.mjs");
const $$splitNotFoundComponentImporter$2 = () => import("./countries._slug-BmrgbqG9.mjs");
const Route$3 = createFileRoute("/countries/$slug")({
  loader: ({
    params
  }) => {
    const country = countries.find((c) => c.slug === params.slug);
    if (!country) throw notFound();
    const matches = astrologers.filter((a) => a.countrySlug === country.slug);
    return {
      country,
      matches
    };
  },
  head: ({
    loaderData
  }) => ({
    meta: loaderData ? [{
      title: `Astrologers in ${loaderData.country.name} — Book a Reading | StarSeeker`
    }, {
      name: "description",
      content: `Browse ${loaderData.matches.length} verified astrologers in ${loaderData.country.name}. Local readings in your language and timezone.`
    }, {
      property: "og:title",
      content: `Astrologers in ${loaderData.country.name} | StarSeeker`
    }, {
      property: "og:description",
      content: `Verified astrologers in ${loaderData.country.name}.`
    }] : []
  }),
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$2, "notFoundComponent"),
  errorComponent: lazyRouteComponent($$splitErrorComponentImporter$2, "errorComponent"),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./blog._slug-CoIT7Nta.mjs");
const $$splitErrorComponentImporter$1 = () => import("./blog._slug-QGGGA4GJ.mjs");
const $$splitNotFoundComponentImporter$1 = () => import("./blog._slug-1YU-TEE_.mjs");
const Route$2 = createFileRoute("/blog/$slug")({
  loader: ({
    params
  }) => {
    const post = blogPosts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return {
      post
    };
  },
  head: ({
    loaderData
  }) => ({
    meta: loaderData ? [{
      title: `${loaderData.post.title} | StarSeeker`
    }, {
      name: "description",
      content: loaderData.post.excerpt
    }, {
      property: "og:title",
      content: loaderData.post.title
    }, {
      property: "og:description",
      content: loaderData.post.excerpt
    }, {
      property: "og:type",
      content: "article"
    }] : []
  }),
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$1, "notFoundComponent"),
  errorComponent: lazyRouteComponent($$splitErrorComponentImporter$1, "errorComponent"),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./astrologers._slug-CiAiji1L.mjs");
const $$splitErrorComponentImporter = () => import("./astrologers._slug-BNFeD6ck.mjs");
const $$splitNotFoundComponentImporter = () => import("./astrologers._slug-BVvcR4Az.mjs");
const Route$1 = createFileRoute("/astrologers/$slug")({
  loader: ({
    params
  }) => {
    const astrologer = astrologers.find((a) => a.slug === params.slug);
    if (!astrologer) throw notFound();
    return {
      astrologer
    };
  },
  head: ({
    loaderData,
    params
  }) => ({
    meta: loaderData ? [{
      title: `${loaderData.astrologer.name} — ${loaderData.astrologer.tagline} | StarSeeker`
    }, {
      name: "description",
      content: `Book a session with ${loaderData.astrologer.name}. ${loaderData.astrologer.bio} ${loaderData.astrologer.rating}★ from ${loaderData.astrologer.reviews} verified reviews.`
    }, {
      property: "og:title",
      content: `${loaderData.astrologer.name} — Astrologer Profile | StarSeeker`
    }, {
      property: "og:description",
      content: loaderData.astrologer.bio
    }, {
      property: "og:type",
      content: "profile"
    }, {
      property: "og:url",
      content: `/astrologers/${params.slug}`
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }] : [],
    links: loaderData ? [{
      rel: "canonical",
      href: `/astrologers/${params.slug}`
    }] : [],
    scripts: loaderData ? [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: loaderData.astrologer.name,
        jobTitle: "Astrologer",
        description: loaderData.astrologer.bio,
        address: {
          "@type": "PostalAddress",
          addressLocality: loaderData.astrologer.city,
          addressCountry: loaderData.astrologer.country
        },
        knowsLanguage: loaderData.astrologer.languages,
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: loaderData.astrologer.rating,
          reviewCount: loaderData.astrologer.reviews
        }
      })
    }] : []
  }),
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
  errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const ALLOWED_PLATFORMS = {
  instagram: 2200,
  linkedin: 3e3,
  x: 280,
  facebook: 63206
};
const MAX_TEXT_LENGTH = 5e3;
const Route = createFileRoute("/api/enhance-post")({
  server: {
    handlers: {
      OPTIONS: async () => {
        return new Response(null, { status: 204 });
      },
      POST: async ({ request }) => {
        try {
          const authHeader = request.headers.get("Authorization");
          if (!authHeader) {
            return Response.json(
              { error: "Missing authorization header." },
              { status: 401 }
            );
          }
          const supabaseUrl = "https://mfbpyzqykswfoobkedeh.supabase.co";
          const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1mYnB5enF5a3N3Zm9vYmtlZGVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE1NzI3NTcsImV4cCI6MjA5NzE0ODc1N30.1iyTX9Al9xDgEFQVF7zPZwrpIlC6c_J6VytdCchQ56A";
          const supabase = createClient(supabaseUrl, supabaseAnonKey, {
            global: { headers: { Authorization: authHeader } }
          });
          const {
            data: { user },
            error: authError
          } = await supabase.auth.getUser();
          if (authError || !user) {
            return Response.json(
              { error: "Invalid or expired session. Please log in again." },
              { status: 401 }
            );
          }
          const serviceClient = createClient(
            supabaseUrl,
            process.env.SUPABASE_SERVICE_ROLE_KEY
          );
          const oneMinuteAgo = new Date(Date.now() - 6e4).toISOString();
          const { count, error: rlError } = await serviceClient.from("rate_limits").select("*", { count: "exact", head: true }).eq("user_id", user.id).eq("endpoint", "enhance-post").gte("created_at", oneMinuteAgo);
          if (!rlError && (count ?? 0) >= 10) {
            return Response.json(
              { error: "Rate limit exceeded. Please wait a moment before trying again." },
              { status: 429 }
            );
          }
          await serviceClient.from("rate_limits").insert({
            user_id: user.id,
            endpoint: "enhance-post"
          });
          const body = await request.json();
          const text = body?.text;
          if (!text || typeof text !== "string" || text.trim().length === 0) {
            return Response.json(
              { error: "Please write some text before enhancing." },
              { status: 400 }
            );
          }
          if (text.length > MAX_TEXT_LENGTH) {
            return Response.json(
              { error: `Text must be ${MAX_TEXT_LENGTH.toLocaleString()} characters or fewer.` },
              { status: 400 }
            );
          }
          const API_KEY = process.env.GEMINI_API_KEY || process.env.OPENAI_API_KEY || process.env.LOVABLE_API_KEY;
          if (!API_KEY) {
            console.error("No AI API key (GEMINI_API_KEY, OPENAI_API_KEY) is configured");
            return Response.json(
              { error: "Service configuration error. Please try again later." },
              { status: 500 }
            );
          }
          const isGemini = !!process.env.GEMINI_API_KEY || process.env.LOVABLE_API_KEY && !process.env.OPENAI_API_KEY;
          const API_URL = isGemini ? "https://generativelanguage.googleapis.com/v1beta/openai/chat/completions" : "https://api.openai.com/v1/chat/completions";
          const MODEL = isGemini ? "gemini-1.5-flash" : "gpt-4o-mini";
          const platformInfo = Object.entries(ALLOWED_PLATFORMS).map(([name, limit]) => `${name}: ${limit} characters`).join(", ");
          const systemPrompt = `You are an elite social media strategist and copywriter. The user will give you draft post text. Your job is to return exactly 3 enhanced variations of that post.

Rules:
- Each variation MUST respect ALL platform character limits: ${platformInfo}
- The shortest limit is the binding constraint — every variation must fit within it
- Preserve the user's core message and intent
- Variation 1: Polish — tighten wording, fix grammar, improve flow
- Variation 2: Engaging — add hooks, questions, or calls to action
- Variation 3: Creative — try a bold angle, storytelling, or unexpected framing
- Use relevant emojis sparingly where appropriate
- Do NOT use hashtags unless the original text has them
- Keep each variation self-contained`;
          const response = await fetch(
            API_URL,
            {
              method: "POST",
              headers: {
                Authorization: `Bearer ${API_KEY}`,
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                model: MODEL,
                messages: [
                  { role: "system", content: systemPrompt },
                  { role: "user", content: text }
                ],
                tools: [
                  {
                    type: "function",
                    function: {
                      name: "return_suggestions",
                      description: "Return 3 enhanced post variations",
                      parameters: {
                        type: "object",
                        properties: {
                          suggestions: {
                            type: "array",
                            items: {
                              type: "object",
                              properties: {
                                label: {
                                  type: "string",
                                  description: "Short label: Polished, Engaging, or Creative"
                                },
                                text: {
                                  type: "string",
                                  description: "The enhanced post text"
                                }
                              },
                              required: ["label", "text"],
                              additionalProperties: false
                            },
                            minItems: 3,
                            maxItems: 3
                          }
                        },
                        required: ["suggestions"],
                        additionalProperties: false
                      }
                    }
                  }
                ],
                tool_choice: {
                  type: "function",
                  function: { name: "return_suggestions" }
                }
              })
            }
          );
          if (!response.ok) {
            if (response.status === 429) {
              return Response.json(
                { error: "Rate limit exceeded. Please try again in a moment." },
                { status: 429 }
              );
            }
            if (response.status === 402) {
              return Response.json(
                { error: "AI credits exhausted." },
                { status: 402 }
              );
            }
            const errText = await response.text();
            console.error("AI gateway error:", response.status, errText);
            return Response.json(
              { error: "AI service error. Please try again." },
              { status: 500 }
            );
          }
          const data = await response.json();
          const toolCall = data.choices?.[0]?.message?.tool_calls?.[0];
          if (!toolCall?.function?.arguments) {
            console.error("Unexpected AI response shape:", JSON.stringify(data));
            return Response.json(
              { error: "AI returned an unexpected response. Please try again." },
              { status: 500 }
            );
          }
          const parsed = JSON.parse(toolCall.function.arguments);
          return Response.json(parsed);
        } catch (e) {
          console.error("enhance-post error:", e);
          return Response.json(
            { error: "An unexpected error occurred. Please try again." },
            { status: 500 }
          );
        }
      }
    }
  }
});
const SpecialitiesRoute = Route$k.update({
  id: "/specialities",
  path: "/specialities",
  getParentRoute: () => Route$l
});
const SessionsRoute = Route$j.update({
  id: "/sessions",
  path: "/sessions",
  getParentRoute: () => Route$l
});
const LoginRoute = Route$i.update({
  id: "/login",
  path: "/login",
  getParentRoute: () => Route$l
});
const JoinRoute = Route$h.update({
  id: "/join",
  path: "/join",
  getParentRoute: () => Route$l
});
const HoroscopesRoute = Route$g.update({
  id: "/horoscopes",
  path: "/horoscopes",
  getParentRoute: () => Route$l
});
const FaqRoute = Route$f.update({
  id: "/faq",
  path: "/faq",
  getParentRoute: () => Route$l
});
const EditorRoute = Route$e.update({
  id: "/editor",
  path: "/editor",
  getParentRoute: () => Route$l
});
const DashboardRoute = Route$d.update({
  id: "/dashboard",
  path: "/dashboard",
  getParentRoute: () => Route$l
});
const CountriesRoute = Route$c.update({
  id: "/countries",
  path: "/countries",
  getParentRoute: () => Route$l
});
const ContactRoute = Route$b.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$l
});
const BlogRoute = Route$a.update({
  id: "/blog",
  path: "/blog",
  getParentRoute: () => Route$l
});
const AboutRoute = Route$9.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$l
});
const IndexRoute = Route$8.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$l
});
const AstrologersIndexRoute = Route$7.update({
  id: "/astrologers/",
  path: "/astrologers/",
  getParentRoute: () => Route$l
});
const SpecialitiesSlugRoute = Route$6.update({
  id: "/$slug",
  path: "/$slug",
  getParentRoute: () => SpecialitiesRoute
});
const SessionsSlugRoute = Route$5.update({
  id: "/$slug",
  path: "/$slug",
  getParentRoute: () => SessionsRoute
});
const HoroscopesSignRoute = Route$4.update({
  id: "/$sign",
  path: "/$sign",
  getParentRoute: () => HoroscopesRoute
});
const CountriesSlugRoute = Route$3.update({
  id: "/$slug",
  path: "/$slug",
  getParentRoute: () => CountriesRoute
});
const BlogSlugRoute = Route$2.update({
  id: "/$slug",
  path: "/$slug",
  getParentRoute: () => BlogRoute
});
const AstrologersSlugRoute = Route$1.update({
  id: "/astrologers/$slug",
  path: "/astrologers/$slug",
  getParentRoute: () => Route$l
});
const ApiEnhancePostRoute = Route.update({
  id: "/api/enhance-post",
  path: "/api/enhance-post",
  getParentRoute: () => Route$l
});
const BlogRouteChildren = {
  BlogSlugRoute
};
const BlogRouteWithChildren = BlogRoute._addFileChildren(BlogRouteChildren);
const CountriesRouteChildren = {
  CountriesSlugRoute
};
const CountriesRouteWithChildren = CountriesRoute._addFileChildren(
  CountriesRouteChildren
);
const HoroscopesRouteChildren = {
  HoroscopesSignRoute
};
const HoroscopesRouteWithChildren = HoroscopesRoute._addFileChildren(
  HoroscopesRouteChildren
);
const SessionsRouteChildren = {
  SessionsSlugRoute
};
const SessionsRouteWithChildren = SessionsRoute._addFileChildren(
  SessionsRouteChildren
);
const SpecialitiesRouteChildren = {
  SpecialitiesSlugRoute
};
const SpecialitiesRouteWithChildren = SpecialitiesRoute._addFileChildren(
  SpecialitiesRouteChildren
);
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  BlogRoute: BlogRouteWithChildren,
  ContactRoute,
  CountriesRoute: CountriesRouteWithChildren,
  DashboardRoute,
  EditorRoute,
  FaqRoute,
  HoroscopesRoute: HoroscopesRouteWithChildren,
  JoinRoute,
  LoginRoute,
  SessionsRoute: SessionsRouteWithChildren,
  SpecialitiesRoute: SpecialitiesRouteWithChildren,
  ApiEnhancePostRoute,
  AstrologersSlugRoute,
  AstrologersIndexRoute
};
const routeTree = Route$l._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const router2 = createRouter({
    routeTree,
    context: {},
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  PremiumAstrologerCard as P,
  Route$6 as R,
  astrologers as a,
  sessions as b,
  countries as c,
  blogPosts as d,
  Route$5 as e,
  Route$4 as f,
  Route$3 as g,
  Route$2 as h,
  Route$1 as i,
  router as r,
  specialities as s,
  useAuth as u,
  zodiacSigns as z
};
