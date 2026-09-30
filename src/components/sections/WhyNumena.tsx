import type { CSSProperties } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { whyNumena } from "@/data/services";

export function WhyNumena() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-[var(--content-max)] px-[var(--page-gutter)] py-[var(--space-section)]">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            What makes a Numena system different
          </p>
        </Reveal>

        <Reveal delay={80} className="scroll-stagger">
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {whyNumena.map((item, index) => (
              <div
                key={item.title}
                className="scroll-stagger-item"
                style={{ "--stagger-index": index } as CSSProperties}
              >
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
