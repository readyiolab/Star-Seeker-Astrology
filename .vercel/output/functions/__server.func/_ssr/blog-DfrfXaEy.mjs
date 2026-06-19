import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteLayout, P as PageHeader } from "./SiteLayout-BwCsycNI.mjs";
import { d as blogPosts } from "./router-Dmdsn4PS.mjs";
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
const categories = ["Beginner Guides", "Chart Techniques", "Sign Deep Dives", "Planetary Guides", "Relationships", "Career", "Spirituality", "Vedic Astrology"];
function BlogPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { eyebrow: "Resources", title: "Astrology Guides, Articles & Resources", subtitle: "Deepen your understanding of astrology with our library of guides, explainers, and practitioner insights — from beginner introductions to advanced chart technique.", primaryCta: {
      label: "Browse astrologers",
      to: "/astrologers"
    }, secondaryCta: {
      label: "Daily horoscopes",
      to: "/horoscopes"
    }, stats: [{
      value: `${blogPosts.length}+`,
      label: "Articles"
    }, {
      value: "Weekly",
      label: "New pieces"
    }, {
      value: "Free",
      label: "Always"
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-10 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-5xl px-6 flex flex-wrap items-center justify-center gap-2", children: categories.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs px-3 py-1.5 rounded-full border border-border bg-card text-muted-foreground", children: c }, c)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-5xl px-6 grid grid-cols-1 md:grid-cols-2 gap-6", children: blogPosts.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/blog/$slug", params: {
      slug: p.slug
    }, className: "group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] uppercase tracking-wider text-primary font-medium", children: [
        p.category,
        " · ",
        p.readTime,
        " read"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors", style: {
        textWrap: "balance"
      }, children: p.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: p.excerpt }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-xs text-muted-foreground", children: new Date(p.date).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
      }) })
    ] }, p.slug)) }) })
  ] });
}
export {
  BlogPage as component
};
