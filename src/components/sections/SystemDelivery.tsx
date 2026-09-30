import type { CSSProperties } from "react";
import { CardGrid } from "@/components/ui/CardGrid";
import { Reveal } from "@/components/ui/Reveal";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { deliveryModel } from "@/data/home";

export function SystemDelivery() {
  return (
    <div className="border-b border-border bg-surface">
      <div className="mx-auto w-full max-w-[var(--content-max)] px-[var(--page-gutter)] py-[var(--space-section)]">
        <Reveal>
          <SectionIntro
            eyebrow="How we work"
            title="From operational friction to a working system."
            intro="The implementation path begins with the work people need to do, then connects the technology around it."
          />
        </Reveal>

        <Reveal delay={80} className="scroll-stagger mt-12">
          <CardGrid cols={2}>
            {deliveryModel.map((step, index) => (
              <article
                key={step.title}
                className="scroll-stagger-item flex flex-col border border-border bg-canvas p-6 transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-border-strong hover:shadow-card"
                style={{ "--stagger-index": index } as CSSProperties}
              >
                <span className="type-label text-accent/50">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="type-h3 mt-4">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </article>
            ))}
          </CardGrid>
        </Reveal>
      </div>
    </div>
  );
}
