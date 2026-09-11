import Link from "next/link";

export function Card({
  children,
  href,
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
}) {
  const classes = `rounded-2xl border border-surface-border bg-surface-elevated p-6 sm:p-7 transition-colors ${className}`;

  if (href) {
    return (
      <Link href={href} className={`block hover:border-accent/30 hover:bg-surface-muted/50 ${classes}`}>
        {children}
      </Link>
    );
  }

  return <div className={classes}>{children}</div>;
}
