import { CtaBand } from "@/components/ui/CtaBand";
import { systemsAudit } from "@/data/home";
import { primaryCta } from "@/data/navigation";

export function SystemsAudit() {
  return (
    <CtaBand
      eyebrow="Start here"
      title={systemsAudit.title}
      description={systemsAudit.description}
      cta={primaryCta}
    />
  );
}
