import { motion } from "framer-motion";
import { ArrowRight, Clock, Star } from "lucide-react";

import { inr, type PackageItem } from "@/lib/packages-catalog";

export function PackageCard({
  pkg,
  index = 0,
  onView,
}: {
  pkg: PackageItem;
  index?: number;
  onView: (pkg: PackageItem) => void;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className="group relative rounded-2xl overflow-hidden bg-white shadow-card border border-border/70 hover:border-[color:var(--gold)]/60 transition-colors"
    >
      <button onClick={() => onView(pkg)} className="block w-full aspect-[3/4] overflow-hidden relative text-left">
        <img
          src={pkg.image}
          alt={pkg.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--purple-deep)]/70 via-transparent to-transparent opacity-80" />
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-[11px]">
          <span className="inline-flex items-center gap-1 bg-black/40 backdrop-blur rounded-full px-2 py-1">
            <Clock className="w-3 h-3" /> {pkg.duration}
          </span>
          <span className="inline-flex items-center gap-1 bg-black/40 backdrop-blur rounded-full px-2 py-1">
            <Star className="w-3 h-3 fill-[color:var(--gold)] text-[color:var(--gold)]" /> 5.0
          </span>
        </div>
      </button>

      <div className="p-5">
        <h3 className="font-display text-lg leading-snug text-[color:var(--purple-deep)] line-clamp-2 min-h-[3.25rem]">
          {pkg.name}
        </h3>
        <p className="mt-1 text-xs text-muted-foreground line-clamp-2 min-h-[2rem]">{pkg.description}</p>

        <div className="mt-4 flex items-end justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Starting at</p>
            <p className="text-2xl font-black text-gradient-primary leading-none">{inr(pkg.price)}</p>
          </div>
        </div>

        <button
          onClick={() => onView(pkg)}
          className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-white font-semibold text-xs tracking-widest uppercase bg-gradient-primary shadow-pink hover:scale-[1.02] transition-transform"
        >
          View Details
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </motion.article>
  );
}
