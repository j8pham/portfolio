"use client";

import { useEffect, useRef, useState } from "react";

interface CursorGlowProps {
  /** Glow diameter in pixels. */
  size?: number;
  /** CSS color for the glow. Defaults to the --cs-primary custom property. */
  color?: string;
  /** Opacity of the glow (0-1). */
  opacity?: number;
  /** Lerp factor for smooth following (0-1). Lower = smoother. */
  smoothing?: number;
}

export function CursorGlow({
  size = 400,
  color,
  opacity = 0.12,
  smoothing = 0.08,
}: CursorGlowProps) {
  const glowRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const mousePos = useRef({ x: 0, y: 0 });
  const glowPos = useRef({ x: 0, y: 0 });
  const raf = useRef<number>(0);

  useEffect(() => {
    // Skip on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;
    // Skip if user prefers reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    setEnabled(true);

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    function animateGlow() {
      const dx = mousePos.current.x - glowPos.current.x;
      const dy = mousePos.current.y - glowPos.current.y;
      glowPos.current.x += dx * smoothing;
      glowPos.current.y += dy * smoothing;

      if (glowRef.current) {
        const halfSize = size / 2;
        glowRef.current.style.transform = `translate(${glowPos.current.x - halfSize}px, ${glowPos.current.y - halfSize}px)`;
      }

      raf.current = requestAnimationFrame(animateGlow);
    }

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    raf.current = requestAnimationFrame(animateGlow);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(raf.current);
    };
  }, [size, smoothing]);

  const glowColor = color || "var(--cs-primary, #60a5fa)";

  if (!enabled) return null;

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-0 rounded-full transition-opacity duration-500"
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
        opacity: visible ? opacity : 0,
        filter: "blur(40px)",
        willChange: "transform",
      }}
    />
  );
}
