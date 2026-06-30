import type { Metadata } from 'next';
import LegalLayout, { LegalSection, LegalP, LegalBlock } from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Impressum – Lea Savelsberg',
  robots: { index: false },
};

const accent = '#c0764a';
const ink = '#24302a';

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
          <span style={{ fontSize: 14, opacity: 0.75 }}>(Berufsbezeichnung verliehen in der Bundesrepublik Deutschland in Hamburg)</span>
        </LegalBlock>
        <LegalP>
          Die Approbation wurde am <strong style={{ color: ink }}>[TT.MM.JJJJ]</strong> vom Landesamt für Gesundheit und Soziales Hamburg erteilt.
        </LegalP>
        <LegalBlock label="Zuständige Kammer">
          Psychotherapeutenkammer Hamburg (PTK Hamburg)<br />
          Weidestraße 122c, 22083 Hamburg<br />
          Telefon: <a href="tel:+4940226226060" style={{ color: 'inherit' }}>040 226 226 060</a><br />
          E-Mail: <a href="mailto:info@ptk-hamburg.de" style={{ color: accent }}>info@ptk-hamburg.de</a><br />
          <a href="https://ptk-hamburg.de" target="_blank" rel="noopener noreferrer" style={{ color: accent }}>ptk-hamburg.de</a>
        </LegalBlock>
        <LegalBlock label="Zuständige Aufsichtsbehörde (Berufsrecht)">
          Behörde für Arbeit, Gesundheit, Soziales, Familie und Integration (Sozialbehörde Hamburg)<br />
          Landesprüfungsamt für Heilberufe<br />
          Billstraße 80, 20539 Hamburg, Deutschland<br />
          Telefon: <a href="tel:+4940428370" style={{ color: 'inherit' }}>+49 40 42837-0</a><br />
          <a href="https://www.hamburg.de/go/lpa/" target="_blank" rel="noopener noreferrer" style={{ color: accent }}>hamburg.de/go/lpa</a>
        </LegalBlock>
        <LegalBlock label="Berufshaftpflichtversicherung">
          Name und Sitz des Versicherers:<br />
          Allianz Versicherungs-AG, 10900 Berlin<br />
          Geltungsraum der Versicherung: Deutschland
        </LegalBlock>
        <LegalP>
          <strong style={{ color: ink }}>Maßgebliche berufsrechtliche Regelungen:</strong>
        </LegalP>
        <ul style={{ paddingLeft: 20, marginBottom: 14, lineHeight: 1.8 }}>
          <li>
            Psychotherapeutengesetz (PsychThG) –{' '}
            <a href="https://www.gesetze-im-internet.de/psychthg_2020/index.html" target="_blank" rel="noopener noreferrer" style={{ color: accent }}>gesetze-im-internet.de</a>
          </li>
          <li>
            Berufsordnung und Satzungen der Psychotherapeutenkammer Hamburg –{' '}
            <a href="https://ptk-hamburg.de/ueber-uns/rechtliches/satzung-und-ordnungen/" target="_blank" rel="noopener noreferrer" style={{ color: accent }}>ptk-hamburg.de</a>
          </li>
          <li>
            Hamburgisches Kammergesetz für die Heilberufe (HmbKGH) vom 14.12.2005, zuletzt geändert am 07.03.2023 –{' '}
            <a href="https://www.landesrecht-hamburg.de/bsha/document/jlr-HKGHAV12IVZ" target="_blank" rel="noopener noreferrer" style={{ color: accent }}>landesrecht-hamburg.de</a>
          </li>
          <li>
            Gebührenordnung für Psychologische Psychotherapeuten und Kinder- und Jugendlichenpsychotherapeuten (GOP) –{' '}
            <a href="https://www.gesetze-im-internet.de/bundesrecht/gop/gesamt.pdf" target="_blank" rel="noopener noreferrer" style={{ color: accent }}>gesetze-im-internet.de</a>
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="Hinweis zur Praxisform">
        <LegalP>
          Privatpraxis ohne Kassenzulassung. Eine Abrechnung mit gesetzlichen Krankenkassen erfolgt ausschließlich im Rahmen des Kostenerstattungsverfahrens.
        </LegalP>
      </LegalSection>

      <LegalSection title="Haftung für Inhalte">
        <LegalP>
          Als Diensteanbieterin bin ich gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG bin ich jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        </LegalP>
        <LegalP>
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden entsprechender Rechtsverletzungen werden diese Inhalte umgehend entfernt.
        </LegalP>
      </LegalSection>

      <LegalSection title="Haftung für Links">
        <LegalP>
          Diese Website enthält ggf. Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. Deshalb kann für diese fremden Inhalte keine Gewähr übernommen werden. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.
        </LegalP>
        <LegalP>
          Eine dauerhafte inhaltliche Kontrolle der verlinkten Seiten ist ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden derartige Links umgehend entfernt.
        </LegalP>
      </LegalSection>

      <LegalSection title="Urheberrecht">
        <LegalP>
          Die durch die Seitenbetreiberin erstellten Inhalte und Werke auf dieser Website unterliegen dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung der jeweiligen Autorin. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
        </LegalP>
        <LegalP>
          Soweit die Inhalte auf dieser Seite nicht von der Betreiberin erstellt wurden, werden die Urheberrechte Dritter beachtet und entsprechende Inhalte gekennzeichnet. Sollten dennoch Urheberrechtsverletzungen festgestellt werden, wird um einen entsprechenden Hinweis gebeten. Bei Bekanntwerden von Rechtsverletzungen werden derartige Inhalte umgehend entfernt.
        </LegalP>
      </LegalSection>

      <LegalSection title="Verantwortlich für den Inhalt gemäß § 18 Abs. 2 MStV">
        <LegalBlock label="Verantwortlich">
          Lea Savelsberg<br />
          Psychologische Psychotherapeutin<br />
          Osterstraße 124<br />
          20255 Hamburg, Deutschland
        </LegalBlock>
      </LegalSection>

    </LegalLayout>
  );
}
