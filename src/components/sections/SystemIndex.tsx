import type { CSSProperties } from "react";
import Link from "next/link";
import { EditorialHeading } from "@/components/ui/EditorialHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { industries } from "@/data/industries";

export function SystemIndex() {
  return (
    <Section className="border-b border-border">
      <Reveal>
        <EditorialHeading eyebrow="Systems catalogue" title="One system approach, shaped for the business in front of it." description="The Desk family applies the same operational thinking across service businesses with different customer journeys." />
      </Reveal>
      <Reveal className="scroll-stagger mt-12" delay={80}>
        {industries.map((system, index) => (
          <Link key={system.slug} href={`/industries/${system.slug}`} className={`scroll-stagger-item group grid gap-2 py-5 transition-colors hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus sm:grid-cols-[minmax(11rem,1fr)_minmax(12rem,0.9fr)_minmax(0,1.4fr)_auto] sm:items-center sm:gap-6 ${index > 0 ? "border-t border-border" : ""}`} style={{ "--stagger-index": index } as CSSProperties}>
            <h3 className="text-lg font-medium text-foreground">{system.name}</h3>
            <p className="text-sm text-muted">{system.bestFor}</p>
            <p className="text-sm leading-relaxed text-muted">{system.features.slice(0, 2).join(" and ")}</p>
            <span aria-hidden="true" className="text-accent transition-transform group-hover:translate-x-1">→</span>
          </Link>
        ))}
      </Reveal>
    </Section>
  );
}
