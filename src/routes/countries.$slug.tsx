import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { countries, astrologers } from "@/lib/starseeker-data";
import { AstrologerCard } from "./astrologers.index";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/countries/$slug")({
  loader: ({ params }) => {
    const country = countries.find((c) => c.slug === params.slug);
    if (!country) throw notFound();
    const matches = astrologers.filter((a) => a.countrySlug === country.slug);
    return { country, matches };
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [
      { title: `Astrologers in ${loaderData.country.name} — Book a Reading | StarSeeker` },
      { name: "description", content: `Browse ${loaderData.matches.length} verified astrologers in ${loaderData.country.name}. Local readings in your language and timezone.` },
      { property: "og:title", content: `Astrologers in ${loaderData.country.name} | StarSeeker` },
      { property: "og:description", content: `Verified astrologers in ${loaderData.country.name}.` },
    ] : [],
  }),
  notFoundComponent: () => (
    <SiteLayout>
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="text-3xl font-semibold">Country not found</h1>
        <Button asChild className="mt-6"><Link to="/countries">All countries</Link></Button>
      </div>
    </SiteLayout>
  ),
  errorComponent: ({ error }) => (
    <SiteLayout><div className="mx-auto max-w-3xl px-6 py-24 text-center"><h1 className="text-3xl font-semibold">Something went wrong</h1><p className="mt-3 text-muted-foreground">{error.message}</p></div></SiteLayout>
  ),
  component: CountryPage,
});

function CountryPage() {
  const { country, matches } = Route.useLoaderData();
  return (
    <SiteLayout>
      <PageHeader eyebrow={`${country.flag} Country`} title={`Astrologers in ${country.name}`}
        subtitle={`${matches.length} verified astrologers across ${country.cities.length} cities.`} />
      <section className="py-8 border-b border-border">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-sm font-semibold text-foreground mb-3">Cities</h2>
          <div className="flex flex-wrap gap-2">
            {country.cities.map((city) => (
              <span key={city.slug} className="text-xs px-3 py-1.5 rounded-full bg-card border border-border text-muted-foreground">
                {city.name}
              </span>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-6">
          {matches.length === 0 ? (
            <p className="text-muted-foreground">No astrologers listed in {country.name} yet.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {matches.map((a) => <AstrologerCard key={a.slug} a={a} />)}
            </div>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}
