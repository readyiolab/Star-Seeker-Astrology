import { Link } from "@tanstack/react-router";

type Item = { icon: string; name: string; count: string; to: "/specialities/$slug"; slug: string };

const items: Item[] = [
  { icon: "⭐", name: "Western Astrology", count: "58 astrologers", to: "/specialities/$slug", slug: "hellenistic-astrology" },
  { icon: "🕉️", name: "Vedic / Jyotish", count: "44 astrologers", to: "/specialities/$slug", slug: "vedic-astrology" },
  { icon: "🐉", name: "Chinese Astrology", count: "18 astrologers", to: "/specialities/$slug", slug: "vedic-astrology" },
  { icon: "🌱", name: "Evolutionary Astrology", count: "22 astrologers", to: "/specialities/$slug", slug: "evolutionary-astrology" },
  { icon: "🧠", name: "Psychological Astrology", count: "26 astrologers", to: "/specialities/$slug", slug: "psychological-astrology" },
  { icon: "❤️", name: "Relationship & Synastry", count: "39 astrologers", to: "/specialities/$slug", slug: "love-relationships" },
  { icon: "💼", name: "Career & Financial", count: "21 astrologers", to: "/specialities/$slug", slug: "career-life-path" },
  { icon: "🏥", name: "Medical Astrology", count: "8 astrologers", to: "/specialities/$slug", slug: "financial-astrology" },
  { icon: "🔮", name: "Horary Astrology", count: "12 astrologers", to: "/specialities/$slug", slug: "horary-astrology" },
  { icon: "☯️", name: "Karmic Astrology", count: "16 astrologers", to: "/specialities/$slug", slug: "karmic-astrology" },
  { icon: "👶", name: "Child & Family Charts", count: "9 astrologers", to: "/specialities/$slug", slug: "child-chart-reading" },
  { icon: "🌍", name: "Mundane Astrology", count: "7 astrologers", to: "/specialities/$slug", slug: "financial-astrology" },
];

export function FeaturesSection() {
  return (
    <section id="specialities" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center mb-14">
          <p className="text-xs font-medium tracking-[0.2em] text-primary uppercase">Browse by Speciality</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl" style={{ letterSpacing: "-0.02em" }}>
            What kind of astrology are you looking for?
          </h2>
          <p className="mt-4 text-muted-foreground">
            From Vedic birth charts to Western synastry — every tradition and speciality covered.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {items.map((s) => (
            <Link
              key={s.name}
              to={s.to}
              params={{ slug: s.slug }}
              className="group rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/40 hover:shadow-md"
            >
              <div className="text-2xl">{s.icon}</div>
              <h3 className="mt-3 text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                {s.name}
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">{s.count}</p>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/specialities" className="text-sm font-medium text-primary hover:underline">
            View All Specialities →
          </Link>
        </div>
      </div>
    </section>
  );
}
