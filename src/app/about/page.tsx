import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { SystemsAudit } from "@/components/sections/SystemsAudit";
import { CardGrid } from "@/components/ui/CardGrid";
import { Reveal } from "@/components/ui/Reveal";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { deliveryModel } from "@/data/home";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "About Numena Labs — Eldoret, Kenya",
  absoluteTitle: true,
  description:
    "Numena Labs was founded in Eldoret by Alila after building AfyaHero — a hospital management system for a healthcare provider in Kenya. We design operational systems for service businesses across East Africa running on WhatsApp and M-Pesa.",
  path: "/about",
});

const beliefs = [
  {
    statement:
      "Automation that runs inside WhatsApp gets used. Automation that asks customers to download a new app mostly does not.",
  },
  {
    statement:
      "Most operational failures in service businesses are communication and follow-up failures, not capacity failures. Fixing the flow of information is usually more effective than hiring more staff to manage it manually.",
  },
  {
    statement:
      "A system a team member can operate on their phone, during the workday, without opening a new application, will get adopted. A system that requires logging into a dashboard they were trained on once will not.",
  },
  {
    statement:
      "Automation should start with the most painful manual task in the business, not the most technically interesting one. Starting where the friction is worst means the team notices the difference immediately.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="We build operational systems for service businesses."
        description="Numena Labs is based in Eldoret, Kenya. We work with service businesses across East Africa that run primarily through WhatsApp and M-Pesa and need their operations to work without daily manual intervention."
      />

      {/* Who we are + What we've built */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-[var(--content-max)] px-[var(--page-gutter)] py-[var(--space-section)]">
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <div>
                <h2 className="type-label text-accent">Who we are</h2>
                <p className="mt-4 leading-relaxed text-muted">
                  Alila started Numena Labs after working closely with a healthcare
                  provider in Eldoret and seeing how much of the administrative work
                  around patient care — reminders, billing, follow-up — was being
                  done manually or not at all, with tools that were never built for
                  a WhatsApp-first, M-Pesa-paying patient.
                </p>
                <p className="mt-4 leading-relaxed text-muted">
                  We build for clinics, pharmacies, hotels, contractors, event
                  planners and professional firms — businesses where the operational
                  work happens primarily through WhatsApp, SMS and M-Pesa, not
                  through enterprise platforms.
                </p>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div>
                <h2 className="type-label text-accent">What we have built</h2>
                <div className="mt-4 border border-border bg-surface p-6">
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-lg font-semibold text-foreground">
                      AfyaHero
                    </p>
                    <span className="rounded-panel border border-border px-2.5 py-0.5 text-xs text-muted">
                      Healthcare
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    A hospital management system designed for an East African
                    healthcare provider. AfyaHero connects appointment booking,
                    patient records, M-Pesa billing, lab results and patient
                    communication into one operational platform — so the
                    administrative work around patient care has a shared home.
                  </p>
                  <Link
                    href="/work/afyahero"
                    className="mt-5 inline-block text-sm font-medium text-accent hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
                  >
                    Read the case study →
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What we believe about automation */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-[var(--content-max)] px-[var(--page-gutter)] py-[var(--space-section)]">
          <Reveal>
            <SectionIntro
              eyebrow="What we believe about automation"
              title="Specific enough to be wrong."
              intro="These are the positions that shape how we design systems."
              className="mb-10"
            />
          </Reveal>
          <Reveal delay={80}>
            <ul className="space-y-6 border-t border-border pt-8">
              {beliefs.map((item, i) => (
                <li key={i} className="border-l border-accent pl-5">
                  <p className="text-sm leading-relaxed text-muted">
                    {item.statement}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* How we work */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-[var(--content-max)] px-[var(--page-gutter)] py-[var(--space-section)]">
          <Reveal>
            <SectionIntro
              eyebrow="How we work"
              title="From operational friction to a working system."
              intro="The implementation path begins with the work people need to do, then connects the technology around it."
              className="mb-12"
            />
          </Reveal>
          <Reveal delay={80}>
            <CardGrid cols={4}>
              {deliveryModel.map((step, i) => (
                <div key={step.title}>
                  <p className="text-xs font-semibold text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              ))}
            </CardGrid>
          </Reveal>
        </div>
      </section>

      <SystemsAudit />
    </>
  );
}
