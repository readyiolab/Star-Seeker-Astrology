import { Link } from "@tanstack/react-router";

const countries = [
  { flag: "🇮🇳", name: "India", count: 45, slug: "india" },
  { flag: "🇺🇸", name: "United States", count: 38, slug: "united-states" },
  { flag: "🇬🇧", name: "United Kingdom", count: 22, slug: "united-kingdom" },
  { flag: "🇦🇺", name: "Australia", count: 14, slug: "australia" },
  { flag: "🇩🇪", name: "Germany", count: 8, slug: "germany" },
  { flag: "🇫🇷", name: "France", count: 7, slug: "france" },
  { flag: "🇯🇵", name: "Japan", count: 6, slug: "japan" },
  { flag: "🇧🇷", name: "Brazil", count: 5, slug: "brazil" },
];

export function CountriesStrip() {
  return (
    <section id="countries" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <p className="text-xs font-medium tracking-[0.2em] text-primary uppercase">Worldwide Coverage</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl" style={{ letterSpacing: "-0.02em" }}>
            Find astrologers near you
          </h2>
          <p className="mt-3 text-muted-foreground">
            We list practitioners across 20+ countries. Local wisdom for every seeker.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {countries.map((c) => (
            <Link
              key={c.slug}
              to="/countries/$slug"
              params={{ slug: c.slug }}
              className="group flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 transition-all hover:border-primary/40 hover:shadow-sm"
            >
              <span className="text-2xl">{c.flag}</span>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors truncate">{c.name}</div>
                <div className="text-[11px] text-muted-foreground">{c.count} astrologers</div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/countries" className="text-sm font-medium text-primary hover:underline">
            View All Countries →
          </Link>
        </div>
      </div>
    </section>
  );
}
