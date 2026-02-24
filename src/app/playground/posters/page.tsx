import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { TextReveal } from "@/components/animation/TextReveal";
import { PostersGallery } from "./PostersGallery";

export const metadata: Metadata = {
  title: "Cinematic Poster Studies | Jason Pham",
  description:
    "A pair of cinematic poster designs exploring bold type, dramatic lighting, and compositing for theater-lobby-style teasers.",
};

export default function PostersPage() {
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
              cinematic poster studies
            </TextReveal>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="text-text-secondary text-lg md:text-xl max-w-3xl mb-16 leading-relaxed">
            this pair came from a class prompt that nudged me toward cinematic
            storytelling. i mixed bold type, dramatic lighting, and a bit of
            compositing magic to give each poster the vibe of a teaser you might
            spot in a theater lobby.
          </p>
        </ScrollReveal>

        {/* Gallery */}
        <PostersGallery />
      </div>
    </div>
  );
}
