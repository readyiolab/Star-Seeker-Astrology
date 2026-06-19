import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { specialities, astrologers } from "@/lib/starseeker-data";

export const Route = createFileRoute("/specialities")({
  head: () => ({
    meta: [
      { title: "Browse Astrologers by Speciality │ StarSeeker" },
      { name: "description", content: "Every astrologer has a tradition and an approach — Vedic, Western, Psychological, Evolutionary, Karmic and more. Browse all 30+ specialities and find the right practitioner." },
      { property: "og:title", content: "Browse Astrologers by Speciality │ StarSeeker" },
      { property: "og:description", content: "Browse 30+ astrology specialities and find the tradition that resonates with you." },
      { property: "og:url", content: "/specialities" },
    ],
    links: [{ rel: "canonical", href: "/specialities" }],
  }),
  component: SpecialitiesPage,
});

function SpecialitiesPage() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="Specialities" title="Browse Astrologers by Speciality"
        subtitle="Every astrologer has a tradition and an approach. Some work with the ancient precision of Vedic Jyotish. Others explore the psychological depths of the Western birth chart. Browse all traditions and specialities to find the right practitioner for your journey."
        primaryCta={{ label: "Browse all astrologers", to: "/astrologers" }}
        secondaryCta={{ label: "By session type", to: "/sessions" }}
        stats={[
          { value: `${specialities.length}`, label: "Specialities" },
          { value: `${astrologers.length}+`, label: "Practitioners" },
          { value: "100%", label: "Human-verified" },
        ]}
      />
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {specialities.map((s) => {
            const count = astrologers.filter((a) => a.specialities.some((x) => x.toLowerCase() === s.name.toLowerCase())).length;
            return (
              <Link key={s.slug} to="/specialities/$slug" params={{ slug: s.slug }}
                className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-md">
                <div className="text-3xl">{s.icon}</div>
                <h3 className="mt-4 text-base font-semibold text-foreground group-hover:text-primary transition-colors">{s.name}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{s.short}</p>
                <p className="mt-3 text-xs text-muted-foreground">{count} astrologers →</p>
              </Link>
            );
          })}
        </div>
      </section>
    </SiteLayout>
  );
}
