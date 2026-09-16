import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export function PageShell({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`site-stage ${className}`}>
      <aside className="site-rail-left" aria-hidden="true" />
      <div className="site-sheet selection:bg-accent-subtle selection:text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
      <aside className="site-rail-right" aria-hidden="true" />
    </div>
  );
}
