import Link from "next/link";
import { whatWeDo } from "@/data/home";

export function WhatWeDo() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            What We Do
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            End-to-end systems.
            <br />
            Built around your business.
          </h2>
        </div>
        <Link
          href="/services"
          className="group inline-flex items-center gap-2 text-sm font-medium text-accent"
        >
          Explore All Services
          <span
            aria-hidden="true"
            className="transition-transform group-hover:translate-x-1"
          >
            →
          </span>
        </Link>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {whatWeDo.map((item) => (
          <Link
            key={item.slug}
            href="/services"
            className="group flex flex-col justify-between rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-primary/50"
          >
            <div>
              <h3 className="font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.description}</p>
            </div>
            <span
              aria-hidden="true"
              className="mt-6 text-accent transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
