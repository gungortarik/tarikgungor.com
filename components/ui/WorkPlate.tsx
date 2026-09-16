import Image from "next/image";
import type { Screenshot } from "@/lib/content/screenshots";

export function WorkPlate({
  shot,
  depth = false,
  priority = false,
  flush = false,
  stage = false,
  caption,
  sizes = "(max-width: 1023px) 100vw, 1600px",
}: {
  shot: Screenshot;
  depth?: boolean;
  priority?: boolean;
  flush?: boolean;
  stage?: boolean;
  caption?: string;
  sizes?: string;
}) {
  const tone = depth
    ? flush || stage
      ? "bg-depth-elevated"
      : "border border-on-depth-border bg-depth-elevated"
    : flush || stage
      ? "bg-surface-muted"
      : "border border-surface-border bg-surface-muted";

  return (
    <figure className={stage ? "relative h-full w-full min-w-0" : "min-w-0"}>
      <div
        className={`${stage ? "absolute inset-0" : "relative w-full"} overflow-hidden ${tone}`}
        style={stage ? undefined : { aspectRatio: `${shot.width} / ${shot.height}` }}
      >
        <Image
          src={shot.src}
          alt={shot.alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover object-left-top"
        />
      </div>
      {caption && !stage ? (
        <figcaption
          className={`mt-3 font-mono text-[11px] tracking-[0.04em] ${
            flush ? "px-6 sm:px-8 lg:px-12 pb-6" : ""
          } ${depth ? "text-on-depth-muted" : "text-foreground-muted"}`}
        >
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
