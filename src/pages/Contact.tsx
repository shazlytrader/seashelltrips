import { useState } from "react";
import { MessageCircle, Mail, MapPin, Phone, Send } from "lucide-react";
import { useI18n, getWhatsAppLink, WHATSAPP_NUMBER, EMAIL } from "@/lib/i18n";
import SEO from "@/components/SEO";
import { tours } from "@/lib/tours-data";

const Contact = () => {
  const { t } = useI18n();
  const [form, setForm] = useState({ name: "", country: "", tour: "", date: "", guests: "", whatsapp: "" });

  const handleWhatsAppSubmit = () => {
    const msg = `Hello! I would like to book:\n\nName: ${form.name}\nCountry: ${form.country}\nTour: ${form.tour}\nDate: ${form.date}\nGuests: ${form.guests}\nWhatsApp: ${form.whatsapp}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div className="pt-16">
      <SEO
        title="Contact & Book — Marsa Alam Tours | Seashell Trips"
        description="Contact Seashell Trips to book Marsa Alam excursions. WhatsApp +201017014296, email seashelltrips@gmail.com. Fast response within 30 minutes!"
        canonical="https://seashelltrips.com/contact"
      />
      <section className="section-padding">
        <div className="container-tour max-w-4xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-center text-foreground mb-4">{t("contact_title")}</h1>
          <p className="text-center text-muted-foreground mb-12">We'd love to hear from you! Get in touch to book your next adventure.</p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2 bg-card rounded-xl p-8 shadow-card border border-border">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">{t("name")}</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring focus:outline-none"
                    maxLength={100}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">{t("country")}</label>
                  <input
                    type="text"
                    value={form.country}
                    onChange={e => setForm({ ...form, country: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring focus:outline-none"
                    maxLength={100}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">{t("tour")}</label>
                  <select
                    value={form.tour}
                    onChange={e => setForm({ ...form, tour: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring focus:outline-none"
                  >
                    <option value="">Select a tour</option>
                    {tours.map(tour => (
                      <option key={tour.id} value={tour.title}>{tour.title}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">{t("date")}</label>
                  <input
                    type="date"
                    value={form.date}
                    onChange={e => setForm({ ...form, date: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">{t("guests")}</label>
                  <input
                    type="number"
                    min="1"
                    max="50"
                    value={form.guests}
                    onChange={e => setForm({ ...form, guests: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">{t("whatsapp_number")}</label>
                  <input
                    type="tel"
                    value={form.whatsapp}
                    onChange={e => setForm({ ...form, whatsapp: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring focus:outline-none"
                    maxLength={20}
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleWhatsAppSubmit}
                  className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-primary-foreground px-6 py-3 rounded-xl font-semibold transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                  {t("book_whatsapp")}
                </button>
                <a
                  href={`mailto:${EMAIL}?subject=Booking Request&body=${encodeURIComponent(`Name: ${form.name}\nTour: ${form.tour}\nDate: ${form.date}\nGuests: ${form.guests}`)}`}
                  className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-xl font-semibold transition-colors"
                >
                  <Send className="h-5 w-5" />
                  {t("send_request")}
                </a>
              </div>
            </div>

            {/* Contact info */}
            <div className="space-y-4">
              <div className="bg-card rounded-xl p-6 shadow-card border border-border">
                <Phone className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-display text-lg font-bold text-foreground mb-1">WhatsApp</h3>
                <a href={getWhatsAppLink()} className="text-primary hover:underline text-sm">+20 101 701 4296</a>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-card border border-border">
                <Mail className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-display text-lg font-bold text-foreground mb-1">Email</h3>
                <a href={`mailto:${EMAIL}`} className="text-primary hover:underline text-sm">{EMAIL}</a>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-card border border-border">
                <MapPin className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-display text-lg font-bold text-foreground mb-1">Location</h3>
                <p className="text-muted-foreground text-sm">Marsa Alam, Red Sea, Egypt</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
