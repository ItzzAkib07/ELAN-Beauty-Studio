import heroImg from '../assets/images/hero-editorial-elan.jpg';
import portraitImg from '../assets/images/artist-portrait-sakshi.jpg';
import bridalImg from '../assets/images/bridal-makeup-elan.jpg';
import softGlamImg from '../assets/images/soft-glam-makeup-elan.jpg';
import editorialImg from '../assets/images/editorial-fashion-elan.jpg';
import traditionalImg from '../assets/images/traditional-bridal-elan.jpg';
import afterImg from '../assets/images/transformation-after-elan.jpg';
import salonImg from '../assets/images/luxury-salon-interior-elan.jpg';

export const portfolioCategories = [
  { id: "all", label: "All Portfolio" },
  { id: "bridal", label: "Bridal Artistry" },
  { id: "glam", label: "Occasion & Soft Glam" },
  { id: "editorial", label: "Editorial & Fashion" },
  { id: "salon-direction", label: "Salon Management & Spaces" },
  { id: "creative", label: "Aesthetic Direction" }
];

export const portfolioItems = [
  {
    id: "port-1",
    title: "Heritage Royal Bridal Couture",
    category: "bridal",
    categoryLabel: "Bridal Artistry",
    image: traditionalImg,
    location: "Pune Grand Palace",
    description: "Opulent bridal styling featuring handcrafted gold jewelry, rich crimson hues, and flawless radiant base.",
    clientType: "Bridal Client",
    year: "2025"
  },
  {
    id: "port-2",
    title: "Vogue-Inspired High Fashion Campaign",
    category: "editorial",
    categoryLabel: "Editorial & Fashion",
    image: editorialImg,
    location: "Studio 11 Creative Sets",
    description: "Avant-garde editorial shoot with sharp winged lines and rich berry lips for high-fashion digital publication.",
    clientType: "Fashion Editorial",
    year: "2025"
  },
  {
    id: "port-3",
    title: "Luxury Salon Space & Experience Architecture",
    category: "salon-direction",
    categoryLabel: "Salon Management & Spaces",
    image: salonImg,
    location: "Baner & Aundh Flagships",
    description: "End-to-end luxury salon operations management, interior aesthetics alignment (INIFD background), and workflow optimization.",
    clientType: "Salon Leadership",
    year: "2024 - 2026"
  },
  {
    id: "port-4",
    title: "Luminous Soft Glam & Natural Contour",
    category: "glam",
    categoryLabel: "Occasion & Soft Glam",
    image: softGlamImg,
    location: "Koregaon Park Soirée",
    description: "Subtle bronzed contours and velvety nude lips designed for an intimate engagement celebration.",
    clientType: "Engagement Client",
    year: "2025"
  },
  {
    id: "port-5",
    title: "The Artist at Work: Brand Leadership",
    category: "creative",
    categoryLabel: "Aesthetic Direction",
    image: portraitImg,
    location: "ÉLAN Studio, Pune",
    description: "Sakshi Choudhry leading staff training and personalized beauty consultations with 7+ years of operational mastery.",
    clientType: "Studio Leadership",
    year: "2026"
  },
  {
    id: "port-6",
    title: "Contemporary Glow Bride",
    category: "bridal",
    categoryLabel: "Bridal Artistry",
    image: bridalImg,
    location: "JW Marriott Pune",
    description: "Modern bride with dewy skin, soft brown smokey eye, and royal velvet lehenga styling.",
    clientType: "Bridal Client",
    year: "2024"
  },
  {
    id: "port-7",
    title: "4K HD Studio Beauty Capture",
    category: "editorial",
    categoryLabel: "Editorial & Fashion",
    image: heroImg,
    location: "Pune Digital Creator Studio",
    description: "High-definition makeup calibrated for cinematic video capture and brand campaign shoots.",
    clientType: "Commercial Campaign",
    year: "2025"
  },
  {
    id: "port-8",
    title: "Before & After Transformation Series",
    category: "glam",
    categoryLabel: "Occasion & Soft Glam",
    image: afterImg,
    location: "ÉLAN Beauty Studio",
    description: "Demonstrating how tailored skin prep and micro-blending elevate natural beauty with effortless refinement.",
    clientType: "Signature Makeover",
    year: "2025"
  }
];
