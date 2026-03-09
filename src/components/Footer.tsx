import { Link } from "react-router-dom";
import { Shell, Mail, Phone, MapPin } from "lucide-react";
import { useI18n, EMAIL, WHATSAPP_NUMBER } from "@/lib/i18n";

const Footer = () => {
  const { t } = useI18n();

  return (
    <footer className="gradient-ocean text-primary-foreground">
      <div className="container-tour section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 font-display text-xl font-bold mb-4">
              <Shell className="h-6 w-6" />
              SEASHELL.TRIPS
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Professional tourism company based in Marsa Alam, Egypt. Your trusted partner for unforgettable Red Sea adventures.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { to: "/tours", label: t("nav_tours") },
                { to: "/sea-trips", label: t("nav_sea") },
                { to: "/safari", label: t("nav_safari") },
                { to: "/transfers", label: t("nav_transfers") },
                { to: "/offers", label: t("nav_offers") },
              ].map(l => (
                <Link key={l.to} to={l.to} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-primary-foreground/80">
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                <Phone className="h-4 w-4" /> +20 101 701 4296
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                <Mail className="h-4 w-4" /> {EMAIL}
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Marsa Alam, Egypt
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-3">
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors text-sm font-bold">WA</a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors text-sm font-bold">IG</a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors text-sm font-bold">TT</a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors text-sm font-bold">FB</a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
          © {new Date().getFullYear()} Seashell Trips. {t("footer_rights")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
