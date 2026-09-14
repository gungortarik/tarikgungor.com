import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md";
type ButtonTone = "surface" | "depth";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  tone?: ButtonTone;
  className?: string;
  children: React.ReactNode;
}

const surfaceVariantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-foreground text-surface hover:opacity-90 dark:bg-on-depth dark:text-on-depth-fill-fg",
  secondary:
    "border border-surface-border bg-transparent text-foreground hover:bg-surface-muted/70",
  ghost: "text-foreground-muted hover:text-foreground underline-offset-4 hover:underline",
};

const depthVariantClasses: Record<ButtonVariant, string> = {
  primary: "bg-on-depth-fill text-on-depth-fill-fg hover:opacity-90",
  secondary:
    "border border-on-depth-border bg-transparent text-on-depth hover:bg-on-depth/10",
  ghost: "text-on-depth-muted hover:text-on-depth underline-offset-4 hover:underline",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-xs tracking-[0.02em]",
  md: "px-5 py-2.5 text-sm tracking-[0.01em]",
};

function baseClasses(
  variant: ButtonVariant,
  size: ButtonSize,
  tone: ButtonTone,
  className: string
) {
  const variants = tone === "depth" ? depthVariantClasses : surfaceVariantClasses;
  return `inline-flex items-center justify-center gap-2 rounded-sm font-medium transition-colors active:scale-[0.99] ${variants[variant]} ${sizeClasses[size]} ${className}`;
}

export function Button({
  href,
  variant = "primary",
  size = "md",
  tone = "surface",
  className = "",
  children,
  external,
  download,
}: ButtonBaseProps & {
  href: string;
  external?: boolean;
  download?: string;
}) {
  const classes = baseClasses(variant, size, tone, className);

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  if (download) {
    return (
      <a href={href} download={download} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
