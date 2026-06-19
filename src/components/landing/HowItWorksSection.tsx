import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    icon: "🔍",
    title: "Search & Filter",
    description: "Use our search to filter by speciality, session type, tradition, and location. Find the right astrologer in seconds.",
  },
  {
    number: "02",
    icon: "👤",
    title: "Explore Profiles",
    description: "Browse rich astrologer profiles featuring bios, sample readings, reviews, and the life areas they specialise in.",
  },
  {
    number: "03",
    icon: "📩",
    title: "Book & Connect",
    description: "Send a direct enquiry to your chosen astrologer. Discuss your birth details and goals. Confirm your session. No platform fees, ever.",
  },
];

export function HowItWorksSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-foreground">
      <div className="mx-auto max-w-6xl px-6" ref={ref}>
        <div className="mx-auto max-w-2xl text-center mb-16">
          <p className="text-xs font-medium tracking-[0.2em] text-background/70 uppercase">Simple Process</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-background md:text-4xl" style={{ letterSpacing: "-0.02em" }}>
            Getting your reading has never been this easy
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="relative"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                filter: visible ? "blur(0)" : "blur(4px)",
                transition: `all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) ${i * 100}ms`,
              }}
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl">{step.icon}</span>
                <span className="text-3xl font-bold text-background/15">{step.number}</span>
              </div>
              <h3 className="mt-4 text-base font-semibold text-background">{step.title}</h3>
              <p className="mt-2 text-sm text-background/60 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
