"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
  /** Image source for the "before" state. */
  beforeSrc: string;
  /** Image source for the "after" state. */
  afterSrc: string;
  /** Alt text for the before image. */
  beforeAlt?: string;
  /** Alt text for the after image. */
  afterAlt?: string;
  /** Label shown on the before side. */
  beforeLabel?: string;
  /** Label shown on the after side. */
  afterLabel?: string;
  /** Initial slider position as a percentage (0-100). */
  initialPosition?: number;
  /** Image aspect ratio (width/height). Used for sizing. */
  aspectRatio?: number;
  className?: string;
}

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt = "Before",
  afterAlt = "After",
  beforeLabel = "Before",
  afterLabel = "After",
  initialPosition = 50,
  aspectRatio = 16 / 9,
  className,
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);

  const updatePosition = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      let pct = ((clientX - rect.left) / rect.width) * 100;
      pct = Math.max(2, Math.min(98, pct));
      setPosition(pct);
    },
    [],
  );

  // Mouse events
  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      setIsDragging(true);
      updatePosition(e.clientX);
      e.preventDefault();
    },
    [updatePosition],
  );

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => updatePosition(e.clientX);
    const handleMouseUp = () => setIsDragging(false);

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, updatePosition]);

  // Touch events
  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      setIsDragging(true);
      updatePosition(e.touches[0].clientX);
    },
    [updatePosition],
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (isDragging) updatePosition(e.touches[0].clientX);
    },
    [isDragging, updatePosition],
  );

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Keyboard support
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      setPosition((p) => Math.max(2, p - 2));
    } else if (e.key === "ArrowRight") {
      setPosition((p) => Math.min(98, p + 2));
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative select-none overflow-hidden rounded-2xl cursor-col-resize ${className ?? ""}`}
      style={{ aspectRatio }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      role="slider"
      aria-label="Before and after comparison slider"
      aria-valuenow={Math.round(position)}
      aria-valuemin={0}
      aria-valuemax={100}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      {/* After image (full width, shown underneath) */}
      <div className="absolute inset-0">
        <Image
          src={afterSrc}
          alt={afterAlt}
          fill
          className="object-cover"
          draggable={false}
        />
      </div>

      {/* Before image (clipped) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={beforeSrc}
          alt={beforeAlt}
          fill
          className="object-cover"
          draggable={false}
        />
      </div>

      {/* Divider handle */}
      <div
        className="absolute top-0 bottom-0 w-[3px] bg-white/80 z-10 pointer-events-none"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      >
        {/* Handle grip */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-2 border-white/80 flex items-center justify-center backdrop-blur-sm"
          style={{ background: "rgba(0, 0, 0, 0.4)" }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M8 6l-4 6 4 6" />
            <path d="M16 6l4 6-4 6" />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-3 left-3 z-20">
        <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-black/50 backdrop-blur-sm text-white/90 border border-white/10">
          {beforeLabel}
        </span>
      </div>
      <div className="absolute top-3 right-3 z-20">
        <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-black/50 backdrop-blur-sm text-white/90 border border-white/10">
          {afterLabel}
        </span>
      </div>
    </div>
  );
}
