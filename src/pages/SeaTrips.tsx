import { useI18n } from "@/lib/i18n";
import { getToursByCategory } from "@/lib/tours-data";
import TourCard from "@/components/TourCard";
import SEO from "@/components/SEO";
import { Waves } from "lucide-react";

const SeaTrips = () => {
  const { t } = useI18n();
  const seaTours = getToursByCategory("sea");

  return (
    <div className="pt-16">
      <SEO
        title="Marsa Alam Sea Trips — Swim With Dolphins, Snorkeling & Island Tours | Seashell Trips"
        description="Book Marsa Alam sea trips: Dolphin House Samadai & Satayah, Marsa Mubarak turtles, Hamata Island & coral reef snorkeling. Equipment included. From £35!"
        canonical="https://seashelltrips.com/sea-trips"
      <section className="section-padding">
        <div className="container-tour">
          <div className="text-center mb-12">
            <Waves className="h-12 w-12 text-primary mx-auto mb-4" />
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">{t("nav_sea")}</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore the incredible Red Sea with our boat trips and snorkeling excursions. Swim with dolphins, sea turtles, and discover pristine coral reefs.
            </p>
            <div className="mt-6 bg-primary/10 text-primary rounded-xl px-6 py-3 inline-block text-sm font-semibold">
              🤿 {t("snorkel_note")}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {seaTours.map(tour => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SeaTrips;
