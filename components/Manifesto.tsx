const C = { panel: '#f1ede3', ink: '#24302a', inkSoft: '#5c655d', accent: '#c0764a' };
const serif = "'Newsreader', Georgia, serif";
const sans = "'Hanken Grotesk', system-ui, sans-serif";
const grain = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")";

export default function Manifesto() {
  return (
    <section style={{ position: 'relative', background: C.panel, padding: '84px 60px', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: grain, opacity: 0.04, pointerEvents: 'none' }} />
      <div style={{ position: 'relative', maxWidth: 980 }}>
        <span style={{ fontFamily: serif, fontSize: 80, lineHeight: 0.5, color: C.accent, opacity: 0.5, display: 'block' }}>&ldquo;</span>
        <p className="manifesto-text" style={{ fontFamily: serif, fontSize: 36, lineHeight: 1.42, fontWeight: 400, color: C.ink, margin: '6px 0 0', letterSpacing: '-0.01em' }}>
          Heilung braucht keinen lauten Antrieb. Sie braucht einen Raum, in dem nichts beschönigt werden muss – und jemanden, der bleibt, während Sie hinschauen.
        </p>
        <span style={{ display: 'inline-block', marginTop: 28, fontFamily: sans, fontSize: 14.5, letterSpacing: '0.04em', color: C.inkSoft }}>
          — Lea Savelsberg, Approbierte Psychotherapeutin
        </span>
      </div>
    </section>
  );
}
