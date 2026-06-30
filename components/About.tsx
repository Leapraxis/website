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
      {[
        'Ich bin Lea Savelsberg, approbierte Psychologische Psychotherapeutin mit Schwerpunkt Verhaltenstherapie. In meiner Arbeit verbinde ich wissenschaftlich fundierte Psychotherapie mit einer wertschätzenden und individuellen Begleitung.',
        'Schon früh hat mich interessiert, was Menschen bewegt, wie sie mit Herausforderungen umgehen und welche Wege sie finden, schwierige Lebensphasen zu bewältigen. Dieses Interesse an individuellen Lebensgeschichten und persönlichen Entwicklungsprozessen begleitet mich bis heute und hat meinen beruflichen Weg geprägt.',
        'Die Erfahrungen, die wir im Laufe unseres Lebens machen, prägen unser Denken, Fühlen und Handeln. Gleichzeitig verstehe ich Entwicklung und Veränderung als einen fortlaufenden Prozess. Die Verhaltenstherapie bietet die Möglichkeit, belastende Gedanken- und Verhaltensmuster besser zu verstehen, neue Erfahrungen zu sammeln und alternative Handlungsmöglichkeiten zu erproben. Diese Haltung prägt meine therapeutische Arbeit.',
        'Meine klinische Erfahrung habe ich sowohl auf psychiatrischen Stationen als auch in der ambulanten psychotherapeutischen Versorgung gesammelt. Heute begleite ich Menschen in meiner Privatpraxis.',
        'Mir ist ein vertrauensvoller und wertschätzender Rahmen wichtig, in dem Sie offen über Ihre Anliegen sprechen können. Gemeinsam betrachten wir die Gedanken, Gefühle und Verhaltensmuster, die zu Ihren Belastungen beitragen oder diese aufrechterhalten. Dabei geht es nicht nur darum, Schwierigkeiten besser zu verstehen, sondern auch darum, konkrete und alltagsnahe Strategien zu entwickeln, die nachhaltige Veränderungen ermöglichen.',
        'Mein Ziel ist es, Sie dabei zu unterstützen, neue Handlungsspielräume zu gewinnen, eigene Stärken zu nutzen und Ihren persönlichen Weg selbstbestimmt zu gestalten.',
      ].map((para, i) => (
        <p key={i} style={{ fontFamily: sans, fontSize: 18, lineHeight: 1.7, color: C.inkSoft, maxWidth: 680, marginBottom: 18 }}>
          {para}
        </p>
      ))}
    </section>
  );
}
