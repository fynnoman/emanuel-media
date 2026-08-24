"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function Announcement() {
  return (
    <section className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="glass-paper relative overflow-hidden rounded-[36px] p-8 sm:p-12">
            <div className="grid gap-10 sm:grid-cols-[1fr_auto] sm:items-end">
              <div>
                <div className="flex items-center gap-3">
                  <motion.span
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                    className="inline-flex h-6 items-center rounded-full bg-red px-2.5 text-[10px] font-medium uppercase tracking-[0.2em] text-white"
                  >
                    Neu
                  </motion.span>
                  <span className="eyebrow text-ink/60">
                    Jetzt auch online
                  </span>
                </div>
                <h3 className="mt-6 font-display text-[36px] leading-[1] tracking-tight text-ink sm:text-[52px]">
                  Unser Textilkatalog <span className="italic text-ink/85">online</span>
                </h3>
                <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-ink/70">
                  Hochwertige Textilien für Druck und Stick: T-Shirts, Hoodies,
                  Caps, Workwear und vieles mehr in vielen Farben, Größen und
                  Marken.
                </p>

                <ul className="mt-8 grid gap-2 text-[13px] text-ink/80 sm:grid-cols-2">
                  {[
                    "Viele Marken und Qualitätsstufen",
                    "Ideal für Druck und Stick",
                    "Größen XS bis 5XL je nach Artikel",
                    "Staffelpreise auf Anfrage",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#produkte"
                className="group inline-flex items-center gap-2 self-end rounded-full bg-ink px-5 py-3 text-[13px] font-medium text-white transition-transform hover:scale-[1.02]"
              >
                Zum Textilkatalog
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-x-0.5">
                  <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(220,38,38,0.18),transparent_60%)]" />
            <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(11,11,12,0.08),transparent_60%)]" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
