import type { Metadata } from "next";
import { BlobDecor } from "@/components/shared/BlobDecor";
import { HeroSection } from "@/components/about/HeroSection";
import { HobbyGrid } from "@/components/about/HobbyGrid";
import { SpotifySection } from "@/components/about/SpotifySection";
import { PrincipleCards } from "@/components/about/PrincipleCards";
import { ExperienceTimeline } from "@/components/about/ExperienceTimeline";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Jason Pham - Product Designer passionate about human-centered design",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen p-2 sm:p-4 md:p-6 overflow-x-hidden">
      <div
        className="max-w-[1600px] mx-auto bg-bg rounded-[24px] md:rounded-[32px] relative overflow-hidden"
        style={{
          padding: "clamp(1.5rem, 3vw, 3rem)",
          boxShadow:
            "0 20px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.05)",
        }}
      >
        <BlobDecor />

        <HeroSection />

        <main className="relative z-[1]">
          <HobbyGrid />
          <SpotifySection />
          <PrincipleCards />
          <ExperienceTimeline />
        </main>

        {/* About page footer inside container */}
        <footer className="text-center py-16 mt-16 border-t border-white/[0.08] relative z-[1]">
          <p className="text-sm text-text-muted mb-4">made in canada 🍁</p>
          <p className="font-serif text-[clamp(1.5rem,3vw,2.5rem)] font-normal italic text-text-primary tracking-tight">
            let&apos;s make something beautiful.
          </p>
        </footer>
      </div>
    </div>
  );
}
