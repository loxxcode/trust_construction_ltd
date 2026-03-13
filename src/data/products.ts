// Product data with descriptions and images for all materials

import waterClosetImg from "@/assets/products/water-closet.jpg";
import bidetImg from "@/assets/products/bidet.jpg";
import bathroomCabinetImg from "@/assets/products/bathroom-cabinet.jpg";
import washBasinImg from "@/assets/products/wash-basin.jpg";
import showerImg from "@/assets/products/shower.jpg";
import showerKitImg from "@/assets/products/shower-kit.jpg";
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
        description: "Modern one-piece and two-piece toilets with water-saving dual flush technology.",
        features: ["Dual flush system", "Soft-close seat", "Easy-clean glaze", "Water efficient"],
      },
      {
        name: "Bidet",
        image: bidetImg,
        description: "Elegant floor-standing and wall-mounted bidets for enhanced personal hygiene.",
        features: ["Chrome faucet included", "Anti-bacterial glaze", "Wall-mount option", "Compact design"],
      },
      {
        name: "Bathroom Cabinets",
        image: bathroomCabinetImg,
        description: "Floating vanity units with integrated storage, mirrors, and LED backlighting.",
        features: ["Soft-close drawers", "Moisture resistant", "LED mirror included", "Multiple finishes"],
      },
      {
        name: "Bathroom Wash Basin",
        image: washBasinImg,
        description: "Vessel, countertop, and wall-hung basins in premium white porcelain.",
        features: ["Overflow protection", "Scratch resistant", "Easy installation", "Modern shapes"],
      },
      {
        name: "Shower",
        image: showerImg,
        description: "Frameless glass shower enclosures with sleek hardware and modern profiles.",
        features: ["Tempered glass", "Anti-limescale coating", "Custom sizes", "Minimal hardware"],
      },
      {
        name: "Shower Kit",
        image: showerKitImg,
        description: "Complete shower systems with rain head, handheld sprayer, and thermostatic mixer.",
        features: ["Rain shower head", "Handheld sprayer", "Thermostatic control", "Chrome finish"],
      },
      {
        name: "Water Heater",
        image: waterHeaterImg,
        description: "Energy-efficient tankless and storage water heaters for instant hot water.",
        features: ["Instant heating", "Energy efficient", "Digital display", "Safety cut-off"],
      },
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
        description: "Ceiling fans with integrated LED lights for comfort and style in every room.",
        features: ["Remote controlled", "Reversible blades", "LED integrated", "Silent motor"],
      },
      {
        name: "Electrical Accessories",
        image: electricalImg,
        description: "Designer switches, sockets, and dimmers in modern finishes.",
        features: ["Modular design", "Multiple finishes", "USB ports available", "Child safety"],
      },
      {
        name: "Ceiling Lights",
        image: ceilingLightImg,
        description: "Flush-mount and semi-flush LED ceiling fixtures for ambient illumination.",
        features: ["Dimmable LED", "Low profile", "High lumen output", "Long lifespan"],
      },
      {
        name: "Wall Lights",
        image: wallLightImg,
        description: "Minimalist wall sconces that cast warm, directional light for mood and accent.",
        features: ["Up & down light", "IP65 rated", "Adjustable beam", "Warm tones"],
      },
      {
        name: "Spot Lights",
        image: spotLightImg,
        description: "Adjustable recessed and surface-mounted spotlights for focused illumination.",
        features: ["360° rotation", "Recessed mount", "GU10 compatible", "Anti-glare"],
      },
      {
        name: "Solar Lights",
        image: solarLightImg,
        description: "Solar-powered garden and pathway lights with automatic dusk-to-dawn sensors.",
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
        description: "Stone Plastic Composite planks with realistic wood grain and 100% waterproof core.",
        features: ["100% waterproof", "Click-lock install", "Scratch resistant", "Underfloor heating compatible"],
      },
      {
        name: "Vinyl Flooring",
        image: vinylFlooringImg,
        description: "Flexible luxury vinyl in rolls and tiles for seamless, budget-friendly installation.",
        features: ["Peel & stick option", "Noise reducing", "Soft underfoot", "Easy maintenance"],
      },
      {
        name: "Bamboo Flooring",
        image: bambooFlooringImg,
        description: "Eco-friendly strand-woven bamboo with the warmth of natural wood and superior hardness.",
        features: ["Eco-friendly", "Harder than oak", "Natural grain", "Sustainable source"],
      },
      {
        name: "Hardwood Flooring",
        image: hardwoodFlooringImg,
        description: "Solid and engineered hardwood planks in rich walnut, oak, and maple finishes.",
        features: ["Solid & engineered", "Multiple species", "Pre-finished", "Timeless beauty"],
      },
      {
        name: "WPC Decking",
        image: wpcDeckingImg,
        description: "Wood-Plastic Composite outdoor decking that resists rot, termites, and UV fading.",
        features: ["Rot resistant", "UV stabilized", "Low maintenance", "Splinter free"],
      },
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
        description: "Wood-plastic composite panels with natural wood look, ideal for humid environments.",
        features: ["Moisture proof", "Flame retardant", "Easy clip install", "Wood grain texture"],
      },
      {
        name: "Rattan Ceiling Panels",
        image: rattanCeilingImg,
        description: "Handwoven rattan panels adding organic texture and tropical warmth to ceilings.",
        features: ["Natural material", "Unique texture", "Lightweight", "Artisan craft"],
      },
      {
        name: "PVC Ceiling Panels",
        image: pvcCeilingImg,
        description: "Decorative PVC panels with ornate patterns — lightweight, waterproof, and affordable.",
        features: ["Waterproof", "Lightweight", "Easy to clean", "Budget friendly"],
      },
      // {
      //   name: "Aluminum Ceiling Bars",
      //   image: aluminumCeilingImg,
      //   description: "Linear aluminum ceiling grid systems for commercial and modern residential spaces.",
      //   features: ["Fire resistant", "Corrosion proof", "Modern aesthetic", "Modular grid"],
      // },
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
        description: "Stone Plastic Composite wall cladding with realistic wood and stone textures.",
        features: ["Waterproof", "Click install", "Realistic texture", "Durable core"],
      },
      {
        name: "WPC Wall Panels",
        image: wpcWallImg,
        description: "Wood-Plastic Composite panels offering warmth and texture for interior walls.",
        features: ["Eco composite", "Sound insulating", "Anti-mold", "Multiple patterns"],
      },
      {
        name: "Carbon Sheet Wall Panels",
        image: carbonWallImg,
        description: "Ultra-thin carbon fiber sheet panels for a sleek, contemporary wall finish.",
        features: ["Ultra lightweight", "High strength", "Modern look", "Heat resistant"],
      },
    ],
  },
];
