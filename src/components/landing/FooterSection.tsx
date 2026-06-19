import { Link } from "@tanstack/react-router";
import { Instagram, Youtube, Facebook, Twitter } from "lucide-react";

export function FooterSection() {
  const specialities = [
    { label: "Western Astrologers", slug: "hellenistic-astrology" },
    { label: "Vedic Astrologers", slug: "vedic-astrology" },
    { label: "Evolutionary Astrologers", slug: "evolutionary-astrology" },
    { label: "Psychological Astrologers", slug: "psychological-astrology" },
    { label: "Synastry Astrologers", slug: "love-relationships" },
    { label: "Career Astrologers", slug: "career-life-path" },
    { label: "Horary Astrologers", slug: "horary-astrology" },
    { label: "Karmic Astrologers", slug: "karmic-astrology" },
  ];

  const sessions = [
    { label: "Birth Chart Readings", slug: "birth-chart-reading" },
    { label: "Compatibility Readings", slug: "compatibility-synastry" },
    { label: "Annual Forecasts", slug: "annual-forecast" },
    { label: "Lunar Readings", slug: "lunar-return" },
    { label: "Career Readings", slug: "career-life-path" },
    { label: "Predictive Astrology", slug: "predictive-astrology" },
    { label: "Solar Return", slug: "solar-return-reading" },
    { label: "Online Sessions", slug: "online-virtual-session" },
  ];

  const signs = [
    "aries", "taurus", "gemini", "cancer", "leo", "virgo",
    "libra", "scorpio", "sagittarius", "capricorn", "aquarius", "pisces",
  ];

  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 text-foreground">
              <span>✦</span>
              <span className="text-sm font-semibold tracking-[0.18em]">STARSEEKER</span>
            </div>
            <p className="mt-2 text-xs text-muted-foreground/80 italic">Your Cosmic Guide to the Stars</p>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
              We help seekers find and book professional astrologers worldwide. Every listing is manually reviewed. No booking fees. Ever.
            </p>
            <div className="mt-5 flex items-center gap-3 text-muted-foreground">
              <a href="#" aria-label="Instagram" className="hover:text-primary transition-colors"><Instagram className="h-4 w-4" /></a>
              <a href="#" aria-label="YouTube" className="hover:text-primary transition-colors"><Youtube className="h-4 w-4" /></a>
              <a href="#" aria-label="Facebook" className="hover:text-primary transition-colors"><Facebook className="h-4 w-4" /></a>
              <a href="#" aria-label="Twitter / X" className="hover:text-primary transition-colors"><Twitter className="h-4 w-4" /></a>
            </div>
          </div>

          {/* Specialities */}
          <div>
            <h4 className="text-sm font-semibold text-foreground">Specialities</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {specialities.map((s) => (
                <li key={s.label}>
                  <Link to="/specialities/$slug" params={{ slug: s.slug }} className="hover:text-foreground transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/specialities" className="text-primary hover:underline">View All →</Link>
              </li>
            </ul>
          </div>

          {/* Sessions */}
          <div>
            <h4 className="text-sm font-semibold text-foreground">Sessions</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {sessions.map((s) => (
                <li key={s.label}>
                  <Link to="/sessions/$slug" params={{ slug: s.slug }} className="hover:text-foreground transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/sessions" className="text-primary hover:underline">View All →</Link>
              </li>
            </ul>
          </div>

          {/* Horoscopes */}
          <div>
            <h4 className="text-sm font-semibold text-foreground">Horoscopes</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/horoscopes" className="hover:text-foreground transition-colors font-medium">
                  Daily Horoscopes
                </Link>
              </li>
              {signs.map((s) => (
                <li key={s}>
                  <Link to="/horoscopes/$sign" params={{ sign: s }} className="hover:text-foreground transition-colors capitalize">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-foreground">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground transition-colors">About Us</Link></li>
              <li><Link to="/join" className="hover:text-foreground transition-colors">List Your Profile</Link></li>
              <li><Link to="/faq" className="hover:text-foreground transition-colors">FAQ</Link></li>
              <li><Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground/80">
          <p>© {new Date().getFullYear()} StarSeeker. This website lists astrologers only and does not provide or guarantee their services.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Use</a>
            <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
