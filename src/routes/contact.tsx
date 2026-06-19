import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Mail, MessageCircle, Check } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact StarSeeker" },
      { name: "description", content: "Get in touch with the StarSeeker team. We typically reply within one business day." },
      { property: "og:title", content: "Contact StarSeeker" },
      { property: "og:description", content: "Get in touch. We reply within one business day." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <PageHeader eyebrow="Contact" title="Get in Touch"
        subtitle="Have a question about a listing? Need help finding the right astrologer? Or are you a practitioner with a query about your profile? We're here to help."
        primaryCta={{ label: "Visit our FAQ", to: "/faq" }}
        secondaryCta={{ label: "For astrologers", to: "/join" }}
      />
      <section className="py-12">
        <div className="mx-auto max-w-5xl px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-5">
            <div className="rounded-xl border border-border bg-card p-5">
              <Mail className="h-5 w-5 text-primary" />
              <h3 className="mt-3 text-sm font-semibold">Email</h3>
              <p className="text-sm text-muted-foreground mt-1">hello@starseeker.com</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-5">
              <MessageCircle className="h-5 w-5 text-primary" />
              <h3 className="mt-3 text-sm font-semibold">For astrologers</h3>
              <p className="text-sm text-muted-foreground mt-1">practitioners@starseeker.com</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="text-sm font-semibold">Quick links</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                <li><Link to="/astrologers" className="hover:text-foreground">Browse all astrologers</Link></li>
                <li><Link to="/horoscopes" className="hover:text-foreground">Daily horoscopes</Link></li>
                <li><Link to="/specialities" className="hover:text-foreground">Browse by speciality</Link></li>
                <li><Link to="/faq" className="hover:text-foreground">FAQ</Link></li>
              </ul>
            </div>
          </div>

          <div className="md:col-span-2 rounded-xl border border-border bg-card p-6">
            {sent ? (
              <div className="text-center py-10">
                <Check className="h-10 w-10 text-primary mx-auto" />
                <h3 className="mt-4 text-lg font-semibold">Message received</h3>
                <p className="mt-2 text-sm text-muted-foreground">Thank you — we'll be in touch within one business day.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4">
                <h3 className="text-base font-semibold">Send us a message</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Name</label>
                    <input required className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Email</label>
                    <input required type="email" className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Subject</label>
                  <input required className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Message</label>
                  <textarea required rows={6} className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm" />
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
