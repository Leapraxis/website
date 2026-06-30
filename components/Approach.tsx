const C = { panel: '#f1ede3', ink: '#24302a', inkSoft: '#5c655d', accent: '#c0764a' };
const serif = "'Newsreader', Georgia, serif";
const sans = "'Hanken Grotesk', system-ui, sans-serif";

const absaetze = [
  'Zu Beginn findet ein Erstgespräch statt, das dem gegenseitigen Kennenlernen dient. Hier haben Sie Raum, Ihr Anliegen zu schildern und Fragen zu stellen. Gleichzeitig können Sie einen ersten Eindruck von meiner Arbeitsweise gewinnen. Zum Abschluss des Gesprächs erhalten Sie eine erste Einschätzung sowie einen Ausblick hinsichtlich möglicher nächster Schritte.',
  'Im Anschluss folgen die sogenannten probatorischen Sitzungen (in der Regel 1–4 Termine). In dieser Phase geht es darum, Ihr Anliegen genauer zu verstehen, erste therapeutische Ziele zu entwickeln und eine grobe Behandlungsplanung zu erarbeiten. Dabei erfolgt auch eine erste diagnostische Einordnung der Symptomatik. Ebenso prüfen wir, ob die Zusammenarbeit für Sie stimmig ist.',
  'Wenn wir uns anschließend für eine gemeinsame Arbeit entscheiden, beginnt die eigentliche psychotherapeutische Arbeit. Dabei wird Ihre aktuelle Situation im Zusammenhang mit individuellen Lebenserfahrungen und Verhaltensmustern eingeordnet. Ein zentraler Bestandteil der Verhaltenstherapie ist das gemeinsame Erarbeiten des Zusammenspiels von Gedanken, Gefühlen und Verhalten. Auf dieser Grundlage entwickeln wir gemeinsam erste konkrete Schritte zur Veränderung.',
  'Dabei ist mir wichtig, dass Sie sich mit Ihrem Anliegen ernst genommen fühlen und wir in einem sicheren und unterstützenden Rahmen in Ihrem Tempo arbeiten können.',
  'Eine Therapiesitzung dauert in der Regel 50 Minuten und findet insbesondere zu Beginn der Behandlung meistens in einem wöchentlichen Rhythmus statt. Wie lange eine Therapie dauert, hängt von Ihrem Anliegen ab. Kurzzeittherapien umfassen 12–24 Sitzungen. Bei komplexeren Belastungen oder langjährigen Mustern kann eine Langzeittherapie sinnvoll sein. Den Rahmen und die Indikation klären wir gemeinsam im Laufe der Behandlung.',
];

export default function Approach() {
  return (
    <section id="ablauf" style={{ background: C.panel, padding: '88px 60px' }}>
      <span style={{ fontFamily: sans, fontSize: 13, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.accent }}>
        Ablauf
      </span>
      <h2 style={{ fontFamily: serif, fontSize: 40, fontWeight: 400, color: C.ink, margin: '12px 0 32px', letterSpacing: '-0.02em' }}>
        So läuft eine Therapie ab
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
