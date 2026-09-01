import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink selection:bg-olive-light selection:text-ink">
      <Header />
      <main className="flex-1 flex flex-col justify-center">
        <Hero />
      </main>
    </div>
  );
}

