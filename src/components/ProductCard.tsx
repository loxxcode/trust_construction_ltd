interface ProductCardProps {
  name: string;
  image: string;
  description: string;
  features: string[];
}

export const ProductCard = ({ name, image, description, features }: ProductCardProps) => {
  return (
    <div className="group bg-card rounded-xl border border-border overflow-hidden hover:border-primary/40 transition-all duration-500 hover:shadow-gold">
      <div className="relative overflow-hidden aspect-square">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <div className="p-5">
        <h4 className="text-lg font-semibold text-foreground mb-2" style={{ fontFamily: "var(--font-display)" }}>
          {name}
        </h4>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {features.map((feature) => (
            <span
              key={feature}
              className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground border border-border"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
