import { Link } from "react-router-dom";
import { MessageCircle, BookOpen, Star, Gift, Waves, Mountain, Plane } from "lucide-react";
import { useI18n, getWhatsAppLink, getEbookWhatsAppLink } from "@/lib/i18n";
import { getFeaturedTours, reviews, specialOffers } from "@/lib/tours-data";
import { tourImages } from "@/lib/tour-images";
import TourCard from "@/components/TourCard";
import ReviewCard from "@/components/ReviewCard";
import SEO from "@/components/SEO";
import heroImage from "@/assets/hero-redsea.jpg";

const Index = () => {
  const { t } = useI18n();
  const featured = getFeaturedTours();

  return (
    <div>
      <SEO
        title="Seashell Trips — Best Marsa Alam Excursions, Dolphin Tours & Safari | Book Now"
        description="Book the best Marsa Alam excursions: swim with dolphins, Luxor day trips, desert safari, snorkeling & airport transfers. Trusted local tour operator in Egypt's Red Sea. 10% discount!"
        canonical="https://seashelltrips.com"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "TravelAgency",
          "name": "Seashell Trips",
          "url": "https://seashelltrips.com",
          "telephone": "+201017014296",
          "email": "seashelltrips@gmail.com",
          "address": { "@type": "PostalAddress", "addressLocality": "Marsa Alam", "addressCountry": "EG" },
          "description": "Professional tourism company in Marsa Alam offering dolphin tours, Luxor excursions, desert safari, sea trips and airport transfers.",
          "priceRange": "£25 - £100",
          "areaServed": { "@type": "Place", "name": "Marsa Alam, Red Sea, Egypt" },
          "sameAs": ["https://wa.me/201017014296"]
        }}
      />
      {/* Discount Banner */}
      <div className="bg-accent text-accent-foreground text-center py-2.5 text-sm font-semibold mt-16">
        {t("discount_banner")}
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Red Sea coastline and coral reef near Marsa Alam, Egypt — best excursions and tours" className="w-full h-full object-cover" />
          <div className="absolute inset-0 gradient-hero" />
        </div>
        <div className="relative z-10 container-tour text-center text-primary-foreground">
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
            🌴 {t("hero_title")} 🌴
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-primary-foreground/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            ✨ {t("hero_subtitle")} ✨
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-elevated"
            >
              <MessageCircle className="h-5 w-5" />
              {t("book_now")}
            </a>
            <a
              href={getEbookWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary-foreground/20 backdrop-blur-sm hover:bg-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg transition-all border border-primary-foreground/30"
            >
              <BookOpen className="h-5 w-5" />
              {t("get_ebook")}
            </a>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-secondary/50">
        <div className="container-tour">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Waves, label: t("nav_sea"), to: "/sea-trips", color: "text-primary" },
              { icon: Mountain, label: t("nav_safari"), to: "/safari", color: "text-accent" },
              { icon: Star, label: t("nav_tours"), to: "/tours", color: "text-coral" },
              { icon: Plane, label: t("nav_transfers"), to: "/transfers", color: "text-seafoam" },
            ].map(c => (
              <Link
                key={c.to}
                to={c.to}
                className="flex flex-col items-center gap-3 p-6 bg-card rounded-xl shadow-card hover:shadow-elevated transition-all hover:-translate-y-1 border border-border"
              >
                <c.icon className={`h-8 w-8 ${c.color}`} />
                <span className="font-display text-lg font-semibold text-foreground">{c.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Tours */}
      <section className="section-padding">
        <div className="container-tour">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
            {t("popular_tours")}
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Our most loved experiences in Marsa Alam — hand-picked for unforgettable memories.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map(tour => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/tours"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
            >
              View All Marsa Alam Tours →
            </Link>
          </div>

          {/* Internal cross-links for SEO */}
          <div className="mt-8 text-center text-sm text-muted-foreground space-x-4">
            <Link to="/sea-trips" className="text-primary hover:underline">🐬 Dolphin Tours</Link>
            <Link to="/safari" className="text-primary hover:underline">🏜️ Safari Adventures</Link>
            <Link to="/blog/swim-with-dolphins-marsa-alam" className="text-primary hover:underline">📖 Dolphin Guide</Link>
            <Link to="/blog/marsa-alam-travel-guide" className="text-primary hover:underline">📖 Travel Guide</Link>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section-padding bg-secondary/50">
        <div className="container-tour">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            {t("reviews_title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.slice(0, 6).map((r, i) => (
              <ReviewCard key={i} {...r} />
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="section-padding">
        <div className="container-tour">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            {t("offers_title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {specialOffers.map((o, i) => (
              <div key={i} className="relative bg-card rounded-xl p-6 shadow-card border border-border overflow-hidden group hover:shadow-elevated transition-shadow">
                <div className="absolute top-0 right-0 bg-accent text-accent-foreground px-4 py-2 rounded-bl-xl font-bold text-sm">
                  {o.discount}
                </div>
                <Gift className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-display text-xl font-bold text-foreground mb-2">{o.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">{o.desc}</p>
                <p className="text-xs text-accent font-semibold">{o.valid}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Guide */}
      <section className="section-padding gradient-ocean text-primary-foreground">
        <div className="container-tour text-center">
          <BookOpen className="h-16 w-16 mx-auto mb-6 opacity-80" />
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">{t("guide_title")}</h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">{t("guide_subtitle")}</p>
          <a
            href={getEbookWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary-foreground text-ocean-deep px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105"
          >
            <MessageCircle className="h-5 w-5" />
            {t("send_guide")}
          </a>
        </div>
      </section>
    </div>
  );
};

export default Index;
