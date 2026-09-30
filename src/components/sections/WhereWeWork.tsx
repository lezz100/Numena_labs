import Link from "next/link";
import { CardGrid } from "@/components/ui/CardGrid";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { industries } from "@/data/industries";

// CareDesk first, then two that show the breadth: hospitality, professional services.
const featured = [
  industries.find((i) => i.slug === "caredesk")!,
  industries.find((i) => i.slug === "hospitalitydesk")!,
  industries.find((i) => i.slug === "professionaldesk")!,
];

export function WhereWeWork() {
  return (
    <div className="border-b border-border bg-surface">
      <div className="mx-auto w-full max-w-[var(--content-max)] px-[var(--page-gutter)] py-[var(--space-section)]">
        <Reveal>
          <SectionIntro
            eyebrow="Where we work"
            title="Systems shaped around specific businesses."
            intro="Each Desk system starts from the operational patterns of one industry — not a generic platform adapted after the fact."
          />
        </Reveal>

        <Reveal delay={80}>
          <CardGrid cols={3} className="mt-12">
            {featured.map((industry) => (
              <FeatureCard
                key={industry.slug}
                label={industry.name}
                sector={industry.bestFor}
                tagline={industry.tagline}
                items={industry.features}
                href={`/industries/${industry.slug}`}
              />
            ))}
          </CardGrid>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-8 flex items-center gap-2">
            <Link
              href="/industries"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors duration-200 hover:text-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
            >
              See all industries
              <span
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
            <span className="type-label text-muted">· 7 Desk systems</span>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
