import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { blogPosts } from "@/lib/starseeker-data";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Astrology Guides & Resources │ StarSeeker" },
      { name: "description", content: "Deepen your understanding of astrology with our library of guides, explainers, and practitioner insights — from beginner introductions to advanced chart technique." },
      { property: "og:title", content: "Astrology Guides & Resources | StarSeeker" },
      { property: "og:description", content: "Beginner guides, chart techniques, sign deep dives, relationships, career, spirituality, Vedic astrology." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

const categories = [
  "Beginner Guides", "Chart Techniques", "Sign Deep Dives", "Planetary Guides",
  "Relationships", "Career", "Spirituality", "Vedic Astrology",
];

function BlogPage() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="Resources" title="Astrology Guides, Articles & Resources"
        subtitle="Deepen your understanding of astrology with our library of guides, explainers, and practitioner insights — from beginner introductions to advanced chart technique."
        primaryCta={{ label: "Browse astrologers", to: "/astrologers" }}
        secondaryCta={{ label: "Daily horoscopes", to: "/horoscopes" }}
        stats={[
          { value: `${blogPosts.length}+`, label: "Articles" },
          { value: "Weekly", label: "New pieces" },
          { value: "Free", label: "Always" },
        ]}
      />
      <section className="py-10 border-b border-border">
        <div className="mx-auto max-w-5xl px-6 flex flex-wrap items-center justify-center gap-2">
          {categories.map((c) => (
            <span key={c} className="text-xs px-3 py-1.5 rounded-full border border-border bg-card text-muted-foreground">
              {c}
            </span>
          ))}
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((p) => (
            <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-md">
              <p className="text-[10px] uppercase tracking-wider text-primary font-medium">{p.category} · {p.readTime} read</p>
              <h2 className="mt-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors" style={{ textWrap: "balance" }}>{p.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.excerpt}</p>
              <p className="mt-4 text-xs text-muted-foreground">{new Date(p.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</p>
            </Link>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
