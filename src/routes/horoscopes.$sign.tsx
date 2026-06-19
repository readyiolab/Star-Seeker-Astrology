import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { zodiacSigns } from "@/lib/starseeker-data";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/horoscopes/$sign")({
  loader: ({ params }) => {
    const sign = zodiacSigns.find((s) => s.slug === params.sign);
    if (!sign) throw notFound();
    return { sign };
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [
      { title: `${loaderData.sign.name} Horoscope, Traits & Personality | StarSeeker` },
      { name: "description", content: `${loaderData.sign.name} (${loaderData.sign.dates}): ${loaderData.sign.description}` },
      { property: "og:title", content: `${loaderData.sign.name} Horoscope & Personality | StarSeeker` },
      { property: "og:description", content: loaderData.sign.description },
    ] : [],
  }),
  notFoundComponent: () => (
    <SiteLayout>
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="text-3xl font-semibold">Sign not found</h1>
        <Button asChild className="mt-6"><Link to="/horoscopes">All signs</Link></Button>
      </div>
    </SiteLayout>
  ),
  errorComponent: ({ error }) => (
    <SiteLayout><div className="mx-auto max-w-3xl px-6 py-24 text-center"><h1 className="text-3xl font-semibold">Something went wrong</h1><p className="mt-3 text-muted-foreground">{error.message}</p></div></SiteLayout>
  ),
  component: SignPage,
});

function SignPage() {
  const { sign } = Route.useLoaderData();
  return (
    <SiteLayout>
      <PageHeader eyebrow={`${sign.symbol} ${sign.dates}`} title={`${sign.name} — Horoscope & Personality`} subtitle={sign.description} />

      <section className="py-12">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Element", value: sign.element },
              { label: "Modality", value: sign.modality },
              { label: "Ruler", value: sign.ruler },
              { label: "Dates", value: sign.dates },
            ].map((m) => (
              <div key={m.label} className="rounded-lg border border-border bg-card p-4">
                <p className="text-xs text-muted-foreground uppercase tracking-wider">{m.label}</p>
                <p className="mt-1 text-sm font-semibold">{m.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-xl font-semibold">Today's {sign.name} Horoscope</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            The {sign.element.toLowerCase()} energy of {sign.name} is asking you to lean into what feels alive today. Themes around {sign.traits[0].toLowerCase()} and {sign.traits[1].toLowerCase()} are heightened. Notice where you're being invited to move, even gently, in the direction of growth. This is a day for action that feels true rather than action that simply looks productive.
          </p>
        </div>
      </section>

      <section className="py-8">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-xl font-semibold">Core Traits</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {sign.traits.map((t) => (
              <span key={t} className="text-xs px-3 py-1.5 rounded-full bg-primary/5 text-primary border border-primary/15">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 border-t border-border bg-card/40">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-2xl font-semibold tracking-tight">Want a full {sign.name} reading?</h2>
          <p className="mt-3 text-muted-foreground">Your Sun sign is only the start. A personal birth chart reading reveals the full picture.</p>
          <Button asChild className="mt-6"><Link to="/astrologers">Browse Astrologers</Link></Button>
        </div>
      </section>
    </SiteLayout>
  );
}
