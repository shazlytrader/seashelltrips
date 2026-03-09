import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/i18n";

const WhatsAppButton = () => {
  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-primary-foreground px-5 py-3 rounded-full shadow-elevated transition-all hover:scale-105 animate-float"
      aria-label="Book on WhatsApp"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="font-semibold text-sm hidden sm:inline">WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;
