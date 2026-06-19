import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteLayout } from "./SiteLayout-BwCsycNI.mjs";
import { B as Button, c as cn } from "./button-s3iKVh83.mjs";
import { R as Root2, I as Item, H as Header, T as Trigger2, C as Content2 } from "../_libs/radix-ui__react-accordion.mjs";
import { i as Route$1 } from "./router-Dmdsn4PS.mjs";
import { o as ArrowLeft, C as CircleCheck, a3 as Award, a4 as Shield, M as MapPin, G as Globe, j as Clock, H as Heart, D as Share2, c as Calendar, v as MessageCircle, Z as Quote, B as BookOpen, S as Sparkles, a as Star, n as ChevronDown } from "../_libs/lucide-react.mjs";
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
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-collapsible.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/radix-ui__react-direction.mjs";
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
const Accordion = Root2;
const AccordionItem = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Item,
  {
    ref,
    className: cn("border-b", className),
    ...props
  }
));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Header, { className: "flex", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
  Trigger2,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
    ]
  }
) }));
AccordionTrigger.displayName = Trigger2.displayName;
const AccordionContent = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Content2,
  {
    ref,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = Content2.displayName;
const reviews = [{
  name: "Priya K.",
  date: "2 weeks ago",
  rating: 5,
  text: "Truly insightful and warm. Felt heard for the first time in years. The clarity around my Saturn return was exactly what I needed."
}, {
  name: "James R.",
  date: "1 month ago",
  rating: 5,
  text: "Specific, accurate, and kind. Couldn't recommend more highly — already booked a follow-up."
}, {
  name: "Anna L.",
  date: "1 month ago",
  rating: 5,
  text: "Very thoughtful reading. Gave me a lot to reflect on for the year ahead and the timing for a big decision."
}, {
  name: "Mateo F.",
  date: "2 months ago",
  rating: 5,
  text: "A rare combination of classical rigor and human warmth. Worth every minute."
}];
const faqItems = [{
  q: "What information do you need before the session?",
  a: "Your exact date, time, and place of birth. The more precise the time, the more accurate the chart and the timing work."
}, {
  q: "How long is a typical session?",
  a: "Most sessions run between 60 and 90 minutes, depending on the format you choose. We'll confirm the length at booking."
}, {
  q: "Is the session recorded?",
  a: "Yes — a recording is included by default so you can revisit the insights at your own pace."
}, {
  q: "How do payments work?",
  a: "You pay the astrologer directly. StarSeeker never adds booking fees, markups, or commissions on your reading."
}];
function AstrologerProfile() {
  const {
    astrologer: a
  } = Route$1.useLoaderData();
  const initials = a.name.split(" ").map((n) => n[0]).slice(0, 2).join("");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden border-b border-border bg-gradient-to-b from-primary/5 via-background to-background", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 opacity-30", style: {
        backgroundImage: "radial-gradient(ellipse at top, rgba(99, 102, 241, 0.15), transparent 60%), radial-gradient(ellipse at bottom right, rgba(236, 72, 153, 0.08), transparent 50%)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-20 left-10 h-80 w-80 rounded-full bg-primary/5 blur-3xl -z-10 animate-pulse-live" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-10 right-1/4 h-60 w-60 rounded-full bg-accent/5 blur-3xl -z-10" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6 pt-28 pb-12 relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/astrologers", className: "inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-primary mb-8 transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-3.5 w-3.5" }),
          " Back to all astrologers"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 lg:gap-12 items-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-fade-up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border/80 bg-card/60 backdrop-blur-xl p-6 md:p-10 shadow-xl relative overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 relative z-10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-1 rounded-2xl bg-gradient-to-tr from-primary via-accent to-pink-500 opacity-60 blur-md group-hover:opacity-100 transition duration-500 animate-pulse-live" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-28 w-28 md:h-32 md:w-32 rounded-2xl bg-card border border-border flex flex-col items-center justify-center text-3xl md:text-4xl font-extrabold text-foreground ring-4 ring-background shadow-xl", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-primary via-indigo-600 to-accent bg-clip-text text-transparent", children: initials }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-1.5 text-[8px] tracking-[0.2em] font-bold text-muted-foreground/80 uppercase select-none", children: "Astrologer" })
                ] }),
                a.verified && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-card border border-border shadow-lg flex items-center justify-center", title: "Verified Astrologer", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4.5 w-4.5 text-primary fill-primary/10" }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0 mt-2 sm:mt-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-3", children: [
                  a.featured && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "h-3 w-3" }),
                    " Featured Practitioner"
                  ] }),
                  a.verified && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-3 w-3" }),
                    " Verified Profile"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl md:text-5xl font-bold tracking-tight text-foreground bg-gradient-to-r from-foreground via-foreground/90 to-primary/85 bg-clip-text text-transparent", children: a.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-3 text-base md:text-lg font-medium leading-relaxed", children: a.tagline }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center sm:justify-start gap-x-5 gap-y-2.5 text-xs md:text-sm text-muted-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 font-medium", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4 text-primary/70" }),
                    " ",
                    a.location
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 font-medium", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "h-4 w-4 text-primary/70" }),
                    " ",
                    a.languages.join(", ")
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 font-medium", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4 w-4 text-primary/70" }),
                    " ",
                    a.experience,
                    " Years Experience"
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 grid grid-cols-3 gap-4 pt-8 border-t border-border/60", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Experience", value: `${a.experience}+ Yrs` }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Rating", value: `${a.rating} ★`, highlight: true }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Verified Reviews", value: `${a.reviews}+` })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex items-center justify-center sm:justify-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", className: "rounded-xl px-4 py-2 border-border/80 hover:bg-accent/40 transition-all font-medium text-xs", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-3.5 w-3.5 mr-1.5 text-rose-500 fill-rose-500/10" }),
                " Save Profile"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", className: "rounded-xl px-4 py-2 border-border/80 hover:bg-accent/40 transition-all font-medium text-xs", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "h-3.5 w-3.5 mr-1.5 text-primary" }),
                " Share"
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("aside", { className: "lg:sticky lg:top-24 self-start animate-fade-up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-card/75 backdrop-blur-xl p-6 md:p-8 shadow-2xl relative overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-primary via-indigo-500 to-accent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -left-20 -bottom-20 w-48 h-48 rounded-full bg-accent/5 blur-3xl pointer-events-none" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline justify-between mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold uppercase tracking-wider text-muted-foreground", children: "Session fee starting at" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-3xl font-extrabold tracking-tight text-foreground", children: a.price })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" }),
                " Available"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "w-full h-12 rounded-xl bg-gradient-to-r from-primary to-accent hover:opacity-95 text-primary-foreground font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 transform hover:-translate-y-0.5 transition-all duration-300", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-4.5 w-4.5 mr-2" }),
                " Book a Session"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", className: "w-full h-12 rounded-xl border-border/80 hover:bg-accent/40 font-semibold transition-all", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4.5 w-4.5 mr-2 text-primary" }),
                " Message ",
                a.name.split(" ")[0]
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3.5 text-[10px] text-muted-foreground text-center", children: [
              "No middleman booking fees. You pay ",
              a.name.split(" ")[0],
              " directly."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 pt-6 border-t border-border/60 space-y-3 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarRow, { label: "Country", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4 text-muted-foreground" }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/countries/$slug", params: {
                slug: a.countrySlug
              }, className: "text-foreground font-semibold hover:text-primary transition-colors", children: a.country }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarRow, { label: "Practice", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4 w-4 text-muted-foreground" }), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
                a.experience,
                " Years"
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarRow, { label: "Languages", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "h-4 w-4 text-muted-foreground" }), children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-right max-w-[180px] truncate block", title: a.languages.join(", "), children: a.languages.join(", ") }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarRow, { label: "Response", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4 text-muted-foreground" }), children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "Within 24 Hours" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 pt-6 border-t border-border/60 flex items-start gap-3 text-[11px] text-muted-foreground leading-relaxed", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-4.5 w-4.5 text-primary shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Identity, professional credentials, and reviews are 100% verified by StarSeeker." })
            ] })
          ] }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-6xl px-6 py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 lg:gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Panel, { title: "About Astrologer", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-5 w-5 text-primary" }), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative pl-6 md:pl-8 py-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "absolute top-0 left-0 w-5 h-5 text-primary/30" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm md:text-base leading-relaxed font-normal antialiased whitespace-pre-line", children: a.longBio })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Panel, { title: "Astrological Specialities", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-5 w-5 text-primary" }), children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: a.specialities.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold px-4 py-2.5 rounded-full bg-primary/5 text-primary border border-primary/15 hover:bg-primary/10 hover:border-primary/30 transition-all cursor-default", children: s }, s)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Panel, { title: "Session Types Offered", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-5 w-5 text-primary" }), children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-4", children: a.sessions.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "group flex flex-col justify-between rounded-xl border border-border bg-card/30 hover:bg-card hover:border-primary/35 hover:shadow-md p-5 transition-all duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-8 w-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-semibold select-none group-hover:scale-110 transition-transform", children: "✦" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded bg-muted text-muted-foreground", children: "Private Consultation" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-sm md:text-base text-foreground group-hover:text-primary transition-colors", children: s }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-2 leading-relaxed", children: "One-on-one session utilizing specialized charting methods to evaluate current life cycles and potentials." })
        ] }) }, s)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Panel, { title: `Reviews · ${a.rating} ★ from ${a.reviews}+ verified readings`, icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-5 w-5 text-primary fill-primary/5" }), children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-4", children: reviews.map((r, i) => {
          const rInitials = r.name.split(" ").map((n) => n[0]).join("");
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border/80 bg-card/45 p-6 relative overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "absolute -bottom-2 -right-2 h-16 w-16 text-primary/5 pointer-events-none select-none" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 w-9 rounded-full bg-primary/10 text-primary border border-primary/20 flex items-center justify-center text-xs font-bold select-none", children: rInitials }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs md:text-sm font-bold text-foreground leading-tight", children: r.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground mt-0.5", children: r.date })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs md:text-sm text-muted-foreground leading-relaxed italic", children: [
                '"',
                r.text,
                '"'
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5 text-amber-500 mt-4 pt-4 border-t border-border/40 justify-end", children: Array.from({
              length: r.rating
            }).map((_, j) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-3 w-3 fill-current" }, j)) })
          ] }, i);
        }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Panel, { title: "Frequently Asked Questions", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-5 w-5 text-primary" }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Accordion, { type: "single", collapsible: true, className: "w-full", children: faqItems.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionItem, { value: `item-${i}`, className: "border-border py-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { className: "text-sm md:text-base text-left hover:no-underline font-medium text-foreground hover:text-primary transition-colors py-3.5", children: f.q }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContent, { className: "text-xs md:text-sm text-muted-foreground leading-relaxed py-2", children: f.a })
        ] }, i)) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:block" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:hidden fixed bottom-0 inset-x-0 z-40 bg-card/95 backdrop-blur-md border-t border-border/80 p-3.5 flex items-center justify-between gap-4 shadow-xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] font-bold uppercase tracking-wider text-muted-foreground leading-none", children: "Starting from" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-extrabold text-foreground mt-1 leading-none", children: a.price })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "rounded-xl h-11 px-6 bg-gradient-to-r from-primary to-accent hover:opacity-95 text-sm font-bold shadow-md shadow-primary/10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-4 w-4 mr-1.5" }),
        " Book Session"
      ] })
    ] })
  ] });
}
function StatCard({
  label,
  value,
  highlight
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-background/50 border border-border/40 p-3.5 text-center flex flex-col justify-center items-center shadow-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-base md:text-lg font-extrabold tracking-tight ${highlight ? "text-primary" : "text-foreground"}`, children: value }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] font-bold uppercase tracking-wider text-muted-foreground mt-1 select-none", children: label })
  ] });
}
function SidebarRow({
  label,
  icon,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3 py-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      icon,
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-xs md:text-sm font-medium", children: label })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground text-xs md:text-sm", children })
  ] });
}
function Panel({
  title,
  icon,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-3xl border border-border/80 bg-card/45 backdrop-blur-sm p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 mb-6 border-b border-border/50 pb-4", children: [
      icon,
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base md:text-lg font-bold tracking-tight text-foreground", children: title })
    ] }),
    children
  ] });
}
export {
  AstrologerProfile as component
};
