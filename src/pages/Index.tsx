import heroBanner from "@/assets/hero-banner.jpg";
import { categories } from "@/data/products";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProductCategorySection } from "@/components/ProductCategorySection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection image={heroBanner} />

      <AboutSection />

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-primary text-sm font-medium tracking-[0.2em] uppercase mb-2">What We Offer</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Our <span className="text-gradient-gold">Product Range</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Premium building materials and interior solutions for every space — explore each product with full details below.
            </p>
          </div>

          <div className="space-y-28">
            {categories.map((category) => (
              <ProductCategorySection key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
