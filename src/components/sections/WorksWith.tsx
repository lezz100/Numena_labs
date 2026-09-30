import { Reveal } from "@/components/ui/Reveal";

const tools = [
  "WhatsApp Business",
  "M-Pesa",
  "SMS",
  "Email",
  "Google Calendar",
];

export function WorksWith() {
  return (
    <div className="border-b border-border bg-surface">
      <Reveal>
        <div className="mx-auto flex w-full max-w-[var(--content-max)] flex-wrap items-center gap-x-7 gap-y-3 px-[var(--page-gutter)] py-6">
          <p className="type-label shrink-0 text-muted">Works with</p>
          <span className="hidden h-4 w-px bg-border-strong sm:block" aria-hidden="true" />
          {tools.map((tool, i) => (
            <span key={tool} className="flex items-center gap-7">
              <span className="text-sm font-medium text-muted">{tool}</span>
              {i < tools.length - 1 && (
                <span className="h-1 w-1 rounded-full bg-border-strong" aria-hidden="true" />
              )}
            </span>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
