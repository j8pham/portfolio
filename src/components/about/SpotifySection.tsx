"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

function SoundWaves() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="flex items-center gap-[3px] h-6">
      {[1, 2, 3, 4, 5].map((i) => (
        <motion.span
          key={i}
          className="w-[3px] rounded-[3px]"
          style={{
            background: "linear-gradient(to top, #60a5fa, #38bdf8)",
          }}
          animate={
            reducedMotion
              ? { height: "30%" }
              : {
                  height: ["20%", "100%", "20%"],
                }
          }
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.1,
          }}
        />
      ))}
    </div>
  );
}

export function SpotifySection() {
  return (
    <motion.section
      className="py-16"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, ease: easeOutExpo }}
    >
      <div
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-8 lg:p-12 rounded-[32px] relative overflow-hidden max-w-[1200px] mx-auto"
        style={{
          background:
            "linear-gradient(135deg, rgba(96,165,250,0.08) 0%, rgba(56,189,248,0.05) 100%)",
          border: "1px solid rgba(96,165,250,0.2)",
        }}
      >
        {/* Decorative gradient */}
        <div
          className="absolute -top-1/2 -right-1/2 w-full h-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse, rgba(96,165,250,0.1) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        {/* Text */}
        <div className="relative z-[1]">
          <h3 className="font-serif text-[clamp(1.5rem,3vw,2rem)] font-normal text-text-primary mb-4 flex items-center gap-4 flex-wrap">
            <span className="text-2xl inline-block mr-2">🎵</span>
            currently vibing to
            <SoundWaves />
          </h3>
          <p className="text-base text-text-secondary leading-[1.7]">
            music shapes my creative process. here&apos;s what&apos;s been
            inspiring me lately.
          </p>
        </div>

        {/* Spotify embed */}
        <div
          className="rounded-[24px] overflow-hidden relative z-[1]"
          style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}
        >
          <iframe
            style={{ borderRadius: 12 }}
            src="https://open.spotify.com/embed/playlist/4HYqsL3WZqMpDvaRIDxQLk?utm_source=generator&theme=0"
            width="100%"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="spotify playlist - bees"
          />
        </div>
      </div>
    </motion.section>
  );
}
