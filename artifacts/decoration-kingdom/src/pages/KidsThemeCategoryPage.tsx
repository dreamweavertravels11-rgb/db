import { Link, useParams } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Sparkles as SparkleIcon } from "lucide-react";

import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { CollectionBanner } from "@/components/packages/CollectionBanner";
import { getKidsThemeCategory, getKidsThemesByCategory } from "@/lib/kids-themes-data";

export function KidsThemeCategoryPage() {
  const { category } = useParams<{ category: string }>();
  const categoryData = getKidsThemeCategory(category || "");

  if (!categoryData) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <SiteHeader active="Kids Themes" />
        <div className="mx-auto max-w-3xl px-4 py-24 text-center">
          <h1 className="font-display italic text-4xl text-[color:var(--purple-deep)]">Category not found</h1>
          <p className="text-muted-foreground mt-3">The kids theme category you are looking for does not exist.</p>
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

  const themes = getKidsThemesByCategory(categoryData.id);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SiteHeader active="Kids Themes" />

      <section className="relative bg-gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 25%, oklch(0.65 0.24 350 / 0.55), transparent 40%), radial-gradient(circle at 85% 65%, oklch(0.82 0.15 85 / 0.45), transparent 42%)",
          }}
        />
        <div className="mx-auto max-w-7xl px-4 py-20 md:py-28 text-center relative">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="font-script text-5xl md:text-6xl text-[color:var(--gold)] drop-shadow">
            {categoryData.title}
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display italic text-4xl md:text-6xl tracking-tight mt-3 leading-tight">
            Browse playful kids themes and party-ready decorations.
          </motion.h1>
          <div className="flex items-center justify-center gap-3 mt-5">
            <span className="h-px w-16 bg-[color:var(--gold)]/70" />
            <SparkleIcon className="w-4 h-4 text-[color:var(--gold)]" />
            <span className="h-px w-16 bg-[color:var(--gold)]/70" />
          </div>
          <p className="mt-5 max-w-2xl mx-auto text-white/85 text-base md:text-lg font-light">
            {categoryData.tagline} Choose from the most loved theme ideas for your celebration.
          </p>
        </div>
      </section>

      <main className="py-16 md:py-24 bg-gradient-soft">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {themes.map((theme, index) => (
              <CollectionBanner
                key={theme.id}
                href={`/kids-themes/${theme.id}`}
                title={theme.title}
                eyebrow={categoryData.title}
                tagline={`${theme.subcategories.length} subthemes`}
                banner={theme.image}
                subcount={theme.subcategories.length}
                index={index}
              />
            ))}
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-3 text-center">
            <Link
              href="/kids-themes"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 border border-[color:var(--gold)]/50 text-[color:var(--purple-deep)] font-semibold text-sm hover:bg-[color:var(--gold)]/10"
            >
              <ArrowRight className="w-4 h-4" /> Browse All Kids Themes
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-gradient-primary text-white font-semibold text-sm shadow-pink"
            >
              <Heart className="w-4 h-4" /> Back to Home
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
