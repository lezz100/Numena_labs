import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { contactDetails } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Careers | Numena Labs",
  description: "There are no open roles at Numena Labs right now.",
};

export default function CareersPage() {
  return (
    <PageHero
      eyebrow="Careers"
      title="No open roles right now."
      description={`We're not actively hiring at the moment, but we're always open to hearing from strong automation, AI and design talent. Reach out at ${contactDetails.email} and we'll keep you in mind.`}
    />
  );
}
