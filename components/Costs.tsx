const C = { bg: '#fbf9f4', ink: '#24302a', inkSoft: '#5c655d', accent: '#c0764a', accentDeep: '#a8623a', panel: '#f1ede3', line: 'rgba(36,48,42,0.13)' };
const serif = "'Newsreader', Georgia, serif";
const sans = "'Hanken Grotesk', system-ui, sans-serif";

const items = [
  {
    label: 'Privatversicherte (PKV)',
    text: 'Als Privatpatientin oder Privatpatient reichen Sie die Rechnung in der Regel direkt bei Ihrer Krankenversicherung ein. Die Erstattung hängt von Ihrem jeweiligen Tarif ab. Es empfiehlt sich daher, vor Beginn der Behandlung den konkreten Leistungsumfang mit Ihrer privaten Krankenversicherung zu klären.',
  },
  {
    label: 'Beihilfe & Heilfürsorge',
    text: 'Als Beihilfeversicherte sowie Personen mit Heilfürsorgeanspruch können Sie die Rechnungen in der Regel zur Erstattung bei der zuständigen Stelle einreichen. Bitte prüfen Sie vorab Ihren individuellen Anspruch.',
  },
  {
    label: 'Selbstzahler:innen',
    text: 'Als Selbstzahlerin oder Selbstzahler schließen Sie mit mir eine individuelle Honorarvereinbarung ab. Die Kosten orientieren sich an der GOP und werden vorab transparent mit Ihnen besprochen.',
  },
  {
    label: 'Gesetzlich Versicherte (GKV)',
    text: 'Auch gesetzlich Versicherte können unter bestimmten Voraussetzungen im Rahmen des Kostenerstattungsverfahrens eine Behandlung in meiner Praxis in Anspruch nehmen. Gerne besprechen wir Ihre individuelle Situation in einem Erstgespräch.',
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
      <p style={{ fontFamily: sans, fontSize: 17, lineHeight: 1.65, color: C.inkSoft, maxWidth: 640, marginBottom: 48 }}>
        In meiner Praxis biete ich psychotherapeutische Behandlung für Erwachsene an und begleite Privatversicherte, Beihilfeberechtigte sowie Selbstzahlerinnen und Selbstzahler. Die Abrechnung und Kosten orientieren sich an der geltenden Gebührenordnung für Psychotherapeut:innen (GOP). Auch gesetzlich Versicherte können unter bestimmten Voraussetzungen eine Behandlung in Anspruch nehmen.
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
        <strong style={{ color: C.ink }}>Hinweis:</strong> Die genaue Höhe des Honorars besprechen wir im Erstgespräch. Alle Kosten richten sich nach der GOP und werden transparent kommuniziert.
      </p>
    </section>
  );
}
