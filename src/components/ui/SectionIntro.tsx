import type { ReactNode } from "react";

type SectionIntroProps = {
  eyebrow?: string;
  title: ReactNode;
  intro?: string;
  className?: string;
};

export function SectionIntro({
  eyebrow,
  title,
  intro,
  className = "",
}: SectionIntroProps) {
  return (
    <header className={className}>
      {eyebrow && (
        <p className="type-label mb-3 text-accent">{eyebrow}</p>
      )}
      <h2 className="type-h2 max-w-[22ch]">{title}</h2>
      {intro && (
        <p className="type-body-large mt-4 max-w-[60ch] text-muted">{intro}</p>
      )}
    </header>
  );
}
