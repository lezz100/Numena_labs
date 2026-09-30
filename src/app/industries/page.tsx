import type { Metadata } from "next";
import { IndustryGrid } from "@/components/sections/IndustryGrid";
import { PageHero } from "@/components/sections/PageHero";
import { SystemsAudit } from "@/components/sections/SystemsAudit";
import { Reveal } from "@/components/ui/Reveal";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Desk Systems for Clinics, Pharmacies, Hotels & Service Businesses",
  description:
    "Seven systems shaped around specific East African service business contexts — CareDesk for clinics, PharmacyDesk, HospitalityDesk for hotels, ServiceDesk, EventDesk, BuildDesk and ProfessionalDesk for law firms and consultants.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Desk systems catalogue"
        title="Operating systems shaped around the work service businesses do every day."
        description="Each Desk system starts with an industry context, then connects the intake, workflow, follow-up and visibility that work requires."
      />

      <IndustryGrid />

      <div className="border-b border-border bg-surface">
        <div className="mx-auto w-full max-w-[var(--content-max)] px-[var(--page-gutter)] py-[var(--space-section)]">
          <Reveal>
            <SectionIntro
              eyebrow="The framework"
              title="A repeatable system framework, tailored to the business context."
              intro="The catalogue describes the workflow scope currently defined for each Desk system. A Systems Audit helps identify the right starting point for a specific business."
            />
          </Reveal>
        </div>
      </div>

      <SystemsAudit />
    </>
  );
}
