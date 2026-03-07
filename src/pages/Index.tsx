import { Bath, Lightbulb, Layers, ArrowDown, Phone, Mail, MapPin } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";
import sanitaryImg from "@/assets/sanitary-ware.jpg";
import lightingImg from "@/assets/lighting.jpg";
import flooringImg from "@/assets/flooring.jpg";
import decorationImg from "@/assets/decoration.jpg";
import { CategorySection } from "@/components/CategorySection";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const categories = [
  {
    id: "sanitary",
    title: "Sanitary Ware",
    image: sanitaryImg,
    items: [
      "Water Closet",
      "Bidet",
      "Bathroom Cabinets",
      "Bathroom Wash Basin",
      "Shower",
      "Shower Kit",
      "Water Heater",
    ],
  },
  {
    id: "lighting",
    title: "Lighting",
    image: lightingImg,
    items: [
      "Light & Fans",
      "Electrical Accessories",
      "Ceiling Lights",
      "Wall Lights",
      "Spot Lights",
      "Solar Lights",
    ],
  },
  {
    id: "flooring",
    title: "Flooring",
    image: flooringImg,
    items: [
      "SPC Flooring",
      "Vinyl Flooring",
      "Bamboo Flooring",
      "Hardwood Flooring",
      "WPC Decking",
      "All Accessories",
    ],
  },
  {
    id: "ceiling",
    title: "Ceiling Decorations",
    image: decorationImg,
    items: [
      "WPC Ceiling Panels",
      "Rattan Ceiling Panels",
      "PVC Ceiling Panels",
      "Aluminum Ceiling Bars",
    ],
  },
  {
    id: "wall",
    title: "Wall Decoration",
    image: decorationImg,
    items: [
      "SPC Wall Panels",
      "WPC Wall Panels",
      "Carbon Sheet Wall Panels",
    ],
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection image={heroBanner} />
      
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
            Our <span className="text-gradient-gold">Product Range</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto text-lg">
            Premium building materials and interior solutions for every space
          </p>

          <div className="space-y-24">
            {categories.map((cat, i) => (
              <CategorySection
                key={cat.id}
                id={cat.id}
                title={cat.title}
                image={cat.image}
                items={cat.items}
                reversed={i % 2 !== 0}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
