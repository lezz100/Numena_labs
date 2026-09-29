import type { Metadata } from "next";
import { CaseStudyFeature } from "@/components/sections/CaseStudyFeature";
import { Hero } from "@/components/sections/Hero";
import { OperationalOutcomes } from "@/components/sections/OperationalOutcomes";
import { ProofStrip } from "@/components/sections/ProofStrip";
import { SystemDelivery } from "@/components/sections/SystemDelivery";
import { SystemIndex } from "@/components/sections/SystemIndex";
import { SystemsAudit } from "@/components/sections/SystemsAudit";

export const metadata: Metadata = {
  title: "Practical AI Operating Systems | Numena Labs",
  description:
    "Numena Labs designs practical AI-enabled operating systems for East African service businesses, connecting intake, workflows, follow-up and operational visibility.",
};

export default function Home() {
  return <><Hero /><ProofStrip /><CaseStudyFeature /><SystemIndex /><OperationalOutcomes /><SystemDelivery /><SystemsAudit /></>;
}
