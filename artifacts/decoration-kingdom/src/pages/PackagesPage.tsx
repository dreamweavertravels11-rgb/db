import { Link } from "wouter";
import { motion } from "framer-motion";
import { Phone, Sparkles as SparkleIcon } from "lucide-react";

import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { CollectionBanner } from "@/components/packages/CollectionBanner";
import { categories } from "@/lib/packages-catalog";

export function PackagesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SiteHeader active="Packages" />

      {/* Hero */}
      <section className="relative bg-gradient-hero text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 25%, oklch(0.65 0.24 350 / 0.55), transparent 40%), radial-gradient(circle at 85% 65%, oklch(0.82 0.15 85 / 0.45), transparent 42%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cpath fill='%23fff' d='M40 0l4 36L80 40l-36 4-4 36-4-36L0 40l36-4z'/%3E%3C/svg%3E\")",
          }}
        />
        <div className="mx-auto max-w-7xl px-4 py-20 md:py-28 text-center relative">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-script text-5xl md:text-6xl text-[color:var(--gold)] drop-shadow"
          >
            Our Collections
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display italic text-4xl md:text-6xl tracking-tight mt-3 leading-tight"
          >
            Explore Our Premium <span className="text-[color:var(--gold)]">Decoration Themes</span>
          </motion.h1>
          <div className="flex items-center justify-center gap-3 mt-5">
            <span className="h-px w-16 bg-[color:var(--gold)]/70" />
            <SparkleIcon className="w-4 h-4 text-[color:var(--gold)]" />
            <span className="h-px w-16 bg-[color:var(--gold)]/70" />
          </div>
          <p className="mt-5 max-w-2xl mx-auto text-white/85 text-base md:text-lg font-light">
            Pick a collection below to browse every package, price & inclusion.
            <br />
            <span className="text-white/60 text-sm">Delivered at your home across Delhi NCR</span>
          </p>
        </div>
      </section>

      {/* Collections grid */}
      <main className="py-16 md:py-24 bg-gradient-soft">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {categories.map((cat, i) => (
              <CollectionBanner key={cat.id} category={cat} index={i} />
            ))}
          </div>

          <div className="mt-16 rounded-3xl bg-white border border-[color:var(--gold)]/30 p-8 text-center shadow-card">
            <p className="font-script text-3xl text-[color:var(--pink)]">Note</p>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto mt-2">
              All packages are fully customizable. Final pricing depends on venue, theme complexity & add-ons.
              Contact our event stylist for a personalized quote.
            </p>
          </div>
        </div>
      </main>

      {/* CTA */}
      <section className="bg-gradient-band text-white py-14 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: "radial-gradient(circle at 80% 40%, oklch(0.82 0.15 85 / 0.6), transparent 40%)" }}
        />
        <div className="mx-auto max-w-7xl px-4 flex flex-col md:flex-row items-center justify-between gap-6 relative">
          <div>
            <p className="font-script text-4xl text-[color:var(--gold)]">Can't decide?</p>
            <h3 className="font-display italic text-2xl md:text-3xl mt-1">Talk to our event stylist</h3>
            <p className="text-white/70 text-sm mt-1">Available 24×7 · Delhi NCR</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="tel:9310854642"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-gradient-primary text-white font-bold text-sm shadow-pink"
            >
              <Phone className="w-4 h-4" /> Call 9310854642
            </motion.a>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 border border-[color:var(--gold)]/50 text-[color:var(--gold)] font-semibold text-sm hover:bg-[color:var(--gold)]/10"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
