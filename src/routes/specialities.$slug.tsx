import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { specialities, astrologers } from "@/lib/starseeker-data";
import { AstrologerCard } from "./astrologers.index";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/specialities/$slug")({
  loader: ({ params }) => {
    const speciality = specialities.find((s) => s.slug === params.slug);
    if (!speciality) throw notFound();
    const matches = astrologers.filter((a) => a.specialities.some((x) => x.toLowerCase() === speciality.name.toLowerCase()));
    return { speciality, matches };
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [
      { title: `${loaderData.speciality.name} Astrologers — Find an Expert | StarSeeker` },
      { name: "description", content: `${loaderData.speciality.short} Browse ${loaderData.matches.length} expert ${loaderData.speciality.name} astrologers.` },
      { property: "og:title", content: `${loaderData.speciality.name} Astrologers | StarSeeker` },
      { property: "og:description", content: loaderData.speciality.short },
    ] : [],
  }),
  notFoundComponent: () => (
    <SiteLayout>
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="text-3xl font-semibold">Speciality not found</h1>
        <Button asChild className="mt-6"><Link to="/specialities">All specialities</Link></Button>
      </div>
    </SiteLayout>
  ),
  errorComponent: ({ error }) => (
    <SiteLayout><div className="mx-auto max-w-3xl px-6 py-24 text-center"><h1 className="text-3xl font-semibold">Something went wrong</h1><p className="mt-3 text-muted-foreground">{error.message}</p></div></SiteLayout>
  ),
  component: SpecialityPage,
});

function SpecialityPage() {
  const { speciality, matches } = Route.useLoaderData();
  return (
    <SiteLayout>
      <PageHeader eyebrow={`${speciality.icon} Speciality`} title={`${speciality.name} Astrologers`} subtitle={speciality.short} />
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-xl font-semibold">About {speciality.name}</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">{speciality.long}</p>
        </div>
      </section>
      <section className="py-12 border-t border-border">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-xl font-semibold mb-6">{matches.length} {speciality.name} Astrologers</h2>
          {matches.length === 0 ? (
            <p className="text-muted-foreground">No astrologers listed in this speciality yet.</p>
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
