import { Navbar } from "@/components/landing/Navbar";
import { FooterSection } from "@/components/landing/FooterSection";
import { PremiumCTA, type CTAVariant } from "@/components/landing/PremiumCTA";
import { Link, useRouterState } from "@tanstack/react-router";
import type { ReactNode } from "react";

function variantFromPath(pathname: string): CTAVariant {
  if (pathname.startsWith("/astrologers")) return "astrologers";
  if (pathname.startsWith("/sessions")) return "sessions";
  if (pathname.startsWith("/horoscopes")) return "horoscopes";
  if (pathname.startsWith("/countries")) return "countries";
  if (pathname.startsWith("/specialities")) return "specialities";
  if (pathname.startsWith("/blog")) return "blog";
  if (pathname.startsWith("/faq")) return "faq";
  if (pathname.startsWith("/about")) return "about";
  if (pathname.startsWith("/contact")) return "contact";
  if (pathname.startsWith("/join")) return "join";
  return "default";
}

export function SiteLayout({
  children,
  hideCta = false,
  ctaVariant,
}: {
  children: ReactNode;
  hideCta?: boolean;
  ctaVariant?: CTAVariant;
}) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const variant = ctaVariant ?? variantFromPath(pathname);
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">{children}</main>
      {!hideCta && <PremiumCTA variant={variant} />}
      <FooterSection />
    </div>
  );
}

type CTA = { label: string; to: string; params?: Record<string, string> };
type Stat = { value: string; label: string };

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  stats,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primaryCta?: CTA;
  secondaryCta?: CTA;
  stats?: Stat[];
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-primary/5 via-card/40 to-background">
      {/* Decorative starfield */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.18] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(1px 1px at 12% 22%, currentColor 50%, transparent 51%), radial-gradient(1px 1px at 78% 18%, currentColor 50%, transparent 51%), radial-gradient(1.5px 1.5px at 35% 70%, currentColor 50%, transparent 51%), radial-gradient(1px 1px at 88% 64%, currentColor 50%, transparent 51%), radial-gradient(1px 1px at 55% 38%, currentColor 50%, transparent 51%), radial-gradient(1.5px 1.5px at 22% 55%, currentColor 50%, transparent 51%), radial-gradient(1px 1px at 68% 85%, currentColor 50%, transparent 51%)",
          color: "hsl(var(--primary))",
        }}
      />
      <div
        aria-hidden
        className="absolute -top-32 left-1/2 -translate-x-1/2 h-72 w-[42rem] rounded-full bg-primary/15 blur-3xl pointer-events-none"
      />
      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28 text-center">
        {eyebrow && (
          <p className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[11px] font-medium tracking-[0.18em] text-primary uppercase">
            {eyebrow}
          </p>
        )}
        <h1
          className="text-4xl md:text-6xl font-semibold tracking-tight text-foreground"
          style={{ letterSpacing: "-0.025em", textWrap: "balance" }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className="mx-auto mt-5 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed"
            style={{ textWrap: "pretty" }}
          >
            {subtitle}
          </p>
        )}
        {(primaryCta || secondaryCta) && (
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {primaryCta && (
              <Link
                to={primaryCta.to as never}
                params={primaryCta.params as never}
                className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition hover:opacity-90"
              >
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link
                to={secondaryCta.to as never}
                params={secondaryCta.params as never}
                className="inline-flex items-center justify-center rounded-lg border border-border bg-card/70 px-5 py-2.5 text-sm font-medium text-foreground transition hover:border-primary/40 hover:text-primary"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        )}
        {stats && stats.length > 0 && (
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl font-semibold text-foreground">{s.value}</div>
                <div className="mt-0.5 text-[11px] uppercase tracking-wider text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
