import type { Metadata } from 'next';
import LegalLayout, { LegalSection, LegalP, LegalBlock, LegalList } from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Praxisordnung – Lea Savelsberg',
};

const accent = '#c0764a';
const ink = '#24302a';

export default function Praxisordnung() {
  return (
    <LegalLayout
      title="Praxisordnung"
      subtitle="Rahmenbedingungen der psychotherapeutischen Behandlung – zur Vorabinformation. Die vollständige Praxisordnung wird beim Erstgespräch ausgehändigt und gemeinsam besprochen."
    >

      <LegalSection title="1. Rahmenbedingungen">
        <LegalP>
          Ich biete verhaltenstherapeutische Einzeltherapie für Erwachsene in meiner Privatpraxis in Hamburg an. Eine Therapiesitzung umfasst in der Regel 50 Minuten (eine Therapiestunde à 45 Minuten zuzüglich Dokumentationszeit).
        </LegalP>
        <LegalP>
          Die Behandlung erfolgt ausschließlich auf privatärztlicher Basis (Privatpatienten und Selbstzahler). Eine kassenärztliche Zulassung besteht nicht.
        </LegalP>
      </LegalSection>

      <LegalSection title="2. Schweigepflicht und ihre Grenzen">
        <LegalP>
          Als approbierte Psychologische Psychotherapeutin unterliege ich der gesetzlichen Schweigepflicht gemäß{' '}
          <strong style={{ color: ink }}>§ 203 Abs. 1 Nr. 2 StGB</strong>. Alle Informationen, die Sie mir im Rahmen der Behandlung mitteilen, werden streng vertraulich behandelt und ohne Ihre ausdrückliche schriftliche Einwilligung nicht an Dritte weitergegeben – auch nicht an Angehörige, Ärzte oder Behörden.
        </LegalP>
        <LegalBlock label="Grenzen der Schweigepflicht">
          Die Schweigepflicht entbindet mich nicht von der Pflicht zur Abwehr einer unmittelbaren, erheblichen Gefahr für Leib oder Leben – Ihrer eigenen oder anderer Personen. Im Falle eines solchen Ausnahmefalls (rechtfertigender Notstand gemäß <strong>§ 34 StGB</strong>) kann es erforderlich sein, entsprechende Stellen (z. B. Notaufnahme, Polizei) zu informieren. Ich werde Sie darüber in Kenntnis setzen, soweit dies möglich ist.
        </LegalBlock>
      </LegalSection>

      <LegalSection title="3. Termine und Absageregelung">
        <LegalP>
          Vereinbarte Termine bitte ich, <strong style={{ color: ink }}>mindestens 48 Stunden im Voraus (Werktage Montag–Freitag)</strong> abzusagen, wenn Sie verhindert sind. Bei kurzfristiger Absage oder Nichterscheinen ohne rechtzeitige Benachrichtigung behalte ich mir vor, das ausgefallene Honorar in Rechnung zu stellen.
        </LegalP>
        <LegalBlock label="Ausnahme: unverschuldetes Nichterscheinen">
          Wenn Sie den Termin aus einem von Ihnen nicht zu vertretenden Grund (z. B. plötzliche schwere Erkrankung, Unfall, höhere Gewalt) nicht wahrnehmen können, entfällt das Ausfallhonorar. Bitte nehmen Sie in einem solchen Fall schnellstmöglich Kontakt auf. Ein entsprechender Nachweis (z. B. ärztliches Attest) kann erbeten werden.
        </LegalBlock>
        <LegalP>
          <strong style={{ color: ink }}>Wichtig:</strong> Ausfallhonorare werden von privaten Krankenversicherungen in der Regel nicht erstattet.
        </LegalP>
      </LegalSection>

      <LegalSection title="4. Kosten und Abrechnung">
        <LegalP>
          Vor Behandlungsbeginn erhalten Sie eine schriftliche Information über die voraussichtlichen Kosten der Behandlung gemäß{' '}
          <strong style={{ color: ink }}>§ 630c Abs. 3 BGB</strong>.
        </LegalP>
        <LegalBlock label="Privatversicherte (PKV)">
          Die Abrechnung erfolgt nach der Gebührenordnung für Ärzte (GOÄ) bzw. der Gebührenordnung für Psychotherapeuten (GOP). Sie erhalten eine Rechnung, die Sie direkt bei Ihrer privaten Krankenversicherung einreichen. Die Erstattungsquote hängt von Ihrem individuellen Versicherungstarif ab – klären Sie dies bitte vorab mit Ihrer PKV.
        </LegalBlock>
        <LegalBlock label="Selbstzahler">
          Für Selbstzahler wird vor Behandlungsbeginn eine individuelle Honorarvereinbarung getroffen. Rechnungen sind innerhalb von <strong>14 Tagen</strong> nach Rechnungsstellung ohne Abzug zu begleichen.
        </LegalBlock>
        <LegalP>
          Die psychotherapeutische Leistung ist gemäß § 4 Nr. 14 UStG umsatzsteuerbefreit. Unter bestimmten Voraussetzungen können Therapiekosten als außergewöhnliche Belastung steuerlich geltend gemacht werden – sprechen Sie dazu bitte Ihre Steuerberatung an.
        </LegalP>
      </LegalSection>

      <LegalSection title="5. Behandlungsdokumentation">
        <LegalP>
          Ich führe über jede Behandlung eine Patientendokumentation gemäß{' '}
          <strong style={{ color: ink }}>§ 630f BGB</strong>. Die Unterlagen werden nach Abschluss der Behandlung mindestens <strong style={{ color: ink }}>10 Jahre</strong> aufbewahrt (§ 630f Abs. 3 BGB).
        </LegalP>
        <LegalP>
          Sie haben das Recht, jederzeit Einsicht in Ihre Patientenakte zu nehmen (<strong style={{ color: ink }}>§ 630g BGB</strong>). Bitte wenden Sie sich dafür schriftlich an mich.
        </LegalP>
      </LegalSection>

      <LegalSection title="6. Kommunikation und Kontakt">
        <LegalP>
          Terminvereinbarungen und allgemeine Anfragen richten Sie bitte per Telefon oder E-Mail an mich. Bitte teilen Sie mir in E-Mails <strong style={{ color: ink }}>keine vertraulichen Gesundheitsinformationen</strong> mit, da E-Mails unverschlüsselt übertragen werden.
        </LegalP>
        <LegalP>
          Für dringende Anliegen zwischen den Sitzungen stehe ich in begrenztem Umfang telefonisch zur Verfügung. Ich bin keine psychiatrische Notfallversorgung.
        </LegalP>
      </LegalSection>

      <LegalSection title="7. Notfallkontakte">
        <LegalP>In psychiatrischen Krisen stehen folgende Anlaufstellen rund um die Uhr zur Verfügung:</LegalP>
        <LegalList items={[
          'Ärztlicher Bereitschaftsdienst: 116 117',
          'Telefonseelsorge (kostenlos, 24h): 0800 111 0 111 oder 0800 111 0 222',
          'Notruf: 112',
          'Psychiatrische Notaufnahme: [Klinikum Hamburg-Eppendorf (UKE) o.ä. – Platzhalter]',
        ]} />
      </LegalSection>

      <LegalSection title="8. Datenschutz">
        <LegalP>
          Informationen zur Verarbeitung Ihrer personenbezogenen Daten finden Sie in meiner{' '}
          <a href="/datenschutz" style={{ color: accent }}>Datenschutzerklärung</a>. Die Verarbeitung von Patientendaten im Rahmen der Behandlung erfolgt auf Grundlage von Art. 9 Abs. 2 lit. h DSGVO in Verbindung mit § 22 BDSG und der gesetzlichen Schweigepflicht.
        </LegalP>
      </LegalSection>

    </LegalLayout>
  );
}
