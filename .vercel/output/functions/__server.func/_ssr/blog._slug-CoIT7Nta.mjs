import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteLayout } from "./SiteLayout-BwCsycNI.mjs";
import { h as Route$2 } from "./router-Dmdsn4PS.mjs";
import { o as ArrowLeft } from "../_libs/lucide-react.mjs";
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
function BlogPostPage() {
  const {
    post
  } = Route$2.useLoaderData();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "mx-auto max-w-2xl px-6 py-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/blog", className: "inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-3.5 w-3.5" }),
      " All articles"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs uppercase tracking-wider text-primary font-medium", children: [
      post.category,
      " · ",
      post.readTime,
      " read"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 text-3xl md:text-4xl font-semibold tracking-tight", style: {
      letterSpacing: "-0.02em",
      textWrap: "balance"
    }, children: post.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: new Date(post.date).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric"
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 prose prose-lg max-w-none text-foreground space-y-5", children: post.body.split("\n\n").map((para, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base leading-relaxed text-muted-foreground", children: para }, i)) })
  ] }) });
}
export {
  BlogPostPage as component
};
