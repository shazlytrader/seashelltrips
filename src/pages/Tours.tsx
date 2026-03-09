import { useI18n } from "@/lib/i18n";
import { tours } from "@/lib/tours-data";
import TourCard from "@/components/TourCard";

const Tours = () => {
  const { t } = useI18n();

  return (
    <div className="pt-16">
      <section className="section-padding">
        <div className="container-tour">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-center text-foreground mb-4">
            {t("nav_tours")}
          </h1>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Explore all our tours and excursions from Marsa Alam. From ancient temples to underwater adventures.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map(tour => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tours;
