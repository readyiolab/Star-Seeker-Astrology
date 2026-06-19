import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteLayout, P as PageHeader } from "./SiteLayout-BwCsycNI.mjs";
import { s as specialities, a as astrologers } from "./router-Dmdsn4PS.mjs";
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
function SpecialitiesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { eyebrow: "Specialities", title: "Browse Astrologers by Speciality", subtitle: "Every astrologer has a tradition and an approach. Some work with the ancient precision of Vedic Jyotish. Others explore the psychological depths of the Western birth chart. Browse all traditions and specialities to find the right practitioner for your journey.", primaryCta: {
      label: "Browse all astrologers",
      to: "/astrologers"
    }, secondaryCta: {
      label: "By session type",
      to: "/sessions"
    }, stats: [{
      value: `${specialities.length}`,
      label: "Specialities"
    }, {
      value: `${astrologers.length}+`,
      label: "Practitioners"
    }, {
      value: "100%",
      label: "Human-verified"
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5", children: specialities.map((s) => {
      const count = astrologers.filter((a) => a.specialities.some((x) => x.toLowerCase() === s.name.toLowerCase())).length;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/specialities/$slug", params: {
        slug: s.slug
      }, className: "group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl", children: s.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-base font-semibold text-foreground group-hover:text-primary transition-colors", children: s.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-sm text-muted-foreground leading-relaxed", children: s.short }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-xs text-muted-foreground", children: [
          count,
          " astrologers →"
        ] })
      ] }, s.slug);
    }) }) })
  ] });
}
export {
  SpecialitiesPage as component
};
