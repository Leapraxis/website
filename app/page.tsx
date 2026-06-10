import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Topics from '@/components/Topics';
import Services from '@/components/Services';
import Werdegang from '@/components/Werdegang';
import Manifesto from '@/components/Manifesto';
import Costs from '@/components/Costs';
import Approach from '@/components/Approach';
import FAQ from '@/components/FAQ';
import MapSection from '@/components/MapSection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const grain = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")";

export default function Home() {
  return (
    <div style={{ position: 'relative', background: '#fbf9f4' }}>
      {/* page-wide grain overlay */}
      <div style={{ position: 'fixed', inset: 0, backgroundImage: grain, opacity: 0.025, pointerEvents: 'none', zIndex: 1 }} />
      <main style={{ position: 'relative', zIndex: 2 }}>
        <Nav />
        <Hero />
        <About />
        <Topics />
        <Services />
        <Werdegang />
        <Manifesto />
        <Costs />
        <Approach />
        <FAQ />
        <MapSection />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
