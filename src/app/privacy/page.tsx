import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { contactDetails } from "@/data/navigation";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: "Numena Labs privacy policy — coming soon.",
  path: "/privacy",
  noIndex: true,
});

export default function PrivacyPage() {
  return (
    <PageHero
      eyebrow="Privacy Policy"
      title="Our privacy policy is being finalized."
      description={`We take data protection seriously and are finalizing our full privacy policy. In the meantime, if you have questions about how we handle your data, contact us at ${contactDetails.email}.`}
    />
  );
}
