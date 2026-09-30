import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { primaryCta } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Free Systems Audit & Pricing",
  description:
    "Numena Labs scopes every system to the specific workflows involved — no fixed packages. Every engagement starts with a free 30-minute Systems Audit that maps where manual work is accumulating before anything is proposed.",
};

const auditIncludes = [
  "A map of where manual work is accumulating — enquiries, follow-ups, reminders and coordination that currently depend on someone remembering",
  "Identification of which gaps a connected system would address and which require a different approach",
  "A prioritised starting point: the one area where a system would have the most immediate effect",
  "A plain-language summary of what a system would involve, what it would not cover and what it would cost to build",
  "All of the above delivered in a single 30-minute session — no second meeting required before you have answers.",
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Every system is scoped to your business."
        description="Numena Labs does not sell fixed packages. Pricing depends on the operational workflows involved, the channels the business uses and the scope of automation required — so every engagement starts with a free Systems Audit, not a quote."
      >
        <div className="mt-8">
          <Button href={primaryCta.href} showArrow>
            {primaryCta.label}
          </Button>
        </div>
      </PageHero>

      <section className="border-b border-border">
        <div className="mx-auto max-w-[var(--content-narrow)] px-[var(--page-gutter)] py-[var(--space-section)]">
          <Reveal className="rounded-panel border border-border bg-surface p-8 sm:p-10">
            <h2 className="text-2xl font-bold">Free Systems Audit</h2>
            <p className="mt-3 text-muted">
              A single 30-minute conversation. We ask about how your business
              handles enquiries, follow-up and daily work — then map where the
              manual work is and present what we find before the call ends.
            </p>
            <ul className="mt-8 space-y-4">
              {auditIncludes.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-muted"
                >
                  <span aria-hidden="true" className="mt-0.5 shrink-0 text-accent">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button
                href={primaryCta.href}
                showArrow
                className="w-full justify-center"
              >
                {primaryCta.label}
              </Button>
              <p className="mt-5 text-center text-xs text-muted">
                Most focused implementations start from KES 5,000. The audit gives you a figure for your specific scope.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
