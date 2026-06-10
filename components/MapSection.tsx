'use client';

import { useState } from 'react';

const C = { ink: '#24302a', inkSoft: '#5c655d', accent: '#c0764a', accentDeep: '#a8623a', panel: '#f1ede3', bg: '#fbf9f4', line: 'rgba(36,48,42,0.13)' };
const serif = "'Newsreader', Georgia, serif";
const sans = "'Hanken Grotesk', system-ui, sans-serif";

const MAPS_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2370.1!2d9.9556!3d53.5721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b18f0b0b0b0b0b%3A0x0!2sOsterstra%C3%9Fe%20124%2C%2020255%20Hamburg!5e0!3m2!1sde!2sde!4v1700000000000";
const MAPS_LINK = "https://maps.google.com/maps?q=Osterstra%C3%9Fe+124%2C+20255+Hamburg";

export default function MapSection() {
  const [consented, setConsented] = useState(false);

  return (
    <section style={{ padding: '88px 60px', background: C.panel }}>
      <div style={{ borderRadius: 24, overflow: 'hidden', border: `1px solid ${C.line}`, background: '#fff' }}>
        {/* Info-Leiste */}
        <address style={{ padding: '36px 44px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 20, fontStyle: 'normal', borderBottom: `1px solid ${C.line}` }}>
          <div>
            <span style={{ fontFamily: sans, fontSize: 13, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.accent, display: 'block', marginBottom: 8 }}>
              Anfahrt
            </span>
            <h2 style={{ fontFamily: serif, fontSize: 28, fontWeight: 400, color: C.ink, margin: '0 0 6px', lineHeight: 1.1 }}>
              Anfahrt
            </h2>
            <div style={{ fontFamily: sans, fontSize: 16, color: C.inkSoft }}>
              Osterstraße 124 · 20255 Hamburg
            </div>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'center' }}>
            <span style={{ fontFamily: sans, fontSize: 14, color: C.accentDeep, background: C.panel, borderRadius: 999, padding: '8px 16px', whiteSpace: 'nowrap' }}>
              U2 Osterstraße · 2 Min. Fußweg
            </span>
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: sans, fontSize: 14, fontWeight: 600, color: C.bg, background: C.accent, borderRadius: 999, padding: '9px 20px', display: 'inline-flex', alignItems: 'center', gap: 8, whiteSpace: 'nowrap' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              Auf Google Maps öffnen
            </a>
          </div>
        </address>

        {/* Karte – 2-Klick-Lösung (DSGVO) */}
        <div style={{ height: 400, position: 'relative', background: C.panel }}>
          {consented ? (
            <iframe
              title="Praxis Lea Savelsberg – Karte"
              src={MAPS_EMBED}
              style={{ width: '100%', height: '100%', border: 0, display: 'block', filter: 'grayscale(0.2) saturate(0.85)' }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          ) : (
            <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16, padding: 32, textAlign: 'center' }}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke={C.inkSoft} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.5 }}>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              <p style={{ fontFamily: sans, fontSize: 14, lineHeight: 1.6, color: C.inkSoft, maxWidth: 320, margin: 0 }}>
                Um die Karte anzuzeigen, wird eine Verbindung zu Google Maps hergestellt. Dabei werden Ihre IP-Adresse und weitere Browserdaten an Google LLC (USA) übertragen.
              </p>
              <button
                onClick={() => setConsented(true)}
                style={{ fontFamily: sans, fontSize: 14, fontWeight: 600, color: C.bg, background: C.accent, border: 'none', borderRadius: 999, padding: '11px 24px', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 8 }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                Karte anzeigen
              </button>
              <span style={{ fontFamily: sans, fontSize: 12, color: C.inkSoft, opacity: 0.7 }}>
                Weitere Infos in unserer{' '}
                <a href="/datenschutz" style={{ color: C.accent }}>Datenschutzerklärung</a>
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
