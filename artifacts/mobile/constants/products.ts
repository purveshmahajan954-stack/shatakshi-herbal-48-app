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
  // ── Diabetes, Thyroid, BP & Cholesterol Care ──────────────────────────────
  {
    id: "th-z-capsules",
    name: "TH-Z Capsules 28 Caps",
    categoryId: "diabetes-care",
    tagline: "28 Capsules",
    description:
      "TH-Z Capsules revitalize the body and support healthy thyroid function. A carefully balanced Ayurvedic formulation crafted to help regulate metabolism and restore natural energy levels.",
    price: 499,
    mrp: 600,
    rating: 4.7,
    reviewCount: 276,
    badge: "Bestseller",
    image: { uri: "https://shatakshiherbal.com/product-images/product-27_new.webp" },
  },
  {
    id: "active-risup",
    name: "Active Risup 14 Caps",
    categoryId: "diabetes-care",
    tagline: "14 Capsules",
    description:
      "Active Risup supports healthy liver function and natural detoxification, formulated with bhumi amla and kutki to help the body cleanse and recover from daily toxin exposure.",
    price: 340,
    mrp: 410,
    rating: 4.7,
    reviewCount: 184,
    badge: "New",
    image: { uri: "https://i.ibb.co/dwK17Kq3/6809664d8b24.png" },
  },
  {
    id: "bp-tablets",
    name: "BP Tablets 30 tab",
    categoryId: "diabetes-care",
    tagline: "30 Tablets",
    description:
      "BP Tablets strengthen immunity and help maintain healthy blood pressure with powerful herbal extracts, formulated with traditional Ayurvedic herbs trusted for generations.",
    price: 230,
    mrp: 280,
    rating: 4.8,
    reviewCount: 312,
    badge: "Bestseller",
    image: { uri: "https://i.ibb.co/mCX0HTLn/000b1577d27e.png" },
  },
  {
    id: "active-glucose",
    name: "Active Glucose 10 Caps",
    categoryId: "diabetes-care",
    tagline: "10 Capsules",
    description:
      "Active Glucose capsules support healthy blood sugar metabolism with a blend of bitter gourd, jamun seed and gudmar leaf, helping the body maintain balanced glucose levels naturally.",
    price: 149,
    mrp: 180,
    rating: 4.7,
    reviewCount: 298,
    badge: "New",
    image: { uri: "https://shatakshiherbal.com/product-images/product-8_new.webp" },
  },
  {
    id: "active-z-tablets",
    name: "Active Z Tablets 28 Tabs",
    categoryId: "diabetes-care",
    tagline: "28 Tablets",
    description:
      "Active Z Tablets are a comprehensive Ayurvedic formula supporting overall metabolic health, helping regulate blood sugar and cholesterol levels with a blend of potent herbal extracts.",
    price: 450,
    mrp: 540,
    rating: 4.7,
    reviewCount: 387,
    image: { uri: "https://shatakshiherbal.com/product-images/product-6_new.webp" },
  },
  {
    id: "active-green-xt",
    name: "Active Green XT 10 Caps",
    categoryId: "diabetes-care",
    tagline: "10 Capsules",
    description:
      "Active Green XT is an advanced green herbal capsule formula that supports healthy glucose metabolism and thyroid function, crafted from nature's finest botanical extracts.",
    price: 159,
    mrp: 190,
    rating: 4.9,
    reviewCount: 612,
    image: { uri: "https://shatakshiherbal.com/product-images/product-7_new.webp" },
  },
  {
    id: "active-z-premium-tablets",
    name: "Active Z Premium Tablets 30 tab",
    categoryId: "diabetes-care",
    tagline: "30 Tablets",
    description:
      "Active Z Premium is an upgraded Ayurvedic formulation that supports blood sugar balance, healthy cholesterol and thyroid wellness with a premium blend of concentrated herbal extracts.",
    price: 450,
    mrp: 540,
    rating: 4.6,
    reviewCount: 198,
    image: { uri: "https://i.ibb.co/Swd3kjH4/db5ebda38fb3.png" },
  },
  {
    id: "active-green",
    name: "Active Green 10 Caps",
    categoryId: "diabetes-care",
    tagline: "10 Capsules",
    description:
      "Active Green capsules harness the power of green herbal extracts to support daily metabolic balance, helping the body maintain healthy glucose levels and sustained energy throughout the day.",
    price: 149,
    mrp: 180,
    rating: 4.9,
    reviewCount: 412,
    image: { uri: "https://shatakshiherbal.com/product-images/product-3_new.webp" },
  },

  // ── Arthritis & Joint Pain Care ───────────────────────────────────────────
  {
    id: "dr-sona-vatplus-capsule",
    name: "Dr SonaVatplus Capsule 28 Caps",
    categoryId: "arthritis-care",
    tagline: "28 Capsules",
    description:
      "Formulated for Vata-dominant body types, this blend of ashwagandha and brahmi supports grounding, warmth and steady energy while easing joint stiffness through the day.",
    price: 340,
    mrp: 410,
    rating: 4.6,
    reviewCount: 178,
    image: { uri: "https://shatakshiherbal.com/product-images/product-15_new.webp" },
  },
  {
    id: "camrop-capsule",
    name: "Camro P Capsule 28 Caps",
    categoryId: "arthritis-care",
    tagline: "28 Capsules",
    description:
      "Camro P Capsule is a powerful herbal formula targeting joint pain and muscle inflammation, made with shallaki and nirgundi extracts to restore comfort and mobility.",
    price: 340,
    mrp: 410,
    rating: 4.8,
    reviewCount: 267,
    badge: "Bestseller",
    image: { uri: "https://shatakshiherbal.com/product-images/product-33.webp" },
  },
  {
    id: "aaram-oil",
    name: "Aaram oil 50ml",
    categoryId: "arthritis-care",
    tagline: "50ml Massage Oil",
    description:
      "Aaram Oil is a warming herbal massage oil infused with mahanarayan and nirgundi extracts to soothe sore joints and tired muscles after a long, active day.",
    price: 199,
    mrp: 240,
    rating: 4.7,
    reviewCount: 289,
    image: { uri: "https://i.ibb.co/0y7YZmZ2/0ebb1797590b.png" },
  },
  {
    id: "vatmaniras",
    name: "Vatmaniras 14gm",
    categoryId: "arthritis-care",
    tagline: "14gm Herbal Preparation",
    description:
      "Vatmaniras is a concentrated traditional Ayurvedic preparation specifically formulated to pacify aggravated Vata, providing deep relief from chronic joint pain and stiffness.",
    price: 1000,
    mrp: 1200,
    rating: 4.5,
    reviewCount: 178,
    image: { uri: "https://i.ibb.co/GQCVjCYV/a25f1a75ff9b.png" },
  },
  {
    id: "vayam-powder",
    name: "Vayam powder 14gm",
    categoryId: "arthritis-care",
    tagline: "14gm Herbal Powder",
    description:
      "Vayam Powder is a special Ayurvedic blend that supports healthy joint lubrication and bone strength, formulated for daily use to maintain flexibility and ease of movement.",
    price: 170,
    mrp: 210,
    rating: 4.9,
    reviewCount: 345,
    image: { uri: "https://shatakshiherbal.com/product-images/product-2_new.webp" },
  },
  {
    id: "vedantak-powder",
    name: "Vedantak Powder 120 gm",
    categoryId: "arthritis-care",
    tagline: "120gm Herbal Powder",
    description:
      "Vedantak Powder is a potent churna of shallaki, nirgundi and ashwagandha that helps ease joint stiffness and supports mobility, made using traditional slow-processing methods for maximum potency.",
    price: 450,
    mrp: 540,
    rating: 4.7,
    reviewCount: 423,
    image: { uri: "https://shatakshiherbal.com/product-images/product-1_new.webp" },
  },
  {
    id: "artho-z-capsule",
    name: "Artho Z Capsule 28 Caps",
    categoryId: "arthritis-care",
    tagline: "28 Capsules",
    description:
      "Artho Z Capsule provides comprehensive joint support with a synergistic blend of herbs that reduce inflammation, nourish cartilage and improve overall joint health and flexibility.",
    price: 340,
    mrp: 410,
    rating: 4.6,
    reviewCount: 174,
    image: { uri: "https://shatakshiherbal.com/product-images/product-9_new.webp" },
  },
  {
    id: "cartilage-capsules",
    name: "Cartilage Capsules 10 Caps",
    categoryId: "arthritis-care",
    tagline: "10 Capsules",
    description:
      "Cartilage Capsules are specially formulated to support healthy cartilage regeneration and joint cushioning, ideal for those experiencing wear-related joint discomfort.",
    price: 230,
    mrp: 280,
    rating: 4.6,
    reviewCount: 156,
    badge: "New",
    image: { uri: "https://shatakshiherbal.com/product-images/product-35.webp" },
  },
  {
    id: "dr-sona-artho-capsule",
    name: "Dr. Sona Artho Capsule 28 Caps",
    categoryId: "arthritis-care",
    tagline: "28 Capsules",
    description:
      "Dr. Sona Artho Capsule is a premium joint care formulation with concentrated herbal extracts that provides long-lasting relief from arthritis pain and supports healthy bone density.",
    price: 349,
    mrp: 420,
    rating: 4.9,
    reviewCount: 389,
    image: { uri: "https://shatakshiherbal.com/product-images/product-14_new.webp" },
  },
  {
    id: "arthovit-m-tablets",
    name: "Arthovit M Tablets 28 Tabs",
    categoryId: "arthritis-care",
    tagline: "28 Tablets",
    description:
      "Arthovit M Tablets combine essential micronutrients with herbal joint-support ingredients to nourish bones and joints, reducing inflammation and restoring comfortable movement.",
    price: 429,
    mrp: 520,
    rating: 4.7,
    reviewCount: 221,
    image: { uri: "https://shatakshiherbal.com/product-images/product-10_new.webp" },
  },
  {
    id: "vat-nashak-capsules",
    name: "Vat Nashak Capsules 28 Caps",
    categoryId: "arthritis-care",
    tagline: "28 Capsules",
    description:
      "Vat Nashak Capsules are a targeted Ayurvedic formula to pacify Vata dosha, offering relief from nerve pain, joint stiffness and overall musculoskeletal discomfort.",
    price: 340,
    mrp: 410,
    rating: 4.6,
    reviewCount: 198,
    badge: "New",
    image: { uri: "https://shatakshiherbal.com/product-images/product-28_new.webp" },
  },

  // ── Liver & Kidney Care ───────────────────────────────────────────────────
  {
    id: "kft-xl-2",
    name: "KFT XL 2 10Caps",
    categoryId: "liver-kidney-care",
    tagline: "10 Capsules",
    description:
      "KFT XL 2 is a kidney function support formula with punarnava and gokshura that gently helps the kidneys filter efficiently and maintain healthy fluid balance in the body.",
    price: 139,
    mrp: 170,
    rating: 4.5,
    reviewCount: 145,
    image: { uri: "https://shatakshiherbal.com/product-images/product-40.webp" },
  },
  {
    id: "livona-syrup",
    name: "Livona Syrup 200ml",
    categoryId: "liver-kidney-care",
    tagline: "200ml Syrup",
    description:
      "Livona Syrup is a classic liver tonic made with bhumi amla, kutki and kalmegh that stimulates bile production, supports detoxification and helps restore healthy liver enzyme levels.",
    price: 599,
    mrp: 720,
    rating: 4.8,
    reviewCount: 267,
    badge: "Bestseller",
    image: { uri: "https://i.ibb.co/TD3DGMqt/2f2a78234127.png" },
  },
  {
    id: "kidney-cure-capsule",
    name: "Kidney Cure Capsule 10 Caps",
    categoryId: "liver-kidney-care",
    tagline: "10 Capsules",
    description:
      "Kidney Cure Capsule supports optimal kidney health and urinary tract function with a blend of varuna, punarnava and gokshura, helping flush toxins and maintain healthy kidney output.",
    price: 171,
    mrp: 210,
    rating: 4.7,
    reviewCount: 198,
    image: { uri: "https://shatakshiherbal.com/product-images/product-39.webp" },
  },
  {
    id: "liver-maniras",
    name: "Liver Maniras 28gm",
    categoryId: "liver-kidney-care",
    tagline: "28gm Herbal Preparation",
    description:
      "Liver Maniras is a concentrated Ayurvedic liver preparation formulated with rare herbs to support deep hepatic detoxification, regenerate liver cells and restore optimal liver function.",
    price: 1000,
    mrp: 1200,
    rating: 4.6,
    reviewCount: 234,
    badge: "New",
    image: { uri: "https://i.ibb.co/1G9Mm6VH/45c879a48c34.png" },
  },

  // ── Asthma & Allergy Care ─────────────────────────────────────────────────
  {
    id: "aarogya-jeevan",
    name: "Aarogya Jeevan 50gm",
    categoryId: "asthma-allergy-care",
    tagline: "50gm Herbal Powder",
    description:
      "Aarogya Jeevan is a time-tested herbal powder with tulsi, mulethi and vasaka that strengthens respiratory immunity, eases breathing discomfort and supports overall lung health.",
    price: 249,
    mrp: 300,
    rating: 4.8,
    reviewCount: 521,
    badge: "Bestseller",
    image: { uri: "https://shatakshiherbal.com/product-images/product-5_new.webp" },
  },
  {
    id: "asthometic-capsule",
    name: "Asthometic Capsule 28 Caps",
    categoryId: "asthma-allergy-care",
    tagline: "28 Capsules",
    description:
      "Asthometic Capsule is a comprehensive respiratory formula combining vasaka, haridra and mulethi to reduce bronchial inflammation, ease asthmatic episodes and improve breathing capacity.",
    price: 420,
    mrp: 510,
    rating: 4.8,
    reviewCount: 456,
    badge: "Bestseller",
    image: { uri: "https://shatakshiherbal.com/product-images/product-11_new.webp" },
  },
  {
    id: "alcbmaniras",
    name: "AlcbManiras 14gm",
    categoryId: "asthma-allergy-care",
    tagline: "14gm Herbal Preparation",
    description:
      "AlcbManiras is a concentrated Ayurvedic preparation formulated to reduce allergic sensitivity and support the immune system in managing chronic respiratory and skin allergies.",
    price: 1000,
    mrp: 1200,
    rating: 4.6,
    reviewCount: 234,
    image: { uri: "https://i.ibb.co/w30WGfb/b2367d83d71f.png" },
  },
  {
    id: "max-cold-powder",
    name: "Max Cold Powder 30gm",
    categoryId: "asthma-allergy-care",
    tagline: "30gm Herbal Powder",
    description:
      "Max Cold Powder is a fast-acting herbal powder that provides quick relief from cold, congestion and sinus discomfort, made with a warming blend of ginger, black pepper and clove extracts.",
    price: 230,
    mrp: 280,
    rating: 4.7,
    reviewCount: 289,
    badge: "Bestseller",
    image: { uri: "https://i.ibb.co/FktNj221/011f35084c0b.png" },
  },

  // ── Skin, Psoriasis & Charm Rog Care ──────────────────────────────────────
  {
    id: "charma-r-capsule",
    name: "Charma R Capsule 14 Caps",
    categoryId: "skin-care",
    tagline: "14 Capsules",
    description:
      "Charma R Capsule is designed to support healthy skin and a natural glow from within, blending neem, manjistha and turmeric extracts trusted in Ayurveda for centuries.",
    price: 399,
    mrp: 480,
    rating: 4.5,
    reviewCount: 167,
    image: { uri: "https://shatakshiherbal.com/product-images/product-13_new.webp" },
  },
  {
    id: "skin-z-capsules",
    name: "Skin Z Capsules 14 Caps",
    categoryId: "skin-care",
    tagline: "14 Capsules",
    description:
      "Skin Z Capsules work from within to address the root causes of skin conditions, combining neem, khadir and manjistha to purify the blood and support clear, healthy skin.",
    price: 280,
    mrp: 340,
    rating: 4.8,
    reviewCount: 312,
    image: { uri: "https://shatakshiherbal.com/product-images/product-26_new.webp" },
  },
  {
    id: "purify-capsules",
    name: "Purify Capsules 14 Caps",
    categoryId: "skin-care",
    tagline: "14 Capsules",
    description:
      "Purify Capsules deliver a powerful blood-purifying action with neem and sariva extracts, helping clear stubborn skin conditions like acne, eczema and psoriasis from the root.",
    price: 349,
    mrp: 420,
    rating: 4.8,
    reviewCount: 289,
    badge: "Bestseller",
    image: { uri: "https://shatakshiherbal.com/product-images/product-22_new.webp" },
  },
  {
    id: "glow-up-capsules",
    name: "Glow up Capsules 20 Caps",
    categoryId: "skin-care",
    tagline: "20 Capsules",
    description:
      "Glow Up Capsules nourish skin from within with a potent blend of saffron, manjistha and vitamin C-rich amla, promoting a radiant, even-toned complexion and youthful glow.",
    price: 499,
    mrp: 600,
    rating: 4.8,
    reviewCount: 367,
    image: { uri: "https://shatakshiherbal.com/product-images/product-20_new.webp" },
  },
  {
    id: "derma-cream",
    name: "Derma cream 15gm",
    categoryId: "skin-care",
    tagline: "15gm Cream",
    description:
      "Derma Cream is a therapeutic herbal cream that soothes irritated, inflamed skin and aids recovery from psoriasis and chronic skin conditions with a gentle, natural formulation.",
    price: 230,
    mrp: 280,
    rating: 4.9,
    reviewCount: 523,
    badge: "Bestseller",
    image: { uri: "https://i.ibb.co/DPJc6Zpy/878e3af1d2bf.png" },
  },
  {
    id: "beauty-cream",
    name: "Beauty cream 30 gm",
    categoryId: "skin-care",
    tagline: "30gm Cream",
    description:
      "Beauty Cream is a luxurious herbal face cream with sandalwood, rose and saffron extracts that brightens the complexion, reduces dark spots and nourishes skin for a healthy glow.",
    price: 1000,
    mrp: 1200,
    rating: 4.7,
    reviewCount: 234,
    image: { uri: "https://i.ibb.co/PGk3yyvq/2f05fcd6622b.png" },
  },

  // ── Piles Care ────────────────────────────────────────────────────────────
  {
    id: "arsho-f-powder",
    name: "Arsho F Powder 50gm",
    categoryId: "piles-care",
    tagline: "50gm Powder",
    description:
      "Arsho F Powder supports healthy digestion and provides gentle, lasting relief from piles discomfort, made with a traditional Ayurvedic blend of nagkesar and haritaki.",
    price: 399,
    mrp: 480,
    rating: 4.6,
    reviewCount: 156,
    image: { uri: "https://shatakshiherbal.com/product-images/product-4_new.webp" },
  },

  // ── Acidity & Digestive Care ──────────────────────────────────────────────
  {
    id: "multicomplex",
    name: "Multicomplex 14 Caps",
    categoryId: "acidity-care",
    tagline: "14 Capsules",
    description:
      "Multicomplex is a comprehensive digestive wellness capsule combining essential vitamins, minerals and herbal digestive enzymes to support gut health and reduce acidity.",
    price: 249,
    mrp: 300,
    rating: 4.7,
    reviewCount: 245,
    badge: "Bestseller",
    image: { uri: "https://shatakshiherbal.com/product-images/product-17_new.webp" },
  },
  {
    id: "safa-amrit-capsules",
    name: "Safa Amrit Capsules 28 Caps",
    categoryId: "acidity-care",
    tagline: "28 Capsules",
    description:
      "Safa Amrit Capsules are a gentle yet effective digestive cleanser with triphala and isabgol that promote regular bowel movements, reduce bloating and support a healthy gut ecosystem.",
    price: 249,
    mrp: 300,
    rating: 4.7,
    reviewCount: 234,
    image: { uri: "https://shatakshiherbal.com/product-images/product-24_new.webp" },
  },
  {
    id: "power-booster-powder",
    name: "Power Booster Powder 50gm",
    categoryId: "acidity-care",
    tagline: "50gm Powder",
    description:
      "Power Booster Powder is an energy and digestive support formula made with amla, ashwagandha and shatavari to boost strength, improve digestion and enhance overall vitality.",
    price: 340,
    mrp: 410,
    rating: 4.6,
    reviewCount: 212,
    badge: "New",
    image: { uri: "https://shatakshiherbal.com/product-images/product-21_new.webp" },
  },
  {
    id: "acidic-capsules",
    name: "Acidic Capsules 28 Caps",
    categoryId: "acidity-care",
    tagline: "28 Capsules",
    description:
      "Acidic Capsules provide fast-acting relief from hyperacidity, heartburn and gastric discomfort with a cooling blend of mulethi, saunf and amla that neutralises excess stomach acid.",
    price: 320,
    mrp: 390,
    rating: 4.8,
    reviewCount: 234,
    badge: "Bestseller",
    image: { uri: "https://i.ibb.co/tgDRtdn/97762c70fad2.png" },
  },

  // ── Wellness & Weakness Care ──────────────────────────────────────────────
  {
    id: "cnz-capsule",
    name: "C.N.Z Capsule 28 Caps",
    categoryId: "wellness-care",
    tagline: "28 Capsules",
    description:
      "C.N.Z Capsule is a holistic nerve and brain tonic made with brahmi, shankhpushpi and ashwagandha to support mental clarity, reduce stress and strengthen the nervous system.",
    price: 399,
    mrp: 480,
    rating: 4.6,
    reviewCount: 142,
    image: { uri: "https://shatakshiherbal.com/product-images/product-12_new.webp" },
  },
  {
    id: "omega-capsule",
    name: "Omega Capsule 4 Caps",
    categoryId: "wellness-care",
    tagline: "4 Capsules",
    description:
      "Omega Capsule delivers a potent dose of essential omega fatty acids from herbal sources to support heart health, brain function and overall cellular wellness.",
    price: 211,
    mrp: 260,
    rating: 4.5,
    reviewCount: 134,
    badge: "New",
    image: { uri: "https://shatakshiherbal.com/product-images/product-16_new.webp" },
  },
  {
    id: "multishine-capsules",
    name: "Multishine Capsules 14 Caps",
    categoryId: "wellness-care",
    tagline: "14 Capsules",
    description:
      "Multishine Capsules are a daily wellness supplement combining essential vitamins and herbal adaptogens to enhance energy, immunity and overall physical and mental wellbeing.",
    price: 249,
    mrp: 300,
    rating: 4.6,
    reviewCount: 198,
    image: { uri: "https://shatakshiherbal.com/product-images/product-19_new.webp" },
  },
  {
    id: "multi-vitamin",
    name: "Multivitamin Capsules 28 caps",
    categoryId: "wellness-care",
    tagline: "28 Capsules",
    description:
      "Multivitamin Capsules provide a complete spectrum of essential vitamins and minerals to bridge daily nutritional gaps, support immune function and maintain peak energy levels.",
    price: 340,
    mrp: 410,
    rating: 4.6,
    reviewCount: 178,
    image: { uri: "https://shatakshiherbal.com/product-images/product-50.webp" },
  },

  // ── Vital, Vitiligo & Sex Power ───────────────────────────────────────────
  {
    id: "rx-gold-capsules",
    name: "RX Gold Capsules 14 Caps",
    categoryId: "vital-care",
    tagline: "14 Capsules",
    description:
      "RX Gold Capsules are a premium vitality formula with shilajit, safed musli and ashwagandha that boosts stamina, supports male reproductive health and restores natural energy and confidence.",
    price: 599,
    mrp: 720,
    rating: 4.5,
    reviewCount: 167,
    image: { uri: "https://shatakshiherbal.com/product-images/product-23_new.webp" },
  },
  {
    id: "x-gold-powder",
    name: "X gold Powder 14gm",
    categoryId: "vital-care",
    tagline: "14gm Powder",
    description:
      "X Gold Powder is a premium Ayurvedic formulation supporting vitality, digestion, skin health and detoxification with a concentrated blend of rare gold-class herbal ingredients.",
    price: 1000,
    mrp: 1200,
    rating: 4.7,
    reviewCount: 312,
    badge: "Bestseller",
    image: { uri: "https://i.ibb.co/cX7dcR2G/c8bea0cb3232.png" },
  },

  // ── Stree Rog Care ────────────────────────────────────────────────────────
  {
    id: "sakhi-sundari",
    name: "Sakhi Sundari 28 Tabs",
    categoryId: "stree-care",
    tagline: "28 Tablets",
    description:
      "Sakhi Sundari offers natural beauty and wellness support for women, combining shatavari, ashoka and lodhra to balance hormones, enhance skin radiance and boost everyday vitality.",
    price: 340,
    mrp: 410,
    rating: 4.6,
    reviewCount: 145,
    badge: "New",
    image: { uri: "https://shatakshiherbal.com/assets/product-53-B_J58su8.webp" },
  },
  {
    id: "shat-prabha-tab",
    name: "Shat Prabha Tab",
    categoryId: "stree-care",
    tagline: "Herbal Tablets",
    description:
      "Shat Prabha Tab is rich in Vitamin C and powerful herbal extracts that boost immunity, strengthen hair roots and support women's overall health and radiance.",
    price: 799,
    mrp: 960,
    rating: 4.8,
    reviewCount: 345,
    image: { uri: "https://shatakshiherbal.com/assets/product-52-NsUojCm1.webp" },
  },
  {
    id: "femina-careers-tablets",
    name: "Femina Careers tablets",
    categoryId: "stree-care",
    tagline: "Herbal Tablets",
    description:
      "Femina Careers Tablets are a specialized women's wellness formula that helps regulate blood sugar levels naturally while supporting hormonal balance and reproductive health.",
    price: 1000,
    mrp: 1200,
    rating: 4.6,
    reviewCount: 189,
    image: { uri: "https://shatakshiherbal.com/assets/product-53-B_J58su8.webp" },
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
