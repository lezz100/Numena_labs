import { Button } from "@/components/ui/Button";
import { primaryCta } from "@/data/navigation";

export function CtaBanner() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-secondary to-background p-10 sm:p-14">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(50% 80% at 90% 10%, rgba(96,165,250,0.35) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Let&apos;s build your competitive advantage.
            </h2>
            <p className="mt-2 max-w-md text-white/80">
              Start with a systems audit.
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
