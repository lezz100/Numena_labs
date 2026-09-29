import type { CSSProperties } from "react";
import { deliveryModel } from "@/data/home";
import { EditorialHeading } from "@/components/ui/EditorialHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function SystemDelivery() {
  return (
    <Section className="border-b border-border" grid="twelve">
      <Reveal className="md:col-span-4" direction="left">
        <EditorialHeading
          eyebrow="How system work takes shape"
          title="Move from operational friction to a working system."
          description="The implementation path begins with the work people need to do, then connects the technology around it."
        />
      </Reveal>

      <Reveal as="div" className="scroll-stagger border-t border-border md:col-span-8" delay={100} direction="right">
        <ol>
        {deliveryModel.map((step, index) => (
          <li
            className="scroll-stagger-item grid gap-4 border-b border-border py-6 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] sm:gap-8"
            key={step.title}
            style={{ "--stagger-index": index } as CSSProperties}
          >
            <h3 className="type-h3 text-foreground">{step.title}</h3>
            <p className="type-body text-muted">{step.description}</p>
          </li>
        ))}
        </ol>
      </Reveal>
    </Section>
  );
}
