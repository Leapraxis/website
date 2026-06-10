const C = { panel: '#f1ede3', ink: '#24302a', inkSoft: '#5c655d', accent: '#c0764a' };
const serif = "'Newsreader', Georgia, serif";
const sans = "'Hanken Grotesk', system-ui, sans-serif";

export default function About() {
  return (
    <section id="ueber-mich" style={{ background: C.panel, padding: '88px 60px' }}>
      <span style={{ fontFamily: sans, fontSize: 13, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.accent }}>
        Approbierte Psychotherapeutin
      </span>
      <h2 style={{ fontFamily: serif, fontSize: 40, fontWeight: 400, color: C.ink, margin: '12px 0 24px', letterSpacing: '-0.02em' }}>
        Über mich
      </h2>
      <p style={{ fontFamily: sans, fontSize: 18, lineHeight: 1.7, color: C.inkSoft, maxWidth: 640, marginBottom: 20 }}>
        Ich bin Lea Savelsberg, seit 2024 approbierte Psychologische Psychotherapeutin mit Schwerpunkt Verhaltenstherapie. Meine klinische Erfahrung habe ich an psychiatrischen Stationen und in der ambulanten Psychotherapie in Hamburg gesammelt – heute arbeite ich in eigener Privatpraxis.
      </p>
      <p style={{ fontFamily: sans, fontSize: 18, lineHeight: 1.7, color: C.inkSoft, maxWidth: 640 }}>
        Mir ist ein Raum wichtig, in dem Sie offen sprechen können – ohne Bewertung und in Ihrem Tempo. Gemeinsam schauen wir auf das, was belastet, und entwickeln konkrete Schritte, die im Alltag tragen.
      </p>
    </section>
  );
}
