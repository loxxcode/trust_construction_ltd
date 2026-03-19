import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";
import heroBanner from "@/assets/hero-banner.jpg";
import flooringImage from "@/assets/flooring.jpg";
import wallImage from "@/assets/decoration.jpg";
import lightingImage from "@/assets/lighting.jpg";

const heroSlides = [
  {
    image: heroBanner,
    title: "Elevate Your Living Space",
    highlight: "Living Space",
    description:
      "Discover premium sanitary ware designed for comfort, style, and durability.",
  },
  {
    image: flooringImage,
    title: "Modern Flooring Solutions",
    highlight: "Flooring",
    description:
      "Upgrade your home with durable, elegant, and easy-to-maintain flooring.",
  },
  {
    image: wallImage,
    title: "Stylish Wall Decorations",
    highlight: "Wall Designs",
    description:
      "Transform your interiors with decorative panels that bring life to your walls.",
  },
  {
    image: lightingImage,
    title: "Perfect Lighting Experience",
    highlight: "Lighting",
    description:
      "Enhance your ambiance with modern lighting solutions for every space.",
  },
];

export const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (heroSlides.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentSlide = heroSlides[currentIndex];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 transition-opacity duration-700">
        <img
          src={currentSlide.image}
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

        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-sans leading-tight text-white mb-6">
          {currentSlide.title.split(currentSlide.highlight)[0]}
          <br />
          <span className="text-gradient-gold">
            {currentSlide.highlight}
          </span>
        </h1>

        <p className="text-white text-lg md:text-xl max-w-2xl mx-auto mb-10">
          {currentSlide.description}
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