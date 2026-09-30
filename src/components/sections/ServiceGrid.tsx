import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { services } from "@/data/services";

export function ServiceGrid() {
  return (
    <div>
      {services.map((service, index) => (
        <section
          key={service.slug}
          id={service.slug}
          className={`scroll-mt-24 border-b border-border${index % 2 === 1 ? " bg-surface" : ""}`}
        >
          <div className="mx-auto w-full max-w-[var(--content-max)] px-[var(--page-gutter)] py-[var(--space-section)]">
            <Reveal>
              <SectionIntro
                eyebrow={`System ${String(index + 1).padStart(2, "0")}`}
                title={service.title}
                intro={service.description}
              />
            </Reveal>

            <Reveal delay={80} className="mt-10">
              <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 border border-border p-4 text-sm text-muted transition-colors duration-200 hover:border-border-strong"
                  >
                    <span className="mt-0.5 shrink-0 text-accent" aria-hidden="true">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={120} className="mt-8">
              <Link
                href="/contact"
                className="inline-flex min-h-[2.75rem] items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
              >
                Book a conversation about this system{" "}
                <span aria-hidden="true">→</span>
              </Link>
            </Reveal>
          </div>
        </section>
      ))}
    </div>
  );
}
