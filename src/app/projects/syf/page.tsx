import type { Metadata } from "next";
import { SYFContent } from "./SYFContent";

export const metadata: Metadata = {
  title: "Secure Your Future | Case Study",
  description:
    "Milestone-first financial planning — turning financial anxiety into confident planning with Co-operators.",
};

export default function SYFProject() {
  return <SYFContent />;
}
