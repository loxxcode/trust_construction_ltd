  import { categories } from "@/data/products";
  import { Navbar } from "@/components/Navbar";
  import { HeroSection } from "@/components/HeroSection";
  import { AboutSection } from "@/components/AboutSection";
  import { ProductCategorySection } from "@/components/ProductCategorySection";
  import { LocationSection } from "@/components/LocationSection";
  import { Footer } from "@/components/Footer";
  import { ScrollToHash } from "@/components/ScrollToHash";

  const Index = () => {
    return (
      <div className="min-h-screen bg-background">
        <ScrollToHash />
        <Navbar />
        <HeroSection />

        <AboutSection />

        <section className="py-5 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 font-sans">
                Our <span className="text-gradient-gold">Product Range</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Premium building materials and interior solutions for every space — explore each product with full details below.
              </p>
            </div>

            <div className="space-y-10">
              {categories.map((category) => (
                <ProductCategorySection key={category.id} category={category} />
              ))}
            </div>
          </div>
        </section>

        <LocationSection />

        <Footer />
      </div>
    );
  };

  export default Index;
