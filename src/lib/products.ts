import caneviaMarkAsset from "@/assets/canevia-mark.webp";
import kothuleMarkAsset from "@/assets/kothule-industries-mark.svg";
import pouchFrontAsset from "@/assets/canevia-pouch-front.webp";
import pouchBackAsset from "@/assets/canevia-pouch-back.webp";
import cubesMasterAsset from "@/assets/jaggery-cubes.webp";
import powderAsset from "@/assets/jaggery-powder.webp";
import syrupAsset from "@/assets/jaggery-syrup.webp";

import heirloomMarkAsset from "@/assets/heirloom-mark.webp";
import okraJuiceMarkAsset from "@/assets/cleaned-with-okra-juice-mark.webp";
import woodfiredMarkAsset from "@/assets/traditional-woodfired-process-mark.webp";
import noChemicalMarkAsset from "@/assets/no-chemical-mark.webp";

export type Weight = "250g" | "500g" | "1kg";
export type ProductId = "cubes" | "powder" | "syrup";

export interface SensoryMetrics {
  caramel: number; // Caramel warmth (0-100)
  molasses: number; // Molasses depth (0-100)
  mineral: number; // Mineral richness (0-100)
  dissolution: number; // Melting speed (0-100)
  floral: number; // Floral honey notes (0-100)
}

export interface ProductDetails {
  id: ProductId;
  name: string;
  subtitle: string;
  tagline: string;
  badge: string;
  note: string;
  description: string;
  details: string;
  tastingNotes: string[];
  pairings: string[];
  prices: Record<Weight, number>;
  image: string;
  gallery: string[];
  sensory: SensoryMetrics;
  characteristics: {
    origin: string;
    process: string;
    consistency: string;
    shelfLife: string;
  };
  nutritionPer100g: {
    energy: number;
    carbohydrates: number;
    sugars: number;
    protein: number;
    fat: number;
    iron: string;
    magnesium: string;
  };
}

export const weights: Weight[] = ["250g", "500g", "1kg"];

export const products: Record<ProductId, ProductDetails> = {
  cubes: {
    id: "cubes",
    name: "Jaggery Cubes",
    subtitle: "Reserve N° 01",
    tagline: "Hand-carved amber cubes with deep caramel warmth and natural minerals.",
    badge: "Signature Reserve",
    note: "Hand-cut natural cubes",
    description:
      "Boiled slowly in open woodfired vats from single-estate sugarcane. Naturally cooled and carved by hand into amber cubes. Rich in molasses flavor, natural iron, and essential minerals.",
    details:
      "100% pure sugarcane jaggery. Clarified naturally with organic okra plant extract. Zero chemical bleaching, zero sulphur, and zero additives.",
    tastingNotes: [
      "Dark Molasses",
      "Warm Caramel",
      "Earthen Minerals",
      "Sun-Dried Fig",
    ],
    pairings: [
      "Filter Coffee",
      "Single-Origin Black Tea",
      "Warm Spiced Milk",
      "Traditional Sweets",
    ],
    prices: {
      "250g": 199,
      "500g": 369,
      "1kg": 699,
    },
    image: cubesMasterAsset,
    gallery: [cubesMasterAsset, pouchFrontAsset, pouchBackAsset],
    sensory: {
      caramel: 95,
      molasses: 92,
      mineral: 88,
      dissolution: 55,
      floral: 70,
    },
    characteristics: {
      origin: "Single-Estate Pune / Kolhapur Valley",
      process: "Woodfired slow-vat crystallization",
      consistency: "Firm hand-cut natural blocks",
      shelfLife: "12 Months from packing (Store airtight)",
    },
    nutritionPer100g: {
      energy: 375,
      carbohydrates: 95,
      sugars: 90,
      protein: 0.5,
      fat: 0,
      iron: "11.4 mg (81% RDA)",
      magnesium: "70 mg (18% RDA)",
    },
  },
  powder: {
    id: "powder",
    name: "Jaggery Powder",
    subtitle: "Reserve N° 02",
    tagline: "Fine velvet jaggery powder that dissolves instantly.",
    badge: "Culinary Grade",
    note: "Fine velvet powder",
    description:
      "Milled into a smooth, free-flowing golden powder. Dissolves quickly and evenly into morning coffee, chai, baking, and warm breakfast bowls without sediment.",
    details:
      "Retains the full natural minerals of fresh cane juice with an easy-to-measure everyday texture.",
    tastingNotes: [
      "Golden Honey",
      "Malted Biscuit",
      "Warm Brown Butter",
      "Floral Cane Blossom",
    ],
    pairings: [
      "Morning Coffee & Latte",
      "Masala Chai",
      "Oatmeal & Porridge",
      "Baking & Desserts",
    ],
    prices: {
      "250g": 189,
      "500g": 349,
      "1kg": 659,
    },
    image: powderAsset,
    gallery: [powderAsset, pouchFrontAsset, pouchBackAsset],
    sensory: {
      caramel: 82,
      molasses: 75,
      mineral: 84,
      dissolution: 98,
      floral: 90,
    },
    characteristics: {
      origin: "Single-Estate Pune / Kolhapur Valley",
      process: "Low-temperature cure & fine milling",
      consistency: "Fine free-flowing golden powder",
      shelfLife: "12 Months from packing (Moisture-sealed)",
    },
    nutritionPer100g: {
      energy: 370,
      carbohydrates: 94,
      sugars: 88,
      protein: 0.4,
      fat: 0,
      iron: "10.8 mg (77% RDA)",
      magnesium: "65 mg (16% RDA)",
    },
  },
  syrup: {
    id: "syrup",
    name: "Jaggery Syrup",
    subtitle: "Reserve N° 03",
    tagline: "Slow-cooked golden syrup with deep caramel flavor.",
    badge: "Patisserie Reserve",
    note: "Slow-cooked golden syrup",
    description:
      "Simmered gently over wood fires to a thick, pourable consistency. A rich golden syrup balancing natural sweetness with earthy caramel notes. Never blended with corn syrup or glucose.",
    details:
      "Pure unrefined sugarcane syrup. Poured directly into bottles without preservatives, colorants, or artificial thickeners.",
    tastingNotes: ["Rich Caramel", "Wild Honeycomb", "Ripe Date", "Warm Vanilla"],
    pairings: [
      "Pancakes & Waffles",
      "Yogurt & Granola",
      "Craft Cocktails",
      "Roasted Vegetables",
    ],
    prices: {
      "250g": 249,
      "500g": 459,
      "1kg": 869,
    },
    image: syrupAsset,
    gallery: [syrupAsset, pouchFrontAsset, pouchBackAsset],
    sensory: {
      caramel: 98,
      molasses: 94,
      mineral: 90,
      dissolution: 100,
      floral: 76,
    },
    characteristics: {
      origin: "Single-Estate Pune / Kolhapur Valley",
      process: "Continuous low-flame kettle reduction",
      consistency: "Dense pourable golden syrup",
      shelfLife: "12 Months from packing (Store cool)",
    },
    nutritionPer100g: {
      energy: 360,
      carbohydrates: 91,
      sugars: 85,
      protein: 0.6,
      fat: 0,
      iron: "12.1 mg (86% RDA)",
      magnesium: "74 mg (19% RDA)",
    },
  },
};

export const purityPillars = [
  {
    number: "01",
    title: "Single-Estate Sugarcane",
    subtitle: "Traceable Riverbank Soil",
    badge: "100% Traceable",
    description:
      "Harvested from riverbank soil in Maharashtra. Chosen for deep natural minerals and rich flavor.",
    markImage: heirloomMarkAsset,
    markAlt: "Heirloom sugarcane seal by Kothule Industries",
  },
  {
    number: "02",
    title: "Cleaned with Okra Juice",
    subtitle: "Botanical Clarification",
    badge: "Natural Process",
    description:
      "Clarified naturally with wild organic okra extract. Plant enzymes lift impurities without chemicals or synthetic coagulants.",
    markImage: okraJuiceMarkAsset,
    markAlt: "Cleaned with Okra Juice mark",
  },
  {
    number: "03",
    title: "Woodfired Iron Vats",
    subtitle: "Slow-Cooked Over Embers",
    badge: "Traditional Craft",
    description:
      "Boiled gently in seasoned iron kadhais fueled by dry cane fibers. Even heat protects iron, magnesium, and golden color.",
    markImage: woodfiredMarkAsset,
    markAlt: "Traditional Woodfired Process seal",
  },
  {
    number: "04",
    title: "Zero Chemical Bleach",
    subtitle: "No Sulphur. No Additives.",
    badge: "Naturally Dark",
    description:
      "Commercial jaggery uses chemical bleach for an artificial yellow tint. CANEVIA is untreated and naturally dark amber.",
    markImage: noChemicalMarkAsset,
    markAlt: "Zero chemical additives guarantee seal",
  },
];

export const alchemyProcessSteps = [
  {
    step: "01",
    phase: "Harvest & Press",
    title: "Riverbank Cane Harvest",
    temp: "Morning Press",
    time: "Winter Harvest",
    description:
      "Grown in rich black soil along Maharashtra rivers. Cane is harvested fresh in the morning when natural sweetness is at its highest.",
    highlight: "Black Riverbank Soil · High Iron & Magnesium",
  },
  {
    step: "02",
    phase: "Natural Clarification",
    title: "Fresh Okra Plant Clarification",
    temp: "Gentle Heat",
    time: "Natural Binding",
    description:
      "Fresh okra extract is added to raw cane juice. Natural plant enzymes bind to micro-fibers, floating impurities to the top for easy skimming without chemicals.",
    highlight: "Zero Sulphur · 100% Plant Clarifier",
  },
  {
    step: "03",
    phase: "Slow Cooking",
    title: "Woodfired Iron Kadhais",
    temp: "118°C Finish",
    time: "3-Hour Simmer",
    description:
      "Slow-cooked over dry sugarcane embers in seasoned iron pans. Master artisans stir continuously until the syrup reaches the perfect thickness.",
    highlight: "Natural Iron Transfer · Traditional Vats",
  },
  {
    step: "04",
    phase: "Cooling & Sealing",
    title: "Cooling, Shaping & Freshness Seal",
    temp: "Natural Cool",
    time: "Freshness Seal",
    description:
      "Cooled in shallow basins, carved into cubes, milled into fine powder, or bottled as pure syrup. Sealed immediately in moisture-lock pouches.",
    highlight: "Zero Preservatives · Moisture-Locked",
  },
];

export const gastronomicPairings = [
  {
    id: "espresso",
    title: "Double-Shot Espresso",
    product: "Jaggery Cubes",
    productId: "cubes" as ProductId,
    category: "Specialty Coffee",
    notes: "Molasses & Dark Cacao",
    recipe:
      "Place a single jaggery cube in your cup. Brew a hot espresso directly over it. As it melts, it balances coffee acidity with smooth caramel sweetness.",
  },
  {
    id: "chai",
    title: "Traditional Masala Chai",
    product: "Jaggery Powder",
    productId: "powder" as ProductId,
    category: "Tea & Spices",
    notes: "Warm Brown Butter & Spice",
    recipe:
      "Boil crushed cardamom, ginger, and black tea in milk and water. Stir in a spoonful of jaggery powder at the final boil. Smooth sweetness with zero curdling.",
  },
  {
    id: "cocktail",
    title: "Classic Old Fashioned",
    product: "Jaggery Syrup",
    productId: "syrup" as ProductId,
    category: "Cocktails",
    notes: "Caramel & Orange",
    recipe:
      "Stir 15ml of jaggery syrup with 3 dashes of aromatic bitters and 60ml of whiskey over ice. Garnish with an orange twist.",
  },
  {
    id: "patisserie",
    title: "Salted Butter Sourdough",
    product: "Jaggery Powder",
    productId: "powder" as ProductId,
    category: "Breakfast & Baking",
    notes: "Honey & Toasted Grain",
    recipe:
      "Whip softened butter with two spoons of jaggery powder and a pinch of sea salt. Spread over warm, crusty sourdough.",
  },
];

export const brandAssets = {
  mark: caneviaMarkAsset,
  kothuleMark: kothuleMarkAsset,
  pouchFront: pouchFrontAsset,
  pouchBack: pouchBackAsset,
  cubesMaster: cubesMasterAsset,
  powder: powderAsset,
  syrup: syrupAsset,
};

export const inr = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});
