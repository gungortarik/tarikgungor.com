import Link from "next/link";

export function ResumePreview() {
  return (
    <section
      id="resume"
      className="w-full max-w-[1480px] mx-auto px-6 sm:px-8 lg:px-10 py-10 sm:py-12 lg:py-14"
    >
      {/* Section Header with Rule and Far-Right Accent Dot */}
      <div className="flex items-center gap-4 mb-5 sm:mb-6">
        <h2 className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.2em] text-ink uppercase shrink-0">
          RESUME
        </h2>
        <div className="flex-1 h-[1px] bg-paper-border" />
        <span
          className="w-1.5 h-1.5 rounded-full bg-olive-indicator shrink-0"
          aria-hidden="true"
        />
      </div>

      {/* Main Content Grid */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8">
        <div className="max-w-[620px]">
          <h3 className="font-serif text-[22px] sm:text-[26px] lg:text-[28px] text-ink font-normal leading-[1.3] tracking-tight">
            Experience, education, and technical work.
          </h3>
          <p className="text-[13.5px] sm:text-[14px] text-ink-muted leading-[1.65] mt-2.5">
            A concise version of my professional background for people who need the traditional version.
          </p>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          <Link
            href="/resume"
            className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2.5 rounded-lg bg-[#141413] text-[#f4f0e8] dark:bg-[#f4f0e8] dark:text-[#141413] font-semibold text-xs sm:text-[13px] tracking-tight hover:opacity-90 active:scale-[0.99] transition-all"
          >
            <span>View resume</span>
            <span aria-hidden="true">→</span>
          </Link>

          <a
            href="/resume/tarik-gungor-resume.pdf"
            download="tarik-gungor-resume.pdf"
            className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2.5 rounded-lg border border-paper-border dark:border-white/15 text-ink dark:text-white font-medium text-xs sm:text-[13px] hover:bg-paper-muted/50 dark:hover:bg-white/5 transition-colors"
          >
            <span>Download PDF</span>
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
