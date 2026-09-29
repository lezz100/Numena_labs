import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { contactDetails } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Terms of Service | Numena Labs",
  description: "Numena Labs terms of service — coming soon.",
};

export default function TermsPage() {
  return (
    <PageHero
      eyebrow="Terms of Service"
      title="Our terms of service are being finalized."
      description={`We're finalizing our full terms of service. In the meantime, if you have questions about working with us, contact us at ${contactDetails.email}.`}
    />
  );
}
