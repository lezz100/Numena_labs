import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { afyaHeroFeature } from "@/data/home";

export function CaseStudyFeature() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid w-full max-w-[var(--content-max)] gap-12 px-[var(--page-gutter)] py-[var(--space-section)] lg:grid-cols-12 lg:gap-[var(--space-6)]">
        <Reveal className="lg:col-span-5" direction="left">
          <SectionIntro
            eyebrow="Flagship system"
            title={afyaHeroFeature.title}
            intro="AfyaHero is the primary example of how Numena turns operational complexity into a connected system."
          />
          <Link
            href={afyaHeroFeature.href}
            className="group mt-8 inline-flex min-h-11 items-center gap-2 border-b border-accent pb-1 text-sm font-medium text-foreground transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
          >
            Inspect the AfyaHero case study
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </Reveal>

        <Reveal className="lg:col-span-7 lg:pt-2" delay={100} direction="right">
          <figure className="case-study-image relative isolate mb-5 min-h-64 overflow-hidden border border-border sm:min-h-72">
            <Image
              src="/images/afyahero-context.jpg"
              alt="A clinician using a mobile phone"
              fill
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="case-study-photo object-cover"
            />
            <figcaption className="type-label absolute bottom-4 left-4 z-10 border border-border-strong bg-canvas/95 px-3 py-2 text-accent">
              Healthcare operations context
            </figcaption>
          </figure>

          <div className="border border-border bg-surface p-6 sm:p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-b border-border pb-5">
              <p className="type-label text-accent">{afyaHeroFeature.name}</p>
              <p className="type-metadata text-muted">{afyaHeroFeature.industry}</p>
            </div>
            <div className="mt-7 grid gap-8 sm:grid-cols-2">
              <div>
                <h3 className="type-label text-foreground">The problem</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{afyaHeroFeature.problem}</p>
              </div>
              <div>
                <h3 className="type-label text-foreground">The system</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{afyaHeroFeature.system}</p>
              </div>
            </div>
            <div className="mt-8 border-t border-border pt-6">
              <h3 className="type-label text-foreground">Connected workflow</h3>
              <ul className="mt-4 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {afyaHeroFeature.workflow.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-muted">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
