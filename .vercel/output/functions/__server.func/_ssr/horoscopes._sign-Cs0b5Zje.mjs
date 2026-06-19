import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteLayout, P as PageHeader } from "./SiteLayout-BwCsycNI.mjs";
import { B as Button } from "./button-s3iKVh83.mjs";
import { f as Route$4 } from "./router-Dmdsn4PS.mjs";
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
import "../_libs/lucide-react.mjs";
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
function SignPage() {
  const {
    sign
  } = Route$4.useLoaderData();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { eyebrow: `${sign.symbol} ${sign.dates}`, title: `${sign.name} — Horoscope & Personality`, subtitle: sign.description }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-4xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: [{
      label: "Element",
      value: sign.element
    }, {
      label: "Modality",
      value: sign.modality
    }, {
      label: "Ruler",
      value: sign.ruler
    }, {
      label: "Dates",
      value: sign.dates
    }].map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border bg-card p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground uppercase tracking-wider", children: m.label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm font-semibold", children: m.value })
    ] }, m.label)) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-xl font-semibold", children: [
        "Today's ",
        sign.name,
        " Horoscope"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-muted-foreground leading-relaxed", children: [
        "The ",
        sign.element.toLowerCase(),
        " energy of ",
        sign.name,
        " is asking you to lean into what feels alive today. Themes around ",
        sign.traits[0].toLowerCase(),
        " and ",
        sign.traits[1].toLowerCase(),
        " are heightened. Notice where you're being invited to move, even gently, in the direction of growth. This is a day for action that feels true rather than action that simply looks productive."
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold", children: "Core Traits" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex flex-wrap gap-2", children: sign.traits.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs px-3 py-1.5 rounded-full bg-primary/5 text-primary border border-primary/15", children: t }, t)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12 border-t border-border bg-card/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl px-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl font-semibold tracking-tight", children: [
        "Want a full ",
        sign.name,
        " reading?"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Your Sun sign is only the start. A personal birth chart reading reveals the full picture." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/astrologers", children: "Browse Astrologers" }) })
    ] }) })
  ] });
}
export {
  SignPage as component
};
