import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About StarSeeker — Our Mission" },
      { name: "description", content: "StarSeeker connects seekers with verified astrologers worldwide. Free for seekers. Zero commission for practitioners. Built with care, respect, and craft." },
      { property: "og:title", content: "About StarSeeker" },
      { property: "og:description", content: "Connecting seekers with verified astrologers worldwide. Free. Zero commission." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="About" title="About StarSeeker"
        subtitle="StarSeeker exists to make finding a professional astrologer simple, transparent, and accessible — for everyone from first-time seekers to experienced students of the stars."
        primaryCta={{ label: "Browse astrologers", to: "/astrologers" }}
        secondaryCta={{ label: "List your profile", to: "/join" }}
        stats={[
          { value: "0%", label: "Commission" },
          { value: "Free", label: "For seekers" },
          { value: "Human", label: "Verification" },
        ]}
      />
      <section className="py-16">
        <div className="mx-auto max-w-2xl px-6 space-y-6 text-muted-foreground leading-relaxed">
          <h2 className="text-foreground text-xl font-semibold">Our story</h2>
          <p>We started StarSeeker because finding a trustworthy, professional astrologer was harder than it should be. Practitioners were scattered across personal websites, social media, and outdated directories — with no consistent way to compare, evaluate, or reach out. We built the platform we wished had existed.</p>
          <h2 className="text-foreground text-xl font-semibold pt-2">What we do</h2>
          <p>We manually review every listing before it goes live. We don't take commissions. We don't meddle in bookings. We simply connect the right practitioners with the right seekers — and get out of the way.</p>
          <h2 className="text-foreground text-xl font-semibold pt-2">Our principles</h2>
          <ul className="space-y-3 list-disc pl-5">
            <li><strong className="text-foreground">No commission, ever.</strong> Astrologers keep 100% of what their clients pay them.</li>
            <li><strong className="text-foreground">No paid placement.</strong> Rankings are based on reviews, response time, and verification — not money.</li>
            <li><strong className="text-foreground">Verified profiles only.</strong> Every astrologer is reviewed by a human before being listed.</li>
            <li><strong className="text-foreground">Respect for the craft.</strong> We treat astrology as a serious discipline, not entertainment.</li>
          </ul>
        </div>
      </section>
      <section className="py-12 border-t border-border bg-card/40">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-2xl font-semibold tracking-tight">Ready to begin?</h2>
          <p className="mt-3 text-muted-foreground">Browse our directory of verified astrologers.</p>
          <Button asChild className="mt-6"><Link to="/astrologers">Browse Astrologers</Link></Button>
        </div>
      </section>
    </SiteLayout>
  );
}
