import { Link, useParams } from "wouter";
import { motion } from "framer-motion";
import { Heart, Sparkles as SparkleIcon } from "lucide-react";
import { useState } from "react";

import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { PackageCard } from "@/components/packages/PackageCard";
import { PackageModal } from "@/components/packages/PackageModal";
import { getCategory, getPackages, type PackageItem } from "@/lib/packages-catalog";

export function PackagesSubCollectionPage() {
  const { category, sub: subId } = useParams<{ category: string; sub: string }>();
  const cat = getCategory(category || "");
  const sub = cat?.subcategories?.find((s) => s.id === subId);
  if (!cat || !sub) return null;
  const items = getPackages(cat.id, sub.id);
  const [active, setActive] = useState<PackageItem | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SiteHeader active="Packages" />

      <section className="relative bg-gradient-hero text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{ backgroundImage: "radial-gradient(circle at 15% 25%, oklch(0.65 0.24 350 / 0.55), transparent 40%), radial-gradient(circle at 85% 65%, oklch(0.82 0.15 85 / 0.45), transparent 42%)" }}
        />
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-20 text-center relative">
          <p className="text-xs uppercase tracking-widest text-white/60">
            <Link href="/packages" className="hover:text-[color:var(--gold)]">All Collections</Link> ·{" "}
            <Link href={`/packages/collection/${cat.id}`} className="hover:text-[color:var(--gold)]">
              {cat.label}
            </Link>{" "}
            · {sub.label}
          </p>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="font-script text-5xl md:text-6xl text-[color:var(--gold)] mt-2">
            {cat.label}
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display italic text-3xl md:text-5xl mt-2">
            {sub.label} Packages
          </motion.h1>
          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="h-px w-14 bg-[color:var(--gold)]/70" />
            <SparkleIcon className="w-4 h-4 text-[color:var(--gold)]" />
            <span className="h-px w-14 bg-[color:var(--gold)]/70" />
          </div>
        </div>
      </section>

      <main className="py-16 md:py-20 bg-gradient-soft">
        <div className="mx-auto max-w-7xl px-4">
          {items.length === 0 ? (
            <p className="text-center text-muted-foreground">More packages coming soon for this collection.</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((p, i) => (
                <PackageCard key={p.id} pkg={p} index={i} onView={setActive} />
              ))}
            </div>
          )}

          <div className="mt-14 text-center flex flex-wrap items-center justify-center gap-3">
            <Link
              href={`/packages/collection/${cat.id}`}
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-gradient-primary text-white font-semibold text-sm shadow-pink"
            >
              Back to {cat.label}
            </Link>
            <Link href="/packages" className="inline-flex items-center gap-2 rounded-full px-6 py-3 border border-[color:var(--gold)]/50 text-[color:var(--purple-deep)] font-semibold text-sm hover:bg-[color:var(--gold)]/10">
              <Heart className="w-4 h-4" /> Browse All Collections
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />
      <PackageModal pkg={active} onClose={() => setActive(null)} />
    </div>
  );
}
