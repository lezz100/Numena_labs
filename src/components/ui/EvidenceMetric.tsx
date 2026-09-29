import type { ReactNode } from "react";

type EvidenceMetricProps = {
  label: ReactNode;
  value?: ReactNode;
  context?: ReactNode;
  source?: ReactNode;
  unavailableLabel?: ReactNode;
  className?: string;
};

export function EvidenceMetric({
  label,
  value,
  context,
  source,
  unavailableLabel = "Evidence pending verification",
  className = "",
}: EvidenceMetricProps) {
  const isAvailable = value !== undefined && value !== null && value !== "";

  return (
    <dl
      className={`border-l border-border-strong pl-4 ${className}`}
      data-evidence-state={isAvailable ? "verified" : "unavailable"}
    >
      <dt className="type-label text-muted">{label}</dt>
      <dd className="type-h3 mt-2 text-foreground">
        {isAvailable ? value : unavailableLabel}
      </dd>
      {context ? <dd className="type-body-small mt-2 text-muted">{context}</dd> : null}
      {source ? <dd className="type-metadata mt-3 text-muted">{source}</dd> : null}
    </dl>
  );
}
