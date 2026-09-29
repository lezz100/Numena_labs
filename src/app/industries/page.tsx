import type { Metadata } from "next";
import { IndustryGrid } from "@/components/sections/IndustryGrid";
import { SystemsAudit } from "@/components/sections/SystemsAudit";
import { EditorialHeading } from "@/components/ui/EditorialHeading";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Desk Systems Catalogue | Numena Labs",
  description:
    "Explore Numena Desk systems, designed around the intake, workflows, follow-up and operational visibility needs of service businesses.",
};

export default function IndustriesPage() {
  return (
    <>
      <Section className="border-b border-border" grid="twelve">
        <div className="md:col-span-12 lg:col-span-8">
          <EditorialHeading
            as="h1"
            eyebrow="Desk systems catalogue"
            title="Operating systems shaped around the work service businesses do every day."
            description="Each Desk system starts with an industry context, then connects the intake, workflow, follow-up and visibility that work requires."
          />
        </div>
      </Section>
      <IndustryGrid />
      <Section className="border-b border-border" grid="twelve">
        <div className="md:col-span-12 lg:col-span-7">
          <EditorialHeading
            title="A repeatable system framework, tailored to the operational context."
            description="The catalogue describes the workflow scope currently defined for each Desk system. A Systems Audit helps identify the right starting point for a specific business."
          />
        </div>
      </Section>
      <SystemsAudit />
    </>
  );
}
