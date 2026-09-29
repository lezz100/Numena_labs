import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { systemsAudit } from "@/data/home";
import { primaryCta } from "@/data/navigation";

export function SystemsAudit() {
  return (
    <Section>
      <Reveal className="grid gap-8 border border-border bg-surface-elevated p-7 sm:p-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-12">
        <div><h2 className="type-h2 max-w-[16ch]">{systemsAudit.title}</h2><p className="type-body-large mt-5 max-w-[60ch] text-muted">{systemsAudit.description}</p></div>
        <Button href={primaryCta.href} showArrow className="w-fit">{primaryCta.label}</Button>
      </Reveal>
    </Section>
  );
}
