import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function JoinStrip() {
  return (
    <section className="py-16 bg-foreground">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-background" style={{ letterSpacing: "-0.02em" }}>
            Are you a professional astrologer?
          </h2>
          <p className="mt-2 text-sm md:text-base text-background/70 max-w-2xl">
            Join StarSeeker and reach thousands of seekers actively looking to book readings. Free basic listing. Premium options available.
          </p>
        </div>
        <Link
          to="/join"
          className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90 shrink-0"
        >
          Add Your Profile <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
