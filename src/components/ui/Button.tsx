"use client";

import Link from "next/link";
import type { MouseEvent, MouseEventHandler, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "light";

type BaseProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  showArrow?: boolean;
  className?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border border-accent bg-accent text-accent-foreground hover:border-accent-hover hover:bg-accent-hover hover:shadow-cta",
  secondary:
    "border border-border-strong bg-transparent text-foreground hover:border-accent hover:text-accent",
  ghost:
    "border border-transparent bg-transparent text-foreground hover:border-accent hover:text-accent",
  light:
    "border border-border-strong bg-surface-elevated text-foreground hover:border-accent hover:text-accent",
};

const baseClasses =
  "group inline-flex min-h-11 items-center gap-2 rounded-cta px-6 py-3 text-sm font-medium whitespace-nowrap transition-[background-color,border-color,color,transform,box-shadow] duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus active:translate-y-px aria-disabled:pointer-events-none aria-disabled:cursor-not-allowed aria-disabled:opacity-50";

function Arrow() {
  return (
    <span
      aria-hidden="true"
      className="transition-transform group-hover:translate-x-1"
    >
      →
    </span>
  );
}

export function Button({
  children,
  href,
  variant = "primary",
  showArrow = false,
  className = "",
  disabled = false,
  onClick,
}: BaseProps & { href: string }) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (disabled) {
      event.preventDefault();
      return;
    }

    onClick?.(event);
  }

  return (
    <Link
      href={href}
      aria-disabled={disabled || undefined}
      tabIndex={disabled ? -1 : undefined}
      onClick={handleClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
      {showArrow && <Arrow />}
    </Link>
  );
}
