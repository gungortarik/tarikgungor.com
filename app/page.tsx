import { PageShell } from "@/components/ui/PageShell";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { ExperienceSnapshot } from "@/components/sections/ExperienceSnapshot";
import { Hero } from "@/components/sections/Hero";
import { NotesTeaser } from "@/components/sections/NotesTeaser";
import { PathSoFar } from "@/components/sections/PathSoFar";
import { ResumePreview } from "@/components/sections/ResumePreview";
import { RightNow } from "@/components/sections/RightNow";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { WhoIAm } from "@/components/sections/WhoIAm";

export default function Home() {
  return (
    <PageShell>
      <Hero />
      <WhoIAm />
      <RightNow />
      <SelectedWork />
      <ExperienceSnapshot />
      <ResumePreview />
      <PathSoFar />
      <NotesTeaser />
      <ContactCTA />
    </PageShell>
  );
}
