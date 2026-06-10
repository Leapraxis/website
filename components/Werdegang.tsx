const C = { bg: '#fbf9f4', ink: '#24302a', inkSoft: '#5c655d', accent: '#c0764a', line: 'rgba(36,48,42,0.13)' };
const serif = "'Newsreader', Georgia, serif";
const sans = "'Hanken Grotesk', system-ui, sans-serif";

const werdegang = [
  { years: '2025 – 2026', title: 'Ambulante Psychotherapeutin & Fachliche Leitung Diagnostikzentrum', place: 'HANSE Psychotherapie, Hamburg' },
  { years: '2021 – 2024', title: 'Ambulante Psychotherapie i. R. der Weiterbildung VT', place: 'Hochschulambulanz, Medical School Hamburg' },
  { years: '2022', title: 'Psychiatrische Station (PT1)', place: 'Karl-Jaspers-Klinik, Bad Zwischenahn' },
  { years: '2020 – 2021', title: 'Erziehungs- und Familienberatung', place: 'Erziehungsberatungsstelle Hamburg-Nord' },
  { years: '2020', title: 'Psychotherapeutisches Praktikum (PT2)', place: 'Hochschulambulanz, Medical School Hamburg' },
];

const ausbildung = [
  { years: '2019 – 2024', title: 'Approbation als Psychologische Psychotherapeutin (Vertiefung Verhaltenstherapie)', place: 'HafenCity Institut für Psychotherapie / Medical School Hamburg' },
  { years: '2014 – 2016', title: 'Master of Science Klinische Psychologie & Arbeits- und Organisationspsychologie', place: 'Universität Bern' },
  { years: '2009 – 2012', title: 'Bachelor of Science Psychologie', place: 'Université de Fribourg' },
];

function List({ items }: { items: { years: string; title: string; place: string }[] }) {
  return (
    <>
      {items.map((p, i) => (
        <div
          key={p.title}
          className="qual-row"
          style={{ display: 'grid', gridTemplateColumns: '140px 1fr', gap: 24, padding: '28px 0', borderTop: i === 0 ? `1px solid ${C.line}` : undefined, borderBottom: `1px solid ${C.line}` }}
        >
          <span style={{ fontFamily: serif, fontSize: 17, fontStyle: 'italic', color: C.accent, paddingTop: 2 }}>{p.years}</span>
          <div>
            <div style={{ fontFamily: sans, fontSize: 17, fontWeight: 600, color: C.ink, marginBottom: 4 }}>{p.title}</div>
            <div style={{ fontFamily: sans, fontSize: 15, color: C.inkSoft }}>{p.place}</div>
          </div>
        </div>
      ))}
    </>
  );
}

export default function Werdegang() {
  return (
    <section id="werdegang" style={{ padding: '88px 60px' }}>
      <span style={{ fontFamily: sans, fontSize: 13, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.accent }}>
        Stationen
      </span>
      <h2 style={{ fontFamily: serif, fontSize: 40, fontWeight: 400, color: C.ink, margin: '12px 0 44px', letterSpacing: '-0.02em' }}>
        Werdegang
      </h2>

      <div style={{ maxWidth: 720 }}>
        <h3 style={{ fontFamily: sans, fontSize: 13, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: C.accent, margin: '0 0 4px' }}>
          Beruflicher Werdegang
        </h3>
        <List items={werdegang} />

        <h3 style={{ fontFamily: sans, fontSize: 13, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: C.accent, margin: '48px 0 4px' }}>
          Ausbildung & Studium
        </h3>
        <List items={ausbildung} />
      </div>
    </section>
  );
}
