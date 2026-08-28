import heroImg from '../assets/images/hero-editorial-elan.jpg';
import bridalImg from '../assets/images/bridal-makeup-elan.jpg';
import softGlamImg from '../assets/images/soft-glam-makeup-elan.jpg';
import editorialImg from '../assets/images/editorial-fashion-elan.jpg';
import traditionalImg from '../assets/images/traditional-bridal-elan.jpg';
import beforeImg from '../assets/images/transformation-before-elan.jpg';
import afterImg from '../assets/images/transformation-after-elan.jpg';

export const makeupCategories = [
  { id: "all", label: "All Looks" },
  { id: "bridal", label: "Bridal Artistry" },
  { id: "soft-glam", label: "Soft Glam" },
  { id: "traditional", label: "Traditional Royal" },
  { id: "editorial", label: "Editorial & High Fashion" },
  { id: "hd-makeup", label: "HD & Airbrush Finish" }
];

export const signatureLook = {
  id: "signature-royal-glow",
  title: "The ÉLAN Signature Royal Glow",
  subtitle: "Radiant · Timeless · Luminous Skin Architecture",
  category: "Bridal Artistry",
  image: bridalImg,
  description: "A harmonious balance of dewy glass skin, soft champagne warmth, sculpted dimension, and captivating smokey eyes designed to stay flawless under HD cameras and emotional moments.",
  techniques: [
    "Precision skin prep and customized barrier hydration",
    "Weightless HD micro-blending for zero flashback",
    "Hand-applied champagne gold eye leafing and gradient kohl",
    "Bespoke soft rose nude satin lip curation"
  ],
  occasion: "Grand Wedding Reception & Vows"
};

export const transformationData = {
  title: "The Transformation",
  subtitle: "Artistry that enhances, never masks.",
  description: "Witness how our meticulous skin preparation, personalized color matching, and delicate hand-buffed artistry reveal radiant confidence and timeless grace.",
  beforeImage: beforeImg,
  afterImage: afterImg,
  beforeLabel: "Natural Canvas",
  afterLabel: "ÉLAN Artistry",
  details: [
    "Hydrated Luminescent Skin Base",
    "Soft Feathered Brow Sculpting",
    "Warm Bronze & Champagne Eyeshadow",
    "Velvet Rose Glass Lips"
  ]
};

export const makeupGallery = [
  {
    id: "look-1",
    title: "Timeless Bridal Radiance",
    category: "bridal",
    categoryLabel: "Bridal Artistry",
    image: bridalImg,
    alt: "Luxury Indian bridal makeup with glowing dewy skin and champagne eye makeup by Sakshi Choudhry",
    aspect: "portrait",
    featured: true,
    description: "Intricate bridal look crafted with radiant skin prep, shimmering champagne pigments, and delicate fluttery lashes.",
    details: {
      skinFinish: "Luminous Dewy Glow",
      eyes: "Warm Bronze Smokey",
      lips: "Soft Petal Rose",
      idealFor: "Wedding Day & Pheras"
    }
  },
  {
    id: "look-2",
    title: "Satin Nude Soft Glam",
    category: "soft-glam",
    categoryLabel: "Soft Glam",
    image: softGlamImg,
    alt: "Editorial soft glam makeup look with satin nude lips and luminous skin",
    aspect: "portrait",
    featured: true,
    description: "Effortless daytime-to-evening soft glam highlighting natural facial contours with soft bronze shimmer.",
    details: {
      skinFinish: "Velvet Satin",
      eyes: "Golden Shimmer Wash",
      lips: "Satin Nude Mauve",
      idealFor: "Cocktails, Engagement & Sangeet"
    }
  },
  {
    id: "look-3",
    title: "Avant-Garde High Fashion",
    category: "editorial",
    categoryLabel: "Editorial & High Fashion",
    image: editorialImg,
    alt: "Editorial high fashion beauty makeup with graphic winged liner and deep berry lips",
    aspect: "portrait",
    featured: true,
    description: "A bold editorial statement featuring graphic sharp winged liner, porcelain luminous base, and deep glossy berry lips.",
    details: {
      skinFinish: "Porcelain Glass",
      eyes: "Graphic Obsidian Wing",
      lips: "Deep Glossy Boysenberry",
      idealFor: "Campaigns, Editorial Shoots & Fashion"
    }
  },
  {
    id: "look-4",
    title: "Heritage Royal Opulence",
    category: "traditional",
    categoryLabel: "Traditional Royal",
    image: traditionalImg,
    alt: "Traditional royal Indian bridal makeup with kohl defined eyes and rich crimson lips",
    aspect: "portrait",
    featured: true,
    description: "Regal traditional bridal aesthetic with rich crimson velvet lips, defined kohl eyeliner, and golden hour luminescence.",
    details: {
      skinFinish: "Radiant Matte",
      eyes: "Deep Kohl Winged",
      lips: "Velvety Crimson Red",
      idealFor: "Traditional Ceremonies & Receptions"
    }
  },
  {
    id: "look-5",
    title: "Champagne Glow Editorial",
    category: "hd-makeup",
    categoryLabel: "HD & Airbrush Finish",
    image: heroImg,
    alt: "High definition makeup with luminous skin and champagne gold highlights",
    aspect: "landscape",
    featured: true,
    description: "Ultra-fine HD finish calibrated for high-resolution studio photography and seamless 4K camera capture.",
    details: {
      skinFinish: "Micro-HD Airbrush Glow",
      eyes: "Champagne Sparkle Wash",
      lips: "Hydra-Gloss Peach Nude",
      idealFor: "Red Carpet, Photoshoots & Galas"
    }
  },
  {
    id: "look-6",
    title: "Custom Red Carpet Glam",
    category: "soft-glam",
    categoryLabel: "Soft Glam",
    image: afterImg,
    alt: "Custom soft glam makeup with sculpted brows and honey highlights",
    aspect: "portrait",
    featured: false,
    description: "Feathered brows, glowing cheekbones, and soft honey tones providing a fresh, youthful, and magnetic appearance.",
    details: {
      skinFinish: "Natural Dewy Glow",
      eyes: "Soft Bronzed Crease",
      lips: "Hydrating Rose Balm",
      idealFor: "Anniversaries, Pre-Wedding Shoots & Dinners"
    }
  }
];
