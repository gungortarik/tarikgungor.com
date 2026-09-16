import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { featuredProjects } from "@/lib/content/projects";
import { screenshots } from "@/lib/content/screenshots";

const statusNote: Record<string, string> = {
  sonoma: "Private · In progress",
  certforge: "Live preview · In progress",
};

export function SelectedArtifacts() {
  const sonoma = featuredProjects.find((p) => p.slug === "sonoma");
  const certforge = featuredProjects.find((p) => p.slug === "certforge");

  return (
    <section
      className="bg-surface"
      aria-labelledby="work-heading"
      data-field-chapter="work"
    >
      <div className="page-pad page-width pt-16 sm:pt-20 lg:pt-24 pb-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 border-b border-surface-border pb-6">
          <div>
            <p className="field-meta text-foreground-subtle">Work</p>
            <h2
              id="work-heading"
              className="mt-3 font-serif text-[28px] sm:text-[36px] lg:text-[42px] tracking-[-0.03em] font-medium leading-[1.1] max-w-[18ch]"
            >
              Selected artifacts
            </h2>
          </div>
          <Link
            href="/work"
            className="text-[13px] text-foreground-muted hover:text-accent transition-colors min-h-11 inline-flex items-center"
          >
            Full registry →
          </Link>
        </div>
      </div>

      {sonoma && (
        <article className="border-b border-surface-border">
          <div className="page-pad page-width py-10 sm:py-14 grid lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
              <p className="field-meta text-accent">{statusNote.sonoma}</p>
              <h3 className="mt-4 font-serif text-[40px] sm:text-[52px] tracking-[-0.035em] font-semibold leading-none">
                {sonoma.name}
              </h3>
              <p className="mt-3 text-[17px] text-foreground-muted">{sonoma.tagline}</p>
              <p className="mt-5 text-[15px] sm:text-[16px] leading-[1.7] text-foreground-muted max-w-[34rem]">
                {sonoma.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/work/sonoma" size="sm">
                  Case study →
                </Button>
              </div>
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div
                data-clip-reveal
                className="relative w-full overflow-hidden bg-depth border border-surface-border will-change-[clip-path]"
                style={{
                  aspectRatio: `${screenshots.sonomaLanding.width} / ${screenshots.sonomaLanding.height}`,
                }}
              >
                <Image
                  src={screenshots.sonomaLanding.src}
                  alt={screenshots.sonomaLanding.alt}
                  fill
                  priority
                  className="object-cover object-left-top"
                  sizes="(max-width: 1023px) 100vw, 60vw"
                />
              </div>
            </div>
          </div>
        </article>
      )}

      {certforge && (
        <article>
          <div className="page-pad page-width py-10 sm:py-14 grid lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-7">
              <div
                data-clip-reveal
                className="relative w-full overflow-hidden bg-depth border border-surface-border will-change-[clip-path]"
                style={{
                  aspectRatio: `${screenshots.certforgeLanding.width} / ${screenshots.certforgeLanding.height}`,
                }}
              >
                <Image
                  src={screenshots.certforgeLanding.src}
                  alt={screenshots.certforgeLanding.alt}
                  fill
                  className="object-cover object-left-top"
                  sizes="(max-width: 1023px) 100vw, 60vw"
                />
              </div>
            </div>
            <div className="lg:col-span-5 flex flex-col justify-center">
              <p className="field-meta text-accent">{statusNote.certforge}</p>
              <h3 className="mt-4 font-serif text-[36px] sm:text-[44px] tracking-[-0.035em] font-semibold leading-none">
                {certforge.name}
              </h3>
              <p className="mt-3 text-[17px] text-foreground-muted">{certforge.tagline}</p>
              <p className="mt-5 text-[15px] sm:text-[16px] leading-[1.7] text-foreground-muted max-w-[34rem]">
                {certforge.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/work/certforge" size="sm" variant="secondary">
                  Case study →
                </Button>
                {certforge.liveUrl && (
                  <Button href={certforge.liveUrl} external size="sm" variant="ghost">
                    Live preview ↗
                  </Button>
                )}
              </div>
            </div>
          </div>
        </article>
      )}
    </section>
  );
}
