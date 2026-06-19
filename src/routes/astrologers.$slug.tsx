import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { astrologers } from "@/lib/starseeker-data";
import {
  Star, MapPin, CheckCircle2, Globe, Clock, ArrowLeft, Sparkles,
  Calendar, MessageCircle, Shield, Award, Heart, Share2, Quote, BookOpen
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/astrologers/$slug")({
  loader: ({ params }) => {
    const astrologer = astrologers.find((a) => a.slug === params.slug);
    if (!astrologer) throw notFound();
    return { astrologer };
  },
  head: ({ loaderData, params }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.astrologer.name} — ${loaderData.astrologer.tagline} | StarSeeker` },
          { name: "description", content: `Book a session with ${loaderData.astrologer.name}. ${loaderData.astrologer.bio} ${loaderData.astrologer.rating}★ from ${loaderData.astrologer.reviews} verified reviews.` },
          { property: "og:title", content: `${loaderData.astrologer.name} — Astrologer Profile | StarSeeker` },
          { property: "og:description", content: loaderData.astrologer.bio },
          { property: "og:type", content: "profile" },
          { property: "og:url", content: `/astrologers/${params.slug}` },
          { name: "twitter:card", content: "summary_large_image" },
        ]
      : [],
    links: loaderData ? [{ rel: "canonical", href: `/astrologers/${params.slug}` }] : [],
    scripts: loaderData
      ? [
          {
            type: "application/ld+json",
            children: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: loaderData.astrologer.name,
              jobTitle: "Astrologer",
              description: loaderData.astrologer.bio,
              address: { "@type": "PostalAddress", addressLocality: loaderData.astrologer.city, addressCountry: loaderData.astrologer.country },
              knowsLanguage: loaderData.astrologer.languages,
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: loaderData.astrologer.rating,
                reviewCount: loaderData.astrologer.reviews,
              },
            }),
          },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <SiteLayout>
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="text-3xl font-semibold">Astrologer not found</h1>
        <p className="mt-3 text-muted-foreground">This profile doesn't exist or has been removed.</p>
        <Button asChild className="mt-6"><Link to="/astrologers">Browse all astrologers</Link></Button>
      </div>
    </SiteLayout>
  ),
  errorComponent: ({ error }) => (
    <SiteLayout>
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="text-3xl font-semibold">Something went wrong</h1>
        <p className="mt-3 text-muted-foreground">{error.message}</p>
      </div>
    </SiteLayout>
  ),
  component: AstrologerProfile,
});

const reviews = [
  { name: "Priya K.", date: "2 weeks ago", rating: 5, text: "Truly insightful and warm. Felt heard for the first time in years. The clarity around my Saturn return was exactly what I needed." },
  { name: "James R.", date: "1 month ago", rating: 5, text: "Specific, accurate, and kind. Couldn't recommend more highly — already booked a follow-up." },
  { name: "Anna L.", date: "1 month ago", rating: 5, text: "Very thoughtful reading. Gave me a lot to reflect on for the year ahead and the timing for a big decision." },
  { name: "Mateo F.", date: "2 months ago", rating: 5, text: "A rare combination of classical rigor and human warmth. Worth every minute." },
];

const faqItems = [
  { q: "What information do you need before the session?", a: "Your exact date, time, and place of birth. The more precise the time, the more accurate the chart and the timing work." },
  { q: "How long is a typical session?", a: "Most sessions run between 60 and 90 minutes, depending on the format you choose. We'll confirm the length at booking." },
  { q: "Is the session recorded?", a: "Yes — a recording is included by default so you can revisit the insights at your own pace." },
  { q: "How do payments work?", a: "You pay the astrologer directly. StarSeeker never adds booking fees, markups, or commissions on your reading." },
];

function AstrologerProfile() {
  const { astrologer: a } = Route.useLoaderData();
  const initials = a.name.split(" ").map((n) => n[0]).slice(0, 2).join("");

  return (
    <SiteLayout>
      {/* HERO SECTION WITH COSMIC BACKDROP */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-primary/5 via-background to-background">
        {/* Celestial background glows */}
        <div className="absolute inset-0 -z-10 opacity-30"
          style={{
            backgroundImage: "radial-gradient(ellipse at top, rgba(99, 102, 241, 0.15), transparent 60%), radial-gradient(ellipse at bottom right, rgba(236, 72, 153, 0.08), transparent 50%)"
          }}
        />
        <div className="absolute top-20 left-10 h-80 w-80 rounded-full bg-primary/5 blur-3xl -z-10 animate-pulse-live" />
        <div className="absolute bottom-10 right-1/4 h-60 w-60 rounded-full bg-accent/5 blur-3xl -z-10" />

        <div className="mx-auto max-w-6xl px-6 pt-28 pb-12 relative z-10">
          <Link to="/astrologers" className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-primary mb-8 transition-colors">
            <ArrowLeft className="h-3.5 w-3.5" /> Back to all astrologers
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 lg:gap-12 items-start">
            
            {/* LEFT: Identity Card Redesign */}
            <div className="animate-fade-up">
              <div className="rounded-3xl border border-border/80 bg-card/60 backdrop-blur-xl p-6 md:p-10 shadow-xl relative overflow-hidden">
                {/* Decorative cosmic aura behind avatar */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none" />

                <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 relative z-10">
                  {/* Glowing double-ringed initials avatar */}
                  <div className="relative group shrink-0">
                    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-primary via-accent to-pink-500 opacity-60 blur-md group-hover:opacity-100 transition duration-500 animate-pulse-live" />
                    <div className="relative h-28 w-28 md:h-32 md:w-32 rounded-2xl bg-card border border-border flex flex-col items-center justify-center text-3xl md:text-4xl font-extrabold text-foreground ring-4 ring-background shadow-xl">
                      <span className="bg-gradient-to-r from-primary via-indigo-600 to-accent bg-clip-text text-transparent">{initials}</span>
                      <div className="absolute bottom-1.5 text-[8px] tracking-[0.2em] font-bold text-muted-foreground/80 uppercase select-none">Astrologer</div>
                    </div>
                    {a.verified && (
                      <span className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-card border border-border shadow-lg flex items-center justify-center" title="Verified Astrologer">
                        <CheckCircle2 className="h-4.5 w-4.5 text-primary fill-primary/10" />
                      </span>
                    )}
                  </div>

                  <div className="flex-1 min-w-0 mt-2 sm:mt-0">
                    {/* Featured & Verified Badges */}
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-3">
                      {a.featured && (
                        <span className="inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20">
                          <Award className="h-3 w-3" /> Featured Practitioner
                        </span>
                      )}
                      {a.verified && (
                        <span className="inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                          <Shield className="h-3 w-3" /> Verified Profile
                        </span>
                      )}
                    </div>

                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground bg-gradient-to-r from-foreground via-foreground/90 to-primary/85 bg-clip-text text-transparent">
                      {a.name}
                    </h1>
                    <p className="text-muted-foreground mt-3 text-base md:text-lg font-medium leading-relaxed">
                      {a.tagline}
                    </p>

                    <div className="mt-6 flex flex-wrap justify-center sm:justify-start gap-x-5 gap-y-2.5 text-xs md:text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5 font-medium"><MapPin className="h-4 w-4 text-primary/70" /> {a.location}</span>
                      <span className="flex items-center gap-1.5 font-medium"><Globe className="h-4 w-4 text-primary/70" /> {a.languages.join(", ")}</span>
                      <span className="flex items-center gap-1.5 font-medium"><Clock className="h-4 w-4 text-primary/70" /> {a.experience} Years Experience</span>
                    </div>
                  </div>
                </div>

                {/* Floating Glass Stats Row */}
                <div className="mt-8 grid grid-cols-3 gap-4 pt-8 border-t border-border/60">
                  <StatCard label="Experience" value={`${a.experience}+ Yrs`} />
                  <StatCard label="Rating" value={`${a.rating} ★`} highlight />
                  <StatCard label="Verified Reviews" value={`${a.reviews}+`} />
                </div>

                {/* Micro Actions */}
                <div className="mt-8 flex items-center justify-center sm:justify-start gap-3">
                  <Button size="sm" variant="outline" className="rounded-xl px-4 py-2 border-border/80 hover:bg-accent/40 transition-all font-medium text-xs">
                    <Heart className="h-3.5 w-3.5 mr-1.5 text-rose-500 fill-rose-500/10" /> Save Profile
                  </Button>
                  <Button size="sm" variant="outline" className="rounded-xl px-4 py-2 border-border/80 hover:bg-accent/40 transition-all font-medium text-xs">
                    <Share2 className="h-3.5 w-3.5 mr-1.5 text-primary" /> Share
                  </Button>
                </div>
              </div>
            </div>

            {/* RIGHT SIDEBAR: Premium Booking Box */}
            <aside className="lg:sticky lg:top-24 self-start animate-fade-up">
              <div className="rounded-3xl border border-border bg-card/75 backdrop-blur-xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
                {/* Visual gradient accent */}
                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-primary via-indigo-500 to-accent" />
                <div className="absolute -left-20 -bottom-20 w-48 h-48 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

                <div className="flex items-baseline justify-between mb-6">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Session fee starting at</p>
                    <p className="mt-1 text-3xl font-extrabold tracking-tight text-foreground">{a.price}</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> Available
                  </span>
                </div>

                <div className="space-y-3">
                  <Button className="w-full h-12 rounded-xl bg-gradient-to-r from-primary to-accent hover:opacity-95 text-primary-foreground font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 transform hover:-translate-y-0.5 transition-all duration-300">
                    <Calendar className="h-4.5 w-4.5 mr-2" /> Book a Session
                  </Button>
                  <Button variant="outline" className="w-full h-12 rounded-xl border-border/80 hover:bg-accent/40 font-semibold transition-all">
                    <MessageCircle className="h-4.5 w-4.5 mr-2 text-primary" /> Message {a.name.split(" ")[0]}
                  </Button>
                </div>

                <p className="mt-3.5 text-[10px] text-muted-foreground text-center">
                  No middleman booking fees. You pay {a.name.split(" ")[0]} directly.
                </p>

                {/* Metadata List with custom icons */}
                <div className="mt-8 pt-6 border-t border-border/60 space-y-3 text-sm">
                  <SidebarRow label="Country" icon={<MapPin className="h-4 w-4 text-muted-foreground" />}>
                    <Link to="/countries/$slug" params={{ slug: a.countrySlug }} className="text-foreground font-semibold hover:text-primary transition-colors">
                      {a.country}
                    </Link>
                  </SidebarRow>
                  <SidebarRow label="Practice" icon={<Clock className="h-4 w-4 text-muted-foreground" />}>
                    <span className="font-semibold">{a.experience} Years</span>
                  </SidebarRow>
                  <SidebarRow label="Languages" icon={<Globe className="h-4 w-4 text-muted-foreground" />}>
                    <span className="font-semibold text-right max-w-[180px] truncate block" title={a.languages.join(", ")}>
                      {a.languages.join(", ")}
                    </span>
                  </SidebarRow>
                  <SidebarRow label="Response" icon={<MessageCircle className="h-4 w-4 text-muted-foreground" />}>
                    <span className="font-semibold">Within 24 Hours</span>
                  </SidebarRow>
                </div>

                <div className="mt-6 pt-6 border-t border-border/60 flex items-start gap-3 text-[11px] text-muted-foreground leading-relaxed">
                  <Shield className="h-4.5 w-4.5 text-primary shrink-0 mt-0.5" />
                  <span>Identity, professional credentials, and reviews are 100% verified by StarSeeker.</span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* DETAIL CONTENT SECTION */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 lg:gap-12">
          
          <div className="space-y-8">
            
            {/* About Panel */}
            <Panel title="About Astrologer" icon={<BookOpen className="h-5 w-5 text-primary" />}>
              <div className="relative pl-6 md:pl-8 py-2">
                <Quote className="absolute top-0 left-0 w-5 h-5 text-primary/30" />
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed font-normal antialiased whitespace-pre-line">
                  {a.longBio}
                </p>
              </div>
            </Panel>

            {/* Specialities Panel */}
            <Panel title="Astrological Specialities" icon={<Sparkles className="h-5 w-5 text-primary" />}>
              <div className="flex flex-wrap gap-2">
                {a.specialities.map((s) => (
                  <span key={s} className="text-xs font-semibold px-4 py-2.5 rounded-full bg-primary/5 text-primary border border-primary/15 hover:bg-primary/10 hover:border-primary/30 transition-all cursor-default">
                    {s}
                  </span>
                ))}
              </div>
            </Panel>

            {/* Session Offerings Grid Panel */}
            <Panel title="Session Types Offered" icon={<Calendar className="h-5 w-5 text-primary" />}>
              <div className="grid sm:grid-cols-2 gap-4">
                {a.sessions.map((s) => (
                  <div key={s} className="group flex flex-col justify-between rounded-xl border border-border bg-card/30 hover:bg-card hover:border-primary/35 hover:shadow-md p-5 transition-all duration-300">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="h-8 w-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-semibold select-none group-hover:scale-110 transition-transform">✦</span>
                        <span className="text-[9px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded bg-muted text-muted-foreground">Private Consultation</span>
                      </div>
                      <h3 className="font-bold text-sm md:text-base text-foreground group-hover:text-primary transition-colors">
                        {s}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                        One-on-one session utilizing specialized charting methods to evaluate current life cycles and potentials.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Panel>

            {/* Reviews Panel Redesign */}
            <Panel title={`Reviews · ${a.rating} ★ from ${a.reviews}+ verified readings`} icon={<Heart className="h-5 w-5 text-primary fill-primary/5" />}>
              <div className="grid sm:grid-cols-2 gap-4">
                {reviews.map((r, i) => {
                  const rInitials = r.name.split(" ").map((n) => n[0]).join("");
                  return (
                    <div key={i} className="rounded-2xl border border-border/80 bg-card/45 p-6 relative overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                      <Quote className="absolute -bottom-2 -right-2 h-16 w-16 text-primary/5 pointer-events-none select-none" />
                      
                      <div>
                        {/* Rating header */}
                        <div className="flex items-center gap-3 mb-4">
                          <div className="h-9 w-9 rounded-full bg-primary/10 text-primary border border-primary/20 flex items-center justify-center text-xs font-bold select-none">
                            {rInitials}
                          </div>
                          <div>
                            <p className="text-xs md:text-sm font-bold text-foreground leading-tight">{r.name}</p>
                            <p className="text-[10px] text-muted-foreground mt-0.5">{r.date}</p>
                          </div>
                        </div>

                        {/* Quote body */}
                        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed italic">
                          "{r.text}"
                        </p>
                      </div>

                      {/* Stars */}
                      <div className="flex gap-0.5 text-amber-500 mt-4 pt-4 border-t border-border/40 justify-end">
                        {Array.from({ length: r.rating }).map((_, j) => (
                          <Star key={j} className="h-3 w-3 fill-current" />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </Panel>

            {/* Frequently asked FAQs Panel */}
            <Panel title="Frequently Asked Questions" icon={<Shield className="h-5 w-5 text-primary" />}>
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((f, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-border py-1">
                    <AccordionTrigger className="text-sm md:text-base text-left hover:no-underline font-medium text-foreground hover:text-primary transition-colors py-3.5">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-xs md:text-sm text-muted-foreground leading-relaxed py-2">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Panel>
          </div>

          {/* Spacer block for desktop layout alignment */}
          <div className="hidden lg:block" />
        </div>
      </section>

      {/* MOBILE STICKY BOOKING CONSOLE */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-card/95 backdrop-blur-md border-t border-border/80 p-3.5 flex items-center justify-between gap-4 shadow-xl">
        <div className="min-w-0">
          <p className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground leading-none">Starting from</p>
          <p className="text-lg font-extrabold text-foreground mt-1 leading-none">{a.price}</p>
        </div>
        <Button className="rounded-xl h-11 px-6 bg-gradient-to-r from-primary to-accent hover:opacity-95 text-sm font-bold shadow-md shadow-primary/10">
          <Calendar className="h-4 w-4 mr-1.5" /> Book Session
        </Button>
      </div>
    </SiteLayout>
  );
}

// Subcomponents

function StatCard({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="rounded-xl bg-background/50 border border-border/40 p-3.5 text-center flex flex-col justify-center items-center shadow-sm">
      <p className={`text-base md:text-lg font-extrabold tracking-tight ${highlight ? "text-primary" : "text-foreground"}`}>
        {value}
      </p>
      <p className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground mt-1 select-none">
        {label}
      </p>
    </div>
  );
}

function SidebarRow({ label, icon, children }: { label: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-3 py-1">
      <div className="flex items-center gap-2">
        {icon}
        <span className="text-muted-foreground text-xs md:text-sm font-medium">{label}</span>
      </div>
      <span className="text-foreground text-xs md:text-sm">{children}</span>
    </div>
  );
}

function Panel({ title, icon, children }: { title: string; icon?: React.ReactNode; children: React.ReactNode }) {
  return (
    <section className="rounded-3xl border border-border/80 bg-card/45 backdrop-blur-sm p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-2.5 mb-6 border-b border-border/50 pb-4">
        {icon}
        <h2 className="text-base md:text-lg font-bold tracking-tight text-foreground">{title}</h2>
      </div>
      {children}
    </section>
  );
}
