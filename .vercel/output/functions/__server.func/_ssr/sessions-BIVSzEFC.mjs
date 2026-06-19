import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteLayout, P as PageHeader } from "./SiteLayout-BwCsycNI.mjs";
import { b as sessions, a as astrologers } from "./router-Dmdsn4PS.mjs";
import { S as Sparkles, j as Clock, U as Users, A as ArrowRight, G as Globe, g as Moon, O as Orbit, c as Calendar, k as Flame, f as Compass, h as Sun, H as Heart, l as FileText } from "../_libs/lucide-react.mjs";
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
const sessionIcons = {
  "birth-chart-reading": /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-5 h-5 text-primary" }),
  "natal-chart-analysis": /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-5 h-5 text-primary" }),
  "compatibility-synastry": /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-5 h-5 text-primary" }),
  "solar-return-reading": /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "w-5 h-5 text-primary" }),
  "career-life-path": /* @__PURE__ */ jsxRuntimeExports.jsx(Compass, { className: "w-5 h-5 text-primary" }),
  "love-relationships": /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-5 h-5 text-primary" }),
  "transit-forecast": /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-5 h-5 text-primary" }),
  "annual-forecast": /* @__PURE__ */ jsxRuntimeExports.jsx(Orbit, { className: "w-5 h-5 text-primary" }),
  "lunar-return": /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "w-5 h-5 text-primary" }),
  "predictive-astrology": /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-5 h-5 text-primary" }),
  "child-chart-reading": /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-5 h-5 text-primary" }),
  "online-virtual-session": /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-5 h-5 text-primary" })
};
function SessionsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { eyebrow: "Sessions", title: "Find an Astrologer for Your Reading", subtitle: "Whatever life question is calling for clarity, we have an astrologer who specialises in exactly that. Browse all session types below to find practitioners who focus on what matters most to you right now.", primaryCta: {
      label: "Browse astrologers",
      to: "/astrologers"
    }, secondaryCta: {
      label: "Browse specialities",
      to: "/specialities"
    }, stats: [{
      value: `${sessions.length}`,
      label: "Session types"
    }, {
      value: `${astrologers.length}+`,
      label: "Practitioners"
    }, {
      value: "Online",
      label: "Anywhere in the world"
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-20 relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/3 left-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-1/3 right-10 w-72 h-72 rounded-full bg-accent/5 blur-3xl pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-6xl px-6 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: sessions.map((s) => {
        const count = astrologers.filter((a) => a.sessions.some((x) => x.toLowerCase() === s.name.toLowerCase())).length;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/sessions/$slug", params: {
          slug: s.slug
        }, className: "group relative flex flex-col justify-between rounded-2xl border border-border bg-card/60 backdrop-blur-md p-6 hover:border-primary/45 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden min-h-[230px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-12 -top-12 w-28 h-28 bg-primary/5 rounded-full blur-2xl pointer-events-none group-hover:bg-primary/10 transition-colors duration-500" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-9 w-9 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300", children: sessionIcons[s.slug] || /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-5 h-5 text-primary" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center text-[9px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded bg-muted text-muted-foreground border border-border/50 select-none", children: "Astrology Reading" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base md:text-lg font-bold text-foreground group-hover:text-primary tracking-tight transition-colors mb-2.5", children: s.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs md:text-sm text-muted-foreground leading-relaxed line-clamp-3 min-h-[60px]", children: s.description })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 pt-4 border-t border-border/50 flex items-center justify-between text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 bg-primary/5 text-primary font-semibold px-2.5 py-1 rounded-full border border-primary/10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3.5 w-3.5" }),
              s.duration
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 font-bold group-hover:text-foreground transition-colors", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-4 w-4" }),
              count,
              " ",
              count === 1 ? "astrologer" : "astrologers",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5 ml-0.5 transform group-hover:translate-x-1 transition-transform" })
            ] })
          ] })
        ] }, s.slug);
      }) }) })
    ] })
  ] });
}
export {
  SessionsPage as component
};
