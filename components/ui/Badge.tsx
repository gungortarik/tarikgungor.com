type BadgeVariant = "default" | "accent";

const variantClasses: Record<BadgeVariant, string> = {
  default: "text-foreground-muted",
  accent: "text-accent",
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
      className={`inline-flex items-center text-[10px] font-mono font-medium tracking-[0.16em] uppercase ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
