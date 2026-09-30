import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

type CtaBandProps = {
  eyebrow?: string;
  title: string;
  description: string;
  cta: { label: string; href: string };
};

export function CtaBand({ eyebrow, title, description, cta }: CtaBandProps) {
  return (
    <section>
      <div className="mx-auto w-full max-w-[var(--content-max)] px-[var(--page-gutter)] py-[var(--space-section)]">
        <Reveal className="grid gap-8 border border-border bg-surface-elevated p-7 sm:p-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-12">
          <div>
            {eyebrow && (
              <p className="type-label mb-4 text-accent">{eyebrow}</p>
            )}
            <h2 className="type-h2 max-w-[20ch]">{title}</h2>
            <p className="type-body-large mt-5 max-w-[60ch] text-muted">
              {description}
            </p>
          </div>
          <Button href={cta.href} showArrow className="w-full sm:w-fit">
            {cta.label}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
