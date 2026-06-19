import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { N as Navbar, F as FooterSection } from "./FooterSection-CB5UHbjl.mjs";
import { u as useRouterState, L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as Sparkles, A as ArrowRight, b as ShieldCheck, a as Star, c as Calendar, W as WandSparkles, H as Heart, d as CircleQuestionMark, B as BookOpen, e as Mail, f as Compass, E as Earth, g as Moon, h as Sun, U as Users } from "../_libs/lucide-react.mjs";
function PremiumCTA({ variant = "default" }) {
  switch (variant) {
    case "astrologers":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(AstrologersCTA, {});
    case "sessions":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(SessionsCTA, {});
    case "horoscopes":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(HoroscopesCTA, {});
    case "countries":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(CountriesCTA, {});
    case "specialities":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(SpecialitiesCTA, {});
    case "blog":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(BlogCTA, {});
    case "faq":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(FaqCTA, {});
    case "about":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(AboutCTA, {});
    case "contact":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(ContactCTA, {});
    case "join":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(JoinCTA, {});
    default:
      return /* @__PURE__ */ jsxRuntimeExports.jsx(DefaultCTA, {});
  }
}
function Eyebrow({ icon, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[11px] font-medium tracking-[0.18em] text-primary uppercase", children: [
    icon,
    children
  ] });
}
function PrimaryLink({ to, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Link,
    {
      to,
      className: "inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[0_10px_30px_-10px_color-mix(in_oklab,var(--primary)_60%,transparent)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-12px_color-mix(in_oklab,var(--primary)_70%,transparent)]",
      children
    }
  );
}
function GhostLink({ to, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Link,
    {
      to,
      className: "inline-flex items-center gap-2 rounded-full border border-border bg-white/80 backdrop-blur px-6 py-3 text-sm font-medium text-foreground transition hover:border-primary/40 hover:text-primary",
      children
    }
  );
}
function DefaultCTA() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden py-20 md:py-28", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "aria-hidden": true,
        className: "absolute inset-0 -z-10",
        style: {
          background: "radial-gradient(60% 50% at 50% 0%, color-mix(in oklab, var(--primary) 16%, transparent), transparent 65%), linear-gradient(180deg, color-mix(in oklab, var(--primary) 5%, var(--background)), var(--background) 80%)"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-5xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-3xl border border-border/70 bg-white/80 backdrop-blur-xl p-8 md:p-14 text-center shadow-[0_30px_80px_-30px_color-mix(in_oklab,var(--primary)_45%,transparent)]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          "aria-hidden": true,
          className: "absolute -top-24 left-1/2 -translate-x-1/2 h-56 w-[36rem] rounded-full bg-primary/20 blur-3xl pointer-events-none"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Eyebrow, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5" }), children: "Begin your reading" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-5 text-3xl md:text-5xl font-semibold tracking-tight text-foreground", style: { letterSpacing: "-0.03em", textWrap: "balance" }, children: [
        "Find the astrologer who actually",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-primary via-primary to-foreground/70 bg-clip-text text-transparent", children: " understands your chart" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-4 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed", children: "Verified practitioners. Honest pricing. Private virtual sessions you can book in minutes." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap items-center justify-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(PrimaryLink, { to: "/astrologers", children: [
          "Browse astrologers ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(GhostLink, { to: "/sessions", children: "Explore session types" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto", children: [
        { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-4 w-4" }), label: "Human-verified" },
        { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4" }), label: "4.9 avg rating" },
        { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-4 w-4" }), label: "Book in minutes" }
      ].map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-2 rounded-xl border border-border/70 bg-white/60 px-4 py-2.5 text-xs text-foreground/80", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: m.icon }),
        m.label
      ] }, m.label)) })
    ] }) })
  ] });
}
function AstrologersCTA() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-20 md:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-6xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-[2rem] border border-border/70 bg-gradient-to-br from-primary/10 via-white to-white shadow-[0_30px_80px_-40px_color-mix(in_oklab,var(--primary)_50%,transparent)]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl", "aria-hidden": true }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-[1.3fr_1fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 md:p-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Eyebrow, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-3.5 w-3.5" }), children: "Verified astrologers" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-5 text-3xl md:text-4xl font-semibold tracking-tight", style: { letterSpacing: "-0.025em", textWrap: "balance" }, children: "Real practitioners. Real conversations. Booked in under a minute." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground max-w-lg leading-relaxed", children: "Filter by speciality, language and country. See full profiles, real reviews and live availability before you commit." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-7 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(PrimaryLink, { to: "/astrologers", children: [
            "See all astrologers ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(GhostLink, { to: "/specialities", children: "Browse by speciality" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative hidden md:flex items-center justify-center p-10 bg-gradient-to-br from-white/40 to-primary/5 border-l border-border/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex -space-x-4", children: ["A", "M", "S", "R", "K"].map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "h-16 w-16 rounded-full border-4 border-white bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center text-lg font-semibold text-primary shadow-md",
            style: { transform: `translateY(${i % 2 === 0 ? "-6px" : "6px"})` },
            children: c
          },
          c
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-6 right-6 rounded-full bg-white/90 border border-border px-3 py-1.5 text-[11px] font-medium text-foreground shadow", children: "+120 active today" })
      ] })
    ] })
  ] }) }) });
}
function SessionsCTA() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-20 md:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-5xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-[2rem] border border-border bg-foreground text-background p-8 md:p-12 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-20", "aria-hidden": true, style: { background: "radial-gradient(40% 50% at 80% 20%, color-mix(in oklab, var(--primary) 80%, transparent), transparent 70%)" } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative grid md:grid-cols-[1fr_auto] gap-8 items-end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-medium tracking-[0.18em] uppercase", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-3.5 w-3.5" }),
          " Live sessions"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-5 text-3xl md:text-4xl font-semibold tracking-tight", style: { letterSpacing: "-0.025em", textWrap: "balance" }, children: "Pick a session length that fits your question — not the other way around." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-background/70 max-w-xl", children: "15, 30 or 60 minutes. Video, voice or chat. You decide." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 md:items-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/astrologers", className: "inline-flex items-center gap-2 rounded-full bg-background text-foreground px-6 py-3 text-sm font-medium transition hover:opacity-90", children: [
          "Book a session ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/sessions", className: "text-xs text-background/70 hover:text-background underline underline-offset-4", children: "Compare all session types" })
      ] })
    ] })
  ] }) }) });
}
function HoroscopesCTA() {
  const signs = ["♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐", "♑", "♒", "♓"];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-20 md:py-24 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-5xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-[2rem] border border-border/70 bg-gradient-to-b from-white to-primary/5 p-10 md:p-14 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto mb-8 h-44 w-44", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-full border border-primary/20" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-3 rounded-full border border-primary/10" }),
      signs.map((s, i) => {
        const angle = i / signs.length * 2 * Math.PI - Math.PI / 2;
        const r = 78;
        const x = 50 + Math.cos(angle) * r / 1.76;
        const y = 50 + Math.sin(angle) * r / 1.76;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "absolute -translate-x-1/2 -translate-y-1/2 text-primary/80 text-lg",
            style: { left: `${x}%`, top: `${y}%` },
            children: s
          },
          i
        );
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "h-8 w-8 text-primary" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Eyebrow, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "h-3.5 w-3.5" }), children: "Daily horoscopes" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-3xl md:text-4xl font-semibold tracking-tight", style: { letterSpacing: "-0.025em", textWrap: "balance" }, children: "Today's forecast for your sign — refreshed every morning." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-7 flex flex-wrap items-center justify-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(PrimaryLink, { to: "/horoscopes", children: [
        "Read today's horoscope ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(GhostLink, { to: "/astrologers", children: "Get a personal reading" })
    ] })
  ] }) }) });
}
function CountriesCTA() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-20 md:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-6xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-[2rem] border border-border/70 bg-white p-10 md:p-14", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-[0.06] pointer-events-none", "aria-hidden": true, style: {
      backgroundImage: "radial-gradient(circle, var(--primary) 1px, transparent 1.5px)",
      backgroundSize: "18px 18px"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative grid md:grid-cols-2 gap-10 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Eyebrow, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Earth, { className: "h-3.5 w-3.5" }), children: "Worldwide" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-5 text-3xl md:text-4xl font-semibold tracking-tight", style: { letterSpacing: "-0.025em", textWrap: "balance" }, children: "Astrologers across 40+ countries — in your language, in your timezone." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground max-w-lg leading-relaxed", children: "Whether you want a Vedic master from India or a tropical astrologer in Lisbon, browse by country and culture." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(PrimaryLink, { to: "/countries", children: [
            "Browse by country ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(GhostLink, { to: "/astrologers", children: "All astrologers" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-56", children: [
        ["IN", 78, 55],
        ["US", 22, 38],
        ["UK", 46, 22],
        ["BR", 30, 70],
        ["JP", 86, 35],
        ["AU", 84, 78],
        ["DE", 50, 30],
        ["AE", 62, 50]
      ].map(([c, x, y]) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center",
          style: { left: `${x}%`, top: `${y}%` },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-3 w-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inline-flex h-full w-full rounded-full bg-primary/40 animate-ping" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex rounded-full h-3 w-3 bg-primary" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1 text-[10px] font-medium text-foreground/70", children: c })
          ]
        },
        c
      )) })
    ] })
  ] }) }) });
}
function SpecialitiesCTA() {
  const tags = ["Vedic", "Tarot", "Numerology", "Career", "Love & Relationships", "Birth Chart", "Compatibility", "Transits", "Remedies"];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-20 md:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-5xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-[2rem] border border-border/70 bg-gradient-to-br from-white via-white to-primary/5 p-10 md:p-14 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-primary/15 blur-3xl", "aria-hidden": true }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative grid md:grid-cols-[1.1fr_1fr] gap-10 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Eyebrow, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Compass, { className: "h-3.5 w-3.5" }), children: "Specialities" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-5 text-3xl md:text-4xl font-semibold tracking-tight", style: { letterSpacing: "-0.025em", textWrap: "balance" }, children: "Match your question to the right tradition." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground max-w-md", children: "From Vedic to tarot, from career to compatibility — find an expert who specialises in exactly what you need." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex flex-wrap gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(PrimaryLink, { to: "/specialities", children: [
          "Explore all specialities ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 justify-end", children: tags.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: "inline-flex items-center rounded-full border border-primary/20 bg-white px-4 py-2 text-sm text-foreground shadow-sm",
          style: { transform: `rotate(${(i % 2 === 0 ? -1 : 1) * 1.5}deg)` },
          children: t
        },
        t
      )) })
    ] })
  ] }) }) });
}
function BlogCTA() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-20 md:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-3xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-[2rem] border border-border/70 bg-white p-10 md:p-14 text-center shadow-[0_20px_60px_-30px_color-mix(in_oklab,var(--primary)_40%,transparent)]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-5 w-5" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Eyebrow, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-3.5 w-3.5" }), children: "Weekly digest" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-3xl md:text-4xl font-semibold tracking-tight", style: { letterSpacing: "-0.025em", textWrap: "balance" }, children: "Cosmic insights, in your inbox every Sunday." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Transits, full moons, weekly forecasts and reading guides. No spam, ever." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "mt-7 flex flex-col sm:flex-row gap-2 max-w-md mx-auto", onSubmit: (e) => e.preventDefault(), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "email",
          required: true,
          placeholder: "you@email.com",
          className: "flex-1 rounded-full border border-border bg-white px-5 py-3 text-sm outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/15"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90", children: "Subscribe" })
    ] })
  ] }) }) });
}
function FaqCTA() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-20 md:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-4xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-[2rem] border border-border/70 bg-gradient-to-br from-primary/5 to-white p-10 md:p-14 grid md:grid-cols-[auto_1fr_auto] gap-6 items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleQuestionMark, { className: "h-7 w-7" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Eyebrow, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleQuestionMark, { className: "h-3.5 w-3.5" }), children: "Still curious?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-2xl md:text-3xl font-semibold tracking-tight", style: { letterSpacing: "-0.025em" }, children: "Can't find your answer? Our team replies within a few hours." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 md:items-end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(PrimaryLink, { to: "/contact", children: [
        "Contact support ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/astrologers", className: "text-xs text-muted-foreground hover:text-primary", children: "or talk to an astrologer →" })
    ] })
  ] }) }) });
}
function AboutCTA() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-20 md:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-5xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-[2rem] border border-border/70 bg-gradient-to-r from-foreground to-foreground/90 text-background p-10 md:p-14", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-16 -top-16 h-64 w-64 rounded-full bg-primary/40 blur-3xl", "aria-hidden": true }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-3.5 w-3.5" }),
        " Our mission"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-5 text-3xl md:text-4xl font-semibold tracking-tight", style: { letterSpacing: "-0.025em", textWrap: "balance" }, children: "Honest astrology. Real practitioners. No gimmicks." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-background/70 leading-relaxed", children: "We're rebuilding trust in astrology — one verified practitioner, one private session, one fair price at a time." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-7 flex flex-wrap gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/astrologers", className: "inline-flex items-center gap-2 rounded-full bg-background text-foreground px-6 py-3 text-sm font-medium transition hover:opacity-90", children: [
          "Meet our astrologers ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/join", className: "inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium transition hover:bg-white/10", children: "Join the platform" })
      ] })
    ] })
  ] }) }) });
}
function ContactCTA() {
  const channels = [
    { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-5 w-5" }), title: "Email", desc: "hello@starseeker.com" },
    { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-5 w-5" }), title: "Book a call", desc: "15 min intro" },
    { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-5 w-5" }), title: "Talk to a guide", desc: "Free 5-min match" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-20 md:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Eyebrow, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5" }), children: "Reach out" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-3xl md:text-4xl font-semibold tracking-tight", style: { letterSpacing: "-0.025em" }, children: "Three ways to talk to us." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-4", children: channels.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group rounded-2xl border border-border/70 bg-white p-6 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_50px_-25px_color-mix(in_oklab,var(--primary)_45%,transparent)]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary", children: c.icon }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 text-lg font-semibold", children: c.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: c.desc }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 text-sm font-medium text-primary inline-flex items-center gap-1 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition", children: [
        "Go ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5" })
      ] })
    ] }, c.title)) })
  ] }) });
}
function JoinCTA() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-20 md:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-5xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-[2rem] border-2 border-dashed border-primary/40 bg-primary/[0.04] p-10 md:p-14 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground rotate-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(WandSparkles, { className: "h-6 w-6" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Eyebrow, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5" }), children: "For practitioners" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-3xl md:text-4xl font-semibold tracking-tight", style: { letterSpacing: "-0.025em", textWrap: "balance" }, children: "Built for astrologers who care about their craft." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground max-w-xl mx-auto", children: "Keep more of what you earn, own your clients, and only get matched with seekers who fit your practice." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-7 flex flex-wrap items-center justify-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(PrimaryLink, { to: "/join", children: [
        "Apply to join ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(GhostLink, { to: "/about", children: "Read our story" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 text-xs text-muted-foreground", children: "Average review: 48 hours · No setup fees" })
  ] }) }) });
}
function variantFromPath(pathname) {
  if (pathname.startsWith("/astrologers")) return "astrologers";
  if (pathname.startsWith("/sessions")) return "sessions";
  if (pathname.startsWith("/horoscopes")) return "horoscopes";
  if (pathname.startsWith("/countries")) return "countries";
  if (pathname.startsWith("/specialities")) return "specialities";
  if (pathname.startsWith("/blog")) return "blog";
  if (pathname.startsWith("/faq")) return "faq";
  if (pathname.startsWith("/about")) return "about";
  if (pathname.startsWith("/contact")) return "contact";
  if (pathname.startsWith("/join")) return "join";
  return "default";
}
function SiteLayout({
  children,
  hideCta = false,
  ctaVariant
}) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const variant = ctaVariant ?? variantFromPath(pathname);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 pt-20", children }),
    !hideCta && /* @__PURE__ */ jsxRuntimeExports.jsx(PremiumCTA, { variant }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FooterSection, {})
  ] });
}
function PageHeader({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  stats,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden border-b border-border bg-gradient-to-b from-primary/5 via-card/40 to-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "aria-hidden": true,
        className: "absolute inset-0 opacity-[0.18] pointer-events-none",
        style: {
          backgroundImage: "radial-gradient(1px 1px at 12% 22%, currentColor 50%, transparent 51%), radial-gradient(1px 1px at 78% 18%, currentColor 50%, transparent 51%), radial-gradient(1.5px 1.5px at 35% 70%, currentColor 50%, transparent 51%), radial-gradient(1px 1px at 88% 64%, currentColor 50%, transparent 51%), radial-gradient(1px 1px at 55% 38%, currentColor 50%, transparent 51%), radial-gradient(1.5px 1.5px at 22% 55%, currentColor 50%, transparent 51%), radial-gradient(1px 1px at 68% 85%, currentColor 50%, transparent 51%)",
          color: "hsl(var(--primary))"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "aria-hidden": true,
        className: "absolute -top-32 left-1/2 -translate-x-1/2 h-72 w-[42rem] rounded-full bg-primary/15 blur-3xl pointer-events-none"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-6xl px-6 py-20 md:py-28 text-center", children: [
      eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[11px] font-medium tracking-[0.18em] text-primary uppercase", children: eyebrow }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "h1",
        {
          className: "text-4xl md:text-6xl font-semibold tracking-tight text-foreground",
          style: { letterSpacing: "-0.025em", textWrap: "balance" },
          children: title
        }
      ),
      subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "p",
        {
          className: "mx-auto mt-5 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed",
          style: { textWrap: "pretty" },
          children: subtitle
        }
      ),
      (primaryCta || secondaryCta) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap items-center justify-center gap-3", children: [
        primaryCta && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: primaryCta.to,
            params: primaryCta.params,
            className: "inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition hover:opacity-90",
            children: primaryCta.label
          }
        ),
        secondaryCta && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: secondaryCta.to,
            params: secondaryCta.params,
            className: "inline-flex items-center justify-center rounded-lg border border-border bg-card/70 px-5 py-2.5 text-sm font-medium text-foreground transition hover:border-primary/40 hover:text-primary",
            children: secondaryCta.label
          }
        )
      ] }),
      stats && stats.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-4", children: stats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-semibold text-foreground", children: s.value }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5 text-[11px] uppercase tracking-wider text-muted-foreground", children: s.label })
      ] }, s.label)) }),
      children && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children })
    ] })
  ] });
}
export {
  PageHeader as P,
  SiteLayout as S
};
