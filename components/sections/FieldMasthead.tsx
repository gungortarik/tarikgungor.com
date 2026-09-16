import Link from "next/link";
import { FieldReveal } from "@/components/motion/FieldReveal";
import { profile } from "@/lib/content/profile";

export function FieldMasthead() {
  return (
    <section
      className="bg-depth text-on-depth"
      aria-labelledby="field-masthead-heading"
      data-field-chapter="masthead"
    >
      <div className="page-pad page-width pt-16 sm:pt-20 lg:pt-28 pb-14 sm:pb-16 lg:pb-24">
        <FieldReveal>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 field-meta text-on-depth-subtle">
            <span>{profile.location}</span>
            <span aria-hidden="true" className="text-on-depth-subtle/50">
              /
            </span>
            <span>{profile.practiceFrame}</span>
          </div>

          <h1
            id="field-masthead-heading"
            className="mt-8 sm:mt-10 field-display text-on-depth max-w-[12ch]"
          >
            {profile.name}
          </h1>

          <p className="mt-8 sm:mt-10 field-lead text-on-depth max-w-[28ch] text-balance">
            {profile.identityLine}
          </p>

          <p className="mt-6 text-[16px] sm:text-[17px] leading-[1.7] text-on-depth-muted max-w-[36rem]">
            {profile.positioning}
          </p>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-[13px]">
            <Link
              href="/work"
              className="text-on-depth hover:text-accent transition-colors underline-offset-4 hover:underline min-h-11 inline-flex items-center"
            >
              Work
            </Link>
            <Link
              href="/lab"
              className="text-on-depth-muted hover:text-on-depth transition-colors underline-offset-4 hover:underline min-h-11 inline-flex items-center"
            >
              Lab
            </Link>
            <Link
              href="/path"
              className="text-on-depth-muted hover:text-on-depth transition-colors underline-offset-4 hover:underline min-h-11 inline-flex items-center"
            >
              Path
            </Link>
          </div>
        </FieldReveal>
      </div>
    </section>
  );
}
