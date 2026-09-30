import type { CSSProperties } from "react";
import { CardGrid } from "@/components/ui/CardGrid";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { Reveal } from "@/components/ui/Reveal";
import { defaultDeskStatus, industries } from "@/data/industries";

export function IndustryGrid() {
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
          </CardGrid>
        </Reveal>
      </div>
    </section>
  );
}
