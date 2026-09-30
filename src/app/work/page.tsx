import type { Metadata } from "next";
import Link from "next/link";
import { SystemsAudit } from "@/components/sections/SystemsAudit";
import { Reveal } from "@/components/ui/Reveal";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { caseStudies } from "@/data/work";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Systems in Practice",
  description:
    "Explore AfyaHero, a Numena hospital management system designed around operational workflows that support patient care.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto w-full max-w-[var(--content-max)] px-[var(--page-gutter)] py-[var(--space-section)]">
          <Reveal>
            <p className="type-label mb-3 text-accent">Systems in practice</p>
            <h1 className="type-h1 max-w-[22ch]">
              A closer look at the systems Numena has defined around operational work.
            </h1>
            <p className="type-body-large mt-4 max-w-[60ch] text-muted">
              AfyaHero demonstrates how a connected operating system can bring key hospital workflows into one place.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className="mx-auto w-full max-w-[var(--content-max)] px-[var(--page-gutter)] py-[var(--space-section)]">
          <Reveal>
            <SectionIntro eyebrow="Case studies" title="Systems we have built." className="mb-10" />
          </Reveal>
          <Reveal delay={80}>
            {caseStudies.map((study) => (
              <Link
                key={study.slug}
                href={`/work/${study.slug}`}
                className="group grid gap-5 border border-border bg-canvas p-6 transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-1 hover:border-accent hover:shadow-card-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus sm:p-8 md:grid-cols-[minmax(0,0.65fr)_minmax(0,1.35fr)_auto] md:items-end md:gap-10"
              >
                <div>
                  <p className="type-label text-accent">{study.name}</p>
                  <p className="mt-2 text-sm text-muted">{study.industry}</p>
                </div>
                <div>
                  <h2 className="type-h3">{study.title}</h2>
                  <p className="mt-3 max-w-[58ch] text-sm leading-relaxed text-muted">{study.description}</p>
                </div>
                <span className="inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-accent">
                  View case study
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      <SystemsAudit />
    </>
  );
}
