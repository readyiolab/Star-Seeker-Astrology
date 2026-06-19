import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { sessions, astrologers } from "@/lib/starseeker-data";
import { AstrologerCard } from "./astrologers.index";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/sessions/$slug")({
  loader: ({ params }) => {
    const session = sessions.find((s) => s.slug === params.slug);
    if (!session) throw notFound();
    const matches = astrologers.filter((a) => a.sessions.some((x) => x.toLowerCase() === session.name.toLowerCase()));
    return { session, matches };
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [
      { title: `${loaderData.session.name} — Find & Book an Astrologer | StarSeeker` },
      { name: "description", content: `${loaderData.session.description} Browse ${loaderData.matches.length} astrologers offering ${loaderData.session.name}.` },
      { property: "og:title", content: `${loaderData.session.name} | StarSeeker` },
      { property: "og:description", content: loaderData.session.description },
    ] : [],
  }),
  notFoundComponent: () => (
    <SiteLayout>
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="text-3xl font-semibold">Session not found</h1>
        <Button asChild className="mt-6"><Link to="/sessions">All sessions</Link></Button>
      </div>
    </SiteLayout>
  ),
  errorComponent: ({ error }) => (
    <SiteLayout><div className="mx-auto max-w-3xl px-6 py-24 text-center"><h1 className="text-3xl font-semibold">Something went wrong</h1><p className="mt-3 text-muted-foreground">{error.message}</p></div></SiteLayout>
  ),
  component: SessionPage,
});

function SessionPage() {
  const { session, matches } = Route.useLoaderData();
  return (
    <SiteLayout>
      <PageHeader eyebrow="Session Type" title={session.name} subtitle={`${session.duration} · ${session.description}`} />
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-border p-5">
            <h3 className="text-sm font-semibold text-foreground">Ideal for</h3>
            <p className="mt-2 text-sm text-muted-foreground">{session.ideal}</p>
          </div>
          <div className="rounded-xl border border-border p-5">
            <h3 className="text-sm font-semibold text-foreground">How to prepare</h3>
            <p className="mt-2 text-sm text-muted-foreground">{session.prep}</p>
          </div>
        </div>
      </section>
      <section className="py-12 border-t border-border">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-xl font-semibold mb-6">{matches.length} astrologers offering {session.name}</h2>
          {matches.length === 0 ? (
            <p className="text-muted-foreground">No astrologers offering this session yet.</p>
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
