'use client';

import { useState } from 'react';

const PHONE_DISPLAY = '0172 691 87 09';
const PHONE_PLAIN = '+491726918709';
const bg = '#fbf9f4';

export default function CopyPhone() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    let ok = false;
    try {
      await navigator.clipboard.writeText(PHONE_DISPLAY);
      ok = true;
    } catch {
      try {
        const ta = document.createElement('textarea');
        ta.value = PHONE_DISPLAY;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        ok = document.execCommand('copy');
        document.body.removeChild(ta);
      } catch {
        ok = false;
      }
    }
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <a href={`tel:${PHONE_PLAIN}`} style={{ fontSize: 16.5, color: bg, fontWeight: 500, textDecoration: 'none' }}>
        {PHONE_DISPLAY}
      </a>
      <button
        onClick={copy}
        aria-label={copied ? 'Telefonnummer kopiert' : 'Telefonnummer kopieren'}
        title={copied ? 'Kopiert' : 'Nummer kopieren'}
        style={{
          flexShrink: 0, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          width: 30, height: 30, borderRadius: 8, cursor: 'pointer',
          background: 'rgba(251,249,244,0.10)', border: '1px solid rgba(251,249,244,0.22)',
          color: copied ? '#c0764a' : bg, transition: 'color 0.2s, background 0.2s',
        }}
      >
        {copied ? (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        ) : (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
        )}
      </button>
    </div>
  );
}
