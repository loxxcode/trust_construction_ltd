import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { categories, Product } from "@/data/products";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { slugify } from "@/lib/utils";
import { ProductCard } from "@/components/ProductCard";

const findProductBySlug = (
  slug: string,
): (Product & { category?: string }) | undefined => {
  for (const cat of categories) {
    for (const p of cat.products) {
      if (slugify(p.name) === slug) return { ...p, category: cat.title };
    }
  }
  return undefined;
};

const ProductDetails = () => {
  const { slug } = useParams();
  const product = slug ? findProductBySlug(slug) : undefined;
  // compute related products safely
  let relatedProducts: Product[] = [];
  if (product) {
    const cat = categories.find((c) => c.title === product.category);
    const fromCategory = cat ? cat.products : [];
    const flat = categories.flatMap((c) => c.products);
    relatedProducts = (fromCategory.length ? fromCategory : flat)
      .filter((p) => slugify(p.name) !== slug)
      .slice(0, 4);
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-28 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          {!product ? (
            <div className="rounded-xl border border-border bg-card p-8 text-center">
              <p className="text-foreground font-semibold mb-4">
                Product not found
              </p>
              <button
                onClick={() => window.history.back()}
                aria-label="Go back"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-card border border-border text-foreground shadow-sm hover:shadow-md transition-transform hover:-translate-y-0.5"
              >
                <ArrowLeft size={18} />
              </button>
            </div>
          ) : (
            <div>
              <div className="mb-6">
                <button
                  onClick={() => window.history.back()}
                  aria-label="Go back"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-card border border-border text-foreground shadow-sm hover:shadow-md transition-transform hover:-translate-y-0.5"
                >
                  <ArrowLeft size={20} />
                </button>
              </div>

              <div className="px-4 md:px-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                  <div className="bg-card rounded-xl border border-border overflow-hidden h-auto md:h-[420px] lg:h-[560px] xl:h-[720px]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  <div className="flex flex-col justify-between h-auto md:h-[420px] lg:h-[560px] xl:h-[720px] pt-5 px-4 md:px-10">
                    <div>
                      <p className="text-sm text-muted-foreground">{product.category}</p>
                      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                      <p className="text-foreground mb-6">{product.description}</p>

                      <div className="mb-2">
                        <h3 className="text-lg font-semibold mb-2">Features</h3>
                        <ul className="list-inside list-disc space-y-1 text-muted-foreground">
                          {product.features.map((f) => (
                            <li key={f}>{f}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Related products */}
              <div className="mt-12">
                <h3 className="text-2xl font-semibold mb-6">
                  Related Products
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {relatedProducts.map((p) => (
                    <ProductCard
                      key={p.name}
                      name={p.name}
                      image={p.image}
                      description={p.description}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetails;
