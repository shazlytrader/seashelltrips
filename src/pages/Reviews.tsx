import { useI18n } from "@/lib/i18n";
import { useReviews } from "@/hooks/useContent";
import ReviewCard from "@/components/ReviewCard";
import SEO from "@/components/SEO";

const Reviews = () => {
  const { t } = useI18n();
  const { data: reviews = [], isLoading } = useReviews();

  const avgRating = reviews.length > 0 ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length : 5;

  return (
    <div className="pt-16">
      <SEO
        title="Customer Reviews — Marsa Alam Tours & Excursions | Seashell Trips"
        description="Read real 5-star reviews from European tourists who booked Marsa Alam excursions with Seashell Trips."
        canonical="https://seashelltrips.com/reviews"
        jsonLd={[{
          "@context": "https://schema.org",
          "@type": "TravelAgency",
          "name": "Seashell Trips",
          "url": "https://seashelltrips.com",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": avgRating.toFixed(1),
            "reviewCount": reviews.length,
            "bestRating": "5",
            "worstRating": "1",
          },
          "review": reviews.map(r => ({
            "@type": "Review",
            "author": { "@type": "Person", "name": r.name },
            "reviewRating": { "@type": "Rating", "ratingValue": r.rating, "bestRating": 5 },
            "reviewBody": r.text,
          })),
        }]}
      />
      <section className="section-padding">
        <div className="container-tour">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-center text-foreground mb-4">{t("reviews_title")}</h1>
          <p className="text-center text-muted-foreground mb-2">Real reviews from tourists across Europe</p>
          <p className="text-center text-sm text-muted-foreground mb-12">
            ⭐ {avgRating.toFixed(1)}/5 average rating from {reviews.length} verified guests
          </p>
          {isLoading ? (
            <p className="text-center text-muted-foreground">Loading...</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((r) => <ReviewCard key={r.id} {...r} />)}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Reviews;
