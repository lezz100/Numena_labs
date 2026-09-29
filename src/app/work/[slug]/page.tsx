import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SystemsAudit } from "@/components/sections/SystemsAudit";
import { EditorialHeading } from "@/components/ui/EditorialHeading";
import { Section } from "@/components/ui/Section";
import { caseStudies } from "@/data/work";

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
    return { title: "Case Study Not Found | Numena Labs" };
  }

  return {
    title: `${study.name} Case Study | Numena Labs`,
    description: study.description,
  };
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
      <Section className="border-b border-border" grid="twelve">
        <div className="md:col-span-12 lg:col-span-8">
          <Link href="/work" className="text-sm text-muted transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus">
            Back to systems in practice
          </Link>
          <EditorialHeading as="h1" eyebrow="Flagship system" title={study.name} description={study.description} className="mt-8" />
          <p className="mt-7 border-l border-accent pl-4 text-sm text-muted">{study.title} for the healthcare context.</p>
        </div>
      </Section>

      <Section className="border-b border-border" grid="twelve">
        <div className="md:col-span-12 lg:col-span-5">
          <EditorialHeading title="The operational problem" description={study.problem} />
        </div>
        <div className="md:col-span-12 lg:col-span-7 lg:pt-2">
          <div className="border border-border bg-surface p-6 sm:p-8">
            <h2 className="type-label text-foreground">The system</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">{study.system}</p>
          </div>
        </div>
      </Section>

      <Section className="border-b border-border" grid="twelve">
        <div className="md:col-span-12 lg:col-span-4">
          <EditorialHeading
            title="Defined workflow scope"
            description="The system is designed to coordinate the administrative work around patient care."
          />
        </div>
        <div className="md:col-span-12 lg:col-span-8">
          <ul className="grid gap-x-10 gap-y-0 border-t border-border sm:grid-cols-2">
            {study.features.map((feature) => (
              <li key={feature} className="border-b border-border py-4 text-sm leading-relaxed text-muted">{feature}</li>
            ))}
          </ul>
        </div>
      </Section>

      <Section className="border-b border-border" grid="twelve">
        <div className="md:col-span-12 lg:col-span-7">
          <EditorialHeading
            title="Evidence and outcomes"
            description="No performance figures are presented here until their source can be verified. Interface evidence is also being prepared."
          />
        </div>
      </Section>
      <SystemsAudit />
    </>
  );
}
