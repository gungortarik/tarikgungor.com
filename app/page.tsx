import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { DarkFeatured } from "@/components/sections/DarkFeatured";
import { RightNow } from "@/components/sections/Focus";
import { Hero } from "@/components/sections/Hero";
import { LifeSignal } from "@/components/sections/LifeSignal";
import { PathSoFar } from "@/components/sections/PathSoFar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink selection:bg-olive-indicator/20 selection:text-ink">
      <Header />
      <main className="flex-1">
        <Hero />
        <RightNow />
        <DarkFeatured />
        <PathSoFar />
        <LifeSignal />
      </main>
      <Footer />
    </div>
  );
}

