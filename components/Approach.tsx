const C = { panel: '#f1ede3', ink: '#24302a', inkSoft: '#5c655d', accent: '#c0764a' };
const serif = "'Newsreader', Georgia, serif";
const sans = "'Hanken Grotesk', system-ui, sans-serif";

const steps = [
  { n: '01', t: 'Erstgespräch', d: 'In einem ersten, unverbindlichen Gespräch lernen wir uns kennen und klären, ob wir gut zusammenpassen.' },
  { n: '02', t: 'Probatorik', d: 'In 2–5 Sitzungen klären wir gemeinsam Ihre Ziele, den therapeutischen Ansatz und den weiteren Weg.' },
  { n: '03', t: 'Therapie', d: 'Die eigentliche Arbeit beginnt – strukturiert und in Ihrem Tempo, mit konkreten Methoden aus der Verhaltenstherapie.' },
  { n: '04', t: 'Abschluss', d: 'Wir stabilisieren das Erreichte und bereiten Sie auf den eigenständigen Weg vor.' },
];

export default function Approach() {
  return (
    <section id="ablauf" style={{ background: C.panel, padding: '80px 60px' }}>
      <span style={{ fontFamily: sans, fontSize: 13, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.accent }}>
        Ablauf
      </span>
      <h2 style={{ fontFamily: serif, fontSize: 40, fontWeight: 400, color: C.ink, margin: '12px 0 44px', letterSpacing: '-0.02em' }}>
        Der Ablauf
      </h2>
      <div className="steps-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
        {steps.map((s) => (
          <div key={s.n}>
            <div style={{ width: 44, height: 44, borderRadius: '50%', border: `1.5px solid ${C.accent}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: serif, fontSize: 17, fontStyle: 'italic', color: C.accent, marginBottom: 18 }}>
              {s.n}
            </div>
            <h3 style={{ fontFamily: serif, fontSize: 21, fontWeight: 400, color: C.ink, margin: '0 0 8px' }}>{s.t}</h3>
            <p style={{ fontFamily: sans, fontSize: 15, lineHeight: 1.6, color: C.inkSoft, margin: 0 }}>{s.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
