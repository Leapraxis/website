import { MAILTO_TERMIN } from '@/lib/contact';
import CopyEmail from '@/components/CopyEmail';
import CopyPhone from '@/components/CopyPhone';

const C = { bg: '#fbf9f4', accent: '#c0764a', forest: '#27362d' };
const serif = "'Newsreader', Georgia, serif";
const sans = "'Hanken Grotesk', system-ui, sans-serif";
const grain = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")";

const details = [
  ['Telefon', '0172 691 87 09', 'tel:+491726918709'],
  ['E-Mail', 'praxis@savelsberg-psychotherapie.de', 'mailto:praxis@savelsberg-psychotherapie.de'],
  ['Adresse', 'Osterstraße 124, 20255 Hamburg', null],
];

export default function Contact() {
  return (
    <section id="kontakt" style={{ position: 'relative', padding: '20px 60px 96px' }}>
      <div style={{ position: 'relative', background: C.forest, borderRadius: 26, padding: '64px 56px', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: grain, opacity: 0.06, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', width: 460, height: 460, top: -180, right: -120, background: `radial-gradient(circle, ${C.accent}33, transparent 65%)`, pointerEvents: 'none' }} />
        <div className="contact-grid" style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 48, alignItems: 'center' }}>
          <div>
            <h2 style={{ fontFamily: serif, fontSize: 46, fontWeight: 400, color: C.bg, margin: 0, lineHeight: 1.05, letterSpacing: '-0.02em' }}>
              Kontakt
            </h2>
            <p style={{ fontFamily: sans, fontSize: 17.5, lineHeight: 1.6, color: 'rgba(251,249,244,0.72)', maxWidth: 380, margin: '20px 0 32px' }}>
              Am besten bin ich per E-Mail erreichbar. Schreiben Sie mir gerne eine kurze Nachricht – ich melde mich für einen ersten, unverbindlichen Gesprächstermin.
            </p>
            <a
              href={MAILTO_TERMIN}
              style={{ fontFamily: sans, fontSize: 15.5, fontWeight: 600, color: C.forest, background: C.accent, border: 'none', borderRadius: 999, padding: '15px 32px', cursor: 'pointer', display: 'inline-block' }}
            >
              Jetzt anfragen
            </a>
          </div>
          <div className="contact-aside" style={{ borderLeft: '1px solid rgba(251,249,244,0.20)', paddingLeft: 40, display: 'flex', flexDirection: 'column', gap: 20, fontFamily: sans }}>
            {details.map(([k, v, href]) => (
              <div key={k as string}>
                <div style={{ fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(251,249,244,0.5)', marginBottom: 4 }}>{k}</div>
                {k === 'E-Mail' ? (
                  <CopyEmail />
                ) : k === 'Telefon' ? (
                  <CopyPhone />
                ) : href ? (
                  <a href={href as string} style={{ fontSize: 16.5, color: C.bg, fontWeight: 500, textDecoration: 'none' }}>{v}</a>
                ) : (
                  <div style={{ fontSize: 16.5, color: C.bg, fontWeight: 500 }}>{v}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
