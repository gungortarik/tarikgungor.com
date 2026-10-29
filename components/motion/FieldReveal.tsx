"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function FieldReveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hLines = el.querySelectorAll<HTMLElement>("[data-grid-h]");
    const vLines = el.querySelectorAll<HTMLElement>("[data-grid-v]");
    const oxideRule = el.querySelectorAll<HTMLElement>("[data-grid-oxide]");
    const lineInners = el.querySelectorAll<HTMLElement>("[data-line-inner]");
    const telemetry = el.querySelectorAll<HTMLElement>("[data-telemetry]");

    if (prefersReducedMotion) {
      gsap.set([hLines, vLines, oxideRule], { scaleX: 1, scaleY: 1, opacity: 1 });
      gsap.set(lineInners, { yPercent: 0, opacity: 1 });
      gsap.set(telemetry, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      if (hLines.length) {
        gsap.set(hLines, { scaleX: 0, transformOrigin: "left center" });
        tl.to(
          hLines,
          {
            scaleX: 1,
            duration: 0.75,
            stagger: 0.1,
            ease: "expo.out",
          },
          0
        );
      }

      if (vLines.length) {
        gsap.set(vLines, { scaleY: 0, transformOrigin: "top center" });
        tl.to(
          vLines,
          {
            scaleY: 1,
            duration: 0.8,
            stagger: 0.08,
            ease: "expo.out",
          },
          0.08
        );
      }

      if (lineInners.length) {
        gsap.set(lineInners, { yPercent: 110 });
        tl.to(
          lineInners,
          {
            yPercent: 0,
            duration: 0.9,
            stagger: 0.11,
            ease: "power4.out",
            clearProps: "transform",
          },
          0.14
        );
      }

      if (oxideRule.length) {
        gsap.set(oxideRule, { scaleX: 0, transformOrigin: "left center" });
        tl.to(
          oxideRule,
          {
            scaleX: 1,
            duration: 0.85,
            ease: "power3.inOut",
          },
          0.32
        );
      }

      if (telemetry.length) {
        gsap.set(telemetry, { opacity: 0, y: 12 });
        tl.to(
          telemetry,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.06,
            ease: "power2.out",
            clearProps: "transform",
          },
          0.26
        );
      }
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
