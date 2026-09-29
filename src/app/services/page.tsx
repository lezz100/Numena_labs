import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { NumenaSystem } from "@/components/sections/NumenaSystem";
import { WhyNumena } from "@/components/sections/WhyNumena";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Services | Numena Labs",
  description:
    "AI automation, digital marketing and business systems built to help your business grow, operate smarter and scale with confidence.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services Catalogue"
        title="One partner. End-to-end growth."
        description="From attracting leads to closing sales and delighting customers — we build the systems that drive real, measurable results."
      />
      <ServiceGrid />
      <NumenaSystem />
      <WhyNumena />
      <CtaBanner />
    </>
  );
}
