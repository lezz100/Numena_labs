import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { SystemsAudit } from "@/components/sections/SystemsAudit";
import { Reveal } from "@/components/ui/Reveal";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { caseStudies } from "@/data/work";
import { pageMetadata } from "@/lib/site";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}

export async function generateMetadata(
  props: PageProps<"/work/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const study = getCaseStudy(slug);

  if (!study) {
    return { title: "Case Study Not Found" };
  }

  return pageMetadata({
    title: `${study.name}: ${study.title}`,
    description: `${study.description} Built by Numena Labs for a ${study.industry.toLowerCase()} provider in East Africa.`,
    path: `/work/${study.slug}`,
  });
}

export default async function CaseStudyPage(
  props: PageProps<"/work/[slug]">
) {
  const { slug } = await props.params;
  const study = getCaseStudy(slug);

  if (!study) {
    notFound();
  }

  return (
    <>
      {/* Hero */}
      <PageHero
        eyebrow={study.industry}
        title={study.name}
        description={study.description}
      >
        <p className="mx-auto mt-6 max-w-xl border-l border-accent pl-4 text-left text-sm text-muted">
          {study.title}
        </p>
        <div className="mt-8">
          <Link
            href="/work"
            className="text-sm font-medium text-accent hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
          >
            ← Back to systems in practice
          </Link>
        </div>
      </PageHero>

      {/* Context — who uses it, what existed before */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto w-full max-w-[var(--content-max)] px-[var(--page-gutter)] py-[var(--space-section)]">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)]">
            <Reveal>
              <SectionIntro
                eyebrow="Context"
                title="Who uses it."
                intro={study.context.who}
              />
            </Reveal>
            <Reveal delay={80}>
              <p className="type-label mb-5 text-foreground">
                Before {study.name}
              </p>
              <ul className="border-t border-border">
                {study.context.before.map((item) => (
                  <li
                    key={item}
                    className="border-b border-border py-4 text-sm leading-relaxed text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* The operational problem + what we built */}
      <section className="border-b border-border">
        <div className="mx-auto w-full max-w-[var(--content-max)] px-[var(--page-gutter)] py-[var(--space-section)]">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
            <Reveal>
              <SectionIntro
                eyebrow="The problem"
                title="The operational problem."
              />
            </Reveal>
            <Reveal delay={80} className="lg:pt-1">
              <p className="text-lg leading-relaxed text-muted">
                {study.problem}
              </p>
              <div className="mt-8 border border-border bg-surface p-6 sm:p-8">
                <p className="type-label mb-4 text-foreground">What we built</p>
                <p className="leading-relaxed text-muted">{study.system}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* How it's used day to day */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto w-full max-w-[var(--content-max)] px-[var(--page-gutter)] py-[var(--space-section)]">
          <Reveal>
            <SectionIntro
              eyebrow="In practice"
              title="How it's used day to day."
              intro="Each step below is a real action the system performs or enables during a typical working day."
              className="mb-12"
            />
          </Reveal>
          <Reveal delay={80}>
            <ol className="border-t border-border">
              {study.dailyUse.map((step, i) => (
                <li
                  key={i}
                  className="grid grid-cols-[2rem_1fr] gap-4 border-b border-border py-5"
                >
                  <span className="text-xs font-semibold text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm leading-relaxed text-muted">{step}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* System scope */}
      <section className="border-b border-border">
        <div className="mx-auto w-full max-w-[var(--content-max)] px-[var(--page-gutter)] py-[var(--space-section)]">
          <Reveal>
            <SectionIntro
              eyebrow="System scope"
              title="The workflow areas the system is designed to coordinate."
              className="mb-10"
            />
          </Reveal>
          <Reveal delay={80}>
            <ul className="grid border-t border-border sm:grid-cols-2">
              {study.features.map((feature) => (
                <li
                  key={feature}
                  className="border-b border-border py-4 text-sm leading-relaxed text-muted sm:pr-10"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {study.screenshots && study.screenshots.length > 0 && (
        <section className="border-b border-border bg-surface">
          <div className="mx-auto w-full max-w-[var(--content-max)] px-[var(--page-gutter)] py-[var(--space-section)]">
            <Reveal>
              <SectionIntro
                eyebrow="Screenshots"
                title="The system in use."
                className="mb-10"
              />
            </Reveal>
            <Reveal delay={80}>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {study.screenshots.map((shot) => (
                  <figure
                    key={shot.src}
                    className="relative aspect-video overflow-hidden border border-border"
                  >
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                      className="object-cover"
                    />
                  </figure>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* Results — only when resultsPublished is true */}
      {study.resultsPublished && (
        <section className="border-b border-border">
          <div className="mx-auto w-full max-w-[var(--content-max)] px-[var(--page-gutter)] py-[var(--space-section)]">
            <Reveal>
              <SectionIntro
                eyebrow="Results"
                title="The data behind the system."
                intro="These figures are drawn from the client's reporting view and confirmed against operational records."
                className="mb-10"
              />
            </Reveal>
            <Reveal delay={80}>
              <ul className="border-t border-border">
                {study.results.map((metric) => (
                  <li
                    key={metric.label}
                    className="grid gap-3 border-b border-border py-6 sm:grid-cols-[1fr_auto] sm:items-start sm:gap-8"
                  >
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {metric.label}
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted">
                        {metric.question}
                      </p>
                    </div>
                    <span className="shrink-0 rounded border border-border px-2.5 py-1 text-xs font-medium text-accent">
                      {metric.placeholder}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>
      )}

      <SystemsAudit />
    </>
  );
}
