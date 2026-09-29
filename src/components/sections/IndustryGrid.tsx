import Link from "next/link";
import { industries } from "@/data/industries";

export function IndustryGrid() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto w-full max-w-[var(--content-max)] px-[var(--page-gutter)] py-[var(--space-section)]">
        <div className="grid gap-3 pb-5 text-xs text-muted sm:grid-cols-[minmax(11rem,1fr)_minmax(12rem,0.9fr)_minmax(0,1.4fr)_auto] sm:gap-6">
          <p>System</p>
          <p>Industry context</p>
          <p>Operational focus</p>
          <span aria-hidden="true" />
        </div>
        <div className="border-t border-border">
          {industries.map((industry) => (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className="group grid gap-2 border-b border-border py-5 transition-colors hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus sm:grid-cols-[minmax(11rem,1fr)_minmax(12rem,0.9fr)_minmax(0,1.4fr)_auto] sm:items-center sm:gap-6"
            >
              <div>
                <p className="type-metadata text-muted">Desk system</p>
                <h2 className="mt-1 text-lg font-medium text-foreground">{industry.name}</h2>
              </div>
              <p className="text-sm text-muted">{industry.bestFor}</p>
              <p className="text-sm leading-relaxed text-muted">{industry.features.slice(0, 2).join(" and ")}</p>
              <span className="text-sm font-medium text-accent">View system</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
