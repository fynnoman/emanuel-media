"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { company } from "@/app/lib/data";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="start"
      ref={ref}
      className="relative isolate min-h-[100svh] overflow-hidden bg-white text-ink"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(220,38,38,0.10),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_10%_100%,rgba(11,11,12,0.05),transparent_60%)]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-between px-6 pb-10 pt-32 sm:px-10 sm:pt-40">
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="max-w-4xl"
        >
          <p className="eyebrow flex items-center gap-3 text-ink/60">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-red" />
            Saarlouis-Roden · seit 2005
          </p>

          <h1 className="mt-6 font-display text-[54px] leading-[0.95] tracking-tight sm:text-[86px] md:text-[112px]">
            Qualität <br />
            <span className="italic text-ink/85">aus einer</span>
            <span className="text-red">.</span> Hand
          </h1>

          <p className="mt-8 max-w-[42ch] text-[15px] leading-relaxed text-ink/65 sm:text-[17px]">
            Druckerei &amp; Textildruck aus dem Saarland. Von der Visitenkarte bis zum
            Großformat-Banner — kreativ, schnell, persönlich. Heute gebracht,
            heute gemacht.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#produkte"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-[14px] font-medium text-white transition-transform hover:scale-[1.02]"
            >
              Produkte entdecken
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-x-0.5">
                <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href={`tel:${company.phoneHref}`}
              className="inline-flex items-center gap-2 rounded-full border border-ink/12 bg-white px-5 py-3 text-[13px] text-ink hover:border-ink/30"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-red" />
              Jetzt anrufen
            </a>
            <a
              href="#about"
              className="rounded-full px-4 py-3 text-[13px] text-ink/60 underline underline-offset-4 hover:text-ink"
            >
              Über Emanuel Media
            </a>
          </div>
        </motion.div>

        <div className="pointer-events-none mt-16 flex items-end justify-between text-[11px] uppercase tracking-[0.22em] text-ink/40 sm:mt-24">
          <div className="max-w-[16ch]">
            Neu: Textilkatalog online — jetzt entdecken
          </div>
          <div className="hidden items-center gap-2 sm:flex">
            <span>Scroll</span>
            <span className="inline-block h-6 w-px bg-ink/20" />
            <span className="tabular-nums">01 / 09</span>
          </div>
        </div>
      </div>

      <motion.div
        style={{ y: imgY, scale: imgScale }}
        className="pointer-events-none absolute right-[-8%] top-[16%] hidden aspect-[3/4] w-[520px] overflow-hidden rounded-[36px] ring-1 ring-ink/8 shadow-[0_40px_120px_-40px_rgba(11,11,12,0.25)] lg:block xl:right-[-4%]"
      >
        <Image
          src="/hero.jpg"
          alt="Gedruckter Wochenplaner und Notizbuch — Drucksachen von Emanuel Media"
          fill
          priority
          sizes="520px"
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/25 via-transparent to-transparent" />
      </motion.div>

      <div className="pointer-events-none absolute inset-x-6 bottom-6 h-[220px] overflow-hidden rounded-[28px] ring-1 ring-ink/8 shadow-[0_30px_80px_-30px_rgba(11,11,12,0.25)] sm:h-[280px] lg:hidden">
        <Image
          src="/hero.jpg"
          alt="Drucksachen von Emanuel Media"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
