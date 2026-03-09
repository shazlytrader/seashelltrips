import React, { createContext, useContext, useState, useCallback } from "react";

export type Language = "en" | "it" | "de" | "pl";

const translations: Record<Language, Record<string, string>> = {
  en: {
    nav_home: "Home",
    nav_tours: "Tours",
    nav_sea: "Sea Trips",
    nav_safari: "Safari",
    nav_transfers: "Transfers",
    nav_ebook: "Free E-Book",
    nav_about: "About Us",
    nav_reviews: "Reviews",
    nav_offers: "Special Offers",
    nav_contact: "Contact",
    nav_blog: "Blog",
    hero_title: "Welcome to Egypt's Eastern Desert!",
    hero_subtitle: "Discover Marsa Alam with us — contact us to receive your FREE Marsa Alam Travel Guide!",
    book_now: "Book Now",
    get_ebook: "Get Free E-Book",
    discount_banner: "🎉 Enjoy 10% discount on all excursions! 🎉",
    popular_tours: "Popular Tours",
    reviews_title: "What Our Guests Say",
    offers_title: "Special Offers",
    guide_title: "Free Travel Guide",
    guide_subtitle: "Get our comprehensive Marsa Alam Travel Guide delivered straight to your WhatsApp!",
    send_guide: "Send me the guide on WhatsApp",
    from: "From",
    per_person: "per person",
    price_request: "Price on request",
    book_whatsapp: "Book on WhatsApp",
    tour_program: "Tour Program",
    highlights: "Highlights",
    gallery: "Gallery",
    one_way: "One Way",
    round_trip: "Round Trip",
    contact_title: "Contact Us",
    name: "Name",
    country: "Country",
    tour: "Tour",
    date: "Date",
    guests: "Guests",
    whatsapp_number: "WhatsApp Number",
    send_request: "Send Booking Request",
    about_title: "About Seashell Trips",
    about_desc: "Professional tourism company based in Marsa Alam, offering licensed Egyptologist guides, private tours, sea trips, safari adventures, and reliable airport transfers.",
    snorkel_note: "Snorkeling equipment is included on all full-day boat trips.",
    single_quad: "Single Quad",
    double_quad: "Double Quad",
    footer_rights: "All rights reserved.",
    south_note: "Extra charge: £5 for hotels in south Marsa Alam",
    group_tour: "Group Tour",
    private_tour: "Private Tour",
    max_people: "max 8 people with guide in guest language",
  },
  it: {
    nav_home: "Home",
    nav_tours: "Tour",
    nav_sea: "Gite in Mare",
    nav_safari: "Safari",
    nav_transfers: "Transfer",
    nav_ebook: "E-Book Gratis",
    nav_about: "Chi Siamo",
    nav_reviews: "Recensioni",
    nav_offers: "Offerte Speciali",
    nav_contact: "Contatti",
    nav_blog: "Blog",
    hero_title: "Benvenuti nel Deserto Orientale dell'Egitto!",
    hero_subtitle: "Scopri Marsa Alam con noi — contattaci per ricevere la tua Guida GRATUITA di Marsa Alam!",
    book_now: "Prenota Ora",
    get_ebook: "Scarica E-Book Gratis",
    discount_banner: "🎉 Goditi il 10% di sconto su tutte le escursioni! 🎉",
    popular_tours: "Tour Popolari",
    reviews_title: "Cosa Dicono i Nostri Ospiti",
    offers_title: "Offerte Speciali",
    guide_title: "Guida di Viaggio Gratuita",
    guide_subtitle: "Ricevi la nostra guida completa di Marsa Alam direttamente su WhatsApp!",
    send_guide: "Inviami la guida su WhatsApp",
    from: "Da",
    per_person: "a persona",
    price_request: "Prezzo su richiesta",
    book_whatsapp: "Prenota su WhatsApp",
    tour_program: "Programma del Tour",
    highlights: "Punti Salienti",
    gallery: "Galleria",
    one_way: "Solo Andata",
    round_trip: "Andata e Ritorno",
    contact_title: "Contattaci",
    name: "Nome",
    country: "Paese",
    tour: "Tour",
    date: "Data",
    guests: "Ospiti",
    whatsapp_number: "Numero WhatsApp",
    send_request: "Invia Richiesta",
    about_title: "Chi è Seashell Trips",
    about_desc: "Azienda turistica professionale con sede a Marsa Alam, che offre guide egittologhe certificate, tour privati, gite in mare, avventure nel deserto e transfer aeroportuali affidabili.",
    snorkel_note: "L'attrezzatura per lo snorkeling è inclusa in tutte le gite in barca di un giorno intero.",
    single_quad: "Quad Singolo",
    double_quad: "Quad Doppio",
    footer_rights: "Tutti i diritti riservati.",
    south_note: "Supplemento: £5 per hotel nel sud di Marsa Alam",
    group_tour: "Tour di Gruppo",
    private_tour: "Tour Privato",
    max_people: "max 8 persone con guida nella lingua dell'ospite",
  },
  de: {
    nav_home: "Home",
    nav_tours: "Touren",
    nav_sea: "Bootsausflüge",
    nav_safari: "Safari",
    nav_transfers: "Transfers",
    nav_ebook: "Kostenloses E-Book",
    nav_about: "Über Uns",
    nav_reviews: "Bewertungen",
    nav_offers: "Sonderangebote",
    nav_contact: "Kontakt",
    nav_blog: "Blog",
    hero_title: "Willkommen in Ägyptens östlicher Wüste!",
    hero_subtitle: "Entdecken Sie Marsa Alam mit uns — kontaktieren Sie uns für Ihren KOSTENLOSEN Marsa Alam Reiseführer!",
    book_now: "Jetzt Buchen",
    get_ebook: "Kostenloses E-Book",
    discount_banner: "🎉 Genießen Sie 10% Rabatt auf alle Ausflüge! 🎉",
    popular_tours: "Beliebte Touren",
    reviews_title: "Was unsere Gäste sagen",
    offers_title: "Sonderangebote",
    guide_title: "Kostenloser Reiseführer",
    guide_subtitle: "Erhalten Sie unseren umfassenden Marsa Alam Reiseführer direkt auf WhatsApp!",
    send_guide: "Sende mir den Guide auf WhatsApp",
    from: "Ab",
    per_person: "pro Person",
    price_request: "Preis auf Anfrage",
    book_whatsapp: "Auf WhatsApp buchen",
    tour_program: "Tourprogramm",
    highlights: "Höhepunkte",
    gallery: "Galerie",
    one_way: "Einfache Fahrt",
    round_trip: "Hin- und Rückfahrt",
    contact_title: "Kontaktieren Sie Uns",
    name: "Name",
    country: "Land",
    tour: "Tour",
    date: "Datum",
    guests: "Gäste",
    whatsapp_number: "WhatsApp-Nummer",
    send_request: "Buchungsanfrage senden",
    about_title: "Über Seashell Trips",
    about_desc: "Professionelles Tourismusunternehmen in Marsa Alam mit lizenzierten Ägyptologen, privaten Touren, Bootsausflügen, Safari-Abenteuern und zuverlässigen Flughafentransfers.",
    snorkel_note: "Schnorchelausrüstung ist bei allen Ganztages-Bootsausflügen inklusive.",
    single_quad: "Einzel-Quad",
    double_quad: "Doppel-Quad",
    footer_rights: "Alle Rechte vorbehalten.",
    south_note: "Aufpreis: £5 für Hotels im Süden von Marsa Alam",
    group_tour: "Gruppentour",
    private_tour: "Privattour",
    max_people: "max. 8 Personen mit Reiseführer in der Sprache des Gastes",
  },
  pl: {
    nav_home: "Home",
    nav_tours: "Wycieczki",
    nav_sea: "Rejsy Morskie",
    nav_safari: "Safari",
    nav_transfers: "Transfery",
    nav_ebook: "Darmowy E-Book",
    nav_about: "O Nas",
    nav_reviews: "Opinie",
    nav_offers: "Oferty Specjalne",
    nav_contact: "Kontakt",
    nav_blog: "Blog",
    hero_title: "Witamy na Pustyni Wschodniej Egiptu!",
    hero_subtitle: "Odkryj Marsa Alam z nami — skontaktuj się, aby otrzymać DARMOWY Przewodnik po Marsa Alam!",
    book_now: "Zarezerwuj",
    get_ebook: "Darmowy E-Book",
    discount_banner: "🎉 Skorzystaj z 10% zniżki na wszystkie wycieczki! 🎉",
    popular_tours: "Popularne Wycieczki",
    reviews_title: "Co mówią nasi goście",
    offers_title: "Oferty Specjalne",
    guide_title: "Darmowy Przewodnik",
    guide_subtitle: "Otrzymaj nasz kompleksowy przewodnik po Marsa Alam bezpośrednio na WhatsApp!",
    send_guide: "Wyślij mi przewodnik na WhatsApp",
    from: "Od",
    per_person: "za osobę",
    price_request: "Cena na zapytanie",
    book_whatsapp: "Zarezerwuj na WhatsApp",
    tour_program: "Program Wycieczki",
    highlights: "Najważniejsze",
    gallery: "Galeria",
    one_way: "W jedną stronę",
    round_trip: "W obie strony",
    contact_title: "Skontaktuj się z nami",
    name: "Imię",
    country: "Kraj",
    tour: "Wycieczka",
    date: "Data",
    guests: "Goście",
    whatsapp_number: "Numer WhatsApp",
    send_request: "Wyślij zapytanie",
    about_title: "O Seashell Trips",
    about_desc: "Profesjonalna firma turystyczna z siedzibą w Marsa Alam, oferująca licencjonowanych egiptologów, prywatne wycieczki, rejsy morskie, przygody na safari i niezawodne transfery lotniskowe.",
    snorkel_note: "Sprzęt do snorkelingu jest wliczony we wszystkie całodzienne rejsy.",
    single_quad: "Quad Pojedynczy",
    double_quad: "Quad Podwójny",
    footer_rights: "Wszelkie prawa zastrzeżone.",
    south_note: "Dopłata: £5 za hotele w południowej Marsa Alam",
    group_tour: "Wycieczka Grupowa",
    private_tour: "Wycieczka Prywatna",
    max_people: "maks. 8 osób z przewodnikiem w języku gościa",
  },
};

const langNames: Record<Language, string> = { en: "English", it: "Italiano", de: "Deutsch", pl: "Polski" };
const langFlags: Record<Language, string> = { en: "🇬🇧", it: "🇮🇹", de: "🇩🇪", pl: "🇵🇱" };

interface I18nContextType {
  lang: Language;
  setLang: (l: Language) => void;
  t: (key: string) => string;
  languages: Language[];
  langNames: Record<Language, string>;
  langFlags: Record<Language, string>;
}

const I18nContext = createContext<I18nContextType | null>(null);

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>("en");
  const t = useCallback((key: string) => translations[lang]?.[key] || translations.en[key] || key, [lang]);
  return (
    <I18nContext.Provider value={{ lang, setLang, t, languages: ["en", "it", "de", "pl"], langNames, langFlags }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
};

export const WHATSAPP_NUMBER = "201017014296";
export const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;
export const EMAIL = "seashelltrips@gmail.com";

export const getWhatsAppLink = (tourName?: string) => {
  const msg = tourName
    ? `Hello, I would like to book the ${tourName}. How many places are available?`
    : "Hello, I'm interested in your tours in Marsa Alam. Can you help me?";
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(msg)}`;
};

export const getEbookWhatsAppLink = () => {
  return `${WHATSAPP_BASE}?text=${encodeURIComponent("Hello! I would like to receive the free Marsa Alam Travel Guide. Thank you!")}`;
};
