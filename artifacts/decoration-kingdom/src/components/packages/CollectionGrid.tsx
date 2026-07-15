import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import type { CategoryId, SubcategoryDef } from "@/lib/packages-catalog";
import { getPackages } from "@/lib/packages-catalog";

export function CollectionGrid({ categoryId, subcategories }: { categoryId: CategoryId; subcategories: SubcategoryDef[] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {subcategories.map((sub, i) => {
        const pkgs = getPackages(categoryId, sub.id);
        const cover = pkgs[0]?.image;
        return (
          <motion.div
            key={sub.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            whileHover={{ y: -8 }}
          >
            <Link href={`/packages/collection/${categoryId}/${sub.id}`}
              className="group block rounded-2xl overflow-hidden bg-white shadow-card border border-border/70 hover:border-[color:var(--gold)]/60"
            >
              <div className="aspect-square overflow-hidden relative">
                {cover && (
                  <img
                    src={cover}
                    alt={sub.label}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[900ms]"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--purple-deep)]/85 via-[color:var(--purple-deep)]/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-display italic text-xl leading-tight">{sub.label}</h3>
                  <p className="text-white/70 text-xs mt-0.5">{pkgs.length} packages</p>
                </div>
              </div>
              <div className="px-4 py-3 flex items-center justify-between">
                <span className="text-xs text-muted-foreground">View collection</span>
                <span className="shrink-0 inline-flex items-center gap-1 text-xs font-bold text-[color:var(--pink)] uppercase tracking-widest">
                  Explore <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
