const C = { bg: '#fbf9f4', ink: '#24302a', inkSoft: '#5c655d', accent: '#c0764a', accentDeep: '#a8623a', panel: '#f1ede3', line: 'rgba(36,48,42,0.13)' };
const serif = "'Newsreader', Georgia, serif";
const sans = "'Hanken Grotesk', system-ui, sans-serif";

const items = [
  {
    label: 'Privatversicherte (PKV)',
    text: 'Die Abrechnung erfolgt nach der Gebührenordnung für Ärzte (GOÄ/GOP). Privatversicherte reichen die Rechnungen direkt bei ihrer Krankenversicherung ein. Die Erstattung richtet sich nach Ihrem individuellen Tarif – bitte klären Sie vorab den Umfang Ihrer Erstattung mit Ihrer PKV.',
  },
  {
    label: 'Beihilfe & Heilfürsorge',
    text: 'Beamtinnen und Beamte sowie Personen mit Heilfürsorgeanspruch (z. B. Polizei, Bundeswehr) können die Rechnungen in der Regel zur Erstattung bei der zuständigen Stelle einreichen. Bitte prüfen Sie vorab Ihren individuellen Beihilfeanspruch.',
  },
  {
    label: 'Selbstzahler',
    text: 'Wer die Kosten selbst trägt, schließt mit mir eine individuelle Honorarvereinbarung ab. Die Abrechnung ist transparent und wird vorab besprochen. Unter bestimmten Voraussetzungen können die Kosten steuerlich als außergewöhnliche Belastung geltend gemacht werden.',
  },
  {
    label: 'Gesetzlich Versicherte (GKV)',
    text: 'Gesetzlich Versicherte können unter bestimmten Umständen als Selbstzahler in Behandlung kommen. Eine direkte Abrechnung mit der gesetzlichen Krankenkasse ist nicht möglich. Gerne besprechen wir im Erstgespräch Ihre individuelle Situation.',
  },
];

export default function Costs() {
  return (
    <section id="kosten" style={{ padding: '88px 60px' }}>
      <span style={{ fontFamily: sans, fontSize: 13, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.accent }}>
        Kosten & Abrechnung
      </span>
      <h2 style={{ fontFamily: serif, fontSize: 40, fontWeight: 400, color: C.ink, margin: '12px 0 16px', letterSpacing: '-0.02em' }}>
        Kosten & Erstattung
      </h2>
      <p style={{ fontFamily: sans, fontSize: 17, lineHeight: 1.65, color: C.inkSoft, maxWidth: 600, marginBottom: 48 }}>
        Meine Praxis ist eine Privatpraxis für Erwachsene ohne kassenärztliche Zulassung. Ich behandle Privatversicherte, Beihilfeberechtigte, Selbstzahlerinnen und -zahler sowie gesetzlich Versicherte unter bestimmten Voraussetzungen.
      </p>
      <div className="costs-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        {items.map((item) => (
          <div key={item.label} style={{ background: C.panel, borderRadius: 18, padding: '36px 32px' }}>
            <div style={{ fontFamily: sans, fontSize: 13, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.accent, marginBottom: 12 }}>
              {item.label}
            </div>
            <p style={{ fontFamily: sans, fontSize: 16, lineHeight: 1.7, color: C.inkSoft }}>{item.text}</p>
          </div>
        ))}
      </div>
      <p style={{ fontFamily: sans, fontSize: 14.5, lineHeight: 1.6, color: C.inkSoft, marginTop: 24, paddingTop: 20, borderTop: `1px solid ${C.line}`, maxWidth: 680 }}>
        <strong style={{ color: C.ink }}>Hinweis:</strong> Die genaue Höhe des Stundenhonorars besprechen wir im Erstgespräch. Alle Preise richten sich nach der GOÄ und werden transparent kommuniziert.
      </p>
    </section>
  );
}
