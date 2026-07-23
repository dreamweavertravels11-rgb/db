/**
 * ─────────────────────────────────────────────────────────────────────────
 * CENTRAL PACKAGE + PRICE DATA SOURCE
 * ─────────────────────────────────────────────────────────────────────────
 * Every collection page, sub-collection page and the package modal reads
 * from this single file. To change a price, description, inclusion list,
 * duration, area or add-on — edit it ONCE here and it updates everywhere.
 *
 * Images are auto-loaded from `src/assets/pkg/<category>/<subcategory>/*`
 * (or `src/assets/pkg/<category>/_/*` for categories with no subcategory),
 * so dropping a new photo into the right folder automatically creates a
 * new package card — no code changes required.
 * ─────────────────────────────────────────────────────────────────────────
 */

export type CategoryId =
  | "birthday"
  | "anniversary"
  | "proposal"
  | "baby-shower"
  | "naming-ceremony"
  | "haldi"
  | "mehendi"
  | "ring-ceremony"
  | "welcome-baby";

export type SubcategoryDef = { id: string; label: string };

export type CategoryDef = {
  id: CategoryId;
  label: string;
  eyebrow: string;
  tagline: string;
  banner: string;
  subcategories?: SubcategoryDef[];
  basePrice: number;
  priceStep: number;
  duration: string;
  area: string;
  includes: string[];
  addons: string[];
};

export type PackageItem = {
  id: string;
  name: string;
  category: CategoryId;
  categoryLabel: string;
  subcategory?: string;
  subcategoryLabel?: string;
  image: string;
  price: number;
  description: string;
  includes: string[];
  duration: string;
  area: string;
  addons: string[];
  notes?: string;
};

/* ---------------------------------------------------------------------- */
/* Image loading                                                          */
/* ---------------------------------------------------------------------- */

const imageModules = import.meta.glob<string>("/src/assets/pkg/**/*.{jpg,jpeg,png}", {
  eager: true,
  import: "default",
});

const bannerModules = import.meta.glob<string>("/src/assets/pkg/_banners/*.{jpg,jpeg,png}", {
  eager: true,
  import: "default",
});

function bannerFor(categoryId: string): string {
  const entry = Object.entries(bannerModules).find(([path]) => path.includes(`/_banners/${categoryId}.`));
  return entry?.[1] ?? Object.values(bannerModules)[0];
}

/** Returns [path, image] pairs sorted for a given category/subcategory folder, skipping the banners folder. */
function imagesFor(categoryId: string, subId?: string): string[] {
  const folder = `/src/assets/pkg/${categoryId}/${subId ?? "_"}/`;
  return Object.entries(imageModules)
    .filter(([path]) => path.startsWith(folder))
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, img]) => img);
}

/* ---------------------------------------------------------------------- */
/* Category configuration — edit copy, pricing & inclusions here          */
/* ---------------------------------------------------------------------- */

/* Per-package overrides: index matches the sorted image order in the folder */
type PackageOverride = { name: string; price: number; includes: string[]; addons: string[]; notes?: string };
const packageOverrides: Record<string, (PackageOverride | undefined)[]> = {
  "baby-shower": [
    // index 0 — bs-11.png — Package 1
    {
      name: "Gender Neutral Baby Shower Balloon",
      price: 3499,
      includes: [
        "BABY SHOWER Golden Foil Balloon Set",
        "Baby Boy Stroller Foil Balloon",
        "Baby Girl Stroller Foil Balloon",
        "It's a Boy Foot Foil Balloon",
        "It's a Girl Foot Foil Balloon",
        "It's a Boy Bottle Foil Balloon",
        "It's a Girl Bottle Foil Balloon",
        "Golden Moon Foil Balloon",
        "Baby Cartoon Foil Balloons – Boy & Girl",
        "Mom To Be Sash",
        "Pink, Blue, White Latex Balloons for Frame",
        "Setup & Installation by Professionals",
      ],
      addons: ["Photographer (2 hrs)", "Mom-to-be sash & crown upgrade", "Games & props kit", "Premium cake table styling"],
    },
    // index 1 — bs-12.png — Package 2
    {
      name: "Oh Baby Orange White Balloon Arch",
      price: 2999,
      includes: [
        "OH BABY Silver Foil Balloon Set",
        "Baby on Moon Foil Balloon",
        "Silver Star Foil Balloons",
        "Orange Latex Balloons",
        "White Latex Balloons",
        "Peach/Pink Latex Balloons",
        "Fairy LED Lights",
        "Setup & Installation by Professionals",
      ],
      addons: ["Photographer (2 hrs)", "Mom-to-be sash & crown upgrade", "Games & props kit", "Premium cake table styling"],
    },
    // index 2 — bs-13.png — Package 3
    {
      name: "Oh Baby Gender Reveal Pink Blue Balloon Decor",
      price: 3799,
      includes: [
        "OH BABY Silver Foil Balloon Set",
        "Baby on Moon Foil Balloon",
        "IT'S A GIRL Bottle Foil Balloon",
        "Rainbow Card Cutouts",
        "Baby Stroller Card Cutout",
        "Airplane Card Cutouts",
        "Silver Star Foil Balloon",
        "Blue Tinsel Curtain",
        "Pink Tinsel Curtain",
        "Blue Latex Balloons",
        "Pink Latex Balloons",
        "White Latex Balloons",
        "Fairy LED Lights",
        "Setup & Installation by Professionals",
      ],
      addons: ["Photographer (2 hrs)", "Mom-to-be sash & crown upgrade", "Games & props kit", "Premium cake table styling"],
    },
    // index 3 — bs-14.png — Package 4
    {
      name: "Oh Baby Gender Reveal Gold Pink Blue Balloon",
      price: 3999,
      includes: [
        "OH BABY Golden Foil Balloon Set",
        "It's a Girl Foot Foil Balloon",
        "It's a Boy Foot Foil Balloon",
        "Gold Chrome Latex Balloons",
        "Light Blue Latex Balloons",
        "Baby Pink Latex Balloons",
        "White Latex Balloons",
        "Peach Latex Balloon",
        "Confetti Clear Balloons",
        "Fairy LED Lights",
        "Setup & Installation by Professionals",
      ],
      addons: ["Photographer (2 hrs)", "Mom-to-be sash & crown upgrade", "Games & props kit", "Premium cake table styling"],
    },
    // index 4 — bs-15.png — Package 5
    {
      name: "Baby Shower Pink Purple Blue Balloon Arch",
      price: 3599,
      includes: [
        "Baby Shower Golden Banner",
        "It's a Boy Round Foil Balloons",
        "It's a Girl Round Foil Balloons",
        "Baby Boy Foil Balloon",
        "Baby Girl Foil Balloon",
        "Pink Latex Balloons",
        "Purple Latex Balloons",
        "Light Blue Latex Balloons",
        "Rose Gold Chrome Latex Balloons",
        "Setup & Installation by Professionals",
      ],
      addons: ["Photographer (2 hrs)", "Mom-to-be sash & crown upgrade", "Games & props kit", "Premium cake table styling"],
    },
    // index 5 — bs-16.png — Package 6
    {
      name: "It's A Girl Pink Gold Baby Shower Balloon",
      price: 3299,
      includes: [
        "BABY SHOWER Golden Foil Balloon Set",
        "It's a Girl Bottle Foil Balloon",
        "It's a Girl Foot Foil Balloon",
        "Baby Girl Foil Balloon",
        "Pink Latex Balloons",
        "Baby Pink Latex Balloons",
        "White Latex Balloons",
        "Gold Chrome Latex Balloons",
        "Rose Gold Chrome Latex Balloons",
        "Pink Foil Curtain Backdrop",
        "Artificial Flower Bouquets",
        "Setup & Installation by Professionals",
      ],
      addons: ["Photographer (2 hrs)", "Mom-to-be sash & crown upgrade", "Games & props kit", "Premium cake table styling"],
    },
    // index 6 — bs-17.png — Package 7
    {
      name: "Gender Reveal Baby Shower Pink Blue Gold Balloon",
      price: 3499,
      includes: [
        "Baby Shower Golden Banner",
        "Baby Boy Stroller Foil Balloon",
        "Baby Girl Stroller Foil Balloon",
        "It's a Boy Bottle Foil Balloon",
        "It's a Girl Bottle Foil Balloon",
        "It's a Boy Foot Foil Balloon",
        "It's a Girl Foot Foil Balloon",
        "Baby Boy Foil Balloon",
        "Baby Girl Foil Balloon",
        "Mom To Be Sash",
        "Pink Latex Balloons",
        "Light Blue Latex Balloons",
        "Gold Chrome Latex Balloons",
        "Confetti Clear Balloons",
        "Setup & Installation by Professionals",
      ],
      addons: ["Photographer (2 hrs)", "Mom-to-be sash & crown upgrade", "Games & props kit", "Premium cake table styling"],
    },
    // index 7 — bs-18.png — Package 8
    {
      name: "Baby Girl Pink Blue Gold Baby Shower Balloon",
      price: 3899,
      includes: [
        "Baby Shower Golden Banner",
        "Baby Girl Heart Foil Balloon",
        "It's a Girl Foot Foil Balloon",
        "Baby Girl Foil Balloon",
        "Pink Latex Balloons",
        "Light Blue Latex Balloons",
        "Gold Chrome Latex Balloons",
        "White Round Backdrop Board",
        "Pink Blue Striped Backdrop",
        "Confetti Clear Balloons",
        "Setup & Installation by Professionals",
      ],
      addons: ["Photographer (2 hrs)", "Mom-to-be sash & crown upgrade", "Games & props kit", "Premium cake table styling"],
    },
    // index 8 — bs-19.png — Package 9
    {
      name: "Royal Baby Shower Gold White Pink Balloon",
      price: 4299,
      includes: [
        "Baby Shower Golden Banner",
        "Baby Girl Heart Foil Balloon",
        "It's a Girl Foot Foil Balloon",
        "Baby Girl Foil Balloon",
        "Pink Latex Balloons",
        "Light Blue Latex Balloons",
        "Gold Chrome Latex Balloons",
        "White Round Backdrop Board",
        "Pink Blue Striped Backdrop",
        "Confetti Clear Balloons",
        "Setup & Installation by Professionals",
      ],
      addons: ["Photographer (2 hrs)", "Mom-to-be sash & crown upgrade", "Games & props kit", "Premium cake table styling"],
    },
  ],
  "birthday-adult": [
    {
      name: "Classic Black & Gold Birthday Decor",
      price: 1499,
      includes: [
        "Black & Gold Chrome Balloon Arch – 8×8 ft",
        "Gold Fringe Curtain Backdrop – Full Wall",
        '"HAPPY BIRTHDAY" Black Banner with Gold Text',
        "Gold & Black Balloon Border – Top Row",
        "Floor Balloon Scatter – Black & Gold Mix",
        "Professional Setup & Installation",
        "Duration: 4 Hours",
      ],
      addons: ["Photographer (2 hrs)", "LED name board upgrade", "Premium cake table styling"],
    },
    {
      name: "Royal Balloon Room Decor",
      price: 1699,
      includes: [
        "Red & Gold Chrome Balloon Arch – 8×8 ft",
        "Gold Fringe Curtain Backdrop – 2 Panels",
        '"HAPPY BIRTHDAY" Red Foil Letter Balloons',
        "Gold Star Foil Balloons × 2",
        "Floor Balloon Scatter – Red & Gold Mix",
        "Professional Setup & Installation",
        "Duration: 4 Hours",
      ],
      addons: ["Photographer (2 hrs)", "LED name board upgrade", "Premium cake table styling"],
    },
    {
      name: "Royal Butterfly Birthday Decor",
      price: 1999,
      includes: [
        "Purple & Gold Chrome Balloon Arch – 8×8 ft",
        "Golden Foil Fringe Curtain Backdrop – Full Wall",
        "Giant Butterfly Foil Balloon – Purple & Gold",
        '"HAPPY BIRTHDAY" Black Banner with Gold Text',
        "Balloon Clusters – Purple, Lavender & Gold",
        "Floor Scatter Balloons",
        "Professional Setup & Installation",
        "Duration: 4 Hours",
      ],
      addons: ["Photographer (2 hrs)", "LED name board upgrade", "Premium cake table styling"],
    },
    {
      name: "Black Gold Mustard 20th Birthday",
      price: 4999,
      includes: [
        "Black, Gold, Mustard & Pearl White Balloon Arch",
        "Black + Gold Fringe Curtain Backdrop",
        "HAPPY BIRTHDAY Silver Foil Letter Balloons",
        "20 Number Silver Foil Balloons",
        "Star Foil Balloons – Gold + Silver",
        "Balloon Flower Bunches – Mustard with Black Center",
        "Decorative Golden Pedestal with Flower Vase",
        "Floor Balloon Scatter",
        "Setup & Installation by Professionals",
      ],
      addons: ["Photographer (2 hrs)", "LED name board upgrade", "Premium cake table styling", "Extra character cutouts"],
    },
    {
      name: "Black White Gold Star Birthday",
      price: 3999,
      includes: [
        "Black, White & Gold Chrome Balloon Arch",
        "Black Fringe Curtain Backdrop with Fairy Lights",
        "Happy Birthday Silver Cursive Foil Balloons",
        "Gold Star Foil Balloons",
        "Silver Star Foil Balloons",
        "Decorative Cylinder Pedestals",
        "Floor Balloon Scatter",
        "Setup & Installation by Professionals",
      ],
      addons: ["Photographer (2 hrs)", "LED name board upgrade", "Premium cake table styling", "Extra character cutouts"],
    },
    {
      name: "Terracotta Boho Birthday",
      price: 5999,
      includes: [
        "Terracotta, Peach, Nude & Cream Balloon Garland",
        "Boho Rainbow Backdrop Panel with 'Happy Birthday' Text",
        "Cluster Balloon Bouquet on Top Right",
        "Floor Balloon Decor",
        "Setup & Installation by Professionals",
      ],
      addons: ["Transparent Balloon Boxes (Add-on – contact team)", "Photographer (2 hrs)", "LED name board upgrade", "Premium cake table styling"],
    },
    {
      name: "Blue Purple Galaxy Birthday",
      price: 3499,
      includes: [
        "Blue, Purple, Light Blue & White Balloon Arch",
        "Silver Fringe Curtain Backdrop",
        "HAPPY BIRTHDAY Paper Banner – Light Blue with Gold Text",
        "Number Foil Balloon on Balloon Column",
        "Star Foil Balloons – Blue",
        "Silver Starburst Foil Balloons",
        "Confetti Balloons – Clear with Blue Dots",
        "Floor Balloon Scatter",
        "Setup & Installation by Professionals",
      ],
      addons: ["Photographer (2 hrs)", "LED name board upgrade", "Premium cake table styling", "Extra character cutouts"],
    },
    {
      name: "Black Gold Silver Classic Birthday",
      price: 2999,
      includes: [
        "Black, Gold, Silver & White Balloon Decor",
        "HAPPY BIRTHDAY Silver Foil Letter Balloons",
        "Fairy Light Curtain Backdrop",
        "Tassel Garland – Black, Gold, Silver & Grey",
        "Heart Shape Silver Foil Balloon Bouquets",
        "Top Balloon Row – Black, Gold, Silver, White",
        "Floor Balloon Scatter",
        "Setup & Installation by Professionals",
      ],
      addons: ["Photographer (2 hrs)", "LED name board upgrade", "Premium cake table styling", "Extra character cutouts"],
    },
    {
      name: "Pink Purple Neon Birthday Wall",
      price: 5499,
      includes: [
        "Full Balloon Wall – Pink, Purple, Lavender & Silver Chrome",
        "Happy Birthday Neon LED Sign",
        "Silver Heart Foil Balloon",
        "Silver Cube Foil Balloon",
        "Balloon Installation Frame",
        "Setup & Installation by Professionals",
      ],
      addons: ["Photographer (2 hrs)", "LED name board upgrade", "Premium cake table styling", "Extra character cutouts"],
    },
    {
      name: "Sage Green Gold Rustic Birthday",
      price: 6499,
      includes: [
        "Sage Green, White, Gold & Rose Gold Balloon Garland",
        "Wooden Panel Backdrop with 'Happy Birthday' White Acrylic Sign",
        "Artificial Green Vine Leaves",
        "Decorative Golden Pedestal with Flower Vase",
        "White & Cream Artificial Flower Arrangement",
        "Setup & Installation by Professionals",
      ],
      addons: ["Photographer (2 hrs)", "LED name board upgrade", "Premium cake table styling", "Extra character cutouts"],
    },
    {
      name: "Pink White Silver Fringe Birthday",
      price: 3999,
      includes: [
        "Pink, Baby Pink & White Balloon Arch",
        "Silver Fringe Curtain Backdrop with Fairy Lights",
        "HAPPY BIRTHDAY Peach Banner with Gold Text",
        "Confetti Balloons – Clear with Silver Confetti",
        "Pink Paper Fan Decor",
        "Large Paper Flower with Pedestal",
        "Mini Teddy + Disco Balls",
        "Floor Balloon Scatter",
        "Setup & Installation by Professionals",
      ],
      addons: ["Photographer (2 hrs)", "LED name board upgrade", "Premium cake table styling", "Extra character cutouts"],
    },
  ],
  "anniversary": [
    // ── index 0 — anniversary-08.png ──
    {
      name: "Royal Blue Gold Anniversary Arch",
      price: 6499,
      includes: [
        "Blue, Gold & White Organic Balloon Arch",
        "Teal + Gold Fringe Curtain Backdrop",
        "Happy Anniversary Gold Foil Banner",
        "Silver Butterfly Cutout Decor",
        "LED Fairy Light Accents",
        "Floor Balloon Scatter",
        "Setup & Installation by Professionals",
      ],
      addons: ["Photographer (2 hrs)", "Fresh flower bouquet", "LED name board upgrade", "Candlelight dinner setup"],
    },
    // ── index 1 — anniversary-09.png ──
    {
      name: "Budget Balloon Bash Package",
      price: 1499,
      includes: [
        "100 Latex Balloons – Pastel / Metallic / Chrome as per theme",
        '"HAPPY BIRTHDAY" or "HAPPY ANNIVERSARY" Silver Foil – 1 Set',
        "Basic Balloon Arch / Wall – 8 ft to 10 ft",
        "Floor Balloon Scatter – 20–30 pcs",
        "Tape + Setup + Installation by Professionals",
        "Duration: 3–4 Hours",
      ],
      addons: ["Photographer (2 hrs)", "Fresh flower bouquet", "LED name board upgrade", "Candlelight dinner setup"],
    },
    // ── index 2 — anniversary-10.png ──
    {
      name: "Lavender Silver 1st Anniversary",
      price: 5999,
      includes: [
        "Purple, Pink & Silver Chrome Balloon Garland",
        "Happy Anniversary Silver Foil Letter Balloons",
        "'1' Silver Foil Number Balloon",
        "LED Fairy Light Curtain Backdrop",
        "Butterfly & Heart Foil Balloons",
        "Floor Balloon Scatter",
        "Setup & Installation by Professionals",
      ],
      addons: ["Photographer (2 hrs)", "Fresh flower bouquet", "Champagne table styling", "LED name board upgrade"],
    },
    // ── index 2 — anniversary-10.png ──
    {
      name: "Red Romantic Anniversary Setup",
      price: 7999,
      includes: [
        "Red & Silver Chrome Balloon Arch",
        "Shimmer Sequin Panel Backdrop",
        "Happy Anniversary Neon LED Sign",
        "Artificial Rose Flower Clusters",
        "Silver Butterfly Cutout Decor",
        "Decorative Cake Pedestal",
        "Setup & Installation by Professionals",
      ],
      addons: ["Photographer (2 hrs)", "Fresh rose bouquet", "Champagne table styling", "Extra neon sign upgrade"],
    },
    // ── index 3 — anniversary-11.png ──
    {
      name: "Mint Green Better Together",
      price: 6999,
      includes: [
        "Mint Chrome, White & Lavender Balloon Arch",
        "LED Fairy Light Curtain Backdrop",
        "'Better Together' Neon LED Sign",
        "Artificial Flower Bunches",
        "2 Decorative Cylinder Pedestals with Florals",
        "Setup & Installation by Professionals",
      ],
      addons: ["Photographer (2 hrs)", "Fresh flower bouquet", "Champagne table styling", "Candlelight dinner setup"],
    },
    // ── index 4 — anniversary-12.png ──
    {
      name: "Golden Peach 25th Anniversary",
      price: 8999,
      includes: [
        "Peach, Gold & White Balloon Ring Hoop",
        "Happy Anniversary Neon LED Sign",
        "'25' LED Marquee Number Lights",
        "Golden Palm Leaf Decor",
        "Decorative Lanterns",
        "LED Fairy Light Strings",
        "Setup & Installation by Professionals",
      ],
      addons: ["Photographer (2 hrs)", "Fresh flower bouquet", "Champagne table styling", "Premium neon sign upgrade"],
    },
    // ── index 5 — anniversary-13.png ──
    {
      name: "White Gold Elegant Anniversary",
      price: 4999,
      includes: [
        "White & Gold Balloon Arch",
        "Golden Fringe Curtain Backdrop",
        "Happy Anniversary Gold Foil Banner",
        "LED Fairy Light Accents",
        "Confetti Balloons",
        "Golden Palm Leaf Decor",
        "Setup & Installation by Professionals",
      ],
      addons: ["Photographer (2 hrs)", "Fresh flower bouquet", "Cake (1 kg, on request)", "Candlelight dinner setup"],
    },
    // ── index 6 — anniversary-14.png ──
    {
      name: "Rose Gold Black Anniversary",
      price: 5499,
      includes: [
        "Rose Gold, Black & White Balloon Garland",
        "Rose Gold Fringe Curtain Backdrop",
        "Happy Anniversary Foil Letter Balloons",
        "Confetti Balloons",
        "Fairy Light Accents",
        "Setup & Installation by Professionals",
      ],
      addons: ["Photographer (2 hrs)", "Fresh flower bouquet", "LED name board upgrade", "Candlelight dinner setup"],
    },
    // ── index 7 — anniversary-15.png ──
    {
      name: "Pink Rose Anniversary Balloons",
      price: 3499,
      includes: [
        "Pink & Silver Ceiling Balloons",
        "Happy Anniversary Foil Balloons",
        "Star Foils",
        "Fairy Lights",
        "Floor Balloon Pool",
      ],
      notes: "Simple & Cute Setup. Best for Room Decoration",
      addons: ["Photographer (2 hrs)", "Fresh flower bouquet", "Premium cake table styling", "Candlelight dinner setup"],
    },
    // ── index 8 — anniversary-16.png ──
    {
      name: "Red Hearts Romantic Night",
      price: 6999,
      includes: [
        "Red Balloon Arch",
        "Heart Foil Balloons",
        "Ring Foil Balloon",
        "Happy Anniversary Foil Letter Balloons",
        "LED Fairy Light Strings",
        "Rose Petal + T-Light Double Heart Floor Art",
        "Setup & Installation by Professionals",
      ],
      addons: ["Photographer (2 hrs)", "Fresh rose bouquet", "Champagne table styling", "Candlelight dinner upgrade"],
    },
    // ── index 9 — anniversary-17.png ──
    {
      name: "Black Gold Silver 25th Anniversary",
      price: 7499,
      includes: [
        "Black, Gold & Silver Balloon Arch",
        "Black Fringe Curtain Backdrop",
        "Happy Anniversary Gold Foil Letter Balloons",
        "25 Number Gold Foil Balloons",
        "Champagne Bottle Foil Balloon",
        "Star Balloon Pillars",
        "Floor Balloon Bunches",
        "Setup & Installation by Professionals",
      ],
      addons: ["Photographer (2 hrs)", "LED name board upgrade", "Champagne table styling", "Fresh flower bouquet"],
    },
    // ── index 10 — anniversary-18.png ──
    {
      name: "Rose Gold Shimmer Anniversary",
      price: 4999,
      includes: [
        "Rose Gold, Peach & White Balloon Garland",
        "Rose Gold Shimmer Curtain Backdrop",
        "Happy Anniversary Rose Gold Foil Letter Balloons",
        "Star & Round Foil Balloons",
        "Confetti Balloons",
        "LED Fairy Lights",
        "Setup & Installation by Professionals",
      ],
      addons: ["Photographer (2 hrs)", "Fresh flower bouquet", "Premium cake table styling", "Candlelight dinner setup"],
    },
  ],
  "birthday-baby-boy": [
    {
      name: "Royal Blue & Silver Classic 1st Birthday",
      price: 3499,
      includes: [
        "Blue + Silver Chrome Balloon Arch",
        "Silver Fringe Curtain Backdrop",
        '"HAPPY BIRTHDAY" Blue Banner with Gold Text',
        "Blue Star Foil Balloons",
        "Gift Box Props – Blue",
        "Floor Confetti Scatter – Blue & Silver",
        "Setup & Installation by Professionals",
      ],
      addons: ["Photographer (2 hrs)", "Number foil balloon upgrade", "LED name board", "Extra balloon garland"],
    },
    {
      name: "Classic Black & Gold Birthday Decor",
      price: 1499,
      includes: [
        "Black & Gold Chrome Balloon Arch – 8×8 ft",
        "Gold Fringe Curtain Backdrop – Full Wall",
        '"HAPPY BIRTHDAY" Black Banner with Gold Text',
        "Gold & Black Balloon Border – Top Row",
        "Floor Balloon Scatter – Black & Gold Mix",
        "Professional Setup & Installation",
        "Duration: 4 Hours",
      ],
      addons: ["Photographer (2 hrs)", "LED name board upgrade", "Premium cake table styling"],
    },
    {
      name: "Royal Balloon Room Decor",
      price: 1699,
      includes: [
        "Red & Gold Chrome Balloon Arch – 8×8 ft",
        "Gold Fringe Curtain Backdrop – 2 Panels",
        '"HAPPY BIRTHDAY" Red Foil Letter Balloons',
        "Gold Star Foil Balloons × 2",
        "Floor Balloon Scatter – Red & Gold Mix",
        "Professional Setup & Installation",
        "Duration: 4 Hours",
      ],
      addons: ["Photographer (2 hrs)", "LED name board upgrade", "Premium cake table styling"],
    },
    {
      name: "Royal Butterfly Birthday Decor",
      price: 1999,
      includes: [
        "Purple & Gold Chrome Balloon Arch – 8×8 ft",
        "Golden Foil Fringe Curtain Backdrop – Full Wall",
        "Giant Butterfly Foil Balloon – Purple & Gold",
        '"HAPPY BIRTHDAY" Black Banner with Gold Text',
        "Balloon Clusters – Purple, Lavender & Gold",
        "Floor Scatter Balloons",
        "Professional Setup & Installation",
        "Duration: 4 Hours",
      ],
      addons: ["Photographer (2 hrs)", "LED name board upgrade", "Premium cake table styling"],
    },
    {
      name: "Construction / JCB Theme Birthday",
      price: 3899,
      includes: [
        "Yellow, Black, Orange, Peach Balloon Arch + Floor Scatter",
        "Gold Fringe Curtain Backdrop",
        '"HAPPY BIRTHDAY" Silver Foil Letter Balloons',
        "Crane Foil Balloon + Excavator Foil Balloon",
        "Construction Vehicle Round Foils ×2",
        "Blue Star Foil Balloon",
        "Setup & Installation by Professionals",
      ],
      addons: ["Photographer (2 hrs)", "Number foil balloon upgrade", "LED name board", "Extra balloon garland"],
    },
    {
      name: "Dinosaur Jungle Theme Birthday",
      price: 3799,
      includes: [
        "Green, Teal, Orange, Gold Balloon Garland",
        "Green Fringe Curtain Backdrop",
        '"HAPPY BIRTHDAY" Gold Foil Letter Balloons',
        "T-Rex Dinosaur Foil Balloon",
        "Dinosaur Printed Round Foils ×2",
        "Green Star Foil Balloons ×2 + Leopard Print Balloons",
        "Gold Tassels + Floor Balloon Scatter",
        "Setup & Installation by Professionals",
      ],
      addons: ["Photographer (2 hrs)", "Number foil balloon upgrade", "LED name board", "Extra balloon garland"],
    },
    {
      name: "Wild One Jungle Safari Theme",
      price: 3799,
      includes: [
        "Green, Light Green, Gold Balloon Arch",
        '"WILD" Gold Foil + "One" Silver Foil Letter Balloons',
        "Giraffe, Lion, Tiger, Zebra, Monkey Animal Foil Balloons ×5",
        "Artificial Green Vine Curtain Backdrop",
        "Green Leaf Props + Fairy Lights",
        'Cake Table with "One" Topper',
        "Setup & Installation by Professionals",
      ],
      addons: ["Photographer (2 hrs)", "Number foil balloon upgrade", "LED name board", "Extra balloon garland"],
    },
    {
      name: "Cocomelon Pastel Theme Birthday",
      price: 3499,
      includes: [
        "Pastel Balloon Wall – Mint, Yellow, Orange, Lavender, Blue",
        '"HAPPY BIRTHDAY" Cocomelon Printed Banner',
        "JJ Foil Balloon + 2 Cocomelon Round Foils",
        "Rainbow Star Foil + 2 Silver Star Foils",
        "Traffic Light Prop",
        "Small Balloon Clusters + Cloud Balloons",
        "Setup & Installation by Professionals",
      ],
      addons: ["Photographer (2 hrs)", "Number foil balloon upgrade", "LED name board", "Extra balloon garland"],
    },
    {
      name: "Mickey Mouse Classic Theme Birthday",
      price: 3599,
      includes: [
        "Red, Black, Yellow Balloon Arch + Floor Scatter",
        "Mickey Mouse Printed Backdrop – Red",
        '"HAPPY BIRTHDAY" Text on Backdrop',
        "Mickey Mouse Standing Foil Balloon",
        'Number "2" Silver Foil Balloon',
        "Polka Dot Balloons – Red & Black",
        "Setup & Installation by Professionals",
      ],
      addons: ["Photographer (2 hrs)", "Number foil balloon upgrade", "LED name board", "Extra balloon garland"],
    },
    {
      name: "Sonic The Hedgehog Theme Birthday",
      price: 3799,
      includes: [
        "Blue, Light Blue Balloon Arch",
        "Silver + Blue Fringe Curtain Backdrop",
        '"Happy Birthday" Silver Foil Letters',
        "Sonic Foil Balloon",
        'Number "7" Silver Foil Balloon',
        "Blue Heart Foil Balloons + Red & Silver Star Foils",
        "Gold Ring Props + Fairy Lights",
        "Floor Balloon Clusters",
        "Setup & Installation by Professionals",
      ],
      addons: ["Photographer (2 hrs)", "Number foil balloon upgrade", "LED name board", "Extra balloon garland"],
    },
  ],
  "birthday-baby-girl": [
    {
      name: "Barbie Glam Wall Theme",
      price: 3599,
      includes: [
        "Pink, Hot Pink, Rose Gold, White, Silver Chrome Balloon Wall",
        '"Happy Birthday" Silver Foil Letter Balloons',
        "Barbie Logo Foils ×4 + Barbie Car Foils",
        "Pink Heart Foil Balloon ×2 + Pink Star Foil Balloons ×3",
        "Barbie Lipstick Foil Balloon",
        "Setup & Installation by Professionals",
      ],
      addons: ["Photographer (2 hrs)", "LED name board upgrade", "Cake table styling", "Extra foil character balloons"],
    },
    {
      name: "Classic Black & Gold Birthday Decor",
      price: 1499,
      includes: [
        "Black & Gold Chrome Balloon Arch – 8×8 ft",
        "Gold Fringe Curtain Backdrop – Full Wall",
        '"HAPPY BIRTHDAY" Black Banner with Gold Text',
        "Gold & Black Balloon Border – Top Row",
        "Floor Balloon Scatter – Black & Gold Mix",
        "Professional Setup & Installation",
        "Duration: 4 Hours",
      ],
      addons: ["Photographer (2 hrs)", "LED name board upgrade", "Premium cake table styling"],
    },
    {
      name: "Royal Balloon Room Decor",
      price: 1699,
      includes: [
        "Red & Gold Chrome Balloon Arch – 8×8 ft",
        "Gold Fringe Curtain Backdrop – 2 Panels",
        '"HAPPY BIRTHDAY" Red Foil Letter Balloons',
        "Gold Star Foil Balloons × 2",
        "Floor Balloon Scatter – Red & Gold Mix",
        "Professional Setup & Installation",
        "Duration: 4 Hours",
      ],
      addons: ["Photographer (2 hrs)", "LED name board upgrade", "Premium cake table styling"],
    },
    {
      name: "Royal Butterfly Birthday Decor",
      price: 1999,
      includes: [
        "Purple & Gold Chrome Balloon Arch – 8×8 ft",
        "Golden Foil Fringe Curtain Backdrop – Full Wall",
        "Giant Butterfly Foil Balloon – Purple & Gold",
        '"HAPPY BIRTHDAY" Black Banner with Gold Text',
        "Balloon Clusters – Purple, Lavender & Gold",
        "Floor Scatter Balloons",
        "Professional Setup & Installation",
        "Duration: 4 Hours",
      ],
      addons: ["Photographer (2 hrs)", "LED name board upgrade", "Premium cake table styling"],
    },
    {
      name: "Princess Castle Theme",
      price: 4299,
      includes: [
        "Pastel Balloon Arch – Yellow, Pink, Light Blue, Lavender",
        "Silver Fringe Curtains ×2 with Fairy Lights Backdrop",
        '"Happy Birthday" Silver Foil Letters',
        'Number "1" Silver Foil Balloon',
        "Aurora Princess Cutout + Snow White Princess Cutout",
        "Castle Tower Prop Boxes ×2 with Balloons Inside",
        "Butterfly Stickers + Floor Balloon Scatter",
        "Setup & Installation by Professionals",
      ],
      addons: ["Photographer (2 hrs)", "LED name board upgrade", "Cake table styling", "Extra foil character balloons"],
    },
    {
      name: "Barbie Dream Theme",
      price: 3699,
      includes: [
        "Pink, Light Pink, Silver, Purple Balloon Arch",
        "Purple + Silver Fringe Curtains",
        '"Happy Birthday" Silver Foil Letters',
        "Barbie Face Cutout + Barbie Logo Foils ×4",
        "Barbie Lipstick Foil Balloon",
        "Pink Heart Foil + Pink Star Foil + Silver Star Foil",
        "Butterfly Stickers + Fairy Lights",
        "Floor Balloon Scatter",
        "Setup & Installation by Professionals",
      ],
      addons: ["Photographer (2 hrs)", "LED name board upgrade", "Cake table styling", "Extra foil character balloons"],
    },
    {
      name: "Cocomelon Rainbow Theme",
      price: 3499,
      includes: [
        "Rainbow Gradient Balloon Wall – Yellow, Green, Blue, Purple, Pink",
        '"Happy Birthday" Cocomelon Printed Banner',
        "JJ Foil Balloon + Cocomelon Round Foil",
        'Number "1" LED Light',
        "Silver Star Foil Balloons ×2",
        "Traffic Light Prop",
        "Setup & Installation by Professionals",
      ],
      addons: ["Photographer (2 hrs)", "LED name board upgrade", "Cake table styling", "Extra foil character balloons"],
    },
    {
      name: "Pink Purple Neon Birthday Wall",
      price: 5499,
      includes: [
        "Full Balloon Wall – Pink, Purple, Lavender & Silver Chrome",
        "Happy Birthday Neon LED Sign",
        "Silver Heart Foil Balloon",
        "Silver Cube Foil Balloon",
        "Balloon Installation Frame",
        "Setup & Installation by Professionals",
      ],
      addons: ["Photographer (2 hrs)", "LED name board upgrade", "Cake table styling", "Extra foil character balloons"],
    },
    {
      name: "Mickey Mouse Classic Theme Birthday",
      price: 3599,
      includes: [
        "Red, Black, Yellow Balloon Arch + Floor Scatter",
        "Mickey Mouse Printed Backdrop – Red",
        '"HAPPY BIRTHDAY" Text on Backdrop',
        "Mickey Mouse Standing Foil Balloon",
        'Number "2" Silver Foil Balloon',
        "Polka Dot Balloons – Red & Black",
        "Setup & Installation by Professionals",
      ],
      addons: ["Photographer (2 hrs)", "LED name board upgrade", "Cake table styling", "Extra foil character balloons"],
    },
  ],
  "welcome-baby": [
    // index 0 — wb-01.png — Welcome Baby Girl Decoration
    {
      name: "Welcome Baby Girl Decoration",
      price: 3499,
      includes: [
        "Backdrop: Pink + Silver Foil Curtains",
        "Balloon Arch: Pink + White + Silver Chrome Balloons",
        "WELCOME Silver Foil Balloon Set",
        "BABY GIRL Rose Gold Foil Balloon Set",
        "Pink Star Foil Balloons",
        "Golden Baby Face Foil Balloon",
        "A New Little Princess Round Foil Balloons",
        "Pink It's A Girl Latex Balloons",
        "LED Fairy Lights",
        "Floor Base: Pink + White Balloon Cluster",
        "Setup & Labour included",
      ],
      addons: ["Photographer (2 hrs)", "LED name board upgrade", "Premium cake table styling", "Extra foil balloons"],
    },
    // index 1 — wb-02.png — Welcome Babies Decoration
    {
      name: "Welcome Babies Decoration",
      price: 3499,
      includes: [
        "Backdrop: Pink + Blue Curtain with LED Fairy Lights",
        "Balloon Arch: Blue + Pink + White Balloon Garland - Both Sides",
        "WELCOME BABIES Silver Foil Balloon Set",
        "Baby Boy Face Foil Balloon",
        "Baby Girl Face Foil Balloon",
        "Foot Shape Foil Balloons - It's a Boy + It's a Girl",
        "Floor Decor: Blue + Pink + White Balloon Scatter",
        "Jumbo Pink + Blue Balloons for height",
        "Setup & Labour included",
      ],
      addons: ["Photographer (2 hrs)", "LED name board upgrade", "Premium cake table styling", "Extra foil balloons"],
    },
    // index 2 — wb-03.png — Welcome Baby Boy Decoration
    {
      name: "Welcome Baby Boy Decoration",
      price: 3299,
      includes: [
        "Backdrop: Blue + Silver Foil Curtains",
        "Balloon Arch: Light Blue + White + Dark Blue Chrome Balloon Garland",
        "WELCOME BABY BOY Silver Foil Balloon Set",
        "Golden Baby Boy Face Foil Balloon",
        "Dark Blue Star Foil Balloons",
        "A New Little Prince Round Foil Balloons",
        "Blue It's A Boy Latex Balloons",
        "Floor Base: Light Blue + White Balloon Cluster",
        "LED Fairy Lights",
        "Setup & Labour included",
      ],
      addons: ["Photographer (2 hrs)", "LED name board upgrade", "Premium cake table styling", "Extra foil balloons"],
    },
    // index 3 — wb-04.png — Oh Baby Butterfly Theme Decoration
    {
      name: "Oh Baby Butterfly Theme Decoration",
      price: 4299,
      includes: [
        "Backdrop: White Curtain with Warm LED Fairy Lights",
        "Balloon Arch: Pink + White + Rose Gold Chrome + Confetti Balloon Garland - Full Frame",
        "Oh Baby Gold Text on White Round Board",
        "Butterfly Cutouts on Balloons",
        "Floor Decor: Pink + Rose Gold Balloon Cluster",
        "Clear Confetti Balloons",
        "Setup & Labour included",
      ],
      addons: ["Photographer (2 hrs)", "LED name board upgrade", "Premium cake table styling", "Extra foil balloons"],
    },
    // index 4 — wb-05.png — It's A Girl Colorful Theme Decoration
    {
      name: "It's A Girl Colorful Theme Decoration",
      price: 3899,
      includes: [
        "Backdrop: Warm LED Fairy Lights",
        "Balloon Arch: Yellow + Purple + Pink + White Balloon Garland",
        "Banner: IT'S A GIRL Pink-Gold Bunting",
        "baby Silver Foil Balloon Set",
        "Baby Girl Face Foil Balloon",
        "Baby Stroller Foil Balloon - Baby Girl",
        "Foot Shape Foil Balloon - It's a Girl!",
        "Round It's a Girl Foil Balloon",
        "Silver Moon Foil Balloon",
        "Butterfly Cutouts",
        "Floor Base: Yellow + Purple + Pink Balloon Cluster",
        "Setup & Labour included",
      ],
      addons: ["Photographer (2 hrs)", "LED name board upgrade", "Premium cake table styling", "Extra foil balloons"],
    },
    // index 5 — wb-06.png — Princess Baby Girl Decoration
    {
      name: "Princess Baby Girl Decoration",
      price: 3399,
      includes: [
        "Balloon Arch: Light Pink + White + Clear Confetti Balloon Garland - Half Circle",
        "Silver Palm Leaf Cutouts",
        "Princess Round Foil Balloons",
        "Baby Girl Face Foil Balloon",
        "Baby Bottle Foil Balloon - It's a Girl",
        "Foot Shape Foil Balloon - It's a Girl!",
        "Floor Decor: Light Pink + White + Clear Balloon Scatter",
        "Setup & Labour included",
      ],
      addons: ["Photographer (2 hrs)", "LED name board upgrade", "Premium cake table styling", "Extra foil balloons"],
    },
    // index 6 — wb-07.png — Prince Baby Boy Decoration
    {
      name: "Prince Baby Boy Decoration",
      price: 3399,
      includes: [
        "Balloon Arch: Light Blue + White Balloon Garland - Half Circle",
        "Prince Round Foil Balloons",
        "Green Palm Leaf Cutouts",
        "Custom Frame Posters with Baby Name - JAMES Foil Balloons",
        "Baby Boy Face Foil Balloon",
        "Baby Bottle Foil Balloon - It's A Boy",
        "Foot Shape Foil Balloon - It's a Boy!",
        "Floor Decor: Light Blue + White + Big Balloons Cluster",
        "Add-ons: Flower Vase with Fresh Flowers, White Wire Balloon Stands",
        "Setup & Labour included",
      ],
      addons: ["Photographer (2 hrs)", "LED name board upgrade", "Premium cake table styling", "Extra foil balloons"],
    },
    // index 7 — wb-08.png — Royal Oh Baby Decoration
    {
      name: "Royal Oh Baby Decoration",
      price: 3599,
      includes: [
        "Backdrop: Silver + Purple Foil Curtains",
        "OH Silver Foil Balloon Set",
        "BABY Silver Foil Balloon Set",
        "Balloon Garland: Purple + Lavender + White + Gold Chrome + Pearl White Balloon Arch - Both Sides",
        "Floor Decor: White + Gold Balloon Scatter",
        "Setup & Labour included",
      ],
      addons: ["Photographer (2 hrs)", "LED name board upgrade", "Premium cake table styling", "Extra foil balloons"],
    },
    // index 8 — wb-09.png — Welcome Baby Boy Decoration (Golden)
    {
      name: "Welcome Baby Boy Decoration",
      price: 3599,
      includes: [
        "Backdrop: LED Fairy Lights with hanging setup",
        "WELCOME BABY BOY Golden Foil Balloon Set",
        "Blue Baby Foot Shape Foil Balloons",
        "Silver Star Foil Balloons",
        "Balloon Decor: Blue + White + Silver Chrome Balloon Frame/Arch",
        "Floor Base: White + Blue Balloon Cluster",
        "Setup & Labour included",
      ],
      addons: ["Photographer (2 hrs)", "LED name board upgrade", "Premium cake table styling", "Extra foil balloons"],
    },
    // index 9 — wb-10.png — Welcome Home Baby Girl Room Decoration
    {
      name: "Welcome Home Baby Girl Room Decoration",
      price: 4299,
      includes: [
        "WELCOME HOME Silver Foil Balloon Set",
        "Pink Baby Bottle Foil Balloon - It's a Girl",
        "Baby Girl Face Foil Balloon with Bow",
        "Bed Decor: Pink + White Latex Balloon Scatter in Heart Shape",
        "Floor Decor: Pink + White Balloon Scatter",
        "Table Accents: Pink + White Balloon Bouquets for Side Tables",
        "Prop: BABY Transparent Boxes with Lights + Balloons Inside",
        "Setup & Labour included",
      ],
      addons: ["Photographer (2 hrs)", "LED name board upgrade", "Premium cake table styling", "Extra foil balloons"],
    },
  ],
  "proposal": [
    // index 0 — proposal-08.png — I Love You Balloon Frame
    {
      name: "I Love You Balloon Frame",
      price: 2999,
      includes: [
        "Balloon Frame: Red + White Latex Balloon Square Arch",
        "I LOVE YOU Red Foil Balloon Set - Vertical",
        "Big Red Heart Foil Balloon",
        "Floor Accents: Red + White Balloon Scatter",
        "Setup & Labour included",
      ],
      notes: "Final setup is subject to material availability at time of booking — our team will confirm and adjust all items accordingly.",
      addons: ["Photographer (2 hrs)", "Rose petals upgrade", "Candle pathway add-on", "Extra foil balloons"],
    },
    // index 1 — proposal-09.png — Romantic Love Balloon Backdrop
    {
      name: "Romantic Love Balloon Backdrop",
      price: 3699,
      includes: [
        "Balloon Arch: Red + White Latex Balloon Arch - Full Frame",
        "Backdrop: Warm LED Fairy Light Curtain",
        "Love Red Script Foil Balloon",
        "Big Red Heart Foil Balloon - Center",
        "Setup & Labour included",
      ],
      notes: "Final setup is subject to material availability at time of booking — our team will confirm and adjust all items accordingly.",
      addons: ["Photographer (2 hrs)", "Rose petals upgrade", "Candle pathway add-on", "Extra foil balloons"],
    },
    // index 9 — proposal-10.png — Cute Teddy Love Decoration
    {
      name: "Cute Teddy Love Decoration",
      price: 2899,
      includes: [
        "I LOVE YOU Golden Foil Balloon Set",
        "Big Brown Teddy Bear Foil Balloon with Love You Heart",
        "Red Heart Shape Foil Balloons - Top Border + Side Bouquets",
        "Heart balloons top border + side bouquets with weights + Center Teddy setup",
        "Setup & Labour included",
      ],
      notes: "Final setup is subject to material availability at time of booking — our team will confirm and adjust all items accordingly.",
      addons: ["Photographer (2 hrs)", "Rose petals upgrade", "Candle pathway add-on", "Extra foil balloons"],
    },
    // index 10 — proposal-11.png — Pink Red Love Glam Decoration
    {
      name: "Pink Red Love Glam Decoration",
      price: 3899,
      includes: [
        "Backdrop: Red Shimmer Foil Curtains",
        "Balloon Garland: Red + Pink + Baby Pink + White Balloon Arch with Heart Print Balloons - L Shaped",
        "love Silver Script Foil Balloon - Center",
        "Heart Stack Foil Balloons with Confetti - Right Side",
        "Floor Decor: Pink + Red + White Balloon Scatter",
        "Setup & Labour included",
      ],
      notes: "Final setup is subject to material availability at time of booking — our team will confirm and adjust all items accordingly.",
      addons: ["Photographer (2 hrs)", "Rose petals upgrade", "Candle pathway add-on", "Extra foil balloons"],
    },
    // index 11 — proposal-12.png — Peach Gold Love Aesthetic Decoration
    {
      name: "Peach Gold Love Aesthetic Decoration",
      price: 4299,
      includes: [
        "Balloon Garland: Peach + Baby Pink + White + Gold Chrome Balloon Arch - L Shape",
        "love Golden Script Foil Balloon - Center",
        "Peach Square Boxes + Vase with Pampas Grass",
        "Floor Decor: Peach + Baby Pink Balloon Cluster near boxes",
        "Setup & Labour included",
      ],
      notes: "Final setup is subject to material availability at time of booking — our team will confirm and adjust all items accordingly.",
      addons: ["Photographer (2 hrs)", "Rose petals upgrade", "Candle pathway add-on", "Extra foil balloons"],
    },
    // index 12 — proposal-13.png — Circle Ring Valentine Decoration
    {
      name: "Circle Ring Valentine Decoration",
      price: 4999,
      includes: [
        "Frame: Golden Circle Ring Stand - 7ft",
        "Balloon Garland: Red + Pink + Baby Pink + White + Gold Chrome Balloon Arch on one side of ring",
        "BE MY VALENTINE Golden Foil Balloon Set - Center",
        "Setup & Labour included",
      ],
      notes: "Final setup is subject to material availability at time of booking — our team will confirm and adjust all items accordingly.",
      addons: ["Photographer (2 hrs)", "Rose petals upgrade", "Candle pathway add-on", "Extra foil balloons"],
    },
    // index 13 — proposal-14.png — Proposal Room Decoration
    {
      name: "Proposal Room Decoration",
      price: 2999,
      includes: [
        "Ceiling Decor: Maroon + Peach + White + Rose Gold Balloon Mix with Ribbons + Curlies",
        "WILL YOU MARRY ME Rose Gold Foil Balloon Set - Wall Hanging",
        "Bed Decor: Red Rose Petals Scatter on Bed",
        "Setup & Labour included",
      ],
      notes: "Final setup is subject to material availability at time of booking — our team will confirm and adjust all items accordingly.",
      addons: ["Photographer (2 hrs)", "Rose petals upgrade", "Candle pathway add-on", "Extra foil balloons"],
    },
    // index 14 — proposal-15.png — Red Heart LED Walkway Decoration
    {
      name: "Red Heart LED Walkway Decoration",
      price: 4299,
      includes: [
        "I LOVE U Red Foil Balloon Set - Wall",
        "Red Heart Shape Foil Balloons on Sticks - on each side",
        "Floor Decor: Red Latex Balloon Border - Lines",
        "Rose Petals Walkway - Pink/Red Mix",
        "LED Tea Light Candles",
        "Backdrop: Warm LED Fairy Light Curtain",
        "Setup & Labour included",
      ],
      notes: "Final setup is subject to material availability at time of booking — our team will confirm and adjust all items accordingly.",
      addons: ["Photographer (2 hrs)", "Rose petals upgrade", "Candle pathway add-on", "Extra foil balloons"],
    },
    // index 15 — proposal-16.png — Marry Me LED Walkway Decoration
    {
      name: "Marry Me LED Walkway Decoration",
      price: 4299,
      includes: [
        "MARRY ME Golden Foil Balloon Set - Wall",
        "Red Heart Shape Foil Balloons on Sticks with LED - on each side",
        "Floor Decor: Red Latex Balloon Border - Lines",
        "Rose Petals Walkway - Pink/Red Mix",
        "LED Tea Light Candles",
        "Backdrop: Warm LED Fairy Light Curtain",
        "Setup & Labour included",
      ],
      notes: "Final setup is subject to material availability at time of booking — our team will confirm and adjust all items accordingly.",
      addons: ["Photographer (2 hrs)", "Rose petals upgrade", "Candle pathway add-on", "Extra foil balloons"],
    },
    // index 16 — proposal-17.png — LED Marquee Proposal Setup
    {
      name: "LED Marquee Proposal Setup",
      price: 6999,
      includes: [
        "Props: MARRY ME LED Marquee Letters - 3ft Height, Warm White Bulbs",
        "Floor Decor: Rose Petals Scatter - Full Area",
        "I ♥ U Rose Petals Art - Center",
        "Setup + Labour + Power Extension included",
      ],
      notes: "Final setup is subject to material availability at time of booking — our team will confirm and adjust all items accordingly.",
      addons: ["Photographer (2 hrs)", "Rose petals upgrade", "Candle pathway add-on", "Extra foil balloons"],
    },
  ],
};

const nameThemes: Record<string, string[]> = {
  "birthday-baby-girl": ["Barbie Glam Wall Theme", "Classic Black & Gold Birthday Decor", "Royal Balloon Room Decor", "Royal Butterfly Birthday Decor", "Princess Castle Theme", "Barbie Dream Theme", "Cocomelon Rainbow Theme", "Pink Purple Neon Birthday Wall", "Mickey Mouse Classic Theme Birthday"],
  "birthday-baby-boy": ["Royal Blue & Silver Classic 1st Birthday", "Classic Black & Gold Birthday Decor", "Royal Balloon Room Decor", "Royal Butterfly Birthday Decor", "Construction / JCB Theme Birthday", "Dinosaur Jungle Theme Birthday", "Wild One Jungle Safari Theme", "Cocomelon Pastel Theme", "Mickey Mouse Classic Theme", "Sonic The Hedgehog Theme"],
  "birthday-adult": ["Classic Black & Gold Birthday Decor", "Royal Balloon Room Decor", "Royal Butterfly Birthday Decor", "Black Gold Mustard 20th Birthday", "Black White Gold Star Birthday", "Terracotta Boho Birthday", "Blue Purple Galaxy Birthday", "Black Gold Silver Classic Birthday", "Pink Purple Neon Birthday Wall", "Sage Green Gold Rustic Birthday", "Pink White Silver Fringe Birthday"],
  anniversary: ["Heart Canopy Anniversary Decor", "Budget Balloon Bash Package", "Rose Petal Anniversary Setup", "Golden Glow Anniversary Theme", "Romantic Fairy-light Anniversary", "Elegant Floral Anniversary Decor", "Premium Anniversary Balloon Setup"],
  proposal: ["Marry Me Marquee Proposal", "Heart Balloon Proposal Setup", "Rooftop Rose Proposal Decor", "Candlelight Proposal Backdrop", "Garden Proposal Floral Arch", "Rose Petal Proposal Pathway", "Grand Ring Proposal Decor"],
  "baby-shower": ["Oh Baby Girl Balloon Setup", "Pink Floral Baby Shower Decor", "Little Princess Baby Shower Theme", "Pastel Cloud Baby Shower Decor", "Oh Baby Boy Balloon Setup", "Blue Floral Baby Shower Decor", "Little Prince Baby Shower Theme", "Sky Blue Cloud Baby Shower Decor", "Rainbow Baby Shower Decor", "Pastel Balloon Baby Shower"],
  "naming-ceremony": ["Pink Naming Ceremony Decor", "Floral Naming Ceremony Setup", "Elegant Girl Naming Backdrop", "Blue Naming Ceremony Decor", "Royal Naming Ceremony Setup", "Elegant Boy Naming Backdrop", "Pastel Naming Ceremony Decor", "Grand Naming Ceremony Setup", "Balloon Naming Ceremony Theme", "Floral Naming Backdrop"],
  haldi: ["Marigold Haldi Backdrop", "Boho Yellow Haldi Setup", "Phoolon Ki Chaadar Haldi", "Traditional Haldi Chowki Decor"],
  mehendi: ["Rajasthani Mehendi Umbrella Decor", "Boho Phoolon Ki Chaadar Mehendi"],
  "ring-ceremony": ["Glittering Ring Ceremony Backdrop", "Royal Gold Ring Ceremony Decor", "Floral Ring Ceremony Stage", "Elegant Ring Ceremony Setup"],
  "welcome-baby": ["Welcome Baby Girl Pink Balloon Setup", "Little Princess Welcome Decor", "Pink Silver Welcome Baby Girl Theme", "Welcome Baby Boy Blue Balloon Setup", "Little Prince Welcome Decor", "Blue Silver Welcome Baby Boy Theme", "Pastel Welcome Baby Decor", "Sweet Welcome Home Setup"],
};

const descThemes: Record<string, string> = {
  birthday: "A joyful, premium balloon setup styled with themed props, a personalised banner and photo-ready styling.",
  anniversary: "A romantic anniversary setup with heart canopy, fresh floral touches and warm ambient lighting.",
  proposal: "A grand, camera-ready proposal moment styled with balloons, petals and marquee lighting.",
  "baby-shower": "A dreamy baby shower setup with pastel balloon garlands, floral touches and a personalised banner.",
  "naming-ceremony": "A traditional yet elegant naming ceremony backdrop styled with balloons, drapes and personalised signage.",
  haldi: "A vibrant marigold-and-yellow haldi setup styled with traditional drapes and floral accents.",
  mehendi: "A colourful mehendi night setup with umbrellas, drapes and cushioned low seating styling.",
  "ring-ceremony": "A statement ring ceremony backdrop styled with balloons, florals and premium stage lighting.",
  "welcome-baby": "A sweet welcome home setup for the newest family member — balloons, foil letters and pastel decor to celebrate the little one's arrival.",
};

export const categories: CategoryDef[] = [
  {
    id: "birthday",
    label: "Birthday Decoration",
    eyebrow: "Birthday Celebrations",
    tagline: "Themed balloon setups for every little (and big) birthday star.",
    banner: bannerFor("birthday"),
    subcategories: [
      { id: "baby-girl", label: "Baby Girl" },
      { id: "baby-boy", label: "Baby Boy" },
      { id: "adult", label: "Adult" },
    ],
    basePrice: 4499,
    priceStep: 550,
    duration: "2–4 hours",
    area: "Indoor / home venue, up to 200 sq.ft",
    includes: [
      "150+ premium latex & foil balloons",
      "Personalised “Happy Birthday” foil banner",
      "Curtain / fabric backdrop styling",
      "LED fairy light accents",
      "Cake table & prop styling",
      "Themed props and confetti balloons",
    ],
    addons: ["Photographer (2 hrs)", "LED name board upgrade", "Premium cake table styling", "Extra character cutouts"],
  },
  {
    id: "anniversary",
    label: "Anniversary Decoration",
    eyebrow: "Anniversary Celebrations",
    tagline: "Romantic, elegant setups to celebrate every year of love.",
    banner: bannerFor("anniversary"),
    basePrice: 4999,
    priceStep: 600,
    duration: "2–3 hours",
    area: "Bedroom / hall, up to 150 sq.ft",
    includes: [
      "Heart-shaped balloon canopy",
      "Rose petal pathway & bed art",
      "Fresh floral & mood lighting",
      "Personalised name / date banner",
      "Curtain backdrop with LED accents",
      "Cake / champagne table styling",
    ],
    addons: ["Fresh flower bouquet", "Photographer (2 hrs)", "Cake (1kg, on request)", "Candlelight dinner setup"],
  },
  {
    id: "proposal",
    label: "Proposal Decoration",
    eyebrow: "Proposal Moments",
    tagline: "Say it with a moment they'll never forget.",
    banner: bannerFor("proposal"),
    basePrice: 6999,
    priceStep: 700,
    duration: "2–3 hours",
    area: "Indoor / rooftop / outdoor, up to 200 sq.ft",
    includes: [
      "Giant heart / ring balloon backdrop",
      "Rose petal 'Marry Me' floor art",
      "LED marquee sign styling",
      "Floral aisle & pathway petals",
      "Champagne & ring table styling",
      "Fairy light ambience",
    ],
    addons: ["Photographer coordination", "LED 'Marry Me' marquee upgrade", "Fresh rose bouquet", "Live violinist (on request)"],
  },
  {
    id: "baby-shower",
    label: "Baby Shower",
    eyebrow: "Baby Shower Celebrations",
    tagline: "Dreamy pastel setups to celebrate the mother-to-be.",
    banner: bannerFor("baby-shower"),
    basePrice: 4499,
    priceStep: 550,
    duration: "2–4 hours",
    area: "Indoor / home venue, up to 200 sq.ft",
    includes: [
      "Full balloon garland backdrop",
      "“Oh Baby / Mom-to-be” foil banner",
      "Themed cake table styling",
      "Fresh floral touches",
      "Photo booth props & sash",
      "Custom sign board (name / date)",
    ],
    addons: ["Photographer (2 hrs)", "Mom-to-be sash & crown upgrade", "Games & props kit", "Premium cake table styling"],
  },
  {
    id: "naming-ceremony",
    label: "Naming Ceremony",
    eyebrow: "Naming Ceremony",
    tagline: "Traditional, elegant backdrops to welcome the little one's name.",
    banner: bannerFor("naming-ceremony"),
    basePrice: 4499,
    priceStep: 550,
    duration: "3–4 hours",
    area: "Indoor hall / home venue, up to 250 sq.ft",
    includes: [
      "Balloon garland backdrop with name signage",
      "Traditional cradle / stage styling",
      "Fresh floral touches",
      "LED fairy light accents",
      "Photo booth props",
      "Personalised name banner",
    ],
    addons: ["Photographer (2 hrs)", "Cradle floral styling upgrade", "Premium name board", "Return-gift table styling"],
  },
  {
    id: "haldi",
    label: "Haldi Decoration",
    eyebrow: "Haldi Ceremony",
    tagline: "Bright marigolds and traditional styling for a joyful haldi.",
    banner: bannerFor("haldi"),
    basePrice: 5999,
    priceStep: 700,
    duration: "3–4 hours",
    area: "Indoor / outdoor lawn, up to 300 sq.ft",
    includes: [
      "Marigold & yellow floral backdrop",
      "Traditional dhoti / dupatta drapes",
      "Brass urli & petal floor decor",
      "Yellow balloon garland accents",
      "Personalised name / couple signage",
      "Chowki & seating styling",
    ],
    addons: ["Photographer (2 hrs)", "Extra marigold strands", "Dhol / traditional music coordination", "Chowki upgrade"],
  },
  {
    id: "mehendi",
    label: "Mehendi Decoration",
    eyebrow: "Mehendi Night",
    tagline: "Colourful drapes and umbrellas for a vibrant mehendi night.",
    banner: bannerFor("mehendi"),
    basePrice: 6499,
    priceStep: 750,
    duration: "3–5 hours",
    area: "Indoor / outdoor lawn, up to 300 sq.ft",
    includes: [
      "Colourful phoolon-ki-chaadar backdrop",
      "Rajasthani umbrella & jhula styling",
      "Bright dupatta drapes & tassels",
      "Floor cushions & low seating decor",
      "Mehendi station styling",
      "Personalised couple signage",
    ],
    addons: ["Photographer (2 hrs)", "Extra umbrellas & tassels", "Mehendi artist coordination", "Live music coordination"],
  },
  {
    id: "welcome-baby",
    label: "Welcome Baby Decoration",
    eyebrow: "Welcome Baby Celebrations",
    tagline: "Sweet balloon setups to welcome the newest member of the family.",
    banner: bannerFor("welcome-baby"),
    basePrice: 3999,
    priceStep: 500,
    duration: "2–3 hours",
    area: "Indoor / home venue, up to 150 sq.ft",
    includes: [
      "Welcome Baby foil letter balloons",
      "Balloon arch / garland backdrop",
      "Fringe curtain backdrop",
      "Star foil balloons",
      "Baby character foil balloon",
      "Floor balloon scatter",
      "Setup & installation by professionals",
    ],
    addons: ["Photographer (2 hrs)", "LED name board upgrade", "Premium cake table styling", "Extra foil balloons"],
  },
  {
    id: "ring-ceremony",
    label: "Ring Ceremony",
    eyebrow: "Ring Ceremony",
    tagline: "Statement ring backdrops for the perfect 'yes'.",
    banner: bannerFor("ring-ceremony"),
    basePrice: 6999,
    priceStep: 800,
    duration: "3–4 hours",
    area: "Indoor hall / banquet, up to 300 sq.ft",
    includes: [
      "Giant ring-shaped balloon backdrop (6ft+)",
      "Custom foil name / initials",
      "Floral & fairy light accents",
      "Rose petal pathway",
      "Stage & seating styling",
      "Cake / ring platform styling",
    ],
    addons: ["Photographer (2 hrs)", "Stage lighting upgrade", "Fresh floral arch", "Premium ring platform styling"],
  },
];

export const categoryMap = new Map(categories.map((c) => [c.id, c]));

/* ---------------------------------------------------------------------- */
/* Build the full package list from images + category config              */
/* ---------------------------------------------------------------------- */

function buildPackages(): PackageItem[] {
  const items: PackageItem[] = [];

  for (const cat of categories) {
    const subs: (SubcategoryDef | undefined)[] = cat.subcategories?.length ? cat.subcategories : [undefined];

    for (const sub of subs) {
      const imgs = imagesFor(cat.id, sub?.id);
      const themeKey = sub ? `${cat.id}-${sub.id}` : cat.id;
      const names = nameThemes[themeKey] ?? [];
      const desc = descThemes[cat.id] ?? "A premium themed decoration setup styled by Decoration Kingdom.";

      const overrideList = packageOverrides[themeKey];

      imgs.forEach((image, i) => {
        const id = sub ? `${cat.id}-${sub.id}-${i + 1}` : `${cat.id}-${i + 1}`;
        const ov = overrideList?.[i];
        items.push({
          id,
          name: ov?.name ?? names[i % Math.max(names.length, 1)] ?? `${cat.label} Package ${i + 1}`,
          category: cat.id,
          categoryLabel: cat.label,
          subcategory: sub?.id,
          subcategoryLabel: sub?.label,
          image,
          price: ov?.price ?? cat.basePrice + i * cat.priceStep,
          description: desc,
          includes: ov?.includes ?? cat.includes,
          duration: cat.duration,
          area: cat.area,
          addons: ov?.addons ?? cat.addons,
          notes: ov?.notes,
        });
      });
    }
  }

  return items;
}

export const allPackages: PackageItem[] = buildPackages();

export function getCategory(categoryId: string) {
  return categories.find((c) => c.id === categoryId);
}

export function getSubcategories(categoryId: string) {
  return getCategory(categoryId)?.subcategories ?? [];
}

export function getPackages(categoryId: string, subId?: string) {
  return allPackages.filter((p) => p.category === categoryId && (subId ? p.subcategory === subId : true));
}

export function findPackageById(id: string) {
  return allPackages.find((p) => p.id === id);
}

export const inr = (n: number) => "₹" + n.toLocaleString("en-IN");
