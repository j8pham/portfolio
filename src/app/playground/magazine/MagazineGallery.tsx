"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { ImageClipReveal } from "@/components/animation/ImageClipReveal";
import { Lightbox, LightboxImage } from "@/components/case-study/Lightbox";

const pages = [
  {
    src: "/assets/images/branding/GBDA101_A4_Magazine_Design_Final_JasonP-1-1.png",
    alt: "magazine page 1 - cover",
  },
  {
    src: "/assets/images/branding/GBDA101_A4_Magazine_Design_Final_JasonP-1-2.png",
    alt: "magazine page 2 - contents spread",
  },
  {
    src: "/assets/images/branding/GBDA101_A4_Magazine_Design_Final_JasonP-1-3.png",
    alt: "magazine page 3 - feature story introduction",
  },
  {
    src: "/assets/images/branding/GBDA101_A4_Magazine_Design_Final_JasonP-1-4.png",
    alt: "magazine page 4 - feature story continuation",
  },
  {
    src: "/assets/images/branding/GBDA101_A4_Magazine_Design_Final_JasonP-1-5.png",
    alt: "magazine page 5 - photo spread",
  },
  {
    src: "/assets/images/branding/GBDA101_A4_Magazine_Design_Final_JasonP-1-6.png",
    alt: "magazine page 6 - interview layout",
  },
  {
    src: "/assets/images/branding/GBDA101_A4_Magazine_Design_Final_JasonP-1-7.png",
    alt: "magazine page 7 - feature wrap-up",
  },
  {
    src: "/assets/images/branding/GBDA101_A4_Magazine_Design_Final_JasonP-1-8.png",
    alt: "magazine page 8 - back cover",
  },
];

export function MagazineGallery() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-16">
        {pages.map((page, i) => (
          <ScrollReveal key={page.src} delay={i * 0.08}>
            <ImageClipReveal
              direction={i % 2 === 0 ? "left" : "right"}
              delay={i * 0.05}
              className="rounded-2xl overflow-hidden border border-white/5 bg-white/[0.02]"
            >
              <LightboxImage
                src={page.src}
                alt={page.alt}
                onOpen={setLightboxSrc}
                width={800}
                height={1035}
                className="w-full"
              />
            </ImageClipReveal>
          </ScrollReveal>
        ))}
      </div>

      <Lightbox
        src={lightboxSrc}
        alt="Magazine spread detail"
        onClose={() => setLightboxSrc(null)}
      />
    </>
  );
}
