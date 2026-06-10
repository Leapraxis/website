const C = {
  bg: '#fbf9f4',
  panel: '#f1ede3',
  panel2: '#e9e3d6',
  ink: '#24302a',
  inkSoft: '#5c655d',
  accent: '#c0764a',
  accentDeep: '#a8623a',
  line: 'rgba(36,48,42,0.13)',
  dim: 'rgba(36,48,42,0.62)',
};
const serif = "'Newsreader', Georgia, serif";
const sans = "'Hanken Grotesk', system-ui, sans-serif";

export default function Hero() {
  return (
    <section className="hero-section" style={{ position: 'relative', padding: '70px 60px 96px', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', width: 760, height: 760, top: -260, right: -180, background: `radial-gradient(circle, ${C.accent}20, transparent 62%)`, pointerEvents: 'none' }} />
      <div className="hero-grid" style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1.35fr 0.9fr', gap: 48, alignItems: 'center' }}>
        <div>
          <div className="vd-reveal" style={{ animationDelay: '60ms' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 12, fontFamily: sans, fontSize: 13, fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: C.accent }}>
              <span style={{ width: 30, height: 1.5, background: C.accent, display: 'inline-block' }} />
              Verhaltenstherapie · Hamburg
            </span>
          </div>
          <div className="vd-reveal" style={{ animationDelay: '160ms', marginTop: 26 }}>
            <h1 style={{ fontFamily: serif, fontSize: 82, lineHeight: 1.02, fontWeight: 400, color: C.ink, margin: 0, letterSpacing: '-0.02em' }}>
              Verhaltenstherapie<br />für <em style={{ fontStyle: 'italic', color: C.accent }}>Erwachsene</em>.
            </h1>
          </div>
          <div className="vd-reveal" style={{ animationDelay: '300ms', marginTop: 30 }}>
            <p style={{ fontFamily: sans, fontSize: 19, lineHeight: 1.7, color: C.inkSoft, maxWidth: 440, margin: 0 }}>
              Psychotherapeutische Begleitung für Erwachsene – ein ruhiger Ort, an dem Sie sich zeigen dürfen, wie Sie sind.
            </p>
          </div>
          <div className="vd-reveal" style={{ animationDelay: '440ms', marginTop: 40 }}>
            <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
              <a
                href="mailto:praxis@savelsberg-psychotherapie.de"
                style={{ fontFamily: sans, fontSize: 15.5, fontWeight: 600, color: C.bg, background: C.accent, border: 'none', borderRadius: 999, padding: '15px 32px', cursor: 'pointer', display: 'inline-block' }}
              >
                Termin anfragen
              </a>
              <a
                href="#ueber-mich"
                style={{ fontFamily: sans, fontSize: 15.5, fontWeight: 600, color: C.ink, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 8 }}
              >
                Mehr über mich <span style={{ color: C.accent }}>→</span>
              </a>
            </div>
          </div>
        </div>
        <div className="vd-reveal hero-image" style={{ animationDelay: '360ms' }}>
          <div style={{ position: 'relative', aspectRatio: '3/4', borderRadius: 200, overflow: 'hidden', background: `linear-gradient(165deg, ${C.panel2}, ${C.panel})`, border: `1.5px solid rgba(36,48,42,0.18)`, boxShadow: '0 8px 40px rgba(36,48,42,0.10)' }}>
            <img
              src="/Lea_savelsberg_photo.jpeg"
              alt="Lea Savelsberg – Approbierte Psychologische Psychotherapeutin Hamburg"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
