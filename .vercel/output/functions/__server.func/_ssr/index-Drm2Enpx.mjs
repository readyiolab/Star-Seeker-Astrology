import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { N as Navbar, F as FooterSection } from "./FooterSection-CB5UHbjl.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { B as Button, c as cn } from "./button-s3iKVh83.mjs";
import { u as useAuth, z as zodiacSigns } from "./router-Dmdsn4PS.mjs";
import { u as useEmblaCarousel } from "../_libs/embla-carousel-react.mjs";
import { A as ArrowRight, S as Sparkles, Z as Quote, a as Star, n as ChevronDown, _ as Droplet, $ as Wind, a0 as Mountain, k as Flame, o as ArrowLeft } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
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
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/tanstack__zod-adapter.mjs";
import "../_libs/zod.mjs";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
import "../_libs/embla-carousel-reactive-utils.mjs";
import "../_libs/embla-carousel.mjs";
const carousel1 = "/assets/carousel-1-BlBShmPT.png";
const carousel2 = "/assets/carousel-2-BhHEu5kq.png";
const carousel3 = "/assets/carousel-3-DoL9UaZP.png";
const carousel4 = "/assets/carousel-4-DFLpldvB.png";
const carousel6 = "/assets/carousel-6-C7l_jiRd.png";
const carousel7 = "/assets/carousel-7-C1xGd53W.png";
const images = [carousel1, carousel2, carousel3, carousel4, carousel6, carousel7];
const allImages = [...images, ...images];
function SocialCarousel() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-20 overflow-hidden opacity-0 animate-scale-in", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-4 animate-carousel-scroll", children: allImages.map((src, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "flex-shrink-0 w-[200px] md:w-[240px] aspect-[9/16] rounded-2xl overflow-hidden shadow-lg border border-border/50",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src,
          alt: `Social media post example ${i % images.length + 1}`,
          className: "h-full w-full object-cover",
          loading: "lazy"
        }
      )
    },
    i
  )) }) });
}
function HeroSection() {
  const { user } = useAuth();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden pt-20 pb-24 md:pt-28 md:pb-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute inset-0 top-[30%]",
        style: {
          background: "linear-gradient(180deg, transparent 0%, oklch(0.94 0.04 230) 25%, oklch(0.94 0.04 230) 75%, transparent 100%)"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute inset-0 top-[30%]",
        style: {
          backgroundImage: `radial-gradient(circle, oklch(0.60 0.14 230 / 0.6) 1px, transparent 1px)`,
          backgroundSize: "22px 22px",
          maskImage: "radial-gradient(ellipse 100% 70% at 50% 55%, black 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 100% 70% at 50% 55%, black 30%, transparent 75%)"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-6xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-6 text-xs font-medium tracking-[0.2em] text-primary opacity-0 animate-fade-up", children: "✦ TRUSTED BY SEEKERS WORLDWIDE" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "h1",
        {
          className: "text-4xl font-semibold tracking-tight text-foreground opacity-0 animate-fade-up md:text-6xl",
          style: { lineHeight: 1.1, letterSpacing: "-0.03em", textWrap: "balance" },
          children: "Find the perfect astrologer for your journey"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "p",
        {
          className: "mx-auto mt-6 max-w-xl text-lg text-muted-foreground opacity-0 animate-fade-up-delay",
          style: { textWrap: "pretty" },
          children: "Browse 200+ professional astrologers for birth chart readings, compatibility, career guidance, and more. No booking fees. No middlemen."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 flex items-center justify-center gap-4 opacity-0 animate-fade-up-delay", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "hero", size: "xl", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/astrologers", children: [
        "Find Astrologers",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-1 h-4 w-4" })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground opacity-0 animate-fade-up-delay", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "200+" }),
          " Verified Astrologers"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden md:inline text-border", children: "│" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "30+" }),
          " Specialities"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden md:inline text-border", children: "│" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "20+" }),
          " Countries"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden md:inline text-border", children: "│" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "No" }),
          " Booking Fees"
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SocialCarousel, {}) })
  ] });
}
const items = [
  { icon: "⭐", name: "Western Astrology", count: "58 astrologers", to: "/specialities/$slug", slug: "hellenistic-astrology" },
  { icon: "🕉️", name: "Vedic / Jyotish", count: "44 astrologers", to: "/specialities/$slug", slug: "vedic-astrology" },
  { icon: "🐉", name: "Chinese Astrology", count: "18 astrologers", to: "/specialities/$slug", slug: "vedic-astrology" },
  { icon: "🌱", name: "Evolutionary Astrology", count: "22 astrologers", to: "/specialities/$slug", slug: "evolutionary-astrology" },
  { icon: "🧠", name: "Psychological Astrology", count: "26 astrologers", to: "/specialities/$slug", slug: "psychological-astrology" },
  { icon: "❤️", name: "Relationship & Synastry", count: "39 astrologers", to: "/specialities/$slug", slug: "love-relationships" },
  { icon: "💼", name: "Career & Financial", count: "21 astrologers", to: "/specialities/$slug", slug: "career-life-path" },
  { icon: "🏥", name: "Medical Astrology", count: "8 astrologers", to: "/specialities/$slug", slug: "financial-astrology" },
  { icon: "🔮", name: "Horary Astrology", count: "12 astrologers", to: "/specialities/$slug", slug: "horary-astrology" },
  { icon: "☯️", name: "Karmic Astrology", count: "16 astrologers", to: "/specialities/$slug", slug: "karmic-astrology" },
  { icon: "👶", name: "Child & Family Charts", count: "9 astrologers", to: "/specialities/$slug", slug: "child-chart-reading" },
  { icon: "🌍", name: "Mundane Astrology", count: "7 astrologers", to: "/specialities/$slug", slug: "financial-astrology" }
];
function FeaturesSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "specialities", className: "py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl text-center mb-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium tracking-[0.2em] text-primary uppercase", children: "Browse by Speciality" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl", style: { letterSpacing: "-0.02em" }, children: "What kind of astrology are you looking for?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "From Vedic birth charts to Western synastry — every tradition and speciality covered." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4", children: items.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
        to: s.to,
        params: { slug: s.slug },
        className: "group rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/40 hover:shadow-md",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl", children: s.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 text-sm font-semibold text-foreground group-hover:text-primary transition-colors", children: s.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: s.count })
        ]
      },
      s.name
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/specialities", className: "text-sm font-medium text-primary hover:underline", children: "View All Specialities →" }) })
  ] }) });
}
const dailyForecasts = {
  aries: "The fiery energy of Mars prompts you to initiate new ventures. Trust your gut feelings and take that bold first step. Opportunities for leadership and fresh beginnings are highly favored today.",
  taurus: "A stable earth alignment helps you ground your ambitions. Focus on consolidating your resources, organizing your space, and enjoying the sensory pleasures of life. Slow progress is still progress.",
  gemini: "Mercury sparks lively conversations and curious inquiries today. Keep your mind open to unexpected collaborations. A chance encounter or message could hold the key to a creative block.",
  cancer: "The lunar energy sensitizes your intuitive nature. Create a cozy sanctuary for yourself and listen closely to your inner emotional guidance. A family or home matter resolves with gentle patience.",
  leo: "The solar spotlight is shining warm, creative rays on your self-expression. Share your talents and let your generous heart lead the way. Your presence is magnetic and inspires those around you.",
  virgo: "Precision and clarity are your cosmic superpowers today. Use this analytical focus to refine schedules, organize details, and bring harmony to chaotic spaces. Your helpful nature will be deeply appreciated.",
  libra: "Relationships take center stage as Venus casts a peaceful, balancing glow. Strive for harmony in all interactions, engage in artistic pursuits, and make choices that honor both yourself and others.",
  scorpio: "A deep, transformative transit invites you to shed old habits and embrace personal alchemy. True power comes through vulnerability and authenticity. Keep your eyes on the long game.",
  sagittarius: "Jupiter inspires a thirst for wisdom, laughter, and adventure. Look at the bigger picture and explore new horizons of thought or philosophy. A breakthrough comes from daring to ask big questions.",
  capricorn: "Saturn rewards your steady discipline and long-term planning. A professional or personal goal is within reach if you stay committed to the climb. Trust the systems you've built.",
  aquarius: "Uranian currents spark innovative, systems-level ideas. Don't be afraid to stand out from the crowd and propose unconventional solutions today. The collective benefits from your unique vision.",
  pisces: "Neptune invites you to float in the currents of imagination and spirit. Your dreams and intuition are heightened; write down your insights. Compassion flows easily, healing old divides."
};
const elementStyles = {
  Fire: {
    color: "text-rose-500 dark:text-rose-400",
    badgeBg: "bg-rose-500/10 dark:bg-rose-500/20",
    badgeBorder: "border-rose-500/20 dark:border-rose-500/30",
    badgeText: "text-rose-600 dark:text-rose-400",
    glowBg: "from-rose-500/15 via-amber-500/5 to-transparent",
    cardBorder: "border-rose-500/30 dark:border-rose-500/40 shadow-rose-500/5 shadow-md",
    cardBgActive: "bg-rose-500/5 dark:bg-rose-500/10",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-3.5 h-3.5 mr-1.5" })
  },
  Earth: {
    color: "text-emerald-500 dark:text-emerald-400",
    badgeBg: "bg-emerald-500/10 dark:bg-emerald-500/20",
    badgeBorder: "border-emerald-500/20 dark:border-emerald-500/30",
    badgeText: "text-emerald-600 dark:text-emerald-400",
    glowBg: "from-emerald-500/15 via-teal-500/5 to-transparent",
    cardBorder: "border-emerald-500/30 dark:border-emerald-500/40 shadow-emerald-500/5 shadow-md",
    cardBgActive: "bg-emerald-500/5 dark:bg-emerald-500/10",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Mountain, { className: "w-3.5 h-3.5 mr-1.5" })
  },
  Air: {
    color: "text-cyan-500 dark:text-cyan-400",
    badgeBg: "bg-cyan-500/10 dark:bg-cyan-500/20",
    badgeBorder: "border-cyan-500/20 dark:border-cyan-500/30",
    badgeText: "text-cyan-600 dark:text-cyan-400",
    glowBg: "from-cyan-500/15 via-indigo-500/5 to-transparent",
    cardBorder: "border-cyan-500/30 dark:border-cyan-500/40 shadow-cyan-500/5 shadow-md",
    cardBgActive: "bg-cyan-500/5 dark:bg-cyan-500/10",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Wind, { className: "w-3.5 h-3.5 mr-1.5" })
  },
  Water: {
    color: "text-blue-500 dark:text-blue-400",
    badgeBg: "bg-blue-500/10 dark:bg-blue-500/20",
    badgeBorder: "border-blue-500/20 dark:border-blue-500/30",
    badgeText: "text-blue-600 dark:text-blue-400",
    glowBg: "from-blue-500/15 via-purple-500/5 to-transparent",
    cardBorder: "border-blue-500/30 dark:border-blue-500/40 shadow-blue-500/5 shadow-md",
    cardBgActive: "bg-blue-500/5 dark:bg-blue-500/10",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Droplet, { className: "w-3.5 h-3.5 mr-1.5" })
  }
};
function HoroscopesStrip() {
  const [activeSignSlug, setActiveSignSlug] = reactExports.useState("aries");
  const activeSign = zodiacSigns.find((s) => s.slug === activeSignSlug) || zodiacSigns[0];
  const activeStyle = elementStyles[activeSign.element];
  const forecastText = dailyForecasts[activeSign.slug] || "";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "horoscopes", className: "py-20 md:py-24 bg-gradient-to-b from-card/30 to-background border-y border-border relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/4 left-1/10 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-1/4 right-1/10 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6 relative z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl text-center mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-xs font-semibold text-primary tracking-wider uppercase mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3 h-3" }),
          "Daily Cosmic Guidance"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-5xl font-bold tracking-tight text-foreground", style: { letterSpacing: "-0.03em" }, children: "Today's Horoscopes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground text-base md:text-lg", children: "Align your day with the stars. Select your zodiac sign below to view your personalized daily forecast." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-5 flex flex-col", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative flex flex-col justify-between h-full rounded-2xl border bg-card/65 backdrop-blur-xl p-6 md:p-8 transition-all duration-500 shadow-xl overflow-hidden ${activeStyle.cardBorder}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute -right-20 -top-20 w-64 h-64 rounded-full bg-gradient-to-br ${activeStyle.glowBg} blur-3xl pointer-events-none transition-all duration-500` }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between relative z-10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-6xl md:text-7xl font-light inline-block filter drop-shadow-md select-none transition-all duration-500 ${activeStyle.color}`, children: activeSign.symbol }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl font-bold text-foreground mt-3 tracking-tight", children: activeSign.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-muted-foreground mt-1", children: activeSign.dates })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${activeStyle.badgeBg} ${activeStyle.badgeBorder} ${activeStyle.badgeText} transition-all duration-500`, children: [
                activeStyle.icon,
                activeSign.element
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { className: "my-6 border-border/70" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4 my-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-background/50 border border-border/40 p-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground font-semibold uppercase tracking-wider block", children: "Ruling Planet" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold text-foreground mt-1 block", children: activeSign.ruler })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-background/50 border border-border/40 p-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground font-semibold uppercase tracking-wider block", children: "Modality" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold text-foreground mt-1 block", children: activeSign.modality })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 relative z-10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold tracking-wider text-primary uppercase block", children: "Daily Forecast" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm md:text-base leading-relaxed font-normal antialiased min-h-[110px] transition-all duration-300", children: forecastText })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex flex-wrap gap-1.5", children: activeSign.traits.map((trait) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "text-[10px] font-semibold px-2.5 py-1 rounded-md bg-muted text-muted-foreground border border-border",
                children: trait
              },
              trait
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 pt-4 border-t border-border/50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/horoscopes/$sign",
              params: { sign: activeSign.slug },
              className: "group/btn inline-flex w-full items-center justify-between px-5 py-3.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:opacity-95 shadow-md shadow-primary/10 transition-all",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "Explore ",
                  activeSign.name,
                  " Personality & Traits"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" })
              ]
            }
          ) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-7 flex flex-col justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 sm:grid-cols-4 gap-3", children: zodiacSigns.map((s) => {
            const isActive = s.slug === activeSignSlug;
            const signStyle = elementStyles[s.element];
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => setActiveSignSlug(s.slug),
                className: `group relative flex flex-col items-center justify-center p-4 rounded-xl border text-center transition-all duration-300 cursor-pointer overflow-hidden ${isActive ? `${signStyle.cardBorder} ${signStyle.cardBgActive}` : "border-border/60 bg-background/50 hover:bg-card hover:border-border hover:shadow-sm"}`,
                children: [
                  isActive && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "absolute top-2 right-2 flex h-1.5 w-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${s.element === "Fire" ? "bg-rose-400" : s.element === "Earth" ? "bg-emerald-400" : s.element === "Air" ? "bg-cyan-400" : "bg-blue-400"}` }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `relative inline-flex rounded-full h-1.5 w-1.5 ${s.element === "Fire" ? "bg-rose-500" : s.element === "Earth" ? "bg-emerald-500" : s.element === "Air" ? "bg-cyan-500" : "bg-blue-500"}` })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: `text-3xl mb-1.5 transition-all duration-300 transform group-hover:scale-110 ${isActive ? signStyle.color : "text-muted-foreground group-hover:text-foreground"}`,
                      children: s.symbol
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: `text-xs font-semibold tracking-tight transition-colors ${isActive ? "text-foreground font-bold" : "text-muted-foreground group-hover:text-foreground"}`,
                      children: s.name
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-muted-foreground/80 mt-0.5 font-medium block", children: s.dates.split(" – ")[0] })
                ]
              },
              s.slug
            );
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 text-center md:text-left flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-card/40 border border-border/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "Want to read detailed yearly, weekly, and monthly reports?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/horoscopes",
                className: "inline-flex items-center text-xs font-bold text-primary hover:underline gap-1",
                children: [
                  "Read All Daily Horoscopes",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3 h-3" })
                ]
              }
            )
          ] })
        ] })
      ] })
    ] })
  ] });
}
const steps = [
  {
    number: "01",
    icon: "🔍",
    title: "Search & Filter",
    description: "Use our search to filter by speciality, session type, tradition, and location. Find the right astrologer in seconds."
  },
  {
    number: "02",
    icon: "👤",
    title: "Explore Profiles",
    description: "Browse rich astrologer profiles featuring bios, sample readings, reviews, and the life areas they specialise in."
  },
  {
    number: "03",
    icon: "📩",
    title: "Book & Connect",
    description: "Send a direct enquiry to your chosen astrologer. Discuss your birth details and goals. Confirm your session. No platform fees, ever."
  }
];
function HowItWorksSection() {
  const ref = reactExports.useRef(null);
  const [visible, setVisible] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "how-it-works", className: "py-24 md:py-32 bg-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6", ref, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl text-center mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium tracking-[0.2em] text-background/70 uppercase", children: "Simple Process" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl font-semibold tracking-tight text-background md:text-4xl", style: { letterSpacing: "-0.02em" }, children: "Getting your reading has never been this easy" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-8 md:grid-cols-3", children: steps.map((step, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "relative",
        style: {
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(16px)",
          filter: visible ? "blur(0)" : "blur(4px)",
          transition: `all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) ${i * 100}ms`
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: step.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl font-bold text-background/15", children: step.number })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-base font-semibold text-background", children: step.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-background/60 leading-relaxed", children: step.description })
        ]
      },
      step.number
    )) })
  ] }) });
}
const countries = [
  { flag: "🇮🇳", name: "India", count: 45, slug: "india" },
  { flag: "🇺🇸", name: "United States", count: 38, slug: "united-states" },
  { flag: "🇬🇧", name: "United Kingdom", count: 22, slug: "united-kingdom" },
  { flag: "🇦🇺", name: "Australia", count: 14, slug: "australia" },
  { flag: "🇩🇪", name: "Germany", count: 8, slug: "germany" },
  { flag: "🇫🇷", name: "France", count: 7, slug: "france" },
  { flag: "🇯🇵", name: "Japan", count: 6, slug: "japan" },
  { flag: "🇧🇷", name: "Brazil", count: 5, slug: "brazil" }
];
function CountriesStrip() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "countries", className: "py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl text-center mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium tracking-[0.2em] text-primary uppercase", children: "Worldwide Coverage" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl", style: { letterSpacing: "-0.02em" }, children: "Find astrologers near you" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "We list practitioners across 20+ countries. Local wisdom for every seeker." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3", children: countries.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
        to: "/countries/$slug",
        params: { slug: c.slug },
        className: "group flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 transition-all hover:border-primary/40 hover:shadow-sm",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: c.flag }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-foreground group-hover:text-primary transition-colors truncate", children: c.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground", children: [
              c.count,
              " astrologers"
            ] })
          ] })
        ]
      },
      c.slug
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/countries", className: "text-sm font-medium text-primary hover:underline", children: "View All Countries →" }) })
  ] }) });
}
const CarouselContext = reactExports.createContext(null);
function useCarousel() {
  const context = reactExports.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}
const Carousel = reactExports.forwardRef(
  ({
    orientation = "horizontal",
    opts,
    setApi,
    plugins,
    className,
    children,
    ...props
  }, ref) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y"
      },
      plugins
    );
    const [canScrollPrev, setCanScrollPrev] = reactExports.useState(false);
    const [canScrollNext, setCanScrollNext] = reactExports.useState(false);
    const onSelect = reactExports.useCallback((api2) => {
      if (!api2) {
        return;
      }
      setCanScrollPrev(api2.canScrollPrev());
      setCanScrollNext(api2.canScrollNext());
    }, []);
    const scrollPrev = reactExports.useCallback(() => {
      api?.scrollPrev();
    }, [api]);
    const scrollNext = reactExports.useCallback(() => {
      api?.scrollNext();
    }, [api]);
    const handleKeyDown = reactExports.useCallback(
      (event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext]
    );
    reactExports.useEffect(() => {
      if (!api || !setApi) {
        return;
      }
      setApi(api);
    }, [api, setApi]);
    reactExports.useEffect(() => {
      if (!api) {
        return;
      }
      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);
      return () => {
        api?.off("select", onSelect);
      };
    }, [api, onSelect]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      CarouselContext.Provider,
      {
        value: {
          carouselRef,
          api,
          opts,
          orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            ref,
            onKeyDownCapture: handleKeyDown,
            className: cn("relative", className),
            role: "region",
            "aria-roledescription": "carousel",
            ...props,
            children
          }
        )
      }
    );
  }
);
Carousel.displayName = "Carousel";
const CarouselContent = reactExports.forwardRef(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: carouselRef, className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      className: cn(
        "flex",
        orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
        className
      ),
      ...props
    }
  ) });
});
CarouselContent.displayName = "CarouselContent";
const CarouselItem = reactExports.forwardRef(({ className, ...props }, ref) => {
  const { orientation } = useCarousel();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      role: "group",
      "aria-roledescription": "slide",
      className: cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      ),
      ...props
    }
  );
});
CarouselItem.displayName = "CarouselItem";
const CarouselPrevious = reactExports.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Button,
    {
      ref,
      variant,
      size,
      className: cn(
        "absolute  h-8 w-8 rounded-full",
        orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      ),
      disabled: !canScrollPrev,
      onClick: scrollPrev,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
});
CarouselPrevious.displayName = "CarouselPrevious";
const CarouselNext = reactExports.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Button,
    {
      ref,
      variant,
      size,
      className: cn(
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      ),
      disabled: !canScrollNext,
      onClick: scrollNext,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
});
CarouselNext.displayName = "CarouselNext";
const testimonials = [
  {
    quote: "My birth chart reading with an astrologer I found on StarSeeker changed my perspective on my career path completely. The insight was uncanny and the session felt deeply personal.",
    name: "Priya M.",
    city: "Mumbai, India",
    type: "Birth Chart Reading"
  },
  {
    quote: "I was sceptical about astrology but booked a synastry reading for my relationship. The astrologer explained our chart dynamics in a way that genuinely made us understand each other better.",
    name: "Rachel & Tom K.",
    city: "London, UK",
    type: "Compatibility Reading"
  },
  {
    quote: "I booked an annual forecast reading and it was the best investment I made all year. Every major theme the astrologer identified played out exactly as described.",
    name: "James O.",
    city: "New York, USA",
    type: "Annual Forecast"
  }
];
function TestimonialsSection() {
  const [api, setApi] = reactExports.useState();
  const [current, setCurrent] = reactExports.useState(0);
  const [count, setCount] = reactExports.useState(0);
  reactExports.useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 md:py-32 bg-gradient-to-b from-background to-card/10 overflow-hidden border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl text-center mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold tracking-[0.2em] text-primary uppercase", children: "What Seekers Say" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl font-bold tracking-tight text-foreground md:text-5xl", style: { letterSpacing: "-0.03em" }, children: "Real reviews from real readings" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground text-base md:text-lg", children: "Hear from seekers who found clarity, direction, and connection through StarSeeker." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative max-w-4xl mx-auto px-4 md:px-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Carousel,
      {
        setApi,
        opts: {
          loop: true,
          align: "center"
        },
        className: "w-full",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselContent, { className: "-ml-4", children: testimonials.map((t, idx) => {
            const isActive = current === idx;
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              CarouselItem,
              {
                className: "pl-4 basis-full md:basis-11/12 lg:basis-5/6 transition-all duration-500 ease-out",
                style: {
                  transform: isActive ? "scale(1)" : "scale(0.95)",
                  opacity: isActive ? 1 : 0.6
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "relative h-full rounded-2xl border border-border bg-card/60 backdrop-blur-md p-8 md:p-12 flex flex-col justify-between shadow-xl overflow-hidden min-h-[300px]", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "absolute -top-4 -left-2 w-28 h-28 text-primary/5 rotate-12 pointer-events-none select-none" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5 text-amber-500 mb-6 justify-center md:justify-start", children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-5 w-5 fill-current" }, i)) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "text-lg md:text-xl font-medium leading-relaxed text-foreground text-center md:text-left italic antialiased", children: [
                      '"',
                      t.quote,
                      '"'
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-8 pt-6 border-t border-border/80 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center md:text-left", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-base text-foreground", children: t.name }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-0.5", children: t.city })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold bg-primary/10 text-primary border border-primary/20", children: t.type })
                  ] })
                ] })
              },
              t.name
            );
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:block", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselPrevious, { className: "absolute -left-4 border-primary/20 hover:bg-primary/5 hover:border-primary/40 text-primary h-10 w-10 transition-all shadow-md" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselNext, { className: "absolute -right-4 border-primary/20 hover:bg-primary/5 hover:border-primary/40 text-primary h-10 w-10 transition-all shadow-md" })
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center gap-2 mt-8", children: Array.from({ length: count }).map((_, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => api?.scrollTo(idx),
        className: `h-2.5 rounded-full transition-all duration-300 cursor-pointer ${current === idx ? "w-8 bg-primary" : "w-2.5 bg-muted hover:bg-muted-foreground/30"}`,
        "aria-label": `Go to slide ${idx + 1}`
      },
      idx
    )) })
  ] }) });
}
function CTASection() {
  const ref = reactExports.useRef(null);
  const [visible, setVisible] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden py-24 md:py-32 bg-gradient-to-br from-primary/10 via-primary/5 to-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "aria-hidden": true,
        className: "absolute inset-0 opacity-[0.18] pointer-events-none",
        style: {
          backgroundImage: "radial-gradient(1px 1px at 15% 25%, currentColor 50%, transparent 51%), radial-gradient(1.5px 1.5px at 80% 30%, currentColor 50%, transparent 51%), radial-gradient(1px 1px at 40% 70%, currentColor 50%, transparent 51%), radial-gradient(1.5px 1.5px at 70% 80%, currentColor 50%, transparent 51%)",
          color: "hsl(var(--primary))"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        ref,
        className: "relative mx-auto max-w-3xl px-6 text-center",
        style: {
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(16px)",
          filter: visible ? "blur(0)" : "blur(4px)",
          transition: "all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-semibold tracking-tight text-foreground md:text-5xl", style: { letterSpacing: "-0.025em", textWrap: "balance" }, children: "Ready to discover what the stars have in store?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-5 max-w-2xl text-muted-foreground text-lg", children: "Browse our full directory of verified professional astrologers. Find your perfect practitioner in minutes — no account needed." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap items-center justify-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "hero", size: "xl", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/astrologers", children: [
              "Browse All Astrologers",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-1 h-4 w-4" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "xl", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/join", children: "I'm an Astrologer" }) })
          ] })
        ]
      }
    )
  ] });
}
function JoinStrip() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-semibold tracking-tight text-background", style: { letterSpacing: "-0.02em" }, children: "Are you a professional astrologer?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm md:text-base text-background/70 max-w-2xl", children: "Join StarSeeker and reach thousands of seekers actively looking to book readings. Free basic listing. Premium options available." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
        to: "/join",
        className: "inline-flex items-center gap-1.5 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90 shrink-0",
        children: [
          "Add Your Profile ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ]
      }
    )
  ] }) });
}
const faqs = [
  {
    q: "How do I find an astrologer near me?",
    a: "Use the search bar at the top of the page. Enter your session type and preferred speciality, then browse results. Every listing includes city and country."
  },
  {
    q: "Is it free to use StarSeeker?",
    a: "Completely free for seekers. No search fees, no booking commissions, no hidden charges. You browse, contact the astrologer directly, and handle payment with them personally."
  },
  {
    q: "How much does an astrology reading typically cost?",
    a: "Pricing depends on the practitioner's experience, reading type, and duration. A 60-minute birth chart reading typically ranges from £60–£200. Annual forecasts and synastry readings can range £80–£300+. Always get a quote directly from the astrologer."
  },
  {
    q: "What information do I need to provide for a reading?",
    a: "For most natal and birth chart readings you will need your exact date, time, and place of birth. The more accurate your birth time, the more precise the reading. Some session types (horary, compatibility) have different requirements — your astrologer will guide you."
  }
];
function HomepageFAQ() {
  const [open, setOpen] = reactExports.useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 md:py-32 bg-card/40 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium tracking-[0.2em] text-primary uppercase", children: "Quick Answers" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl", style: { letterSpacing: "-0.02em" }, children: "Frequently asked questions" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: faqs.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-background overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setOpen(open === i ? null : i),
          className: "w-full flex items-center justify-between gap-4 px-5 py-4 text-left",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-foreground", children: f.q }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: `h-4 w-4 text-muted-foreground shrink-0 transition-transform ${open === i ? "rotate-180" : ""}` })
          ]
        }
      ),
      open === i && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 pb-4 text-sm text-muted-foreground leading-relaxed", children: f.a })
    ] }, i)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/faq", className: "text-sm font-medium text-primary hover:underline", children: "See All FAQs →" }) })
  ] }) });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background pb-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HeroSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FeaturesSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HoroscopesStrip, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HowItWorksSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CountriesStrip, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TestimonialsSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTASection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(JoinStrip, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HomepageFAQ, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FooterSection, {})
  ] });
}
export {
  Index as component
};
