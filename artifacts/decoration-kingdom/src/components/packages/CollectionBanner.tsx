import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import type { CategoryDef } from "@/lib/packages-catalog";

export function CollectionBanner({
  category,
  index = 0,
  href,
  title,
  eyebrow,
  tagline,
  banner,
  subcount,
}: {
  category?: CategoryDef;
  index?: number;
  href?: string;
  title?: string;
  eyebrow?: string;
  tagline?: string;
  banner?: string;
  subcount?: number;
}) {
  const linkHref = href ?? (category ? `/packages/collection/${category.id}` : "#");
  const label = title ?? category?.label ?? "";
  const labelEyebrow = eyebrow ?? category?.eyebrow ?? "";
  const labelTagline = tagline ?? category?.tagline ?? "";
  const bannerImage = banner ?? category?.banner ?? "";
  const detailText = typeof subcount === "number"
    ? `${subcount} sub-collections`
    : category?.subcategories?.length
      ? `${category.subcategories.length} sub-collections`
      : "View packages";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: (index % 6) * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
      style={{ perspective: 1000 }}
    >
      <Link href={linkHref}
        className="relative block rounded-2xl overflow-hidden"
      >
        {/* Moving gradient border glow */}
        <div
          className="pointer-events-none absolute -inset-[2px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[2px]"
          style={{
            background:
              "conic-gradient(from 0deg, var(--pink), var(--gold), var(--purple), var(--pink))",
            animation: "spin-slow 4s linear infinite",
          }}
        />
        {/* Floating glow */}
        <div className="pointer-events-none absolute -inset-6 rounded-3xl bg-[color:var(--pink)]/0 group-hover:bg-[color:var(--pink)]/25 blur-3xl transition-colors duration-500" />

        <motion.div
          whileHover={{ y: -8, rotateX: 3, rotateY: -3 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-2xl overflow-hidden bg-white shadow-card border border-border/70 group-hover:border-transparent"
        >
          <div className="aspect-[4/3] overflow-hidden relative">
            <img
              src={bannerImage}
              alt={label}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-[1.15] transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--purple-deep)]/90 via-[color:var(--purple-deep)]/10 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="font-script text-2xl text-[color:var(--gold)]">{category?.eyebrow}</p>
              <h3 className="font-display italic text-xl md:text-2xl leading-tight">{category?.label}</h3>
              <p className="text-white/70 text-xs mt-1 line-clamp-1">{category?.tagline}</p>
            </div>
          </div>
          <div className="px-5 py-4 flex items-center justify-between">
            <span className="text-xs text-muted-foreground">
              {detailText}
            </span>
            <span className="inline-flex items-center gap-1 text-xs font-bold text-[color:var(--pink)] uppercase tracking-widest">
              Explore
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </span>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
