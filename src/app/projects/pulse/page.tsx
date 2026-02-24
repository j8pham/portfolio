import type { Metadata } from "next";
import PulseContent from "./PulseContent";

export const metadata: Metadata = {
  title: "Pulse | Case Study",
  description:
    "A self-triage kiosk that calms emergency room chaos — shortens intake by 25%, keeps patients informed, and gives nurses actionable context.",
};

export default function PulseProject() {
  return <PulseContent />;
}
