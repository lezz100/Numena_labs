import { proofItems } from "@/data/home";
import { Reveal } from "@/components/ui/Reveal";

export function ProofStrip() {
  return (
    <section aria-label="What Numena systems are designed to support" className="border-b border-border bg-surface">
      <div className="mx-auto grid w-full max-w-[var(--content-max)] gap-8 px-[var(--page-gutter)] py-9 md:grid-cols-3 md:gap-0">
        {proofItems.map((item, index) => (
          <Reveal as="article" key={item.title} delay={index * 90} className={`min-w-0 ${index > 0 ? "md:border-l md:border-border md:pl-8" : "md:pr-8"} ${index < proofItems.length - 1 ? "md:pr-8" : ""}`}>
            <h2 className="text-base font-medium text-foreground">{item.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">{item.detail}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
