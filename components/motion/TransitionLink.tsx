"use client";

import Link from "next/link";
import { waitForMainSwap } from "@/lib/utils/wait-for-main-swap";
import { useRouter } from "next/navigation";
import type { ComponentProps, MouseEvent } from "react";

interface TransitionLinkProps extends ComponentProps<typeof Link> {
  transitionKey?: string;
}

function inferProjectSlug(path: string): string | undefined {
  const match = path.match(/^\/work\/(sonoma|certforge)(?:\/|$)/);
  return match ? match[1] : undefined;
}

export function TransitionLink({
  href,
  transitionKey,
  onClick,
  children,
  ...rest
}: TransitionLinkProps) {
  const router = useRouter();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (
      e.defaultPrevented ||
      e.button !== 0 ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey
    ) {
      return;
    }

    const rawUrl = typeof href === "string" ? href : href.pathname ?? "";
    if (!rawUrl.startsWith("/") || rawUrl.startsWith("//") || rawUrl.includes("#")) {
      return;
    }

    if (typeof window === "undefined") return;
    if (rawUrl === window.location.pathname) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const docWithVT = document as Document & {
      startViewTransition?: (cb: () => Promise<void> | void) => {
        ready: Promise<void>;
        updateCallbackDone: Promise<void>;
        finished: Promise<void>;
      };
    };

    if (prefersReducedMotion || typeof docWithVT.startViewTransition !== "function") {
      return;
    }

    e.preventDefault();

    const html = document.documentElement;
    const activeSlug =
      transitionKey ??
      inferProjectSlug(rawUrl) ??
      inferProjectSlug(window.location.pathname);

    if (activeSlug) {
      html.dataset.activeTransition = activeSlug;
    } else {
      html.dataset.activeTransition = "route";
    }

    const viewport = { width: window.innerWidth, height: window.innerHeight };
    const transition = docWithVT.startViewTransition(async () => {
      const swapPromise = waitForMainSwap();
      router.push(rawUrl);
      await swapPromise;
    });

    // A resized viewport can skip the animation while navigation still succeeds.
    // `ready` rejects independently of `finished`, so both must be handled.
    void transition.ready.catch((error: unknown) => {
      const resized = viewport.width !== window.innerWidth || viewport.height !== window.innerHeight;
      if (error instanceof DOMException && (
        error.name === "AbortError" || (error.name === "InvalidStateError" && resized)
      )) return;
      console.error("Page transition animation failed:", error);
    });
    void transition.updateCallbackDone.catch(() => {
      // Navigation failures are reported by `finished` below.
    });

    transition.finished.finally(() => {
      delete html.dataset.activeTransition;
      const heading = document.querySelector<HTMLElement>("main h1");
      if (heading) {
        if (!heading.hasAttribute("tabindex")) {
          heading.setAttribute("tabindex", "-1");
        }
        heading.focus({ preventScroll: true });
      }
    }).catch((error: unknown) => {
      console.error("Page transition failed:", error);
    });
  };

  return (
    <Link href={href} onClick={handleClick} {...rest}>
      {children}
    </Link>
  );
}
