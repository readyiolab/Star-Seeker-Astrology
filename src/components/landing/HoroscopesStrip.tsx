import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { zodiacSigns } from "@/lib/starseeker-data";
import { Sparkles, Flame, Wind, Droplet, Mountain, ArrowRight } from "lucide-react";

// Custom daily predictions for all 12 signs to make it feel alive and premium
const dailyForecasts: Record<string, string> = {
  aries: "The fiery energy of Mars prompts you to initiate new ventures. Trust your gut feelings and take that bold first step. Opportunities for leadership and fresh beginnings are highly favored today.",
  taurus: "A stable earth alignment helps you ground your ambitions. Focus on consolidating your resources, organizing your space, and enjoying the sensory pleasures of life. Slow progress is still progress.",
  gemini: "Mercury sparks lively conversations and curious inquiries today. Keep your mind open to unexpected collaborations. A chance encounter or message could hold the key to a creative block.",
  cancer: "The lunar energy sensitizes your intuitive nature. Create a cozy sanctuary for yourself and listen closely to your inner emotional guidance. A family or home matter resolves with gentle patience.",
  leo: "The solar spotlight is shining warm, creative rays on your self-expression. Share your talents and let your generous heart lead the way. Your presence is magnetic and inspires those around you.",
  virgo: "Precision and clarity are your cosmic superpowers today. Use this analytical focus to refine schedules, organize details, and bring harmony to chaotic spaces. Your helpful nature will be deeply appreciated.",
  libra: "Relationships take center stage as Venus casts a peaceful, balancing glow. Strive for harmony in all interactions, engage in artistic pursuits, and make choices that honor both yourself and others.",
  scorpio: "A deep, transformative transit invites you to shed old habits and embrace personal alchemy. True power comes through vulnerability and authenticity. Keep your eyes on the long game.",
  sagittarius: "Jupiter inspires a thirst for wisdom, laughter, and adventure. Look at the bigger picture and explore new horizons of thought or philosophy. A breakthrough comes from daring to ask big questions.",
  capricorn: "Saturn rewards your steady discipline and long-term planning. A professional or personal goal is within reach if you stay committed to the climb. Trust the systems you've built.",
  aquarius: "Uranian currents spark innovative, systems-level ideas. Don't be afraid to stand out from the crowd and propose unconventional solutions today. The collective benefits from your unique vision.",
  pisces: "Neptune invites you to float in the currents of imagination and spirit. Your dreams and intuition are heightened; write down your insights. Compassion flows easily, healing old divides.",
};

const elementStyles: Record<string, {
  color: string;
  badgeBg: string;
  badgeBorder: string;
  badgeText: string;
  glowBg: string;
  cardBorder: string;
  cardBgActive: string;
  icon: React.ReactNode;
}> = {
  Fire: {
    color: "text-rose-500 dark:text-rose-400",
    badgeBg: "bg-rose-500/10 dark:bg-rose-500/20",
    badgeBorder: "border-rose-500/20 dark:border-rose-500/30",
    badgeText: "text-rose-600 dark:text-rose-400",
    glowBg: "from-rose-500/15 via-amber-500/5 to-transparent",
    cardBorder: "border-rose-500/30 dark:border-rose-500/40 shadow-rose-500/5 shadow-md",
    cardBgActive: "bg-rose-500/5 dark:bg-rose-500/10",
    icon: <Flame className="w-3.5 h-3.5 mr-1.5" />,
  },
  Earth: {
    color: "text-emerald-500 dark:text-emerald-400",
    badgeBg: "bg-emerald-500/10 dark:bg-emerald-500/20",
    badgeBorder: "border-emerald-500/20 dark:border-emerald-500/30",
    badgeText: "text-emerald-600 dark:text-emerald-400",
    glowBg: "from-emerald-500/15 via-teal-500/5 to-transparent",
    cardBorder: "border-emerald-500/30 dark:border-emerald-500/40 shadow-emerald-500/5 shadow-md",
    cardBgActive: "bg-emerald-500/5 dark:bg-emerald-500/10",
    icon: <Mountain className="w-3.5 h-3.5 mr-1.5" />,
  },
  Air: {
    color: "text-cyan-500 dark:text-cyan-400",
    badgeBg: "bg-cyan-500/10 dark:bg-cyan-500/20",
    badgeBorder: "border-cyan-500/20 dark:border-cyan-500/30",
    badgeText: "text-cyan-600 dark:text-cyan-400",
    glowBg: "from-cyan-500/15 via-indigo-500/5 to-transparent",
    cardBorder: "border-cyan-500/30 dark:border-cyan-500/40 shadow-cyan-500/5 shadow-md",
    cardBgActive: "bg-cyan-500/5 dark:bg-cyan-500/10",
    icon: <Wind className="w-3.5 h-3.5 mr-1.5" />,
  },
  Water: {
    color: "text-blue-500 dark:text-blue-400",
    badgeBg: "bg-blue-500/10 dark:bg-blue-500/20",
    badgeBorder: "border-blue-500/20 dark:border-blue-500/30",
    badgeText: "text-blue-600 dark:text-blue-400",
    glowBg: "from-blue-500/15 via-purple-500/5 to-transparent",
    cardBorder: "border-blue-500/30 dark:border-blue-500/40 shadow-blue-500/5 shadow-md",
    cardBgActive: "bg-blue-500/5 dark:bg-blue-500/10",
    icon: <Droplet className="w-3.5 h-3.5 mr-1.5" />,
  },
};

export function HoroscopesStrip() {
  const [activeSignSlug, setActiveSignSlug] = useState("aries");

  const activeSign = zodiacSigns.find((s) => s.slug === activeSignSlug) || zodiacSigns[0];
  const activeStyle = elementStyles[activeSign.element];
  const forecastText = dailyForecasts[activeSign.slug] || "";

  return (
    <section id="horoscopes" className="py-20 md:py-24 bg-gradient-to-b from-card/30 to-background border-y border-border relative overflow-hidden">
      {/* Decorative celestial background glows */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-xs font-semibold text-primary tracking-wider uppercase mb-4">
            <Sparkles className="w-3 h-3" />
            Daily Cosmic Guidance
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground" style={{ letterSpacing: "-0.03em" }}>
            Today's Horoscopes
          </h2>
          <p className="mt-4 text-muted-foreground text-base md:text-lg">
            Align your day with the stars. Select your zodiac sign below to view your personalized daily forecast.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          {/* Active Sign Detailed Console Card */}
          <div className="md:col-span-5 flex flex-col">
            <div className={`relative flex flex-col justify-between h-full rounded-2xl border bg-card/65 backdrop-blur-xl p-6 md:p-8 transition-all duration-500 shadow-xl overflow-hidden ${activeStyle.cardBorder}`}>
              {/* Element-themed radial background glow */}
              <div className={`absolute -right-20 -top-20 w-64 h-64 rounded-full bg-gradient-to-br ${activeStyle.glowBg} blur-3xl pointer-events-none transition-all duration-500`} />

              <div>
                {/* Header: Symbol & Sign Name */}
                <div className="flex items-start justify-between relative z-10">
                  <div>
                    <span className={`text-6xl md:text-7xl font-light inline-block filter drop-shadow-md select-none transition-all duration-500 ${activeStyle.color}`}>
                      {activeSign.symbol}
                    </span>
                    <h3 className="text-3xl font-bold text-foreground mt-3 tracking-tight">
                      {activeSign.name}
                    </h3>
                    <p className="text-sm font-medium text-muted-foreground mt-1">
                      {activeSign.dates}
                    </p>
                  </div>

                  {/* Element Badge */}
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${activeStyle.badgeBg} ${activeStyle.badgeBorder} ${activeStyle.badgeText} transition-all duration-500`}>
                    {activeStyle.icon}
                    {activeSign.element}
                  </span>
                </div>

                <hr className="my-6 border-border/70" />

                {/* Celestial Specs */}
                <div className="grid grid-cols-2 gap-4 my-6">
                  <div className="rounded-xl bg-background/50 border border-border/40 p-3">
                    <span className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider block">Ruling Planet</span>
                    <span className="text-sm font-bold text-foreground mt-1 block">{activeSign.ruler}</span>
                  </div>
                  <div className="rounded-xl bg-background/50 border border-border/40 p-3">
                    <span className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider block">Modality</span>
                    <span className="text-sm font-bold text-foreground mt-1 block">{activeSign.modality}</span>
                  </div>
                </div>

                {/* Horoscope Text */}
                <div className="space-y-3 relative z-10">
                  <span className="text-xs font-semibold tracking-wider text-primary uppercase block">Daily Forecast</span>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed font-normal antialiased min-h-[110px] transition-all duration-300">
                    {forecastText}
                  </p>
                </div>

                {/* Personality Traits */}
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {activeSign.traits.map((trait) => (
                    <span
                      key={trait}
                      className="text-[10px] font-semibold px-2.5 py-1 rounded-md bg-muted text-muted-foreground border border-border"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-4 border-t border-border/50">
                <Link
                  to="/horoscopes/$sign"
                  params={{ sign: activeSign.slug }}
                  className="group/btn inline-flex w-full items-center justify-between px-5 py-3.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:opacity-95 shadow-md shadow-primary/10 transition-all"
                >
                  <span>Explore {activeSign.name} Personality & Traits</span>
                  <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* Zodiac Selector Grid */}
          <div className="md:col-span-7 flex flex-col justify-center">
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
              {zodiacSigns.map((s) => {
                const isActive = s.slug === activeSignSlug;
                const signStyle = elementStyles[s.element];

                return (
                  <button
                    key={s.slug}
                    onClick={() => setActiveSignSlug(s.slug)}
                    className={`group relative flex flex-col items-center justify-center p-4 rounded-xl border text-center transition-all duration-300 cursor-pointer overflow-hidden ${
                      isActive
                        ? `${signStyle.cardBorder} ${signStyle.cardBgActive}`
                        : "border-border/60 bg-background/50 hover:bg-card hover:border-border hover:shadow-sm"
                    }`}
                  >
                    {/* Glowing highlight dot for active sign */}
                    {isActive && (
                      <span className="absolute top-2 right-2 flex h-1.5 w-1.5">
                        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${s.element === "Fire" ? "bg-rose-400" : s.element === "Earth" ? "bg-emerald-400" : s.element === "Air" ? "bg-cyan-400" : "bg-blue-400"}`}></span>
                        <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${s.element === "Fire" ? "bg-rose-500" : s.element === "Earth" ? "bg-emerald-500" : s.element === "Air" ? "bg-cyan-500" : "bg-blue-500"}`}></span>
                      </span>
                    )}

                    <span
                      className={`text-3xl mb-1.5 transition-all duration-300 transform group-hover:scale-110 ${
                        isActive ? signStyle.color : "text-muted-foreground group-hover:text-foreground"
                      }`}
                    >
                      {s.symbol}
                    </span>
                    <span
                      className={`text-xs font-semibold tracking-tight transition-colors ${
                        isActive ? "text-foreground font-bold" : "text-muted-foreground group-hover:text-foreground"
                      }`}
                    >
                      {s.name}
                    </span>
                    <span className="text-[9px] text-muted-foreground/80 mt-0.5 font-medium block">
                      {s.dates.split(" – ")[0]}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-8 text-center md:text-left flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-card/40 border border-border/50">
              <span className="text-xs text-muted-foreground">
                Want to read detailed yearly, weekly, and monthly reports?
              </span>
              <Link
                to="/horoscopes"
                className="inline-flex items-center text-xs font-bold text-primary hover:underline gap-1"
              >
                Read All Daily Horoscopes
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
