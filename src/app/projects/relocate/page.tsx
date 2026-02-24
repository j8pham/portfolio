import type { Metadata } from "next";
import RelocateContent from "./RelocateContent";

export const metadata: Metadata = {
  title: "Relocate | Case Study",
  description:
    "Making community recreation easy to find and book. From PDF schedules to confident bookings — redesigning municipal recreation discovery.",
};

export default function RelocateProject() {
  return <RelocateContent />;
}
