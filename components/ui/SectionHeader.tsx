export function SectionHeader({
  label,
  title,
  description,
  className = "",
}: {
  label: string;
  title?: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="flex items-center gap-4 mb-4">
        <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.2em] text-foreground-muted uppercase shrink-0">
          {label}
        </span>
        <div className="flex-1 h-px bg-surface-border" />
        <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" aria-hidden="true" />
      </div>
      {title && (
        <h2 className="font-serif text-[28px] sm:text-[34px] lg:text-[38px] text-foreground font-normal leading-[1.15] tracking-tight text-balance">
          {title}
        </h2>
      )}
      {description && (
        <p className="text-[15px] sm:text-[16px] text-foreground-muted leading-[1.65] mt-3 max-w-[640px]">
          {description}
        </p>
      )}
    </div>
  );
}
