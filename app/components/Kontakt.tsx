"use client";

import Reveal from "./Reveal";
import { company } from "@/app/lib/data";

export default function Kontakt() {
  return (
    <section
      id="kontakt"
      className="relative bg-white text-ink"
    >
      <div className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10 sm:py-32">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-24">
          <div>
            <p className="eyebrow text-ink/60">Kontakt</p>
            <Reveal>
              <h2 className="mt-6 font-display text-[52px] leading-[0.95] tracking-tight sm:text-[92px]">
                Rufen Sie <br />
                <span className="italic">an</span> — oder schreiben Sie.
              </h2>
            </Reveal>

            <p className="mt-8 max-w-[42ch] text-[15px] leading-relaxed text-ink/70 sm:text-[17px]">
              Fordern Sie ein unverbindliches Angebot an. Wir freuen uns auf
              Ihre E-Mail oder Ihren Anruf — Termine gerne auch nach
              Vereinbarung.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={`tel:${company.phoneHref}`}
                className="group inline-flex items-center gap-3 rounded-full bg-red px-6 py-4 text-[15px] font-medium text-white transition-transform hover:scale-[1.02]"
              >
                <span className="h-2 w-2 rounded-full bg-white shadow-[0_0_0_4px_rgba(255,255,255,0.25)]" />
                {company.phone}
              </a>
              <a
                href={`mailto:${company.email}`}
                className="glass-paper inline-flex items-center gap-3 rounded-full px-6 py-4 text-[15px] font-medium text-ink"
              >
                {company.email}
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <Reveal delay={0.05}>
              <div className="glass-paper rounded-[28px] p-8">
                <p className="eyebrow text-ink/60">Anschrift</p>
                <div className="mt-4 font-display text-[26px] leading-[1.15] text-ink">
                  {company.name}
                  <br />
                  <span className="text-ink/80">{company.owner}</span>
                </div>
                <div className="mt-4 text-[14px] leading-relaxed text-ink/75">
                  {company.street} <br />
                  {company.zip} {company.city}
                </div>
                <p className="mt-4 text-[12px] text-ink/55">
                  Parken direkt vor dem Gebäude.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="glass-paper rounded-[28px] p-8">
                <p className="eyebrow text-ink/60">Öffnungszeiten</p>
                <dl className="mt-4 space-y-3 text-[14px]">
                  {company.hours.map((h) => (
                    <div
                      key={h.day}
                      className="grid grid-cols-[110px_1fr] items-baseline gap-4"
                    >
                      <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/50">
                        {h.day}
                      </dt>
                      <dd className="text-ink/85">{h.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="glass-paper rounded-[28px] p-8">
                <p className="eyebrow text-ink/60">Datenanlieferung</p>
                <p className="mt-4 text-[14px] leading-relaxed text-ink/75">
                  PDF · Corel Draw · Microsoft-Office. Bei allen offenen Daten
                  bitte Schriften mitliefern. Scans bis DIN A3 und
                  Bildbearbeitung übernehmen wir auf Wunsch.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
