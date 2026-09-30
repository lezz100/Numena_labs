import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";
import { primaryCta } from "@/data/navigation";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Resources",
  description:
    "Guides, case studies and insights on AI automation and business systems from Numena Labs — coming soon.",
  path: "/resources",
  noIndex: true,
});

export default function ResourcesPage() {
  return (
    <PageHero
      eyebrow="Resources"
      title="Guides and insights are on the way."
      description="We're putting together practical resources on AI automation, business systems and growth for African SMEs. In the meantime, book a free audit and we'll walk you through it directly."
    >
      <div className="mt-8">
        <Button href={primaryCta.href} showArrow>
          {primaryCta.label}
        </Button>
      </div>
    </PageHero>
  );
}
