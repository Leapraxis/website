// Zentrale Kontaktdaten – an einer Stelle pflegen.
export const EMAIL = 'praxis@savelsberg-psychotherapie.de';

// Reiner mailto-Link (z. B. für die Anzeige der Adresse).
export const MAILTO = `mailto:${EMAIL}`;

// CTA-Link „Termin anfragen“: öffnet das Mailprogramm mit vorausgefülltem
// Betreff und einer kurzen Textvorlage.
const SUBJECT = 'Terminanfrage';
const BODY = [
  'Guten Tag Frau Savelsberg,',
  '',
  'ich interessiere mich für ein Erstgespräch und würde gerne einen Termin vereinbaren.',
  '',
  'Viele Grüße',
  '',
].join('\n');

export const MAILTO_TERMIN = `${MAILTO}?subject=${encodeURIComponent(SUBJECT)}&body=${encodeURIComponent(BODY)}`;
