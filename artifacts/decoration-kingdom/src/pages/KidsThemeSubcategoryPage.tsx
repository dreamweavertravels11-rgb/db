import { Link, useParams } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Sparkles as SparkleIcon } from "lucide-react";

import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { getKidsTheme, getKidsThemeCategory, slugify } from "@/lib/kids-themes-data";

export function KidsThemeSubcategoryPage() {
  const { theme, subcategory } = useParams<{ theme: string; subcategory: string }>();
  const selected = getKidsTheme(theme || "");

  if (!selected) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <SiteHeader active="Kids Themes" />
        <div className="mx-auto max-w-3xl px-4 py-24 text-center">
          <h1 className="font-display italic text-4xl text-[color:var(--purple-deep)]">Theme not found</h1>
          <p className="text-muted-foreground mt-3">We couldn't find the requested kids theme.</p>
          <Link
            href="/kids-themes"
            className="inline-flex items-center gap-2 mt-6 rounded-full px-6 py-3 bg-gradient-primary text-white font-semibold text-sm"
          >
            <Heart className="w-4 h-4" /> Browse Kids Themes
          </Link>
        </div>
        <SiteFooter />
      </div>
    );
  }

  const currentSubcategory = selected.subcategories.find((item) => slugify(item) === subcategory);
  if (!currentSubcategory) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <SiteHeader active="Kids Themes" />
        <div className="mx-auto max-w-3xl px-4 py-24 text-center">
          <h1 className="font-display italic text-4xl text-[color:var(--purple-deep)]">Subtheme not found</h1>
          <p className="text-muted-foreground mt-3">The subtheme you're looking for does not exist for this theme.</p>
          <Link
            href={`/kids-themes/${selected.id}`}
            className="inline-flex items-center gap-2 mt-6 rounded-full px-6 py-3 bg-gradient-primary text-white font-semibold text-sm"
          >
            <Heart className="w-4 h-4" /> Back to {selected.title}
          </Link>
        </div>
        <SiteFooter />
      </div>
    );
  }

  const category = getKidsThemeCategory(selected.category);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SiteHeader active="Kids Themes" />

      <section className="relative bg-gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: `url(${selected.image})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--purple-deep)]/90 via-[color:var(--purple-deep)]/60 to-transparent" />
        <div className="mx-auto max-w-7xl px-4 py-24 md:py-28 relative">
          <div className="text-center">
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="font-script text-5xl md:text-6xl text-[color:var(--gold)] drop-shadow">
              {category?.title ?? "Kids Themes"}
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display italic text-4xl md:text-6xl tracking-tight mt-3 leading-tight">
              {currentSubcategory}
            </motion.h1>
            <div className="flex items-center justify-center gap-3 mt-5">
              <span className="h-px w-16 bg-[color:var(--gold)]/70" />
              <SparkleIcon className="w-4 h-4 text-[color:var(--gold)]" />
              <span className="h-px w-16 bg-[color:var(--gold)]/70" />
            </div>
            <p className="mt-5 max-w-3xl mx-auto text-white/85 text-base md:text-lg font-light">
              This setup brings the {selected.title} theme to life with curated props, stage styling, balloons and fun details.
            </p>
          </div>
        </div>
      </section>

      <main className="py-16 md:py-24 bg-gradient-soft">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl overflow-hidden bg-white shadow-card border border-border/70"
            >
              <img src={selected.image} alt={selected.title} loading="lazy" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="rounded-3xl bg-white p-8 shadow-card border border-border/70"
            >
              <p className="text-sm uppercase tracking-[0.32em] text-[color:var(--pink)]">Theme details</p>
              <h2 className="mt-4 font-display italic text-3xl text-[color:var(--purple-deep)]">
                {selected.title} — {currentSubcategory}
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Design a memorable kids celebration with bright balloons, themed backdrops, character props and a playful stage layout.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-foreground/75">
                <li>• Custom stage styling and backdrop for the subtheme.</li>
                <li>• Balloon arches, column clusters and table décor matching the theme.</li>
                <li>• Character props, signage and themed accents for an immersive experience.</li>
                <li>• Full setup and on-site styling across Delhi NCR.</li>
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="tel:9310854642" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-white font-semibold text-sm shadow-pink">
                  <Heart className="w-4 h-4" /> Call to Book
                </a>
                <Link
                  href={`/kids-themes/${selected.id}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[color:var(--gold)]/50 px-6 py-3 text-[color:var(--purple-deep)] font-semibold text-sm hover:bg-[color:var(--gold)]/10"
                >
                  <ArrowRight className="w-4 h-4" /> Back to {selected.title}
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-3 text-center">
            <Link
              href="/kids-themes"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 border border-[color:var(--gold)]/50 text-[color:var(--purple-deep)] font-semibold text-sm hover:bg-[color:var(--gold)]/10"
            >
              Back to Kids Themes
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
