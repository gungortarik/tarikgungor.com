"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Homepage Field System motion: chapter fades, optical counter-scale clip reveals,
 * inner scroll parallax, Now-row stagger, Lab schematic reveals, and Path item scrub.
 * Disabled when prefers-reduced-motion.
 */
export function HomeMotion({ children }: { children: React.ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Chapter enter (skip masthead — it has its own load reveal)
      root
        .querySelectorAll<HTMLElement>("[data-field-chapter]:not([data-field-chapter='masthead'])")
        .forEach((chapter) => {
          gsap.fromTo(
            chapter,
            { opacity: 0.35, y: 26 },
            {
              opacity: 1,
              y: 0,
              duration: 0.85,
              ease: "power2.out",
              scrollTrigger: {
                trigger: chapter,
                start: "top 86%",
                toggleActions: "play none none none",
              },
            }
          );
        });

      // Optical Lens Artifact Reveals (clip-path curtain + counter-scale + subtle scroll parallax)
      root.querySelectorAll<HTMLElement>("[data-clip-reveal]").forEach((frame) => {
        const lens = frame.querySelector<HTMLElement>("[data-lens-image]");
        gsap.set(frame, { clipPath: "inset(100% 0 0 0)" });
        if (lens) {
          gsap.set(lens, { scale: 1.09 });
        }

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: frame,
            start: "top 82%",
            toggleActions: "play none none none",
          },
        });

        tl.to(
          frame,
          {
            clipPath: "inset(0% 0 0 0)",
            duration: 1.15,
            ease: "power3.inOut",
          },
          0
        );

        if (lens) {
          tl.to(
            lens,
            {
              scale: 1,
              duration: 1.35,
              ease: "power3.out",
            },
            0.05
          );

          gsap.fromTo(
            lens,
            { yPercent: -2.5 },
            {
              yPercent: 2.5,
              ease: "none",
              scrollTrigger: {
                trigger: frame,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        }
      });

      // Now rows stagger
      const nowRows = root.querySelectorAll<HTMLElement>("[data-now-row]");
      if (nowRows.length) {
        gsap.fromTo(
          nowRows,
          { opacity: 0, x: -12 },
          {
            opacity: 1,
            x: 0,
            duration: 0.55,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: root.querySelector("[data-field-chapter='now']"),
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );

        // One-shot accent pulse on first Now index mark
        const firstMark = root.querySelector<HTMLElement>("[data-now-mark]");
        if (firstMark) {
          gsap.fromTo(
            firstMark,
            { color: "var(--foreground-subtle)" },
            {
              color: "var(--accent)",
              duration: 0.45,
              yoyo: true,
              repeat: 1,
              delay: 0.35,
              ease: "power1.inOut",
              scrollTrigger: {
                trigger: root.querySelector("[data-field-chapter='now']"),
                start: "top 80%",
                toggleActions: "play none none none",
              },
            }
          );
        }
      }

      // Lab plates stagger
      const labItems = root.querySelectorAll<HTMLElement>("[data-lab-item]");
      if (labItems.length) {
        gsap.fromTo(
          labItems,
          { opacity: 0, y: 18 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: root.querySelector("[data-field-chapter='lab']"),
              start: "top 78%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Path milestones stagger
      const pathItems = root.querySelectorAll<HTMLElement>("[data-path-item]");
      if (pathItems.length) {
        gsap.fromTo(
          pathItems,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            stagger: 0.09,
            ease: "power2.out",
            scrollTrigger: {
              trigger: root.querySelector("[data-field-chapter='path']"),
              start: "top 78%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, root);

    const refreshTimer = window.setTimeout(() => ScrollTrigger.refresh(), 450);

    return () => {
      window.clearTimeout(refreshTimer);
      ctx.revert();
    };
  }, []);

  return (
    <div ref={rootRef} className="contents">
      {children}
    </div>
  );
}
