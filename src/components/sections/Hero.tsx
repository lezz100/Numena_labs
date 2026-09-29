import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { primaryCta, secondaryCta } from "@/data/navigation";

const systemFlow = [
  { title: "Intake", description: "Capture and route requests." },
  { title: "Workflow", description: "Coordinate work across the team." },
  { title: "Follow-up", description: "Keep communication moving." },
  { title: "Visibility", description: "See what needs attention." },
];

export function Hero() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid w-full max-w-[var(--content-max)] gap-12 px-[var(--page-gutter)] pb-[var(--space-7)] pt-14 lg:grid-cols-12 lg:items-end lg:gap-[var(--space-6)] lg:pb-[var(--space-8)] lg:pt-20">
        <div className="lg:col-span-7">
          <p className="homepage-reveal type-label mb-5 text-accent">AI and automation systems studio</p>
          <h1 className="homepage-reveal max-w-full text-[clamp(2.6rem,4vw,3.6rem)] font-semibold leading-[1.03] tracking-[-0.045em] text-foreground" style={{ animationDelay: "80ms" }}>Practical AI operating systems for East African service businesses.</h1>
          <p className="homepage-reveal type-body-large mt-7 max-w-[57ch] text-muted" style={{ animationDelay: "160ms" }}>Numena connects intake, workflows, follow-up and operational visibility into systems teams can use every day.</p>
          <div className="homepage-reveal mt-8 flex flex-wrap gap-3" style={{ animationDelay: "240ms" }}>
            <Button href={primaryCta.href} showArrow>{primaryCta.label}</Button>
            <Button href={secondaryCta.href} variant="secondary" showArrow>{secondaryCta.label}</Button>
          </div>
        </div>

        <figure className="hero-visual homepage-reveal relative isolate min-h-[30rem] overflow-hidden border border-border bg-surface lg:col-span-5" aria-labelledby="hero-workflow-title" style={{ animationDelay: "180ms" }}>
          <Image src="/images/hero-operations.jpg" alt="Two people reviewing work together at a table" fill priority sizes="(min-width: 1024px) 38vw, 100vw" className="hero-photo object-cover" />
          <span className="hero-signal" aria-hidden="true" />
          <div className="hero-workflow absolute inset-x-5 bottom-5 z-10 border border-border-strong bg-canvas/95 p-5 sm:inset-x-7 sm:bottom-7 sm:p-6">
            <p id="hero-workflow-title" className="type-label text-accent">Operating system workflow</p>
            <ol className="mt-5 grid gap-x-5 gap-y-5 sm:grid-cols-2" aria-label="A connected operational workflow">
              {systemFlow.map((step) => (
                <li key={step.title} className="border-l border-border-strong pl-3">
                  <p className="text-base font-medium text-foreground">{step.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </figure>
      </div>
    </section>
  );
}
