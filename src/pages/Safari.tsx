import { useI18n } from "@/lib/i18n";
import { getToursByCategory } from "@/lib/tours-data";
import TourCard from "@/components/TourCard";
import SEO from "@/components/SEO";
import { Mountain } from "lucide-react";
import safariImage from "@/assets/safari-desert.jpg";

const Safari = () => {
  const { t } = useI18n();
  const safariTours = getToursByCategory("safari");

  return (
    <div className="pt-16">
      {/* Hero */}
      <div className="relative h-[40vh] min-h-[300px]">
        <img src={safariImage} alt="Desert Safari" className="w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <Mountain className="h-12 w-12 text-primary-foreground mx-auto mb-4" />
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">{t("nav_safari")}</h1>
            <p className="text-primary-foreground/80 mt-2 text-lg">Adventure awaits in the Eastern Desert</p>
          </div>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-tour">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {safariTours.map(tour => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Safari;
