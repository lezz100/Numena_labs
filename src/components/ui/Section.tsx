import type { ElementType, ReactNode } from "react";

type SectionWidth = "narrow" | "content" | "wide";
type SectionGrid = "none" | "twelve";

type SectionProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  width?: SectionWidth;
  grid?: SectionGrid;
};

const widthClasses: Record<SectionWidth, string> = {
  narrow: "max-w-[var(--content-narrow)]",
  content: "max-w-[var(--content-max)]",
  wide: "max-w-none",
};

const gridClasses: Record<SectionGrid, string> = {
  none: "",
  twelve: "grid grid-cols-1 gap-[var(--space-6)] md:grid-cols-12",
};

export function Section({
  children,
  as: Tag = "section",
  className = "",
  width = "content",
  grid = "none",
}: SectionProps) {
  return (
    <Tag
      className={`mx-auto w-full px-[var(--page-gutter)] py-[var(--space-section)] ${widthClasses[width]} ${gridClasses[grid]} ${className}`}
    >
      {children}
    </Tag>
  );
}
