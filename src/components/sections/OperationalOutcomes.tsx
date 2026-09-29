import type { CSSProperties } from "react";
import { EditorialHeading } from "@/components/ui/EditorialHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { operationalOutcomes } from "@/data/home";

export function OperationalOutcomes() {
  return (
    <Section className="border-b border-border" grid="twelve">
      <Reveal className="md:col-span-12 lg:col-span-5" direction="left">
        <EditorialHeading eyebrow="Operational diagnosis" title="The work behind better customer experiences." description="Numena starts with the operational friction that is affecting customers and teams, then designs the system around it." />
      </Reveal>
      <Reveal className="scroll-stagger md:col-span-12 lg:col-span-7" delay={100} direction="right">
        <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {operationalOutcomes.map((outcome, index) => (
            <article key={outcome.title} className="scroll-stagger-item border-t border-border pt-5" style={{ "--stagger-index": index } as CSSProperties}>
              <h3 className="type-h3">{outcome.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{outcome.problem}</p>
              <p className="mt-4 border-l border-accent pl-4 text-sm leading-relaxed text-foreground">{outcome.response}</p>
            </article>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
