import type { Metadata } from "next";
import LegalShell from "@/app/components/LegalShell";

export const metadata: Metadata = {
  title: "Datenschutz",
  description:
    "Datenschutzerklärung der Emanuel Media, Saarlouis-Roden — Umgang mit personenbezogenen Daten.",
};

export default function DatenschutzPage() {
  return (
    <LegalShell eyebrow="Rechtliches" title="Datenschutz">
      <section>
        <h2 className="font-display text-2xl text-ink">Auskunft, Löschung, Sperrung</h2>
        <p className="mt-4">
          Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre
          gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und
          den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung,
          Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum
          Thema personenbezogene Daten können Sie sich jederzeit unter der im
          Impressum angegebenen Adresse an uns wenden.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl text-ink">Server-Log-Files</h2>
        <p className="mt-4">
          Der Provider der Seiten erhebt und speichert automatisch Informationen in
          so genannten Server-Log-Files, die Ihr Browser automatisch an uns
          übermittelt. Dies sind:
        </p>
        <ul className="mt-3 list-inside list-disc space-y-1 text-ink/75">
          <li>Browsertyp / Browserversion</li>
          <li>verwendetes Betriebssystem</li>
          <li>Referrer URL</li>
          <li>Hostname des zugreifenden Rechners</li>
          <li>Uhrzeit der Serveranfrage</li>
        </ul>
        <p className="mt-4">
          Diese Daten sind nicht bestimmten Personen zuordenbar. Eine
          Zusammenführung dieser Daten mit anderen Datenquellen wird nicht
          vorgenommen. Wir behalten uns vor, diese Daten nachträglich zu prüfen,
          wenn uns konkrete Anhaltspunkte für eine rechtswidrige Nutzung bekannt
          werden.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl text-ink">Kontaktformular</h2>
        <p className="mt-4">
          Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre
          Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen
          Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von
          Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne
          Ihre Einwilligung weiter.
        </p>
      </section>
    </LegalShell>
  );
}
