import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { primaryCta, secondaryCta } from "@/data/navigation";

const proofChips = [
  { strong: "WhatsApp, SMS & M-Pesa", rest: " — connected" },
  { strong: null, rest: "Clinics, hotels, pharmacies & service firms" },
  { strong: "Free", rest: " 30-minute Systems Audit" },
];

const systemFlow = [
  {
    title: "Intake",
    description:
      "A WhatsApp enquiry arrives, gets logged and reaches the right person automatically.",
  },
  {
    title: "Workflow",
    description:
      "The request becomes a task with a clear owner — no group chat, no missed handoff.",
  },
  {
    title: "Follow-up",
    description:
      "A confirmation goes out. A reminder follows 24 hours later. No one had to initiate either.",
  },
  {
    title: "Visibility",
    description:
      "A manager sees what came in, what is pending and what was not actioned.",
  },
];

export function Hero() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid w-full max-w-[var(--content-max)] gap-12 px-[var(--page-gutter)] pb-[var(--space-7)] pt-16 lg:grid-cols-12 lg:items-center lg:gap-[var(--space-6)] lg:pb-[var(--space-8)] lg:pt-24">

        {/* ─── Left: text + proof chips + CTAs ─── */}
        <div className="lg:col-span-7">
          <p className="homepage-reveal mb-6 font-display text-xs font-bold uppercase tracking-widest text-accent">
            Digital systems studio · East Africa
          </p>

          <h1
            className="homepage-reveal font-display text-[clamp(2.4rem,3.8vw,3.5rem)] font-bold leading-[1.04] tracking-[-0.04em] text-foreground"
            style={{ animationDelay: "80ms" }}
          >
            Missed follow-ups. Forgotten reminders. Enquiries that slipped.
          </h1>

          <p
            className="homepage-reveal mt-2 font-display text-[clamp(2.4rem,3.8vw,3.5rem)] font-bold leading-[1.04] tracking-[-0.04em] text-accent"
            style={{ animationDelay: "130ms" }}
          >
            {"{ Operational problems. Operational solutions. }"}
          </p>

          <p
            className="homepage-reveal type-body-large mt-8 max-w-[55ch] text-muted"
            style={{ animationDelay: "180ms" }}
          >
            Numena builds WhatsApp-first systems for clinics, pharmacies, hotels
            and service firms across East Africa — connecting intake, SMS
            reminders, M-Pesa billing and follow-up into one system teams can
            run every day.
          </p>

          <ul
            className="homepage-reveal mt-8 flex flex-wrap gap-3"
            aria-label="At a glance"
            style={{ animationDelay: "220ms" }}
          >
            {proofChips.map((chip, i) => (
              <li
                key={i}
                className="rounded-control border border-border bg-surface px-4 py-2.5 text-sm text-muted"
              >
                {chip.strong && (
                  <strong className="font-semibold text-foreground">
                    {chip.strong}
                  </strong>
                )}
                {chip.rest}
              </li>
            ))}
          </ul>

          <div
            className="homepage-reveal mt-8 flex flex-wrap gap-3"
            style={{ animationDelay: "260ms" }}
          >
            <Button href={primaryCta.href} showArrow>
              {primaryCta.label}
            </Button>
            <Button href={secondaryCta.href} variant="secondary" showArrow>
              {secondaryCta.label}
            </Button>
          </div>
        </div>

        {/* ─── Right: workflow visual ─── */}
        <figure
          className="hero-visual homepage-reveal relative isolate min-h-[30rem] overflow-hidden border border-border bg-surface lg:col-span-5"
          aria-labelledby="hero-workflow-title"
          style={{ animationDelay: "180ms" }}
        >
          <Image
            src="/images/hero-operations.jpg"
            alt="Two people reviewing work together at a table"
            fill
            priority
            sizes="(min-width: 1024px) 38vw, 100vw"
            className="hero-photo object-cover"
          />
          <span className="hero-signal" aria-hidden="true" />
          <div className="hero-workflow absolute inset-x-5 bottom-5 z-10 border border-border-strong bg-canvas/95 p-5 sm:inset-x-7 sm:bottom-7 sm:p-6">
            <p id="hero-workflow-title" className="type-label text-accent">
              Operating system workflow
            </p>
            <ol
              className="mt-5 grid gap-x-5 gap-y-5 sm:grid-cols-2"
              aria-label="A connected operational workflow"
            >
              {systemFlow.map((step) => (
                <li key={step.title} className="border-l border-border-strong pl-3">
                  <p className="text-base font-medium text-foreground">
                    {step.title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </figure>
      </div>
    </section>
  );
}
