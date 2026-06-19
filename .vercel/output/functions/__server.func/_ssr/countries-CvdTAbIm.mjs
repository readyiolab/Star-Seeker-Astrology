import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteLayout, P as PageHeader } from "./SiteLayout-BwCsycNI.mjs";
import { c as countries, a as astrologers } from "./router-Dmdsn4PS.mjs";
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
function CountriesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { eyebrow: "Countries", title: "Find Astrologers by Country", subtitle: "StarSeeker lists professional astrologers across 20+ countries worldwide. Select your country below to browse practitioners in your region — or filter by city for local options.", primaryCta: {
      label: "Browse all astrologers",
      to: "/astrologers"
    }, secondaryCta: {
      label: "List your profile",
      to: "/join"
    }, stats: [{
      value: `${countries.length}`,
      label: "Countries"
    }, {
      value: `${countries.reduce((n, c) => n + c.cities.length, 0)}`,
      label: "Cities"
    }, {
      value: `${astrologers.length}+`,
      label: "Astrologers"
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-6xl px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5", children: countries.map((c) => {
      const count = astrologers.filter((a) => a.countrySlug === c.slug).length;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/countries/$slug", params: {
        slug: c.slug
      }, className: "group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-md flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: c.flag }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-semibold text-foreground group-hover:text-primary transition-colors", children: c.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-0.5", children: [
            count,
            " astrologers · ",
            c.cities.length,
            " cities"
          ] })
        ] })
      ] }, c.slug);
    }) }) })
  ] });
}
export {
  CountriesPage as component
};
