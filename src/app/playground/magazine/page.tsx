import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { TextReveal } from "@/components/animation/TextReveal";
import { MagazineGallery } from "./MagazineGallery";

export const metadata: Metadata = {
  title: "Magazine Editorial Experiments | Jason Pham",
  description:
    "An eight-page zine exploring editorial layout, typography, and visual style through magazine design experiments.",
};

export default function MagazinePage() {
  return (
    <div className="min-h-screen p-6">
      <div
        className="max-w-[1600px] mx-auto bg-bg rounded-[32px] relative overflow-hidden"
        style={{
          padding: "3rem",
          boxShadow:
            "0 20px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.05)",
        }}
      >
        {/* Header */}
        <ScrollReveal>
          <div className="pt-24 pb-8">
            <Link
              href="/about"
              className="text-text-secondary text-sm hover:text-text-primary transition-colors mb-8 inline-block"
            >
              ← back to playground
            </Link>
            <TextReveal className="font-serif text-[clamp(3rem,7vw,5rem)] font-normal leading-[1.1] tracking-tight mb-4">
              magazine editorial experiments
            </TextReveal>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="text-text-secondary text-lg md:text-xl max-w-3xl mb-16 leading-relaxed">
            this eight-page zine began as a class brief, but it ended up
            teaching me a lot about my visual style. flip through the spreads to
            see the experiments that helped me figure out what feels like me on
            the page.
          </p>
        </ScrollReveal>

        {/* Gallery */}
        <MagazineGallery />
      </div>
    </div>
  );
}
