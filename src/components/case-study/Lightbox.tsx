"use client";

import { useCallback, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface LightboxProps {
  /** The image source URL. Lightbox is open when this is truthy. */
  src: string | null;
  /** Alt text for the image. */
  alt?: string;
  /** Called when the lightbox should close. */
  onClose: () => void;
}

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function Lightbox({ src, alt = "", onClose }: LightboxProps) {
  // Close on Escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (src) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [src, handleKeyDown]);

  return (
    <AnimatePresence>
      {src && (
        <motion.div
          className="fixed inset-0 z-[2000] flex items-center justify-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: easeOutExpo }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors text-xl font-light cursor-pointer"
            aria-label="Close lightbox"
          >
            &times;
          </button>

          {/* Image */}
          <motion.div
            className="relative z-[1] max-w-[90vw] max-h-[85vh]"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.35, ease: easeOutExpo }}
          >
            <Image
              src={src}
              alt={alt}
              width={1600}
              height={1000}
              className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-lg"
              quality={90}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/**
 * Wraps an image to make it clickable for the lightbox.
 * Use alongside the <Lightbox /> component and a state for the active image src.
 */
interface LightboxImageProps {
  src: string;
  alt: string;
  onOpen: (src: string) => void;
  className?: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
}

export function LightboxImage({
  src,
  alt,
  onOpen,
  className,
  width = 800,
  height = 500,
  fill = false,
  priority = false,
}: LightboxImageProps) {
  return (
    <button
      type="button"
      onClick={() => onOpen(src)}
      className={`cursor-zoom-in block ${className ?? ""}`}
      aria-label={`View ${alt} in lightbox`}
    >
      <Image
        src={src}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        className={fill ? "object-cover" : "w-full h-auto"}
        priority={priority}
      />
    </button>
  );
}
