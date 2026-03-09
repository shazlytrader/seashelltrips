import { MessageCircle, Plane, Check } from "lucide-react";
import { useI18n, getWhatsAppLink } from "@/lib/i18n";
import SEO from "@/components/SEO";
import transferImage from "@/assets/airport-transfer.jpg";

const Transfers = () => {
  const { t } = useI18n();

  return (
    <div className="pt-16">
      <SEO
        title="Marsa Alam Airport Transfer — Reliable Hotel Pickup from £25 | Seashell Trips"
        description="Book Marsa Alam airport transfers: one way £25, round trip £45. Air-conditioned vehicles, 24/7 service, meet & greet. All hotels covered!"
        canonical="https://seashelltrips.com/transfers"
      />
      <div className="relative h-[40vh] min-h-[300px]">
        <img src={transferImage} alt="Airport Transfer" className="w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <Plane className="h-12 w-12 text-primary-foreground mx-auto mb-4" />
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">{t("nav_transfers")}</h1>
          </div>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-tour max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card rounded-xl p-8 shadow-card border border-border text-center">
              <p className="text-sm text-muted-foreground mb-2">{t("one_way")}</p>
              <p className="font-display text-5xl font-bold text-foreground mb-2">£25</p>
              <p className="text-sm text-muted-foreground">Airport ↔ Hotel</p>
            </div>
            <div className="bg-primary rounded-xl p-8 shadow-elevated text-center text-primary-foreground">
              <p className="text-sm text-primary-foreground/80 mb-2">{t("round_trip")}</p>
              <p className="font-display text-5xl font-bold mb-2">£45</p>
              <p className="text-sm text-primary-foreground/80">Best value — Save £5!</p>
            </div>
          </div>

          <div className="bg-card rounded-xl p-8 shadow-card border border-border mb-8">
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">What's Included</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["Air-conditioned vehicles", "Professional drivers", "24/7 service", "Meet & greet at airport", "All hotel areas covered", "Luggage assistance"].map(item => (
                <div key={item} className="flex items-center gap-2 text-foreground/80">
                  <Check className="h-4 w-4 text-primary shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <a
              href={getWhatsAppLink("Airport Transfer")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105"
            >
              <MessageCircle className="h-5 w-5" />
              {t("book_whatsapp")}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Transfers;
