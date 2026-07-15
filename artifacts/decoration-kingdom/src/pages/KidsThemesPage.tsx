import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles as SparkleIcon } from "lucide-react";

import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { kidsThemes } from "@/lib/kids-themes-data";

// Themed character icons for each kids theme
import iconJungleSafari from "@/assets/icons/icon-jungle-safari_2.png";
import iconFarm from "@/assets/icons/icon-farm_2.png";
import iconSpiderman from "@/assets/icons/icon-spiderman.png";
import iconLego from "@/assets/icons/icon-lego_2.png";
import iconCars from "@/assets/icons/icon-cars.png";
import iconDinosaurs from "@/assets/icons/icon-dinosaurs_2.png";
import iconAvengers from "@/assets/icons/icon-avengers.png";
import iconSpace from "@/assets/icons/icon-space_2.png";
import iconFootball from "@/assets/icons/icon-football_2.png";
import iconCricket from "@/assets/icons/icon-cricket_2.png";
import iconUnicorn from "@/assets/icons/icon-unicorn_2.png";
import iconMermaid from "@/assets/icons/icon-mermaid_2.png";
import iconButterfly from "@/assets/icons/icon-butterfly_2.png";
import iconRainbow from "@/assets/icons/icon-rainbow_2.png";
import iconCandyland from "@/assets/icons/icon-candyland_2.png";
import iconPrincess from "@/assets/icons/icon-princess.png";
import iconBarbie from "@/assets/icons/icon-barbie_2.png";
import iconFrozen from "@/assets/icons/icon-frozen.png";
import iconMinnieMouse from "@/assets/icons/icon-minnie-mouse.png";
import iconPeppaPig from "@/assets/icons/icon-peppa-pig_2.png";

const themeIcons: Record<string, string> = {
  "jungle-safari": iconJungleSafari,
  "farm": iconFarm,
  "spiderman": iconSpiderman,
  "lego": iconLego,
  "cars": iconCars,
  "dinosaurs": iconDinosaurs,
  "avengers": iconAvengers,
  "space": iconSpace,
  "football": iconFootball,
  "cricket": iconCricket,
  "unicorn": iconUnicorn,
  "mermaid": iconMermaid,
  "butterfly": iconButterfly,
  "rainbow": iconRainbow,
  "candyland": iconCandyland,
  "princess": iconPrincess,
  "barbie": iconBarbie,
  "frozen": iconFrozen,
  "minnie-mouse": iconMinnieMouse,
  "peppa-pig": iconPeppaPig,
};

const themeTaglines: Record<string, string> = {
  "cars": "Zoom into a racing-themed birthday",
  "spiderman": "Swing into a web of birthday fun",
  "jungle-safari": "A wild adventure awaits",
  "dinosaurs": "Roar into a prehistoric party",
  "avengers": "Assemble for an epic celebration",
  "space": "Blast off into a cosmic birthday",
  "lego": "Build the perfect birthday together",
  "farm": "A charming barnyard celebration",
  "football": "Score big on your birthday",
  "cricket": "Hit it out of the park",
  "unicorn": "A magical rainbow birthday dream",
  "mermaid": "Dive into an ocean adventure",
  "butterfly": "Flutter into a garden birthday",
  "rainbow": "Celebrate in every color",
  "candyland": "The sweetest birthday ever",
  "princess": "Every girl is royalty today",
  "barbie": "Fabulous, fun and full of pink",
  "frozen": "Let it go and celebrate",
  "minnie-mouse": "Oh Toodles! Party time!",
  "peppa-pig": "Muddy puddles & birthday fun",
};

const boyThemes = kidsThemes.filter((t) => t.category === "boys");
const girlThemes = kidsThemes.filter((t) => t.category === "girls");

export function KidsThemesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SiteHeader active="Kids Themes" />

      {/* Hero */}
      <section className="relative bg-gradient-hero text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 25%, oklch(0.65 0.24 350 / 0.55), transparent 40%), radial-gradient(circle at 85% 65%, oklch(0.82 0.15 85 / 0.45), transparent 42%)",
          }}
        />
        <div className="mx-auto max-w-7xl px-4 py-20 md:py-28 text-center relative">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-script text-5xl md:text-6xl text-[color:var(--gold)] drop-shadow"
          >
            Decoration Themes
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display italic text-4xl md:text-5xl tracking-tight mt-3 leading-tight"
          >
            Magical Kids Birthday Themes
          </motion.h1>
          <div className="flex items-center justify-center gap-3 mt-5">
            <span className="h-px w-16 bg-[color:var(--gold)]/70" />
            <SparkleIcon className="w-4 h-4 text-[color:var(--gold)]" />
            <span className="h-px w-16 bg-[color:var(--gold)]/70" />
          </div>
          <p className="mt-5 max-w-2xl mx-auto text-white/85 text-base md:text-lg font-light">
            Choose from our wide range of themed birthday decoration packages for boys and girls. Each theme comes with premium props, backdrops, and balloon setups.
          </p>
        </div>
      </section>

      {/* Themes Grid */}
      <main className="py-16 md:py-24 bg-gradient-soft">
        <div className="mx-auto max-w-7xl px-4 space-y-16">

          {/* Boy's Themes */}
          <ThemeSection
            title="Boy's Themes"
            tagline="Exciting themes crafted for adventurous boys."
            themes={boyThemes}
            accentBg="bg-[#dff1fb]"
            accentBorder="border-[#b3ddf5]"
            labelBg="bg-gradient-to-br from-[#1a9fd4] to-[#1478a8]"
          />

          {/* Girl's Themes */}
          <ThemeSection
            title="Girl's Themes"
            tagline="Magical themes created for dreamy girls."
            themes={girlThemes}
            accentBg="bg-[#fde8f0]"
            accentBorder="border-[#f5b8d1]"
            labelBg="bg-gradient-to-br from-[#e8528a] to-[#c73d73]"
          />

        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

/* ─────────── Section with label card + theme cards ─────────── */
function ThemeSection({
  title,
  tagline,
  themes,
  accentBg,
  accentBorder,
  labelBg,
}: {
  title: string;
  tagline: string;
  themes: typeof boyThemes;
  accentBg: string;
  accentBorder: string;
  labelBg: string;
}) {
  return (
    <div>
      {/* Section title */}
      <div className="mb-6">
        <h2 className="font-display italic text-3xl md:text-4xl text-[color:var(--purple-deep)]">{title}</h2>
        <p className="text-sm text-muted-foreground mt-1">{tagline}</p>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {/* Label / hero card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4 }}
          className={`rounded-2xl overflow-hidden ${labelBg} shadow-card flex items-center justify-center aspect-square`}
        >
          <p className="font-display italic text-white text-xl text-center leading-snug px-3 drop-shadow-md">
            {title}
          </p>
        </motion.div>

        {/* Theme cards */}
        {themes.map((theme, index) => (
          <ThemeIconCard
            key={theme.id}
            id={theme.id}
            title={theme.title}
            icon={themeIcons[theme.id]}
            tagline={themeTaglines[theme.id] ?? ""}
            accentBg={accentBg}
            accentBorder={accentBorder}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

/* ─────────── Individual theme icon card ─────────── */
function ThemeIconCard({
  id,
  title,
  icon,
  tagline,
  accentBg,
  accentBorder,
  index,
}: {
  id: string;
  title: string;
  icon: string;
  tagline: string;
  accentBg: string;
  accentBorder: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: (index % 6) * 0.05, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, scale: 1.03 }}
      className="group"
    >
      <Link
        href={`/kids-themes/${id}`}
        className={`block rounded-2xl overflow-hidden border ${accentBorder} ${accentBg} shadow-card hover:shadow-pink transition-all duration-300`}
      >
        {/* Icon area — square with character image */}
        <div className="aspect-square w-full overflow-hidden flex items-center justify-center p-2">
          <img
            src={icon}
            alt={title}
            loading="lazy"
            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 ease-out drop-shadow-md"
          />
        </div>

        {/* Title */}
        <div className="px-2 pb-2.5 pt-1 text-center">
          <p className="text-xs font-semibold text-[color:var(--purple-deep)] leading-snug truncate">
            {title}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
