import pkgKids from "@/assets/pkg-kids.jpg";

export type KidsTheme = {
  id: string;
  title: string;
  category: "boys" | "girls";
  image: string;
  subcategories: string[];
};

export type KidsThemeCategory = {
  id: "boys" | "girls";
  title: string;
  tagline: string;
  banner: string;
};

export const kidsThemeCategories: KidsThemeCategory[] = [
  {
    id: "boys",
    title: "Boy's Themes",
    tagline: "Exciting themes crafted for adventurous boys.",
    banner: pkgKids,
  },
  {
    id: "girls",
    title: "Girl's Themes",
    tagline: "Magical themes created for dreamy girls.",
    banner: pkgKids,
  },
];

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const kidsThemes: KidsTheme[] = [
  {
    id: "jungle-safari",
    title: "Jungle Safari",
    category: "boys",
    image: pkgKids,
    subcategories: [
      "Lion Adventure",
      "Safari Jeeps",
      "Treehouse Feast",
      "Animal Parade",
      "Campfire Stories",
    ],
  },
  {
    id: "farm",
    title: "Farm",
    category: "boys",
    image: pkgKids,
    subcategories: [
      "Barnyard Fun",
      "Hayride",
      "Tractor Trails",
      "Animal Friends",
      "Country Picnic",
    ],
  },
  {
    id: "spiderman",
    title: "Spiderman",
    category: "boys",
    image: pkgKids,
    subcategories: [
      "Web Swing",
      "City Rooftop",
      "Villain Showdown",
      "Web-Slinging Race",
      "Spider Signal",
    ],
  },
  {
    id: "lego",
    title: "Lego",
    category: "boys",
    image: pkgKids,
    subcategories: [
      "Brick Towers",
      "Mini Builds",
      "Color Block",
      "Lego Road",
      "Creative Play",
    ],
  },
  {
    id: "cars",
    title: "Cars",
    category: "boys",
    image: pkgKids,
    subcategories: [
      "Race Track",
      "Pit Stop",
      "Vintage Cruisers",
      "Rally Stage",
      "Championship Podium",
    ],
  },
  {
    id: "dinosaurs",
    title: "Dinosaurs",
    category: "boys",
    image: pkgKids,
    subcategories: [
      "Roar Adventure",
      "Fossil Dig",
      "Dino Parade",
      "Jurassic Cave",
      "Prehistoric Feast",
    ],
  },
  {
    id: "avengers",
    title: "Avengers",
    category: "boys",
    image: pkgKids,
    subcategories: [
      "Hero Landing",
      "Avenger Squad",
      "Battle Scene",
      "Shield Wall",
      "Power-Up Rally",
    ],
  },
  {
    id: "space",
    title: "Space",
    category: "boys",
    image: pkgKids,
    subcategories: [
      "Rocket Launch",
      "Galaxy Voyage",
      "Moon Camp",
      "Starship Deck",
      "Alien Encounter",
    ],
  },
  {
    id: "football",
    title: "Football",
    category: "boys",
    image: pkgKids,
    subcategories: [
      "Stadium Lights",
      "Team Huddle",
      "Trophy Parade",
      "Goal Celebration",
      "Fan Zone",
    ],
  },
  {
    id: "cricket",
    title: "Cricket",
    category: "boys",
    image: pkgKids,
    subcategories: [
      "Pitch Day",
      "Bowling Power",
      "Bat Smash",
      "Scoreboard",
      "Victory Cheers",
    ],
  },
  {
    id: "unicorn",
    title: "Unicorn",
    category: "girls",
    image: pkgKids,
    subcategories: [
      "Rainbow Magic",
      "Sparkle Meadow",
      "Princess Ride",
      "Wish Fountain",
      "Cloud Castle",
    ],
  },
  {
    id: "mermaid",
    title: "Mermaid",
    category: "girls",
    image: pkgKids,
    subcategories: [
      "Coral Cove",
      "Seashell Wishes",
      "Pearl Party",
      "Ocean Parade",
      "Undersea Glow",
    ],
  },
  {
    id: "butterfly",
    title: "Butterfly",
    category: "girls",
    image: pkgKids,
    subcategories: [
      "Flutter Garden",
      "Petal Path",
      "Rainbow Wings",
      "Glimmer Flight",
      "Bloom Circle",
    ],
  },
  {
    id: "rainbow",
    title: "Rainbow",
    category: "girls",
    image: pkgKids,
    subcategories: [
      "Color Cloud",
      "Sunbeam Stage",
      "Candy Stream",
      "Sky Arch",
      "Prism Play",
    ],
  },
  {
    id: "candyland",
    title: "Candyland",
    category: "girls",
    image: pkgKids,
    subcategories: [
      "Sweet Avenue",
      "Candy Castle",
      "Lollipop Lane",
      "Marshmallow Arch",
      "Chocolate Fountain",
    ],
  },
  {
    id: "princess",
    title: "Princess",
    category: "girls",
    image: pkgKids,
    subcategories: [
      "Royal Stage",
      "Tiara Table",
      "Ballroom Dance",
      "Castle Gate",
      "Fairytale Path",
    ],
  },
  {
    id: "barbie",
    title: "Barbie",
    category: "girls",
    image: pkgKids,
    subcategories: [
      "Pink Runway",
      "Glam Studio",
      "Dreamhouse",
      "Fashion Show",
      "Party Bus",
    ],
  },
  {
    id: "frozen",
    title: "Frozen",
    category: "girls",
    image: pkgKids,
    subcategories: [
      "Ice Palace",
      "Snowflake Stage",
      "Aurora Glow",
      "Frost Garden",
      "Ski Lodge",
    ],
  },
  {
    id: "minnie-mouse",
    title: "Minnie Mouse",
    category: "girls",
    image: pkgKids,
    subcategories: [
      "Polka Dot Party",
      "Mickey Stage",
      "Bow Magic",
      "Cartoon Cafe",
      "River Boat Ride",
    ],
  },
  {
    id: "peppa-pig",
    title: "Peppa Pig",
    category: "girls",
    image: pkgKids,
    subcategories: [
      "Muddy Puddle",
      "Picnic Lawn",
      "Family House",
      "Playground",
      "Bubble Bath",
    ],
  },
];

export function getKidsThemesByCategory(category: KidsTheme["category"]) {
  return kidsThemes.filter((theme) => theme.category === category);
}

export function getKidsThemeCategory(category: string) {
  return kidsThemeCategories.find((item) => item.id === category as KidsThemeCategory["id"]);
}

export function getKidsTheme(id: string) {
  return kidsThemes.find((theme) => theme.id === id);
}

export { slugify };
