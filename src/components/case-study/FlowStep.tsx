"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

interface FlowStepProps {
  /** Step number displayed in the circle. */
  number: number;
  /** Step title. */
  title: string;
  /** Step description. */
  description: string;
  /** UX principle or rationale text. */
  rationale?: string;
  /** Image for the step. */
  image?: {
    src: string;
    alt: string;
  };
  /** Whether to reverse the layout (image on left). */
  reverse?: boolean;
  /** Click handler for lightbox. */
  onImageClick?: (src: string) => void;
  className?: string;
}

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function FlowStep({
  number,
  title,
  description,
  rationale,
  image,
  reverse = false,
  onImageClick,
  className,
}: FlowStepProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });

  return (
    <motion.div
      ref={ref}
      className={`
        grid gap-8 items-center
        ${image ? "md:grid-cols-2" : "md:grid-cols-1 max-w-2xl"}
        ${reverse && image ? "md:[&>*:first-child]:order-2" : ""}
        ${className ?? ""}
      `}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.7, ease: easeOutExpo }}
    >
      {/* Content */}
      <div className="flex gap-5">
        {/* Number */}
        <div
          className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border"
          style={{
            background: "var(--cs-primary-soft, rgba(96, 165, 250, 0.1))",
            borderColor: "var(--cs-primary, var(--color-accent))",
            color: "var(--cs-primary, var(--color-accent))",
          }}
        >
          {number}
        </div>

        <div className="flex flex-col gap-2">
          <h4 className="font-serif text-xl font-normal tracking-tight text-text-primary">
            {title}
          </h4>
          <p className="text-text-secondary leading-relaxed text-[0.9375rem]">
            {description}
          </p>
          {rationale && (
            <span
              className="inline-flex items-center gap-1.5 text-xs font-medium mt-1 px-3 py-1.5 rounded-full w-fit"
              style={{
                background: "var(--cs-primary-soft, rgba(96, 165, 250, 0.1))",
                color: "var(--cs-primary, var(--color-accent))",
              }}
            >
              {rationale}
            </span>
          )}
        </div>
      </div>

      {/* Visual */}
      {image && (
        <motion.div
          className="rounded-2xl overflow-hidden"
          initial={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }}
          animate={
            inView
              ? { opacity: 1, clipPath: "inset(0% 0 0 0)" }
              : { opacity: 0, clipPath: "inset(100% 0 0 0)" }
          }
          transition={{ duration: 0.9, ease: easeOutExpo, delay: 0.2 }}
        >
          <button
            type="button"
            onClick={onImageClick ? () => onImageClick(image.src) : undefined}
            className={onImageClick ? "cursor-zoom-in w-full" : "w-full"}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </button>
        </motion.div>
      )}
    </motion.div>
  );
}
