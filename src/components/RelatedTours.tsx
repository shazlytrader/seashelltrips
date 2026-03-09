import type { Tour } from "@/lib/tours-data";
import TourCard from "@/components/TourCard";

interface RelatedToursProps {
  tours: Tour[];
}

const RelatedTours = ({ tours }: RelatedToursProps) => {
  if (tours.length === 0) return null;

  return (
    <section className="section-padding bg-secondary/30" aria-label="Related tours">
      <div className="container-tour">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
          You Might Also Like
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map(tour => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedTours;
