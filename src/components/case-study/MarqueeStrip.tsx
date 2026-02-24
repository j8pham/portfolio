"use client";

import { useRef, useEffect, useState } from "react";

interface MarqueeItem {
  icon?: string;
  text: string;
  value?: string;
}

interface MarqueeStripProps {
  items: MarqueeItem[];
  /** Speed in pixels per second. */
  speed?: number;
  /** Direction of scrolling. */
  direction?: "left" | "right";
  className?: string;
  /** Whether to pause on hover. */
  pauseOnHover?: boolean;
}

export function MarqueeStrip({
  items,
  speed = 40,
  direction = "left",
  className,
  pauseOnHover = true,
}: MarqueeStripProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    );
  }, []);

  // Calculate animation duration based on content width and speed
  const duration = useRef(30);
  useEffect(() => {
    if (!trackRef.current) return;
    const contentWidth = trackRef.current.scrollWidth / 2; // We duplicate content
    duration.current = contentWidth / speed;
  }, [items, speed]);

  if (items.length === 0) return null;

  // Render items twice for seamless loop
  const allItems = [...items, ...items];

  return (
    <div
      className={`w-full overflow-hidden ${className ?? ""}`}
      aria-hidden="true"
      onMouseEnter={pauseOnHover ? () => setPaused(true) : undefined}
      onMouseLeave={pauseOnHover ? () => setPaused(false) : undefined}
    >
      <div
        ref={trackRef}
        className="flex gap-8 whitespace-nowrap w-max"
        style={
          reducedMotion
            ? {}
            : {
                animation: `marquee-scroll ${duration.current}s linear infinite`,
                animationDirection:
                  direction === "right" ? "reverse" : "normal",
                animationPlayState: paused ? "paused" : "running",
              }
        }
      >
        {allItems.map((item, i) => (
          <div
            key={`${item.text}-${i}`}
            className="inline-flex items-center gap-2 px-4 py-2"
          >
            {item.icon && <span className="text-base">{item.icon}</span>}
            <span className="text-sm font-medium text-text-secondary">
              {item.text}
            </span>
            {item.value && (
              <span
                className="text-sm font-bold"
                style={{ color: "var(--cs-primary, var(--color-accent))" }}
              >
                {item.value}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
