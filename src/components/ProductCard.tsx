import { Link } from "react-router-dom";
import { slugify } from "@/lib/utils";

interface ProductCardProps {
  name: string;
  image: string;
  description: string;
}

export const ProductCard = ({ name, image, description }: ProductCardProps) => {
  const slug = slugify(name);

  return (
    <Link to={`/products/${slug}`} className="group block">
      <div className="bg-card rounded-xl border border-border overflow-hidden hover:border-primary/40 transition-all duration-500">
        <div className="relative overflow-hidden aspect-square">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
        </div>
        <div className="p-5">
          <h4 className="text-lg font-semibold text-foreground mb-2 font-sans">{name}</h4>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">{description}</p>
        </div>
      </div>
    </Link>
  );
};
