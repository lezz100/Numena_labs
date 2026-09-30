import { Reveal } from "@/components/ui/Reveal";
import { numenaSystem } from "@/data/services";

export function NumenaSystem() {
  return (
    <section className="mx-auto max-w-[var(--content-max)] px-[var(--page-gutter)] py-[var(--space-section)]">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-[var(--space-6)]">
        {/* Reveal is inside the sticky div — transform on a descendant does not break position:sticky */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              {numenaSystem.eyebrow}
            </p>
            <h2 className="type-h2 mt-3">
              {numenaSystem.title}
            </h2>
          </Reveal>
        </div>

        <Reveal delay={80}>
          <div>
            <ol className="border-t border-border">
              {numenaSystem.steps.map((step, index) => (
                <li
                  key={step.title}
                  className="grid grid-cols-[2rem_1fr] items-baseline gap-x-4 gap-y-1.5 border-b border-border py-5 md:grid-cols-[2rem_minmax(0,1fr)_minmax(0,2fr)] md:gap-6"
                >
                  <span className="text-xs font-semibold text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-sm font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted md:col-start-3">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
            <p className="mt-6 border-l border-accent pl-4 text-sm leading-relaxed text-muted">
              {numenaSystem.result}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
