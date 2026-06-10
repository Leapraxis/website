import type { Metadata } from 'next';
import LegalLayout, { LegalSection, LegalP, LegalBlock } from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Impressum – Lea Savelsberg',
  robots: { index: false },
};

export default function Impressum() {
  return (
    <LegalLayout title="Impressum" subtitle="Angaben gemäß § 5 DDG">

      <LegalSection title="Angaben zur Person">
        <LegalBlock label="Praxisinhaberin">
          Lea Savelsberg<br />
          Approbierte Psychologische Psychotherapeutin<br />
          Osterstraße 124<br />
          20255 Hamburg
        </LegalBlock>
        <LegalBlock label="Kontakt">
          Telefon: <a href="tel:+491726918709" style={{ color: 'inherit' }}>0172 691 87 09</a><br />
          E-Mail: <a href="mailto:praxis@savelsberg-psychotherapie.de" style={{ color: 'inherit' }}>praxis@savelsberg-psychotherapie.de</a>
        </LegalBlock>
      </LegalSection>

      <LegalSection title="Berufsrechtliche Angaben">
        <LegalBlock label="Berufsbezeichnung">
          Psychologische Psychotherapeutin<br />
          <span style={{ fontSize: 14, opacity: 0.75 }}>(Berufsbezeichnung verliehen in der Bundesrepublik Deutschland)</span>
        </LegalBlock>
        <LegalBlock label="Zuständige Kammer">
          Psychotherapeutenkammer Hamburg (PTK Hamburg)<br />
          Weidestraße 122c, 22083 Hamburg<br />
          <a href="https://ptk-hamburg.de" target="_blank" rel="noopener noreferrer" style={{ color: '#c0764a' }}>ptk-hamburg.de</a>
        </LegalBlock>
        <LegalBlock label="Zuständige Aufsichtsbehörde (Berufsrecht)">
          Behörde für Arbeit, Gesundheit, Soziales, Familie und Integration (BGSA)<br />
          Hamburger Straße 47, 22083 Hamburg
        </LegalBlock>
        <LegalP>
          <strong style={{ color: '#24302a' }}>Berufsrechtliche Regelungen:</strong>
        </LegalP>
        <ul style={{ paddingLeft: 20, marginBottom: 14, lineHeight: 1.8 }}>
          <li>Psychotherapeutengesetz (PsychThG) i.d.F. vom 15. November 2019</li>
          <li>
            Berufsordnung der Psychotherapeutenkammer Hamburg –{' '}
            <a href="https://ptk-hamburg.de/ueber-uns/rechtliches/satzung-und-ordnungen/" target="_blank" rel="noopener noreferrer" style={{ color: '#c0764a' }}>
              abrufbar unter ptk-hamburg.de
            </a>
          </li>
          <li>Hamburgisches Kammergesetz für die Heilberufe (HmbKGH)</li>
        </ul>
      </LegalSection>

      <LegalSection title="Umsatzsteuer">
        <LegalP>
          Die erbrachten psychotherapeutischen Leistungen sind gemäß <strong style={{ color: '#24302a' }}>§ 4 Nr. 14 UStG</strong> von der Umsatzsteuer befreit.
        </LegalP>
        <LegalP>
          Wirtschafts-Identifikationsnummer (W-IdNr.): wird ergänzt, sobald zugeteilt.
        </LegalP>
      </LegalSection>

      <LegalSection title="Haftungshinweis">
        <LegalP>
          Trotz sorgfältiger inhaltlicher Kontrolle übernehme ich keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
        </LegalP>
        <LegalP>
          Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden.
        </LegalP>
      </LegalSection>

    </LegalLayout>
  );
}
