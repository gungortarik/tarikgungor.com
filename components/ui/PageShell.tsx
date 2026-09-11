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
    <div className={`min-h-screen flex flex-col bg-surface text-foreground selection:bg-accent-subtle selection:text-foreground ${className}`}>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
