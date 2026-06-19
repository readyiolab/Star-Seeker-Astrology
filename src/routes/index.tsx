import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { HoroscopesStrip } from "@/components/landing/HoroscopesStrip";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { CountriesStrip } from "@/components/landing/CountriesStrip";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { CTASection } from "@/components/landing/CTASection";
import { JoinStrip } from "@/components/landing/JoinStrip";
import { HomepageFAQ } from "@/components/landing/HomepageFAQ";
import { FooterSection } from "@/components/landing/FooterSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "StarSeeker — Find & Book a Professional Astrologer" },
      {
        name: "description",
        content:
          "Browse 200+ verified professional astrologers for birth chart readings, compatibility, career guidance, and more. No booking fees. No middlemen.",
      },
      { property: "og:title", content: "StarSeeker — Find & Book a Professional Astrologer" },
      {
        property: "og:description",
        content:
          "200+ verified astrologers across 30+ specialities and 20+ countries. Free for seekers, zero commission for practitioners.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background pb-1">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HoroscopesStrip />
      <HowItWorksSection />
      <CountriesStrip />
      <TestimonialsSection />
      <CTASection />
      <JoinStrip />
      <HomepageFAQ />
      <FooterSection />
    </div>
  );
}
