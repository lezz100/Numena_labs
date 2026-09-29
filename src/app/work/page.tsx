import type { Metadata } from "next";
import Link from "next/link";
import { EditorialHeading } from "@/components/ui/EditorialHeading";
import { Section } from "@/components/ui/Section";
import { caseStudies } from "@/data/work";

export const metadata: Metadata = {
  title: "Systems in Practice | Numena Labs",
  description:
    "Explore AfyaHero, a Numena hospital management system designed around operational workflows that support patient care.",
};

export default function WorkPage() {
  return (
    <>
      <Section className="border-b border-border" grid="twelve">
        <div className="md:col-span-12 lg:col-span-8">
          <EditorialHeading
            as="h1"
            eyebrow="Systems in practice"
            title="A closer look at the systems Numena has defined around operational work."
            description="AfyaHero demonstrates how a connected operating system can bring key hospital workflows into one place."
          />
        </div>
      </Section>
      <Section>
        {caseStudies.map((study) => (
          <Link key={study.slug} href={`/work/${study.slug}`} className="group grid gap-5 border-y border-border py-7 transition-colors hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus md:grid-cols-[minmax(11rem,0.65fr)_minmax(0,1.35fr)_auto] md:items-end md:gap-10">
            <div><p className="type-label text-accent">{study.name}</p><p className="mt-2 text-sm text-muted">{study.industry}</p></div>
            <div><h2 className="type-h3">{study.title}</h2><p className="mt-3 max-w-[58ch] text-sm leading-relaxed text-muted">{study.description}</p></div>
            <span className="text-sm font-medium text-accent">View case study</span>
          </Link>
        ))}
      </Section>
    </>
  );
}
