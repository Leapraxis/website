import Nav from './Nav';
import Footer from './Footer';

const C = { ink: '#24302a', inkSoft: '#5c655d', accent: '#c0764a', line: 'rgba(36,48,42,0.13)' };
const serif = "'Newsreader', Georgia, serif";
const sans = "'Hanken Grotesk', system-ui, sans-serif";

export function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: 48, paddingBottom: 48, borderBottom: `1px solid ${C.line}` }}>
      <h2 style={{ fontFamily: serif, fontSize: 24, fontWeight: 400, color: C.ink, margin: '0 0 20px', letterSpacing: '-0.01em' }}>
        {title}
      </h2>
      <div style={{ fontFamily: sans, fontSize: 16, lineHeight: 1.75, color: C.inkSoft }}>
        {children}
      </div>
    </section>
  );
}

export function LegalP({ children }: { children: React.ReactNode }) {
  return <p style={{ margin: '0 0 14px' }}>{children}</p>;
}

export function LegalList({ items }: { items: string[] }) {
  return (
    <ul style={{ paddingLeft: 20, margin: '0 0 14px' }}>
      {items.map((item, i) => <li key={i} style={{ marginBottom: 6 }}>{item}</li>)}
    </ul>
  );
}

export function LegalBlock({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ background: '#f1ede3', borderRadius: 12, padding: '18px 22px', marginBottom: 14 }}>
      <div style={{ fontFamily: sans, fontSize: 12, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.accent, marginBottom: 8 }}>{label}</div>
      <div style={{ fontFamily: sans, fontSize: 15.5, color: C.ink, lineHeight: 1.65 }}>{children}</div>
    </div>
  );
}

export default function LegalLayout({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <div style={{ background: '#fbf9f4', minHeight: '100vh' }}>
      <Nav />
      <main style={{ maxWidth: 720, margin: '0 auto', padding: '64px 60px 100px' }}>
        <div style={{ marginBottom: 56, paddingBottom: 40, borderBottom: `1px solid ${C.line}` }}>
          <h1 style={{ fontFamily: serif, fontSize: 48, fontWeight: 400, color: C.ink, margin: '0 0 12px', letterSpacing: '-0.02em' }}>
            {title}
          </h1>
          {subtitle && (
            <p style={{ fontFamily: sans, fontSize: 16, color: C.inkSoft, margin: 0 }}>{subtitle}</p>
          )}
        </div>
        {children}
      </main>
      <Footer />
    </div>
  );
}
