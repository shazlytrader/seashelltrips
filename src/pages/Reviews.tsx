import { useI18n } from "@/lib/i18n";
import { reviews } from "@/lib/tours-data";
import ReviewCard from "@/components/ReviewCard";
import SEO from "@/components/SEO";

const Reviews = () => {
  const { t } = useI18n();

  return (
    <div className="pt-16">
      <SEO
        title="Customer Reviews — Marsa Alam Tours | Seashell Trips"
        description="Read real reviews from tourists who booked Marsa Alam excursions with Seashell Trips. 5-star rated dolphin tours, Luxor trips & desert safari."
        canonical="https://seashelltrips.com/reviews"
      />
      <section className="section-padding">
        <div className="container-tour">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-center text-foreground mb-4">
            {t("reviews_title")}
          </h1>
          <p className="text-center text-muted-foreground mb-12">Real reviews from real travelers</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <ReviewCard key={i} {...r} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
