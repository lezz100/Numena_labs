"use client";

import {
  type CSSProperties,
  type ReactNode,
  useEffect,
  useRef,
} from "react";

type RevealDirection = "up" | "left" | "right";
type RevealTag = "div" | "article" | "li";

type RevealProps = {
  children: ReactNode;
  as?: RevealTag;
  className?: string;
  delay?: number;
  direction?: RevealDirection;
};

export function Reveal({
  children,
  as: Tag = "div",
  className = "",
  delay = 0,
  direction = "up",
}: RevealProps) {
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      element.dataset.revealed = "true";
      return;
    }

    const reveal = () => {
      element.dataset.revealed = "true";
    };

    if (element.getBoundingClientRect().top < window.innerHeight * 0.86) {
      reveal();
      return;
    }

    element.dataset.ready = "true";
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          reveal();
          observer.unobserve(element);
        }
      },
      { rootMargin: "0px 0px -12%", threshold: 0.08 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={elementRef as never}
      className={`scroll-reveal scroll-reveal--${direction} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
