import type { CSSProperties } from "react";
import { CardGrid } from "@/components/ui/CardGrid";
import { Reveal } from "@/components/ui/Reveal";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { operationalOutcomes } from "@/data/home";

export function OperationalOutcomes() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-[var(--content-max)] px-[var(--page-gutter)] py-[var(--space-section)]">
        <Reveal>
          <SectionIntro
            eyebrow="Where the friction is"
            title="The manual work that costs your business every day."
            intro="Numena starts with the specific operational problems before designing a system around them."
          />
        </Reveal>

        <Reveal delay={80} className="scroll-stagger mt-12">
          <CardGrid cols={2}>
            {operationalOutcomes.map((outcome, index) => (
              <article
                key={outcome.title}
                className="scroll-stagger-item flex flex-col border border-border p-6 transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-border-strong hover:shadow-card"
                style={{ "--stagger-index": index } as CSSProperties}
              >
                <span className="type-label text-accent/50">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="type-h3 mt-4">{outcome.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {outcome.problem}
                </p>
                <p className="mt-5 border-l border-accent pl-4 text-sm leading-relaxed text-foreground">
                  {outcome.response}
                </p>
              </article>
            ))}
          </CardGrid>
        </Reveal>
      </div>
    </section>
  );
}
