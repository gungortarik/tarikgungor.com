export function CurrentlyFocusing() {
  const focusAreas = [
    {
      title: "Building",
      description: "Ship useful products\nthat create real value.",
      linkText: "See projects",
      href: "#work",
      icon: (
        <svg
          className="w-5 h-5 text-ink shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
    },
    {
      title: "Learning",
      description: "Explore deeply,\nfrom systems to ideas.",
      linkText: "See notes",
      href: "#notes",
      icon: (
        <svg
          className="w-5 h-5 text-ink shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          <line x1="12" y1="6" x2="16" y2="6" />
          <line x1="12" y1="10" x2="16" y2="10" />
        </svg>
      ),
    },
    {
      title: "Sharing",
      description: "Write to connect, help,\nand record the journey.",
      linkText: "Read thoughts",
      href: "#notes",
      icon: (
        <svg
          className="w-5 h-5 text-ink shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <line x1="10" y1="9" x2="8" y2="9" />
        </svg>
      ),
    },
    {
      title: "Living",
      description: "Life outside the screen.\nTravel, books, training.",
      linkText: "See glimpses",
      href: "#life",
      icon: (
        <svg
          className="w-5 h-5 text-ink shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-6 pt-2 pb-8 sm:pb-10 lg:pb-12">
      {/* Section Header with Rule and Far-Right Accent Dot */}
      <div className="flex items-center gap-4 mb-8 sm:mb-10">
        <h2 className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.2em] text-ink uppercase shrink-0">
          Currently Focusing On
        </h2>
        <div className="flex-1 h-[1px] bg-paper-border" />
        <span
          className="w-1.5 h-1.5 rounded-full bg-olive-indicator shrink-0"
          aria-hidden="true"
        />
      </div>

      {/* 4 Equal Editorial Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-paper-border">
        {focusAreas.map((item, index) => (
          <div
            key={item.title}
            className={`flex flex-col justify-between py-6 sm:py-0 ${
              index === 0
                ? "sm:pr-6 lg:pr-8"
                : index === focusAreas.length - 1
                ? "sm:pl-6 lg:pl-8"
                : "sm:px-6 lg:px-8"
            }`}
          >
            <div>
              {/* Header: Icon + Serif Title */}
              <div className="flex items-center gap-2.5">
                {item.icon}
                <h3 className="font-serif text-[19px] sm:text-[21px] text-ink font-normal tracking-tight">
                  {item.title}
                </h3>
              </div>

              {/* Short Descriptive Copy */}
              <p className="text-[13px] text-ink-muted leading-[1.6] mt-3 mb-6 whitespace-pre-line">
                {item.description}
              </p>
            </div>

            {/* Bottom Text Link with Arrow */}
            <a
              href={item.href}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink hover:opacity-70 transition-opacity self-start group"
            >
              <span>{item.linkText}</span>
              <span
                className="text-xs transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              >
                →
              </span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
