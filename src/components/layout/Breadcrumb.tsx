"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { industries } from "@/data/industries";

// Map known path segments to human-readable labels.
const SEGMENT_LABELS: Record<string, string> = {
  services: "Systems",
  industries: "Industries",
  pricing: "Pricing",
  work: "Work",
  about: "About",
  contact: "Contact",
  afyahero: "AfyaHero",
};

function resolveLabel(segment: string): string {
  if (SEGMENT_LABELS[segment]) return SEGMENT_LABELS[segment];
  const industry = industries.find((i) => i.slug === segment);
  if (industry) return industry.name;
  // Fallback: title-case the slug.
  return segment
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export function Breadcrumb() {
  const pathname = usePathname();

  // Only show on inner pages.
  if (pathname === "/") return null;

  const segments = pathname.split("/").filter(Boolean);

  const crumbs = segments.map((seg, i) => ({
    label: resolveLabel(seg),
    href: "/" + segments.slice(0, i + 1).join("/"),
    isCurrent: i === segments.length - 1,
  }));

  return (
    <nav
      aria-label="Breadcrumb"
      className="border-b border-border bg-canvas"
    >
      <ol
        className="mx-auto flex w-full max-w-[var(--content-max)] flex-wrap items-center gap-x-1.5 gap-y-1 px-[var(--page-gutter)] py-2.5"
      >
        <li>
          <Link
            href="/"
            className="text-xs text-muted transition-colors duration-200 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
          >
            Home
          </Link>
        </li>

        {crumbs.map((crumb) => (
          <li key={crumb.href} className="flex items-center gap-1.5">
            <span className="select-none text-xs text-border-strong" aria-hidden="true">
              /
            </span>
            {crumb.isCurrent ? (
              <span
                aria-current="page"
                className="text-xs text-foreground"
              >
                {crumb.label}
              </span>
            ) : (
              <Link
                href={crumb.href}
                className="text-xs text-muted transition-colors duration-200 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
              >
                {crumb.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
