import Link from "next/link";

export function Card({
  children,
  href,
  external = false,
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  external?: boolean;
  className?: string;
}) {
  const classes = `block ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`hover:opacity-90 transition-opacity ${classes}`}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={`hover:opacity-90 transition-opacity ${classes}`}>
        {children}
      </Link>
    );
  }

  return <div className={classes}>{children}</div>;
}
