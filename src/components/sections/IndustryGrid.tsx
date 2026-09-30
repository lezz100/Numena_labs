import type { CSSProperties } from "react";
import { Button } from "@/components/ui/Button";
import { CardGrid } from "@/components/ui/CardGrid";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { Reveal } from "@/components/ui/Reveal";
import { defaultDeskStatus, industries } from "@/data/industries";
import { primaryCta } from "@/data/navigation";

// Static class maps so Tailwind can see every span it might emit.
const smSpan: Record<number, string> = { 1: "sm:col-span-1", 2: "sm:col-span-2" };
const lgSpan: Record<number, string> = { 1: "lg:col-span-1", 2: "lg:col-span-2", 3: "lg:col-span-3" };

// Span that fills the rest of the last row; a full row when the cards divide evenly.
function fillSpan(count: number, cols: number) {
  return cols - (count % cols);
}

export function IndustryGrid() {
  const tileSpan = `${smSpan[fillSpan(industries.length, 2)]} ${lgSpan[fillSpan(industries.length, 3)]}`;

  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-[var(--content-max)] px-[var(--page-gutter)] py-[var(--space-section)]">
        <Reveal className="scroll-stagger">
          <CardGrid cols={3}>
            {industries.map((industry, index) => (
              // Wrapper carries the stagger transform so the card's hover lift stays independent.
              <div
                key={industry.slug}
                className="scroll-stagger-item grid"
                style={{ "--stagger-index": index } as CSSProperties}
              >
                <FeatureCard
                  label={industry.name}
                  sector={industry.bestFor}
                  tagline={industry.tagline}
                  items={industry.features}
                  href={`/industries/${industry.slug}`}
                  status={industry.status ?? defaultDeskStatus}
                />
              </div>
            ))}

            <div
              className={`scroll-stagger-item flex flex-col justify-between gap-6 border border-accent/25 bg-accent/5 p-6 sm:p-8 ${tileSpan}`}
              style={{ "--stagger-index": industries.length } as CSSProperties}
            >
              <div>
                <h2 className="type-h3">Don&apos;t see your industry?</h2>
                <p className="mt-3 max-w-[48ch] text-sm leading-relaxed text-muted">
                  Most service businesses share the same patterns: enquiries
                  that need a reply, bookings that need a reminder and payments
                  that need chasing. The audit shows which parts of an existing
                  Desk fit your work.
                </p>
              </div>
              <Button href={primaryCta.href} showArrow className="w-fit">
                {primaryCta.label}
              </Button>
            </div>
          </CardGrid>
        </Reveal>
      </div>
    </section>
  );
}
