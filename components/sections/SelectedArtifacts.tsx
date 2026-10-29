import Image from "next/image";
import { TransitionLink } from "@/components/motion/TransitionLink";
import { featuredProjects, type Project } from "@/lib/content/projects";

function ProjectEntry({ project, index }: { project: Project; index: number }) {
  const imageFirst = index % 2 === 1;

  const coverFrame = project.cover ? (
    <div
      data-clip-reveal
      data-vt-cover={project.slug}
      className="group/frame relative w-full overflow-hidden border border-surface-border bg-surface-elevated will-change-[clip-path]"
      style={{ aspectRatio: `${project.cover.width} / ${project.cover.height}` }}
    >
      <div data-lens-image className="relative h-full w-full will-change-transform">
        <Image
          src={project.cover.src}
          alt={project.cover.alt}
          fill
          className="object-cover object-left-top transition-transform duration-700 ease-out group-hover/frame:scale-[1.02]"
          sizes="(max-width: 1023px) 100vw, 60vw"
        />
      </div>
    </div>
  ) : null;

  return (
    <article className="border-b border-surface-border last:border-b-0">
      <div className="page-pad page-width py-10 sm:py-14 lg:py-16">
        <div className="grid lg:grid-cols-12 gap-7 lg:gap-12 items-center">
          <div
            className={`order-1 lg:col-span-4 ${
              imageFirst ? "lg:order-2 lg:col-start-9" : "lg:col-start-1"
            }`}
          >
            <p className="field-meta flex items-center gap-3 text-foreground-subtle">
              <span className="text-accent tabular-nums">0{index + 1}</span>
              <span aria-hidden="true" className="h-px w-7 bg-surface-border" />
              <span>{project.slug === "sonoma" ? "Private system" : "Study platform"}</span>
            </p>
            <h3
              data-vt-title={project.slug}
              className="mt-5 w-fit font-display text-[clamp(2.75rem,5vw,4.25rem)] font-semibold leading-[0.98] tracking-[-0.055em]"
            >
              {project.href ? (
                <TransitionLink
                  href={project.href}
                  transitionKey={project.slug}
                  className="hover:text-accent transition-colors"
                >
                  {project.name}
                </TransitionLink>
              ) : (
                project.name
              )}
            </h3>
            <p className="mt-3 font-display text-[18px] sm:text-[20px] leading-snug tracking-[-0.02em] text-foreground-muted">
              {project.tagline}
            </p>
            <p className="mt-5 max-w-[34rem] text-[15px] sm:text-[16px] leading-[1.75] text-foreground-muted">
              {project.description}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2">
              {project.href && (
                <TransitionLink
                  href={project.href}
                  transitionKey={project.slug}
                  className="group inline-flex min-h-11 items-center gap-3 text-[13px] font-semibold text-foreground hover:text-accent transition-colors"
                >
                  Explore the project
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
                  className="inline-flex min-h-11 items-center gap-2 field-meta text-foreground-subtle hover:text-accent transition-colors"
                >
                  Live preview <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
          </div>

          <figure
            className={`order-2 lg:col-span-7 ${
              imageFirst ? "lg:order-1 lg:col-start-1" : "lg:col-start-6"
            }`}
          >
            {project.href && coverFrame ? (
              <TransitionLink
                href={project.href}
                transitionKey={project.slug}
                aria-label={`Open ${project.name} case study`}
                className="block"
              >
                {coverFrame}
              </TransitionLink>
            ) : (
              coverFrame
            )}
            <figcaption className="mt-3 flex items-center justify-between gap-4 border-t border-surface-border pt-3 field-meta text-foreground-subtle">
              <span>Interface / {project.name}</span>
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
      <div className="page-pad page-width pt-16 sm:pt-20 lg:pt-24 pb-4">
        <div className="grid sm:grid-cols-12 gap-5 sm:gap-8 items-end border-b border-surface-border pb-6">
          <div className="sm:col-span-8">
            <p className="field-meta text-foreground-subtle">Work / 02 current builds</p>
            <h2
              id="work-heading"
              className="mt-3 max-w-[18ch] font-display text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.05] tracking-[-0.045em]"
            >
              Made for problems close to home.
            </h2>
          </div>
          <TransitionLink
            href="/work"
            className="sm:col-span-4 sm:justify-self-end text-[13px] text-foreground-muted hover:text-accent transition-colors min-h-11 inline-flex items-center"
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
