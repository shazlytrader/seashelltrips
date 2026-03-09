import { Star } from "lucide-react";

interface ReviewCardProps {
  name: string;
  country: string;
  rating: number;
  text: string;
  type: string;
}

const ReviewCard = ({ name, country, rating, text, type }: ReviewCardProps) => {
  const icons: Record<string, string> = { family: "👨‍👩‍👧‍👦", couple: "💑", group: "👥" };
  return (
    <div className="bg-card rounded-xl p-6 shadow-card border border-border hover:shadow-elevated transition-shadow">
      <div className="flex items-center gap-1 mb-3">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-accent text-accent" />
        ))}
      </div>
      <p className="text-foreground/80 text-sm leading-relaxed mb-4 italic">"{text}"</p>
      <div className="flex items-center gap-2">
        <span className="text-lg">{icons[type] || "👤"}</span>
        <div>
          <p className="text-sm font-semibold text-foreground">{name}</p>
          <p className="text-xs text-muted-foreground">{country}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
