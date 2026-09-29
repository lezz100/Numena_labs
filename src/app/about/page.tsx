import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { heroStats } from "@/data/home";

export const metadata: Metadata = {
  title: "About Us | Numena Labs",
  description:
    "Numena Labs builds intelligent systems and automation solutions that empower businesses and institutions to operate smarter, scale faster, and create impact.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Built on intelligence. Driven by impact."
        description="Numena Labs builds intelligent systems and automation solutions that empower businesses and institutions to operate smarter, scale faster, and create impact. We combine deep tech, business systems thinking and design to build the future."
      />

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <dl className="grid grid-cols-2 gap-8 border-y border-border py-10 sm:grid-cols-4">
          {heroStats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="text-3xl font-bold text-foreground">
                {stat.value}
              </dd>
              <p className="mt-1 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </dl>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Our Approach</h2>
            <p className="mt-4 text-muted">
              We don&apos;t just set up tools — we build systems that run,
              scale and deliver results. Every engagement starts with
              understanding your business, users and goals, and ends with a
              robust, secure system your team can actually run day to day.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Where We Work</h2>
            <p className="mt-4 text-muted">
              Numena Labs is based in Eldoret, Kenya, and builds for
              businesses across Healthcare, Financial Services, Hospitality,
              Education, Retail and NGOs throughout East Africa.
            </p>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
