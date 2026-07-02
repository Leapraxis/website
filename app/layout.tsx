import type { Metadata, Viewport } from 'next';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Lea Savelsberg – Psychotherapeutin Hamburg | Privatpraxis',
  description: 'Verhaltenstherapeutische Einzeltherapie für Erwachsene in Hamburg. Approbierte Psychologische Psychotherapeutin. Privatpatienten und Selbstzahler.',
  keywords: [
    'Psychotherapeutin Hamburg',
    'Verhaltenstherapie Hamburg',
    'Privatpraxis Psychotherapie Hamburg',
    'Psychotherapie Privatpatienten Hamburg',
    'Psychologische Psychotherapeutin Hamburg',
    'Einzeltherapie Erwachsene Hamburg',
    'Psychotherapie Selbstzahler Hamburg',
  ],
  authors: [{ name: 'Lea Savelsberg' }],
  openGraph: {
    title: 'Lea Savelsberg – Psychotherapeutin Hamburg | Privatpraxis',
    description: 'Verhaltenstherapeutische Einzeltherapie für Erwachsene in Hamburg. Approbierte Psychologische Psychotherapeutin. Privatpatienten und Selbstzahler.',
    locale: 'de_DE',
    type: 'website',
    url: 'https://www.savelsberg-psychotherapie.de',
    siteName: 'Privatpraxis Lea Savelsberg',
    images: [
      {
        url: 'https://www.savelsberg-psychotherapie.de/Lea_savelsberg_photo.jpeg',
        width: 1200,
        height: 630,
        alt: 'Lea Savelsberg – Approbierte Psychologische Psychotherapeutin Hamburg',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.lea-savelsberg.de',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Physician', 'LocalBusiness'],
      '@id': 'https://www.lea-savelsberg.de/#practice',
      name: 'Privatpraxis Lea Savelsberg',
      description: 'Approbierte Psychologische Psychotherapeutin (Verhaltenstherapie) in Hamburg. Einzeltherapie für Erwachsene, Privatpatienten und Selbstzahler.',
      url: 'https://www.lea-savelsberg.de',
      email: 'praxis@savelsberg-psychotherapie.de',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Osterstraße 124',
        addressLocality: 'Hamburg',
        postalCode: '20255',
        addressCountry: 'DE',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 53.5944,
        longitude: 9.9878,
      },
      medicalSpecialty: 'Psychiatry',
      availableService: [
        { '@type': 'MedicalTherapy', name: 'Einzeltherapie für Erwachsene' },
        { '@type': 'MedicalTherapy', name: 'Kognitive Verhaltenstherapie' },
        { '@type': 'MedicalTherapy', name: 'Krisenintervention' },
      ],
      priceRange: '€€',
      paymentAccepted: 'Privatversicherung, Selbstzahler',
    },
    {
      '@type': 'Person',
      '@id': 'https://www.lea-savelsberg.de/#person',
      name: 'Lea Savelsberg',
      jobTitle: 'Approbierte Psychologische Psychotherapeutin',
      worksFor: { '@id': 'https://www.lea-savelsberg.de/#practice' },
      knowsAbout: ['Verhaltenstherapie', 'Angststörungen', 'Depression', 'Burnout', 'Krisenintervention'],
      alumniOf: [
        { '@type': 'CollegeOrUniversity', name: 'Medical School Hamburg' },
        { '@type': 'CollegeOrUniversity', name: 'Universität Bern' },
        { '@type': 'CollegeOrUniversity', name: 'Université de Fribourg' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Wer übernimmt die Kosten der Therapie?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Meine Praxis ist eine reine Privatpraxis. Die Kosten werden von privaten Krankenversicherungen (PKV) oder direkt von Ihnen als Selbstzahler übernommen. Gesetzlich Versicherte können in der Regel keine Kostenerstattung beantragen.',
          },
        },
        {
          '@type': 'Question',
          name: 'Kann ich die Therapiekosten von der Steuer absetzen?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ja, unter bestimmten Voraussetzungen. Therapiekosten können als außergewöhnliche Belastung in der Einkommensteuererklärung geltend gemacht werden. Als Soloselbstständige lohnt es sich, dies mit der Steuerberatung zu besprechen.',
          },
        },
        {
          '@type': 'Question',
          name: 'Brauche ich eine Überweisung oder Genehmigung der Krankenkasse?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Nein. Als Privatpatientin oder -patient bzw. Selbstzahler können Sie direkt bei mir anfragen – ohne Überweisung und ohne Genehmigungsverfahren.',
          },
        },
        {
          '@type': 'Question',
          name: 'Kann ich Termine flexibel legen – zum Beispiel früh morgens oder abends?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ja. Nach Absprache sind Früh- und Spättermine möglich. Besonders für Soloselbstständige finden wir gemeinsam einen Rhythmus, der zum Arbeitsalltag passt.',
          },
        },
      ],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Newsreader:ital,wght@0,400;0,500;1,400;1,500&family=Hanken+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
