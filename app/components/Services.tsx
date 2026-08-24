"use client";

import { services } from "@/app/lib/data";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <section className="relative bg-white py-24 text-ink sm:py-32">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        <div className="flex items-end justify-between gap-8">
          <div className="max-w-2xl">
            <p className="eyebrow text-ink/60">Unser Service für Sie</p>
            <h2 className="mt-6 font-display text-[44px] leading-[0.98] tracking-tight sm:text-[64px]">
              Sechs Wege, <br />
              <span className="italic text-ink/85">Ihre Idee</span> zu drucken.
            </h2>
          </div>
          <div className="hidden max-w-[26ch] text-[13px] leading-relaxed text-ink/60 sm:block">
            Was wir am liebsten tun — von der Vereinsbestellung über die
            Geschäfts­ausstattung bis zum Großformat.
          </div>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-[32px] bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.04}>
              <article className="group relative flex h-full flex-col justify-between gap-10 bg-white p-8 transition-colors hover:bg-paper sm:p-10">
                <header className="flex items-center justify-between">
                  <span className="font-mono text-[11px] tracking-[0.2em] text-ink/40">
                    {s.kicker}
                  </span>
                  <span className="text-ink/30 transition-transform group-hover:translate-x-1 group-hover:text-red">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M7 17L17 7M17 7H9M17 7v8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </header>

                <div>
                  <h3 className="font-display text-[32px] leading-[1] tracking-tight sm:text-[38px]">
                    {s.title}
                  </h3>
                  <div className="mt-6 space-y-2 text-[14px] leading-relaxed text-ink/70">
                    {s.lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-ink/10 pt-8 text-[12px] text-ink/55">
          <p>
            Datenanlieferung: PDF · Corel Draw · MS Office. Bei offenen Daten
            bitte Schriften mitliefern.
          </p>
          <p className="tabular-nums text-ink/45">
            Heute gebracht — heute gemacht.
          </p>
        </div>
      </div>
    </section>
  );
}
