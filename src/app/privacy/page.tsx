import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { contactDetails } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Privacy Policy | Numena Labs",
  description: "Numena Labs privacy policy — coming soon.",
};

export default function PrivacyPage() {
  return (
    <PageHero
      eyebrow="Privacy Policy"
      title="Our privacy policy is being finalized."
      description={`We take data protection seriously and are finalizing our full privacy policy. In the meantime, if you have questions about how we handle your data, contact us at ${contactDetails.email}.`}
    />
  );
}
