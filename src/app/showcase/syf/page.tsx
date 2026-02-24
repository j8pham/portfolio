import type { Metadata } from "next";
import { SYFShowcaseContent } from "./SYFShowcaseContent";

export const metadata: Metadata = {
  title: "Secure Your Future - Visual Showcase | Jason Pham",
  description:
    "A deep-dive visual showcase of the Secure Your Future financial planning tool designed during a one-week sprint with Co-operators.",
};

export default function SYFShowcasePage() {
  return <SYFShowcaseContent />;
}
