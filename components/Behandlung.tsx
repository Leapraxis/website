const C = { ink: '#24302a', inkSoft: '#5c655d', accent: '#c0764a', line: 'rgba(36,48,42,0.13)' };
const serif = "'Newsreader', Georgia, serif";
const sans = "'Hanken Grotesk', system-ui, sans-serif";

const themen = [
  'Ängste und Sorgen, die den Alltag belasten oder einschränken',
  'Depressionen und anhaltende Niedergeschlagenheit',
  'Stress, Überforderung und Erschöpfung',
  'Selbstwertprobleme und ausgeprägte Selbstkritik',
  'Konflikte in Partnerschaft und Beziehungen',
  'Bindungsthemen und belastende Beziehungsmuster',
  'Traumatische Erfahrungen und deren psychische Folgen',
  'Zwangsgedanken und Zwangshandlungen',
  'Trauerprozesse und der Umgang mit Verlusten',
  'Lebenskrisen und Phasen von Orientierungslosigkeit',
  'Schwierigkeiten im Umgang mit Emotionen oder emotionaler Leere',
  'Psychosomatische Beschwerden und körperliche Stressreaktionen',
  'ADHS im Erwachsenenalter und Unterstützung im Alltag',
  'Autismus-Spektrum und individuelle Begleitung im Umgang mit Wahrnehmungs- und Erlebensweisen',
];

export default function Behandlung() {
  return (
    <section id="leistungen" style={{ padding: '88px 60px' }}>
      <span style={{ fontFamily: sans, fontSize: 13, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.accent }}>
        Schwerpunkte
      </span>
      <h2 style={{ fontFamily: serif, fontSize: 44, fontWeight: 400, color: C.ink, margin: '12px 0 16px', letterSpacing: '-0.02em' }}>
        Behandlungs&shy;spektrum &amp; <em style={{ fontStyle: 'italic', color: C.accent }}>Therapieangebot</em>
      </h2>
      <p style={{ fontFamily: sans, fontSize: 17, lineHeight: 1.65, color: C.inkSoft, maxWidth: 600, marginBottom: 44 }}>
        Ich begleite Erwachsene unter anderem zu folgenden Themen:
      </p>
      <ul className="topics-grid" style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: 72, borderTop: `1px solid ${C.line}` }}>
        {themen.map((t) => (
          <li
            key={t}
            style={{ display: 'flex', alignItems: 'baseline', gap: 16, padding: '18px 0', borderBottom: `1px solid ${C.line}` }}
          >
            <span aria-hidden="true" style={{ flexShrink: 0, width: 6, height: 6, borderRadius: '50%', background: C.accent, transform: 'translateY(-3px)' }} />
            <span style={{ fontFamily: sans, fontSize: 17, lineHeight: 1.5, color: C.ink }}>{t}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
