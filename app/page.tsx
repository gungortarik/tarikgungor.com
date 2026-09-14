import { PageShell } from "@/components/ui/PageShell";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { ExperienceSnapshot } from "@/components/sections/ExperienceSnapshot";
import { Hero } from "@/components/sections/Hero";
import { PathSoFar } from "@/components/sections/PathSoFar";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { WhoIAm } from "@/components/sections/WhoIAm";

export default function Home() {
  return (
    <PageShell>
      <Hero />
      <WhoIAm />
      <SelectedWork />
      <ExperienceSnapshot />
      <PathSoFar />
      <ContactCTA />
    </PageShell>
  );
}
