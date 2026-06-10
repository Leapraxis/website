const C = { ink: '#24302a', inkSoft: '#5c655d', accent: '#c0764a', line: 'rgba(36,48,42,0.13)' };
const serif = "'Newsreader', Georgia, serif";
const sans = "'Hanken Grotesk', system-ui, sans-serif";

const services = [
  {
    t: 'Einzeltherapie für Erwachsene',
    d: 'Ängste, Depressionen, Burnout, Erschöpfung – strukturiert, evidenzbasiert und an Ihren persönlichen Zielen orientiert.',
  },
  {
    t: 'Verhaltenstherapeutische Behandlung',
    d: 'Auf wissenschaftlicher Grundlage erarbeiten wir gemeinsam neue Handlungs- und Denkmuster – nachhaltig und in Ihrem Tempo.',
  },
  {
    t: 'Krisen & akute Belastung',
    d: 'Halt in schwierigen Lebensphasen – nach Verlust, beruflichem Umbruch oder anhaltender Überforderung.',
  },
];

export default function Services() {
  return (
    <section id="leistungen" style={{ background: '#f1ede3', padding: '88px 60px' }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 18, flexWrap: 'wrap', gap: 12 }}>
        <h2 style={{ fontFamily: serif, fontSize: 44, fontWeight: 400, color: C.ink, margin: 0, letterSpacing: '-0.02em' }}>
          Therapieangebot
        </h2>
        <span style={{ fontFamily: sans, fontSize: 13, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: C.inkSoft }}>
          Nur für Erwachsene · Privatpatienten
        </span>
      </div>
      <div>
        {services.map((s, i) => (
          <div
            key={i}
            className="vd-row service-row"
            style={{ display: 'grid', gridTemplateColumns: '80px 1fr 1.1fr', gap: 32, alignItems: 'baseline', padding: '30px 12px', borderTop: `1px solid ${C.line}` }}
          >
            <span style={{ fontFamily: serif, fontSize: 22, fontStyle: 'italic', color: C.accent }}>0{i + 1}</span>
            <h3 style={{ fontFamily: serif, fontSize: 27, fontWeight: 400, color: C.ink, margin: 0, letterSpacing: '-0.01em' }}>{s.t}</h3>
            <p style={{ fontFamily: sans, fontSize: 16, lineHeight: 1.62, color: C.inkSoft, margin: 0 }}>{s.d}</p>
          </div>
        ))}
        <div style={{ borderTop: `1px solid ${C.line}` }} />
      </div>
    </section>
  );
}
