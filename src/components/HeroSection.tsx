import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";
import heroBanner from "@/assets/hero-banner.jpg";
import flooringImage from "@/assets/flooring.jpg";
import wallImage from "@/assets/decoration.jpg";
import lightingImage from "@/assets/lighting.jpg";

const heroImages = [heroBanner, flooringImage, wallImage, lightingImage];

export const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (heroImages.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const currentImage = heroImages[currentIndex];
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 transition-opacity duration-700">
        <img
          src={currentImage}
          alt="Premium building materials showroom"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/30 dark:bg-background/50" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-6">
          Premium Building Materials
        </p>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-sans leading-tight text-white mb-6">
          Elevate Your <br />
          <span className="text-gradient-gold">Living Space</span>
        </h1>
        <p className="text-white text-xlg md:text-xl max-w-2xl mx-auto mb-10">
          Discover our curated collection of sanitary ware, lighting, flooring, and decorative panels — crafted for elegance and durability.
        </p>
        <a
          href="#sanitary"
          className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground px-8 py-4 rounded-md font-semibold text-lg hover:opacity-90 transition-opacity shadow-gold"
        >
          Explore Products
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};
