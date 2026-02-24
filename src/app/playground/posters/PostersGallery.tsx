"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { ImageClipReveal } from "@/components/animation/ImageClipReveal";
import { Lightbox, LightboxImage } from "@/components/case-study/Lightbox";

const posters = [
  {
    src: "/assets/images/branding/GBDA101_A2_Poster1_JasonP.png",
    alt: "poster design with bold contrasting typography",
  },
  {
    src: "/assets/images/branding/GBDA101_A2_Poster2_JasonP.png",
    alt: "poster design featuring cinematic gradients and lighting",
  },
];

export function PostersGallery() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-16">
        {posters.map((poster, i) => (
          <ScrollReveal key={poster.src} delay={i * 0.15}>
            <ImageClipReveal
              direction={i === 0 ? "left" : "right"}
              delay={i * 0.1}
              className="rounded-2xl overflow-hidden border border-white/5 bg-white/[0.02]"
            >
              <LightboxImage
                src={poster.src}
                alt={poster.alt}
                onOpen={setLightboxSrc}
                width={800}
                height={1130}
                className="w-full"
              />
            </ImageClipReveal>
          </ScrollReveal>
        ))}
      </div>

      <Lightbox
        src={lightboxSrc}
        alt="Poster detail view"
        onClose={() => setLightboxSrc(null)}
      />
    </>
  );
}
