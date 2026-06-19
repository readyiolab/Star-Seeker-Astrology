import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useEffect, useRef, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";

const navLinks = [
  { to: "/astrologers", label: "Astrologers" },
  { to: "/horoscopes", label: "Horoscopes" },
  { to: "/specialities", label: "Specialities" },
  { to: "/sessions", label: "Sessions" },
  { to: "/countries", label: "Countries" },
  { to: "/blog", label: "Blog" },
  { to: "/about", label: "About" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const { user } = useAuth();
  const navRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
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

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const linkClass = "transition-colors hover:text-foreground";
  const activeClass = "text-foreground font-medium";

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent bg-white/0 [&.scrolled]:border-border [&.scrolled]:bg-white/90 [&.scrolled]:backdrop-blur-md [&.scrolled]:shadow-[0_1px_3px_0_rgb(0_0_0/0.04)]"
        ref={navRef}
      >
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
          <Link to="/" className="flex items-center gap-2 text-foreground">
            <span className="text-base">✦</span>
            <span className="text-sm font-semibold tracking-[0.18em]">STARSEEKER</span>
          </Link>

          <div className="hidden items-center gap-7 text-sm text-muted-foreground lg:flex">
            {navLinks.slice(0, 6).map((l) => (
              <Link key={l.to} to={l.to} className={linkClass} activeProps={{ className: activeClass }}>
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {user ? (
              <Button size="sm" asChild className="hidden sm:inline-flex">
                <Link to="/join">List Your Profile</Link>
              </Button>
            ) : (
              <>
                <Button variant="ghost" size="sm" asChild className="hidden md:inline-flex">
                  <Link to="/login">Log in</Link>
                </Button>
                <Button size="sm" asChild className="hidden sm:inline-flex">
                  <Link to="/join">List Your Profile</Link>
                </Button>
              </>
            )}
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-white/70 text-foreground backdrop-blur hover:bg-white transition"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile slide-in menu */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div
          className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute top-0 right-0 h-full w-full sm:max-w-sm bg-gradient-to-b from-white via-white to-slate-50 shadow-2xl flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-6 h-16 border-b border-border/60">
            <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-2 text-foreground">
              <span className="text-base">✦</span>
              <span className="text-sm font-semibold tracking-[0.18em]">STARSEEKER</span>
            </Link>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/60 hover:bg-muted transition"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-6 py-6">
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3">Explore</p>
            <ul className="space-y-1">
              {navLinks.map((l, i) => (
                <li
                  key={l.to}
                  style={{
                    animation: open ? `fade-up 0.45s cubic-bezier(0.2,0.8,0.2,1) both` : "none",
                    animationDelay: open ? `${60 + i * 35}ms` : "0ms",
                  }}
                >
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-xl px-3 py-3 text-base text-foreground hover:bg-primary/5 transition"
                    activeProps={{ className: "flex items-center justify-between rounded-xl px-3 py-3 text-base font-medium bg-primary/5 text-primary" }}
                  >
                    <span>{l.label}</span>
                    <span className="text-muted-foreground">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="px-6 py-6 border-t border-border/60 space-y-3 bg-gradient-to-b from-transparent to-primary/5">
            {!user && (
              <Button variant="outline" className="w-full" asChild onClick={() => setOpen(false)}>
                <Link to="/login">Log in</Link>
              </Button>
            )}
            <Button className="w-full" asChild onClick={() => setOpen(false)}>
              <Link to="/join">
                <Sparkles className="h-4 w-4 mr-2" /> List Your Profile
              </Link>
            </Button>
            <p className="text-center text-[11px] text-muted-foreground">No booking fees · Verified astrologers</p>
          </div>
        </aside>
      </div>
    </>
  );
}
