const C = { panel: '#f1ede3', ink: '#24302a', inkSoft: '#5c655d', accent: '#c0764a' };
const serif = "'Newsreader', Georgia, serif";
const sans = "'Hanken Grotesk', system-ui, sans-serif";

const faqs = [
  {
    q: 'Wer übernimmt die Kosten der Therapie?',
    a: 'Meine Praxis ist eine reine Privatpraxis. Die Kosten werden von privaten Krankenversicherungen (PKV) oder direkt von Ihnen als Selbstzahler übernommen. Gesetzlich Versicherte können in der Regel keine Kostenerstattung beantragen, da ich keine kassenärztliche Zulassung habe.',
  },
  {
    q: 'Wie läuft die Abrechnung für Privatversicherte ab?',
    a: 'Nach jeder Sitzung oder in regelmäßigen Abständen erhalten Sie eine Rechnung nach der Gebührenordnung für Ärzte (GOÄ/GOP). Diese reichen Sie direkt bei Ihrer privaten Krankenversicherung ein. Die Erstattungsquote hängt von Ihrem individuellen Tarif ab – klären Sie dies am besten vorab mit Ihrer PKV.',
  },
  {
    q: 'Kann ich die Therapiekosten von der Steuer absetzen?',
    a: 'Ja, das ist unter bestimmten Voraussetzungen möglich. Therapiekosten können als außergewöhnliche Belastung in der Einkommensteuererklärung geltend gemacht werden. Als Soloselbstständige oder Soloselbstständiger lohnt es sich, dies mit Ihrer Steuerberatung zu besprechen – je nach Höhe der Kosten und Einkommenssituation kann sich das deutlich auswirken.',
  },
  {
    q: 'Brauche ich eine Überweisung oder Genehmigung der Krankenkasse?',
    a: 'Nein. Als Privatpatientin oder -patient bzw. Selbstzahler können Sie direkt bei mir anfragen – ohne Überweisung und ohne Genehmigungsverfahren. Das macht den Einstieg deutlich unbürokratischer als bei einem Kassenplatz.',
  },
  {
    q: 'Wie lange dauert eine Therapie?',
    a: 'Das hängt von Ihrem Anliegen ab. Kurzzeittherapien umfassen 12–24 Sitzungen und eignen sich für klar umrissene Themen. Bei komplexeren Belastungen oder langjährigen Mustern kann eine Langzeittherapie sinnvoll sein. Den Rahmen klären wir gemeinsam in der Probatorik.',
  },
  {
    q: 'Wie schnell bekomme ich einen Termin?',
    a: 'Ein erstes Kennenlerngespräch ist in der Regel innerhalb weniger Wochen möglich. Schreiben Sie mir eine E-Mail – ich melde mich zeitnah mit Terminvorschlägen. Der Start einer regulären Therapie hängt von der aktuellen Auslastung ab und wird im Erstgespräch besprochen.',
  },
  {
    q: 'Was passiert, wenn ich einen Termin kurzfristig absagen muss?',
    a: 'Bitte sagen Sie Termine mindestens 48 Stunden im Voraus ab. Kurzfristig abgesagte oder nicht wahrgenommene Termine können in Rechnung gestellt werden, da die Zeit für Sie reserviert wurde. Ausnahmen bei echten Notfällen besprechen wir individuell.',
  },
  {
    q: 'Kann ich Termine flexibel legen – zum Beispiel früh morgens oder abends?',
    a: 'Ja. Ich bin mir bewusst, dass Selbstständige oft keine klassischen 9-to-5-Zeiten haben. Nach Absprache sind Früh- und Spättermine möglich. Sprechen Sie mich im Erstgespräch darauf an, dann finden wir gemeinsam einen Rhythmus, der zu Ihrem Arbeitsalltag passt.',
  },
];

export default function FAQ() {
  return (
    <section id="faq" style={{ padding: '88px 60px' }}>
      <span style={{ fontFamily: sans, fontSize: 13, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.accent }}>
        Häufige Fragen
      </span>
      <h2 style={{ fontFamily: serif, fontSize: 40, fontWeight: 400, color: C.ink, margin: '12px 0 16px', letterSpacing: '-0.02em' }}>
        FAQ
      </h2>
      <p style={{ fontFamily: sans, fontSize: 17, lineHeight: 1.65, color: C.inkSoft, maxWidth: 560, marginBottom: 44 }}>
        Besonders für Soloselbstständige stellen sich beim Thema Psychotherapie viele praktische Fragen. Hier finden Sie die häufigsten Antworten.
      </p>
      <div style={{ maxWidth: 780 }}>
        {faqs.map((item, i) => (
          <details key={i} className="faq-item">
            <summary>
              <span style={{ fontFamily: serif, fontSize: 20, fontWeight: 400, color: C.ink, lineHeight: 1.3 }}>
                {item.q}
              </span>
              <span className="faq-icon" aria-hidden="true">+</span>
            </summary>
            <div className="faq-answer">
              <p style={{ fontFamily: sans, fontSize: 16, lineHeight: 1.75, color: C.inkSoft }}>
                {item.a}
              </p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
