import { numenaSystem } from "@/data/services";

export function NumenaSystem() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="rounded-3xl border border-border bg-surface p-8 sm:p-12">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          {numenaSystem.eyebrow}
        </p>
        <h2 className="mt-3 max-w-2xl text-2xl font-bold sm:text-3xl">
          {numenaSystem.title}
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {numenaSystem.steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-xl border border-border bg-background p-5"
            >
              <span className="text-xs font-semibold text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-1 text-xs text-muted">{step.description}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-accent">
          ★ Result: {numenaSystem.result}
        </p>
      </div>
    </section>
  );
}
