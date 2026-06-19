import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { zodiacSigns } from "@/lib/starseeker-data";

export const Route = createFileRoute("/horoscopes")({
  head: () => ({
    meta: [
      { title: "Daily Horoscopes — All 12 Signs │ StarSeeker" },
      { name: "description", content: "Your daily astrological guidance for every sign of the zodiac. Written by professional astrologers, updated every morning. Select your sign." },
      { property: "og:title", content: "Daily Horoscopes — All 12 Signs | StarSeeker" },
      { property: "og:description", content: "Free daily forecasts for every zodiac sign, written by professional astrologers." },
      { property: "og:url", content: "/horoscopes" },
    ],
    links: [{ rel: "canonical", href: "/horoscopes" }],
  }),
  component: HoroscopesPage,
});

const today = new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });

function HoroscopesPage() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="Horoscopes" title="Daily Horoscopes — All 12 Signs"
        subtitle={`Your daily astrological guidance for every sign of the zodiac. Written by professional astrologers, updated every morning. Today — ${today}.`}
        primaryCta={{ label: "Book a personal reading", to: "/astrologers" }}
        secondaryCta={{ label: "Compatibility & synastry", to: "/sessions" }}
        stats={[
          { value: "12", label: "Zodiac signs" },
          { value: "Daily", label: "Free forecasts" },
          { value: `${today.split(",")[0]}`, label: "Today" },
        ]}
      />
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {zodiacSigns.map((s) => (
            <Link key={s.slug} to="/horoscopes/$sign" params={{ sign: s.slug }}
              className="group rounded-xl border border-border bg-card p-5 text-center transition-all hover:border-primary/40 hover:shadow-md">
              <div className="text-3xl">{s.symbol}</div>
              <h3 className="mt-2 text-sm font-semibold group-hover:text-primary transition-colors">{s.name}</h3>
              <p className="text-[10px] text-muted-foreground">{s.dates}</p>
            </Link>
          ))}
        </div>
      </section>
      <section className="py-16 border-t border-border bg-card/40">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-2xl font-semibold tracking-tight">Want more than a daily forecast?</h2>
          <p className="mt-3 text-muted-foreground">A personal birth chart reading goes far beyond your Sun sign. Browse our verified astrologers for a one-on-one session.</p>
          <Link to="/astrologers" className="inline-block mt-6 rounded-lg bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:opacity-90 transition">
            Browse Astrologers
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
