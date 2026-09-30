import { processSteps } from "@/data/home";

export function ProcessSteps() {
  return (
    <section className="mx-auto max-w-[var(--content-max)] px-[var(--page-gutter)] py-[var(--space-section)]">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
        Our Process
      </p>
      <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
        How a system goes from audit to delivery.
      </h2>

      <div className="relative mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
        <div
          className="absolute top-6 hidden h-px w-full bg-border lg:block"
          aria-hidden="true"
        />
        {processSteps.map((step) => (
          <div key={step.number} className="relative">
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-panel border border-border bg-background text-sm font-semibold text-accent">
              {step.number}
            </div>
            <h3 className="mt-4 font-semibold text-foreground">
              {step.title}
            </h3>
            <p className="mt-2 text-sm text-muted">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
