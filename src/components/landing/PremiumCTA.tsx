import { Link } from "@tanstack/react-router";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Star,
  Calendar,
  Moon,
  Sun,
  Globe2,
  Users,
  HelpCircle,
  Mail,
  BookOpen,
  Compass,
  Heart,
  Wand2,
} from "lucide-react";
import type { ReactNode } from "react";

export type CTAVariant =
  | "default"
  | "astrologers"
  | "sessions"
  | "horoscopes"
  | "countries"
  | "specialities"
  | "blog"
  | "faq"
  | "about"
  | "contact"
  | "join";

type Props = { variant?: CTAVariant };

export function PremiumCTA({ variant = "default" }: Props) {
  switch (variant) {
    case "astrologers":
      return <AstrologersCTA />;
    case "sessions":
      return <SessionsCTA />;
    case "horoscopes":
      return <HoroscopesCTA />;
    case "countries":
      return <CountriesCTA />;
    case "specialities":
      return <SpecialitiesCTA />;
    case "blog":
      return <BlogCTA />;
    case "faq":
      return <FaqCTA />;
    case "about":
      return <AboutCTA />;
    case "contact":
      return <ContactCTA />;
    case "join":
      return <JoinCTA />;
    default:
      return <DefaultCTA />;
  }
}

/* ---------- Shared atoms ---------- */

function Eyebrow({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[11px] font-medium tracking-[0.18em] text-primary uppercase">
      {icon}
      {children}
    </span>
  );
}

function PrimaryLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link
      to={to as never}
      className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[0_10px_30px_-10px_color-mix(in_oklab,var(--primary)_60%,transparent)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-12px_color-mix(in_oklab,var(--primary)_70%,transparent)]"
    >
      {children}
    </Link>
  );
}

function GhostLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link
      to={to as never}
      className="inline-flex items-center gap-2 rounded-full border border-border bg-white/80 backdrop-blur px-6 py-3 text-sm font-medium text-foreground transition hover:border-primary/40 hover:text-primary"
    >
      {children}
    </Link>
  );
}

/* ---------- 1. Default / Home — Centered glass halo ---------- */

function DefaultCTA() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, color-mix(in oklab, var(--primary) 16%, transparent), transparent 65%), linear-gradient(180deg, color-mix(in oklab, var(--primary) 5%, var(--background)), var(--background) 80%)",
        }}
      />
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative rounded-3xl border border-border/70 bg-white/80 backdrop-blur-xl p-8 md:p-14 text-center shadow-[0_30px_80px_-30px_color-mix(in_oklab,var(--primary)_45%,transparent)]">
          <div
            aria-hidden
            className="absolute -top-24 left-1/2 -translate-x-1/2 h-56 w-[36rem] rounded-full bg-primary/20 blur-3xl pointer-events-none"
          />
          <Eyebrow icon={<Sparkles className="h-3.5 w-3.5" />}>Begin your reading</Eyebrow>
          <h2 className="mt-5 text-3xl md:text-5xl font-semibold tracking-tight text-foreground" style={{ letterSpacing: "-0.03em", textWrap: "balance" }}>
            Find the astrologer who actually
            <span className="bg-gradient-to-r from-primary via-primary to-foreground/70 bg-clip-text text-transparent"> understands your chart</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
            Verified practitioners. Honest pricing. Private virtual sessions you can book in minutes.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <PrimaryLink to="/astrologers">Browse astrologers <ArrowRight className="h-4 w-4" /></PrimaryLink>
            <GhostLink to="/sessions">Explore session types</GhostLink>
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto">
            {[
              { icon: <ShieldCheck className="h-4 w-4" />, label: "Human-verified" },
              { icon: <Star className="h-4 w-4" />, label: "4.9 avg rating" },
              { icon: <Calendar className="h-4 w-4" />, label: "Book in minutes" },
            ].map((m) => (
              <div key={m.label} className="flex items-center justify-center gap-2 rounded-xl border border-border/70 bg-white/60 px-4 py-2.5 text-xs text-foreground/80">
                <span className="text-primary">{m.icon}</span>
                {m.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 2. Astrologers — Split card with avatar stack ---------- */

function AstrologersCTA() {
  return (
    <section className="relative py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-gradient-to-br from-primary/10 via-white to-white shadow-[0_30px_80px_-40px_color-mix(in_oklab,var(--primary)_50%,transparent)]">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl" aria-hidden />
          <div className="grid md:grid-cols-[1.3fr_1fr]">
            <div className="p-8 md:p-14">
              <Eyebrow icon={<Users className="h-3.5 w-3.5" />}>Verified astrologers</Eyebrow>
              <h2 className="mt-5 text-3xl md:text-4xl font-semibold tracking-tight" style={{ letterSpacing: "-0.025em", textWrap: "balance" }}>
                Real practitioners. Real conversations. Booked in under a minute.
              </h2>
              <p className="mt-4 text-muted-foreground max-w-lg leading-relaxed">
                Filter by speciality, language and country. See full profiles, real reviews and live availability before you commit.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <PrimaryLink to="/astrologers">See all astrologers <ArrowRight className="h-4 w-4" /></PrimaryLink>
                <GhostLink to="/specialities">Browse by speciality</GhostLink>
              </div>
            </div>
            <div className="relative hidden md:flex items-center justify-center p-10 bg-gradient-to-br from-white/40 to-primary/5 border-l border-border/60">
              <div className="flex -space-x-4">
                {["A", "M", "S", "R", "K"].map((c, i) => (
                  <div
                    key={c}
                    className="h-16 w-16 rounded-full border-4 border-white bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center text-lg font-semibold text-primary shadow-md"
                    style={{ transform: `translateY(${i % 2 === 0 ? "-6px" : "6px"})` }}
                  >
                    {c}
                  </div>
                ))}
              </div>
              <div className="absolute bottom-6 right-6 rounded-full bg-white/90 border border-border px-3 py-1.5 text-[11px] font-medium text-foreground shadow">
                +120 active today
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 3. Sessions — Booking pill bar ---------- */

function SessionsCTA() {
  return (
    <section className="relative py-20 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative rounded-[2rem] border border-border bg-foreground text-background p-8 md:p-12 overflow-hidden">
          <div className="absolute inset-0 opacity-20" aria-hidden style={{ background: "radial-gradient(40% 50% at 80% 20%, color-mix(in oklab, var(--primary) 80%, transparent), transparent 70%)" }} />
          <div className="relative grid md:grid-cols-[1fr_auto] gap-8 items-end">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-medium tracking-[0.18em] uppercase">
                <Calendar className="h-3.5 w-3.5" /> Live sessions
              </span>
              <h2 className="mt-5 text-3xl md:text-4xl font-semibold tracking-tight" style={{ letterSpacing: "-0.025em", textWrap: "balance" }}>
                Pick a session length that fits your question — not the other way around.
              </h2>
              <p className="mt-3 text-background/70 max-w-xl">15, 30 or 60 minutes. Video, voice or chat. You decide.</p>
            </div>
            <div className="flex flex-col gap-3 md:items-end">
              <Link to="/astrologers" className="inline-flex items-center gap-2 rounded-full bg-background text-foreground px-6 py-3 text-sm font-medium transition hover:opacity-90">
                Book a session <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/sessions" className="text-xs text-background/70 hover:text-background underline underline-offset-4">
                Compare all session types
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 4. Horoscopes — Zodiac wheel ---------- */

function HoroscopesCTA() {
  const signs = ["♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐", "♑", "♒", "♓"];
  return (
    <section className="relative py-20 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative rounded-[2rem] border border-border/70 bg-gradient-to-b from-white to-primary/5 p-10 md:p-14 text-center">
          <div className="relative mx-auto mb-8 h-44 w-44">
            <div className="absolute inset-0 rounded-full border border-primary/20" />
            <div className="absolute inset-3 rounded-full border border-primary/10" />
            {signs.map((s, i) => {
              const angle = (i / signs.length) * 2 * Math.PI - Math.PI / 2;
              const r = 78;
              const x = 50 + (Math.cos(angle) * r) / 1.76;
              const y = 50 + (Math.sin(angle) * r) / 1.76;
              return (
                <span
                  key={i}
                  className="absolute -translate-x-1/2 -translate-y-1/2 text-primary/80 text-lg"
                  style={{ left: `${x}%`, top: `${y}%` }}
                >
                  {s}
                </span>
              );
            })}
            <div className="absolute inset-0 flex items-center justify-center">
              <Moon className="h-8 w-8 text-primary" />
            </div>
          </div>
          <Eyebrow icon={<Sun className="h-3.5 w-3.5" />}>Daily horoscopes</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight" style={{ letterSpacing: "-0.025em", textWrap: "balance" }}>
            Today's forecast for your sign — refreshed every morning.
          </h2>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <PrimaryLink to="/horoscopes">Read today's horoscope <ArrowRight className="h-4 w-4" /></PrimaryLink>
            <GhostLink to="/astrologers">Get a personal reading</GhostLink>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 5. Countries — Map dots ---------- */

function CountriesCTA() {
  return (
    <section className="relative py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-white p-10 md:p-14">
          <div className="absolute inset-0 opacity-[0.06] pointer-events-none" aria-hidden style={{
            backgroundImage: "radial-gradient(circle, var(--primary) 1px, transparent 1.5px)",
            backgroundSize: "18px 18px",
          }} />
          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            <div>
              <Eyebrow icon={<Globe2 className="h-3.5 w-3.5" />}>Worldwide</Eyebrow>
              <h2 className="mt-5 text-3xl md:text-4xl font-semibold tracking-tight" style={{ letterSpacing: "-0.025em", textWrap: "balance" }}>
                Astrologers across 40+ countries — in your language, in your timezone.
              </h2>
              <p className="mt-4 text-muted-foreground max-w-lg leading-relaxed">
                Whether you want a Vedic master from India or a tropical astrologer in Lisbon, browse by country and culture.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <PrimaryLink to="/countries">Browse by country <ArrowRight className="h-4 w-4" /></PrimaryLink>
                <GhostLink to="/astrologers">All astrologers</GhostLink>
              </div>
            </div>
            <div className="relative h-56">
              {[
                ["IN", 78, 55], ["US", 22, 38], ["UK", 46, 22], ["BR", 30, 70],
                ["JP", 86, 35], ["AU", 84, 78], ["DE", 50, 30], ["AE", 62, 50],
              ].map(([c, x, y]) => (
                <div
                  key={c as string}
                  className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
                  style={{ left: `${x}%`, top: `${y}%` }}
                >
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-primary/40 animate-ping" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-primary" />
                  </span>
                  <span className="mt-1 text-[10px] font-medium text-foreground/70">{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 6. Specialities — Stacked tags ---------- */

function SpecialitiesCTA() {
  const tags = ["Vedic", "Tarot", "Numerology", "Career", "Love & Relationships", "Birth Chart", "Compatibility", "Transits", "Remedies"];
  return (
    <section className="relative py-20 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative rounded-[2rem] border border-border/70 bg-gradient-to-br from-white via-white to-primary/5 p-10 md:p-14 overflow-hidden">
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-primary/15 blur-3xl" aria-hidden />
          <div className="relative grid md:grid-cols-[1.1fr_1fr] gap-10 items-center">
            <div>
              <Eyebrow icon={<Compass className="h-3.5 w-3.5" />}>Specialities</Eyebrow>
              <h2 className="mt-5 text-3xl md:text-4xl font-semibold tracking-tight" style={{ letterSpacing: "-0.025em", textWrap: "balance" }}>
                Match your question to the right tradition.
              </h2>
              <p className="mt-4 text-muted-foreground max-w-md">From Vedic to tarot, from career to compatibility — find an expert who specialises in exactly what you need.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <PrimaryLink to="/specialities">Explore all specialities <ArrowRight className="h-4 w-4" /></PrimaryLink>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 justify-end">
              {tags.map((t, i) => (
                <span
                  key={t}
                  className="inline-flex items-center rounded-full border border-primary/20 bg-white px-4 py-2 text-sm text-foreground shadow-sm"
                  style={{ transform: `rotate(${(i % 2 === 0 ? -1 : 1) * 1.5}deg)` }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 7. Blog — Newsletter card ---------- */

function BlogCTA() {
  return (
    <section className="relative py-20 md:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="relative rounded-[2rem] border border-border/70 bg-white p-10 md:p-14 text-center shadow-[0_20px_60px_-30px_color-mix(in_oklab,var(--primary)_40%,transparent)]">
          <div className="mx-auto mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <BookOpen className="h-5 w-5" />
          </div>
          <Eyebrow icon={<Mail className="h-3.5 w-3.5" />}>Weekly digest</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight" style={{ letterSpacing: "-0.025em", textWrap: "balance" }}>
            Cosmic insights, in your inbox every Sunday.
          </h2>
          <p className="mt-3 text-muted-foreground">Transits, full moons, weekly forecasts and reading guides. No spam, ever.</p>
          <form className="mt-7 flex flex-col sm:flex-row gap-2 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              required
              placeholder="you@email.com"
              className="flex-1 rounded-full border border-border bg-white px-5 py-3 text-sm outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/15"
            />
            <button type="submit" className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ---------- 8. FAQ — Still have questions ---------- */

function FaqCTA() {
  return (
    <section className="relative py-20 md:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="relative rounded-[2rem] border border-border/70 bg-gradient-to-br from-primary/5 to-white p-10 md:p-14 grid md:grid-cols-[auto_1fr_auto] gap-6 items-center">
          <div className="hidden md:flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
            <HelpCircle className="h-7 w-7" />
          </div>
          <div>
            <Eyebrow icon={<HelpCircle className="h-3.5 w-3.5" />}>Still curious?</Eyebrow>
            <h2 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight" style={{ letterSpacing: "-0.025em" }}>
              Can't find your answer? Our team replies within a few hours.
            </h2>
          </div>
          <div className="flex flex-col gap-2 md:items-end">
            <PrimaryLink to="/contact">Contact support <ArrowRight className="h-4 w-4" /></PrimaryLink>
            <Link to="/astrologers" className="text-xs text-muted-foreground hover:text-primary">or talk to an astrologer →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 9. About — Mission card ---------- */

function AboutCTA() {
  return (
    <section className="relative py-20 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-gradient-to-r from-foreground to-foreground/90 text-background p-10 md:p-14">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-primary/40 blur-3xl" aria-hidden />
          <div className="relative max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em]">
              <Heart className="h-3.5 w-3.5" /> Our mission
            </span>
            <h2 className="mt-5 text-3xl md:text-4xl font-semibold tracking-tight" style={{ letterSpacing: "-0.025em", textWrap: "balance" }}>
              Honest astrology. Real practitioners. No gimmicks.
            </h2>
            <p className="mt-4 text-background/70 leading-relaxed">
              We're rebuilding trust in astrology — one verified practitioner, one private session, one fair price at a time.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/astrologers" className="inline-flex items-center gap-2 rounded-full bg-background text-foreground px-6 py-3 text-sm font-medium transition hover:opacity-90">
                Meet our astrologers <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/join" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium transition hover:bg-white/10">
                Join the platform
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 10. Contact — Quick channel grid ---------- */

function ContactCTA() {
  const channels = [
    { icon: <Mail className="h-5 w-5" />, title: "Email", desc: "hello@starseeker.com" },
    { icon: <Calendar className="h-5 w-5" />, title: "Book a call", desc: "15 min intro" },
    { icon: <Users className="h-5 w-5" />, title: "Talk to a guide", desc: "Free 5-min match" },
  ];
  return (
    <section className="relative py-20 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center mb-8">
          <Eyebrow icon={<Sparkles className="h-3.5 w-3.5" />}>Reach out</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight" style={{ letterSpacing: "-0.025em" }}>
            Three ways to talk to us.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {channels.map((c) => (
            <div key={c.title} className="group rounded-2xl border border-border/70 bg-white p-6 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_50px_-25px_color-mix(in_oklab,var(--primary)_45%,transparent)]">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">{c.icon}</div>
              <div className="mt-4 text-lg font-semibold">{c.title}</div>
              <div className="text-sm text-muted-foreground">{c.desc}</div>
              <div className="mt-4 text-sm font-medium text-primary inline-flex items-center gap-1 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition">
                Go <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 11. Join — Application banner ---------- */

function JoinCTA() {
  return (
    <section className="relative py-20 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-[2rem] border-2 border-dashed border-primary/40 bg-primary/[0.04] p-10 md:p-14 text-center">
          <div className="mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground rotate-3">
            <Wand2 className="h-6 w-6" />
          </div>
          <Eyebrow icon={<Sparkles className="h-3.5 w-3.5" />}>For practitioners</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight" style={{ letterSpacing: "-0.025em", textWrap: "balance" }}>
            Built for astrologers who care about their craft.
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Keep more of what you earn, own your clients, and only get matched with seekers who fit your practice.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <PrimaryLink to="/join">Apply to join <ArrowRight className="h-4 w-4" /></PrimaryLink>
            <GhostLink to="/about">Read our story</GhostLink>
          </div>
          <div className="mt-6 text-xs text-muted-foreground">Average review: 48 hours · No setup fees</div>
        </div>
      </div>
    </section>
  );
}
