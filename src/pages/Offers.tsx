import { Gift, MessageCircle } from "lucide-react";
import { useI18n, getWhatsAppLink } from "@/lib/i18n";
import SEO from "@/components/SEO";
import { specialOffers } from "@/lib/tours-data";

const Offers = () => {
  const { t } = useI18n();

  return (
    <div className="pt-16">
      <SEO
        title="Special Offers & Discounts — Marsa Alam Tours | Seashell Trips"
        description="Save on Marsa Alam excursions! Family packages 15% off, early bird 10% discount, combo deals. Limited-time offers on dolphin tours & safari."
        canonical="https://seashelltrips.com/offers"
      />
      <section className="section-padding">
        <div className="container-tour">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-center text-foreground mb-4">
            {t("offers_title")}
          </h1>
          <p className="text-center text-muted-foreground mb-12">Save more on your Marsa Alam adventure!</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {specialOffers.map((o, i) => (
              <div key={i} className="relative bg-card rounded-xl p-8 shadow-card border border-border overflow-hidden">
                <div className="absolute top-0 right-0 bg-accent text-accent-foreground px-4 py-2 rounded-bl-xl font-bold">{o.discount}</div>
                <Gift className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-display text-xl font-bold text-foreground mb-2">{o.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{o.desc}</p>
                <p className="text-xs text-accent font-semibold mb-4">{o.valid}</p>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-primary-foreground px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  Claim Offer
                </a>
              </div>
            ))}
          </div>

          {/* Seasonal Banner */}
          <div className="gradient-ocean text-primary-foreground rounded-2xl p-8 md:p-12 text-center">
            <h2 className="font-display text-3xl font-bold mb-4">🎉 {t("discount_banner")} 🎉</h2>
            <p className="text-primary-foreground/80 mb-6">Book any excursion now and save! Limited time only.</p>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary-foreground text-ocean-deep px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105"
            >
              <MessageCircle className="h-5 w-5" />
              {t("book_now")}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offers;
