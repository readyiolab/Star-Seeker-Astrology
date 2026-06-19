import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteLayout, P as PageHeader } from "./SiteLayout-BwCsycNI.mjs";
import { B as Button } from "./button-s3iKVh83.mjs";
import { e as Mail, v as MessageCircle, m as Check } from "../_libs/lucide-react.mjs";
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
import "./router-Dmdsn4PS.mjs";
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
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
function ContactPage() {
  const [sent, setSent] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { eyebrow: "Contact", title: "Get in Touch", subtitle: "Have a question about a listing? Need help finding the right astrologer? Or are you a practitioner with a query about your profile? We're here to help.", primaryCta: {
      label: "Visit our FAQ",
      to: "/faq"
    }, secondaryCta: {
      label: "For astrologers",
      to: "/join"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-6 grid grid-cols-1 md:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-5 w-5 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 text-sm font-semibold", children: "Email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "hello@starseeker.com" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-5 w-5 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 text-sm font-semibold", children: "For astrologers" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "practitioners@starseeker.com" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold", children: "Quick links" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-3 space-y-1.5 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/astrologers", className: "hover:text-foreground", children: "Browse all astrologers" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/horoscopes", className: "hover:text-foreground", children: "Daily horoscopes" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/specialities", className: "hover:text-foreground", children: "Browse by speciality" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/faq", className: "hover:text-foreground", children: "FAQ" }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-2 rounded-xl border border-border bg-card p-6", children: sent ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-10 w-10 text-primary mx-auto" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-lg font-semibold", children: "Message received" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Thank you — we'll be in touch within one business day." })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
        e.preventDefault();
        setSent(true);
      }, className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-semibold", children: "Send us a message" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium mb-1.5", children: "Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, className: "w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium mb-1.5", children: "Email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "email", className: "w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium mb-1.5", children: "Subject" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, className: "w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium mb-1.5", children: "Message" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { required: true, rows: 6, className: "w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", className: "w-full", children: "Send Message" })
      ] }) })
    ] }) })
  ] });
}
export {
  ContactPage as component
};
