"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { ComponentProps, MouseEvent } from "react";

interface TransitionLinkProps extends ComponentProps<typeof Link> {
  transitionKey?: string;
}

function inferProjectSlug(path: string): string | undefined {
  const match = path.match(/^\/work\/(sonoma|certforge)(?:\/|$)/);
  return match ? match[1] : undefined;
}

function waitForMainSwap(timeoutMs = 260): Promise<void> {
  return new Promise((resolve) => {
    const main = document.querySelector("main");
    if (!main) {
      window.setTimeout(resolve, 48);
      return;
    }

    let settled = false;
    const finish = () => {
      if (settled) return;
      settled = true;
      observer.disconnect();
      window.clearTimeout(timer);
      requestAnimationFrame(() => resolve());
    };

    const observer = new MutationObserver(() => {
      finish();
    });

    observer.observe(main, { childList: true, subtree: true });
    const timer = window.setTimeout(finish, timeoutMs);
  });
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

    const transition = docWithVT.startViewTransition(async () => {
      const swapPromise = waitForMainSwap();
      router.push(rawUrl);
      await swapPromise;
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
    });
  };

  return (
    <Link href={href} onClick={handleClick} {...rest}>
      {children}
    </Link>
  );
}
