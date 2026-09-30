import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SystemsAudit } from "@/components/sections/SystemsAudit";
import { EditorialHeading } from "@/components/ui/EditorialHeading";
import { Section } from "@/components/ui/Section";
import { industries } from "@/data/industries";

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

function getIndustry(slug: string) {
  return industries.find((industry) => industry.slug === slug);
}

export async function generateMetadata(
  props: PageProps<"/industries/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const industry = getIndustry(slug);

  if (!industry) {
    return { title: "Industry Not Found" };
  }

  return {
    title: `${industry.name} — ${industry.bestFor}`,
    description: `${industry.tagline} Numena's ${industry.name} connects ${industry.features.slice(0, 3).map(f => f.charAt(0).toLowerCase() + f.slice(1)).join(", ")} for ${industry.bestFor.toLowerCase()} in Kenya and East Africa.`,
  };
}

export default async function IndustryDetailPage(
  props: PageProps<"/industries/[slug]">
) {
  const { slug } = await props.params;
  const industry = getIndustry(slug);

  if (!industry) {
    notFound();
  }

  return (
    <>
      <Section className="border-b border-border" grid="twelve">
        <div className="md:col-span-12 lg:col-span-8">
          <Link href="/industries" className="text-sm text-muted transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus">
            Back to Desk systems
          </Link>
          <EditorialHeading
            as="h1"
            eyebrow="Desk system"
            title={industry.name}
            description={industry.tagline}
            className="mt-8"
          />
          <p className="mt-7 border-l border-accent pl-4 text-sm text-muted">
            Intended for {industry.bestFor}.
          </p>
        </div>
      </Section>

      <Section className="border-b border-border" grid="twelve">
        <div className="md:col-span-12 lg:col-span-4">
          <EditorialHeading
            title="System context"
            description="This catalogue entry outlines the workflow scope currently defined for this system."
          />
        </div>
        <div className="md:col-span-12 lg:col-span-8">
          <h2 className="type-label text-foreground">System capabilities</h2>
          <ul className="mt-6 grid gap-x-10 gap-y-0 border-t border-border sm:grid-cols-2">
            {industry.features.map((feature) => (
              <li key={feature} className="border-b border-border py-4 text-sm leading-relaxed text-muted">
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section className="border-b border-border" grid="twelve">
        <div className="md:col-span-12 lg:col-span-7">
          <EditorialHeading
            title="A system begins with the workflow, not the software."
            description="The right implementation depends on the requests a team receives, the work that follows and the information managers need to see."
          />
        </div>
      </Section>
      <SystemsAudit />
    </>
  );
}
