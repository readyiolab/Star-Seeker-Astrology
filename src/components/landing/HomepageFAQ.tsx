import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How do I find an astrologer near me?",
    a: "Use the search bar at the top of the page. Enter your session type and preferred speciality, then browse results. Every listing includes city and country.",
  },
  {
    q: "Is it free to use StarSeeker?",
    a: "Completely free for seekers. No search fees, no booking commissions, no hidden charges. You browse, contact the astrologer directly, and handle payment with them personally.",
  },
  {
    q: "How much does an astrology reading typically cost?",
    a: "Pricing depends on the practitioner's experience, reading type, and duration. A 60-minute birth chart reading typically ranges from £60–£200. Annual forecasts and synastry readings can range £80–£300+. Always get a quote directly from the astrologer.",
  },
  {
    q: "What information do I need to provide for a reading?",
    a: "For most natal and birth chart readings you will need your exact date, time, and place of birth. The more accurate your birth time, the more precise the reading. Some session types (horary, compatibility) have different requirements — your astrologer will guide you.",
  },
];

export function HomepageFAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24 md:py-32 bg-card/40 border-t border-border">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center mb-12">
          <p className="text-xs font-medium tracking-[0.2em] text-primary uppercase">Quick Answers</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl" style={{ letterSpacing: "-0.02em" }}>
            Frequently asked questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="rounded-xl border border-border bg-background overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="text-sm font-medium text-foreground">{f.q}</span>
                <ChevronDown className={`h-4 w-4 text-muted-foreground shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && (
                <div className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed">{f.a}</div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link to="/faq" className="text-sm font-medium text-primary hover:underline">
            See All FAQs →
          </Link>
        </div>
      </div>
    </section>
  );
}
