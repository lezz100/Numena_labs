import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { contactDetails, primaryCta } from "@/data/navigation";

const exploreLinks = [
  { label: "Systems", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Pricing", href: "/pricing" },
  { label: "Case Study", href: "/work/afyahero" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const linkClass =
  "text-sm text-muted transition-colors duration-200 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus";

export function Footer() {
  return (
    <footer className="border-t border-border bg-canvas">
      <div className="mx-auto w-full max-w-[var(--content-max)] px-[var(--page-gutter)] py-[var(--space-7)]">

        {/* ── Main grid ─── */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,0.8fr)_minmax(0,1fr)]">

          {/* Brand column */}
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              WhatsApp-first operating systems for clinics, hotels, pharmacies
              and service businesses across East Africa.
            </p>
            <Link
              href={primaryCta.href}
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors duration-200 hover:text-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
            >
              {primaryCta.label} →
            </Link>
          </div>

          {/* Navigation links */}
          <div>
            <h2 className="type-label text-foreground">Explore</h2>
            <ul className="mt-4 space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact block */}
          <div>
            <h2 className="type-label text-foreground">Get in touch</h2>
            <div className="mt-4 flex flex-col gap-3 text-sm">
              <a
                href={`mailto:${contactDetails.email}`}
                className={linkClass}
              >
                {contactDetails.email}
              </a>
              <a
                href={`tel:${contactDetails.phone.replace(/\s/g, "")}`}
                className={linkClass}
              >
                {contactDetails.phone}
              </a>
              <a
                href={contactDetails.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors duration-200 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
              >
                {/* WhatsApp icon */}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="shrink-0 text-accent"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Chat on WhatsApp
              </a>
              <p className="text-sm text-muted">{contactDetails.location}</p>
            </div>
          </div>
        </div>

        {/* ── Legal bar ─── */}
        <div className="mt-[var(--space-7)] flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Numena Labs. All rights reserved.</p>
          <p>Privacy and terms documentation are being finalised.</p>
        </div>
      </div>
    </footer>
  );
}
