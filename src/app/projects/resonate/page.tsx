import type { Metadata } from "next";
import ResonateContent from "./ResonateContent";

export const metadata: Metadata = {
  title: "Resonate | Case Study",
  description:
    "Building confidence through consistent singing practice \u2014 a practice companion that helps new singers build confidence through structure, feedback, and visible improvement.",
};

export default function ResonateProject() {
  return <ResonateContent />;
}
