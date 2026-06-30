'use client';

import { useState, useEffect } from 'react';
import { MAILTO_TERMIN } from '@/lib/contact';

const C = {
  ink: '#24302a',
  inkSoft: '#5c655d',
  accent: '#c0764a',
  bg: '#fbf9f4',
  forest: '#27362d',
};
const serif = "'Newsreader', Georgia, serif";
const sans = "'Hanken Grotesk', system-ui, sans-serif";
const grain = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")";

const navLinks = [
  { label: 'Über mich',  id: 'ueber-mich' },
  { label: 'Behandlung', id: 'leistungen' },
  { label: 'Werdegang',  id: 'werdegang' },
  { label: 'Kosten',     id: 'kosten' },
  { label: 'Ablauf',     id: 'ablauf' },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  return (
    <>
      <header style={{ position: 'relative', zIndex: 3, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '30px 60px' }}>
        <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
          <span style={{ fontFamily: serif, fontSize: 24, color: C.ink, letterSpacing: '0.01em' }}>Lea Savelsberg</span>
          <span style={{ fontFamily: sans, fontSize: 11, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: C.accent, marginTop: 3 }}>
            Psychologische Psychotherapeutin
          </span>
        </span>

        {/* Desktop-Navigation */}
        <nav className="desktop-nav" style={{ display: 'flex', gap: 32, fontFamily: sans, fontSize: 14.5, fontWeight: 500, color: C.inkSoft }}>
          {navLinks.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.id)}
              style={{ cursor: 'pointer', background: 'none', border: 'none', fontFamily: sans, fontSize: 14.5, fontWeight: 500, color: C.inkSoft, padding: 0 }}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          className="desktop-cta"
          href={MAILTO_TERMIN}
          style={{ fontFamily: sans, fontSize: 14, fontWeight: 600, color: C.ink, background: 'transparent', border: `1.5px solid ${C.accent}`, borderRadius: 999, padding: '10px 22px', cursor: 'pointer', letterSpacing: '0.01em', display: 'inline-block' }}
        >
          Termin anfragen
        </a>

        {/* Hamburger-Button (nur Mobile) */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(true)}
          aria-label="Menü öffnen"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 6, color: C.ink, alignItems: 'center', justifyContent: 'center' }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="6"  x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </header>

      {/* Mobile Fullscreen-Overlay */}
      {menuOpen && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 100,
          background: C.forest,
          display: 'flex', flexDirection: 'column',
          padding: '30px 32px',
          overflow: 'hidden',
        }}>
          {/* Grain */}
          <div style={{ position: 'absolute', inset: 0, backgroundImage: grain, opacity: 0.06, pointerEvents: 'none' }} />
          {/* Glow */}
          <div style={{ position: 'absolute', width: 300, height: 300, top: -100, right: -80, background: `radial-gradient(circle, ${C.accent}33, transparent 65%)`, pointerEvents: 'none' }} />

          {/* Header-Zeile */}
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 56 }}>
            <span style={{ fontFamily: serif, fontSize: 22, color: C.bg, letterSpacing: '0.01em' }}>Lea Savelsberg</span>
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Menü schließen"
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: C.bg, padding: 6, opacity: 0.8 }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Nav-Links */}
          <nav style={{ position: 'relative', flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
            {navLinks.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.id)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  textAlign: 'left', padding: '10px 0',
                  fontFamily: serif, fontSize: 38, fontStyle: 'italic', fontWeight: 400,
                  color: C.bg, letterSpacing: '-0.01em', lineHeight: 1.1,
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Unten: CTA + Kontakt */}
          <div style={{ position: 'relative', paddingTop: 32, borderTop: '1px solid rgba(251,249,244,0.15)' }}>
            <a
              href={MAILTO_TERMIN}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'inline-block', marginBottom: 24,
                fontFamily: sans, fontSize: 15, fontWeight: 600,
                color: C.forest, background: C.accent,
                borderRadius: 999, padding: '13px 28px',
              }}
            >
              Termin anfragen
            </a>
            <div style={{ fontFamily: sans, fontSize: 14, color: 'rgba(251,249,244,0.55)', lineHeight: 1.7 }}>
              <a href="tel:+491726918709" style={{ color: 'inherit', display: 'block' }}>0172 691 87 09</a>
              <a href="mailto:praxis@savelsberg-psychotherapie.de" style={{ color: 'inherit', display: 'block' }}>praxis@savelsberg-psychotherapie.de</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
