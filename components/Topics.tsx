const C = { ink: '#24302a', inkSoft: '#5c655d', accent: '#c0764a', line: 'rgba(36,48,42,0.13)' };
const serif = "'Newsreader', Georgia, serif";
const sans = "'Hanken Grotesk', system-ui, sans-serif";

const topics = [
  'Depression',
  'Angst & Phobie',
  'Trauma, Gewalt & Missbrauch',
  'Stress, Burnout & Mobbing',
  'Essstörungen',
  'Zwang',
  'Trauer',
];

export default function Topics() {
  return (
    <section id="themen" style={{ padding: '88px 60px' }}>
      <span style={{ fontFamily: sans, fontSize: 13, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.accent }}>
        Schwerpunkte
      </span>
      <h2 style={{ fontFamily: serif, fontSize: 44, fontWeight: 400, color: C.ink, margin: '12px 0 44px', letterSpacing: '-0.02em' }}>
        Diagnosen & <em style={{ fontStyle: 'italic', color: C.accent }}>Themen</em>.
      </h2>
      <div className="topics-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: 72, borderTop: `1px solid ${C.line}` }}>
        {topics.map((t, i) => (
          <div
            key={t}
            className="topic-row"
            style={{ display: 'flex', alignItems: 'baseline', gap: 24, padding: '26px 0', borderBottom: `1px solid ${C.line}` }}
          >
            <span style={{ fontFamily: serif, fontSize: 18, fontStyle: 'italic', color: C.accent, minWidth: 28 }}>
              {String(i + 1).padStart(2, '0')}
            </span>
            <span style={{ fontFamily: sans, fontSize: 20, color: C.ink }}>{t}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
