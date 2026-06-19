import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function CTASection() {
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
    <section className="relative overflow-hidden py-24 md:py-32 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.18] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(1px 1px at 15% 25%, currentColor 50%, transparent 51%), radial-gradient(1.5px 1.5px at 80% 30%, currentColor 50%, transparent 51%), radial-gradient(1px 1px at 40% 70%, currentColor 50%, transparent 51%), radial-gradient(1.5px 1.5px at 70% 80%, currentColor 50%, transparent 51%)",
          color: "hsl(var(--primary))",
        }}
      />
      <div
        ref={ref}
        className="relative mx-auto max-w-3xl px-6 text-center"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(16px)",
          filter: visible ? "blur(0)" : "blur(4px)",
          transition: "all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)",
        }}
      >
        <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-5xl" style={{ letterSpacing: "-0.025em", textWrap: "balance" }}>
          Ready to discover what the stars have in store?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-muted-foreground text-lg">
          Browse our full directory of verified professional astrologers. Find your perfect practitioner in minutes — no account needed.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button variant="hero" size="xl" asChild>
            <Link to="/astrologers">
              Browse All Astrologers
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="xl" asChild>
            <Link to="/join">I'm an Astrologer</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
