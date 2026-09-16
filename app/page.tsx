import { PageShell } from "@/components/ui/PageShell";
import { HomeMotion } from "@/components/motion/HomeMotion";
import { Connect } from "@/components/sections/Connect";
import { FieldMasthead } from "@/components/sections/FieldMasthead";
import { LabPlate } from "@/components/sections/LabPlate";
import { NowSignal } from "@/components/sections/NowSignal";
import { PathContinuum } from "@/components/sections/PathContinuum";
import { SelectedArtifacts } from "@/components/sections/SelectedArtifacts";

export default function Home() {
  return (
    <PageShell>
      <HomeMotion>
        <FieldMasthead />
        <NowSignal />
        <SelectedArtifacts />
        <LabPlate />
        <PathContinuum />
        <Connect />
      </HomeMotion>
    </PageShell>
  );
}
