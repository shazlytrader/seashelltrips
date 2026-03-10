import { useI18n } from "@/lib/i18n";
import { useTours } from "@/hooks/useContent";
import TourCard from "@/components/TourCard";
import SEO from "@/components/SEO";

const Tours = () => {
  const { t } = useI18n();
  const { data: tours = [], isLoading } = useTours();

  return (
    <div className="pt-16">
      <SEO
        title="All Marsa Alam Tours & Excursions 2025 — Dolphins, Luxor, Safari | Seashell Trips"
        description="Browse all Marsa Alam excursions: Luxor day trips, dolphin swimming, desert safari, island hopping & snorkeling. Best prices from £25. Book via WhatsApp!"
        canonical="https://seashelltrips.com/tours"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Marsa Alam Tours & Excursions",
          "numberOfItems": tours.length,
          "itemListElement": tours.map((tour, i) => ({
            "@type": "ListItem",
            "position": i + 1,
            "url": `https://seashelltrips.com/tour/${tour.slug}`,
            "name": tour.title
          }))
        }}
      />
      <section className="section-padding">
        <div className="container-tour">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-center text-foreground mb-4">
            {t("nav_tours")}
          </h1>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Explore all our tours and excursions from Marsa Alam. From ancient temples to underwater adventures.
          </p>
          {isLoading ? (
            <p className="text-center text-muted-foreground">Loading tours...</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tours.map(tour => <TourCard key={tour.id} tour={tour} />)}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Tours;
