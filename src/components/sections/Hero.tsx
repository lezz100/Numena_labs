import { Button } from "@/components/ui/Button";
import { LogoMark } from "@/components/ui/Logo";
import { primaryCta, secondaryCta } from "@/data/navigation";

const proofChips = [
  { strong: "WhatsApp, SMS & M-Pesa", rest: " — connected" },
  { strong: null, rest: "Clinics, hotels, pharmacies & service firms" },
  { strong: "Free", rest: " 30-minute Systems Audit" },
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
            className="homepage-reveal mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            style={{ animationDelay: "260ms" }}
          >
            <Button href={primaryCta.href} showArrow className="w-full sm:w-auto justify-center">
              {primaryCta.label}
            </Button>
            <Button href={secondaryCta.href} variant="secondary" showArrow className="w-full sm:w-auto justify-center">
              {secondaryCta.label}
            </Button>
          </div>
        </div>

        {/* ─── Right: logo panel ─── */}
        <figure
          className="homepage-reveal relative isolate flex min-h-[30rem] items-center justify-center overflow-hidden border border-border bg-canvas lg:col-span-5"
          aria-hidden="true"
          style={{ animationDelay: "180ms" }}
        >
          <div className="relative flex flex-col items-center gap-5">
            <div
              className="absolute -inset-20 -z-10 rounded-full"
              style={{ background: "radial-gradient(ellipse at center, rgb(183 200 124 / 0.10) 0%, transparent 68%)" }}
            />
            <LogoMark className="h-28 w-28" />
            <div className="flex flex-col items-center gap-1 leading-none">
              <span className="font-display text-2xl font-bold tracking-[0.12em] text-foreground">
                NUMENA
              </span>
              <span className="font-display text-[11px] font-medium tracking-[0.45em] text-muted">
                LABS
              </span>
            </div>
          </div>
        </figure>
      </div>
    </section>
  );
}
