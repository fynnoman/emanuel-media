import Link from "next/link";
import { company } from "@/app/lib/data";

export default function Footer() {
  return (
    <footer className="relative bg-paper pb-14 pt-24 text-ink sm:pt-32">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)]">
          <div>
            <Link
              href="/"
              className="font-display text-[38px] leading-none tracking-tight sm:text-[52px]"
            >
              Emanuel<span className="text-red">.</span>Media
            </Link>
            <p className="mt-6 max-w-[38ch] text-[14px] leading-relaxed text-ink/65">
              Druckerei &amp; Textildruck aus Saarlouis-Roden. Kreativ, schnell,
              persönlich — inhabergeführt seit vielen Jahren.
            </p>
          </div>

          <div>
            <p className="eyebrow text-ink/55">Kontakt</p>
            <div className="mt-4 space-y-1.5 text-[14px] text-ink/85">
              <p>{company.name}</p>
              <p>{company.owner}</p>
              <p className="text-ink/70">{company.street}</p>
              <p className="text-ink/70">
                {company.zip} {company.city}
              </p>
              <p className="pt-3">
                <a
                  href={`tel:${company.phoneHref}`}
                  className="hover:text-red"
                >
                  {company.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${company.email}`}
                  className="hover:text-red"
                >
                  {company.email}
                </a>
              </p>
            </div>
          </div>

          <div>
            <p className="eyebrow text-ink/55">Rechtliches</p>
            <ul className="mt-4 space-y-2 text-[14px]">
              <li>
                <Link href="/impressum" className="text-ink/85 hover:text-ink">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="text-ink/85 hover:text-ink">
                  Datenschutz
                </Link>
              </li>
            </ul>
            <p className="mt-6 text-[11px] uppercase tracking-[0.2em] text-ink/45">
              USt-IdNr. {company.ustId}
            </p>
          </div>
        </div>

        <div className="hairline my-12" />

        <div className="flex flex-col items-start justify-between gap-3 text-[12px] text-ink/50 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Emanuel Media. Alle Rechte vorbehalten.</p>
          <p className="tabular-nums">
            Made with <span className="text-red">◆</span> im Saarland.
          </p>
        </div>
      </div>
    </footer>
  );
}
