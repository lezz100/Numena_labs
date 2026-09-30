import { CardGrid } from "@/components/ui/CardGrid";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { industries } from "@/data/industries";

const deskStatus: Record<string, string> = {
  caredesk: "Built on AfyaHero · Live",
};

export function IndustryGrid() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-[var(--content-max)] px-[var(--page-gutter)] py-[var(--space-section)]">
        <CardGrid cols={3}>
          {industries.map((industry) => (
            <FeatureCard
              key={industry.slug}
              label={industry.name}
              sector={industry.bestFor}
              tagline={industry.tagline}
              items={industry.features}
              href={`/industries/${industry.slug}`}
              status={deskStatus[industry.slug] ?? "[STATUS PLACEHOLDER]"}
            />
          ))}
        </CardGrid>
      </div>
    </section>
  );
}
