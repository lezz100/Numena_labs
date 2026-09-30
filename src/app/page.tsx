import type { Metadata } from "next";
import { CaseStudyFeature } from "@/components/sections/CaseStudyFeature";
import { FounderNote } from "@/components/sections/FounderNote";
import { Hero } from "@/components/sections/Hero";
import { OperationalOutcomes } from "@/components/sections/OperationalOutcomes";
import { SystemDelivery } from "@/components/sections/SystemDelivery";
import { SystemsAudit } from "@/components/sections/SystemsAudit";
import { WhereWeWork } from "@/components/sections/WhereWeWork";
import { WorksWith } from "@/components/sections/WorksWith";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Numena Labs — Digital Systems for East African Service Businesses",
  absoluteTitle: true,
  description:
    "Numena Labs builds WhatsApp-first operating systems for clinics, pharmacies, hotels and service businesses across East Africa — connecting intake, SMS reminders, M-Pesa billing and daily follow-up into one system teams can run every day.",
  path: "/",
});

export default function Home() {
  return (
    <>
      {/* 1. Hero — split headline, proof chips, workflow card */}
      <Hero />

      {/* 2. Works with — integration strip */}
      <WorksWith />

      {/* 3. Our work — AfyaHero feature card */}
      <CaseStudyFeature />

      {/* 4. Where we work — 3 featured industry Desks */}
      <WhereWeWork />

      {/* 5. Outcomes — 4 numbered outcome cards */}
      <OperationalOutcomes />

      {/* 6. How we work — 4 delivery steps in a 2×2 grid */}
      <SystemDelivery />

      {/* 7. Founder note — first-person, placeholder until copy is supplied */}
      <FounderNote />

      {/* 8. Closing CTA band — Systems Audit */}
      <SystemsAudit />
    </>
  );
}
