import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SiteLayout, P as PageHeader } from "./SiteLayout-BwCsycNI.mjs";
import { B as Button } from "./button-s3iKVh83.mjs";
import { m as Check } from "../_libs/lucide-react.mjs";
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
const benefits = [{
  icon: "🎯",
  title: "Targeted Reach",
  desc: "Seekers browsing StarSeeker are actively looking to book. They have a life question, a motivation, and they're ready to invest in guidance."
}, {
  icon: "💰",
  title: "Zero Commission",
  desc: "Every reading you book through StarSeeker is yours entirely. We charge no percentage, no finder's fee, and no hidden costs."
}, {
  icon: "🌐",
  title: "Your Own Profile Page",
  desc: "A professional landing page showcasing your bio, tradition, session types, reviews, and social links. Shareable. Searchable. Yours."
}, {
  icon: "📈",
  title: "SEO-Powered Visibility",
  desc: "Our speciality, session, and city pages rank highly on Google. When someone searches 'Vedic astrologer London', StarSeeker appears — and so do our listed practitioners."
}, {
  icon: "📩",
  title: "Direct Enquiries",
  desc: "Clients contact you through your profile's booking form. All communication is direct — no platform middleman, no delays."
}, {
  icon: "✅",
  title: "Trusted Platform",
  desc: "StarSeeker manually reviews every listing. Being listed signals credibility to seekers comparing multiple practitioners."
}];
const tiers = [{
  name: "Free",
  price: "£0",
  period: "forever",
  highlight: false,
  features: ["Basic profile listing", "Name, location, specialities", "Enquiry form", "Listed in directory"]
}, {
  name: "Pro",
  price: "£9.99",
  period: "/month",
  highlight: true,
  features: ["Everything in Free", "Full bio + photos", "Video embed (intro / sample reading)", "Social + website links", "Client reviews enabled"]
}, {
  name: "Elite",
  price: "£19.99",
  period: "/month",
  highlight: false,
  features: ["Everything in Pro", "Priority placement in listings", "Featured on homepage", "Verified badge on profile", "Analytics dashboard"]
}];
function JoinPage() {
  const [submitted, setSubmitted] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { eyebrow: "For Astrologers", title: "List Your Profile on StarSeeker", subtitle: "Reach thousands of seekers actively searching for professional astrologers. Your profile. Your bookings. Zero commission.", primaryCta: {
      label: "Apply to list",
      to: "/join"
    }, secondaryCta: {
      label: "See live profiles",
      to: "/astrologers"
    }, stats: [{
      value: "£0",
      label: "Listing fee"
    }, {
      value: "0%",
      label: "Commission"
    }, {
      value: "2–3 days",
      label: "Review time"
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-2xl mx-auto text-center mb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-semibold tracking-tight", children: "Why join StarSeeker?" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5", children: benefits.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl", children: b.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 text-base font-semibold text-foreground", children: b.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: b.desc })
      ] }, b.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 border-t border-border bg-card/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-semibold tracking-tight", children: "Simple, honest pricing" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Start free. Upgrade only when you need more visibility." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-5", children: tiers.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-2xl border p-7 flex flex-col ${t.highlight ? "border-primary/40 bg-background shadow-lg shadow-primary/5 relative" : "border-border bg-background"}`, children: [
        t.highlight && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-medium tracking-[0.18em] uppercase px-3 py-1 rounded-full bg-primary text-primary-foreground", children: "Most Popular" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-foreground", children: t.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-baseline gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl font-semibold text-foreground", children: t.price }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: t.period })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-2.5 flex-1", children: t.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4 text-primary mt-0.5 shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: f })
        ] }, f)) })
      ] }, t.name)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold tracking-tight text-center", children: "Add your profile" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-center text-muted-foreground text-sm", children: "Takes about 5 minutes. We review and respond within 2–3 business days." }),
      submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 rounded-xl border border-primary/30 bg-primary/5 p-8 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-10 w-10 text-primary mx-auto" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-lg font-semibold", children: "Application received" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Thank you! We've received your submission and will review it within 2–3 business days. You'll hear from us by email once your profile is approved." })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
        e.preventDefault();
        setSubmitted(true);
      }, className: "mt-10 space-y-5", children: [
        [{
          label: "Full professional name",
          type: "text",
          required: true
        }, {
          label: "Email address (not displayed publicly)",
          type: "email",
          required: true
        }, {
          label: "City",
          type: "text",
          required: true
        }, {
          label: "Country",
          type: "text",
          required: true
        }, {
          label: "Primary speciality",
          type: "text",
          required: true
        }, {
          label: "Website URL",
          type: "url",
          required: false
        }].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-sm font-medium text-foreground mb-1.5", children: [
            f.label,
            f.required && " *"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: f.type, required: f.required, className: "w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" })
        ] }, f.label)),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-foreground mb-1.5", children: "Bio / About you *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { required: true, rows: 5, maxLength: 1200, placeholder: "Tell seekers about your astrological tradition, experience, notable work, and what makes your readings unique…", className: "w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", size: "lg", className: "w-full", children: "Submit My Profile →" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-xs text-muted-foreground", children: "By submitting, you agree to our Practitioner Terms." })
      ] })
    ] }) })
  ] });
}
export {
  JoinPage as component
};
