import { Link } from "react-router-dom";
import { MessageCircle, ArrowRight } from "lucide-react";
import { getWhatsAppLink } from "@/lib/i18n";
import heroImage from "@/assets/hero-redsea.jpg";
import dolphinsImage from "@/assets/dolphins.jpg";
import snorkelingImage from "@/assets/snorkeling.jpg";
import safariImage from "@/assets/safari-desert.jpg";

const blogPosts = [
  {
    slug: "best-things-to-do-marsa-alam",
    title: "Best Things To Do in Marsa Alam",
    excerpt: "From swimming with dolphins to exploring ancient temples, discover the top activities that make Marsa Alam one of Egypt's best-kept secrets.",
    image: heroImage,
    content: [
      "Marsa Alam is a paradise for nature lovers and adventure seekers. Located on the western shore of the Red Sea, this stunning destination offers some of the world's best snorkeling, diving, and desert adventures.",
      "1. Swim with Wild Dolphins — Visit Dolphin House Samadai or Satayah for an unforgettable encounter with spinner dolphins in crystal-clear waters.",
      "2. Snorkel at Marsa Mubarak — This beautiful bay is home to sea turtles and the rare dugong. The calm, shallow waters make it perfect for all skill levels.",
      "3. Explore Luxor — Take a day trip to the ancient city of Luxor and visit the Valley of the Kings, Karnak Temple, and more.",
      "4. Desert Safari — Experience the Eastern Desert on a quad bike or camel, visit a Bedouin village, and watch a spectacular desert sunset.",
      "5. Visit Hamata Islands — These pristine islands offer white sand beaches and untouched coral reefs far from the crowds.",
    ],
  },
  {
    slug: "marsa-alam-travel-guide",
    title: "Marsa Alam Travel Guide 2025",
    excerpt: "Everything you need to know before visiting Marsa Alam — best time to visit, what to pack, local tips, and more.",
    image: snorkelingImage,
    content: [
      "Planning a trip to Marsa Alam? This comprehensive guide covers everything from the best time to visit to essential packing tips.",
      "Best Time to Visit: October to April offers the most comfortable temperatures. The water is warm year-round, making snorkeling and diving possible any time.",
      "Getting There: Fly into Marsa Alam International Airport (RMF). We offer convenient airport transfers starting from just £25.",
      "What to Pack: Sunscreen, reef-safe sunscreen, comfortable swimwear, a hat, and light clothing. Snorkeling equipment is provided on our boat trips.",
      "Currency: Egyptian Pound (EGP). Most tourist areas accept cards, but carry some cash for local markets.",
      "Safety: Marsa Alam is very safe for tourists. Our team ensures all activities follow strict safety protocols.",
    ],
  },
  {
    slug: "swim-with-dolphins-marsa-alam",
    title: "Swim With Dolphins in Marsa Alam",
    excerpt: "Everything you need to know about swimming with wild dolphins at Dolphin House — the highlight of any Red Sea holiday.",
    image: dolphinsImage,
    content: [
      "Swimming with wild dolphins is one of the most magical experiences you can have in Marsa Alam. The Red Sea is home to pods of spinner dolphins that visit two main reef areas.",
      "Dolphin House Samadai: Located about 14km south of Marsa Alam, this reef is a protected marine area where dolphins come to rest and play. Our trips include snorkeling with dolphins and visiting nearby coral reefs. Price: £60 per person.",
      "Dolphin House Satayah: A stunning horseshoe-shaped reef further south, home to larger pods of dolphins. This longer trip offers an incredible encounter with these playful creatures. Price: £65 per person.",
      "Tips for Swimming with Dolphins: Stay calm and quiet, don't chase them, use reef-safe sunscreen, and let the dolphins come to you. Our experienced guides will ensure a respectful and amazing encounter.",
      "Best Time: Dolphins can be seen year-round, but sightings are most frequent from March to November.",
    ],
  },
  {
    slug: "top-excursions-marsa-alam",
    title: "Top Excursions From Marsa Alam",
    excerpt: "From the temples of Luxor to desert safaris, these are the must-do excursions during your Marsa Alam holiday.",
    image: safariImage,
    content: [
      "Marsa Alam is the perfect base for exploring some of Egypt's greatest attractions. Here are our top excursions:",
      "Luxor Day Trip (£100): Visit the Valley of the Kings, Hatshepsut Temple, Colossi of Memnon, and Karnak Temple with a licensed Egyptologist guide.",
      "Super Safari (£37): Our most popular safari! Quad biking, camel riding, Bedouin dinner, and stargazing — the ultimate desert experience.",
      "Dolphin House Samadai (£60): Swim with wild spinner dolphins in crystal-clear water.",
      "Hamata Island (£60): Explore pristine white sand islands and untouched coral reefs.",
      "Marsa Mubarak (£40): Snorkel with sea turtles and the rare dugong in this beautiful bay.",
      "All our excursions include hotel pickup, professional guides, and equipment. Book via WhatsApp for instant confirmation!",
    ],
  },
];

const Blog = () => {
  return (
    <div className="pt-16">
      <section className="section-padding">
        <div className="container-tour">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-center text-foreground mb-4">
            Marsa Alam Travel Blog
          </h1>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Tips, guides, and inspiration for your Red Sea adventure
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map(post => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group bg-card rounded-xl overflow-hidden shadow-card border border-border hover:shadow-elevated transition-all hover:-translate-y-1"
              >
                <div className="h-56 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-6">
                  <h2 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{post.title}</h2>
                  <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold">
                    Read More <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
export { blogPosts };
