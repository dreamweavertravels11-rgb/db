/**
 * Kids Theme Packages Data
 * One entry per theme id (matches kidsThemes[].id in kids-themes-data.ts).
 * Each theme has 4 packages with unique names, prices, descriptions & inclusions.
 */

import bb01 from "@/assets/pkg/birthday/baby-boy/bday-boy-00.png";
import bb02 from "@/assets/pkg/birthday/baby-boy/bday-boy-01.png";
import bb03 from "@/assets/pkg/birthday/baby-boy/bday-boy-02.png";
import bb04 from "@/assets/pkg/birthday/baby-boy/bday-boy-03.png";
import bb05 from "@/assets/pkg/birthday/baby-boy/bday-boy-04.png";
import bb06 from "@/assets/pkg/birthday/baby-boy/bday-boy-05.png";
import bb07 from "@/assets/pkg/birthday/baby-boy/bday-boy-06.png";
import bg01 from "@/assets/pkg/birthday/baby-girl/bday-girl-00.png";
import bg02 from "@/assets/pkg/birthday/baby-girl/bday-girl-01.png";
import bg03 from "@/assets/pkg/birthday/baby-girl/bday-girl-02.png";
import bg04 from "@/assets/pkg/birthday/baby-girl/bday-girl-03.png";
import bg05 from "@/assets/pkg/birthday/baby-girl/bday-girl-00.png";
import bg06 from "@/assets/pkg/birthday/baby-girl/bday-girl-01.png";
import bg07 from "@/assets/pkg/birthday/baby-girl/bday-girl-02.png";
import tw01 from "@/assets/pkg/birthday/twins/bday-twins-01.jpeg";
import tw02 from "@/assets/pkg/birthday/twins/bday-twins-02.jpeg";
import tw03 from "@/assets/pkg/birthday/twins/bday-twins-03.jpg";
import tw04 from "@/assets/pkg/birthday/twins/bday-twins-04.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import pkgKids from "@/assets/pkg-kids.jpg";

export type KidsThemePackage = {
  id: string;
  name: string;
  category: "birthday";
  categoryLabel: string;
  image: string;
  price: number;
  description: string;
  includes: string[];
  duration: string;
  area: string;
  addons: string[];
};

const commonAddons = [
  "Fog machine effect (on request)",
  "LED uplighting (per pair)",
  "Helium balloon bouquets (per 5)",
  "Personalized photo cutout standie",
  "Bubble machine for extra fun",
];

const kidsThemePackagesMap: Record<string, KidsThemePackage[]> = {

  /* ───────── CARS ───────── */
  "cars": [
    {
      id: "cars-01", name: "Racing Cars Theme Decoration", category: "birthday", categoryLabel: "Kids Theme Decoration",
      image: bb01, price: 5499,
      description: "Rev up the birthday party with a full racing-car theme, complete with checkered flags, balloon arch in racing red & black, and cake table props that any little speed lover will adore.",
      includes: ["100-balloon arch in red, black & white", "Cars theme 6×4 ft backdrop", "Checkered flag bunting garland", "Cake table with mini car props", "Name board with racing typography", "Balloon bouquet centrepieces (2 pcs)"],
      duration: "2–3 hrs setup", area: "Up to 12×12 ft", addons: commonAddons,
    },
    {
      id: "cars-02", name: "Lightning McQueen Birthday Package", category: "birthday", categoryLabel: "Kids Theme Decoration",
      image: bb02, price: 7499,
      description: "Channel the legendary Lightning McQueen with character cutouts, a race-track vinyl floor mat, and a glowing LED fairy-lit stage that transforms any room into Radiator Springs.",
      includes: ["150-balloon arch (racing colors)", "Lightning McQueen character cutout (5 ft)", "Race-track vinyl floor mat", "Cars theme backdrop (6×5 ft)", "LED fairy light stage surround", "Pit-stop photo-booth frame", "Name board + cake table decor"],
      duration: "3–4 hrs setup", area: "Up to 15×15 ft", addons: commonAddons,
    },
    {
      id: "cars-03", name: "Grand Prix Celebration Setup", category: "birthday", categoryLabel: "Kids Theme Decoration",
      image: bb03, price: 9999,
      description: "A full Grand Prix experience at home — premium balloon pillars, trophy display, confetti cannons, and a championship podium photo spot that makes every kid feel like a winner.",
      includes: ["Giant 8 ft balloon arch (Grand Prix colors)", "2 balloon pillars at entrance", "Trophy prop display set (3 pcs)", "Custom acrylic name board with LED", "Cars theme backdrop + stage", "Confetti balloons (10 pcs)", "Themed table runners + centrepieces", "Pit-stop photo booth area"],
      duration: "3–5 hrs setup", area: "Up to 18×18 ft", addons: commonAddons,
    },
    {
      id: "cars-04", name: "Speed Champion Deluxe Decor", category: "birthday", categoryLabel: "Kids Theme Decoration",
      image: bb04, price: 12999,
      description: "The ultimate racing experience — floor-to-ceiling balloon installation, welcome gate arch, personalized stage backdrop and a dedicated cake-cutting podium area with full LED ambiance.",
      includes: ["Floor-to-ceiling balloon installation", "Welcome gate balloon arch (6 ft)", "Premium 8×5 ft custom printed backdrop", "Championship podium cake area", "Full LED accent lighting", "4 life-size character cutouts", "Foil balloon garland (20 ft)", "Personalized birthday banner", "Theme props set (flags, helmets, trophies)"],
      duration: "4–6 hrs setup", area: "Up to 20×20 ft", addons: commonAddons,
    },
  ],

  /* ───────── SPIDERMAN ───────── */
  "spiderman": [
    {
      id: "spiderman-01", name: "Spiderman Web Party Setup", category: "birthday", categoryLabel: "Kids Theme Decoration",
      image: bb05, price: 5999,
      description: "Bring the wall-crawler's world to life with a bold red & blue balloon arch, web-patterned backdrop, and Spider-Man themed cake table that every young hero will love.",
      includes: ["100-balloon arch (red, blue & black)", "Spiderman web pattern backdrop (6×4 ft)", "Theme foil balloons (6 pcs)", "Cake table with Spidey props", "Name board with web typography", "Balloon bouquet set (2 pcs)"],
      duration: "2–3 hrs setup", area: "Up to 12×12 ft", addons: commonAddons,
    },
    {
      id: "spiderman-02", name: "Amazing Spiderman Birthday Decor", category: "birthday", categoryLabel: "Kids Theme Decoration",
      image: bb06, price: 7999,
      description: "Your hero deserves an Amazing celebration — character cutout, web-slinger balloon pillars, LED stage lighting, and a swinging photo booth that captures every heroic moment.",
      includes: ["150-balloon arch (Spiderman colors)", "Spiderman character cutout (5 ft tall)", "Web pattern balloon pillars (2 pcs)", "Spiderman theme backdrop (6×5 ft)", "LED stage surround lighting", "Web-slinger photo-booth frame", "Custom name board + cake table"],
      duration: "3–4 hrs setup", area: "Up to 15×15 ft", addons: commonAddons,
    },
    {
      id: "spiderman-03", name: "Ultimate Spiderman Celebration", category: "birthday", categoryLabel: "Kids Theme Decoration",
      image: bb07, price: 9999,
      description: "Go ultimate with a full city rooftop theme — giant balloon arch, web ceiling installation, confetti balloons, acrylic name board, and a premium Spiderman stage backdrop.",
      includes: ["Giant 8 ft balloon arch (red & blue)", "Web-style ceiling balloon installation", "Spiderman city-rooftop backdrop (8×5 ft)", "Confetti balloons (10 pcs)", "Custom LED acrylic name board", "City skyline themed table runners", "Spidey villain showdown cutout set", "Photo booth props box"],
      duration: "3–5 hrs setup", area: "Up to 18×18 ft", addons: commonAddons,
    },
    {
      id: "spiderman-04", name: "Marvel Hero Birthday Extravaganza", category: "birthday", categoryLabel: "Kids Theme Decoration",
      image: g1, price: 12999,
      description: "The full Marvel Hero treatment — premium floor-to-ceiling balloon installation, 4 life-size superhero cutouts, LED web glow effects, custom backdrop and a hero's welcome gate arch.",
      includes: ["Floor-to-ceiling balloon installation (Marvel colors)", "Welcome gate arch (6 ft)", "4 Marvel hero life-size cutouts", "Premium 8×5 ft printed Marvel backdrop", "LED web glow effect lighting", "Foil balloon garland (20 ft)", "Personalized hero name board", "Theme props & confetti balloons set"],
      duration: "4–6 hrs setup", area: "Up to 20×20 ft", addons: commonAddons,
    },
  ],

  /* ───────── JUNGLE SAFARI ───────── */
  "jungle-safari": [
    {
      id: "jungle-safari-01", name: "Jungle Safari Balloon Setup", category: "birthday", categoryLabel: "Kids Theme Decoration",
      image: g2, price: 5499,
      description: "A roaring good time with jungle-green balloon arch, safari animal cutouts, and a lush tropical backdrop that transforms any room into a wild adventure zone.",
      includes: ["100-balloon arch (jungle green, brown & yellow)", "Safari animal cutouts (lion, elephant, giraffe)", "Tropical jungle backdrop (6×4 ft)", "Cake table with safari props", "Name board with jungle font", "Leaf & vine balloon garland"],
      duration: "2–3 hrs setup", area: "Up to 12×12 ft", addons: commonAddons,
    },
    {
      id: "jungle-safari-02", name: "Wild Adventure Birthday Decor", category: "birthday", categoryLabel: "Kids Theme Decoration",
      image: g3, price: 7499,
      description: "Go wild with a full safari adventure setup — animal parade cutouts, explorer hat props, jungle backdrop with LED torchlight effects, and a cake table dressed in safari style.",
      includes: ["150-balloon arch (jungle & earth tones)", "5 safari animal cutouts", "Explorer-style photo booth frame", "Jungle safari backdrop (6×5 ft)", "LED torchlight accent effects", "Safari jeep prop cutout", "Themed name board + cake table"],
      duration: "3–4 hrs setup", area: "Up to 15×15 ft", addons: commonAddons,
    },
    {
      id: "jungle-safari-03", name: "Safari Explorer Celebration", category: "birthday", categoryLabel: "Kids Theme Decoration",
      image: g4, price: 9499,
      description: "An immersive jungle expedition — giant balloon arch, hanging vine & leaf ceiling decor, campfire storytelling prop corner, and a premium explorer-style stage backdrop.",
      includes: ["Giant 8 ft balloon arch (tropical colors)", "Hanging vine & leaf ceiling installation", "Campfire storytelling prop corner", "Premium safari backdrop (8×5 ft)", "Custom LED acrylic name board", "Animal parade floor cutouts", "Jungle prop box (binoculars, hats, maps)", "Confetti balloons (10 pcs)"],
      duration: "3–5 hrs setup", area: "Up to 18×18 ft", addons: commonAddons,
    },
    {
      id: "jungle-safari-04", name: "Tropical Jungle Birthday Extravaganza", category: "birthday", categoryLabel: "Kids Theme Decoration",
      image: g5, price: 12499,
      description: "The ultimate jungle fiesta — floor-to-ceiling tropical balloon installation, welcome tree arch, 6 life-size animal cutouts, LED jungle ambiance and a personalized safari name board.",
      includes: ["Floor-to-ceiling tropical balloon installation", "Welcome tree arch (6 ft tall)", "6 life-size jungle animal cutouts", "Premium 8×5 ft jungle backdrop with LED", "Hanging floral & leaf canopy", "Personalized safari name board", "Full LED ambient jungle lighting", "Complete safari props set"],
      duration: "4–6 hrs setup", area: "Up to 20×20 ft", addons: commonAddons,
    },
  ],

  /* ───────── DINOSAURS ───────── */
  "dinosaurs": [
    {
      id: "dinosaurs-01", name: "Dino Roar Birthday Setup", category: "birthday", categoryLabel: "Kids Theme Decoration",
      image: tw01, price: 5499,
      description: "A pre-historic party experience with dino-green balloon arch, roaring dinosaur cutouts, fossil-dig props and a Jurassic backdrop every little paleontologist will go crazy for.",
      includes: ["100-balloon arch (dino green & orange)", "Dinosaur character cutouts (T-Rex & Triceratops)", "Jurassic theme backdrop (6×4 ft)", "Fossil dig prop set", "Cake table with dino props", "Name board with dino typography"],
      duration: "2–3 hrs setup", area: "Up to 12×12 ft", addons: commonAddons,
    },
    {
      id: "dinosaurs-02", name: "Prehistoric Adventure Decor", category: "birthday", categoryLabel: "Kids Theme Decoration",
      image: tw02, price: 7499,
      description: "Roar into the Jurassic era with a full dino parade, prehistoric cave backdrop, LED green-glow effects and an explorer photo booth that captures every wild encounter.",
      includes: ["150-balloon arch (prehistoric colors)", "4 dinosaur cutouts (dino parade)", "Prehistoric cave backdrop (6×5 ft)", "LED green glow accent lighting", "Explorer photo booth frame", "Dino egg prop display", "Themed name board + cake table"],
      duration: "3–4 hrs setup", area: "Up to 15×15 ft", addons: commonAddons,
    },
    {
      id: "dinosaurs-03", name: "Jurassic Birthday Celebration", category: "birthday", categoryLabel: "Kids Theme Decoration",
      image: tw03, price: 9999,
      description: "A full Jurassic Park experience at home — giant dino arch, hanging pterodactyl mobiles, volcano prop centerpiece, confetti balloons and a premium prehistoric stage backdrop.",
      includes: ["Giant 8 ft balloon arch (Jurassic green & brown)", "Hanging pterodactyl balloon mobiles", "Volcano centrepiece prop", "Jurassic Park style backdrop (8×5 ft)", "Confetti balloons (10 pcs)", "Custom LED name board", "Dino footprint floor decal trail", "Prehistoric prop box"],
      duration: "3–5 hrs setup", area: "Up to 18×18 ft", addons: commonAddons,
    },
    {
      id: "dinosaurs-04", name: "Ultimate Dino World Extravaganza", category: "birthday", categoryLabel: "Kids Theme Decoration",
      image: tw04, price: 12999,
      description: "The most epic Dino World experience — floor-to-ceiling balloon jungle, welcome T-Rex arch, 5 life-size dino cutouts, LED jungle effects, and a personalized prehistoric name board.",
      includes: ["Floor-to-ceiling balloon jungle installation", "Welcome T-Rex arch (6 ft tall)", "5 life-size dinosaur cutouts", "Premium 8×5 ft Jurassic backdrop with LED", "Hanging pterodactyl & egg balloon mobiles", "Personalized dino name board", "Full dino props set (fossils, bones, eggs)", "LED green jungle ambient lighting"],
      duration: "4–6 hrs setup", area: "Up to 20×20 ft", addons: commonAddons,
    },
  ],

  /* ───────── AVENGERS ───────── */
  "avengers": [
    {
      id: "avengers-01", name: "Avengers Assemble Party Setup", category: "birthday", categoryLabel: "Kids Theme Decoration",
      image: bb01, price: 5999,
      description: "Earth's mightiest heroes come to your birthday party — Avengers balloon arch, hero backdrop, shield & arc-reactor props, and a cake table worthy of a superhero team.",
      includes: ["100-balloon arch (Avengers colors: red, blue, gold)", "Avengers team backdrop (6×4 ft)", "Shield & arc-reactor prop set", "Cake table with hero props", "Name board with Marvel typography", "Avengers foil balloons (6 pcs)"],
      duration: "2–3 hrs setup", area: "Up to 12×12 ft", addons: commonAddons,
    },
    {
      id: "avengers-02", name: "Marvel Superhero Birthday Decor", category: "birthday", categoryLabel: "Kids Theme Decoration",
      image: bb03, price: 7999,
      description: "Assemble your squad for an epic Marvel celebration — 5 hero cutouts, Avengers HQ backdrop, LED energy effects, and a heroic photo booth for those 'I am Iron Man' moments.",
      includes: ["150-balloon arch (Avengers palette)", "5 Marvel hero character cutouts", "Avengers HQ backdrop (6×5 ft)", "LED energy arc effect lighting", "Hero photo booth frame", "Infinity Stone prop display", "Name board + cake table decor"],
      duration: "3–4 hrs setup", area: "Up to 15×15 ft", addons: commonAddons,
    },
    {
      id: "avengers-03", name: "Avengers Hero Birthday Package", category: "birthday", categoryLabel: "Kids Theme Decoration",
      image: bb05, price: 9999,
      description: "A full Avengers HQ experience — giant hero arch, battle scene backdrop, confetti balloons, custom LED name board and a Thanos gauntlet photo prop that steals every shot.",
      includes: ["Giant 8 ft balloon arch (hero colors)", "Battle scene backdrop (8×5 ft)", "Infinity Gauntlet photo prop", "Confetti balloons (10 pcs)", "Custom LED acrylic name board", "6 Marvel hero themed foil balloons", "Themed centrepieces & table runners", "Hero badge prop set"],
      duration: "3–5 hrs setup", area: "Up to 18×18 ft", addons: commonAddons,
    },
    {
      id: "avengers-04", name: "Ultimate Marvel Birthday Extravaganza", category: "birthday", categoryLabel: "Kids Theme Decoration",
      image: bb07, price: 12999,
      description: "The most powerful birthday experience in the universe — floor-to-ceiling balloon installation, Avengers Tower welcome arch, 6 life-size cutouts, full LED ambiance and personalized hero name board.",
      includes: ["Floor-to-ceiling Avengers balloon installation", "Avengers Tower welcome arch (6 ft)", "6 life-size Marvel hero cutouts", "Premium 8×5 ft printed Avengers backdrop with LED", "Full LED hero-glow ambient lighting", "Foil balloon garland (20 ft)", "Personalized hero name board", "Complete Marvel props set"],
      duration: "4–6 hrs setup", area: "Up to 20×20 ft", addons: commonAddons,
    },
  ],

  /* ───────── SPACE ───────── */
  "space": [
    {
      id: "space-01", name: "Rocket Launch Birthday Setup", category: "birthday", categoryLabel: "Kids Theme Decoration",
      image: bb02, price: 5999,
      description: "3… 2… 1… Blast off! A galaxy-themed balloon arch, rocket & planet props, astronaut backdrop, and a cake table that looks like mission control for your little space explorer.",
      includes: ["100-balloon arch (galaxy: dark blue, silver & orange)", "Astronaut & rocket backdrop (6×4 ft)", "Planet prop set (hanging mobiles)", "Cake table with rocket props", "Name board with space typography", "Star & moon foil balloons (6 pcs)"],
      duration: "2–3 hrs setup", area: "Up to 12×12 ft", addons: commonAddons,
    },
    {
      id: "space-02", name: "Galaxy Explorer Birthday Decor", category: "birthday", categoryLabel: "Kids Theme Decoration",
      image: bb04, price: 7499,
      description: "Voyage through the cosmos with a galaxy-gradient balloon arch, starship backdrop, LED star-field ceiling, astronaut cutout, and a moon camp photo booth for interstellar memories.",
      includes: ["150-balloon arch (galaxy gradient)", "Starship command backdrop (6×5 ft)", "LED star-field ceiling installation", "Astronaut character cutout (5 ft)", "Moon camp photo booth frame", "Hanging planet & star mobiles", "Name board + cake table decor"],
      duration: "3–4 hrs setup", area: "Up to 15×15 ft", addons: commonAddons,
    },
    {
      id: "space-03", name: "Space Mission Celebration", category: "birthday", categoryLabel: "Kids Theme Decoration",
      image: bb06, price: 9499,
      description: "A full space mission briefing room — giant galaxy arch, nebula balloon ceiling, alien encounter props, confetti balloons, custom LED name board and a mission control stage backdrop.",
      includes: ["Giant 8 ft balloon arch (galaxy colors)", "Nebula balloon ceiling cloud installation", "Mission control stage backdrop (8×5 ft)", "Alien encounter prop set", "Confetti balloons (10 pcs)", "Custom LED acrylic name board", "Astronaut & rocket centrepieces", "Star Wars / NASA inspired prop box"],
      duration: "3–5 hrs setup", area: "Up to 18×18 ft", addons: commonAddons,
    },
    {
      id: "space-04", name: "Cosmic Adventure Birthday Extravaganza", category: "birthday", categoryLabel: "Kids Theme Decoration",
      image: g1, price: 12999,
      description: "The ultimate cosmic birthday — floor-to-ceiling galaxy balloon installation, rocket launch welcome arch, full starfield LED lighting, 4 astronaut cutouts and an immersive space backdrop.",
      includes: ["Floor-to-ceiling galaxy balloon installation", "Rocket launch welcome arch (6 ft)", "4 life-size astronaut cutouts", "Premium 8×5 ft printed space backdrop with LED", "Full star-field LED ambient lighting", "Foil balloon garland (galaxy, 20 ft)", "Personalized star name board", "Complete space props & helmet photo set"],
      duration: "4–6 hrs setup", area: "Up to 20×20 ft", addons: commonAddons,
    },
  ],

  /* ───────── LEGO ───────── */
  "lego": [
    {
      id: "lego-01", name: "Lego Brick Birthday Setup", category: "birthday", categoryLabel: "Kids Theme Decoration",
      image: bb03, price: 5499,
      description: "Build the perfect birthday with primary-colored Lego-brick balloon arch, brick-patterned backdrop, mini build props and a cake table that celebrates every little master builder.",
      includes: ["100-balloon arch (Lego primary: red, blue, yellow, green)", "Lego brick pattern backdrop (6×4 ft)", "Mini build prop set", "Cake table with Lego bricks decor", "Name board with Lego typography", "Lego minifig foil balloons (4 pcs)"],
      duration: "2–3 hrs setup", area: "Up to 12×12 ft", addons: commonAddons,
    },
    {
      id: "lego-02", name: "Lego Builders Celebration Decor", category: "birthday", categoryLabel: "Kids Theme Decoration",
      image: bb05, price: 7499,
      description: "A builder's dream — colorful Lego balloon pillars, Minifig character cutouts, interactive build station prop, LED color-block lighting, and a creative photo-booth for master builders.",
      includes: ["150-balloon arch (Lego spectrum)", "2 Minifig character cutouts (5 ft)", "Interactive build station prop", "Lego cityscape backdrop (6×5 ft)", "LED color-block accent lighting", "Creative photo-booth frame", "Name board + cake table decor"],
      duration: "3–4 hrs setup", area: "Up to 15×15 ft", addons: commonAddons,
    },
    {
      id: "lego-03", name: "Lego Master Builder Birthday", category: "birthday", categoryLabel: "Kids Theme Decoration",
      image: bb07, price: 9499,
      description: "Celebrate the Master Builder with a giant Lego brick arch, building instructions backdrop, confetti bricks, custom LED name board and a Lego city-street photo area.",
      includes: ["Giant 8 ft balloon arch (Lego spectrum)", "Building instructions artwork backdrop (8×5 ft)", "Lego city street photo area setup", "Confetti balloons (10 pcs)", "Custom LED acrylic name board", "Lego minifig centrepieces (4 pcs)", "Brick-pattern table runners", "Build-zone prop box"],
      duration: "3–5 hrs setup", area: "Up to 18×18 ft", addons: commonAddons,
    },
    {
      id: "lego-04", name: "Lego City Birthday Extravaganza", category: "birthday", categoryLabel: "Kids Theme Decoration",
      image: g2, price: 12499,
      description: "Build the ultimate Lego City birthday — floor-to-ceiling colorful balloon installation, Lego gateway arch, 5 giant Minifig cutouts, full RGB LED lighting and personalized name block.",
      includes: ["Floor-to-ceiling Lego balloon installation", "Lego gateway arch (6 ft)", "5 giant Minifig cutouts", "Premium 8×5 ft Lego City backdrop with LED", "Full RGB LED color-block lighting", "Foil balloon garland (Lego colors, 20 ft)", "Personalized Lego-font name board", "Complete Lego props set"],
      duration: "4–6 hrs setup", area: "Up to 20×20 ft", addons: commonAddons,
    },
  ],

  /* ───────── FARM ───────── */
  "farm": [
    {
      id: "farm-01", name: "Barnyard Birthday Setup", category: "birthday", categoryLabel: "Kids Theme Decoration",
      image: bb02, price: 4999,
      description: "A charming barnyard birthday with red-barn balloon arch, farm animal cutouts, hay bale props and a sunflower cake table that brings the countryside right to your doorstep.",
      includes: ["100-balloon arch (red, white & yellow)", "Farm animal cutouts (cow, pig, chick)", "Red barn backdrop (6×4 ft)", "Hay bale prop set", "Cake table with sunflower decor", "Name board with farm typography"],
      duration: "2–3 hrs setup", area: "Up to 12×12 ft", addons: commonAddons,
    },
    {
      id: "farm-02", name: "Farm Fun Birthday Decor", category: "birthday", categoryLabel: "Kids Theme Decoration",
      image: bb04, price: 6999,
      description: "Get ready for a hayride of fun — full barnyard balloon arch, 5 farm animal cutouts, farmhouse backdrop, wooden fence photo frame and a country-picnic cake station.",
      includes: ["150-balloon arch (farm colors)", "5 farm animal character cutouts", "Farmhouse backdrop (6×5 ft)", "Wooden fence photo frame", "Country picnic basket decor set", "Tractor prop cutout", "Name board + cake table decor"],
      duration: "3–4 hrs setup", area: "Up to 15×15 ft", addons: commonAddons,
    },
    {
      id: "farm-03", name: "Old MacDonald's Birthday Bash", category: "birthday", categoryLabel: "Kids Theme Decoration",
      image: bb06, price: 8999,
      description: "E-I-E-I-O! A full Old MacDonald's farm experience with giant barn arch, farmyard panorama backdrop, animal parade cutouts, sunflower garland and a scarecrow photo prop.",
      includes: ["Giant 8 ft balloon arch (barn red & yellow)", "Farmyard panorama backdrop (8×5 ft)", "Animal parade floor cutout trail", "Sunflower & leaf balloon garland", "Scarecrow photo prop", "Custom name board (chalkboard style)", "Wooden centrepieces & mason jar decor", "Farm prop box"],
      duration: "3–5 hrs setup", area: "Up to 18×18 ft", addons: commonAddons,
    },
    {
      id: "farm-04", name: "Country Farm Birthday Extravaganza", category: "birthday", categoryLabel: "Kids Theme Decoration",
      image: g3, price: 11999,
      description: "The full country farm fiesta — floor-to-ceiling rustic balloon installation, barn-door welcome arch, 6 life-size animal cutouts, LED warm lantern lighting and a custom chalkboard name board.",
      includes: ["Floor-to-ceiling rustic balloon installation", "Barn-door welcome arch (6 ft)", "6 life-size farm animal cutouts", "Premium 8×5 ft countryside backdrop with LED", "LED warm lantern ambient lighting", "Sunflower balloon garland (20 ft)", "Custom chalkboard name board", "Complete farm props set"],
      duration: "4–6 hrs setup", area: "Up to 20×20 ft", addons: commonAddons,
    },
  ],

  /* ───────── FOOTBALL ───────── */
  "football": [
    {
      id: "football-01", name: "Goal Scoring Birthday Setup", category: "birthday", categoryLabel: "Kids Theme Decoration",
      image: bb01, price: 4999,
      description: "Score big with a football-themed birthday — green & white balloon arch, goal post backdrop, football prop set and a champions cake table that celebrates every future star.",
      includes: ["100-balloon arch (green, white & black)", "Football goal post backdrop (6×4 ft)", "Football prop set (ball, boots, whistle)", "Cake table with football decor", "Name board with jersey typography", "Football foil balloons (6 pcs)"],
      duration: "2–3 hrs setup", area: "Up to 12×12 ft", addons: commonAddons,
    },
    {
      id: "football-02", name: "Football Star Birthday Decor", category: "birthday", categoryLabel: "Kids Theme Decoration",
      image: bb05, price: 6999,
      description: "Celebrate your football star with jersey cutouts, stadium crowd backdrop, LED floodlight effects, a champions trophy display and a penalty shootout photo booth.",
      includes: ["150-balloon arch (football pitch colors)", "Jersey cutout (custom number)", "Stadium crowd backdrop (6×5 ft)", "LED floodlight accent effects", "Champions trophy display", "Penalty shootout photo-booth frame", "Name board + cake table decor"],
      duration: "3–4 hrs setup", area: "Up to 15×15 ft", addons: commonAddons,
    },
    {
      id: "football-03", name: "Champion Football Celebration", category: "birthday", categoryLabel: "Kids Theme Decoration",
      image: g2, price: 8999,
      description: "A full football championship experience — giant pitch arch, World Cup backdrop, confetti cannons, LED stadium lighting and a team photo prop station for the whole squad.",
      includes: ["Giant 8 ft balloon arch (championship colors)", "World Cup trophy prop (3 ft)", "Stadium pitch backdrop (8×5 ft)", "Confetti balloons (10 pcs)", "Custom LED name board", "Team photo prop station", "Trophy & medal centrepieces", "Football themed table runners"],
      duration: "3–5 hrs setup", area: "Up to 18×18 ft", addons: commonAddons,
    },
    {
      id: "football-04", name: "Football Legend Birthday Extravaganza", category: "birthday", categoryLabel: "Kids Theme Decoration",
      image: g5, price: 11999,
      description: "Legend status achieved — floor-to-ceiling pitch balloon installation, stadium gateway arch, full LED floodlight ambiance, 4 football hero cutouts and a personalized champions name board.",
      includes: ["Floor-to-ceiling football pitch balloon installation", "Stadium gateway arch (6 ft)", "4 football legend cutouts", "Premium 8×5 ft stadium backdrop with LED", "Full LED floodlight ambient lighting", "Foil balloon garland (20 ft)", "Personalized champions name board", "Complete football props set"],
      duration: "4–6 hrs setup", area: "Up to 20×20 ft", addons: commonAddons,
    },
  ],

  /* ───────── CRICKET ───────── */
  "cricket": [
    {
      id: "cricket-01", name: "Cricket Craze Birthday Setup", category: "birthday", categoryLabel: "Kids Theme Decoration",
      image: bb03, price: 4999,
      description: "Bowl over your guests with a cricket-themed birthday — blue & gold balloon arch, cricket ground backdrop, bat & ball props and a World Cup cake table.",
      includes: ["100-balloon arch (cricket blue & gold)", "Cricket ground backdrop (6×4 ft)", "Bat, ball & stumps prop set", "Cake table with cricket decor", "Name board with cricket jersey font", "Cricket foil balloons (6 pcs)"],
      duration: "2–3 hrs setup", area: "Up to 12×12 ft", addons: commonAddons,
    },
    {
      id: "cricket-02", name: "Stadium Star Birthday Decor", category: "birthday", categoryLabel: "Kids Theme Decoration",
      image: bb07, price: 6999,
      description: "Your little cricketer deserves a stadium-style celebration — jersey cutout, cricket stadium backdrop, LED spotlight effects and a champions pavilion photo booth.",
      includes: ["150-balloon arch (stadium colors)", "Cricket jersey cutout (custom)", "Stadium backdrop (6×5 ft)", "LED spotlight accent effects", "Champions pavilion photo-booth frame", "Stumps & medal prop display", "Name board + cake table decor"],
      duration: "3–4 hrs setup", area: "Up to 15×15 ft", addons: commonAddons,
    },
    {
      id: "cricket-03", name: "World Cup Cricket Celebration", category: "birthday", categoryLabel: "Kids Theme Decoration",
      image: g4, price: 8999,
      description: "A World Cup-themed birthday bash with giant cricket arch, international stadium backdrop, confetti balloons and a full trophy display fit for a champion.",
      includes: ["Giant 8 ft balloon arch (blue & gold)", "World Cup trophy display (3 ft)", "International stadium backdrop (8×5 ft)", "Confetti balloons (10 pcs)", "Custom LED name board", "Jersey & cap centrepieces", "Cricket themed table runners", "Full props set"],
      duration: "3–5 hrs setup", area: "Up to 18×18 ft", addons: commonAddons,
    },
    {
      id: "cricket-04", name: "Cricket Champion Extravaganza", category: "birthday", categoryLabel: "Kids Theme Decoration",
      image: g1, price: 11999,
      description: "The ultimate cricket birthday — floor-to-ceiling blue balloon installation, stadium gateway arch, LED spotlight ambiance, champion cutouts and a personalized captain's name board.",
      includes: ["Floor-to-ceiling cricket balloon installation", "Stadium gateway arch (6 ft)", "4 cricket champion cutouts", "Premium 8×5 ft printed stadium backdrop", "Full LED spotlight ambient lighting", "Foil balloon garland (20 ft)", "Personalized captain's name board", "Complete cricket props set"],
      duration: "4–6 hrs setup", area: "Up to 20×20 ft", addons: commonAddons,
    },
  ],

  /* ───────── UNICORN ───────── */
  "unicorn": [
    {
      id: "unicorn-01", name: "Magical Unicorn Birthday Dream", category: "birthday", categoryLabel: "Kids Theme Decoration",
      image: bg01, price: 5999,
      description: "Step into a magical unicorn dream with a pastel rainbow balloon arch, glittery unicorn backdrop, gold-horn cake table props and fairy-light accents for the most enchanting birthday.",
      includes: ["100-balloon arch (pastel rainbow: pink, purple, gold)", "Unicorn glitter backdrop (6×4 ft)", "Gold horn & crown cake table props", "Rainbow foil balloons (6 pcs)", "Fairy light curtain accents", "Name board with rose-gold unicorn font"],
      duration: "2–3 hrs setup", area: "Up to 12×12 ft", addons: commonAddons,
    },
    {
      id: "unicorn-02", name: "Rainbow Unicorn Celebration Setup", category: "birthday", categoryLabel: "Kids Theme Decoration",
      image: bg02, price: 7999,
      description: "A rainbow of magic awaits — full pastel unicorn balloon arch, life-size unicorn cutout, LED fairy-light stage, iridescent bubble backdrop, and an enchanted photo booth.",
      includes: ["150-balloon arch (full rainbow pastel)", "Life-size unicorn cutout (5 ft)", "Iridescent bubble balloon backdrop", "Unicorn dream backdrop (6×5 ft)", "LED fairy light stage surround", "Enchanted photo-booth frame", "Name board + cake table decor"],
      duration: "3–4 hrs setup", area: "Up to 15×15 ft", addons: commonAddons,
    },
    {
      id: "unicorn-03", name: "Enchanted Unicorn Party Decor", category: "birthday", categoryLabel: "Kids Theme Decoration",
      image: bg03, price: 9999,
      description: "Pure enchantment — giant pastel balloon arch, cloud balloon ceiling, unicorn magic forest backdrop, confetti balloons, custom rose-gold LED name board and a wish-making photo station.",
      includes: ["Giant 8 ft balloon arch (enchanted pastel)", "Cloud balloon ceiling installation", "Magic forest backdrop (8×5 ft)", "Confetti balloons (10 pcs)", "Custom rose-gold LED name board", "Unicorn & fairy centrepieces (4 pcs)", "Floral balloon garland", "Wish-making wand photo prop set"],
      duration: "3–5 hrs setup", area: "Up to 18×18 ft", addons: commonAddons,
    },
    {
      id: "unicorn-04", name: "Unicorn Fantasy Birthday Extravaganza", category: "birthday", categoryLabel: "Kids Theme Decoration",
      image: bg04, price: 12999,
      description: "The most magical birthday ever — floor-to-ceiling pastel balloon garden, rainbow welcome arch, 4 unicorn & fairy cutouts, full fairy-light canopy and a personalized gold-foil name board.",
      includes: ["Floor-to-ceiling pastel balloon garden", "Rainbow welcome arch (6 ft)", "4 unicorn & fairy life-size cutouts", "Premium 8×5 ft fairy-tale backdrop with LED", "Full fairy-light canopy ceiling", "Rose-gold foil balloon garland (20 ft)", "Personalized gold-foil name board", "Complete unicorn & magic props set"],
      duration: "4–6 hrs setup", area: "Up to 20×20 ft", addons: commonAddons,
    },
  ],

  /* ───────── MERMAID ───────── */
  "mermaid": [
    {
      id: "mermaid-01", name: "Mermaid Ocean Adventure Birthday", category: "birthday", categoryLabel: "Kids Theme Decoration",
      image: bg05, price: 5999,
      description: "Dive deep into an ocean adventure — teal & coral balloon arch, underwater sea backdrop, seashell & starfish props and a mermaid tail cake table that sparkling like the sea.",
      includes: ["100-balloon arch (teal, coral & aqua)", "Underwater ocean backdrop (6×4 ft)", "Seashell & starfish prop set", "Mermaid tail cake table decor", "Name board with ocean wave typography", "Fish & bubble foil balloons (6 pcs)"],
      duration: "2–3 hrs setup", area: "Up to 12×12 ft", addons: commonAddons,
    },
    {
      id: "mermaid-02", name: "Under the Sea Birthday Party", category: "birthday", categoryLabel: "Kids Theme Decoration",
      image: bg06, price: 7999,
      description: "Go under the sea for an unforgettable birthday — mermaid cutout, coral reef backdrop, blue LED wave lighting, bubble balloon ceiling and an underwater cave photo booth.",
      includes: ["150-balloon arch (ocean gradient: teal to coral)", "Mermaid character cutout (5 ft)", "Coral reef backdrop (6×5 ft)", "Blue LED wave accent lighting", "Bubble balloon ceiling installation", "Underwater cave photo-booth frame", "Name board + cake table decor"],
      duration: "3–4 hrs setup", area: "Up to 15×15 ft", addons: commonAddons,
    },
    {
      id: "mermaid-03", name: "Mermaid Cove Celebration Setup", category: "birthday", categoryLabel: "Kids Theme Decoration",
      image: bg07, price: 9999,
      description: "A magical mermaid cove — giant ocean balloon arch, wave balloon ceiling, sea cave backdrop, confetti balloons, custom LED sea-glass name board and a pearl-treasure photo station.",
      includes: ["Giant 8 ft balloon arch (ocean colors)", "Wave balloon ceiling installation", "Sea cave premium backdrop (8×5 ft)", "Confetti balloons (10 pcs)", "Custom LED sea-glass name board", "Pearl & treasure chest centrepieces", "Coral & seashell garland", "Mermaid prop box (tail, crown, shells)"],
      duration: "3–5 hrs setup", area: "Up to 18×18 ft", addons: commonAddons,
    },
    {
      id: "mermaid-04", name: "Ocean Kingdom Birthday Extravaganza", category: "birthday", categoryLabel: "Kids Theme Decoration",
      image: g1, price: 12999,
      description: "Reign over the ocean kingdom — floor-to-ceiling underwater balloon installation, coral arch gateway, 4 mermaid & sea creature cutouts, full blue LED ocean lighting and a pearl name board.",
      includes: ["Floor-to-ceiling underwater balloon installation", "Coral arch gateway (6 ft)", "4 mermaid & sea creature life-size cutouts", "Premium 8×5 ft ocean kingdom backdrop with LED", "Full blue LED ocean ambient lighting", "Aqua foil balloon garland (20 ft)", "Personalized pearl name board", "Complete ocean props set (shells, pearls, nets)"],
      duration: "4–6 hrs setup", area: "Up to 20×20 ft", addons: commonAddons,
    },
  ],

  /* ───────── BUTTERFLY ───────── */
  "butterfly": [
    {
      id: "butterfly-01", name: "Butterfly Garden Birthday Setup", category: "birthday", categoryLabel: "Kids Theme Decoration",
      image: bg01, price: 5499,
      description: "Flutter into a magical butterfly garden — pink & purple balloon arch, butterfly wing backdrop, flower meadow props and a garden cake table that blooms with color.",
      includes: ["100-balloon arch (pink, purple & yellow)", "Butterfly garden backdrop (6×4 ft)", "Flower meadow prop set", "Butterfly wing photo frame", "Cake table with floral decor", "Name board with butterfly typography"],
      duration: "2–3 hrs setup", area: "Up to 12×12 ft", addons: commonAddons,
    },
    {
      id: "butterfly-02", name: "Enchanted Butterfly Birthday Decor", category: "birthday", categoryLabel: "Kids Theme Decoration",
      image: bg03, price: 7499,
      description: "An enchanting butterfly world — butterfly cutouts, floral garden backdrop, LED fairy-glow effects, hanging butterfly balloon mobiles and a meadow photo booth.",
      includes: ["150-balloon arch (garden pastels)", "Butterfly character cutouts (4 pcs)", "Floral garden backdrop (6×5 ft)", "LED fairy glow accent effects", "Hanging butterfly balloon mobiles", "Meadow photo-booth frame", "Name board + cake table decor"],
      duration: "3–4 hrs setup", area: "Up to 15×15 ft", addons: commonAddons,
    },
    {
      id: "butterfly-03", name: "Butterfly Bloom Birthday Celebration", category: "birthday", categoryLabel: "Kids Theme Decoration",
      image: bg05, price: 9499,
      description: "Watch imaginations bloom — giant floral balloon arch, butterfly ceiling installation, botanical garden backdrop, confetti balloons and a custom petal name board.",
      includes: ["Giant 8 ft balloon arch (floral tones)", "Butterfly balloon ceiling installation", "Botanical garden backdrop (8×5 ft)", "Confetti balloons (10 pcs)", "Custom petal name board", "Flower centrepieces (4 pcs)", "Butterfly & vine balloon garland", "Garden prop box"],
      duration: "3–5 hrs setup", area: "Up to 18×18 ft", addons: commonAddons,
    },
    {
      id: "butterfly-04", name: "Butterfly Paradise Birthday Extravaganza", category: "birthday", categoryLabel: "Kids Theme Decoration",
      image: bg07, price: 12499,
      description: "A paradise of wings and blooms — floor-to-ceiling floral balloon garden, butterfly arch gateway, 4 life-size butterfly cutouts, full LED blossom lighting and a rose-gold name board.",
      includes: ["Floor-to-ceiling floral balloon garden installation", "Butterfly arch gateway (6 ft)", "4 life-size butterfly cutouts", "Premium 8×5 ft garden paradise backdrop with LED", "Full LED blossom ambient lighting", "Pink foil balloon garland (20 ft)", "Rose-gold name board", "Complete garden & butterfly props set"],
      duration: "4–6 hrs setup", area: "Up to 20×20 ft", addons: commonAddons,
    },
  ],

  /* ───────── RAINBOW ───────── */
  "rainbow": [
    {
      id: "rainbow-01", name: "Rainbow Burst Birthday Setup", category: "birthday", categoryLabel: "Kids Theme Decoration",
      image: bg02, price: 5499,
      description: "Bring all the colors of the rainbow to your birthday celebration — full rainbow balloon arch, cloud backdrop, pot-of-gold cake table and colorful confetti everywhere.",
      includes: ["100-balloon arch (full rainbow spectrum)", "Rainbow cloud backdrop (6×4 ft)", "Pot-of-gold cake table decor", "Rainbow foil balloons (6 pcs)", "Cloud hanging mobiles (3 pcs)", "Name board with rainbow typography"],
      duration: "2–3 hrs setup", area: "Up to 12×12 ft", addons: commonAddons,
    },
    {
      id: "rainbow-02", name: "Over the Rainbow Birthday Decor", category: "birthday", categoryLabel: "Kids Theme Decoration",
      image: bg04, price: 7499,
      description: "Follow the rainbow to the best birthday ever — giant cloud balloon ceiling, unicorn + rainbow cutout, LED color-wash effects and a magic rainbow photo booth.",
      includes: ["150-balloon arch (rainbow spectrum)", "Rainbow cloud ceiling installation", "Unicorn & rainbow cutout set", "LED full-color wash accent lighting", "Rainbow photo-booth frame", "Gold coin & treasure prop set", "Name board + cake table decor"],
      duration: "3–4 hrs setup", area: "Up to 15×15 ft", addons: commonAddons,
    },
    {
      id: "rainbow-03", name: "Rainbow Dream Celebration", category: "birthday", categoryLabel: "Kids Theme Decoration",
      image: bg06, price: 9499,
      description: "A dream in full color — giant spectrum balloon arch, rainbow cloud backdrop, confetti balloons in every color, custom LED name board and a sky-high photo experience.",
      includes: ["Giant 8 ft rainbow balloon arch", "Rainbow cloud balloon ceiling", "Sky-high premium backdrop (8×5 ft)", "Confetti balloons (10 pcs, every color)", "Custom LED color-burst name board", "Rainbow star centrepieces (4 pcs)", "Gold foil balloon garland", "Sky prop box"],
      duration: "3–5 hrs setup", area: "Up to 18×18 ft", addons: commonAddons,
    },
    {
      id: "rainbow-04", name: "Rainbow Magic Birthday Extravaganza", category: "birthday", categoryLabel: "Kids Theme Decoration",
      image: g2, price: 12499,
      description: "Pure rainbow magic — floor-to-ceiling spectrum balloon installation, cloud arch gateway, 4 rainbow & star cutouts, full RGB LED color wash and a personalized gold-foil name board.",
      includes: ["Floor-to-ceiling rainbow balloon installation", "Cloud arch gateway (6 ft)", "4 rainbow & star life-size cutouts", "Premium 8×5 ft rainbow sky backdrop with LED", "Full RGB LED color-wash ambient lighting", "Rainbow foil garland (20 ft)", "Personalized gold-foil name board", "Complete rainbow & cloud props set"],
      duration: "4–6 hrs setup", area: "Up to 20×20 ft", addons: commonAddons,
    },
  ],

  /* ───────── CANDYLAND ───────── */
  "candyland": [
    {
      id: "candyland-01", name: "Candy Kingdom Birthday Setup", category: "birthday", categoryLabel: "Kids Theme Decoration",
      image: bg03, price: 5499,
      description: "A sugary sweet birthday — candy-pink balloon arch, lollipop backdrop, candy jar props and a cake table overflowing with sweet-shop charm.",
      includes: ["100-balloon arch (candy pink, red & white)", "Lollipop lane backdrop (6×4 ft)", "Candy jar & lollipop prop set", "Sweet-shop cake table decor", "Name board with candy typography", "Candy foil balloons (6 pcs)"],
      duration: "2–3 hrs setup", area: "Up to 12×12 ft", addons: commonAddons,
    },
    {
      id: "candyland-02", name: "Sweetheart Candy Birthday Decor", category: "birthday", categoryLabel: "Kids Theme Decoration",
      image: bg05, price: 7499,
      description: "Step into a candy store dreamland — giant lollipop cutouts, candy swirl backdrop, LED neon candy-glow effects, sweet-shop photo booth and a donut wall display.",
      includes: ["150-balloon arch (full candy spectrum)", "Giant lollipop cutouts (4 pcs)", "Candy swirl backdrop (6×5 ft)", "LED neon candy-glow accent lighting", "Sweet-shop photo-booth frame", "Donut wall display stand", "Name board + cake table decor"],
      duration: "3–4 hrs setup", area: "Up to 15×15 ft", addons: commonAddons,
    },
    {
      id: "candyland-03", name: "Sweet Factory Birthday Celebration", category: "birthday", categoryLabel: "Kids Theme Decoration",
      image: bg07, price: 9499,
      description: "Welcome to the Sweet Factory — giant candy-balloon arch, sugar-rush backdrop, confetti balloon drops, custom neon name board and a cotton candy corner photo station.",
      includes: ["Giant 8 ft balloon arch (candy colors)", "Sugar-rush factory backdrop (8×5 ft)", "Cotton candy corner photo station", "Confetti balloons (10 pcs)", "Custom LED neon name board", "Candy shop centrepieces (4 pcs)", "Lollipop & candy garland", "Sweet prop box (jars, wrappers, cones)"],
      duration: "3–5 hrs setup", area: "Up to 18×18 ft", addons: commonAddons,
    },
    {
      id: "candyland-04", name: "Candyland Birthday Extravaganza", category: "birthday", categoryLabel: "Kids Theme Decoration",
      image: g3, price: 12499,
      description: "The sweetest birthday ever — floor-to-ceiling candy balloon installation, lollipop arch gateway, 5 giant candy cutouts, LED candy-glow ambiance and a personalized neon name sign.",
      includes: ["Floor-to-ceiling candy balloon installation", "Lollipop arch gateway (6 ft)", "5 giant candy & sweet cutouts", "Premium 8×5 ft candy factory backdrop with LED", "Full LED candy-glow ambient lighting", "Candy-colored foil garland (20 ft)", "Personalized neon name sign", "Complete sweet shop props set"],
      duration: "4–6 hrs setup", area: "Up to 20×20 ft", addons: commonAddons,
    },
  ],

  /* ───────── PRINCESS ───────── */
  "princess": [
    {
      id: "princess-01", name: "Royal Princess Party Setup", category: "birthday", categoryLabel: "Kids Theme Decoration",
      image: bg04, price: 5999,
      description: "Every little girl is a princess — royal pink & gold balloon arch, castle backdrop, crown & wand props, and a fairy-light cake table fit for royalty.",
      includes: ["100-balloon arch (pink, gold & white)", "Castle fairytale backdrop (6×4 ft)", "Crown & wand prop set", "Fairy-light cake table decor", "Name board with royal crown typography", "Princess foil balloons (6 pcs)"],
      duration: "2–3 hrs setup", area: "Up to 12×12 ft", addons: commonAddons,
    },
    {
      id: "princess-02", name: "Princess Fairytale Birthday Decor", category: "birthday", categoryLabel: "Kids Theme Decoration",
      image: bg06, price: 7999,
      description: "A fairytale come true — life-size princess cutout, rose-gold castle backdrop, LED tiara spotlight, flower-petal photo arch and a royal court cake station.",
      includes: ["150-balloon arch (royal pink & gold)", "Life-size princess character cutout (5 ft)", "Rose-gold castle backdrop (6×5 ft)", "LED tiara spotlight effect", "Flower petal photo arch frame", "Royal sceptre & crown display", "Name board + cake table decor"],
      duration: "3–4 hrs setup", area: "Up to 15×15 ft", addons: commonAddons,
    },
    {
      id: "princess-03", name: "Royal Court Princess Celebration", category: "birthday", categoryLabel: "Kids Theme Decoration",
      image: bg02, price: 9999,
      description: "The royal court awaits — giant rose-gold balloon arch, palace throne backdrop, confetti balloons, custom princess LED name board and a royal carriage photo experience.",
      includes: ["Giant 8 ft balloon arch (rose-gold & pink)", "Palace throne room backdrop (8×5 ft)", "Royal carriage photo prop", "Confetti balloons (10 pcs)", "Custom LED rose-gold name board", "Floral crown centrepieces (4 pcs)", "Satin ribbon & pearl garland", "Royal props box (sceptre, tiara, scrolls)"],
      duration: "3–5 hrs setup", area: "Up to 18×18 ft", addons: commonAddons,
    },
    {
      id: "princess-04", name: "Ultimate Princess Birthday Extravaganza", category: "birthday", categoryLabel: "Kids Theme Decoration",
      image: bg01, price: 12999,
      description: "Reign supreme on your birthday — floor-to-ceiling pink palace balloon installation, castle gateway arch, 4 princess & knight cutouts, full LED sparkle ambiance and a gold-foil throne name board.",
      includes: ["Floor-to-ceiling pink palace balloon installation", "Castle gateway arch (6 ft)", "4 princess & fairy cutouts", "Premium 8×5 ft palace backdrop with LED", "Full LED sparkle ambient lighting", "Rose-gold foil balloon garland (20 ft)", "Personalized gold-foil throne name board", "Complete royal props set"],
      duration: "4–6 hrs setup", area: "Up to 20×20 ft", addons: commonAddons,
    },
  ],

  /* ───────── BARBIE ───────── */
  "barbie": [
    {
      id: "barbie-01", name: "Barbie Dream Birthday Setup", category: "birthday", categoryLabel: "Kids Theme Decoration",
      image: bg01, price: 5999,
      description: "Welcome to the Barbie Dreamhouse — hot-pink balloon arch, Barbie fashion backdrop, pink convertible props and a Malibu-style cake table for your little fashionista.",
      includes: ["100-balloon arch (hot pink & white)", "Barbie fashion show backdrop (6×4 ft)", "Pink convertible & accessories prop set", "Malibu-style cake table decor", "Name board with Barbie-font typography", "Barbie foil balloons (6 pcs)"],
      duration: "2–3 hrs setup", area: "Up to 12×12 ft", addons: commonAddons,
    },
    {
      id: "barbie-02", name: "Barbie Glamour Birthday Decor", category: "birthday", categoryLabel: "Kids Theme Decoration",
      image: bg03, price: 7999,
      description: "All things pink and glam — life-size Barbie cutout, Dreamhouse backdrop, LED pink-glow stage, pink step-and-repeat photo wall and a fashion runway walk.",
      includes: ["150-balloon arch (Barbie pink & silver)", "Life-size Barbie character cutout (5 ft)", "Dreamhouse backdrop (6×5 ft)", "LED pink-glow stage lighting", "Pink step-and-repeat photo wall", "Fashion accessory prop display", "Name board + cake table decor"],
      duration: "3–4 hrs setup", area: "Up to 15×15 ft", addons: commonAddons,
    },
    {
      id: "barbie-03", name: "Barbie World Birthday Celebration", category: "birthday", categoryLabel: "Kids Theme Decoration",
      image: bg05, price: 9999,
      description: "It's a Barbie World — giant pink balloon arch, Malibu Beach House backdrop, confetti balloons, custom LED pink name board and a convertible car photo prop.",
      includes: ["Giant 8 ft balloon arch (Barbie pink & gold)", "Malibu Beach House backdrop (8×5 ft)", "Convertible car photo prop", "Confetti balloons (10 pcs)", "Custom LED pink name board", "Fashion icon centrepieces (4 pcs)", "Pink feather boa garland", "Barbie props box (shoes, bag, crown)"],
      duration: "3–5 hrs setup", area: "Up to 18×18 ft", addons: commonAddons,
    },
    {
      id: "barbie-04", name: "Barbie Extravaganza Birthday", category: "birthday", categoryLabel: "Kids Theme Decoration",
      image: bg07, price: 12999,
      description: "The most fabulous birthday ever — floor-to-ceiling pink balloon dreamhouse, Barbie arch gateway, 4 fashion icon cutouts, full LED pink glamour lighting and a custom glitter name board.",
      includes: ["Floor-to-ceiling pink balloon dreamhouse installation", "Barbie gateway arch (6 ft)", "4 Barbie fashion cutouts", "Premium 8×5 ft printed Barbie backdrop with LED", "Full LED pink glamour ambient lighting", "Pink foil balloon garland (20 ft)", "Personalized glitter name board", "Complete Barbie props set"],
      duration: "4–6 hrs setup", area: "Up to 20×20 ft", addons: commonAddons,
    },
  ],

  /* ───────── FROZEN ───────── */
  "frozen": [
    {
      id: "frozen-01", name: "Frozen Ice Palace Birthday Setup", category: "birthday", categoryLabel: "Kids Theme Decoration",
      image: bg02, price: 5999,
      description: "Let it go and celebrate — icy blue & silver balloon arch, Frozen ice palace backdrop, snowflake props and a sparkling Elsa cake table that's cooler than the north wind.",
      includes: ["100-balloon arch (icy blue, silver & white)", "Frozen ice palace backdrop (6×4 ft)", "Snowflake & icicle prop set", "Elsa & Anna cake table decor", "Name board with frost typography", "Frozen foil balloons (6 pcs)"],
      duration: "2–3 hrs setup", area: "Up to 12×12 ft", addons: commonAddons,
    },
    {
      id: "frozen-02", name: "Let It Go Birthday Decor", category: "birthday", categoryLabel: "Kids Theme Decoration",
      image: bg04, price: 7999,
      description: "An icy celebration — Elsa & Anna character cutouts, northern lights balloon backdrop, LED blue-glow stage, snowflake ceiling installation and a frozen kingdom photo booth.",
      includes: ["150-balloon arch (Frozen blue spectrum)", "Elsa & Anna character cutouts (5 ft each)", "Northern lights balloon backdrop (6×5 ft)", "LED blue-glow stage lighting", "Snowflake balloon ceiling installation", "Frozen kingdom photo-booth frame", "Name board + cake table decor"],
      duration: "3–4 hrs setup", area: "Up to 15×15 ft", addons: commonAddons,
    },
    {
      id: "frozen-03", name: "Elsa's Snow Kingdom Celebration", category: "birthday", categoryLabel: "Kids Theme Decoration",
      image: bg06, price: 9999,
      description: "The snow queen's ultimate celebration — giant glacier balloon arch, Arendelle backdrop, confetti snowflake balloons, custom LED ice name board and a magic mirror photo station.",
      includes: ["Giant 8 ft balloon arch (glacier colors)", "Arendelle kingdom backdrop (8×5 ft)", "Magic mirror photo prop", "Confetti snowflake balloons (10 pcs)", "Custom LED ice-blue name board", "Snowflake centrepieces (4 pcs)", "Silver icicle garland", "Frozen props box (crown, snowflakes, orb)"],
      duration: "3–5 hrs setup", area: "Up to 18×18 ft", addons: commonAddons,
    },
    {
      id: "frozen-04", name: "Ultimate Frozen Birthday Extravaganza", category: "birthday", categoryLabel: "Kids Theme Decoration",
      image: g1, price: 12999,
      description: "An ice kingdom beyond imagination — floor-to-ceiling frozen balloon installation, ice castle gateway arch, 4 Frozen character cutouts, full LED aurora lighting and a personalized crystal name board.",
      includes: ["Floor-to-ceiling frozen balloon installation", "Ice castle gateway arch (6 ft)", "4 Frozen character cutouts (Elsa, Anna, Olaf, Kristoff)", "Premium 8×5 ft Arendelle backdrop with LED", "Full LED aurora borealis ambient lighting", "Silver foil balloon garland (20 ft)", "Personalized crystal name board", "Complete Frozen props set"],
      duration: "4–6 hrs setup", area: "Up to 20×20 ft", addons: commonAddons,
    },
  ],

  /* ───────── MINNIE MOUSE ───────── */
  "minnie-mouse": [
    {
      id: "minnie-mouse-01", name: "Minnie Mouse Birthday Bash Setup", category: "birthday", categoryLabel: "Kids Theme Decoration",
      image: bg03, price: 4999,
      description: "Oh Toodles! A classic Minnie Mouse birthday — red-and-white polka-dot balloon arch, Minnie bow backdrop, mickey balloon accents and a bow-tiful cake table.",
      includes: ["100-balloon arch (red, white & black polka-dot)", "Minnie Mouse bow backdrop (6×4 ft)", "Mickey silhouette balloon accents", "Bow-tiful cake table decor", "Name board with Minnie typography", "Minnie foil balloons (6 pcs)"],
      duration: "2–3 hrs setup", area: "Up to 12×12 ft", addons: commonAddons,
    },
    {
      id: "minnie-mouse-02", name: "Polka Dot Minnie Celebration", category: "birthday", categoryLabel: "Kids Theme Decoration",
      image: bg05, price: 6999,
      description: "Polka dots everywhere — life-size Minnie cutout, Disney cartoon backdrop, LED warm lighting, polka-dot photo arch and a Minnie bow wall display.",
      includes: ["150-balloon arch (polka dot red & white)", "Life-size Minnie Mouse cutout (5 ft)", "Disney Toontown backdrop (6×5 ft)", "LED warm spotlight effects", "Polka-dot photo arch frame", "Bow wall display installation", "Name board + cake table decor"],
      duration: "3–4 hrs setup", area: "Up to 15×15 ft", addons: commonAddons,
    },
    {
      id: "minnie-mouse-03", name: "Bow-Tiful Minnie Birthday Decor", category: "birthday", categoryLabel: "Kids Theme Decoration",
      image: bg07, price: 8999,
      description: "Oh how bow-tiful! Giant Minnie arch, Clubhouse stage backdrop, confetti balloons, custom LED Minnie name board and a Disney characters photo experience.",
      includes: ["Giant 8 ft balloon arch (Minnie red & black)", "Disney Clubhouse stage backdrop (8×5 ft)", "Confetti balloons (10 pcs)", "Custom LED Minnie name board", "Disney character centrepieces (4 pcs)", "Polka-dot & bow garland", "Minnie props box (ears, bows, gloves)", "Character photo prop set"],
      duration: "3–5 hrs setup", area: "Up to 18×18 ft", addons: commonAddons,
    },
    {
      id: "minnie-mouse-04", name: "Magical Minnie Mouse Extravaganza", category: "birthday", categoryLabel: "Kids Theme Decoration",
      image: g2, price: 11999,
      description: "The most magical Minnie celebration — floor-to-ceiling polka-dot balloon installation, Minnie bow arch gateway, 4 Disney character cutouts, full LED warm lighting and a personalized Minnie name sign.",
      includes: ["Floor-to-ceiling polka-dot balloon installation", "Minnie bow arch gateway (6 ft)", "4 Disney character cutouts", "Premium 8×5 ft Minnie Clubhouse backdrop with LED", "Full LED warm ambient lighting", "Red foil balloon garland (20 ft)", "Personalized Minnie-font name sign", "Complete Minnie & Disney props set"],
      duration: "4–6 hrs setup", area: "Up to 20×20 ft", addons: commonAddons,
    },
  ],

  /* ───────── PEPPA PIG ───────── */
  "peppa-pig": [
    {
      id: "peppa-pig-01", name: "Peppa Pig Party Setup", category: "birthday", categoryLabel: "Kids Theme Decoration",
      image: bg04, price: 4999,
      description: "Muddy puddles and birthday fun! A Peppa Pig themed celebration with pink balloon arch, Peppa house backdrop, muddy puddle props and a Peppa pink cake table.",
      includes: ["100-balloon arch (Peppa pink & yellow)", "Peppa Pig house backdrop (6×4 ft)", "Muddy puddle jumping prop set", "Pink cake table with Peppa decor", "Name board with Peppa typography", "Peppa foil balloons (6 pcs)"],
      duration: "2–3 hrs setup", area: "Up to 12×12 ft", addons: commonAddons,
    },
    {
      id: "peppa-pig-02", name: "Muddy Puddles Birthday Decor", category: "birthday", categoryLabel: "Kids Theme Decoration",
      image: bg06, price: 6999,
      description: "Jump in muddy puddles at the best birthday ever — Peppa & George cutouts, picnic lawn backdrop, LED soft pink stage lighting and a garden tea party photo booth.",
      includes: ["150-balloon arch (Peppa pink & green)", "Peppa & George character cutouts (5 ft each)", "Picnic lawn backdrop (6×5 ft)", "LED soft pink stage lighting", "Garden tea party photo-booth frame", "Muddy puddle floor decal", "Name board + cake table decor"],
      duration: "3–4 hrs setup", area: "Up to 15×15 ft", addons: commonAddons,
    },
    {
      id: "peppa-pig-03", name: "Peppa's Playdate Celebration", category: "birthday", categoryLabel: "Kids Theme Decoration",
      image: g3, price: 8999,
      description: "It's playtime! Giant Peppa arch, Peppa's house garden backdrop, confetti balloons, custom LED name board and a Daddy Pig photobooth with whole family character set.",
      includes: ["Giant 8 ft balloon arch (Peppa pink & yellow)", "Peppa's garden backdrop (8×5 ft)", "Whole Pig family character cutouts (4 pcs)", "Confetti balloons (10 pcs)", "Custom LED name board", "Peppa character centrepieces (4 pcs)", "Flower & butterfly garland", "Peppa props box (tea set, wellies, umbrellas)"],
      duration: "3–5 hrs setup", area: "Up to 18×18 ft", addons: commonAddons,
    },
    {
      id: "peppa-pig-04", name: "Peppa Pig Birthday Extravaganza", category: "birthday", categoryLabel: "Kids Theme Decoration",
      image: g5, price: 11999,
      description: "The biggest Peppa party in the whole world — floor-to-ceiling Peppa balloon installation, Peppa house arch gateway, 5 character cutouts, full LED garden lighting and a personalized Peppa name sign.",
      includes: ["Floor-to-ceiling Peppa balloon installation", "Peppa house arch gateway (6 ft)", "5 Peppa family & friend cutouts", "Premium 8×5 ft Peppa garden backdrop with LED", "Full LED garden ambient lighting", "Pink & yellow foil garland (20 ft)", "Personalized Peppa name sign", "Complete Peppa props set"],
      duration: "4–6 hrs setup", area: "Up to 20×20 ft", addons: commonAddons,
    },
  ],

};

// Fallback packages for any theme not explicitly defined
const defaultPackages = (themeId: string): KidsThemePackage[] => [
  {
    id: `${themeId}-01`, name: "Themed Birthday Setup", category: "birthday", categoryLabel: "Kids Theme Decoration",
    image: pkgKids, price: 5499,
    description: "A beautiful themed birthday celebration with balloon arch, custom backdrop, props and cake table decor.",
    includes: ["100-balloon arch", "Custom theme backdrop (6×4 ft)", "Themed prop set", "Cake table decor", "Name board", "Foil balloons (6 pcs)"],
    duration: "2–3 hrs setup", area: "Up to 12×12 ft", addons: commonAddons,
  },
  {
    id: `${themeId}-02`, name: "Premium Themed Birthday Decor", category: "birthday", categoryLabel: "Kids Theme Decoration",
    image: pkgKids, price: 7999,
    description: "Premium themed birthday setup with character cutouts, LED stage lighting, balloon arch and photo booth.",
    includes: ["150-balloon arch", "Character cutout (5 ft)", "Custom backdrop (6×5 ft)", "LED stage lighting", "Photo booth frame", "Name board + cake table"],
    duration: "3–4 hrs setup", area: "Up to 15×15 ft", addons: commonAddons,
  },
  {
    id: `${themeId}-03`, name: "Grand Themed Birthday Celebration", category: "birthday", categoryLabel: "Kids Theme Decoration",
    image: pkgKids, price: 9999,
    description: "Grand theme celebration with giant balloon arch, premium backdrop, confetti balloons and custom LED name board.",
    includes: ["Giant 8 ft balloon arch", "Premium backdrop (8×5 ft)", "Confetti balloons (10 pcs)", "Custom LED name board", "Themed centrepieces (4 pcs)", "Themed garland"],
    duration: "3–5 hrs setup", area: "Up to 18×18 ft", addons: commonAddons,
  },
  {
    id: `${themeId}-04`, name: "Ultimate Themed Birthday Extravaganza", category: "birthday", categoryLabel: "Kids Theme Decoration",
    image: pkgKids, price: 12999,
    description: "The ultimate birthday theme experience with floor-to-ceiling balloon installation, welcome arch, character cutouts and full LED ambiance.",
    includes: ["Floor-to-ceiling balloon installation", "Welcome arch (6 ft)", "4 character cutouts", "Premium backdrop with LED", "Full LED ambient lighting", "Foil garland (20 ft)", "Personalized name board", "Complete props set"],
    duration: "4–6 hrs setup", area: "Up to 20×20 ft", addons: commonAddons,
  },
];

export function getKidsThemePackages(themeId: string): KidsThemePackage[] {
  return kidsThemePackagesMap[themeId] ?? defaultPackages(themeId);
}

export type { KidsThemePackage as KidsThemePkg };
