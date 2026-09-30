import { Reveal } from "@/components/ui/Reveal";

export function FounderNote() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-[var(--content-narrow)] px-[var(--page-gutter)] py-[var(--space-section)]">
        <Reveal>
          <p className="type-label mb-10 text-accent">A note from the founder</p>

          <figure>
            <div className="mb-8 flex items-start gap-6">
              {/* AI avatar — swap for <Image /> when a real photo is ready */}
              <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full border border-border">
                <svg
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-full w-full"
                  aria-label="Alila, founder of Numena Labs"
                >
                  <circle cx="32" cy="32" r="32" fill="#181b15" />
                  <circle cx="32" cy="32" r="30" fill="none" stroke="#363a31" strokeWidth="0.5" opacity="0.6" />
                  {/* Shoulders */}
                  <path d="M0 64 Q4 48 32 46 Q60 48 64 64" fill="#20241c" />
                  {/* Neck */}
                  <rect x="29" y="36" width="6" height="10" fill="#20241c" />
                  {/* Head */}
                  <ellipse cx="32" cy="26" rx="11" ry="12" fill="#20241c" />
                  {/* Hair */}
                  <path d="M21 26 Q21 13 32 13 Q43 13 43 26 L43 21 Q42 11 32 11 Q22 11 21 21 Z" fill="#12140f" />
                  {/* Eyes — square corners give the AI-avatar look */}
                  <rect x="25.5" y="22.5" width="4" height="4" rx="0.6" fill="#b7c87c" />
                  <rect x="34.5" y="22.5" width="4" height="4" rx="0.6" fill="#b7c87c" />
                  {/* Mouth */}
                  <path d="M27 31 Q32 34.5 37 31" stroke="#b7c87c" strokeWidth="1" fill="none" opacity="0.45" strokeLinecap="round" />
                </svg>
              </div>
              <div className="pt-1">
                <p className="text-base font-semibold text-foreground">Alila</p>
                <p className="mt-1 text-sm text-muted">
                  Founder, Numena Labs · Former operations lead at a healthcare
                  network in Uasin Gishu County
                </p>
              </div>
            </div>

            <blockquote>
              <p className="type-body-large leading-relaxed text-foreground">
                &ldquo;I built Numena after watching a clinic in Eldoret lose confirmed
                appointments every week — not because patients didn&apos;t want to come,
                but because the reminder never went out. Someone meant to send it.
                That wasn&apos;t a discipline problem. It was a system problem. Every
                service business I&apos;ve worked with since has had a version of the
                same thing: good teams spending hours on coordination that a
                well-built system could handle for them. Numena is what I wish
                those businesses had had from the start.&rdquo;
              </p>
            </blockquote>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
