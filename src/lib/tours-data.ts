export interface Tour {
  id: string;
  slug: string;
  category: "tour" | "sea" | "safari" | "transfer";
  title: string;
  shortDesc: string;
  description: string;
  image: string;
  price: string;
  priceNote?: string;
  highlights: string[];
  program: string[];
  featured?: boolean;
}

export const tours: Tour[] = [
  {
    id: "luxor",
    slug: "luxor-tour",
    category: "tour",
    title: "Luxor Tour",
    shortDesc: "Explore the ancient temples and tombs of Luxor — the world's greatest open-air museum.",
    description: "A full-day guided excursion to Luxor including Valley of the Kings, Hatshepsut Temple, Colossi of Memnon, and Karnak Temple. Travel in comfort with licensed Egyptologist guides who speak your language.",
    image: "luxor-temple",
    price: "£100",
    priceNote: "Group (max 8 people with guide in guest language). Private tour: price on request.",
    highlights: ["Valley of the Kings", "Hatshepsut Temple", "Colossi of Memnon", "Karnak Temple", "Licensed Egyptologist guide", "Lunch included"],
    program: ["04:00 — Hotel pickup", "08:00 — Arrive in Luxor", "08:30 — Valley of the Kings", "10:30 — Hatshepsut Temple", "11:30 — Colossi of Memnon", "12:30 — Lunch at local restaurant", "14:00 — Karnak Temple", "16:00 — Return journey", "20:00 — Hotel drop-off"],
    featured: true,
  },
  {
    id: "dolphin-samadai",
    slug: "dolphin-house-samadai",
    category: "sea",
    title: "Dolphin House Samadai",
    shortDesc: "Swim with wild spinner dolphins at the famous Samadai reef — an unforgettable experience!",
    description: "Full-day boat trip to Samadai Dolphin House, one of the Red Sea's most famous dolphin habitats. Snorkel with wild spinner dolphins in crystal-clear water and enjoy two snorkeling stops on coral reefs.",
    image: "dolphins",
    price: "£60",
    highlights: ["Swim with wild dolphins", "Crystal-clear water", "Two snorkeling stops", "Lunch on board", "Snorkeling equipment included"],
    program: ["07:00 — Hotel pickup", "08:30 — Board the boat", "10:00 — Dolphin House Samadai", "12:00 — Lunch on board", "13:00 — Coral reef snorkeling", "15:00 — Return to port", "16:30 — Hotel drop-off"],
    featured: true,
  },
  {
    id: "dolphin-satayah",
    slug: "dolphin-house-satayah",
    category: "sea",
    title: "Dolphin House Satayah",
    shortDesc: "Visit the stunning Satayah reef to swim alongside pods of playful dolphins.",
    description: "A magical full-day boat trip to Satayah Dolphin House, a large horseshoe-shaped reef home to resident pods of spinner dolphins. One of the best dolphin experiences in the world.",
    image: "dolphins",
    price: "£65",
    highlights: ["Large dolphin pods", "Horseshoe reef", "Excellent snorkeling", "Lunch included", "Professional crew"],
    program: ["06:00 — Hotel pickup", "07:30 — Depart from port", "10:00 — Satayah Dolphin House", "12:00 — Lunch on board", "13:30 — Snorkeling at reef", "15:00 — Return journey", "17:30 — Hotel drop-off"],
  },
  {
    id: "marsa-mubarak",
    slug: "marsa-mubarak",
    category: "sea",
    title: "Marsa Mubarak",
    shortDesc: "Snorkel with sea turtles and the rare dugong at this incredible bay.",
    description: "Visit Marsa Mubarak, famous for its resident green sea turtles and the elusive dugong (sea cow). Snorkel in calm, shallow waters perfect for all levels.",
    image: "turtle-reef",
    price: "£40",
    priceNote: "Extra charge: £5 for hotels in south Marsa Alam",
    highlights: ["Sea turtles", "Chance to see dugong", "Calm shallow water", "Suitable for all levels", "Snorkeling equipment included"],
    program: ["08:00 — Hotel pickup", "09:00 — Arrive at Marsa Mubarak", "09:30 — Snorkeling session", "12:00 — Beach break & lunch", "13:30 — Second snorkeling session", "15:00 — Return to hotel"],
  },
  {
    id: "hamata",
    slug: "hamata-island",
    category: "sea",
    title: "Hamata Island",
    shortDesc: "Explore pristine islands with white sand beaches and untouched coral reefs.",
    description: "Full-day boat trip to the Hamata Islands — a paradise of white sand, crystal-clear water, and vibrant coral reefs. Far from the crowds, this is the Red Sea at its best.",
    image: "island-beach",
    price: "£60",
    highlights: ["Pristine white sand beaches", "Untouched coral reefs", "Crystal-clear water", "Lunch on board", "Island exploration"],
    program: ["06:30 — Hotel pickup", "08:00 — Depart from Hamata port", "09:30 — First island stop", "12:00 — Lunch on board", "13:00 — Second island & snorkeling", "15:30 — Return to port", "17:00 — Hotel drop-off"],
  },
  {
    id: "quad-safari",
    slug: "quad-safari",
    category: "safari",
    title: "Quad Safari",
    shortDesc: "Race through the Eastern Desert on a powerful quad bike at sunset.",
    description: "Thrilling quad bike safari through the Egyptian Eastern Desert. Ride through dramatic desert landscapes, visit a Bedouin village, enjoy traditional tea, and watch a stunning desert sunset.",
    image: "safari-desert",
    price: "£27",
    priceNote: "Single quad: £27 | Double quad: £42",
    highlights: ["Quad bike riding", "Desert sunset", "Bedouin village visit", "Traditional tea", "Stunning landscapes"],
    program: ["14:00 — Hotel pickup", "15:00 — Safety briefing & quad assignment", "15:30 — Desert ride begins", "16:30 — Bedouin village visit", "17:30 — Sunset viewing point", "18:00 — Return ride", "19:00 — Hotel drop-off"],
  },
  {
    id: "super-safari",
    slug: "super-safari",
    category: "safari",
    title: "Super Safari",
    shortDesc: "The ultimate desert experience — quad bike, camel ride, Bedouin dinner & stargazing.",
    description: "Our most popular safari! Combine quad biking, camel riding, a traditional Bedouin dinner under the stars, and an unforgettable desert sunset. The complete Eastern Desert experience.",
    image: "safari-desert",
    price: "£37",
    highlights: ["Quad biking", "Camel riding", "Bedouin dinner", "Stargazing", "Sunset in the desert", "Traditional entertainment"],
    program: ["14:00 — Hotel pickup", "15:00 — Quad bike ride", "16:00 — Camel riding", "17:00 — Sunset viewing", "17:30 — Bedouin village & dinner", "19:30 — Stargazing", "20:30 — Hotel drop-off"],
    featured: true,
  },
  {
    id: "private-safari",
    slug: "private-desert-safari",
    category: "safari",
    title: "Private Desert Safari",
    shortDesc: "Exclusive private desert safari tailored to your preferences.",
    description: "A fully customizable private desert safari experience. Choose your activities, timing, and route for the ultimate exclusive desert adventure.",
    image: "safari-desert",
    price: "Price on request",
    highlights: ["Fully customizable", "Private guide", "Exclusive experience", "Flexible timing", "Premium service"],
    program: ["Customized to your preferences — contact us for details"],
  },
  {
    id: "airport-transfer",
    slug: "airport-transfer",
    category: "transfer",
    title: "Airport Transfer",
    shortDesc: "Comfortable, reliable airport transfers to and from your hotel.",
    description: "Professional airport transfer service between Marsa Alam International Airport and your hotel. Modern, air-conditioned vehicles with experienced drivers.",
    image: "airport-transfer",
    price: "£25",
    priceNote: "One way: £25 | Round trip: £45",
    highlights: ["Air-conditioned vehicles", "Professional drivers", "24/7 service", "Meet & greet at airport", "All hotel areas covered"],
    program: ["Driver meets you at the airport with your name sign", "Assistance with luggage", "Comfortable ride to your hotel", "Available 24/7"],
  },
  {
    id: "snorkeling-reef",
    slug: "coral-reef-snorkeling",
    category: "sea",
    title: "Coral Reef Snorkeling",
    shortDesc: "Explore the vibrant coral reefs of the Red Sea with expert guides.",
    description: "Full-day snorkeling trip visiting the best coral reef sites near Marsa Alam. See colorful fish, vibrant corals, and maybe even a sea turtle!",
    image: "snorkeling",
    price: "£35",
    highlights: ["Vibrant coral reefs", "Tropical fish", "Professional guides", "Equipment included", "Lunch on board"],
    program: ["08:00 — Hotel pickup", "09:00 — Board boat", "09:30 — First reef stop", "12:00 — Lunch", "13:00 — Second reef stop", "15:00 — Return", "16:00 — Hotel drop-off"],
  },
];

export const getImageImport = (key: string) => key;

export const getToursByCategory = (cat: Tour["category"]) => tours.filter(t => t.category === cat);
export const getFeaturedTours = () => tours.filter(t => t.featured);
export const getTourBySlug = (slug: string) => tours.find(t => t.slug === slug);

export const reviews = [
  { name: "Sarah & Tom", country: "UK", rating: 5, text: "The Luxor tour was absolutely incredible! Our guide was so knowledgeable and made the ancient history come alive. Best day of our holiday!", type: "couple" },
  { name: "Familie Schmidt", country: "Germany", rating: 5, text: "Super Safari war das Highlight unseres Urlaubs! Die Kinder haben es geliebt. Sehr professionell und sicher.", type: "family" },
  { name: "Marco & Friends", country: "Italy", rating: 5, text: "Nuotare con i delfini a Samadai è stata un'esperienza magica. Organizzazione perfetta!", type: "group" },
  { name: "Anna Kowalska", country: "Poland", rating: 5, text: "Transfer z lotniska był bardzo komfortowy. Kierowca czekał na nas z tabliczką. Polecam!", type: "family" },
  { name: "The Johnsons", country: "USA", rating: 5, text: "Hamata Island was paradise! The snorkeling was world-class and the crew was so friendly. We'll definitely be back!", type: "family" },
  { name: "Lisa & David", country: "UK", rating: 5, text: "Swimming with sea turtles at Marsa Mubarak was a dream come true. Thank you Seashell Trips!", type: "couple" },
];

export const specialOffers = [
  { title: "Family Package", desc: "Book 3+ tours and get 15% off the total! Perfect for families exploring Marsa Alam.", discount: "15% OFF", valid: "Valid until end of season" },
  { title: "Early Bird Deal", desc: "Book any tour 7+ days in advance and save 10% automatically.", discount: "10% OFF", valid: "Book 7 days ahead" },
  { title: "Combo Safari + Sea", desc: "Book Super Safari + Dolphin House together for a special combo price!", discount: "SAVE £12", valid: "Limited availability" },
];
