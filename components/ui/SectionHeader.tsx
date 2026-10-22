export function SectionHeader({
  label,
  title,
  description,
  className = "",
  quiet = false,
}: {
  label?: string;
  title?: string;
  description?: string;
  className?: string;
  quiet?: boolean;
}) {
  return (
    <div className={className}>
      {label && (
        <p className="text-[11px] font-mono font-medium tracking-[0.2em] uppercase text-foreground-muted mb-4">
          {label}
        </p>
      )}
      {title && (
        <h2
          className={`font-serif text-foreground font-medium leading-[1.15] tracking-tight text-balance ${
            quiet
              ? "text-[24px] sm:text-[28px]"
              : "text-[32px] sm:text-[40px] lg:text-[48px]"
          }`}
        >
          {title}
        </h2>
      )}
      {description && (
        <p className="text-[15px] sm:text-[16px] text-foreground-muted leading-[1.65] mt-4 max-w-[640px]">
          {description}
        </p>
      )}
    </div>
  );
}
