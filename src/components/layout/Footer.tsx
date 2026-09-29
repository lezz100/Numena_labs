import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import {
  contactDetails,
  footerNav,
  primaryCta,
} from "@/data/navigation";

function FooterLinks({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h2 className="type-label text-foreground">{title}</h2>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-muted transition-colors duration-200 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-canvas">
      <div className="mx-auto w-full max-w-[var(--content-max)] px-[var(--page-gutter)] py-[var(--space-7)]">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.6fr)_minmax(0,0.8fr)]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
              Practical AI-enabled operating systems for East African service
              businesses.
            </p>
          </div>

          <FooterLinks title="Explore" links={footerNav.explore} />

          <div>
            <h2 className="type-label text-foreground">Contact</h2>
            <div className="mt-4 flex flex-col items-start gap-3 text-sm text-muted">
              <Link
                href={primaryCta.href}
                className="border-b border-accent pb-1 font-medium text-foreground transition-colors duration-200 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
              >
                {primaryCta.label}
              </Link>
              <a
                href={`mailto:${contactDetails.email}`}
                className="transition-colors duration-200 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
              >
                {contactDetails.email}
              </a>
              <a
                href={contactDetails.whatsapp}
                className="transition-colors duration-200 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
              >
                {contactDetails.phone}
              </a>
              <p>{contactDetails.location}</p>
            </div>
          </div>
        </div>

        <div className="mt-[var(--space-7)] flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Numena Labs. All rights reserved.</p>
          <p>Privacy and terms documentation are being finalized.</p>
        </div>
      </div>
    </footer>
  );
}
