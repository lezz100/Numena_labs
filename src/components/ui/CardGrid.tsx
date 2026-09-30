import type { ReactNode } from "react";

type Cols = 2 | 3 | 4;

const colMap: Record<Cols, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
};

type CardGridProps = {
  children: ReactNode;
  cols?: Cols;
  className?: string;
};

export function CardGrid({ children, cols = 3, className = "" }: CardGridProps) {
  return (
    <div className={`grid gap-5 ${colMap[cols]} ${className}`}>
      {children}
    </div>
  );
}
