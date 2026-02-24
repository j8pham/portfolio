import type { Metadata } from "next";
import { PulseShowcaseContent } from "./PulseShowcaseContent";

export const metadata: Metadata = {
  title: "Pulse - Visual Showcase | Jason Pham",
  description:
    "A deep-dive visual showcase of Pulse, an ER self-triage kiosk designed to reduce patient anxiety and streamline intake.",
};

export default function PulseShowcasePage() {
  return <PulseShowcaseContent />;
}
