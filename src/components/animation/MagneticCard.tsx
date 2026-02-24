"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

interface MagneticCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  perspective?: number;
}

export function MagneticCard({
  children,
  className,
  intensity = 6,
  perspective = 800,
}: MagneticCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { stiffness: 150, damping: 20 };
  const rotateX = useSpring(
    useTransform(mouseY, [0, 1], [intensity, -intensity]),
    springConfig,
  );
  const rotateY = useSpring(
    useTransform(mouseX, [0, 1], [-intensity, intensity]),
    springConfig,
  );

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;

    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const rect = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        rotateX,
        rotateY,
        transformPerspective: perspective,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
}
