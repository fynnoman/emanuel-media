"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef, ReactNode } from "react";
import PrintArt from "./PrintArt";

type Variant = "wordmark" | "swatches" | "poster" | "flyers" | "shirts" | "banner" | "bag";

type Props = {
  variant: Variant;
  alt: string;
  eyebrow: string;
  title: ReactNode;
  body?: ReactNode;
  children?: ReactNode;
};

export default function ScaleToBackground({
  variant,
  alt,
  eyebrow,
  title,
  body,
  children,
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.45, 1], [0.72, 1.06, 1.08]);
  const width = useTransform(scrollYProgress, [0, 0.45], ["62vw", "100vw"]);
  const height = useTransform(scrollYProgress, [0, 0.45], ["55vh", "100vh"]);
  const radius = useTransform(scrollYProgress, [0, 0.45], [40, 0]);
  const overlayOpacity = useTransform(
    scrollYProgress,
    [0, 0.35, 0.55, 1],
    [0.05, 0.35, 0.72, 0.82]
  );
  const contentOpacity = useTransform(
    scrollYProgress,
    [0.45, 0.55, 0.9, 1],
    [0, 1, 1, 0]
  );
  const contentY = useTransform(scrollYProgress, [0.45, 0.6], [40, 0]);

  const eyebrowOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative bg-white text-ink"
      style={{ height: "230vh" }}
    >
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        <ImageBox
          variant={variant}
          alt={alt}
          scale={scale}
          width={width}
          height={height}
          radius={radius}
          overlayOpacity={overlayOpacity}
        />

        <motion.div
          style={{ opacity: eyebrowOpacity }}
          className="pointer-events-none absolute inset-x-0 top-24 mx-auto max-w-6xl px-6 text-center sm:top-32"
        >
          <p className="eyebrow inline-flex items-center gap-3 text-ink/70">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-red" />
            {eyebrow}
          </p>
        </motion.div>

        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          className="relative z-10 mx-auto max-w-6xl px-6 text-center"
        >
          <h2 className="font-display text-[44px] leading-[0.95] tracking-tight text-ink sm:text-[76px] md:text-[96px]">
            {title}
          </h2>
          {body && (
            <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-ink/75 sm:text-[17px]">
              {body}
            </p>
          )}
          {children}
        </motion.div>
      </div>
    </section>
  );
}

function ImageBox({
  variant,
  alt,
  scale,
  width,
  height,
  radius,
  overlayOpacity,
}: {
  variant: Variant;
  alt: string;
  scale: MotionValue<number>;
  width: MotionValue<string>;
  height: MotionValue<string>;
  radius: MotionValue<number>;
  overlayOpacity: MotionValue<number>;
}) {
  return (
    <motion.div
      style={{ width, height, borderRadius: radius, scale }}
      className="absolute overflow-hidden shadow-[0_60px_120px_-40px_rgba(11,11,12,0.25)] ring-1 ring-ink/8"
    >
      <PrintArt variant={variant} title={alt} className="h-full w-full" />
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white"
      />
    </motion.div>
  );
}
