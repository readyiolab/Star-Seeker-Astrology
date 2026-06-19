import { useEffect, useState } from "react";
import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote:
      "My birth chart reading with an astrologer I found on StarSeeker changed my perspective on my career path completely. The insight was uncanny and the session felt deeply personal.",
    name: "Priya M.",
    city: "Mumbai, India",
    type: "Birth Chart Reading",
  },
  {
    quote:
      "I was sceptical about astrology but booked a synastry reading for my relationship. The astrologer explained our chart dynamics in a way that genuinely made us understand each other better.",
    name: "Rachel & Tom K.",
    city: "London, UK",
    type: "Compatibility Reading",
  },
  {
    quote:
      "I booked an annual forecast reading and it was the best investment I made all year. Every major theme the astrologer identified played out exactly as described.",
    name: "James O.",
    city: "New York, USA",
    type: "Annual Forecast",
  },
];

export function TestimonialsSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-background to-card/10 overflow-hidden border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">What Seekers Say</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-5xl" style={{ letterSpacing: "-0.03em" }}>
            Real reviews from real readings
          </h2>
          <p className="mt-4 text-muted-foreground text-base md:text-lg">
            Hear from seekers who found clarity, direction, and connection through StarSeeker.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 md:px-12">
          <Carousel
            setApi={setApi}
            opts={{
              loop: true,
              align: "center",
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((t, idx) => {
                const isActive = current === idx;
                return (
                  <CarouselItem
                    key={t.name}
                    className="pl-4 basis-full md:basis-11/12 lg:basis-5/6 transition-all duration-500 ease-out"
                    style={{
                      transform: isActive ? "scale(1)" : "scale(0.95)",
                      opacity: isActive ? 1 : 0.6,
                    }}
                  >
                    <figure className="relative h-full rounded-2xl border border-border bg-card/60 backdrop-blur-md p-8 md:p-12 flex flex-col justify-between shadow-xl overflow-hidden min-h-[300px]">
                      {/* Decorative quote mark */}
                      <Quote className="absolute -top-4 -left-2 w-28 h-28 text-primary/5 rotate-12 pointer-events-none select-none" />

                      <div className="relative z-10">
                        {/* Rating */}
                        <div className="flex gap-0.5 text-amber-500 mb-6 justify-center md:justify-start">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-current" />
                          ))}
                        </div>

                        {/* Quote */}
                        <blockquote className="text-lg md:text-xl font-medium leading-relaxed text-foreground text-center md:text-left italic antialiased">
                          "{t.quote}"
                        </blockquote>
                      </div>

                      {/* Author Info */}
                      <figcaption className="mt-8 pt-6 border-t border-border/80 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
                        <div className="text-center md:text-left">
                          <div className="font-bold text-base text-foreground">{t.name}</div>
                          <div className="text-xs text-muted-foreground mt-0.5">{t.city}</div>
                        </div>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold bg-primary/10 text-primary border border-primary/20">
                          {t.type}
                        </span>
                      </figcaption>
                    </figure>
                  </CarouselItem>
                );
              })}
            </CarouselContent>

            {/* Navigation buttons */}
            <div className="hidden md:block">
              <CarouselPrevious className="absolute -left-4 border-primary/20 hover:bg-primary/5 hover:border-primary/40 text-primary h-10 w-10 transition-all shadow-md" />
              <CarouselNext className="absolute -right-4 border-primary/20 hover:bg-primary/5 hover:border-primary/40 text-primary h-10 w-10 transition-all shadow-md" />
            </div>
          </Carousel>
        </div>

        {/* Custom Pagination Indicator Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: count }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => api?.scrollTo(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                current === idx ? "w-8 bg-primary" : "w-2.5 bg-muted hover:bg-muted-foreground/30"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
