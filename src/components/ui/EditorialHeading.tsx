import type { ElementType, ReactNode } from "react";

type EditorialHeadingProps = {
  title: ReactNode;
  eyebrow?: ReactNode;
  description?: ReactNode;
  as?: Extract<ElementType, "h1" | "h2" | "h3">;
  className?: string;
};

const headingClasses = {
  h1: "type-h1",
  h2: "type-h2",
  h3: "type-h3",
};

export function EditorialHeading({
  title,
  eyebrow,
  description,
  as: Tag = "h2",
  className = "",
}: EditorialHeadingProps) {
  return (
    <header className={`max-w-[var(--content-narrow)] ${className}`}>
      {eyebrow ? <p className="type-label mb-3 text-accent">{eyebrow}</p> : null}
      <Tag className={headingClasses[Tag]}>{title}</Tag>
      {description ? (
        <p className="type-body-large mt-5 max-w-[65ch] text-muted">
          {description}
        </p>
      ) : null}
    </header>
  );
}
