"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { primaryCta, primaryNav } from "@/data/navigation";

function isCurrentPath(pathname: string, href: string) {
  if (href === "/industries") {
    return pathname === href || pathname.startsWith("/industries/");
  }

  return pathname === href;
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const firstMenuLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const previousBodyOverflow = document.body.style.overflow;
    const previousDocumentOverflow = document.documentElement.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key === "Tab") {
        const focusableMenuItems = Array.from(
          mobileMenuRef.current?.querySelectorAll<HTMLElement>("a[href]") ?? []
        );
        const focusableItems = [
          menuButtonRef.current,
          ...focusableMenuItems,
        ].filter((item): item is HTMLElement => item !== null);
        const firstItem = focusableItems[0];
        const lastItem = focusableItems.at(-1);

        if (!firstItem || !lastItem) {
          return;
        }

        if (event.shiftKey && document.activeElement === firstItem) {
          event.preventDefault();
          lastItem.focus();
        } else if (!event.shiftKey && document.activeElement === lastItem) {
          event.preventDefault();
          firstItem.focus();
        }
      }
    };

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    firstMenuLinkRef.current?.focus();

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousDocumentOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-20 border-b border-border bg-canvas">
      <div className="mx-auto flex h-[4.5rem] w-full max-w-[var(--content-max)] items-center justify-between px-[var(--page-gutter)]">
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
          {primaryNav.map((item) => {
            const isCurrent = isCurrentPath(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isCurrent ? "page" : undefined}
                className={`border-b py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus ${
                  isCurrent
                    ? "border-accent text-foreground"
                    : "border-transparent text-muted hover:border-border-strong hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button href={primaryCta.href} showArrow>
            {primaryCta.label}
          </Button>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="min-h-11 border-b border-transparent px-1 text-sm font-medium text-foreground transition-colors duration-200 hover:border-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus lg:hidden"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {isMenuOpen ? (
        <div
          ref={mobileMenuRef}
          id="mobile-navigation"
          className="absolute inset-x-0 top-full border-b border-border bg-canvas lg:hidden"
        >
          <nav
            aria-label="Primary mobile"
            className="mx-auto flex w-full max-w-[var(--content-max)] flex-col px-[var(--page-gutter)] py-5"
          >
            {primaryNav.map((item, index) => {
              const isCurrent = isCurrentPath(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  ref={index === 0 ? firstMenuLinkRef : undefined}
                  href={item.href}
                  aria-current={isCurrent ? "page" : undefined}
                  onClick={closeMenu}
                  className={`flex min-h-11 items-center border-b text-base font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus ${
                    isCurrent
                      ? "border-accent text-foreground"
                      : "border-border text-muted hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Button
              href={primaryCta.href}
              showArrow
              className="mt-6 w-full justify-center"
              onClick={closeMenu}
            >
              {primaryCta.label}
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
