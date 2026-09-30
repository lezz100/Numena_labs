import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { contactDetails } from "@/data/navigation";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Service",
  description: "Numena Labs terms of service — coming soon.",
  path: "/terms",
  noIndex: true,
});

export default function TermsPage() {
  return (
    <PageHero
      eyebrow="Terms of Service"
      title="Our terms of service are being finalized."
      description={`We're finalizing our full terms of service. In the meantime, if you have questions about working with us, contact us at ${contactDetails.email}.`}
    />
  );
}
