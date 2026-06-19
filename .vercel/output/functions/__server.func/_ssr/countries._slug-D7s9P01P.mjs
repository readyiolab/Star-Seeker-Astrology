import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SiteLayout, P as PageHeader } from "./SiteLayout-BwCsycNI.mjs";
import { g as Route$3, P as PremiumAstrologerCard } from "./router-Dmdsn4PS.mjs";
import "./FooterSection-CB5UHbjl.mjs";
import "../_libs/tanstack__react-router.mjs";
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
function CountryPage() {
  const {
    country,
    matches
  } = Route$3.useLoaderData();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { eyebrow: `${country.flag} Country`, title: `Astrologers in ${country.name}`, subtitle: `${matches.length} verified astrologers across ${country.cities.length} cities.` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-8 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold text-foreground mb-3", children: "Cities" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: country.cities.map((city) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs px-3 py-1.5 rounded-full bg-card border border-border text-muted-foreground", children: city.name }, city.slug)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-6xl px-6", children: matches.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground", children: [
      "No astrologers listed in ",
      country.name,
      " yet."
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5", children: matches.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsx(PremiumAstrologerCard, { a }, a.slug)) }) }) })
  ] });
}
export {
  CountryPage as component
};
