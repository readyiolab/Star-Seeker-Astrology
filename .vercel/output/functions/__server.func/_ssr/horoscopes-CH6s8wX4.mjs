import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteLayout, P as PageHeader } from "./SiteLayout-BwCsycNI.mjs";
import { z as zodiacSigns } from "./router-Dmdsn4PS.mjs";
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
import "../_libs/lucide-react.mjs";
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
const today = (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", {
  weekday: "long",
  month: "long",
  day: "numeric"
});
function HoroscopesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { eyebrow: "Horoscopes", title: "Daily Horoscopes — All 12 Signs", subtitle: `Your daily astrological guidance for every sign of the zodiac. Written by professional astrologers, updated every morning. Today — ${today}.`, primaryCta: {
      label: "Book a personal reading",
      to: "/astrologers"
    }, secondaryCta: {
      label: "Compatibility & synastry",
      to: "/sessions"
    }, stats: [{
      value: "12",
      label: "Zodiac signs"
    }, {
      value: "Daily",
      label: "Free forecasts"
    }, {
      value: `${today.split(",")[0]}`,
      label: "Today"
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-6xl px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4", children: zodiacSigns.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/horoscopes/$sign", params: {
      sign: s.slug
    }, className: "group rounded-xl border border-border bg-card p-5 text-center transition-all hover:border-primary/40 hover:shadow-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl", children: s.symbol }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 text-sm font-semibold group-hover:text-primary transition-colors", children: s.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: s.dates })
    ] }, s.slug)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 border-t border-border bg-card/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl px-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold tracking-tight", children: "Want more than a daily forecast?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "A personal birth chart reading goes far beyond your Sun sign. Browse our verified astrologers for a one-on-one session." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/astrologers", className: "inline-block mt-6 rounded-lg bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:opacity-90 transition", children: "Browse Astrologers" })
    ] }) })
  ] });
}
export {
  HoroscopesPage as component
};
