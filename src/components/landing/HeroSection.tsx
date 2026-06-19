import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { SocialCarousel } from "./SocialCarousel";

export function HeroSection() {
  const { user } = useAuth();
  void user;


  return (
    <section className="relative overflow-hidden pt-20 pb-24 md:pt-28 md:pb-32">
      <div
        className="absolute inset-0 top-[30%]"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, oklch(0.94 0.04 230) 25%, oklch(0.94 0.04 230) 75%, transparent 100%)",
        }}
      />
      <div
        className="absolute inset-0 top-[30%]"
        style={{
          backgroundImage: `radial-gradient(circle, oklch(0.60 0.14 230 / 0.6) 1px, transparent 1px)`,
          backgroundSize: "22px 22px",
          maskImage:
            "radial-gradient(ellipse 100% 70% at 50% 55%, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 100% 70% at 50% 55%, black 30%, transparent 75%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-6 text-xs font-medium tracking-[0.2em] text-primary opacity-0 animate-fade-up">
            ✦ TRUSTED BY SEEKERS WORLDWIDE
          </p>
          <h1
            className="text-4xl font-semibold tracking-tight text-foreground opacity-0 animate-fade-up md:text-6xl"
            style={{ lineHeight: 1.1, letterSpacing: "-0.03em", textWrap: "balance" }}
          >
            Find the perfect astrologer for your journey
          </h1>

          <p
            className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground opacity-0 animate-fade-up-delay"
            style={{ textWrap: "pretty" }}
          >
            Browse 200+ professional astrologers for birth chart readings, compatibility,
            career guidance, and more. No booking fees. No middlemen.
          </p>

          <div className="mt-10 flex items-center justify-center gap-4 opacity-0 animate-fade-up-delay">
            <Button variant="hero" size="xl" asChild>
              <Link to="/astrologers">
                Find Astrologers
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>

          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground opacity-0 animate-fade-up-delay">
            <span><strong className="text-foreground">200+</strong> Verified Astrologers</span>
            <span className="hidden md:inline text-border">│</span>
            <span><strong className="text-foreground">30+</strong> Specialities</span>
            <span className="hidden md:inline text-border">│</span>
            <span><strong className="text-foreground">20+</strong> Countries</span>
            <span className="hidden md:inline text-border">│</span>
            <span><strong className="text-foreground">No</strong> Booking Fees</span>
          </div>
        </div>
      </div>

      <div className="relative">
        <SocialCarousel />
      </div>
    </section>
  );
}
