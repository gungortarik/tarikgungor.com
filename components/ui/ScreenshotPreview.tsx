"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import type { Screenshot } from "@/lib/content/screenshots";

export function ScreenshotPreview({
  shot,
  label,
  children,
}: {
  shot: Screenshot;
  label: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const viewport = useRef<HTMLDivElement>(null);
  const titleId = useId();

  useEffect(() => {
    if (!open) return;
    const element = dialog.current;
    const triggerElement = trigger.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    element?.showModal();
    return () => {
      document.body.style.overflow = previousOverflow;
      triggerElement?.focus({ preventScroll: true });
    };
  }, [open]);

  function changeZoom(value: number) {
    setZoom(value);
    viewport.current?.scrollTo({ left: 0, top: 0, behavior: "instant" });
  }

  return (
    <>
      <div className="relative">
        {children}
        <button
          ref={trigger}
          type="button"
          aria-label={`Enlarge ${label}`}
          aria-haspopup="dialog"
          className="absolute inset-0 cursor-zoom-in group/zoom"
          onClick={() => { setZoom(1); setOpen(true); }}
        >
          <span className="absolute bottom-3 right-3 bg-depth px-3 py-2 text-on-depth text-[12px] border border-on-depth-border group-hover/zoom:underline">
            Enlarge <span aria-hidden="true">↗</span>
          </span>
        </button>
      </div>
      <dialog
        ref={dialog}
        aria-labelledby={titleId}
        onClose={() => setOpen(false)}
        className="fixed inset-0 m-0 h-dvh w-screen max-h-none max-w-none bg-depth text-on-depth p-0 backdrop:bg-black/80"
        data-lenis-prevent
      >
        {open && (
          <div className="flex h-full flex-col">
            <div className="flex shrink-0 flex-wrap items-center justify-between gap-x-4 gap-y-2 border-b border-on-depth-border px-4 py-2">
              <h2 id={titleId} className="text-sm font-medium">{label}</h2>
              <div className="flex items-center gap-1">
                <button type="button" aria-label="Zoom out" disabled={zoom === 1} onClick={() => changeZoom(zoom - 1)} className="min-h-11 min-w-11 border border-on-depth-border disabled:opacity-40 hover:bg-depth-surface">−</button>
                <button type="button" aria-label="Fit image to screen" onClick={() => changeZoom(1)} className="min-h-11 px-3 text-sm hover:bg-depth-surface">{zoom === 1 ? "Fit" : `${zoom * 100}%`}</button>
                <button type="button" aria-label="Zoom in" disabled={zoom === 3} onClick={() => changeZoom(zoom + 1)} className="min-h-11 min-w-11 border border-on-depth-border disabled:opacity-40 hover:bg-depth-surface">+</button>
                <button type="button" autoFocus onClick={() => dialog.current?.close()} className="ml-2 min-h-11 px-3 text-sm border border-on-depth-border hover:bg-depth-surface">Close</button>
              </div>
            </div>
            <div ref={viewport} tabIndex={0} role="region" aria-label="Image viewport; scroll to inspect when zoomed" className="min-h-0 flex-1 overflow-auto overscroll-contain" data-lenis-prevent>
              <div className={zoom === 1 ? "flex h-full items-center justify-center p-4" : "p-4"} style={{ width: `${zoom * 100}%` }}>
                <Image src={shot.src} alt={shot.alt} width={shot.width} height={shot.height} sizes="100vw" className={zoom === 1 ? "h-auto w-auto max-h-full max-w-full object-contain" : "h-auto w-full max-w-none"} />
              </div>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
