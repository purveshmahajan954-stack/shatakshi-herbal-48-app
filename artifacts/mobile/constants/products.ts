export type Category = {
  id: string;
  name: string;
  shortName: string;
  description: string;
  icon: keyof typeof import("@expo/vector-icons").Feather.glyphMap;
  image: any;
};

export type Product = {
  id: string;
  name: string;
  categoryId: string;
  tagline: string;
  description: string;
  price: number;
  mrp: number;
  rating: number;
  reviewCount: number;
  badge?: "Bestseller" | "New";
  image: any;
};

export const categories: Category[] = [
  {
    id: "diabetes-care",
    name: "Diabetes, Thyroid, BP & Cholesterol Care",
    shortName: "Diabetes & Thyroid",
    description: "Natural management formulas",
    icon: "activity",
    image: require("../assets/images/cat-diabetes.png"),
  },
  {
    id: "arthritis-care",
    name: "Arthritis & Joint Pain Care",
    shortName: "Joint & Arthritis",
    description: "Pure herbal churnas",
    icon: "wind",
    image: require("../assets/images/cat-arthritis.png"),
  },
  {
    id: "liver-kidney-care",
    name: "Liver & Kidney Care",
    shortName: "Liver & Kidney",
    description: "Authentic detox formulations",
    icon: "shield",
    image: require("../assets/images/cat-liver.png"),
  },
  {
    id: "asthma-allergy-care",
    name: "Asthma & Allergy Care",
    shortName: "Asthma & Allergy",
    description: "Fresh herbal extracts",
    icon: "cloud",
    image: require("../assets/images/cat-asthma.png"),
  },
  {
    id: "skin-care",
    name: "Skin, Psoriasis & Charm Rog Care",
    shortName: "Skin Care",
    description: "Daily wellness essentials",
    icon: "sun",
    image: require("../assets/images/cat-skin.png"),
  },
  {
    id: "piles-care",
    name: "Piles Care",
    shortName: "Piles Care",
    description: "Natural piles relief",
    icon: "heart",
    image: require("../assets/images/cat-wellness.png"),
  },
  {
    id: "acidity-care",
    name: "Acidity & Digestive Care",
    shortName: "Digestive Care",
    description: "Gut & digestion support",
    icon: "coffee",
    image: require("../assets/images/cat-wellness.png"),
  },
  {
    id: "wellness-care",
    name: "Wellness & Weakness Care",
    shortName: "Wellness Care",
    description: "Strength & vitality boost",
    icon: "zap",
    image: require("../assets/images/cat-wellness.png"),
  },
  {
    id: "vital-care",
    name: "Vital, Vitiligo & Sex Power",
    shortName: "Vitality Care",
    description: "Vitality & confidence",
    icon: "star",
    image: require("../assets/images/cat-wellness.png"),
  },
  {
    id: "stree-care",
    name: "Stree Rog Care",
    shortName: "Women's Wellness",
    description: "Women's wellness range",
    icon: "feather",
    image: require("../assets/images/cat-skin.png"),
  },
];

export const products: Product[] = [
  {
    id: "th-z-capsules",
    name: "TH-Z Capsules",
    categoryId: "diabetes-care",
    tagline: "28 Capsules",
    description:
      "TH-Z Capsules revitalize the body and support healthy thyroid function. A carefully balanced Ayurvedic formulation crafted to help regulate metabolism and restore natural energy levels.",
    price: 499,
    mrp: 599,
    rating: 4.7,
    reviewCount: 276,
    badge: "Bestseller",
    image: require("../assets/images/cat-diabetes.png"),
  },
  {
    id: "madhu-niyantran-churna",
    name: "Madhu Niyantran Churna",
    categoryId: "diabetes-care",
    tagline: "100g Powder",
    description:
      "A traditional blend of bitter gourd, jamun seed and gudmar leaf, formulated to support healthy blood sugar levels and overall metabolic balance as part of a daily wellness routine.",
    price: 349,
    mrp: 420,
    rating: 4.5,
    reviewCount: 142,
    image: require("../assets/images/cat-diabetes.png"),
  },
  {
    id: "sandhi-vat-churna",
    name: "Sandhi Vat Churna",
    categoryId: "arthritis-care",
    tagline: "100g Herbal Churna",
    description:
      "A potent churna of shallaki, nirgundi and ashwagandha that helps ease joint stiffness and supports mobility. Made using traditional slow-processing methods for maximum potency.",
    price: 329,
    mrp: 399,
    rating: 4.6,
    reviewCount: 198,
    badge: "Bestseller",
    image: require("../assets/images/cat-arthritis.png"),
  },
  {
    id: "arth-relief-oil",
    name: "Arth Relief Oil",
    categoryId: "arthritis-care",
    tagline: "100ml Massage Oil",
    description:
      "A warming herbal oil infused with mahanarayan and nirgundi extracts to soothe sore joints and muscles. Ideal for a comforting massage after a long day.",
    price: 279,
    mrp: 349,
    rating: 4.4,
    reviewCount: 91,
    image: require("../assets/images/cat-arthritis.png"),
  },
  {
    id: "active-risup",
    name: "Active Risup",
    categoryId: "liver-kidney-care",
    tagline: "14 Capsules",
    description:
      "Active Risup supports healthy liver function and natural detoxification, formulated with bhumi amla and kutki to help the body cleanse and recover from daily toxin exposure.",
    price: 340,
    mrp: 399,
    rating: 4.7,
    reviewCount: 184,
    badge: "New",
    image: require("../assets/images/cat-liver.png"),
  },
  {
    id: "kidney-care-plus",
    name: "Kidney Care Plus",
    categoryId: "liver-kidney-care",
    tagline: "28 Capsules",
    description:
      "A gentle herbal formulation with punarnava and gokshura to support healthy kidney function and natural fluid balance in the body.",
    price: 449,
    mrp: 520,
    rating: 4.5,
    reviewCount: 87,
    image: require("../assets/images/cat-liver.png"),
  },
  {
    id: "shwas-mukti-syrup",
    name: "Shwas Mukti Syrup",
    categoryId: "asthma-allergy-care",
    tagline: "200ml Syrup",
    description:
      "A soothing syrup made with tulsi, mulethi and vasaka to ease breathing discomfort and support respiratory wellness during seasonal changes.",
    price: 199,
    mrp: 250,
    rating: 4.5,
    reviewCount: 133,
    image: require("../assets/images/cat-asthma.png"),
  },
  {
    id: "allergy-shield-capsule",
    name: "Allergy Shield Capsule",
    categoryId: "asthma-allergy-care",
    tagline: "30 Capsules",
    description:
      "Formulated with haridra and neem to help the body build natural resistance against seasonal allergies and sinus discomfort.",
    price: 259,
    mrp: 310,
    rating: 4.3,
    reviewCount: 74,
    image: require("../assets/images/cat-asthma.png"),
  },
  {
    id: "charma-r-capsule",
    name: "Charma R Capsule",
    categoryId: "skin-care",
    tagline: "14 Capsules",
    description:
      "Charma R Capsule is designed to support healthy skin and a natural glow from within, blending neem, manjistha and turmeric extracts trusted in Ayurveda for centuries.",
    price: 399,
    mrp: 460,
    rating: 4.5,
    reviewCount: 167,
    badge: "Bestseller",
    image: require("../assets/images/cat-skin.png"),
  },
  {
    id: "sandal-glow-cream",
    name: "Sandal Glow Cream",
    categoryId: "skin-care",
    tagline: "50g Cream",
    description:
      "A nourishing daily cream with sandalwood and rose extracts that calms irritated skin and restores a natural, healthy radiance.",
    price: 229,
    mrp: 280,
    rating: 4.4,
    reviewCount: 102,
    image: require("../assets/images/cat-skin.png"),
  },
  {
    id: "arsho-f-powder",
    name: "Arsho F Powder",
    categoryId: "piles-care",
    tagline: "50g Powder",
    description:
      "Arsho F Powder helps support healthy digestion and provides gentle relief from piles discomfort, made with a traditional Ayurvedic blend passed down for generations.",
    price: 399,
    mrp: 460,
    rating: 4.6,
    reviewCount: 156,
    image: require("../assets/images/cat-wellness.png"),
  },
  {
    id: "piles-relief-tablet",
    name: "Piles Relief Tablet",
    categoryId: "piles-care",
    tagline: "30 Tablets",
    description:
      "A gentle herbal tablet combining nagkesar and haritaki to ease discomfort and support natural healing of piles.",
    price: 269,
    mrp: 320,
    rating: 4.3,
    reviewCount: 58,
    image: require("../assets/images/cat-wellness.png"),
  },
  {
    id: "amlapitta-churna",
    name: "Amlapitta Churna",
    categoryId: "acidity-care",
    tagline: "100g Powder",
    description:
      "A cooling churna of amla, mulethi and saunf that soothes acidity and supports smoother, more comfortable digestion after meals.",
    price: 189,
    mrp: 230,
    rating: 4.5,
    reviewCount: 121,
    image: require("../assets/images/cat-wellness.png"),
  },
  {
    id: "pachan-vardhak-tablet",
    name: "Pachan Vardhak Tablet",
    categoryId: "acidity-care",
    tagline: "60 Tablets",
    description:
      "Supports healthy digestion and appetite with a blend of hing, ajwain and jeera, ideal for those with a slow or sensitive digestive system.",
    price: 219,
    mrp: 260,
    rating: 4.4,
    reviewCount: 98,
    image: require("../assets/images/cat-wellness.png"),
  },
  {
    id: "multicomplex",
    name: "Multicomplex",
    categoryId: "wellness-care",
    tagline: "14 Capsules",
    description:
      "A daily multivitamin blend of essential vitamins and minerals designed to bridge nutrient gaps and support overall vitality as part of a balanced lifestyle.",
    price: 320,
    mrp: 380,
    rating: 4.6,
    reviewCount: 210,
    badge: "Bestseller",
    image: require("../assets/images/cat-wellness.png"),
  },
  {
    id: "dr-sona-vatplus-capsule",
    name: "Dr SonaVatplus Capsule",
    categoryId: "wellness-care",
    tagline: "28 Capsules",
    description:
      "Formulated for Vata-dominant body types, this blend of ashwagandha and brahmi supports grounding, warmth and steady energy through the day.",
    price: 340,
    mrp: 400,
    rating: 4.6,
    reviewCount: 178,
    image: require("../assets/images/cat-wellness.png"),
  },
  {
    id: "vigor-plus-capsule",
    name: "Vigor Plus Capsule",
    categoryId: "vital-care",
    tagline: "20 Capsules",
    description:
      "A confidence-boosting Ayurvedic formulation with shilajit and safed musli, crafted to support stamina, strength and overall vitality.",
    price: 599,
    mrp: 699,
    rating: 4.5,
    reviewCount: 143,
    image: require("../assets/images/cat-wellness.png"),
  },
  {
    id: "vitiligo-care-oil",
    name: "Vitiligo Care Oil",
    categoryId: "vital-care",
    tagline: "100ml Oil",
    description:
      "A specialised herbal oil blend traditionally used to support even skin tone and pigment health when applied consistently as part of a daily routine.",
    price: 349,
    mrp: 420,
    rating: 4.2,
    reviewCount: 46,
    image: require("../assets/images/cat-wellness.png"),
  },
  {
    id: "stree-tonic",
    name: "Stree Tonic",
    categoryId: "stree-care",
    tagline: "200ml Tonic",
    description:
      "A nourishing herbal tonic crafted with shatavari and ashoka to support women's hormonal balance and overall wellness through every life stage.",
    price: 299,
    mrp: 350,
    rating: 4.6,
    reviewCount: 132,
    badge: "Bestseller",
    image: require("../assets/images/cat-skin.png"),
  },
  {
    id: "mahila-shakti-capsule",
    name: "Mahila Shakti Capsule",
    categoryId: "stree-care",
    tagline: "30 Capsules",
    description:
      "A gentle daily supplement combining shatavari and lodhra to support women's reproductive health and everyday vitality.",
    price: 379,
    mrp: 440,
    rating: 4.4,
    reviewCount: 69,
    image: require("../assets/images/cat-skin.png"),
  },
];

export const getCategoryById = (id: string) =>
  categories.find((c) => c.id === id);

export const getProductById = (id: string) =>
  products.find((p) => p.id === id);

export const getProductsByCategory = (categoryId: string) =>
  products.filter((p) => p.categoryId === categoryId);

export const getFeaturedProducts = () =>
  products.filter((p) => p.badge === "Bestseller");

export const business = {
  name: "Shatakshi Herbal",
  tagline: "Pure Herbal Healing for Modern Life",
  phone: "+919754468444",
  phoneDisplay: "+91 97544 68444",
  whatsapp: "919754468444",
  email: "sunil.katiya06@gmail.com",
  address:
    "By-pass Road, near Chitragupt School, Shivaji Ward, Gadarwara, Madhya Pradesh 487551",
  website: "https://shatakshiherbal.com",
  rating: 4.9,
  customerCount: "10,000+",
};
