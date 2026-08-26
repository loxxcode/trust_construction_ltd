// Product data with descriptions and images for all materials

import waterClosetImg from "@/assets/products/water-closet.jpg";
import bidetImg from "@/assets/products/bidet.jpg";
import concealedImg from "@/assets/products/Concealed-Water.jpg";
import bathroomCabinetImg from "@/assets/products/bathroom-cabinet.jpg";
import washBasinImg from "@/assets/products/wash-basin.jpg";
import showerImg from "@/assets/products/shower.jpg";
import showerKitImg from "@/assets/products/shower-kit.jpg";
import concealedshowerImg from "@/assets/products/concealed-shower.jpg";
import waterHeaterImg from "@/assets/products/water-heater.jpg";
import lightFanImg from "@/assets/products/light-fan.jpg";
import electricalImg from "@/assets/products/electrical.jpg";
import ceilingLightImg from "@/assets/products/ceiling-light.jpg";
import wallLightImg from "@/assets/products/wall-light.jpg";
import spotLightImg from "@/assets/products/spot-light.jpg";
import solarLightImg from "@/assets/products/solar-light.jpg";
import spcFlooringImg from "@/assets/products/spc-flooring.jpg";
import vinylFlooringImg from "@/assets/products/vinyl-flooring.jpg";
import bambooFlooringImg from "@/assets/products/bamboo-flooring.jpg";
import hardwoodFlooringImg from "@/assets/products/hardwood-flooring.jpg";
import wpcDeckingImg from "@/assets/products/wpc-decking.jpg";
import wpcCeilingImg from "@/assets/products/wpc-ceiling.jpg";
import rattanCeilingImg from "@/assets/products/rattan-ceiling.jpg";
import pvcCeilingImg from "@/assets/products/pvc-ceiling.jpg";
import aluminumCeilingImg from "@/assets/products/aluminum-ceiling.jpg";
import spcWallImg from "@/assets/products/spc-wall.jpg";
import wpcWallImg from "@/assets/products/wpc-wall.jpg";
import carbonWallImg from "@/assets/products/carbon-wall.jpg";
import carpetTilesImg from "@/assets/products/carpet-tiles.jpg";
import allFoolingImg from "@/assets/products/all-flooring.jpg";
import allWallImg from "@/assets/products/all-wallpanel.jpg";

export interface Product {
  name: string;
  image: string;
  description: string;
  features: string[];
}

export interface Category {
  id: string;
  title: string;
  description: string;
  products: Product[];
}

export const categories: Category[] = [
  {
    id: "sanitary",
    title: "Sanitary Ware",
    description: "Premium bathroom fixtures combining elegant design with superior functionality. Built to last with the finest ceramics and materials.",
    products: [
      {
        name: "Water Closet",
        image: waterClosetImg,
        description: "Modern one-piece and two-piece toilets with water-saving dual flush technology. Available in compact and elongated bowls, finished with an easy-clean glaze and designed for low-water consumption without sacrificing performance.",
        features: ["Dual flush system", "Soft-close seat", "Easy-clean glaze", "Water efficient"],
      },
      {
        name: "Concealed Water Closet",
        image: concealedImg,
        description: "Modern concealed water closet designed for a sleek, space-saving bathroom look with a hidden cistern system. Ideal for contemporary bathrooms, it offers quiet flushing, simple maintenance access and a variety of flush-plate finishes to match your décor.",
        features: [
          "Concealed cistern for a minimalist finish",
          "Dual-flush system for water efficiency",
          "Soft-close seat cover",
          "Durable ceramic with anti-bacterial glaze",
          "Wall-mounted design for easy cleaning"
        ],
      },
      {
        name: "Bidet Faucet",
        image: bidetImg,
        description: "Elegant floor-standing and wall-mounted bidets for enhanced personal hygiene. Precision-engineered valves and chrome fixtures provide smooth operation, while easy-clean surfaces help maintain hygiene.",
        features: ["Chrome faucet included", "Anti-bacterial glaze", "Wall-mount option", "Compact design"],
      },
      {
        name: "Bathroom Cabinets",
        image: bathroomCabinetImg,
        description: "Floating vanity units with integrated storage, mirrors, and LED backlighting. Constructed from moisture-resistant materials with soft-close drawers and multiple finishes to suit modern and traditional bathrooms.",
        features: ["Soft-close drawers", "Moisture resistant", "LED mirror included", "Multiple finishes"],
      },
      {
        name: "Bathroom Wash Basin",
        image: washBasinImg,
        description: "Vessel, countertop, and wall-hung basins in premium white porcelain. Offered in a range of shapes and mounting styles, they combine durable glaze with elegant profiles for residential and hospitality projects.",
        features: ["Overflow protection", "Scratch resistant", "Easy installation", "Modern shapes"],
      },
      {
        name: "Shower",
        image: showerImg,
        description: "Frameless glass shower enclosures with sleek hardware and modern profiles. Tempered low-iron glass and corrosion-resistant hinges deliver a minimalist look with long-term durability.",
        features: ["Tempered glass", "Anti-limescale coating", "Custom sizes", "Minimal hardware"],
      },
      {
        name: "Concealed Shower",
        image: concealedshowerImg,
        description: "Complete shower systems with rain head, handheld sprayer, and thermostatic mixer. Available in multiple configurations, these systems provide precise temperature control and a premium spa-like experience.",
        features: ["Rain shower head", "Handheld sprayer", "Thermostatic control", "Chrome finish"],
      },
      {
        name: "Water Heater",
        image: waterHeaterImg,
        description: "Energy-efficient tankless and storage water heaters for instant hot water. Models include safety cutoffs, digital controls and energy-saving features suitable for domestic and light-commercial installations.",
        features: ["Instant heating", "Energy efficient", "Digital display", "Safety cut-off"],
      },
      {
        name: "Shower Kit",
        image: showerKitImg,
        description: "Complete shower kit designed to deliver a comfortable and modern bathing experience with stylish and durable components. Kits include adjustable fittings, high-pressure heads and corrosion-resistant finishes for longevity.",
        features: [
          "High-pressure shower head",
          "Adjustable hand shower",
          "Durable stainless steel hose",
          "Corrosion-resistant finish",
          "Easy installation system"
        ],
      }
    ],
  },
  {
    id: "lighting",
    title: "Lighting",
    description: "Illuminate every room with our curated collection of modern lighting solutions — from statement ceiling fixtures to energy-saving solar options.",
    products: [
      {
        name: "Light & Fans",
        image: lightFanImg,
        description: "Ceiling fans with integrated LED lights for comfort and style in every room. Energy-efficient motors, reversible blades and remote control options make these ideal for residential and commercial spaces.",
        features: ["Remote controlled", "Reversible blades", "LED integrated", "Silent motor"],
      },
      {
        name: "Electrical Accessories",
        image: electricalImg,
        description: "Designer switches, sockets, and dimmers in modern finishes. Robust modular designs support multi-gang configurations, USB charging and compliant safety standards.",
        features: ["Modular design", "Multiple finishes", "USB ports available", "Child safety"],
      },
      {
        name: "Ceiling Lights",
        image: ceilingLightImg,
        description: "Flush-mount and semi-flush LED ceiling fixtures for ambient illumination. Low-profile housings, dimmable drivers and high color-rendering options deliver efficient, high-quality light for homes and offices.",
        features: ["Dimmable LED", "Low profile", "High lumen output", "Long lifespan"],
      },
      {
        name: "Wall Lights",
        image: wallLightImg,
        description: "Minimalist wall sconces that cast warm, directional light for mood and accent. IP-rated and finish-varied options make them suitable for indoor and sheltered outdoor areas.",
        features: ["Up & down light", "IP65 rated", "Adjustable beam", "Warm tones"],
      },
      {
        name: "Spot Lights",
        image: spotLightImg,
        description: "Adjustable recessed and surface-mounted spotlights for focused illumination. Compatible with common lamp types and offering adjustable beams, they are perfect for galleries, retail and task lighting.",
        features: ["360° rotation", "Recessed mount", "GU10 compatible", "Anti-glare"],
      },
      {
        name: "Solar Lights",
        image: solarLightImg,
        description: "Solar-powered garden and pathway lights with automatic dusk-to-dawn sensors. Weather-resistant housings and rechargeable battery systems provide reliable, maintenance-free outdoor lighting.",
        features: ["Solar powered", "Auto on/off", "Weather resistant", "No wiring needed"],
      },
    ],
  },
  {
    id: "flooring",
    title: "Flooring",
    description: "Transform your floors with durable, beautiful flooring options — from waterproof SPC to natural hardwood and eco-friendly bamboo.",
    products: [
      {
        name: "SPC Flooring",
        image: spcFlooringImg,
        description: "Stone Plastic Composite planks with realistic wood grain and 100% waterproof core. Click-lock installation, strong dimensional stability and scratch resistance make SPC a top choice for high-traffic and wet areas.",
        features: ["100% waterproof", "Click-lock install", "Scratch resistant", "Underfloor heating compatible"],
      },
      {
        name: "Vinyl Flooring",
        image: vinylFlooringImg,
        description: "Flexible luxury vinyl in rolls and tiles for seamless, budget-friendly installation. Wide range of patterns and acoustic underlay options provide comfort and easy maintenance in residential and commercial settings.",
        features: ["Peel & stick option", "Noise reducing", "Soft underfoot", "Easy maintenance"],
      },
      {
        name: "Bamboo Flooring",
        image: bambooFlooringImg,
        description: "Eco-friendly strand-woven bamboo with the warmth of natural wood and superior hardness. Stable across climates and available in multiple finishes, it offers a sustainable alternative to traditional hardwoods.",
        features: ["Eco-friendly", "Harder than oak", "Natural grain", "Sustainable source"],
      },
      {
        name: "Hardwood Flooring",
        image: hardwoodFlooringImg,
        description: "Solid and engineered hardwood planks in rich walnut, oak, and maple finishes. Pre-finished or site-finished options deliver timeless aesthetics and decades of wear resistance when properly maintained.",
        features: ["Solid & engineered", "Multiple species", "Pre-finished", "Timeless beauty"],
      },
      {
        name: "WPC Decking",
        image: wpcDeckingImg,
        description: "Wood-Plastic Composite outdoor decking that resists rot, termites, and UV fading. Low-maintenance boards with hidden-fastener systems are ideal for patios and commercial outdoor spaces.",
        features: ["Rot resistant", "UV stabilized", "Low maintenance", "Splinter free"],
      },
      {
        name: "Carpet tiles",
        image: carpetTilesImg,
        description: "Wood-Plastic Composite outdoor decking that resists rot, termites, and UV fading.",
        features: ["Rot resistant", "UV stabilized", "Low maintenance", "Splinter free"],
      },
      {
        name: "All Flooring Accessories",
        image: allFoolingImg,
        description: "A complete range of flooring accessories designed to enhance durability, installation, and finish for all types of floors.",
        features: [
          "Durable and long-lasting materials",
          "Easy-to-install components",
          "Compatible with multiple flooring types",
        ],
      }
    ],
  },
  {
    id: "ceiling",
    title: "Ceiling Decorations",
    description: "Elevate your interiors with decorative ceiling panels — lightweight, easy to install, and available in diverse materials and textures.",
    products: [
      {
        name: "WPC Ceiling Panels",
        image: wpcCeilingImg,
        description: "Wood-plastic composite panels with natural wood look, ideal for humid environments. They resist moisture and swelling while providing a realistic timber appearance for ceilings and soffits.",
        features: ["Moisture proof", "Flame retardant", "Easy clip install", "Wood grain texture"],
      },
      {
        name: "Rattan Ceiling Panels",
        image: rattanCeilingImg,
        description: "Handwoven rattan panels adding organic texture and tropical warmth to ceilings. Lightweight and artisanal, they are best used in feature zones and hospitality interiors with careful maintenance.",
        features: ["Natural material", "Unique texture", "Lightweight", "Artisan craft"],
      },
      {
        name: "PVC Ceiling Panels",
        image: pvcCeilingImg,
        description: "Decorative PVC panels with ornate patterns — lightweight, waterproof, and affordable. Easy to install and clean, they are a practical alternative for decorative ceilings and wet-area cladding.",
        features: ["Waterproof", "Lightweight", "Easy to clean", "Budget friendly"],
      },
      {
        name: "Aluminum Ceiling Bars",
        image: aluminumCeilingImg,
        description: "Linear aluminum ceiling grid systems for commercial and modern residential spaces. Durable, corrosion-resistant finishes and modular profiles support integrated lighting and services.",
        features: ["Fire resistant", "Corrosion proof", "Modern aesthetic", "Modular grid"],
      },
    ],
  },
  {
    id: "wall",
    title: "Wall Decoration",
    description: "Cover and protect your walls with modern panel systems — quick installation, low maintenance, and stunning visual impact.",
    products: [
      {
        name: "SPC Wall Panels",
        image: spcWallImg,
        description: "Stone Plastic Composite wall cladding with realistic wood and stone textures. Designed for durability, water resistance and easy upkeep in both commercial and residential interiors.",
        features: ["Waterproof", "Click install", "Realistic texture", "Durable core"],
      },
      {
        name: "WPC Wall Panels",
        image: wpcWallImg,
        description: "Wood-Plastic Composite panels offering warmth and texture for interior walls. They combine acoustic benefits with simple installation and low maintenance.",
        features: ["Eco composite", "Sound insulating", "Anti-mold", "Multiple patterns"],
      },
      {
        name: "Carbon Sheet Wall Panels",
        image: carbonWallImg,
        description: "Ultra-thin carbon fiber sheet panels for a sleek, contemporary wall finish. These premium panels provide a high-strength, lightweight option with a modern industrial aesthetic.",
        features: ["Ultra lightweight", "High strength", "Modern look", "Heat resistant"],
      },
      {
        name: "All Wall Panels",
        image: allWallImg,
        description: "Ultra-thin carbon fiber sheet panels for a sleek, contemporary wall finish. These premium panels provide a high-strength, lightweight option with a modern industrial aesthetic.",
        features: ["Ultra lightweight", "High strength", "Modern look", "Heat resistant"],
      },
    ],
  },
];
