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
