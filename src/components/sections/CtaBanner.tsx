import { Button } from "@/components/ui/Button";
import { primaryCta } from "@/data/navigation";

export function CtaBanner() {
  return (
    <section className="mx-auto max-w-[var(--content-max)] px-[var(--page-gutter)] pb-[var(--space-section)]">
      <div className="relative overflow-hidden rounded-panel bg-gradient-to-br from-primary via-secondary to-background p-10 sm:p-14">
        <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Start by seeing the problem clearly.
            </h2>
            <p className="mt-2 max-w-md text-muted">
              A free Systems Audit maps where manual work is accumulating and
              what a connected system would change.
            </p>
          </div>
          <Button href={primaryCta.href} variant="light" showArrow>
            {primaryCta.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
