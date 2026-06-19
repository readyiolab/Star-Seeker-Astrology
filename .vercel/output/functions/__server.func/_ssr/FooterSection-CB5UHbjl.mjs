import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { B as Button } from "./button-s3iKVh83.mjs";
import { u as useAuth } from "./router-Dmdsn4PS.mjs";
import { i as Menu, X, S as Sparkles, I as Instagram, Y as Youtube, F as Facebook, T as Twitter } from "../_libs/lucide-react.mjs";
const navLinks = [
  { to: "/astrologers", label: "Astrologers" },
  { to: "/horoscopes", label: "Horoscopes" },
  { to: "/specialities", label: "Specialities" },
  { to: "/sessions", label: "Sessions" },
  { to: "/countries", label: "Countries" },
  { to: "/blog", label: "Blog" },
  { to: "/about", label: "About" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" }
];
function Navbar() {
  const { user } = useAuth();
  const navRef = reactExports.useRef(null);
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        if (window.scrollY > 20) navRef.current.classList.add("scrolled");
        else navRef.current.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  reactExports.useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  const linkClass = "transition-colors hover:text-foreground";
  const activeClass = "text-foreground font-medium";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "nav",
      {
        className: "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent bg-white/0 [&.scrolled]:border-border [&.scrolled]:bg-white/90 [&.scrolled]:backdrop-blur-md [&.scrolled]:shadow-[0_1px_3px_0_rgb(0_0_0/0.04)]",
        ref: navRef,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex h-14 max-w-6xl items-center justify-between px-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2 text-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base", children: "✦" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold tracking-[0.18em]", children: "STARSEEKER" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden items-center gap-7 text-sm text-muted-foreground lg:flex", children: navLinks.slice(0, 6).map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: l.to, className: linkClass, activeProps: { className: activeClass }, children: l.label }, l.to)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            user ? /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", asChild: true, className: "hidden sm:inline-flex", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/join", children: "List Your Profile" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", asChild: true, className: "hidden md:inline-flex", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", children: "Log in" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", asChild: true, className: "hidden sm:inline-flex", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/join", children: "List Your Profile" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "aria-label": "Open menu",
                onClick: () => setOpen(true),
                className: "lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-white/70 text-foreground backdrop-blur hover:bg-white transition",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" })
              }
            )
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: `fixed inset-0 z-[60] lg:hidden transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`,
        "aria-hidden": !open,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 bg-slate-950/40 backdrop-blur-sm",
              onClick: () => setOpen(false)
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "aside",
            {
              className: `absolute top-0 right-0 h-full w-full sm:max-w-sm bg-gradient-to-b from-white via-white to-slate-50 shadow-2xl flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${open ? "translate-x-0" : "translate-x-full"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-6 h-16 border-b border-border/60", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", onClick: () => setOpen(false), className: "flex items-center gap-2 text-foreground", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base", children: "✦" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold tracking-[0.18em]", children: "STARSEEKER" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      "aria-label": "Close menu",
                      onClick: () => setOpen(false),
                      className: "inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/60 hover:bg-muted transition",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex-1 overflow-y-auto px-6 py-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3", children: "Explore" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1", children: navLinks.map((l, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "li",
                    {
                      style: {
                        animation: open ? `fade-up 0.45s cubic-bezier(0.2,0.8,0.2,1) both` : "none",
                        animationDelay: open ? `${60 + i * 35}ms` : "0ms"
                      },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        Link,
                        {
                          to: l.to,
                          onClick: () => setOpen(false),
                          className: "flex items-center justify-between rounded-xl px-3 py-3 text-base text-foreground hover:bg-primary/5 transition",
                          activeProps: { className: "flex items-center justify-between rounded-xl px-3 py-3 text-base font-medium bg-primary/5 text-primary" },
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: l.label }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "→" })
                          ]
                        }
                      )
                    },
                    l.to
                  )) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-6 border-t border-border/60 space-y-3 bg-gradient-to-b from-transparent to-primary/5", children: [
                  !user && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", className: "w-full", asChild: true, onClick: () => setOpen(false), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", children: "Log in" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "w-full", asChild: true, onClick: () => setOpen(false), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/join", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4 mr-2" }),
                    " List Your Profile"
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-[11px] text-muted-foreground", children: "No booking fees · Verified astrologers" })
                ] })
              ]
            }
          )
        ]
      }
    )
  ] });
}
function FooterSection() {
  const specialities = [
    { label: "Western Astrologers", slug: "hellenistic-astrology" },
    { label: "Vedic Astrologers", slug: "vedic-astrology" },
    { label: "Evolutionary Astrologers", slug: "evolutionary-astrology" },
    { label: "Psychological Astrologers", slug: "psychological-astrology" },
    { label: "Synastry Astrologers", slug: "love-relationships" },
    { label: "Career Astrologers", slug: "career-life-path" },
    { label: "Horary Astrologers", slug: "horary-astrology" },
    { label: "Karmic Astrologers", slug: "karmic-astrology" }
  ];
  const sessions = [
    { label: "Birth Chart Readings", slug: "birth-chart-reading" },
    { label: "Compatibility Readings", slug: "compatibility-synastry" },
    { label: "Annual Forecasts", slug: "annual-forecast" },
    { label: "Lunar Readings", slug: "lunar-return" },
    { label: "Career Readings", slug: "career-life-path" },
    { label: "Predictive Astrology", slug: "predictive-astrology" },
    { label: "Solar Return", slug: "solar-return-reading" },
    { label: "Online Sessions", slug: "online-virtual-session" }
  ];
  const signs = [
    "aries",
    "taurus",
    "gemini",
    "cancer",
    "leo",
    "virgo",
    "libra",
    "scorpio",
    "sagittarius",
    "capricorn",
    "aquarius",
    "pisces"
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-border bg-card/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6 py-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-5 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2 md:col-span-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "✦" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold tracking-[0.18em]", children: "STARSEEKER" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-muted-foreground/80 italic", children: "Your Cosmic Guide to the Stars" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs", children: "We help seekers find and book professional astrologers worldwide. Every listing is manually reviewed. No booking fees. Ever." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex items-center gap-3 text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", "aria-label": "Instagram", className: "hover:text-primary transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", "aria-label": "YouTube", className: "hover:text-primary transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Youtube, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", "aria-label": "Facebook", className: "hover:text-primary transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Facebook, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", "aria-label": "Twitter / X", className: "hover:text-primary transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Twitter, { className: "h-4 w-4" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold text-foreground", children: "Specialities" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-3 space-y-2 text-sm text-muted-foreground", children: [
          specialities.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/specialities/$slug", params: { slug: s.slug }, className: "hover:text-foreground transition-colors", children: s.label }) }, s.label)),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/specialities", className: "text-primary hover:underline", children: "View All →" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold text-foreground", children: "Sessions" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-3 space-y-2 text-sm text-muted-foreground", children: [
          sessions.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/sessions/$slug", params: { slug: s.slug }, className: "hover:text-foreground transition-colors", children: s.label }) }, s.label)),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/sessions", className: "text-primary hover:underline", children: "View All →" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold text-foreground", children: "Horoscopes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-3 space-y-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/horoscopes", className: "hover:text-foreground transition-colors font-medium", children: "Daily Horoscopes" }) }),
          signs.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/horoscopes/$sign", params: { sign: s }, className: "hover:text-foreground transition-colors capitalize", children: s }) }, s))
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold text-foreground", children: "Company" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-3 space-y-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", className: "hover:text-foreground transition-colors", children: "About Us" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/join", className: "hover:text-foreground transition-colors", children: "List Your Profile" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/faq", className: "hover:text-foreground transition-colors", children: "FAQ" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/blog", className: "hover:text-foreground transition-colors", children: "Blog" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "hover:text-foreground transition-colors", children: "Contact Us" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground/80", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " StarSeeker. This website lists astrologers only and does not provide or guarantee their services."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-foreground transition-colors", children: "Privacy Policy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-foreground transition-colors", children: "Terms of Use" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "hover:text-foreground transition-colors", children: "Contact" })
      ] })
    ] })
  ] }) });
}
export {
  FooterSection as F,
  Navbar as N
};
