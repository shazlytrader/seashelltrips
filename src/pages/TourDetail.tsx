import { useParams, Link } from "react-router-dom";
import { MessageCircle, ArrowLeft, Check, Camera } from "lucide-react";
import { useI18n, getWhatsAppLink } from "@/lib/i18n";
import { getTourBySlug, getRelatedTours } from "@/lib/tours-data";
import { tourImages } from "@/lib/tour-images";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import RelatedTours from "@/components/RelatedTours";

const TourDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useI18n();
  const tour = getTourBySlug(slug || "");

  if (!tour) {
    return (
      <div className="pt-16 section-padding text-center">
        <h1 className="font-display text-3xl font-bold text-foreground mb-4">Tour not found</h1>
        <Link to="/tours" className="text-primary hover:underline">← Back to Tours</Link>
      </div>
    );
  }

  const image = tourImages[tour.image];
  const related = getRelatedTours(tour);

  const jsonLdSchemas: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": "TouristTrip",
      "name": tour.title,
      "description": tour.description,
      "touristType": "Leisure",
      "image": image,
      "offers": tour.price.startsWith("Price") ? undefined : {
        "@type": "Offer",
        "price": tour.price.replace("£", ""),
        "priceCurrency": "GBP",
        "availability": "https://schema.org/InStock",
      },
      "provider": {
        "@type": "TravelAgency",
        "name": "Seashell Trips",
        "url": "https://seashelltrips.com",
        "telephone": "+201017014296",
      },
      "itinerary": {
        "@type": "ItemList",
        "itemListElement": tour.program.map((step, i) => ({
          "@type": "ListItem",
          "position": i + 1,
          "name": step,
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://seashelltrips.com" },
        { "@type": "ListItem", "position": 2, "name": "Tours", "item": "https://seashelltrips.com/tours" },
        { "@type": "ListItem", "position": 3, "name": tour.title, "item": `https://seashelltrips.com/tour/${tour.slug}` },
      ],
    },
  ];

  if (tour.faqs && tour.faqs.length > 0) {
    jsonLdSchemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": tour.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer,
        },
      })),
    });
  }

  return (
    <div className="pt-16">
      <SEO
        title={`${tour.title} — Marsa Alam Excursion from ${tour.price} | Seashell Trips`}
        description={`${tour.description.slice(0, 150)}… Book now via WhatsApp!`}
        canonical={`https://seashelltrips.com/tour/${tour.slug}`}
        jsonLd={jsonLdSchemas}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="container-tour pt-4 pb-0 text-sm text-muted-foreground">
        <ol className="flex items-center gap-1" itemScope itemType="https://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link to="/" itemProp="item" className="hover:text-primary"><span itemProp="name">Home</span></Link>
            <meta itemProp="position" content="1" />
          </li>
          <li className="mx-1">/</li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link to="/tours" itemProp="item" className="hover:text-primary"><span itemProp="name">Tours</span></Link>
            <meta itemProp="position" content="2" />
          </li>
          <li className="mx-1">/</li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name" className="text-foreground font-medium">{tour.title}</span>
            <meta itemProp="position" content="3" />
          </li>
        </ol>
      </nav>

      {/* Hero */}
      <div className="relative h-[50vh] min-h-[400px]">
        <img src={image} alt={tour.altText} className="w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container-tour">
            <Link to="/tours" className="inline-flex items-center gap-1 text-primary-foreground/80 hover:text-primary-foreground mb-4 text-sm">
              <ArrowLeft className="h-4 w-4" /> Back to Tours
            </Link>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-2">{tour.title}</h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl">{tour.shortDesc}</p>
          </div>
        </div>
      </div>

      <div className="container-tour section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <p className="text-foreground/80 text-lg leading-relaxed">{tour.description}</p>
            </div>

            {/* Highlights */}
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" /> {t("highlights")}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {tour.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-foreground/80">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    {h}
                  </div>
                ))}
              </div>
            </div>

            {/* Program */}
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">{t("tour_program")}</h2>
              <div className="space-y-3">
                {tour.program.map((step, i) => (
                  <div key={i} className="flex items-start gap-3 bg-secondary/50 rounded-lg p-4">
                    <div className="h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <span className="text-foreground/80">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery */}
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Camera className="h-5 w-5 text-primary" /> {t("gallery")}
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <img src={image} alt={`${tour.title} — Marsa Alam excursion photo 1`} className="rounded-xl w-full h-48 object-cover" loading="lazy" />
                <img src={image} alt={`${tour.title} — Marsa Alam excursion photo 2`} className="rounded-xl w-full h-48 object-cover" loading="lazy" />
              </div>
            </div>

            {/* FAQ */}
            {tour.faqs && tour.faqs.length > 0 && (
              <FAQSection faqs={tour.faqs} tourTitle={tour.title} />
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-card rounded-xl shadow-elevated border border-border p-6 space-y-6">
              <div>
                <p className="text-sm text-muted-foreground mb-1">{t("from")}</p>
                <p className="font-display text-4xl font-bold text-foreground">
                  {tour.price.startsWith("Price") ? t("price_request") : tour.price}
                </p>
                {!tour.price.startsWith("Price") && (
                  <p className="text-sm text-muted-foreground">{t("per_person")}</p>
                )}
              </div>
              {tour.priceNote && (
                <p className="text-sm text-muted-foreground bg-secondary/50 rounded-lg p-3">{tour.priceNote}</p>
              )}
              <a
                href={getWhatsAppLink(tour.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20BD5A] text-primary-foreground px-6 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105"
              >
                <MessageCircle className="h-5 w-5" />
                {t("book_whatsapp")}
              </a>
              <p className="text-xs text-center text-muted-foreground">
                Fast response — typically within 30 minutes!
              </p>

              {/* Internal links */}
              <div className="border-t border-border pt-4">
                <h3 className="text-sm font-semibold text-foreground mb-2">Explore More</h3>
                <div className="flex flex-col gap-1.5 text-sm">
                  <Link to="/sea-trips" className="text-primary hover:underline">🐬 Sea Trips & Dolphins</Link>
                  <Link to="/safari" className="text-primary hover:underline">🏜️ Desert Safari Tours</Link>
                  <Link to="/blog/best-things-to-do-marsa-alam" className="text-primary hover:underline">📖 Things To Do in Marsa Alam</Link>
                  <Link to="/offers" className="text-primary hover:underline">🎉 Special Offers & Deals</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Tours */}
      <RelatedTours tours={related} />
    </div>
  );
};

export default TourDetail;
