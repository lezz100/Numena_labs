import Link from "next/link";

export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M50 6C50 6 58 34 50 50C42 34 50 6 50 6Z" fill="#b7c87c" />
      <path d="M94 50C94 50 66 58 50 50C66 42 94 50 94 50Z" fill="#b7c87c" />
      <path d="M50 94C50 94 42 66 50 50C58 66 50 94 50 94Z" fill="#b7c87c" />
      <path d="M6 50C6 50 34 42 50 50C34 58 6 50 6 50Z" fill="#b7c87c" />
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-2.5 ${className}`}
      aria-label="Numena Labs home"
    >
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span className="text-sm font-bold tracking-wide text-foreground">
          NUMENA
        </span>
        <span className="text-[10px] font-medium tracking-[0.3em] text-muted">
          LABS
        </span>
      </span>
    </Link>
  );
}
