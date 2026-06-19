import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteLayout } from "./SiteLayout-BwCsycNI.mjs";
import { a as astrologers, s as specialities, c as countries, b as sessions } from "./router-Dmdsn4PS.mjs";
import { S as Sparkles, C as CircleCheck, M as MapPin, a as Star, A as ArrowRight, a1 as Funnel, a2 as Search, b as ShieldCheck, Z as Quote, n as ChevronDown, c as Calendar, E as Earth, j as Clock } from "../_libs/lucide-react.mjs";
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
import "./FooterSection-CB5UHbjl.mjs";
import "./button-s3iKVh83.mjs";
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
function AstrologersPage() {
  const [query, setQuery] = reactExports.useState("");
  const [speciality, setSpeciality] = reactExports.useState("");
  const [session, setSession] = reactExports.useState("");
  const [country, setCountry] = reactExports.useState("");
  const [sort, setSort] = reactExports.useState("featured");
  const [openSection, setOpenSection] = reactExports.useState(null);
  const filtered = reactExports.useMemo(() => {
    const list = astrologers.filter((a) => {
      if (query && !`${a.name} ${a.tagline} ${a.location}`.toLowerCase().includes(query.toLowerCase())) return false;
      if (speciality && !a.specialities.some((s) => s.toLowerCase().includes(speciality.toLowerCase()))) return false;
      if (session && !a.sessions.some((s) => s.toLowerCase().includes(session.toLowerCase()))) return false;
      if (country && a.countrySlug !== country) return false;
      return true;
    });
    if (sort === "rating") return [...list].sort((a, b) => b.rating - a.rating);
    if (sort === "experience") return [...list].sort((a, b) => b.experience - a.experience);
    return [...list].sort((a, b) => Number(!!b.featured) - Number(!!a.featured));
  }, [query, speciality, session, country, sort]);
  const clearAll = () => {
    setQuery("");
    setSpeciality("");
    setSession("");
    setCountry("");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "absolute inset-0 -z-10", style: {
        background: "radial-gradient(60% 50% at 20% 0%, color-mix(in oklab, var(--primary) 18%, transparent), transparent 60%), radial-gradient(50% 50% at 100% 10%, color-mix(in oklab, var(--primary) 12%, transparent), transparent 60%), linear-gradient(180deg, color-mix(in oklab, var(--primary) 6%, var(--background)), var(--background) 70%)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "absolute inset-0 -z-10 opacity-[0.15] pointer-events-none", style: {
        backgroundImage: "radial-gradient(1px 1px at 12% 22%, var(--primary) 50%, transparent 51%), radial-gradient(1px 1px at 78% 18%, var(--primary) 50%, transparent 51%), radial-gradient(1.5px 1.5px at 35% 70%, var(--primary) 50%, transparent 51%), radial-gradient(1px 1px at 88% 64%, var(--primary) 50%, transparent 51%), radial-gradient(1.5px 1.5px at 22% 55%, var(--primary) 50%, transparent 51%), radial-gradient(1px 1px at 68% 85%, var(--primary) 50%, transparent 51%)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 pt-16 pb-14 md:pt-24 md:pb-20 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/60 backdrop-blur px-3 py-1 text-[11px] font-medium tracking-[0.18em] text-primary uppercase shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5" }),
          " Verified Practitioners"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-5 text-4xl md:text-6xl font-semibold tracking-tight text-foreground animate-[fade-up_0.7s_ease-out_both]", style: {
          letterSpacing: "-0.03em",
          textWrap: "balance"
        }, children: [
          "Browse the world's most trusted",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", { className: "hidden md:block" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-primary via-primary to-foreground/70 bg-clip-text text-transparent", children: " professional astrologers" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-5 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed animate-[fade-up_0.7s_ease-out_0.1s_both]", style: {
          textWrap: "pretty"
        }, children: "Hand-vetted Vedic, psychological, evolutionary and traditional astrologers. Filter by tradition, session, language or country — and book a private reading in minutes." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-7 flex flex-wrap items-center justify-center gap-3 animate-[fade-up_0.7s_ease-out_0.2s_both]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#directory", className: "inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[0_10px_30px_-10px_color-mix(in_oklab,var(--primary)_60%,transparent)] transition hover:shadow-[0_18px_40px_-12px_color-mix(in_oklab,var(--primary)_70%,transparent)] hover:-translate-y-0.5", children: [
            "Explore astrologers ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/join", className: "inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white/70 backdrop-blur px-6 py-3 text-sm font-medium text-foreground transition hover:border-primary/40 hover:text-primary", children: "List your profile" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto", children: [{
          v: `${astrologers.length}+`,
          l: "Verified astrologers"
        }, {
          v: `${specialities.length}`,
          l: "Traditions"
        }, {
          v: `${countries.length}`,
          l: "Countries"
        }, {
          v: "0%",
          l: "Commission"
        }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border/70 bg-white/60 backdrop-blur p-4 shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-semibold text-foreground", children: s.v }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5 text-[11px] uppercase tracking-wider text-muted-foreground", children: s.l })
        ] }, s.l)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "directory", className: "mx-auto max-w-7xl px-4 md:px-6 py-10 md:py-14", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-[260px_minmax(0,1fr)_300px] gap-6 lg:gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "lg:sticky lg:top-24 lg:self-start lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto pr-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border/70 bg-white/70 backdrop-blur p-5 shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-semibold text-foreground flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Funnel, { className: "h-4 w-4 text-primary" }),
              " Filters"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: clearAll, className: "text-xs text-primary hover:underline", children: "Clear all" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: query, onChange: (e) => setQuery(e.target.value), placeholder: "Search by name, city…", className: "w-full rounded-xl border border-border bg-card pl-9 pr-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/15 transition" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(FilterGroup, { label: "Speciality", open: openSection === "spec" || openSection === null, onToggle: () => setOpenSection(openSection === "spec" ? "" : "spec"), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FilterPill, { active: !speciality, onClick: () => setSpeciality(""), children: "All traditions" }),
            specialities.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FilterPill, { active: speciality === s.name, onClick: () => setSpeciality(s.name), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mr-1.5", children: s.icon }),
              s.name
            ] }, s.slug))
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(FilterGroup, { label: "Session type", open: openSection === "sess", onToggle: () => setOpenSection(openSection === "sess" ? null : "sess"), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FilterPill, { active: !session, onClick: () => setSession(""), children: "Any session" }),
            sessions.slice(0, 8).map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(FilterPill, { active: session === s.name, onClick: () => setSession(s.name), children: s.name }, s.slug))
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(FilterGroup, { label: "Country", open: openSection === "country", onToggle: () => setOpenSection(openSection === "country" ? null : "country"), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FilterPill, { active: !country, onClick: () => setCountry(""), children: "Worldwide" }),
            countries.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FilterPill, { active: country === c.slug, onClick: () => setCountry(c.slug), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mr-1", children: c.flag }),
              c.name
            ] }, c.slug))
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/8 via-white/70 to-white/40 p-5 shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-5 w-5 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mt-2 text-sm font-semibold text-foreground", children: "Every astrologer is human-verified" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground leading-relaxed", children: "We review credentials, sample readings, and client feedback before any profile goes live." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3 mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl md:text-2xl font-semibold text-foreground tracking-tight", children: "Professional astrologers" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mt-0.5", children: [
              "Showing ",
              filtered.length,
              " of ",
              astrologers.length,
              " practitioners"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "Sort" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: sort, onChange: (e) => setSort(e.target.value), className: "rounded-lg border border-border bg-white px-3 py-1.5 text-sm focus:outline-none focus:border-primary/50", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "featured", children: "Featured" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "rating", children: "Highest rated" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "experience", children: "Most experienced" })
            ] })
          ] })
        ] }),
        filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-dashed border-border bg-white/60 p-16 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "No astrologers match these filters." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: clearAll, className: "mt-3 text-sm text-primary hover:underline", children: "Clear filters" })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-5", children: filtered.map((a, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(PremiumAstrologerCard, { a, delay: i * 40 }, a.slug)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold tracking-tight text-foreground", children: "What seekers are saying" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Verified reviews from real bookings." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid grid-cols-1 md:grid-cols-2 gap-5", children: testimonials.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border/70 bg-white/70 backdrop-blur p-6 shadow-sm hover:shadow-md transition", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "h-5 w-5 text-primary/60" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-sm text-foreground leading-relaxed", children: [
              '"',
              t.quote,
              '"'
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center text-xs font-semibold text-primary", children: t.name.split(" ").map((n) => n[0]).join("") }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium text-foreground", children: t.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: t.role })
              ] })
            ] })
          ] }, t.name)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold tracking-tight text-foreground", children: "Frequently asked questions" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 space-y-3", children: faqs.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "group rounded-2xl border border-border/70 bg-white/70 p-5 shadow-sm open:shadow-md transition", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("summary", { className: "flex cursor-pointer items-center justify-between gap-4 text-sm font-medium text-foreground", children: [
              f.q,
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4 text-muted-foreground transition group-open:rotate-180" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground leading-relaxed", children: f.a })
          ] }, f.q)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("aside", { className: "hidden lg:block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sticky top-24 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border/70 bg-white/80 backdrop-blur p-5 shadow-[0_20px_40px_-20px_color-mix(in_oklab,var(--primary)_30%,transparent)]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] text-primary uppercase", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-3.5 w-3.5" }),
            " Book a Reading"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mt-3 text-lg font-semibold text-foreground tracking-tight", children: "Find your astrologer in 3 steps" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "mt-4 space-y-3 text-sm text-muted-foreground", children: ["Browse verified practitioners", "Pick a session that fits your question", "Book a private virtual reading"].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/10 text-[11px] font-semibold text-primary", children: i + 1 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/85", children: s })
          ] }, s)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/sessions", className: "mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition hover:opacity-90", children: [
            "Browse session types ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "mt-2 inline-flex w-full items-center justify-center rounded-xl border border-border bg-white px-4 py-2.5 text-sm font-medium text-foreground transition hover:border-primary/40 hover:text-primary", children: "Talk to a concierge" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid grid-cols-3 gap-2 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mini, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-3.5 w-3.5" }), label: "Verified" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mini, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Earth, { className: "h-3.5 w-3.5" }), label: "Global" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mini, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3.5 w-3.5" }), label: "24h reply" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-primary/15 bg-gradient-to-br from-primary/10 via-white/70 to-white/40 p-5 shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "text-sm font-semibold text-foreground", children: "New to astrology?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground leading-relaxed", children: "Start with a Birth Chart Reading — a complete overview of your natal placements." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/sessions/$slug", params: {
            slug: "birth-chart-reading"
          }, className: "mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline", children: [
            "Learn more ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5" })
          ] })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:hidden sticky bottom-3 z-30 mx-3 mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border/70 bg-white/90 backdrop-blur shadow-[0_18px_40px_-12px_color-mix(in_oklab,var(--primary)_40%,transparent)] p-3 flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Ready to book?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-foreground truncate", children: "Find your astrologer" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/sessions", className: "shrink-0 inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground", children: [
        "Book ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
      ] })
    ] }) })
  ] });
}
function FilterGroup({
  label,
  open,
  onToggle,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 border-t border-border/70 pt-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: onToggle, className: "flex w-full items-center justify-between text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground transition", children: [
      label,
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: `h-3.5 w-3.5 transition ${open ? "rotate-180" : ""}` })
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex flex-wrap gap-1.5", children })
  ] });
}
function FilterPill({
  active,
  onClick,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick, className: `text-xs px-2.5 py-1 rounded-full border transition ${active ? "border-primary bg-primary text-primary-foreground shadow-sm" : "border-border bg-white text-foreground/80 hover:border-primary/40 hover:text-primary"}`, children });
}
function Mini({
  icon,
  label
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border/70 bg-white/60 py-1.5 text-[10px] text-muted-foreground flex flex-col items-center gap-0.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: icon }),
    label
  ] });
}
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
const testimonials = [{
  name: "Priya Mehta",
  role: "Booked a Vedic Reading",
  quote: "I felt seen in a way I hadn't expected. The detail and warmth of my reading completely shifted how I'm approaching this year."
}, {
  name: "James Whitfield",
  role: "Booked a Career Forecast",
  quote: "Genuinely the most useful 60 minutes I've spent on my career in a decade. Specific, kind, and timed to the week."
}, {
  name: "Sofia Alvarez",
  role: "Booked a Synastry Session",
  quote: "We left the session with so much more compassion for each other. The astrologer matched us perfectly."
}, {
  name: "Daniel Kim",
  role: "Booked a Birth Chart Reading",
  quote: "Premium experience from the first click. Vetting, booking, and the reading itself — all flawless."
}];
const faqs = [{
  q: "How are astrologers vetted?",
  a: "Every practitioner is human-reviewed: credentials, sample readings, references, and ongoing client feedback. Profiles are only published after a manual review."
}, {
  q: "How do I pick the right astrologer?",
  a: "Filter by tradition (e.g. Vedic, Hellenistic), session type (e.g. natal, synastry), and language. Read bios and reviews, then book a session that matches your question."
}, {
  q: "What does a reading cost?",
  a: "Pricing is set by each astrologer and visible on every profile. Typical sessions range from $60–$180 depending on length, tradition, and experience."
}, {
  q: "Are sessions online or in person?",
  a: "Most readings are private virtual sessions over video. Some practitioners also offer in-person sessions in their city."
}, {
  q: "Can I cancel or reschedule?",
  a: "Yes — cancellation and rescheduling policies are shown on each astrologer's profile before you book."
}];
export {
  PremiumAstrologerCard as AstrologerCard,
  PremiumAstrologerCard,
  AstrologersPage as component
};
