import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/ContactForm";
import { contactDetails } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Contact | Numena Labs",
  description:
    "Book a free systems efficiency audit or get in touch with Numena Labs about AI automation for your business.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Book a Free Systems Audit
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight">
            Let&apos;s build your competitive advantage.
          </h1>
          <p className="mt-4 text-muted">
            30-minute call. Zero obligation. Tell us about your business and
            we&apos;ll show you exactly where you&apos;re losing time, leads
            and money — and how to fix it.
          </p>

          <dl className="mt-10 space-y-4 text-sm">
            <div>
              <dt className="font-medium text-foreground">Email</dt>
              <dd>
                <a
                  href={`mailto:${contactDetails.email}`}
                  className="text-muted hover:text-accent"
                >
                  {contactDetails.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-medium text-foreground">WhatsApp / Phone</dt>
              <dd>
                <a
                  href={contactDetails.whatsapp}
                  className="text-muted hover:text-accent"
                >
                  {contactDetails.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-medium text-foreground">Location</dt>
              <dd className="text-muted">{contactDetails.location}</dd>
            </div>
          </dl>
        </div>

        <div className="rounded-3xl border border-border bg-surface p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
