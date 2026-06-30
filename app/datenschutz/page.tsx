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
      </LegalSection>

      <LegalSection title="2. Allgemeine Hinweise zur Datenverarbeitung">
        <LegalP>
          Der Schutz Ihrer personenbezogenen Daten ist mir ein wichtiges Anliegen. Personenbezogene Daten werden von mir vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften verarbeitet, insbesondere der Datenschutz-Grundverordnung (DSGVO), dem Bundesdatenschutzgesetz (BDSG) sowie den berufsrechtlichen Vorgaben für Psychotherapeutinnen und Psychotherapeuten.
        </LegalP>
      </LegalSection>

      <LegalSection title="3. Hosting der Website und Server-Logfiles">
        <LegalP>Diese Website wird über externe Dienstleister betrieben:</LegalP>
        <LegalList items={[
          'Hosting-Anbieter: Hostinger',
          'Technische Bereitstellung (Deployment): Vercel',
        ]} />
        <LegalP>
          Beim Aufruf dieser Website werden durch den Hosting-Anbieter automatisch technische Zugriffsdaten erfasst und in sogenannten Server-Logfiles gespeichert. Hierzu gehören insbesondere:
        </LegalP>
        <LegalList items={[
          'IP-Adresse',
          'Datum und Uhrzeit des Zugriffs',
          'aufgerufene Seite (URL)',
          'Browsertyp und Browserversion',
          'verwendetes Betriebssystem',
          'Referrer-URL (zuvor besuchte Seite)',
          'Hostname des zugreifenden Rechners',
        ]} />
        <LegalP>
          Die Verarbeitung dieser Daten erfolgt zur Gewährleistung eines störungsfreien Betriebs der Website, zur Systemsicherheit sowie zur Abwehr von Missbrauch. Die Server-Logfiles werden nur vorübergehend gespeichert und anschließend gelöscht, sofern keine sicherheitsrelevante Aufbewahrung erforderlich ist. Eine Zusammenführung mit anderen Datenquellen erfolgt nicht.
        </LegalP>
        <LegalP>
          <strong style={{ color: ink }}>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse besteht in der sicheren, stabilen und technisch fehlerfreien Bereitstellung des Internetangebots.
        </LegalP>
      </LegalSection>

      <LegalSection title="4. Vercel Web Analytics">
        <LegalP>
          Diese Website nutzt Vercel Web Analytics, einen Analysedienst der Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA. Nach Angaben des Anbieters werden keine Cookies eingesetzt und keine dauerhaften Nutzerprofile erstellt. Die Auswertung erfolgt in aggregierter Form und dient der technischen Analyse und Verbesserung des Webangebots.
        </LegalP>
        <LegalP>
          <strong style={{ color: ink }}>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse liegt in der bedarfsgerechten Gestaltung und technischen Optimierung der Website. Weitere Informationen finden Sie in den Datenschutzbestimmungen von Vercel.
        </LegalP>
      </LegalSection>

      <LegalSection title="5. Kontaktaufnahme per E-Mail und über das Kontaktformular">
        <LegalP>
          Wenn Sie mich per E-Mail oder über das Kontaktformular kontaktieren, werden die von Ihnen übermittelten Daten (z. B. Name, E-Mail-Adresse, Telefonnummer und Inhalt Ihrer Nachricht) ausschließlich zur Bearbeitung Ihres Anliegens und zur Kontaktaufnahme verarbeitet.
        </LegalP>
        <LegalP>
          <strong style={{ color: ink }}>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO, soweit die Anfrage der Anbahnung eines Behandlungsverhältnisses dient. In anderen Fällen erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Die Daten werden gelöscht, sobald sie für die Bearbeitung Ihrer Anfrage nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
        </LegalP>
        <LegalP>
          Bitte beachten Sie, dass die Datenübertragung im Internet Sicherheitsrisiken aufweisen kann. Trotz angemessener technischer und organisatorischer Maßnahmen kann ein vollständiger Schutz der übermittelten Daten nicht gewährleistet werden.
        </LegalP>
        <LegalP>
          <strong style={{ color: ink }}>Wichtiger Hinweis:</strong> Bitte übermitteln Sie über das Kontaktformular keine sensiblen Gesundheitsdaten oder ausführlichen Informationen zu Ihrem Gesundheitszustand. Das Kontaktformular dient ausschließlich der ersten Kontaktaufnahme und Terminanfrage.
        </LegalP>
      </LegalSection>

      <LegalSection title="6. Schweigepflicht und Verarbeitung von Gesundheitsdaten">
        <LegalP>
          Als approbierte Psychologische Psychotherapeutin unterliege ich der gesetzlichen Schweigepflicht gemäß{' '}
          <strong style={{ color: ink }}>§ 203 Abs. 1 Nr. 2 StGB</strong>. Personenbezogene Daten und Informationen, die Sie mir im Rahmen einer Kontaktaufnahme oder Behandlung anvertrauen, werden vertraulich behandelt. Eine Weitergabe erfolgt nur, soweit dies gesetzlich zulässig ist oder Sie ausdrücklich eingewilligt haben.
        </LegalP>
        <LegalP>
          Gesundheitsdaten sind besondere Kategorien personenbezogener Daten im Sinne von{' '}
          <strong style={{ color: ink }}>Art. 9 DSGVO</strong>. Soweit im Rahmen der psychotherapeutischen Tätigkeit Gesundheitsdaten verarbeitet werden, erfolgt dies auf Grundlage von Art. 9 Abs. 2 lit. h DSGVO in Verbindung mit § 22 Abs. 1 Nr. 1 lit. b BDSG.
        </LegalP>
        <LegalP>
          <strong style={{ color: ink }}>Wichtiger Hinweis:</strong> Bitte senden Sie mir per E-Mail keine vertraulichen Gesundheitsinformationen. E-Mails werden grundsätzlich unverschlüsselt übertragen.
        </LegalP>
      </LegalSection>

      <LegalSection title="7. Einbindung von Google Maps">
        <LegalP>
          Diese Website bindet den Kartendienst <strong style={{ color: ink }}>Google Maps</strong> der Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA, ein.
        </LegalP>
        <LegalP>
          Die Karte wird <strong style={{ color: ink }}>nicht automatisch geladen</strong>. Erst nach Ihrer aktiven Einwilligung durch Klick auf „Karte anzeigen“ wird eine Verbindung zu den Servern von Google hergestellt. Dabei können personenbezogene Daten, insbesondere Ihre IP-Adresse sowie technische Informationen über Ihren Browser und Ihr Endgerät, an Google übermittelt werden. Google ist nach dem EU-US Data Privacy Framework zertifiziert.
        </LegalP>
        <LegalP>
          <strong style={{ color: ink }}>Rechtsgrundlage:</strong> Ihre Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO. Die Einwilligung erfolgt freiwillig und kann jederzeit mit Wirkung für die Zukunft widerrufen werden. Weitere Informationen zur Datenverarbeitung durch Google finden Sie in den Datenschutzbestimmungen von Google.
        </LegalP>
      </LegalSection>

      <LegalSection title="8. Empfänger personenbezogener Daten">
        <LegalP>
          Eine Übermittlung personenbezogener Daten an Dritte erfolgt grundsätzlich nicht, es sei denn, Sie haben ausdrücklich eingewilligt, eine gesetzliche Verpflichtung besteht oder die Weitergabe zur Bearbeitung Ihrer Anfrage oder zur Erfüllung gesetzlicher Pflichten erforderlich ist. Externe Dienstleister werden ausschließlich im Rahmen einer Auftragsverarbeitung gemäß Art. 28 DSGVO eingesetzt.
        </LegalP>
      </LegalSection>

      <LegalSection title="9. Speicherdauer">
        <LegalP>
          Personenbezogene Daten werden nur so lange gespeichert, wie dies für die jeweiligen Zwecke erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen.
        </LegalP>
      </LegalSection>

      <LegalSection title="10. Rechte der betroffenen Personen">
        <LegalP>Sie haben folgende Rechte:</LegalP>
        <LegalList items={[
          'Recht auf Auskunft gemäß Art. 15 DSGVO',
          'Recht auf Berichtigung gemäß Art. 16 DSGVO',
          'Recht auf Löschung gemäß Art. 17 DSGVO',
          'Recht auf Einschränkung der Verarbeitung gemäß Art. 18 DSGVO',
          'Recht auf Datenübertragbarkeit gemäß Art. 20 DSGVO',
          'Recht auf Widerspruch gemäß Art. 21 DSGVO',
          'Recht auf Widerruf einer erteilten Einwilligung gemäß Art. 7 Abs. 3 DSGVO',
        ]} />
        <LegalP>
          Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt. Zur Ausübung Ihrer Rechte können Sie sich jederzeit an mich wenden.
        </LegalP>
      </LegalSection>

      <LegalSection title="11. Beschwerderecht bei einer Aufsichtsbehörde">
        <LegalP>
          Sie haben das Recht, sich gemäß Art. 77 DSGVO bei einer Datenschutzaufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten zu beschweren.
        </LegalP>
        <LegalBlock label="Zuständige Aufsichtsbehörde">
          Der Hamburgische Beauftragte für Datenschutz und Informationsfreiheit<br />
          Ludwig-Erhard-Straße 22, 7. OG, 20459 Hamburg<br />
          Telefon: 040 / 428 54 – 4040<br />
          E-Mail: <a href="mailto:mailbox@datenschutz.hamburg.de" style={{ color: accent }}>mailbox@datenschutz.hamburg.de</a><br />
          <a href="https://datenschutz-hamburg.de" target="_blank" rel="noopener noreferrer" style={{ color: accent }}>datenschutz-hamburg.de</a>
        </LegalBlock>
      </LegalSection>

      <LegalSection title="12. SSL-/TLS-Verschlüsselung">
        <LegalP>
          Diese Website nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung zur sicheren Übertragung von Daten.
        </LegalP>
      </LegalSection>

      <LegalSection title="13. Aktualität und Änderung dieser Datenschutzerklärung">
        <LegalP>
          Diese Datenschutzerklärung wird regelmäßig überprüft und bei Bedarf angepasst, um rechtlichen, technischen oder organisatorischen Änderungen Rechnung zu tragen.
        </LegalP>
      </LegalSection>

    </LegalLayout>
  );
}
