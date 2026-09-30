import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/ContactForm";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { contactDetails } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Book a Free Systems Audit",
  description:
    "Book a free Systems Audit with Numena Labs in Eldoret, Kenya. Reach us on WhatsApp at +254 700 888 719 or email numenalabs@outlook.com. We serve clinics, pharmacies, hotels and service businesses across East Africa.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Free Systems Audit"
        title="Start by seeing the problem clearly."
        description="A 30-minute conversation about how your business handles enquiries, follow-up and daily coordination. We map where the friction is before proposing anything."
      />

      <section className="border-b border-border">
        <div className="mx-auto max-w-[var(--content-max)] px-[var(--page-gutter)] py-[var(--space-section)]">
          <Reveal className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
            <div>
              <p className="type-label text-accent">What happens on the call</p>
              <h2 className="type-h3 mt-3">Thirty minutes, and you leave with answers.</h2>
              <p className="mt-4 leading-relaxed text-muted">
                We ask how enquiries reach you, who follows up and how payments
                are collected, then map where manual work is piling up. We walk
                you through AfyaHero so you can see a working system built for a
                healthcare provider in Eldoret. Before the call ends you get a
                prioritised starting point and a plain-language view of what a
                system would involve and cost.
              </p>

              <p className="type-label mt-10 text-accent">What to have ready</p>
              <p className="mt-3 leading-relaxed text-muted">
                A few sentences about your business and what is taking up your
                team&apos;s time. No documents, no preparation beyond that.
              </p>

              <p className="mt-10 border-l border-accent pl-4 text-sm text-muted">
                We reply within [RESPONSE TIME PLACEHOLDER].
              </p>

              <p className="type-label mt-10 text-accent">Reach us directly</p>

              <dl className="mt-4 space-y-4 text-sm">
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

            <div className="rounded-panel border border-border bg-surface p-8">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
