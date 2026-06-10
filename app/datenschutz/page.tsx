import type { Metadata } from 'next';
import LegalLayout, { LegalSection, LegalP, LegalBlock, LegalList } from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung – Lea Savelsberg',
  robots: { index: false },
};

const accent = '#c0764a';
const ink = '#24302a';

export default function Datenschutz() {
  return (
    <LegalLayout
      title="Datenschutzerklärung"
      subtitle="Informationen gemäß Art. 13 DSGVO – Stand: Juni 2026"
    >

      <LegalSection title="1. Verantwortliche Person">
        <LegalBlock label="Verantwortliche im Sinne der DSGVO">
          Lea Savelsberg<br />
          Approbierte Psychologische Psychotherapeutin<br />
          Osterstraße 124, 20255 Hamburg<br />
          E-Mail: <a href="mailto:praxis@savelsberg-psychotherapie.de" style={{ color: accent }}>praxis@savelsberg-psychotherapie.de</a><br />
          Telefon: 0172 691 87 09
        </LegalBlock>
        <LegalP>
          Ein Datenschutzbeauftragter ist gemäß § 38 BDSG nicht erforderlich, da in der Praxis weniger als 20 Personen ständig mit der automatisierten Verarbeitung personenbezogener Daten beschäftigt sind.
        </LegalP>
      </LegalSection>

      <LegalSection title="2. Schweigepflicht und Gesundheitsdaten">
        <LegalP>
          Als approbierte Psychologische Psychotherapeutin unterliege ich der gesetzlichen Schweigepflicht gemäß{' '}
          <strong style={{ color: ink }}>§ 203 Abs. 1 Nr. 2 StGB</strong>. Alle Informationen, die Sie mir im Rahmen der Behandlung anvertrauen, werden streng vertraulich behandelt und nicht ohne Ihre ausdrückliche Einwilligung an Dritte weitergegeben.
        </LegalP>
        <LegalP>
          Gesundheitsdaten sind besondere Kategorien personenbezogener Daten im Sinne von{' '}
          <strong style={{ color: ink }}>Art. 9 DSGVO</strong>. Soweit im Rahmen der psychotherapeutischen Behandlung Gesundheitsdaten verarbeitet werden, erfolgt dies auf Grundlage von Art. 9 Abs. 2 lit. h DSGVO in Verbindung mit § 22 Abs. 1 Nr. 1 lit. b BDSG (Gesundheitsversorgung durch zur Geheimhaltung verpflichtete Fachkräfte).
        </LegalP>
        <LegalP>
          <strong style={{ color: ink }}>Wichtiger Hinweis:</strong> Bitte senden Sie mir per E-Mail keine vertraulichen Gesundheitsinformationen. E-Mails werden unverschlüsselt übertragen. Für sensible Inhalte nutzen wir nach Terminvereinbarung gesicherte Kommunikationswege.
        </LegalP>
      </LegalSection>

      <LegalSection title="3. Websitebesuch / Server-Logs">
        <LegalP>
          Beim Aufruf dieser Website werden durch den Hosting-Anbieter automatisch technische Zugriffsdaten erfasst und in Server-Logfiles gespeichert:
        </LegalP>
        <LegalList items={[
          'IP-Adresse (anonymisiert)',
          'Datum und Uhrzeit des Zugriffs',
          'Aufgerufene Seite (URL)',
          'Browsertyp und -version',
          'Betriebssystem',
          'Referrer-URL (zuvor besuchte Seite)',
        ]} />
        <LegalBlock label="Hosting-Anbieter">
          Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.<br />
          Vercel verarbeitet Daten auf Grundlage eines abgeschlossenen Datenverarbeitungsvertrags (DPA). Weitere Informationen:{' '}
          <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: accent }}>vercel.com/legal/privacy-policy</a>
        </LegalBlock>
        <LegalP>
          <strong style={{ color: ink }}>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am sicheren und stabilen Betrieb der Website).
        </LegalP>
      </LegalSection>

      <LegalSection title="4. Kontaktaufnahme per E-Mail">
        <LegalP>
          Wenn Sie mich per E-Mail kontaktieren, werden die von Ihnen übermittelten Daten (E-Mail-Adresse, Name soweit angegeben, Nachrichteninhalt, Zeitpunkt) zur Bearbeitung Ihrer Anfrage gespeichert. Eine Weitergabe an Dritte erfolgt nicht.
        </LegalP>
        <LegalP>
          <strong style={{ color: ink }}>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen).
        </LegalP>
        <LegalP>
          Die Daten werden gelöscht, sobald sie für den Zweck ihrer Erhebung nicht mehr erforderlich sind, spätestens nach Abschluss der Korrespondenz – soweit keine gesetzlichen Aufbewahrungsfristen entgegenstehen.
        </LegalP>
      </LegalSection>

      <LegalSection title="5. Google Maps">
        <LegalP>
          Diese Website bindet den Kartendienst <strong style={{ color: ink }}>Google Maps</strong> der Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA ein. Die Karte wird <strong style={{ color: ink }}>erst nach Ihrer aktiven Einwilligung</strong> (Klick auf „Karte anzeigen") geladen.
        </LegalP>
        <LegalP>
          Erst nach diesem Klick wird eine Verbindung zu Google-Servern hergestellt. Dabei werden Ihre IP-Adresse sowie weitere Browserdaten an Google übertragen. Google LLC ist unter dem EU-US-Datenschutzrahmen (Data Privacy Framework) zertifiziert, was einen Angemessenheitsbeschluss der EU-Kommission begründet.
        </LegalP>
        <LegalP>
          <strong style={{ color: ink }}>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Ihre Einwilligung). Die Einwilligung kann jederzeit durch Neuladen der Seite widerrufen werden.
        </LegalP>
        <LegalP>
          Weitere Informationen zur Datenverarbeitung durch Google:{' '}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: accent }}>policies.google.com/privacy</a>
        </LegalP>
      </LegalSection>

      <LegalSection title="6. Vercel Web Analytics">
        <LegalP>
          Diese Website nutzt <strong style={{ color: ink }}>Vercel Web Analytics</strong>, einen datenschutzfreundlichen Analysedienst der Vercel Inc. (USA). Vercel Analytics verwendet <strong style={{ color: ink }}>keine Cookies</strong> und erstellt keine dauerhaften personenbezogenen Profile.
        </LegalP>
        <LegalP>
          Es werden ausschließlich aggregierte, anonymisierte Statistiken erfasst (z. B. Seitenaufrufe, Gerättyp, Referrer). Sitzungsdaten werden nach 24 Stunden automatisch verworfen. Personenbezogene Daten werden nicht gespeichert.
        </LegalP>
        <LegalP>
          <strong style={{ color: ink }}>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der anonymisierten Analyse der Websitenutzung zur Verbesserung des Angebots). Ein Cookie-Banner ist nicht erforderlich.
        </LegalP>
        <LegalP>
          Weitere Informationen:{' '}
          <a href="https://vercel.com/docs/analytics/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: accent }}>vercel.com/docs/analytics/privacy-policy</a>
        </LegalP>
      </LegalSection>

      <LegalSection title="7. Ihre Rechte als betroffene Person">
        <LegalP>Sie haben gegenüber mir folgende Rechte:</LegalP>
        <LegalList items={[
          'Recht auf Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)',
          'Recht auf Berichtigung unrichtiger Daten (Art. 16 DSGVO)',
          'Recht auf Löschung („Recht auf Vergessenwerden", Art. 17 DSGVO)',
          'Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)',
          'Recht auf Datenübertragbarkeit (Art. 20 DSGVO)',
          'Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)',
          'Recht auf Widerruf einer erteilten Einwilligung (Art. 7 Abs. 3 DSGVO)',
        ]} />
        <LegalP>
          Zur Ausübung Ihrer Rechte wenden Sie sich bitte per E-Mail oder Post an mich (Kontaktdaten s. Impressum).
        </LegalP>
      </LegalSection>

      <LegalSection title="8. Beschwerderecht bei der Aufsichtsbehörde">
        <LegalP>
          Sie haben das Recht, sich bei der zuständigen Datenschutz-Aufsichtsbehörde zu beschweren (Art. 77 DSGVO):
        </LegalP>
        <LegalBlock label="Datenschutz-Aufsichtsbehörde Hamburg">
          Der Hamburgische Beauftragte für Datenschutz und Informationsfreiheit (HmbBfDI)<br />
          Ludwig-Erhard-Str. 22, 7. OG, 20459 Hamburg<br />
          Telefon: 040 / 428 54 – 4040<br />
          E-Mail: mailbox@datenschutz.hamburg.de<br />
          <a href="https://datenschutz-hamburg.de" target="_blank" rel="noopener noreferrer" style={{ color: accent }}>datenschutz-hamburg.de</a>
        </LegalBlock>
      </LegalSection>

    </LegalLayout>
  );
}
