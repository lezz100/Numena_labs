import type { Metadata } from "next";
import { NumenaSystem } from "@/components/sections/NumenaSystem";
import { PageHero } from "@/components/sections/PageHero";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { SystemsAudit } from "@/components/sections/SystemsAudit";
import { WhyNumena } from "@/components/sections/WhyNumena";
import { Reveal } from "@/components/ui/Reveal";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "AI Automation & Operational Systems",
  description:
    "WhatsApp automation, business operations, M-Pesa billing and AI integration — built for clinics, pharmacies, hotels and service firms in Kenya and East Africa. Each system is shaped around how the business actually runs.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Build"
        title="Operational systems for service businesses."
        description="We connect intake, workflows, follow-up and operational visibility into systems your team can use every day."
      />

      {/* How these fit together */}
      <div className="border-b border-border bg-surface">
        <div className="mx-auto w-full max-w-[var(--content-max)] px-[var(--page-gutter)] py-[var(--space-section)]">
          <Reveal>
            <SectionIntro
              eyebrow="How these fit together"
              title="One connected system, not four separate tools."
              intro="Each service area corresponds to a layer of how the business runs — communication, coordination, visibility and integration. Most engagements touch more than one layer, because the friction usually spans more than one part of the workflow."
            />
          </Reveal>
        </div>
      </div>

      {/* Four anchored service sections — IDs match the header mega-menu links */}
      <ServiceGrid />

      {/* The Numena System — end-to-end operating flow */}
      <div className="border-b border-border bg-surface">
        <NumenaSystem />
      </div>

      {/* What makes a Numena system different */}
      <WhyNumena />

      <SystemsAudit />
    </>
  );
}
