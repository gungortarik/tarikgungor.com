"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const html = document.documentElement;
    const bar = progressRef.current;

    if (prefersReducedMotion) {
      if (bar) gsap.set(bar, { scaleX: 1 });
      return;
    }

    html.classList.add("lenis", "lenis-smooth");

    const lenis = new Lenis({
      duration: 1.22,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.86,
    });

    lenisRef.current = lenis;
    lenis.on("scroll", ScrollTrigger.update);

    const onAnchorClick = (event: MouseEvent) => {
      const target = (event.target as HTMLElement | null)?.closest("a[href]");
      if (!(target instanceof HTMLAnchorElement)) return;
      const href = target.getAttribute("href");
      if (!href) return;
      let url: URL;
      try {
        url = new URL(href, window.location.href);
      } catch {
        return;
      }
      if (url.pathname !== window.location.pathname) return;
      const id = decodeURIComponent(url.hash.replace(/^#/, ""));
      if (!id) return;
      const el = document.getElementById(id);
      if (!el) return;
      event.preventDefault();
      lenis.scrollTo(el, { offset: -80, duration: 1.2 });
    };

    document.addEventListener("click", onAnchorClick);

    const raf = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    const motion = gsap.context(() => {
      if (bar) {
        gsap.set(bar, { scaleX: 0, transformOrigin: "left center" });
        ScrollTrigger.create({
          start: 0,
          end: "max",
          onUpdate: (self) => {
            gsap.set(bar, { scaleX: self.progress });
          },
        });
      }
    });

    const refresh = () => ScrollTrigger.refresh();
    const refreshTimer = window.setTimeout(refresh, 350);

    return () => {
      window.clearTimeout(refreshTimer);
      document.removeEventListener("click", onAnchorClick);
      gsap.ticker.remove(raf);
      motion.revert();
      html.classList.remove("lenis", "lenis-smooth");
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return (
    <>
      <div
        className="pointer-events-none fixed top-0 left-0 right-0 z-[60] h-[2px]"
        aria-hidden="true"
      >
        <div ref={progressRef} className="h-full w-full bg-accent origin-left scale-x-0" />
      </div>
      {children}
    </>
  );
}
