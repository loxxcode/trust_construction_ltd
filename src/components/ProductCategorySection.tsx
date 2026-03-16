import { ProductCard } from "./ProductCard";
import type { Category } from "@/data/products";

interface ProductCategorySectionProps {
  category: Category;
}

export const ProductCategorySection = ({ category }: ProductCategorySectionProps) => {
  return (
    <section id={category.id} className="scroll-mt-14">
      <div className="mb-5">
        {/* <p className="text-primary text-sm font-medium tracking-[0.2em] uppercase mb-2">Collection</p> */}
        <h2 className="text-3xl md:text-4xl font-bold font-sans leading-tight  text-amber-600 mb-3">
          {category.title}
        </h2>
        <p className="text-muted-foreground text-lg max-w-3xl">{category.description}</p>
        <div className="w-16 h-1 bg-gradient-gold rounded-full mt-4" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {category.products.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};
