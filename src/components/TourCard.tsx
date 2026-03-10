import { Link } from "react-router-dom";
import { MessageCircle, Star } from "lucide-react";
import { useI18n, getWhatsAppLink } from "@/lib/i18n";
import { tourImages } from "@/lib/tour-images";

interface TourCardProps {
  tour: {
    id?: string;
    slug: string;
    title: string;
    short_desc?: string;
    shortDesc?: string;
    description?: string;
    image: string;
    alt_text?: string;
    altText?: string;
    price: string;
    price_note?: string;
    priceNote?: string;
    featured?: boolean;
  };
}

const TourCard = ({ tour }: TourCardProps) => {
  const { t } = useI18n();
  const image = tourImages[tour.image] || tour.image;
  const shortDesc = tour.short_desc || tour.shortDesc || "";
  const altText = tour.alt_text || tour.altText || tour.title;
  const priceNote = tour.price_note || tour.priceNote;

  return (
    <article className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border border-border">
      <Link to={`/tour/${tour.slug}`} className="block">
        <div className="relative h-56 overflow-hidden">
          <img
            src={image}
            alt={altText}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
            width="400"
            height="224"
          />
          {tour.featured && (
            <div className="absolute top-3 left-3 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
              <Star className="h-3 w-3" /> Popular
            </div>
          )}
          <div className="absolute bottom-3 right-3 bg-card/90 backdrop-blur-sm text-foreground px-3 py-1 rounded-lg font-bold text-lg">
            {tour.price.startsWith("Price") ? t("price_request") : tour.price}
          </div>
        </div>
      </Link>

      <div className="p-5">
        <Link to={`/tour/${tour.slug}`}>
          <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
            {tour.title}
          </h3>
        </Link>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{shortDesc}</p>
        {priceNote && (
          <p className="text-xs text-muted-foreground mb-3">{priceNote}</p>
        )}

        <div className="flex gap-2">
          <Link
            to={`/tour/${tour.slug}`}
            className="flex-1 text-center px-4 py-2.5 rounded-lg bg-primary/10 text-primary font-semibold text-sm hover:bg-primary/20 transition-colors"
          >
            Details
          </Link>
          <a
            href={getWhatsAppLink(tour.title)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#25D366] text-primary-foreground font-semibold text-sm hover:bg-[#20BD5A] transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            {t("book_now")}
          </a>
        </div>
      </div>
    </article>
  );
};

export default TourCard;
