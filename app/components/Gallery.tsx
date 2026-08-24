"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { referenzen } from "@/app/lib/data";
import Reveal from "./Reveal";
import PrintArt from "./PrintArt";

export default function Gallery() {
  return (
    <section id="referenzen" className="relative bg-paper py-28 text-ink sm:py-36">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        <div className="grid gap-8 sm:grid-cols-[1fr_auto] sm:items-end">
          <div>
            <p className="eyebrow text-ink/60">Referenzen</p>
            <h2 className="mt-6 font-display text-[44px] leading-[0.98] tracking-tight sm:text-[64px]">
              Aus dem Alltag <br />
              <span className="italic text-ink/85">der Druckerei.</span>
            </h2>
          </div>
          <p className="max-w-[32ch] text-[13px] leading-relaxed text-ink/60">
            Auswahl realisierter Projekte. Vereine, Gastronomie, Non-Profit und
            lokale Events — vieles davon aus dem Saarland.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {referenzen.map((ref, i) => (
            <GalleryCard key={ref.title} item={ref} index={i} />
          ))}
        </div>

        <Reveal>
          <div className="mt-20 overflow-hidden">
            <div className="mb-4 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-ink/50">
              <span className="h-px flex-1 bg-ink/10" />
              <span>Motive · Symbole · Vorlagen</span>
              <span className="h-px flex-1 bg-ink/10" />
            </div>
            <div className="relative">
              <div className="flex w-max gap-6 marquee">
                {SYMBOLS.concat(SYMBOLS).map((sym, idx) => (
                  <div
                    key={idx}
                    className="grid h-24 w-24 place-items-center rounded-2xl border border-ink/10 bg-white text-ink/70"
                  >
                    <span className="font-display text-[26px] italic">{sym}</span>
                  </div>
                ))}
              </div>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-paper to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-paper to-transparent" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const SYMBOLS = ["★", "❤︎", "✦", "◆", "❋", "☘︎", "☾", "☼", "✽", "❃", "✿", "❈", "✺"];

function GalleryCard({
  item,
  index,
}: {
  item: (typeof referenzen)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const isOffset = index % 2 === 1;

  return (
    <Reveal delay={index * 0.05}>
      <article
        ref={ref}
        className={`group relative aspect-[5/6] overflow-hidden rounded-[32px] bg-white ring-1 ring-ink/8 shadow-[0_30px_80px_-40px_rgba(11,11,12,0.2)] ${
          isOffset ? "md:translate-y-16" : ""
        }`}
      >
        <motion.div
          style={{ y }}
          className="absolute inset-0 h-[120%] transition-transform duration-1000 group-hover:scale-[1.04]"
        >
          <PrintArt variant={item.art} title={item.title} className="h-full w-full" />
        </motion.div>

        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-white via-white/85 to-transparent" />

        <div className="relative z-10 flex h-full flex-col justify-between p-8 sm:p-10">
          <div className="flex items-center justify-between">
            <span className="eyebrow rounded-full bg-white/90 px-3 py-1 text-ink/70 shadow-sm">{item.kicker}</span>
            <span className="glass grid h-8 w-8 place-items-center rounded-full text-ink/80 transition-transform group-hover:rotate-45">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H9M17 7v8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>

          <div>
            <h3 className="font-display text-[32px] leading-[1] tracking-tight text-ink sm:text-[42px]">
              {item.title}
            </h3>
            <p className="mt-4 max-w-md text-[13px] leading-relaxed text-ink/70 sm:text-[14px]">
              {item.body}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {item.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-ink/12 bg-white px-2.5 py-1 text-[11px] text-ink/70"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
