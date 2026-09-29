import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";
import { primaryCta } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Pricing | Numena Labs",
  description:
    "Every Numena Labs system is scoped to your business. Start with a free systems efficiency audit to get a custom roadmap and quote.",
};

const auditIncludes = [
  "Detailed audit report of your current systems, strengths and weaknesses",
  "Opportunity map of quick wins and high-impact areas",
  "Custom roadmap with priorities, timelines and recommendations",
  "ROI projection on leads, revenue, time saved and costs reduced",
  "30-minute expert consultation walking through findings and next steps",
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Every system is scoped to your business."
        description="Numena Labs doesn't sell one-size-fits-all packages. Pricing depends on the systems you need, the channels you operate on and the scale of automation involved — so every engagement starts with a free audit, not a quote."
      >
        <div className="mt-8">
          <Button href={primaryCta.href} showArrow>
            {primaryCta.label}
          </Button>
        </div>
      </PageHero>

      <section className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
        <div className="rounded-3xl border border-border bg-surface p-8 sm:p-10">
          <h2 className="text-2xl font-bold">
            Free 30-Minute Systems Efficiency Audit
          </h2>
          <p className="mt-3 text-muted">
            No obligation. Just clarity. We analyze your current systems,
            workflows and marketing to show you exactly where you&apos;re
            losing time, leads and money — and what it would take to fix it.
          </p>
          <ul className="mt-8 space-y-3">
            {auditIncludes.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-muted">
                <span aria-hidden="true" className="mt-0.5 text-accent">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button href={primaryCta.href} showArrow className="w-full justify-center">
              {primaryCta.label}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
