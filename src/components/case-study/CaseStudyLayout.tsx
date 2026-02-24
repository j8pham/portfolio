"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { SectionNav, type SectionNavItem } from "./SectionNav";
import { CursorGlow } from "@/components/animation/CursorGlow";

interface CaseStudyLayoutProps {
  children: React.ReactNode;
  /** Used as the body data-project attribute. */
  projectSlug: string;
  /** Primary accent color for the case study (sets --cs-primary). */
  accentColor: string;
  /** Sections for the floating navigation. */
  sections: SectionNavItem[];
}

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function CaseStudyLayout({
  children,
  projectSlug,
  accentColor,
  sections,
}: CaseStudyLayoutProps) {
  // Set CSS custom properties on mount
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--cs-primary", accentColor);
    root.style.setProperty(
      "--cs-primary-soft",
      hexToRgba(accentColor, 0.1),
    );
    root.style.setProperty(
      "--cs-primary-glow",
      hexToRgba(accentColor, 0.35),
    );
    document.body.dataset.project = projectSlug;

    return () => {
      root.style.removeProperty("--cs-primary");
      root.style.removeProperty("--cs-primary-soft");
      root.style.removeProperty("--cs-primary-glow");
      delete document.body.dataset.project;
    };
  }, [accentColor, projectSlug]);

  return (
    <motion.div
      className="relative overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: easeOutExpo }}
    >
      {/* Decorative background blobs */}
      <div
        className="fixed top-0 right-0 w-[400px] h-[400px] rounded-full opacity-15 pointer-events-none z-0"
        aria-hidden="true"
        style={{
          background: `linear-gradient(135deg, ${accentColor}, rgba(96, 165, 250, 0.8))`,
          filter: "blur(80px)",
          animation: "float 20s ease-in-out infinite",
        }}
      />
      <div
        className="fixed bottom-0 left-0 w-[300px] h-[300px] rounded-full opacity-15 pointer-events-none z-0"
        aria-hidden="true"
        style={{
          background: `linear-gradient(135deg, ${accentColor}, rgba(59, 130, 246, 0.6))`,
          filter: "blur(80px)",
          animation: "float 15s ease-in-out infinite reverse",
        }}
      />

      {/* Cursor glow effect */}
      <CursorGlow color={accentColor} />

      {/* Floating section nav */}
      <SectionNav sections={sections} />

      {/* Page content */}
      <div className="relative z-[1]">
        {children}
      </div>
    </motion.div>
  );
}

/** Convert a hex color to rgba string. */
function hexToRgba(hex: string, alpha: number): string {
  const clean = hex.replace("#", "");
  const r = parseInt(clean.substring(0, 2), 16);
  const g = parseInt(clean.substring(2, 4), 16);
  const b = parseInt(clean.substring(4, 6), 16);
  if (isNaN(r) || isNaN(g) || isNaN(b)) {
    return `rgba(96, 165, 250, ${alpha})`;
  }
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
