import Link from "next/link";
import { selectedWork } from "@/data/home";

export function SelectedWork() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="rounded-3xl border border-border bg-surface p-8 sm:p-12">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          {selectedWork.eyebrow}
        </p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          {selectedWork.name}
        </h2>
        <p className="mt-1 text-lg text-muted">{selectedWork.title}</p>
        <p className="mt-4 max-w-2xl text-muted">{selectedWork.description}</p>

        <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-4">
          {selectedWork.stats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="text-2xl font-bold text-foreground sm:text-3xl">
                {stat.value}
              </dd>
              <p className="mt-1 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </dl>

        <Link
          href={selectedWork.href}
          className="group mt-10 inline-flex items-center gap-2 text-sm font-medium text-accent"
        >
          View Project Case Study
          <span
            aria-hidden="true"
            className="transition-transform group-hover:translate-x-1"
          >
            →
          </span>
        </Link>
      </div>
    </section>
  );
}
