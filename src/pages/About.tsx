import { Shield, Users, Award, MapPin, MessageCircle } from "lucide-react";
import { useI18n, getWhatsAppLink } from "@/lib/i18n";
import heroImage from "@/assets/hero-redsea.jpg";

const About = () => {
  const { t } = useI18n();

  const features = [
    { icon: Award, title: "Licensed Egyptologist Guides", desc: "All our guides are certified Egyptologists who speak your language." },
    { icon: Users, title: "Trusted Local Team", desc: "Our experienced local team knows Marsa Alam like no one else." },
    { icon: Shield, title: "Safety First", desc: "All tours follow strict safety protocols with fully insured vehicles and equipment." },
    { icon: MapPin, title: "Local Expertise", desc: "Based in Marsa Alam, we offer the best insider knowledge for authentic experiences." },
  ];

  return (
    <div className="pt-16">
      <div className="relative h-[40vh] min-h-[300px]">
        <img src={heroImage} alt="Marsa Alam" className="w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">{t("about_title")}</h1>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-tour max-w-4xl">
          <p className="text-lg text-foreground/80 leading-relaxed mb-12 text-center">{t("about_desc")}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {features.map((f, i) => (
              <div key={i} className="bg-card rounded-xl p-6 shadow-card border border-border">
                <f.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-display text-xl font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm">{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">Ready to explore?</h2>
            <a
              href={getWhatsAppLink()}
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

export default About;
