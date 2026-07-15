import celebAnniversary from "@/assets/celeb-anniversary.jpg";
import celebBabyShower from "@/assets/celeb-babyshower.jpg";
import celebBabyWelcome from "@/assets/new-welcome-baby.png";

import celebProposal from "@/assets/new-proposal.png";
import celebRomantic from "@/assets/celeb-romantic-date.jpg";
import celebNaming from "@/assets/celeb-naming.jpg";
import celebCar from "@/assets/celeb-romantic-date.jpg";
import pkgRomantic from "@/assets/pkg-romantic.jpg";
import pkgKids from "@/assets/pkg-kids.jpg";
import pkgAnniversary from "@/assets/sp-anniversary.jpg";
import specBirthday from "@/assets/spec-birthday.jpg";
import specTheme from "@/assets/spec-theme.jpg";
import specBaby from "@/assets/spec-baby.jpg";
import specProposal from "@/assets/new-proposal.png";
import specWedding from "@/assets/spec-wedding.jpg";
import specCorporate from "@/assets/spec-corporate.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";

export type Pkg = {
  slug: string;
  title: string;
  desc: string;
  price: number;
  img: string;
  gallery: string[];
  inclusions: string[];
  tag?: string;
  featured?: boolean;
};

export type Section = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  items: Pkg[];
};

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

// Common inclusion presets per category
const commonBase = [
  "Free delivery & setup at your location",
  "Professional in-house decor team",
  "Setup completed within 2–4 hours",
  "Post-event cleanup available on request",
];

const inclusionSets: Record<string, string[]> = {
  birthday: [
    "150+ premium latex & foil balloons",
    "Personalised “Happy Birthday” foil banner",
    "Curtain / fabric backdrop styling",
    "LED fairy light accents",
    "Cake table & prop styling",
    "Themed props and confetti balloons",
  ],
  anniversary: [
    "Heart-shaped balloon canopy over the bed",
    "Rose petal bed art & pathway",
    "Fresh floral & mood lighting",
    "Personalised name / date banner",
    "Curtain backdrop with LED accents",
    "Cake / champagne table styling",
  ],
  kids: [
    "Character themed foil balloons",
    "Balloon garland arch (150+ balloons)",
    "Themed canopy / tent styling",
    "Cake table centrepiece",
    "Photo booth props for kids",
    "Kid-safe materials & food-grade balloons",
  ],
  "welcome-baby": [
    "Pastel balloon garland arch",
    "“Welcome Home Baby” foil banner",
    "Floral canopy over cradle / bed",
    "Soft cloud & star accents",
    "Rose petal pathway",
    "Baby-safe, non-toxic decor materials",
  ],
  "baby-shower": [
    "Full balloon garland backdrop",
    "“Oh Baby / Mom-to-be” foil banner",
    "Themed cake table styling",
    "Fresh floral touches",
    "Photo booth props & sash",
    "Custom sign board (name / date)",
  ],
  ring: [
    "Giant ring-shaped balloon backdrop (6ft+)",
    "Custom foil name / initials",
    "Floral & fairy light accents",
    "Rose petal pathway",
    "Floral pathway styling",
    "Cake / proposal table styling",
  ],
  "romantic-room": [
    "Heart balloon canopy over the bed",
    "Rose petal bed art & pathway",
    "Fairy light & candle-free LED ambience",
    "Personalised love message banner",
    "Fresh floral accents",
    "Curated playlist speaker (on request)",
  ],
  proposal: [
    "Giant heart / ring balloon backdrop",
    "Rose petal 'Marry Me' floor art",
    "LED marquee 'Marry Me' sign",
    "Floral aisle & aisle petals",
    "Champagne & ring table styling",
    "Photographer coordination (on request)",
  ],
  haldi: [
    "Marigold & yellow floral backdrop",
    "Traditional dhoti / dupatta drapes",
    "Brass urli & petal floor decor",
    "Yellow balloon garland accents",
    "Personalised name / couple signage",
    "Chowki & seating styling for the couple",
  ],
  mehendi: [
    "Colourful phoolon-ki-chaadar backdrop",
    "Rajasthani umbrella & jhula styling",
    "Bright dupatta drapes & tassels",
    "Floor cushions & low seating decor",
    "Mehendi station styling",
    "Personalised couple signage",
  ],
  engagement: [
    "Grand floral & balloon stage backdrop",
    "Ring exchange platform styling",
    "Fresh floral arch entryway",
    "Sofa / throne couple seating",
    "LED accent & drape lighting",
    "Custom couple name signage",
  ],
  housewarming: [
    "Traditional marigold toran & entryway",
    "Rangoli & floor floral art",
    "Brass urli & diya (LED) accents",
    "Ganesha / Lakshmi themed corner",
    "Balloon garland with 'Griha Pravesh' banner",
    "Puja table & seating styling",
  ],
  corporate: [
    "Branded backdrop with logo integration",
    "Premium balloon columns & garland",
    "Stage / podium styling",
    "LED uplighting & spotlight ambience",
    "Reception & welcome signage",
    "On-site coordination during setup",
  ],
  welcome: [
    "Floral & balloon entryway arch",
    "Personalised 'Welcome Home' banner",
    "Rose petal pathway to the door",
    "Fairy light entrance accents",
    "Name / date custom signage",
    "Optional car / gate decoration",
  ],
};

const galleryPool = [
  gallery1, gallery2, gallery3, gallery4, gallery5,
  specBirthday, specTheme, specBaby, specProposal, specWedding,
  pkgRomantic, pkgKids, pkgAnniversary,
  celebAnniversary, celebBabyShower, celebBabyWelcome,
  celebProposal, celebRomantic, celebNaming, celebCar,
];

function galleryFor(img: string, sectionId: string, seed: number): string[] {
  const base = [img];
  const offset = (seed * 3) % galleryPool.length;
  for (let i = 0; i < galleryPool.length && base.length < 5; i++) {
    const pick = galleryPool[(offset + i) % galleryPool.length];
    if (!base.includes(pick)) base.push(pick);
  }
  // subtle per-section bias — put category-typical images first
  void sectionId;
  return base;
}

type RawPkg = Omit<Pkg, "slug" | "gallery" | "inclusions"> & {
  gallery?: string[];
  inclusions?: string[];
};

const rawSections: Array<Omit<Section, "items"> & { items: RawPkg[] }> = [
  {
    id: "birthday",
    eyebrow: "Birthday Collection",
    title: "Ultimate Birthday Decorations",
    subtitle: "From aesthetic pastels to metallic glam — birthday rooms crafted like a celebration film set.",
    items: [
      { title: "Rustic Brown Birthday Decoration", desc: "Bring home rustic vibes with this aesthetic birthday setup.", price: 4199, img: specBirthday, tag: "New" },
      { title: "Aesthetic Coffee & Carnation Birthday", desc: "Elegant boho brown decoration with fresh carnations.", price: 4999, img: gallery1, featured: true, tag: "Bestseller" },
      { title: "Metallic Black Birthday Decoration", desc: "Chic black & white balloons for a stylish celebration.", price: 2699, img: gallery3 },
      { title: "Glittering Gold & Silver Birthday", desc: "Step into elegance with black, gold & silver.", price: 2499, img: specTheme },
      { title: "Starry Blue & Purple Birthday", desc: "Sparkling blue & purple surprise for him.", price: 3249, img: gallery4 },
      { title: "Pink & Silver Birthday Decoration", desc: "Charming pink & silver for a magical evening.", price: 2749, img: pkgKids },
      { title: "Grey & Gold Birthday Decoration", desc: "Black, grey and gold balloon styling.", price: 3249, img: gallery5 },
      { title: "XO Hearts Surprise Room Décor", desc: "Turn any room into a love-filled celebration corner.", price: 3499, img: pkgRomantic },
    ],
  },
  {
    id: "anniversary",
    eyebrow: "Anniversary Collection",
    title: "Anniversary Room Decorations",
    subtitle: "Curated room setups to celebrate your love story — every year, deeper than the last.",
    items: [
      { title: "XO Hearts Surprise Room Décor", desc: "A love-filled surprise for your special someone.", price: 3499, img: pkgRomantic, tag: "Trending" },
      { title: "Beautiful Surprise Room Decoration", desc: "A dreamy room surprise for birthdays & anniversaries.", price: 3124, img: celebRomantic },
      { title: "Golden Sky Anniversary Decor", desc: "Gold & blue theme for a grand anniversary.", price: 4249, img: celebAnniversary, featured: true, tag: "Signature" },
      { title: "Red & Golden Anniversary Decor", desc: "Romantic red & gold room decor.", price: 3124, img: celebAnniversary },
      { title: "Lavender Anniversary Celebration", desc: "Shimmering lavender & rose balloon backdrop.", price: 4124, img: pkgAnniversary },
      { title: "Golden Boho Anniversary Theme", desc: "Graceful boho themed ring anniversary decor.", price: 7499, img: gallery2 },
      { title: "Butterflies & Flowers Anniversary", desc: "Love, memories & beautiful butterfly décor.", price: 8999, img: celebAnniversary },
    ],
  },
  {
    id: "kids",
    eyebrow: "Kids Collection",
    title: "Kids Birthday Decorations",
    subtitle: "Magical themes that turn your child's room into a story they'll remember forever.",
    items: [
      { title: "Magical Mermaid Birthday Decoration", desc: "Dive into a sea of fun with mermaids.", price: 2999, img: gallery4 },
      { title: "Life Under the Sea Birthday Decor", desc: "Aquatic birthday bash for little explorers.", price: 3499, img: gallery5 },
      { title: "Cuddly Teddy Bear Birthday Decor", desc: "Cutest teddy bear themed party for kids.", price: 4374, img: pkgKids, featured: true, tag: "Kid's Favourite" },
      { title: "Colourful Circus Carnival Decor", desc: "A comedy circus carnival right at home.", price: 5124, img: specTheme },
      { title: "Adventures of the Jungle Canopy", desc: "A jungle themed canopy decor for kids.", price: 3624, img: gallery1 },
      { title: "Aeroplane Theme Kids Canopy", desc: "Airplane canopy for your future pilot.", price: 3375, img: gallery3 },
      { title: "Colourful Baby Shark Canopy", desc: "Enter a magical Baby Shark underwater world.", price: 4250, img: specBirthday },
      { title: "Racing Car Themed Kids Canopy", desc: "Zoom into a racing car themed birthday.", price: 3499, img: celebCar },
    ],
  },
  {
    id: "welcome-baby",
    eyebrow: "Welcome Baby",
    title: "Welcome Baby Decorations",
    subtitle: "Soft palettes, floral canopies and delicate details for your baby's first homecoming.",
    items: [
      { title: "Colourful Garden Welcome Baby Girl", desc: "A butterfly themed garden burst of colour.", price: 13749, img: celebBabyWelcome, featured: true, tag: "Luxury" },
      { title: "Blue Welcome Baby Boy Theme", desc: "Welcome your baby boy with a serene blue decor.", price: 3124, img: celebNaming },
      { title: "Pink Welcome Baby Girl Theme", desc: "Pink dreams & silver linings for baby girl.", price: 2874, img: specBaby },
      { title: "Double Delight Twins Baby Decor", desc: "Ready to welcome two little ones.", price: 3124, img: celebBabyShower },
      { title: "Colourful Welcome Baby Girl", desc: "A heartwarming welcome ceremony setup.", price: 6249, img: pkgKids },
      { title: "Charming Oh Baby Balloon Arch", desc: "Add magic to your baby boy's arrival.", price: 2874, img: celebBabyWelcome },
      { title: "Pastel Welcome Baby Girl Decor", desc: "Soft pastels for baby girl's welcome.", price: 3374, img: specBaby },
      { title: "Rosy Wonders Baby Shower Decor", desc: "Whimsical rose gold themed setup.", price: 3749, img: celebBabyShower },
    ],
  },
  {
    id: "baby-shower",
    eyebrow: "Baby Shower",
    title: "Baby Shower Decorations",
    subtitle: "Celebrate the mom-to-be with hand-styled florals, balloon arches & keepsake corners.",
    items: [
      { title: "Buzzing Honey Bee Baby Shower", desc: "A bee-utiful beginning with honey bee decor.", price: 3499, img: celebBabyShower },
      { title: "Pastel Balloons Baby Shower", desc: "Shower the mom-to-be with pastel love.", price: 2874, img: specBaby, tag: "Popular" },
      { title: "Half & Half Baby Shower Decor", desc: "Half pink, half blue — the perfect reveal.", price: 2999, img: celebBabyWelcome },
      { title: "Exclusive Baby Shower Sequin Decor", desc: "Rose gold sequin theme, elevated.", price: 9374, img: gallery2, featured: true, tag: "Premium" },
      { title: "Pink & Purple Baby Shower Surprise", desc: "A sweet at-home baby shower surprise.", price: 2124, img: specBaby },
      { title: "Pastel Hues Baby Shower Decor", desc: "Soft, pretty & photo-ready ambience.", price: 2874, img: celebBabyShower },
      { title: "Rainbow & Clouds Baby Shower", desc: "Rainbow & cloud themed baby shower.", price: 3749, img: gallery1 },
      { title: "Green & Gold Baby Shower Decor", desc: "Botanical gold & green baby shower.", price: 3124, img: celebNaming },
    ],
  },
  {
    id: "ring",
    eyebrow: "Ring Decorations",
    title: "Ring & Proposal Decorations",
    subtitle: "Statement ring backdrops for proposals, sangeets and milestone anniversaries.",
    items: [
      { title: "Glittering Anniversary Ring Decor", desc: "A grand ring backdrop for anniversaries.", price: 9249, img: celebProposal, featured: true, tag: "Signature" },
      { title: "Pastel Balloon Ring Birthday Decor", desc: "Whimsical green, pink & purple ring.", price: 6874, img: pkgKids },
      { title: "Rose Gold Charm Birthday Decor", desc: "Perfect for a rosy birthday celebration.", price: 8749, img: celebRomantic },
      { title: "Romantic Love Ring Decoration", desc: "Every balloon whispers love.", price: 9124, img: specProposal, tag: "Bestseller" },
      { title: "Adorable Barbie Themed Decor", desc: "Pink Barbie wonderland for little girls.", price: 10624, img: gallery4 },
      { title: "Adorable Peppa Pig Birthday Decor", desc: "Cute Peppa Pig themed ring decoration.", price: 9124, img: specTheme },
      { title: "Mickey-Minnie Themed Ring Decor", desc: "Mickey & Minnie ring balloon decoration.", price: 8749, img: gallery3 },
      { title: "Colorful Themed Anniversary Ring", desc: "A grand colourful ring anniversary decor.", price: 23749, img: specWedding, tag: "Luxury" },
    ],
  },
  {
    id: "romantic-room",
    eyebrow: "Romantic Room",
    title: "Romantic Room Decorations",
    subtitle: "Turn any bedroom into a private, film-set style love story with hearts, petals and glow.",
    items: [
      { title: "XO Hearts Romantic Room Décor", desc: "A love-filled surprise for your special someone.", price: 3499, img: pkgRomantic, tag: "Bestseller", featured: true },
      { title: "Rose Petal Bed Romantic Setup", desc: "Fresh rose petal bed art with heart canopy.", price: 3999, img: celebRomantic },
      { title: "Fairy Light Dreamy Room Decor", desc: "A dreamy fairy light bedroom transformation.", price: 2999, img: pkgAnniversary },
      { title: "Red Rose Grand Room Decor", desc: "Grand red rose bedroom decor for special nights.", price: 4499, img: celebAnniversary, tag: "Premium" },
      { title: "Pastel Heart Romantic Setup", desc: "Soft pastel hearts and floral bedroom decor.", price: 3299, img: pkgRomantic },
      { title: "Balcony Romantic Dinner Decor", desc: "Private balcony romantic dinner styling.", price: 5499, img: celebRomantic },
    ],
  },
  {
    id: "proposal",
    eyebrow: "Proposal Decorations",
    title: "Proposal Decorations",
    subtitle: "Say it with a moment they'll never forget — grand backdrops, petals and marquee lights.",
    items: [
      { title: "Marry Me Marquee Proposal", desc: "LED Marry Me sign with floral aisle.", price: 8999, img: specProposal, tag: "Signature", featured: true },
      { title: "Rooftop Rose Proposal Decor", desc: "Rose petal rooftop proposal setup.", price: 12499, img: celebProposal },
      { title: "Heart Balloon Proposal Setup", desc: "Giant heart balloon backdrop with petals.", price: 6999, img: pkgRomantic },
      { title: "Garden Proposal Floral Arch", desc: "Fresh floral arch for outdoor proposals.", price: 14999, img: celebProposal, tag: "Luxury" },
      { title: "Beach-Style Proposal Decor", desc: "Sand, petals and lantern styling.", price: 10499, img: celebRomantic },
      { title: "Classic Ring Proposal Backdrop", desc: "Elegant ring backdrop with floral aisle.", price: 7499, img: specProposal },
    ],
  },
  {
    id: "haldi",
    eyebrow: "Haldi Ceremony",
    title: "Haldi Decorations",
    subtitle: "Bright marigolds, yellow drapes and traditional details for a joyful haldi ceremony.",
    items: [
      { title: "Marigold Haldi Backdrop", desc: "Traditional marigold backdrop with brass urli.", price: 6499, img: gallery1, tag: "Bestseller" },
      { title: "Boho Yellow Haldi Setup", desc: "Boho yellow drapes with floral accents.", price: 7999, img: gallery3, featured: true },
      { title: "Phoolon Ki Chaadar Haldi", desc: "Fresh flower canopy over the couple.", price: 9499, img: gallery2 },
      { title: "Rustic Haldi Chowki Decor", desc: "Rustic chowki styling with yellow florals.", price: 5499, img: celebNaming },
      { title: "Grand Marigold Haldi Stage", desc: "Grand marigold stage for haldi rituals.", price: 12499, img: specWedding, tag: "Premium" },
      { title: "Minimal Yellow Haldi Setup", desc: "Minimal yellow home haldi decor.", price: 3999, img: gallery4 },
    ],
  },
  {
    id: "mehendi",
    eyebrow: "Mehendi Night",
    title: "Mehendi Decorations",
    subtitle: "Colourful drapes, umbrellas and floor cushions for a vibrant mehendi celebration.",
    items: [
      { title: "Rajasthani Mehendi Umbrella Decor", desc: "Colourful umbrellas & tassels styling.", price: 8499, img: gallery2, tag: "Signature", featured: true },
      { title: "Boho Phoolon Ki Chaadar Mehendi", desc: "Floral canopy with low seating.", price: 9499, img: gallery1 },
      { title: "Jhula Mehendi Setup", desc: "Traditional jhula with fresh floral drapes.", price: 11499, img: specWedding },
      { title: "Pastel Mehendi Backdrop", desc: "Soft pastel backdrop with floral accents.", price: 5999, img: gallery4 },
      { title: "Grand Mehendi Stage", desc: "Grand mehendi stage with cushions & drapes.", price: 13999, img: gallery3, tag: "Premium" },
      { title: "Minimal Home Mehendi Decor", desc: "Cosy home mehendi styling.", price: 4499, img: celebNaming },
    ],
  },
  {
    id: "engagement",
    eyebrow: "Engagement Collection",
    title: "Engagement Decorations",
    subtitle: "Grand stages, floral arches and ring platforms styled for the perfect 'yes'.",
    items: [
      { title: "Floral Arch Engagement Stage", desc: "Fresh floral arch stage backdrop.", price: 14999, img: specWedding, tag: "Bestseller", featured: true },
      { title: "Royal Golden Engagement Decor", desc: "Royal gold & ivory engagement setup.", price: 18999, img: celebAnniversary, tag: "Luxury" },
      { title: "Pastel Bloom Engagement Stage", desc: "Pastel florals with elegant drapes.", price: 12499, img: pkgAnniversary },
      { title: "Ring Platform Engagement Decor", desc: "Dedicated ring exchange platform.", price: 7999, img: specProposal },
      { title: "Bohemian Engagement Setup", desc: "Boho drapes, pampas & warm lights.", price: 10999, img: gallery5 },
      { title: "Classic White & Rose Engagement", desc: "White drapes with fresh rose accents.", price: 13499, img: celebProposal },
    ],
  },
  {
    id: "housewarming",
    eyebrow: "Griha Pravesh",
    title: "Housewarming Decorations",
    subtitle: "Traditional torans, marigold entryways and puja styling for a blessed new home.",
    items: [
      { title: "Marigold Toran Entryway Decor", desc: "Traditional marigold entry decor.", price: 4499, img: gallery1, tag: "Bestseller" },
      { title: "Grand Griha Pravesh Setup", desc: "Grand entryway with rangoli & floral art.", price: 8999, img: specWedding, featured: true, tag: "Premium" },
      { title: "Rangoli & Diya Housewarming", desc: "Rangoli, LED diyas & floral touches.", price: 3499, img: gallery3 },
      { title: "Puja Room Decoration", desc: "Puja mandap styling with fresh florals.", price: 5499, img: gallery2 },
      { title: "Balloon & Floral Housewarming", desc: "Modern balloon + floral entry decor.", price: 4999, img: gallery4 },
      { title: "Minimal Home Blessings Decor", desc: "Minimal & elegant home decor package.", price: 2999, img: celebNaming },
    ],
  },
  {
    id: "corporate",
    eyebrow: "Corporate Events",
    title: "Corporate Event Decorations",
    subtitle: "Branded backdrops, stage styling and premium lighting for launches, conferences and galas.",
    items: [
      { title: "Branded Backdrop & Stage Setup", desc: "Custom logo backdrop with stage styling.", price: 24999, img: specCorporate, tag: "Signature", featured: true },
      { title: "Product Launch Decor", desc: "High-impact product launch styling.", price: 34999, img: specCorporate, tag: "Premium" },
      { title: "Annual Gala Night Decor", desc: "Elegant gala night ballroom decor.", price: 44999, img: specWedding, tag: "Luxury" },
      { title: "Conference Reception Decor", desc: "Welcome zone & registration styling.", price: 14999, img: specCorporate },
      { title: "Team Offsite Party Decor", desc: "Fun offsite party balloon & prop decor.", price: 9999, img: gallery5 },
      { title: "Office Celebration Decor", desc: "In-office birthday / milestone decor.", price: 4999, img: gallery3 },
    ],
  },
  {
    id: "welcome",
    eyebrow: "Welcome Home",
    title: "Welcome Decorations",
    subtitle: "Warm entryway decor to welcome home newlyweds, family or a loved one returning after long.",
    items: [
      { title: "Welcome Home Bride Decor", desc: "Elegant welcome for the new bride.", price: 6499, img: celebNaming, tag: "Bestseller", featured: true },
      { title: "Balloon Entryway Welcome", desc: "Grand balloon entry arch decor.", price: 3999, img: gallery4 },
      { title: "Floral Welcome Home Setup", desc: "Fresh floral entry & pathway decor.", price: 5499, img: gallery1 },
      { title: "Groom Welcome Decoration", desc: "Traditional groom welcome styling.", price: 4999, img: specWedding },
      { title: "Baby Welcome Home Decor", desc: "Soft pastel welcome for the newborn.", price: 3499, img: celebBabyWelcome },
      { title: "Return Home Surprise Decor", desc: "Surprise welcome home celebration.", price: 2999, img: pkgRomantic },
    ],
  },
];


const usedSlugs = new Set<string>();
export const sections: Section[] = rawSections.map((s) => ({
  ...s,
  items: s.items.map((item, i) => {
    let slug = slugify(item.title);
    while (usedSlugs.has(slug)) slug = `${slug}-${s.id}`;
    usedSlugs.add(slug);
    return {
      ...item,
      slug,
      gallery: item.gallery ?? galleryFor(item.img, s.id, i + 1),
      inclusions: item.inclusions ?? [...inclusionSets[s.id], ...commonBase],
    };
  }),
}));

export const allPackages: Array<Pkg & { sectionId: string; sectionTitle: string; eyebrow: string }> =
  sections.flatMap((s) =>
    s.items.map((p) => ({ ...p, sectionId: s.id, sectionTitle: s.title, eyebrow: s.eyebrow }))
  );

export function findPackage(slug: string) {
  return allPackages.find((p) => p.slug === slug);
}

export function relatedPackages(slug: string, sectionId: string, limit = 4) {
  return allPackages
    .filter((p) => p.sectionId === sectionId && p.slug !== slug)
    .slice(0, limit);
}

export const inr = (n: number) => "₹" + n.toLocaleString("en-IN");
