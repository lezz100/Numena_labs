"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { services } from "@/data/services";
import { industries } from "@/data/industries";
import { primaryCta } from "@/data/navigation";

type MegaMenu = "systems" | "industries";

// Returns the first sentence of a longer description string.
function firstSentence(text: string): string {
  const idx = text.indexOf(". ");
  return idx > -1 ? text.slice(0, idx + 1) : text.slice(0, 110) + "…";
}

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 11 11"
      fill="none"
      aria-hidden="true"
      className={`ml-1 shrink-0 transition-transform duration-200 ${open ? "-rotate-180" : ""}`}
    >
      <path
        d="M1.5 3.5l4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Header() {
  const [activeMenu, setActiveMenu] = useState<MegaMenu | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<MegaMenu | null>(null);

  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Close everything on route change.
  useEffect(() => {
    setActiveMenu(null);
    setIsDrawerOpen(false);
  }, [pathname]);

  // Scroll detection for subtle shadow.
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Click-outside to close mega-menu.
  useEffect(() => {
    if (!activeMenu) return;
    const handler = (e: MouseEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) setActiveMenu(null);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [activeMenu]);

  // Escape to close mega-menu.
  useEffect(() => {
    if (!activeMenu) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveMenu(null);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [activeMenu]);

  // Body-scroll lock + focus trap + Escape for mobile drawer.
  useEffect(() => {
    if (!isDrawerOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function getFocusable() {
      return Array.from(
        drawerRef.current?.querySelectorAll<HTMLElement>(
          "a[href], button:not([disabled])"
        ) ?? []
      );
    }

    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsDrawerOpen(false);
        menuButtonRef.current?.focus();
        return;
      }
      if (e.key === "Tab") {
        const items = getFocusable();
        const first = items[0];
        const last = items.at(-1);
        if (!first || !last) return;
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handler);
    // Defer focus so the drawer is painted first.
    const t = setTimeout(() => getFocusable()[0]?.focus(), 10);

    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", handler);
      clearTimeout(t);
    };
  }, [isDrawerOpen]);

  function openMenu(menu: MegaMenu) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(menu);
  }

  function scheduleClose() {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 150);
  }

  function cancelClose() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }

  function toggleMenu(menu: MegaMenu) {
    setActiveMenu((prev) => (prev === menu ? null : menu));
  }

  function isSegmentActive(base: string) {
    return pathname === base || pathname.startsWith(base + "/");
  }

  const linkClass = (active: boolean) =>
    `flex items-center gap-0.5 px-3.5 py-2.5 text-sm font-medium rounded-sm transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus ${
      active ? "text-foreground" : "text-muted hover:text-foreground"
    }`;

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-30 border-b border-border bg-canvas transition-shadow duration-300 ${
        isScrolled ? "shadow-[0_2px_20px_rgb(0_0_0/0.35)]" : ""
      }`}
    >
      {/* ── Main bar ─────────────────────────────────────────────────────── */}
      <div className="mx-auto flex h-[4.5rem] w-full max-w-[var(--content-max)] items-center justify-between px-[var(--page-gutter)]">
        <Logo />

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center lg:flex">
          {/* Systems trigger */}
          <div
            onMouseEnter={() => openMenu("systems")}
            onMouseLeave={scheduleClose}
          >
            <button
              type="button"
              aria-expanded={activeMenu === "systems"}
              aria-controls="mega-systems"
              onClick={() => toggleMenu("systems")}
              className={linkClass(
                isSegmentActive("/services") || activeMenu === "systems"
              )}
            >
              Systems
              <ChevronDown open={activeMenu === "systems"} />
            </button>
          </div>

          {/* Industries trigger */}
          <div
            onMouseEnter={() => openMenu("industries")}
            onMouseLeave={scheduleClose}
          >
            <button
              type="button"
              aria-expanded={activeMenu === "industries"}
              aria-controls="mega-industries"
              onClick={() => toggleMenu("industries")}
              className={linkClass(
                isSegmentActive("/industries") || activeMenu === "industries"
              )}
            >
              Industries
              <ChevronDown open={activeMenu === "industries"} />
            </button>
          </div>

          <Link
            href="/pricing"
            aria-current={pathname === "/pricing" ? "page" : undefined}
            className={linkClass(pathname === "/pricing")}
          >
            Pricing
          </Link>

          <Link
            href="/work/afyahero"
            aria-current={pathname === "/work/afyahero" ? "page" : undefined}
            className={linkClass(pathname === "/work/afyahero")}
          >
            Case Study
          </Link>

          <Link
            href="/about"
            aria-current={pathname === "/about" ? "page" : undefined}
            className={linkClass(pathname === "/about")}
          >
            About
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button href={primaryCta.href} showArrow>
            {primaryCta.label}
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          ref={menuButtonRef}
          type="button"
          onClick={() => setIsDrawerOpen((o) => !o)}
          className="flex min-h-11 min-w-11 items-center justify-center text-foreground transition-colors duration-200 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus lg:hidden"
          aria-label={isDrawerOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-controls="mobile-drawer"
          aria-expanded={isDrawerOpen}
        >
          {isDrawerOpen ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {/* ── Systems mega-menu ─────────────────────────────────────────────── */}
      <div
        id="mega-systems"
        role="region"
        aria-label="Systems navigation"
        aria-hidden={activeMenu !== "systems"}
        onMouseEnter={cancelClose}
        onMouseLeave={scheduleClose}
        className={`absolute inset-x-0 top-full border-b border-border bg-canvas transition-all duration-200 ease-out ${
          activeMenu === "systems"
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-1.5 opacity-0 pointer-events-none"
        }`}
      >
        <div className="mx-auto w-full max-w-[var(--content-max)] px-[var(--page-gutter)] py-8">
          <div className="mb-5 flex items-center justify-between">
            <p className="type-label text-muted">What we build</p>
            <Link
              href="/services"
              tabIndex={activeMenu === "systems" ? 0 : -1}
              className="text-sm text-accent transition-colors duration-200 hover:text-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
            >
              All systems →
            </Link>
          </div>

          {/* 4-column service grid with gap-px / bg-border dividers */}
          <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services#${service.slug}`}
                onClick={() => setActiveMenu(null)}
                tabIndex={activeMenu === "systems" ? 0 : -1}
                className="group flex flex-col gap-3 bg-canvas p-5 transition-colors duration-200 hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
              >
                <p className="text-sm font-semibold text-foreground transition-colors duration-200 group-hover:text-accent">
                  {service.title}
                </p>
                <p className="text-xs leading-relaxed text-muted line-clamp-2">
                  {firstSentence(service.description)}
                </p>
                <ul className="mt-auto space-y-1.5">
                  {service.items.slice(0, 3).map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-muted">
                      <span className="h-px w-3 shrink-0 bg-border-strong" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── Industries mega-menu ──────────────────────────────────────────── */}
      <div
        id="mega-industries"
        role="region"
        aria-label="Industries navigation"
        aria-hidden={activeMenu !== "industries"}
        onMouseEnter={cancelClose}
        onMouseLeave={scheduleClose}
        className={`absolute inset-x-0 top-full border-b border-border bg-canvas transition-all duration-200 ease-out ${
          activeMenu === "industries"
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-1.5 opacity-0 pointer-events-none"
        }`}
      >
        <div className="mx-auto w-full max-w-[var(--content-max)] px-[var(--page-gutter)] py-8">
          <div className="mb-5 flex items-center justify-between">
            <p className="type-label text-muted">Desk systems by industry</p>
            <Link
              href="/industries"
              tabIndex={activeMenu === "industries" ? 0 : -1}
              className="text-sm text-accent transition-colors duration-200 hover:text-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
            >
              All industries →
            </Link>
          </div>

          {/* 4-column grid — 7 industry tiles + 1 CTA tile fills 4×2 perfectly */}
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                tabIndex={activeMenu === "industries" ? 0 : -1}
                className="group flex flex-col gap-1 rounded-control border border-border p-4 transition-colors duration-200 hover:border-accent hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
              >
                <p className="text-sm font-semibold text-foreground transition-colors duration-200 group-hover:text-accent">
                  {industry.name}
                </p>
                <p className="text-xs text-muted">{industry.bestFor}</p>
              </Link>
            ))}

            {/* 8th tile — fills the grid and surfaces the overview page */}
            <Link
              href="/industries"
              tabIndex={activeMenu === "industries" ? 0 : -1}
              className="group flex flex-col justify-center gap-1 rounded-control border border-accent/25 bg-accent/5 p-4 transition-colors duration-200 hover:border-accent hover:bg-accent/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
            >
              <p className="text-sm font-semibold text-accent">Full catalogue →</p>
              <p className="text-xs text-muted">All Desk systems</p>
            </Link>
          </div>
        </div>
      </div>

      {/* ── Mobile full-screen drawer ─────────────────────────────────────── */}
      {isDrawerOpen && (
        <div
          ref={drawerRef}
          id="mobile-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className="fixed inset-0 z-40 flex flex-col bg-canvas lg:hidden"
        >
          {/* Drawer header row */}
          <div className="flex h-[4.5rem] shrink-0 items-center justify-between border-b border-border px-[var(--page-gutter)]">
            <Logo />
            <button
              type="button"
              onClick={() => setIsDrawerOpen(false)}
              aria-label="Close navigation menu"
              className="flex min-h-11 min-w-11 items-center justify-center text-muted transition-colors duration-200 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Scrollable nav list */}
          <nav
            aria-label="Primary mobile"
            className="flex-1 overflow-y-auto px-[var(--page-gutter)]"
          >
            {/* Systems accordion */}
            <div className="border-b border-border">
              <button
                type="button"
                aria-expanded={openAccordion === "systems"}
                onClick={() =>
                  setOpenAccordion((a) => (a === "systems" ? null : "systems"))
                }
                className="flex w-full items-center justify-between py-4 text-base font-medium text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
              >
                Systems
                <ChevronDown open={openAccordion === "systems"} />
              </button>
              {openAccordion === "systems" && (
                <div className="pb-4 pl-3">
                  <Link
                    href="/services"
                    onClick={() => setIsDrawerOpen(false)}
                    className="flex min-h-11 items-center py-2 text-sm font-medium text-accent hover:text-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
                  >
                    All Systems →
                  </Link>
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services#${service.slug}`}
                      onClick={() => setIsDrawerOpen(false)}
                      className="flex min-h-11 items-center py-2 text-sm text-muted transition-colors duration-200 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Industries accordion */}
            <div className="border-b border-border">
              <button
                type="button"
                aria-expanded={openAccordion === "industries"}
                onClick={() =>
                  setOpenAccordion((a) =>
                    a === "industries" ? null : "industries"
                  )
                }
                className="flex w-full items-center justify-between py-4 text-base font-medium text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
              >
                Industries
                <ChevronDown open={openAccordion === "industries"} />
              </button>
              {openAccordion === "industries" && (
                <div className="pb-4 pl-3">
                  <Link
                    href="/industries"
                    onClick={() => setIsDrawerOpen(false)}
                    className="flex min-h-11 items-center py-2 text-sm font-medium text-accent hover:text-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
                  >
                    All Industries →
                  </Link>
                  {industries.map((industry) => (
                    <Link
                      key={industry.slug}
                      href={`/industries/${industry.slug}`}
                      onClick={() => setIsDrawerOpen(false)}
                      className="flex min-h-11 items-center justify-between py-2 text-sm text-muted transition-colors duration-200 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
                    >
                      <span>{industry.name}</span>
                      <span className="text-xs text-muted/60">{industry.bestFor}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Flat links */}
            {[
              { label: "Pricing", href: "/pricing" },
              { label: "Case Study", href: "/work/afyahero" },
              { label: "About", href: "/about" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsDrawerOpen(false)}
                aria-current={pathname === item.href ? "page" : undefined}
                className={`flex min-h-11 items-center border-b border-border py-4 text-base font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus ${
                  pathname === item.href
                    ? "text-foreground"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Sticky CTA at bottom */}
          <div className="shrink-0 border-t border-border px-[var(--page-gutter)] py-5">
            <Button
              href={primaryCta.href}
              showArrow
              className="w-full justify-center"
              onClick={() => setIsDrawerOpen(false)}
            >
              {primaryCta.label}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
