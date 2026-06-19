import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Frequently Asked Questions │ StarSeeker" },
      { name: "description", content: "Everything you need to know about finding and booking a professional astrologer through StarSeeker — pricing, sessions, traditions, and how it all works." },
      { property: "og:title", content: "Frequently Asked Questions | StarSeeker" },
      { property: "og:description", content: "Answers about booking, pricing, reading types, and our practitioner listings." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
  }),
  component: FAQPage,
});

type FAQ = { q: string; a: string };
type Group = { title: string; items: FAQ[] };

const groups: Group[] = [
  {
    title: "Booking Process",
    items: [
      { q: "How do I find an astrologer on StarSeeker?", a: "Use the search bar on our homepage or the Astrologers page to filter by session type, speciality, and location. Browse the results, click into profiles that interest you, and use the enquiry form on their profile to get in touch. Completely free, no account required." },
      { q: "Does StarSeeker charge a booking fee?", a: "No, never. StarSeeker is a free discovery platform. All booking arrangements and payments are made directly between you and the astrologer. We take no commission and charge no fees to clients." },
      { q: "What information do I need to provide?", a: "For most natal and birth chart readings you will need your exact date, time, and place of birth. The more accurate your birth time, the more precise the chart. Some session types have different requirements — your astrologer will guide you." },
      { q: "How long does it take to hear back?", a: "Most professional astrologers respond within 24 hours. If you haven't heard back within 48 hours, check your spam folder or try contacting them through their website link." },
    ],
  },
  {
    title: "Pricing",
    items: [
      { q: "How much does an astrology reading cost?", a: "Prices vary depending on the practitioner's experience, reading type, and duration. A 60-minute birth chart reading typically ranges from £60–£200. Annual forecasts and synastry readings range £80–£300+. Written reports can range from £40–£150. Always request a quote directly from the astrologer." },
      { q: "Are there hidden costs?", a: "StarSeeker charges nothing. The astrologer may charge separately for a written report, follow-up questions, or extended session time — but this will all be discussed and agreed before you commit." },
      { q: "Do astrologers require a deposit?", a: "Many professional practitioners require a deposit (typically 25–50%) to secure a booking. Payment terms will be outlined by the astrologer when you confirm your session." },
    ],
  },
  {
    title: "Types of Readings",
    items: [
      { q: "What's the best type of reading to start with?", a: "A natal birth chart reading is the ideal starting point for anyone new to astrology. It provides a complete, personalised foundation that contextualises everything else — your personality, life themes, relationships, and timing. From there, subsequent readings can go deeper into specific areas." },
      { q: "What's the difference between Western and Vedic astrology?", a: "Western astrology uses the tropical zodiac (based on the seasons) while Vedic uses the sidereal zodiac (based on fixed star positions), typically placing planets about 23 degrees earlier. Both systems reveal deep truths but through different frameworks and with different areas of emphasis. Many astrologers are trained in both." },
      { q: "Can an astrologer predict my future?", a: "Responsible astrologers don't make absolute predictions — they illuminate cycles, tendencies, and timing. Astrology shows potential; your choices shape the outcome. Most practitioners focus on empowering you with insight rather than telling you what will happen." },
      { q: "What is synastry and how does it work?", a: "Synastry is the comparison of two birth charts to reveal the dynamics between two people. The astrologer looks at how each person's planets interact with the other's chart — which areas connect naturally, where friction arises, and how both people can grow through the relationship." },
    ],
  },
  {
    title: "For Astrologers",
    items: [
      { q: "How do I list my profile on StarSeeker?", a: "Visit our 'List Your Profile' page, complete the submission form, and our team will review your application within 2–3 business days. We verify all practitioners are genuine professionals before approving listings." },
      { q: "Is it free to list my profile?", a: "Yes. A basic listing is completely free. Premium plans are available for practitioners who want priority placement, video embeds, and additional features." },
      { q: "Does StarSeeker take a commission?", a: "Never. StarSeeker does not charge practitioners a commission on any bookings generated through the platform. You keep 100% of every fee you agree with clients." },
    ],
  },
];

const totalFaqs = groups.reduce((n, g) => n + g.items.length, 0);

function FAQPage() {
  const [open, setOpen] = useState<string | null>("Booking Process-0");
  return (
    <SiteLayout>
      <PageHeader eyebrow="FAQ" title="Frequently Asked Questions"
        subtitle="Everything you need to know about finding and booking a professional astrologer through StarSeeker. Can't find your answer? Contact us and we'll help."
        primaryCta={{ label: "Browse astrologers", to: "/astrologers" }}
        secondaryCta={{ label: "Contact us", to: "/contact" }}
        stats={[
          { value: `${totalFaqs}`, label: "Questions answered" },
          { value: "<2d", label: "Reply time" },
          { value: "0%", label: "Booking fees" },
        ]}
      />
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6 space-y-12">
          {groups.map((g) => (
            <div key={g.title}>
              <h2 className="text-xs font-medium tracking-[0.2em] text-primary uppercase mb-4">{g.title}</h2>
              <div className="space-y-3">
                {g.items.map((f, i) => {
                  const id = `${g.title}-${i}`;
                  return (
                    <div key={id} className="rounded-xl border border-border bg-card overflow-hidden">
                      <button
                        onClick={() => setOpen(open === id ? null : id)}
                        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                      >
                        <span className="text-sm font-medium text-foreground">{f.q}</span>
                        <ChevronDown className={`h-4 w-4 text-muted-foreground shrink-0 transition-transform ${open === id ? "rotate-180" : ""}`} />
                      </button>
                      {open === id && (
                        <div className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed">{f.a}</div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
