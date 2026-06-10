const C = { ink: '#24302a', inkSoft: '#5c655d', line: 'rgba(36,48,42,0.13)' };
const serif = "'Newsreader', Georgia, serif";
const sans = "'Hanken Grotesk', system-ui, sans-serif";

export default function Footer() {
  return (
    <footer style={{ padding: '0 60px 50px' }}>
      <div style={{ borderTop: `1px solid ${C.line}`, paddingTop: 28, display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: sans, fontSize: 13.5, color: C.inkSoft, flexWrap: 'wrap', gap: 16 }}>
        <span style={{ fontFamily: serif, fontSize: 19, color: C.ink }}>Lea Savelsberg</span>
        <div style={{ display: 'flex', gap: 26 }}>
          {[
            { label: 'Impressum', href: '/impressum' },
            { label: 'Datenschutz', href: '/datenschutz' },
            { label: 'Praxisordnung', href: '/praxisordnung' },
            { label: 'Kontakt', href: '#kontakt' },
          ].map((item) => (
            <a key={item.label} href={item.href} style={{ cursor: 'pointer', color: C.inkSoft }}>
              {item.label}
            </a>
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4 }}>
          <a href="tel:+491726918709" style={{ fontSize: 13, color: C.inkSoft }}>0172 691 87 09</a>
          <span style={{ fontSize: 13, color: C.inkSoft }}>© {new Date().getFullYear()} Lea Savelsberg</span>
        </div>
      </div>
    </footer>
  );
}
