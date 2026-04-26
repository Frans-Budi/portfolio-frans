"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type RevealOnScrollProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  isOnce?: boolean;
};

export function RevealOnScroll({
  children,
  className,
  delayMs = 0,
  isOnce = true,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;

        if (entry.isIntersecting) {
          setIsVisible(true);

          if (isOnce) {
            observer.disconnect();
          }

          return;
        }

        if (!isOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.22,
        rootMargin: "0px 0px -14% 0px",
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [isOnce]);

  return (
    <div
      ref={ref}
      className={cn("reveal-on-scroll", isVisible && "is-visible", className)}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </div>
  );
}
