import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 60% at 50% 0%, rgb(183 200 124 / 0.1) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-4xl px-6 py-20 text-center lg:px-8 lg:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
          {description}
        </p>
        {children}
      </div>
    </section>
  );
}
