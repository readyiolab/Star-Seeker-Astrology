import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { sessions, astrologers } from "@/lib/starseeker-data";
import { Clock, Sparkles, FileText, Heart, Sun, Compass, Flame, Calendar, Orbit, Moon, Globe, Users, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/sessions")({
  head: () => ({
    meta: [
      { title: "Find an Astrologer for Your Reading │ StarSeeker" },
      { name: "description", content: "Whatever life question is calling for clarity, we have an astrologer who specialises in exactly that. Browse all session types to find practitioners who focus on what matters most." },
      { property: "og:title", content: "Find an Astrologer for Your Reading │ StarSeeker" },
      { property: "og:description", content: "Browse every type of astrology session — birth charts, synastry, transits, solar returns, and more." },
      { property: "og:url", content: "/sessions" },
    ],
    links: [{ rel: "canonical", href: "/sessions" }],
  }),
  component: SessionsPage,
});

// Map of custom premium icons for all zodiac session types
const sessionIcons: Record<string, React.ReactNode> = {
  "birth-chart-reading": <Sparkles className="w-5 h-5 text-primary" />,
  "natal-chart-analysis": <FileText className="w-5 h-5 text-primary" />,
  "compatibility-synastry": <Heart className="w-5 h-5 text-primary" />,
  "solar-return-reading": <Sun className="w-5 h-5 text-primary" />,
  "career-life-path": <Compass className="w-5 h-5 text-primary" />,
  "love-relationships": <Flame className="w-5 h-5 text-primary" />,
  "transit-forecast": <Calendar className="w-5 h-5 text-primary" />,
  "annual-forecast": <Orbit className="w-5 h-5 text-primary" />,
  "lunar-return": <Moon className="w-5 h-5 text-primary" />,
  "predictive-astrology": <Sparkles className="w-5 h-5 text-primary" />,
  "child-chart-reading": <Sparkles className="w-5 h-5 text-primary" />,
  "online-virtual-session": <Globe className="w-5 h-5 text-primary" />,
};

function SessionsPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Sessions"
        title="Find an Astrologer for Your Reading"
        subtitle="Whatever life question is calling for clarity, we have an astrologer who specialises in exactly that. Browse all session types below to find practitioners who focus on what matters most to you right now."
        primaryCta={{ label: "Browse astrologers", to: "/astrologers" }}
        secondaryCta={{ label: "Browse specialities", to: "/specialities" }}
        stats={[
          { value: `${sessions.length}`, label: "Session types" },
          { value: `${astrologers.length}+`, label: "Practitioners" },
          { value: "Online", label: "Anywhere in the world" },
        ]}
      />
      <section className="py-20 relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background">
        {/* Soft background sparkles */}
        <div className="absolute top-1/3 left-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 right-10 w-72 h-72 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-6xl px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sessions.map((s) => {
              const count = astrologers.filter((a) => a.sessions.some((x) => x.toLowerCase() === s.name.toLowerCase())).length;
              return (
                <Link
                  key={s.slug}
                  to="/sessions/$slug"
                  params={{ slug: s.slug }}
                  className="group relative flex flex-col justify-between rounded-2xl border border-border bg-card/60 backdrop-blur-md p-6 hover:border-primary/45 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden min-h-[230px]"
                >
                  {/* Decorative element corner glow */}
                  <div className="absolute -right-12 -top-12 w-28 h-28 bg-primary/5 rounded-full blur-2xl pointer-events-none group-hover:bg-primary/10 transition-colors duration-500" />
                  
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="h-9 w-9 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {sessionIcons[s.slug] || <Sparkles className="w-5 h-5 text-primary" />}
                      </span>
                      <span className="inline-flex items-center text-[9px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded bg-muted text-muted-foreground border border-border/50 select-none">
                        Astrology Reading
                      </span>
                    </div>

                    <h3 className="text-base md:text-lg font-bold text-foreground group-hover:text-primary tracking-tight transition-colors mb-2.5">
                      {s.name}
                    </h3>
                    
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed line-clamp-3 min-h-[60px]">
                      {s.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1 bg-primary/5 text-primary font-semibold px-2.5 py-1 rounded-full border border-primary/10">
                      <Clock className="h-3.5 w-3.5" />
                      {s.duration}
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-bold group-hover:text-foreground transition-colors">
                      <Users className="h-4 w-4" />
                      {count} {count === 1 ? "astrologer" : "astrologers"}
                      <ArrowRight className="h-3.5 w-3.5 ml-0.5 transform group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
