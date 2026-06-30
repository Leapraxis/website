const C = { ink: '#24302a', inkSoft: '#5c655d', accent: '#c0764a' };
const serif = "'Newsreader', Georgia, serif";
const sans = "'Hanken Grotesk', system-ui, sans-serif";

const absaetze = [
  'Schon früh hat mich interessiert, was Menschen stärkt, wenn das Leben herausfordernd wird, und was ihnen hilft, wieder Stabilität und Orientierung zu finden.',
  'Mein Studium der Psychologie absolvierte ich in der Schweiz. Anschließend sammelte ich vielfältige praktische Erfahrungen in der Personalberatung sowie in der Begleitung von Auszubildenden bei Fragen der beruflichen Orientierung und persönlichen Ausrichtung.',
  'Im weiteren Verlauf entschied ich mich für die vertiefte psychotherapeutische Ausbildung und absolvierte meine Weiterbildung zur Psychologischen Psychotherapeutin mit Schwerpunkt Verhaltenstherapie in Hamburg. Mit der Approbation sowie dem Eintrag ins Arztregister erlangte ich die Voraussetzung für die selbstständige psychotherapeutische Tätigkeit.',
  'Ein wichtiger Schwerpunkt meiner klinischen Tätigkeit lag in der Arbeit mit Menschen in akuten psychischen Krisen sowie mit komplexen psychischen Erkrankungen im stationären Setting. Diese Erfahrung prägte mein Verständnis für die Vielschichtigkeit psychischer Störungsbilder ebenso wie für die Bedeutung einer sorgfältigen diagnostischen Einordnung. Darauf aufbauend gestaltete ich meine weitere Tätigkeit in der ambulanten Versorgung, wo ich Menschen über einen längeren Zeitraum psychotherapeutisch begleitete und zusätzlich die fachliche Leitung eines Diagnostikzentrums übernahm.',
  'Aus diesen beruflichen Abschnitten hat sich ein breites fachliches Spektrum entwickelt: von der diagnostischen Abklärung und Einschätzung psychischer Störungsbilder über die Begleitung in akuten Krisensituationen bis hin zur langfristigen psychotherapeutischen Behandlung.',
  'In meiner therapeutischen Arbeit ist es mir besonders wichtig, Menschen mit Wertschätzung, echtem Verständnis und einer zugewandten, patientinnenorientierten Haltung zu begegnen. Dabei ist es mein Anliegen, einen sicheren und geschützten Rahmen zu schaffen, in dem Sie sich wahrgenommen, ernst genommen und gut aufgehoben fühlen können, um gemeinsam neue Perspektiven zu eröffnen.',
];

export default function Werdegang() {
  return (
    <section id="werdegang" style={{ background: '#f1ede3', padding: '88px 60px' }}>
      <span style={{ fontFamily: sans, fontSize: 13, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.accent }}>
        Werdegang
      </span>
      <h2 style={{ fontFamily: serif, fontSize: 40, fontWeight: 400, color: C.ink, margin: '12px 0 32px', letterSpacing: '-0.02em' }}>
        Beruflicher Werdegang
      </h2>
      <div style={{ maxWidth: 680 }}>
        {absaetze.map((para, i) => (
          <p key={i} style={{ fontFamily: sans, fontSize: 17, lineHeight: 1.7, color: C.inkSoft, marginBottom: 18 }}>
            {para}
          </p>
        ))}
      </div>
    </section>
  );
}
