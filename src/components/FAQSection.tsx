import type { FAQ } from "@/lib/tours-data";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface FAQSectionProps {
  faqs: FAQ[];
  tourTitle: string;
}

const FAQSection = ({ faqs, tourTitle }: FAQSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section aria-label={`Frequently asked questions about ${tourTitle}`}>
      <h2 className="font-display text-2xl font-bold text-foreground mb-6">
        Frequently Asked Questions
      </h2>
      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="border border-border rounded-xl overflow-hidden bg-card"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between p-5 text-left hover:bg-secondary/30 transition-colors"
              aria-expanded={openIndex === i}
            >
              <span className="font-semibold text-foreground pr-4">{faq.question}</span>
              <ChevronDown
                className={`h-5 w-5 text-muted-foreground shrink-0 transition-transform ${openIndex === i ? "rotate-180" : ""}`}
              />
            </button>
            {openIndex === i && (
              <div className="px-5 pb-5 text-foreground/80 leading-relaxed border-t border-border pt-4">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
