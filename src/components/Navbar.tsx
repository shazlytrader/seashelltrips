import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Shell } from "lucide-react";
import { useI18n, type Language } from "@/lib/i18n";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { t, lang, setLang, languages, langFlags } = useI18n();
  const location = useLocation();

  const links = [
    { to: "/", label: t("nav_home") },
    { to: "/tours", label: t("nav_tours") },
    { to: "/sea-trips", label: t("nav_sea") },
    { to: "/safari", label: t("nav_safari") },
    { to: "/transfers", label: t("nav_transfers") },
    { to: "/ebook", label: t("nav_ebook") },
    { to: "/about", label: t("nav_about") },
    { to: "/reviews", label: t("nav_reviews") },
    { to: "/offers", label: t("nav_offers") },
    { to: "/contact", label: t("nav_contact") },
    { to: "/blog", label: t("nav_blog") },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container-tour flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold text-primary">
          <Shell className="h-6 w-6" />
          <span>SEASHELL.TRIPS</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                location.pathname === l.to
                  ? "text-primary bg-primary/10"
                  : "text-foreground/70 hover:text-primary hover:bg-primary/5"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {/* Language switcher */}
          <div className="relative group">
            <button className="flex items-center gap-1 px-2 py-1 text-sm rounded-md border border-border hover:bg-muted transition-colors">
              <span>{langFlags[lang]}</span>
              <span className="hidden sm:inline">{lang.toUpperCase()}</span>
            </button>
            <div className="absolute right-0 top-full mt-1 bg-card border border-border rounded-lg shadow-elevated opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all min-w-[120px]">
              {languages.map(l => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`w-full text-left px-3 py-2 text-sm hover:bg-muted transition-colors first:rounded-t-lg last:rounded-b-lg ${
                    l === lang ? "text-primary font-semibold" : "text-foreground"
                  }`}
                >
                  {langFlags[l]} {l.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu */}
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 rounded-md hover:bg-muted">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="lg:hidden border-t border-border bg-card pb-4">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`block px-6 py-3 text-sm font-medium transition-colors ${
                location.pathname === l.to ? "text-primary bg-primary/10" : "text-foreground/70 hover:text-primary"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
