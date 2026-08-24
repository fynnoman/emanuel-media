"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Reveal from "./Reveal";
import PrintArt from "./PrintArt";

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      id="about"
      ref={ref}
      className="relative overflow-hidden bg-paper text-ink"
    >
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-28 sm:px-10 sm:py-36 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-24">
        <div className="relative">
          <div className="sticky top-24">
            <p className="eyebrow text-ink/60">Emanuel Media</p>
            <Reveal>
              <h2 className="mt-6 font-display text-[48px] leading-[0.98] tracking-tight sm:text-[72px]">
                Persönlich <br />
                <span className="italic">beraten,</span> <br />
                sauber gedruckt.
              </h2>
            </Reveal>

            <div className="mt-10 space-y-6 text-[15px] leading-relaxed text-ink/75 sm:text-[17px]">
              <Reveal delay={0.05}>
                <p className="text-ink/90">
                  Guten Tag, mein Name ist{" "}
                  <span className="font-medium text-ink">
                    Annette Emanuel-Decker
                  </span>
                  . Ich möchte mich Ihnen gerne kurz vorstellen.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p>
                  Nach 15-jähriger Tätigkeit in der Druckbranche übernahm ich
                  die Leitung der Druckvorstufe einer mittelständischen
                  Druckerei. Der Umgang mit Kunden — gepaart mit drucktechnischen
                  Erfahrungen und kreativen Fähigkeiten — bestärkte immer wieder
                  meinen Entschluss, mich selbstständig zu machen.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p>
                  Mit Emanuel Media habe ich diesen Schritt in die Tat
                  umgesetzt. Wir sind Ihr Partner für Drucksachen aller Art
                  — Ideen schnell, kreativ und individuell umgesetzt.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.2}>
              <div className="mt-10 flex flex-wrap items-center gap-2 text-[12px] text-ink/70">
                {[
                  "Top-Qualität",
                  "Faires Preis-/Leistungs­verhältnis",
                  "Termingerecht",
                  "Beratung inklusive",
                ].map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-ink/12 bg-white px-3 py-1.5"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        <div className="relative">
          <motion.div
            style={{ y }}
            className="relative aspect-[3/4] w-full overflow-hidden rounded-[36px] shadow-[0_40px_120px_-40px_rgba(11,11,12,0.25)] ring-1 ring-ink/8"
          >
            <PrintArt
              variant="poster"
              title="Editorial-Poster: Ideen schnell gedruckt."
              className="h-full w-full"
            />
          </motion.div>

          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            {[
              { n: "20+", t: "Jahre Druck" },
              { n: "9", t: "Produkt­kategorien" },
              { n: "1", t: "Ansprech­partnerin" },
            ].map((k) => (
              <div key={k.t} className="rounded-2xl border border-ink/10 bg-white px-3 py-5">
                <div className="font-display text-[36px] leading-none text-ink">
                  {k.n}
                </div>
                <div className="mt-2 text-[11px] uppercase tracking-[0.16em] text-ink/60">
                  {k.t}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
