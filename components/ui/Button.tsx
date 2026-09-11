import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-foreground text-surface hover:opacity-90 dark:bg-surface dark:text-foreground",
  secondary:
    "border border-surface-border bg-surface-elevated text-foreground hover:bg-surface-muted",
  ghost: "text-foreground-muted hover:text-foreground",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-xs",
  md: "px-5 py-2.5 text-sm",
};

function baseClasses(variant: ButtonVariant, size: ButtonSize, className: string) {
  return `inline-flex items-center justify-center gap-2 rounded-lg font-semibold tracking-tight transition-all active:scale-[0.99] ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
}

export function Button({
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
  external,
  download,
}: ButtonBaseProps & {
  href: string;
  external?: boolean;
  download?: string;
}) {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses(variant, size, className)}
      >
        {children}
      </a>
    );
  }

  if (download) {
    return (
      <a href={href} download={download} className={baseClasses(variant, size, className)}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={baseClasses(variant, size, className)}>
      {children}
    </Link>
  );
}
