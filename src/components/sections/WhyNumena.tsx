import { whyNumena } from "@/data/services";

export function WhyNumena() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
        Why Businesses Choose Numena Labs
      </p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {whyNumena.map((item) => (
          <div key={item.title}>
            <h3 className="font-semibold text-foreground">{item.title}</h3>
            <p className="mt-2 text-sm text-muted">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
