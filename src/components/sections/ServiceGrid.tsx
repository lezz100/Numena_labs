import { services } from "@/data/services";

export function ServiceGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
        Our Core Services
      </p>
      <h2 className="mt-3 max-w-2xl text-3xl font-bold sm:text-4xl">
        AI automation, digital marketing and business systems, built to grow
        with you.
      </h2>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.slug}
            id={service.slug}
            className="scroll-mt-24 rounded-2xl border border-border bg-surface p-6"
          >
            <h3 className="font-semibold text-foreground">{service.title}</h3>
            <p className="mt-2 text-sm text-muted">{service.description}</p>
            <ul className="mt-4 space-y-2">
              {service.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-muted"
                >
                  <span aria-hidden="true" className="mt-0.5 text-accent">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
