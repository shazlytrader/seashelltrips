export interface FAQ {
  question: string;
  answer: string;
}

export interface Tour {
  id: string;
  slug: string;
  category: "tour" | "sea" | "safari" | "transfer";
  title: string;
  shortDesc: string;
  description: string;
  image: string;
  altText: string;
  price: string;
  priceNote?: string;
  highlights: string[];
  program: string[];
  featured?: boolean;
  faqs?: FAQ[];
  relatedSlugs?: string[];
}

export const tours: Tour[] = [
  {
    id: "luxor",
    slug: "luxor-tour",
    category: "tour",
    title: "Luxor Tour",
    shortDesc: "Explore the ancient temples and tombs of Luxor — the world's greatest open-air museum.",
    description: "A full-day guided excursion to Luxor from Marsa Alam including Valley of the Kings, Hatshepsut Temple, Colossi of Memnon, and Karnak Temple. Travel in comfort with licensed Egyptologist guides who speak your language.",
    image: "luxor-temple",
    altText: "Luxor Temple illuminated at sunset — Luxor tour from Marsa Alam, Egypt",
    price: "£100",
    priceNote: "Group (max 8 people with guide in guest language). Private tour: price on request.",
    highlights: ["Valley of the Kings", "Hatshepsut Temple", "Colossi of Memnon", "Karnak Temple", "Licensed Egyptologist guide", "Lunch included"],
    program: ["04:00 — Hotel pickup", "08:00 — Arrive in Luxor", "08:30 — Valley of the Kings", "10:30 — Hatshepsut Temple", "11:30 — Colossi of Memnon", "12:30 — Lunch at local restaurant", "14:00 — Karnak Temple", "16:00 — Return journey", "20:00 — Hotel drop-off"],
    featured: true,
    relatedSlugs: ["dolphin-house-samadai", "super-safari", "coral-reef-snorkeling"],
    faqs: [
      { question: "How long is the Luxor tour from Marsa Alam?", answer: "The full-day Luxor tour takes approximately 16 hours, departing at 04:00 and returning around 20:00. The drive is about 4 hours each way." },
      { question: "Is lunch included in the Luxor day trip?", answer: "Yes, a traditional Egyptian lunch at a local restaurant in Luxor is included in the tour price." },
      { question: "What languages do your Luxor guides speak?", answer: "Our licensed Egyptologist guides speak English, Italian, German, and Polish. We match the guide to your language." },
      { question: "Can I book a private Luxor tour?", answer: "Yes! Private Luxor tours with a dedicated vehicle (limousine, minivan, or SUV) are available on request. Contact us via WhatsApp for pricing." },
    ],
  },
  {
    id: "dolphin-samadai",
    slug: "dolphin-house-samadai",
    category: "sea",
    title: "Dolphin House Samadai",
    shortDesc: "Swim with wild spinner dolphins at the famous Samadai reef — an unforgettable experience!",
    description: "Full-day boat trip to Samadai Dolphin House, one of the Red Sea's most famous dolphin habitats. Snorkel with wild spinner dolphins in crystal-clear water and enjoy two snorkeling stops on coral reefs.",
    image: "dolphins",
    altText: "Wild spinner dolphins swimming in crystal-clear Red Sea water at Dolphin House Samadai, Marsa Alam",
    price: "£60",
    highlights: ["Swim with wild dolphins", "Crystal-clear water", "Two snorkeling stops", "Lunch on board", "Snorkeling equipment included"],
    program: ["07:00 — Hotel pickup", "08:30 — Board the boat", "10:00 — Dolphin House Samadai", "12:00 — Lunch on board", "13:00 — Coral reef snorkeling", "15:00 — Return to port", "16:30 — Hotel drop-off"],
    featured: true,
    relatedSlugs: ["dolphin-house-satayah", "marsa-mubarak", "hamata-island"],
    faqs: [
      { question: "Can you guarantee dolphin sightings at Samadai?", answer: "While we can't guarantee 100% sightings, Samadai Dolphin House has a very high success rate — dolphins are present on over 90% of visits year-round." },
      { question: "Is swimming with dolphins in Marsa Alam safe?", answer: "Absolutely! Samadai is a protected marine area with strict safety regulations. Our experienced crew ensures a safe and respectful encounter with the wild dolphins." },
      { question: "What should I bring for the dolphin tour?", answer: "Bring swimwear, sunscreen (reef-safe), a towel, and a waterproof camera. All snorkeling equipment is included in the price." },
      { question: "What is the best time to swim with dolphins in Marsa Alam?", answer: "Dolphins can be seen year-round at Samadai, but the best months are March to November when pods are largest and water conditions are ideal." },
    ],
  },
  {
    id: "dolphin-satayah",
    slug: "dolphin-house-satayah",
    category: "sea",
    title: "Dolphin House Satayah",
    shortDesc: "Visit the stunning Satayah reef to swim alongside pods of playful dolphins.",
    description: "A magical full-day boat trip to Satayah Dolphin House, a large horseshoe-shaped reef home to resident pods of spinner dolphins. One of the best dolphin experiences in the world.",
    image: "dolphins",
    altText: "Pod of spinner dolphins at Satayah reef near Marsa Alam, Red Sea Egypt",
    price: "£65",
    highlights: ["Large dolphin pods", "Horseshoe reef", "Excellent snorkeling", "Lunch included", "Professional crew"],
    program: ["06:00 — Hotel pickup", "07:30 — Depart from port", "10:00 — Satayah Dolphin House", "12:00 — Lunch on board", "13:30 — Snorkeling at reef", "15:00 — Return journey", "17:30 — Hotel drop-off"],
    relatedSlugs: ["dolphin-house-samadai", "hamata-island", "coral-reef-snorkeling"],
    faqs: [
      { question: "What is the difference between Samadai and Satayah Dolphin House?", answer: "Satayah is further south and features a larger horseshoe-shaped reef with bigger dolphin pods. Samadai is closer and more sheltered. Both offer amazing dolphin encounters." },
      { question: "How far is Satayah from Marsa Alam?", answer: "Satayah Dolphin House is approximately 2 hours by boat from the port, which is why we depart early at 06:00." },
    ],
  },
  {
    id: "marsa-mubarak",
    slug: "marsa-mubarak",
    category: "sea",
    title: "Marsa Mubarak",
    shortDesc: "Snorkel with sea turtles and the rare dugong at this incredible bay.",
    description: "Visit Marsa Mubarak, famous for its resident green sea turtles and the elusive dugong (sea cow). Snorkel in calm, shallow waters perfect for all levels. One of the best snorkeling spots in Marsa Alam.",
    image: "turtle-reef",
    altText: "Green sea turtle swimming over coral reef at Marsa Mubarak snorkeling spot, Marsa Alam",
    price: "£40",
    priceNote: "Extra charge: £5 for hotels in south Marsa Alam",
    highlights: ["Sea turtles", "Chance to see dugong", "Calm shallow water", "Suitable for all levels", "Snorkeling equipment included"],
    program: ["08:00 — Hotel pickup", "09:00 — Arrive at Marsa Mubarak", "09:30 — Snorkeling session", "12:00 — Beach break & lunch", "13:30 — Second snorkeling session", "15:00 — Return to hotel"],
    relatedSlugs: ["dolphin-house-samadai", "coral-reef-snorkeling", "hamata-island"],
    faqs: [
      { question: "Will I see turtles at Marsa Mubarak?", answer: "Green sea turtles are resident at Marsa Mubarak and are seen on almost every visit. The calm, shallow bay is their feeding ground." },
      { question: "What is a dugong and can I see one?", answer: "A dugong (sea cow) is a rare marine mammal related to manatees. Marsa Mubarak is one of the few places in the world where you can spot them, though sightings are less frequent than turtles." },
      { question: "Is Marsa Mubarak suitable for beginners?", answer: "Yes! The calm, shallow waters make Marsa Mubarak perfect for beginners and families with children." },
    ],
  },
  {
    id: "hamata",
    slug: "hamata-island",
    category: "sea",
    title: "Hamata Island",
    shortDesc: "Explore pristine islands with white sand beaches and untouched coral reefs.",
    description: "Full-day boat trip to the Hamata Islands — a paradise of white sand, crystal-clear water, and vibrant coral reefs. Far from the crowds, this is the Red Sea at its best. One of the top excursions from Marsa Alam.",
    image: "island-beach",
    altText: "Pristine white sand beach at Hamata Island with turquoise water, Marsa Alam excursion",
    price: "£60",
    highlights: ["Pristine white sand beaches", "Untouched coral reefs", "Crystal-clear water", "Lunch on board", "Island exploration"],
    program: ["06:30 — Hotel pickup", "08:00 — Depart from Hamata port", "09:30 — First island stop", "12:00 — Lunch on board", "13:00 — Second island & snorkeling", "15:30 — Return to port", "17:00 — Hotel drop-off"],
    relatedSlugs: ["dolphin-house-samadai", "marsa-mubarak", "coral-reef-snorkeling"],
    faqs: [
      { question: "How many islands do we visit at Hamata?", answer: "You'll visit 2 islands during the trip, with time for beach relaxation, swimming, and snorkeling at pristine coral reefs." },
      { question: "Is the Hamata Island trip suitable for children?", answer: "Yes! The calm, shallow waters around the islands are safe for children and the beaches are perfect for families." },
    ],
  },
  {
    id: "quad-safari",
    slug: "quad-safari",
    category: "safari",
    title: "Quad Safari",
    shortDesc: "Race through the Eastern Desert on a powerful quad bike at sunset.",
    description: "Thrilling quad bike safari through the Egyptian Eastern Desert. Ride through dramatic desert landscapes, visit a Bedouin village, enjoy traditional tea, and watch a stunning desert sunset. The best Marsa Alam safari experience.",
    image: "safari-desert",
    altText: "Quad bike riding through the Egyptian Eastern Desert at sunset near Marsa Alam",
    price: "£27",
    priceNote: "Single quad: £27 | Double quad: £42",
    highlights: ["Quad bike riding", "Desert sunset", "Bedouin village visit", "Traditional tea", "Stunning landscapes"],
    program: ["14:00 — Hotel pickup", "15:00 — Safety briefing & quad assignment", "15:30 — Desert ride begins", "16:30 — Bedouin village visit", "17:30 — Sunset viewing point", "18:00 — Return ride", "19:00 — Hotel drop-off"],
    relatedSlugs: ["super-safari", "private-desert-safari", "dolphin-house-samadai"],
    faqs: [
      { question: "Do I need driving experience for quad biking?", answer: "No prior experience is needed. Our team provides a full safety briefing and the quad bikes are easy to operate. We ride at a comfortable pace." },
      { question: "Can two people share a quad bike?", answer: "Yes! Double quads are available for £42 — perfect for couples or parent-child combinations." },
    ],
  },
  {
    id: "super-safari",
    slug: "super-safari",
    category: "safari",
    title: "Super Safari",
    shortDesc: "The ultimate desert experience — quad bike, camel ride, Bedouin dinner & stargazing.",
    description: "Our most popular safari! Combine quad biking, camel riding, a traditional Bedouin dinner under the stars, and an unforgettable desert sunset. The complete Eastern Desert experience and best Marsa Alam safari tour.",
    image: "safari-desert",
    altText: "Camel ride and quad bike desert safari with sunset in Marsa Alam, Egypt",
    price: "£37",
    highlights: ["Quad biking", "Camel riding", "Bedouin dinner", "Stargazing", "Sunset in the desert", "Traditional entertainment"],
    program: ["14:00 — Hotel pickup", "15:00 — Quad bike ride", "16:00 — Camel riding", "17:00 — Sunset viewing", "17:30 — Bedouin village & dinner", "19:30 — Stargazing", "20:30 — Hotel drop-off"],
    featured: true,
    relatedSlugs: ["quad-safari", "luxor-tour", "dolphin-house-samadai"],
    faqs: [
      { question: "What is included in the Super Safari?", answer: "The Super Safari includes quad biking, camel riding, a traditional Bedouin dinner, tea, stargazing, and hotel transfers. It's our most complete desert experience." },
      { question: "Is the Super Safari suitable for families?", answer: "Yes! The Super Safari is perfect for families. Children love the camel ride and the Bedouin experience. Minimum age is 6 years." },
      { question: "What should I wear for the desert safari?", answer: "Wear comfortable, closed-toe shoes, long pants, and bring a light jacket for the evening. Sunglasses and sunscreen are recommended." },
    ],
  },
  {
    id: "private-safari",
    slug: "private-desert-safari",
    category: "safari",
    title: "Private Desert Safari",
    shortDesc: "Exclusive private desert safari tailored to your preferences.",
    description: "A fully customizable private desert safari experience. Choose your activities, timing, and route for the ultimate exclusive desert adventure in Marsa Alam.",
    image: "safari-desert",
    altText: "Private luxury desert safari experience in the Eastern Desert near Marsa Alam",
    price: "Price on request",
    highlights: ["Fully customizable", "Private guide", "Exclusive experience", "Flexible timing", "Premium service"],
    program: ["Customized to your preferences — contact us for details"],
    relatedSlugs: ["super-safari", "quad-safari"],
  },
  {
    id: "airport-transfer",
    slug: "airport-transfer",
    category: "transfer",
    title: "Airport Transfer",
    shortDesc: "Comfortable, reliable airport transfers to and from your hotel.",
    description: "Professional airport transfer service between Marsa Alam International Airport and your hotel. Modern, air-conditioned vehicles with experienced drivers. Available 24/7 for all flights.",
    image: "airport-transfer",
    altText: "Modern air-conditioned vehicle for Marsa Alam airport transfer service",
    price: "£25",
    priceNote: "One way: £25 | Round trip: £45",
    highlights: ["Air-conditioned vehicles", "Professional drivers", "24/7 service", "Meet & greet at airport", "All hotel areas covered"],
    program: ["Driver meets you at the airport with your name sign", "Assistance with luggage", "Comfortable ride to your hotel", "Available 24/7"],
    faqs: [
      { question: "How do I book a Marsa Alam airport transfer?", answer: "Simply send us your flight details on WhatsApp and we'll arrange a driver to meet you at the airport with a name sign. Booking takes less than 2 minutes." },
      { question: "How long is the transfer from Marsa Alam airport to the hotel?", answer: "Most hotels are 15-60 minutes from the airport. We cover all hotel areas in Marsa Alam and Port Ghalib." },
    ],
  },
  {
    id: "snorkeling-reef",
    slug: "coral-reef-snorkeling",
    category: "sea",
    title: "Coral Reef Snorkeling",
    shortDesc: "Explore the vibrant coral reefs of the Red Sea with expert guides.",
    description: "Full-day snorkeling trip visiting the best coral reef sites near Marsa Alam. See colorful fish, vibrant corals, and maybe even a sea turtle! The best snorkeling in Marsa Alam.",
    image: "snorkeling",
    altText: "Colorful coral reef with tropical fish — best snorkeling in Marsa Alam, Red Sea",
    price: "£35",
    highlights: ["Vibrant coral reefs", "Tropical fish", "Professional guides", "Equipment included", "Lunch on board"],
    program: ["08:00 — Hotel pickup", "09:00 — Board boat", "09:30 — First reef stop", "12:00 — Lunch", "13:00 — Second reef stop", "15:00 — Return", "16:00 — Hotel drop-off"],
    relatedSlugs: ["marsa-mubarak", "dolphin-house-samadai", "hamata-island"],
    faqs: [
      { question: "Where is the best snorkeling in Marsa Alam?", answer: "Marsa Alam has some of the world's best snorkeling. Our top spots include the coral reefs near Port Ghalib, Marsa Mubarak for turtles, and Elphinstone Reef." },
      { question: "Do I need to bring my own snorkeling equipment?", answer: "No! All snorkeling equipment (mask, snorkel, fins) is included in the tour price." },
    ],
  },
];

export const getImageImport = (key: string) => key;

export const getToursByCategory = (cat: Tour["category"]) => tours.filter(t => t.category === cat);
export const getFeaturedTours = () => tours.filter(t => t.featured);
export const getTourBySlug = (slug: string) => tours.find(t => t.slug === slug);
export const getRelatedTours = (tour: Tour) => (tour.relatedSlugs || []).map(s => tours.find(t => t.slug === s)).filter(Boolean) as Tour[];

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
