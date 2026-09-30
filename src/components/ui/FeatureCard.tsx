import Link from "next/link";

type FeatureCardProps = {
  label: string;
  sector: string;
  tagline: string;
  items: string[];
  href: string;
  status?: string;
};

export function FeatureCard({
  label,
  sector,
  tagline,
  items,
  href,
  status,
}: FeatureCardProps) {
  return (
    <article className="group flex flex-col border border-border bg-canvas transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-1 hover:border-accent hover:shadow-card-hover">
      {/* Stack label and sector vertically on mobile to prevent overflow at 360px */}
      <div className="flex flex-col gap-2 border-b border-border p-5 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <p className="text-base font-semibold text-foreground transition-colors duration-200 group-hover:text-accent">
          {label}
        </p>
        <div className="flex flex-col gap-1.5 sm:shrink-0 sm:items-end">
          <p className="type-label text-muted">{sector}</p>
          {status && (
            <p className="type-label text-muted/60">{status}</p>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-5 p-5">
        <p className="text-sm leading-relaxed text-muted">{tagline}</p>

        <ul className="mt-auto space-y-2 border-t border-border pt-4">
          {items.slice(0, 4).map((item) => (
            <li key={item} className="flex items-center gap-2.5 text-sm text-muted">
              <span
                className="h-px w-3 shrink-0 bg-border-strong"
                aria-hidden="true"
              />
              {item}
            </li>
          ))}
        </ul>

        {/* min-h-[2.75rem] ensures a 44px touch target on the link */}
        <Link
          href={href}
          className="group/link inline-flex min-h-[2.75rem] items-center gap-1.5 text-sm font-medium text-accent transition-colors duration-200 hover:text-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
        >
          Learn more
          <span
            aria-hidden="true"
            className="transition-transform group-hover/link:translate-x-1"
          >
            →
          </span>
        </Link>
      </div>
    </article>
  );
}
