import { BookOpen, MessageCircle, Check } from "lucide-react";
import { useI18n, getEbookWhatsAppLink } from "@/lib/i18n";

const Ebook = () => {
  const { t } = useI18n();

  return (
    <div className="pt-16">
      <section className="section-padding">
        <div className="container-tour max-w-3xl text-center">
          <BookOpen className="h-16 w-16 text-primary mx-auto mb-6" />
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">{t("guide_title")}</h1>
          <p className="text-muted-foreground text-lg mb-8">{t("guide_subtitle")}</p>

          <div className="bg-card rounded-xl p-8 shadow-elevated border border-border mb-8 text-left">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">What's Inside</h2>
            <div className="space-y-3">
              {[
                "Best beaches and snorkeling spots",
                "Local restaurant recommendations",
                "Money-saving tips",
                "Cultural etiquette guide",
                "Packing checklist",
                "Transportation guide",
                "Must-see attractions",
                "Safety tips & emergency contacts",
              ].map(item => (
                <div key={item} className="flex items-center gap-3 text-foreground/80">
                  <Check className="h-4 w-4 text-primary shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <a
            href={getEbookWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105"
          >
            <MessageCircle className="h-5 w-5" />
            {t("send_guide")}
          </a>
          <p className="text-sm text-muted-foreground mt-4">100% free — delivered instantly on WhatsApp!</p>
        </div>
      </section>
    </div>
  );
};

export default Ebook;
