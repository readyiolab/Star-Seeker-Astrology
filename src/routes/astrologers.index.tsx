import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { astrologers, specialities, sessions, countries } from "@/lib/starseeker-data";
import {
  Star,
  MapPin,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Search,
  Filter,
  Calendar,
  Clock,
  Globe2,
  ArrowRight,
  Quote,
  ChevronDown,
} from "lucide-react";
import { useState, useMemo } from "react";

export const Route = createFileRoute("/astrologers/")({
  head: () => ({
    meta: [
      { title: "Browse Professional Astrologers — StarSeeker" },
      { name: "description", content: "Browse 200+ verified astrologers. Filter by tradition, session, and country. Book private readings with the world's most trusted practitioners." },
      { property: "og:title", content: "Browse Professional Astrologers — StarSeeker" },
      { property: "og:description", content: "Premium directory of verified astrologers. Vedic, psychological, evolutionary and more." },
      { property: "og:url", content: "/astrologers" },
    ],
    links: [{ rel: "canonical", href: "/astrologers" }],
  }),
  component: AstrologersPage,
});

function AstrologersPage() {
  const [query, setQuery] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [session, setSession] = useState("");
  const [country, setCountry] = useState("");
  const [sort, setSort] = useState<"featured" | "rating" | "experience">("featured");
  const [openSection, setOpenSection] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const list = astrologers.filter((a) => {
      if (query && !`${a.name} ${a.tagline} ${a.location}`.toLowerCase().includes(query.toLowerCase())) return false;
      if (speciality && !a.specialities.some((s) => s.toLowerCase().includes(speciality.toLowerCase()))) return false;
      if (session && !a.sessions.some((s) => s.toLowerCase().includes(session.toLowerCase()))) return false;
      if (country && a.countrySlug !== country) return false;
      return true;
    });
    if (sort === "rating") return [...list].sort((a, b) => b.rating - a.rating);
    if (sort === "experience") return [...list].sort((a, b) => b.experience - a.experience);
    return [...list].sort((a, b) => Number(!!b.featured) - Number(!!a.featured));
  }, [query, speciality, session, country, sort]);

  const clearAll = () => {
    setQuery(""); setSpeciality(""); setSession(""); setCountry("");
  };

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(60% 50% at 20% 0%, color-mix(in oklab, var(--primary) 18%, transparent), transparent 60%), radial-gradient(50% 50% at 100% 10%, color-mix(in oklab, var(--primary) 12%, transparent), transparent 60%), linear-gradient(180deg, color-mix(in oklab, var(--primary) 6%, var(--background)), var(--background) 70%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-[0.15] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(1px 1px at 12% 22%, var(--primary) 50%, transparent 51%), radial-gradient(1px 1px at 78% 18%, var(--primary) 50%, transparent 51%), radial-gradient(1.5px 1.5px at 35% 70%, var(--primary) 50%, transparent 51%), radial-gradient(1px 1px at 88% 64%, var(--primary) 50%, transparent 51%), radial-gradient(1.5px 1.5px at 22% 55%, var(--primary) 50%, transparent 51%), radial-gradient(1px 1px at 68% 85%, var(--primary) 50%, transparent 51%)",
          }}
        />
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-14 md:pt-24 md:pb-20 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/60 backdrop-blur px-3 py-1 text-[11px] font-medium tracking-[0.18em] text-primary uppercase shadow-sm">
            <Sparkles className="h-3.5 w-3.5" /> Verified Practitioners
          </span>
          <h1
            className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight text-foreground animate-[fade-up_0.7s_ease-out_both]"
            style={{ letterSpacing: "-0.03em", textWrap: "balance" }}
          >
            Browse the world's most trusted
            <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-primary via-primary to-foreground/70 bg-clip-text text-transparent"> professional astrologers</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed animate-[fade-up_0.7s_ease-out_0.1s_both]" style={{ textWrap: "pretty" }}>
            Hand-vetted Vedic, psychological, evolutionary and traditional astrologers. Filter by tradition, session, language or country — and book a private reading in minutes.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 animate-[fade-up_0.7s_ease-out_0.2s_both]">
            <a href="#directory" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[0_10px_30px_-10px_color-mix(in_oklab,var(--primary)_60%,transparent)] transition hover:shadow-[0_18px_40px_-12px_color-mix(in_oklab,var(--primary)_70%,transparent)] hover:-translate-y-0.5">
              Explore astrologers <ArrowRight className="h-4 w-4" />
            </a>
            <Link to="/join" className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white/70 backdrop-blur px-6 py-3 text-sm font-medium text-foreground transition hover:border-primary/40 hover:text-primary">
              List your profile
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { v: `${astrologers.length}+`, l: "Verified astrologers" },
              { v: `${specialities.length}`, l: "Traditions" },
              { v: `${countries.length}`, l: "Countries" },
              { v: "0%", l: "Commission" },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl border border-border/70 bg-white/60 backdrop-blur p-4 shadow-sm">
                <div className="text-2xl font-semibold text-foreground">{s.v}</div>
                <div className="mt-0.5 text-[11px] uppercase tracking-wider text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN GRID */}
      <section id="directory" className="mx-auto max-w-7xl px-4 md:px-6 py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[260px_minmax(0,1fr)_300px] gap-6 lg:gap-8">
          {/* LEFT STICKY SIDEBAR */}
          <aside className="lg:sticky lg:top-24 lg:self-start lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto pr-1">
            <div className="rounded-2xl border border-border/70 bg-white/70 backdrop-blur p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <Filter className="h-4 w-4 text-primary" /> Filters
                </h3>
                <button onClick={clearAll} className="text-xs text-primary hover:underline">Clear all</button>
              </div>

              <div className="relative mt-4">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search by name, city…"
                  className="w-full rounded-xl border border-border bg-card pl-9 pr-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/15 transition"
                />
              </div>

              <FilterGroup label="Speciality" open={openSection === "spec" || openSection === null} onToggle={() => setOpenSection(openSection === "spec" ? "" : "spec")}>
                <FilterPill active={!speciality} onClick={() => setSpeciality("")}>All traditions</FilterPill>
                {specialities.map((s) => (
                  <FilterPill key={s.slug} active={speciality === s.name} onClick={() => setSpeciality(s.name)}>
                    <span className="mr-1.5">{s.icon}</span>{s.name}
                  </FilterPill>
                ))}
              </FilterGroup>

              <FilterGroup label="Session type" open={openSection === "sess"} onToggle={() => setOpenSection(openSection === "sess" ? null : "sess")}>
                <FilterPill active={!session} onClick={() => setSession("")}>Any session</FilterPill>
                {sessions.slice(0, 8).map((s) => (
                  <FilterPill key={s.slug} active={session === s.name} onClick={() => setSession(s.name)}>{s.name}</FilterPill>
                ))}
              </FilterGroup>

              <FilterGroup label="Country" open={openSection === "country"} onToggle={() => setOpenSection(openSection === "country" ? null : "country")}>
                <FilterPill active={!country} onClick={() => setCountry("")}>Worldwide</FilterPill>
                {countries.map((c) => (
                  <FilterPill key={c.slug} active={country === c.slug} onClick={() => setCountry(c.slug)}>
                    <span className="mr-1">{c.flag}</span>{c.name}
                  </FilterPill>
                ))}
              </FilterGroup>
            </div>

            <div className="mt-5 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/8 via-white/70 to-white/40 p-5 shadow-sm">
              <ShieldCheck className="h-5 w-5 text-primary" />
              <h4 className="mt-2 text-sm font-semibold text-foreground">Every astrologer is human-verified</h4>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">We review credentials, sample readings, and client feedback before any profile goes live.</p>
            </div>
          </aside>

          {/* CENTER LIST */}
          <div className="min-w-0">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-foreground tracking-tight">Professional astrologers</h2>
                <p className="text-sm text-muted-foreground mt-0.5">Showing {filtered.length} of {astrologers.length} practitioners</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">Sort</span>
                <select value={sort} onChange={(e) => setSort(e.target.value as never)} className="rounded-lg border border-border bg-white px-3 py-1.5 text-sm focus:outline-none focus:border-primary/50">
                  <option value="featured">Featured</option>
                  <option value="rating">Highest rated</option>
                  <option value="experience">Most experienced</option>
                </select>
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-border bg-white/60 p-16 text-center">
                <p className="text-muted-foreground">No astrologers match these filters.</p>
                <button onClick={clearAll} className="mt-3 text-sm text-primary hover:underline">Clear filters</button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {filtered.map((a, i) => (
                  <PremiumAstrologerCard key={a.slug} a={a} delay={i * 40} />
                ))}
              </div>
            )}

            {/* TESTIMONIALS */}
            <div className="mt-16">
              <h3 className="text-2xl font-semibold tracking-tight text-foreground">What seekers are saying</h3>
              <p className="mt-1 text-sm text-muted-foreground">Verified reviews from real bookings.</p>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
                {testimonials.map((t) => (
                  <div key={t.name} className="rounded-2xl border border-border/70 bg-white/70 backdrop-blur p-6 shadow-sm hover:shadow-md transition">
                    <Quote className="h-5 w-5 text-primary/60" />
                    <p className="mt-3 text-sm text-foreground leading-relaxed">"{t.quote}"</p>
                    <div className="mt-4 flex items-center gap-3">
                      <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center text-xs font-semibold text-primary">{t.name.split(" ").map(n => n[0]).join("")}</div>
                      <div>
                        <div className="text-sm font-medium text-foreground">{t.name}</div>
                        <div className="text-xs text-muted-foreground">{t.role}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="mt-16">
              <h3 className="text-2xl font-semibold tracking-tight text-foreground">Frequently asked questions</h3>
              <div className="mt-6 space-y-3">
                {faqs.map((f) => (
                  <details key={f.q} className="group rounded-2xl border border-border/70 bg-white/70 p-5 shadow-sm open:shadow-md transition">
                    <summary className="flex cursor-pointer items-center justify-between gap-4 text-sm font-medium text-foreground">
                      {f.q}
                      <ChevronDown className="h-4 w-4 text-muted-foreground transition group-open:rotate-180" />
                    </summary>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT STICKY CTA */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-4">
              <div className="rounded-2xl border border-border/70 bg-white/80 backdrop-blur p-5 shadow-[0_20px_40px_-20px_color-mix(in_oklab,var(--primary)_30%,transparent)]">
                <div className="flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] text-primary uppercase">
                  <Calendar className="h-3.5 w-3.5" /> Book a Reading
                </div>
                <h4 className="mt-3 text-lg font-semibold text-foreground tracking-tight">Find your astrologer in 3 steps</h4>
                <ol className="mt-4 space-y-3 text-sm text-muted-foreground">
                  {[
                    "Browse verified practitioners",
                    "Pick a session that fits your question",
                    "Book a private virtual reading",
                  ].map((s, i) => (
                    <li key={s} className="flex gap-3">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/10 text-[11px] font-semibold text-primary">{i + 1}</span>
                      <span className="text-foreground/85">{s}</span>
                    </li>
                  ))}
                </ol>
                <Link to="/sessions" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition hover:opacity-90">
                  Browse session types <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/contact" className="mt-2 inline-flex w-full items-center justify-center rounded-xl border border-border bg-white px-4 py-2.5 text-sm font-medium text-foreground transition hover:border-primary/40 hover:text-primary">
                  Talk to a concierge
                </Link>
                <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                  <Mini icon={<ShieldCheck className="h-3.5 w-3.5" />} label="Verified" />
                  <Mini icon={<Globe2 className="h-3.5 w-3.5" />} label="Global" />
                  <Mini icon={<Clock className="h-3.5 w-3.5" />} label="24h reply" />
                </div>
              </div>

              <div className="rounded-2xl border border-primary/15 bg-gradient-to-br from-primary/10 via-white/70 to-white/40 p-5 shadow-sm">
                <h5 className="text-sm font-semibold text-foreground">New to astrology?</h5>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">Start with a Birth Chart Reading — a complete overview of your natal placements.</p>
                <Link to="/sessions/$slug" params={{ slug: "birth-chart-reading" }} className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* MOBILE STICKY CTA */}
      <div className="lg:hidden sticky bottom-3 z-30 mx-3 mb-3">
        <div className="rounded-2xl border border-border/70 bg-white/90 backdrop-blur shadow-[0_18px_40px_-12px_color-mix(in_oklab,var(--primary)_40%,transparent)] p-3 flex items-center gap-3">
          <div className="flex-1 min-w-0">
            <div className="text-xs text-muted-foreground">Ready to book?</div>
            <div className="text-sm font-semibold text-foreground truncate">Find your astrologer</div>
          </div>
          <Link to="/sessions" className="shrink-0 inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
            Book <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </SiteLayout>
  );
}

function FilterGroup({ label, open, onToggle, children }: { label: string; open: boolean; onToggle: () => void; children: React.ReactNode }) {
  return (
    <div className="mt-5 border-t border-border/70 pt-4">
      <button onClick={onToggle} className="flex w-full items-center justify-between text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground transition">
        {label}
        <ChevronDown className={`h-3.5 w-3.5 transition ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="mt-3 flex flex-wrap gap-1.5">{children}</div>}
    </div>
  );
}

function FilterPill({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`text-xs px-2.5 py-1 rounded-full border transition ${
        active
          ? "border-primary bg-primary text-primary-foreground shadow-sm"
          : "border-border bg-white text-foreground/80 hover:border-primary/40 hover:text-primary"
      }`}
    >
      {children}
    </button>
  );
}

function Mini({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="rounded-lg border border-border/70 bg-white/60 py-1.5 text-[10px] text-muted-foreground flex flex-col items-center gap-0.5">
      <span className="text-primary">{icon}</span>
      {label}
    </div>
  );
}

export function PremiumAstrologerCard({ a, delay = 0 }: { a: typeof astrologers[0]; delay?: number }) {
  return (
    <Link
      to="/astrologers/$slug"
      params={{ slug: a.slug }}
      className="group relative rounded-2xl border border-border/70 bg-white/80 backdrop-blur p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_color-mix(in_oklab,var(--primary)_45%,transparent)] hover:border-primary/40 animate-[fade-up_0.5s_ease-out_both]"
      style={{ animationDelay: `${delay}ms` }}
    >
      {a.featured && (
        <span className="absolute top-4 right-4 inline-flex items-center gap-1 text-[10px] font-medium uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-full">
          <Sparkles className="h-3 w-3" /> Featured
        </span>
      )}
      <div className="flex items-start gap-3">
        <div className="relative h-14 w-14 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-lg font-semibold text-primary shrink-0 ring-2 ring-white shadow-sm">
          {a.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors truncate">{a.name}</h3>
            {a.verified && <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />}
          </div>
          <p className="text-xs text-muted-foreground truncate">{a.tagline}</p>
          <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
            <MapPin className="h-3 w-3" /> {a.location}
          </p>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {a.specialities.slice(0, 3).map((s) => (
          <span key={s} className="text-[10px] px-2 py-0.5 rounded-full bg-primary/5 text-primary border border-primary/15">{s}</span>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-border/70 flex items-center justify-between text-xs">
        <span className="flex items-center gap-1 text-foreground font-medium">
          <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" /> {a.rating}
          <span className="text-muted-foreground font-normal">({a.reviews})</span>
        </span>
        <span className="text-foreground/80 font-medium">{a.price}</span>
      </div>
    </Link>
  );
}

// Re-export with previous name for backward compatibility with any imports
export { PremiumAstrologerCard as AstrologerCard };

const testimonials = [
  { name: "Priya Mehta", role: "Booked a Vedic Reading", quote: "I felt seen in a way I hadn't expected. The detail and warmth of my reading completely shifted how I'm approaching this year." },
  { name: "James Whitfield", role: "Booked a Career Forecast", quote: "Genuinely the most useful 60 minutes I've spent on my career in a decade. Specific, kind, and timed to the week." },
  { name: "Sofia Alvarez", role: "Booked a Synastry Session", quote: "We left the session with so much more compassion for each other. The astrologer matched us perfectly." },
  { name: "Daniel Kim", role: "Booked a Birth Chart Reading", quote: "Premium experience from the first click. Vetting, booking, and the reading itself — all flawless." },
];

const faqs = [
  { q: "How are astrologers vetted?", a: "Every practitioner is human-reviewed: credentials, sample readings, references, and ongoing client feedback. Profiles are only published after a manual review." },
  { q: "How do I pick the right astrologer?", a: "Filter by tradition (e.g. Vedic, Hellenistic), session type (e.g. natal, synastry), and language. Read bios and reviews, then book a session that matches your question." },
  { q: "What does a reading cost?", a: "Pricing is set by each astrologer and visible on every profile. Typical sessions range from $60–$180 depending on length, tradition, and experience." },
  { q: "Are sessions online or in person?", a: "Most readings are private virtual sessions over video. Some practitioners also offer in-person sessions in their city." },
  { q: "Can I cancel or reschedule?", a: "Yes — cancellation and rescheduling policies are shown on each astrologer's profile before you book." },
];
