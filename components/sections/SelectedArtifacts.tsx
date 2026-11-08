import Image from "next/image";
import { ScreenshotPreview } from "@/components/ui/ScreenshotPreview";
import { TransitionLink } from "@/components/motion/TransitionLink";
import { screenshots } from "@/lib/content/screenshots";
import { featuredProjects, type Project } from "@/lib/content/projects";

function ProjectEntry({ project, index }: { project: Project; index: number }) {
  const isFlagship = project.slug === "sonoma";
  const imageFirst = !isFlagship && index % 2 === 1;
  const cover = isFlagship ? screenshots.sonomaDashboard : project.cover;

  const coverFrame = cover ? (
    <div
      data-clip-reveal
      data-vt-cover={project.slug}
      className="group/frame relative w-full overflow-hidden border border-surface-border bg-surface-elevated will-change-[clip-path]"
      style={{ aspectRatio: `${cover.width} / ${cover.height}` }}
    >
      <div data-lens-image className="relative h-full w-full will-change-transform">
        <Image
          src={cover.src}
          alt={cover.alt}
          fill
          className="object-cover object-left-top transition-transform duration-700 ease-out group-hover/frame:scale-[1.02]"
          sizes={isFlagship ? "(max-width: 1200px) 100vw, 1120px" : "(max-width: 1023px) 100vw, 640px"}
        />
      </div>
    </div>
  ) : null;

  return (
    <article className="border-b border-surface-border last:border-b-0">
      <div className="page-pad page-width py-8 sm:py-12 lg:py-14">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          <div
            className={`order-1 ${isFlagship ? "lg:col-span-12 lg:grid lg:grid-cols-12 lg:gap-x-12" : "lg:col-span-4"} ${
              imageFirst ? "lg:order-2 lg:col-start-9" : "lg:col-start-1"
            }`}
          >
            <p className="field-meta flex items-center gap-3 text-foreground-subtle lg:col-span-12">
              <span>{isFlagship ? "Featured project / Private tool" : "Study platform"}</span>
            </p>
            <h3
              data-vt-title={project.slug}
              className={`mt-5 w-fit font-display font-semibold leading-[0.98] tracking-[-0.055em] ${isFlagship ? "text-[clamp(3.5rem,7vw,6rem)] lg:col-span-5 lg:row-span-2" : "text-[clamp(2.25rem,4vw,3.25rem)]"}`}
            >
              {project.href ? (
                <TransitionLink
                  href={project.href}
                  transitionKey={project.slug}
                  className="hover:text-accent-ink transition-colors"
                >
                  {project.name}
                </TransitionLink>
              ) : (
                project.name
              )}
            </h3>
            <p className="lg:col-span-7 mt-3 font-display text-[18px] sm:text-[20px] leading-snug tracking-[-0.02em] text-foreground-muted">
              {project.tagline}
            </p>
            <p className="lg:col-span-7 mt-5 max-w-[34rem] text-[15px] sm:text-[16px] leading-[1.75] text-foreground-muted">
              {project.description}
            </p>

            <div className="lg:col-span-12 mt-7 flex flex-wrap items-center gap-x-6 gap-y-2">
              {project.href && (
                <TransitionLink
                  href={project.href}
                  transitionKey={project.slug}
                  className={`group inline-flex min-h-11 items-center gap-3 text-[15px] font-semibold transition-colors ${isFlagship ? "bg-foreground text-surface px-5 py-3 hover:bg-foreground-muted" : "text-foreground hover:text-accent-ink"}`}
                >
                  {isFlagship ? "Explore Sonoma" : "Explore the project"}
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </TransitionLink>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 field-meta text-foreground-subtle hover:text-accent-ink transition-colors"
                >
                  Live preview <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
          </div>

          <figure
            className={`order-2 ${isFlagship ? "lg:col-span-12" : "lg:col-span-7"} ${
              imageFirst ? "lg:order-1 lg:col-start-1" : isFlagship ? "lg:col-start-1" : "lg:col-start-6"
            }`}
          >
            {cover && coverFrame ? (
              <ScreenshotPreview shot={cover} label={`${project.name} screenshot`}>
                {coverFrame}
              </ScreenshotPreview>
            ) : (
              coverFrame
            )}
            <figcaption className="mt-3 flex items-center justify-between gap-4 border-t border-surface-border pt-3 field-meta text-foreground-subtle">
              <span>{isFlagship ? "Sonoma dashboard" : project.name}</span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-accent/80" aria-hidden="true" />
                {project.status === "in-progress" ? "In progress" : project.status}
              </span>
            </figcaption>
          </figure>
        </div>
      </div>
    </article>
  );
}

export function SelectedArtifacts() {
  return (
    <section
      className="bg-surface"
      id="work"
      aria-labelledby="work-heading"
      data-field-chapter="work"
    >
      <div className="page-pad page-width pt-12 sm:pt-16 lg:pt-20 pb-2">
        <div className="grid sm:grid-cols-12 gap-5 sm:gap-8 items-end border-b border-surface-border pb-6">
          <div className="sm:col-span-8">
            <p className="field-meta text-foreground-subtle">Selected work</p>
            <h2
              id="work-heading"
              className="mt-3 max-w-[18ch] font-display text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.05] tracking-[-0.045em]"
            >
              Made for problems close to home.
            </h2>
          </div>
          <TransitionLink
            href="/work"
            className="sm:col-span-4 sm:justify-self-end text-[13px] text-foreground-muted hover:text-accent-ink transition-colors min-h-11 inline-flex items-center"
          >
            Open the work index <span className="ml-3" aria-hidden="true">↗</span>
          </TransitionLink>
        </div>
      </div>

      {featuredProjects.map((project, index) => (
        <ProjectEntry key={project.slug} project={project} index={index} />
      ))}
    </section>
  );
}
