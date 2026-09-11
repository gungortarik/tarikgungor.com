type BadgeVariant = "default" | "accent" | "status";

const variantClasses: Record<BadgeVariant, string> = {
  default: "bg-surface-muted text-foreground-muted border-surface-border",
  accent: "bg-accent-subtle text-accent-muted border-accent/20",
  status: "bg-status-green/10 text-status-green border-status-green/20",
};

export function Badge({
  children,
  variant = "default",
  className = "",
}: {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center text-[10px] font-mono font-medium px-2.5 py-1 rounded-full border tracking-wide uppercase ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
