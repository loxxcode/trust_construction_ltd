  import { categories } from "@/data/products";
  import { Navbar } from "@/components/Navbar";
  import { Link } from "react-router-dom";
  import { HeroSection } from "@/components/HeroSection";
  import { AboutSection } from "@/components/AboutSection";
  import { ProductCategorySection } from "@/components/ProductCategorySection";
  import { ProductCard } from "@/components/ProductCard";
  import { LocationSection } from "@/components/LocationSection";
  import { Footer } from "@/components/Footer";
  import { ScrollToHash } from "@/components/ScrollToHash";

  const Index = () => {
    // build recommended: one per category, plus three additional distinct products
    const perCategory = categories.map((c) => c.products[0]).filter(Boolean) as any[];
    const flat = categories.flatMap((c) => c.products);
    const extras = flat.filter((p) => !perCategory.some((pc) => pc.name === p.name)).slice(0, 3);
    const recommended = [...perCategory, ...extras];
    return (
      <div className="min-h-screen bg-background">
        <ScrollToHash />
        <Navbar />
        <HeroSection />

        <AboutSection />

        <section className="py-5 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Recommended products: one per category */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-4">Recommended For You</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {recommended.map((p) => (
                  <ProductCard key={p.name} {...p} />
                ))}
              </div>

              <div className="mt-6 text-center">
                <Link
                  to="/products"
                  className="inline-block bg-gradient-gold text-primary-foreground px-6 py-3 rounded-md text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  View all products
                </Link>
              </div>
            </div>
          </div>
        </section>

        <LocationSection />

        <Footer />
      </div>
    );
  };

  export default Index;
