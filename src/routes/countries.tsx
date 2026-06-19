import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { countries, astrologers } from "@/lib/starseeker-data";

export const Route = createFileRoute("/countries")({
  head: () => ({
    meta: [
      { title: "Find Astrologers by Country │ StarSeeker" },
      { name: "description", content: "StarSeeker lists professional astrologers across 20+ countries worldwide. Select your country to browse practitioners in your region — or filter by city for local options." },
      { property: "og:title", content: "Find Astrologers by Country | StarSeeker" },
      { property: "og:description", content: "Browse practitioners in 20+ countries worldwide." },
      { property: "og:url", content: "/countries" },
    ],
    links: [{ rel: "canonical", href: "/countries" }],
  }),
  component: CountriesPage,
});

function CountriesPage() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="Countries" title="Find Astrologers by Country"
        subtitle="StarSeeker lists professional astrologers across 20+ countries worldwide. Select your country below to browse practitioners in your region — or filter by city for local options."
        primaryCta={{ label: "Browse all astrologers", to: "/astrologers" }}
        secondaryCta={{ label: "List your profile", to: "/join" }}
        stats={[
          { value: `${countries.length}`, label: "Countries" },
          { value: `${countries.reduce((n, c) => n + c.cities.length, 0)}`, label: "Cities" },
          { value: `${astrologers.length}+`, label: "Astrologers" },
        ]}
      />
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {countries.map((c) => {
            const count = astrologers.filter((a) => a.countrySlug === c.slug).length;
            return (
              <Link key={c.slug} to="/countries/$slug" params={{ slug: c.slug }}
                className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-md flex items-center gap-4">
                <span className="text-3xl">{c.flag}</span>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">{c.name}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">{count} astrologers · {c.cities.length} cities</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </SiteLayout>
  );
}
