import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Check } from "lucide-react";

export const Route = createFileRoute("/join")({
  head: () => ({
    meta: [
      { title: "List Your Profile — Reach More Seekers │ StarSeeker" },
      { name: "description", content: "Join StarSeeker and reach thousands of seekers actively searching for professional astrologers. Free basic listing. Zero commission. Your profile. Your bookings." },
      { property: "og:title", content: "List Your Profile — For Astrologers | StarSeeker" },
      { property: "og:description", content: "Free basic listing. Zero commission. Direct enquiries." },
      { property: "og:url", content: "/join" },
    ],
    links: [{ rel: "canonical", href: "/join" }],
  }),
  component: JoinPage,
});

const benefits = [
  { icon: "🎯", title: "Targeted Reach", desc: "Seekers browsing StarSeeker are actively looking to book. They have a life question, a motivation, and they're ready to invest in guidance." },
  { icon: "💰", title: "Zero Commission", desc: "Every reading you book through StarSeeker is yours entirely. We charge no percentage, no finder's fee, and no hidden costs." },
  { icon: "🌐", title: "Your Own Profile Page", desc: "A professional landing page showcasing your bio, tradition, session types, reviews, and social links. Shareable. Searchable. Yours." },
  { icon: "📈", title: "SEO-Powered Visibility", desc: "Our speciality, session, and city pages rank highly on Google. When someone searches 'Vedic astrologer London', StarSeeker appears — and so do our listed practitioners." },
  { icon: "📩", title: "Direct Enquiries", desc: "Clients contact you through your profile's booking form. All communication is direct — no platform middleman, no delays." },
  { icon: "✅", title: "Trusted Platform", desc: "StarSeeker manually reviews every listing. Being listed signals credibility to seekers comparing multiple practitioners." },
];

const tiers = [
  {
    name: "Free",
    price: "£0",
    period: "forever",
    highlight: false,
    features: ["Basic profile listing", "Name, location, specialities", "Enquiry form", "Listed in directory"],
  },
  {
    name: "Pro",
    price: "£9.99",
    period: "/month",
    highlight: true,
    features: ["Everything in Free", "Full bio + photos", "Video embed (intro / sample reading)", "Social + website links", "Client reviews enabled"],
  },
  {
    name: "Elite",
    price: "£19.99",
    period: "/month",
    highlight: false,
    features: ["Everything in Pro", "Priority placement in listings", "Featured on homepage", "Verified badge on profile", "Analytics dashboard"],
  },
];

function JoinPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <SiteLayout>
      <PageHeader eyebrow="For Astrologers" title="List Your Profile on StarSeeker"
        subtitle="Reach thousands of seekers actively searching for professional astrologers. Your profile. Your bookings. Zero commission."
        primaryCta={{ label: "Apply to list", to: "/join" }}
        secondaryCta={{ label: "See live profiles", to: "/astrologers" }}
        stats={[
          { value: "£0", label: "Listing fee" },
          { value: "0%", label: "Commission" },
          { value: "2–3 days", label: "Review time" },
        ]}
      />

      {/* Benefits */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Why join StarSeeker?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-xl border border-border bg-card p-6">
                <div className="text-2xl">{b.icon}</div>
                <h3 className="mt-3 text-base font-semibold text-foreground">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 border-t border-border bg-card/40">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Simple, honest pricing</h2>
            <p className="mt-3 text-muted-foreground">Start free. Upgrade only when you need more visibility.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {tiers.map((t) => (
              <div key={t.name} className={`rounded-2xl border p-7 flex flex-col ${t.highlight ? "border-primary/40 bg-background shadow-lg shadow-primary/5 relative" : "border-border bg-background"}`}>
                {t.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-medium tracking-[0.18em] uppercase px-3 py-1 rounded-full bg-primary text-primary-foreground">
                    Most Popular
                  </span>
                )}
                <h3 className="text-lg font-semibold text-foreground">{t.name}</h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-3xl font-semibold text-foreground">{t.price}</span>
                  <span className="text-sm text-muted-foreground">{t.period}</span>
                </div>
                <ul className="mt-6 space-y-2.5 flex-1">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submission Form */}
      <section className="py-20 border-t border-border">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="text-2xl font-semibold tracking-tight text-center">Add your profile</h2>
          <p className="mt-2 text-center text-muted-foreground text-sm">Takes about 5 minutes. We review and respond within 2–3 business days.</p>

          {submitted ? (
            <div className="mt-10 rounded-xl border border-primary/30 bg-primary/5 p-8 text-center">
              <Check className="h-10 w-10 text-primary mx-auto" />
              <h3 className="mt-4 text-lg font-semibold">Application received</h3>
              <p className="mt-2 text-sm text-muted-foreground">Thank you! We've received your submission and will review it within 2–3 business days. You'll hear from us by email once your profile is approved.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="mt-10 space-y-5"
            >
              {[
                { label: "Full professional name", type: "text", required: true },
                { label: "Email address (not displayed publicly)", type: "email", required: true },
                { label: "City", type: "text", required: true },
                { label: "Country", type: "text", required: true },
                { label: "Primary speciality", type: "text", required: true },
                { label: "Website URL", type: "url", required: false },
              ].map((f) => (
                <div key={f.label}>
                  <label className="block text-sm font-medium text-foreground mb-1.5">{f.label}{f.required && " *"}</label>
                  <input type={f.type} required={f.required} className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
                </div>
              ))}
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Bio / About you *</label>
                <textarea required rows={5} maxLength={1200} placeholder="Tell seekers about your astrological tradition, experience, notable work, and what makes your readings unique…" className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
              </div>
              <Button type="submit" size="lg" className="w-full">Submit My Profile →</Button>
              <p className="text-center text-xs text-muted-foreground">By submitting, you agree to our Practitioner Terms.</p>
            </form>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}
