import type { Metadata } from "next";
import LegalShell from "@/app/components/LegalShell";
import { company } from "@/app/lib/data";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und rechtliche Angaben der Emanuel Media, Saarlouis-Roden.",
};

export default function ImpressumPage() {
  return (
    <LegalShell eyebrow="Rechtliches" title="Impressum">
      <section>
        <h2 className="font-display text-2xl text-ink">Angaben gemäß § 5 TMG</h2>
        <div className="mt-4 space-y-1">
          <p>{company.name}</p>
          <p>Inhaberin: {company.owner}</p>
          <p>{company.street}</p>
          <p>{company.zip} Saarlouis</p>
        </div>
        <div className="mt-6 space-y-1">
          <p>Tel.: {company.phone}</p>
          <p>Fax: {company.fax}</p>
          <p>
            <a href={`mailto:${company.email}`} className="text-ink hover:text-red">
              {company.email}
            </a>
          </p>
          <p>{company.website}</p>
          <p>USt-IdNr. {company.ustId}</p>
        </div>
      </section>

      <section>
        <h2 className="font-display text-2xl text-ink">Bildquellen</h2>
        <p className="mt-4">Quellen für verwendete Bilder und Grafiken:</p>
        <ul className="mt-3 list-inside list-disc space-y-1 text-ink/75">
          <li>© ghazii — fotolia.com</li>
          <li>© maram — fotolia.com</li>
          <li>© nastasenko — fotolia.com</li>
          <li>© fontgraf — fotolia.com</li>
          <li>© FSEID — fotolia.com</li>
          <li>© okunsto — fotolia.com</li>
        </ul>
      </section>

      <section>
        <h2 className="font-display text-2xl text-ink">EU-Streitschlichtung</h2>
        <p className="mt-4">
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung
          (OS) bereit:{" "}
          <a
            href="http://ec.europa.eu/consumers/odr"
            className="text-ink underline hover:text-red"
          >
            ec.europa.eu/consumers/odr
          </a>
          . Unsere E-Mail-Adresse finden Sie oben.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl text-ink">Haftung für Inhalte</h2>
        <p className="mt-4">
          Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf
          diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis
          10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte
          oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
          zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen
          nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine
          diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer
          konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
          Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl text-ink">Haftung für Links</h2>
        <p className="mt-4">
          Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden
          Inhalte keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten
          ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
          Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche
          Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
          Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der
          verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
          Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen
          werden wir derartige Links umgehend entfernen.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl text-ink">Urheberrecht</h2>
        <p className="mt-4">
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
          jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind
          nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die
          Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die
          Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als
          solche gekennzeichnet. Sollten Sie trotzdem auf eine
          Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
          entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden
          wir derartige Inhalte umgehend entfernen.
        </p>
      </section>
    </LegalShell>
  );
}
