import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles as SparkleIcon } from "lucide-react";

import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { sections } from "@/lib/packages-data";

export function DecorationsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SiteHeader active="Decorations" />

      <section className="relative bg-gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30"
          style={{ backgroundImage: "radial-gradient(circle at 15% 25%, oklch(0.65 0.24 350 / 0.55), transparent 40%), radial-gradient(circle at 85% 65%, oklch(0.82 0.15 85 / 0.45), transparent 42%)" }}
        />
        <div className="mx-auto max-w-7xl px-4 py-20 md:py-24 text-center relative">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="font-script text-5xl md:text-6xl text-[color:var(--gold)]">
            Decoration Categories
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display italic text-4xl md:text-6xl mt-2">
            A Category for <span className="text-[color:var(--gold)]">Every Celebration</span>
          </motion.h1>
          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="h-px w-16 bg-[color:var(--gold)]/70" />
            <SparkleIcon className="w-4 h-4 text-[color:var(--gold)]" />
            <span className="h-px w-16 bg-[color:var(--gold)]/70" />
          </div>
          <p className="mt-5 max-w-2xl mx-auto text-white/85 text-base md:text-lg font-light">
            Explore all our curated collections — each with its own dedicated page & packages.
          </p>
        </div>
      </section>

      <main className="py-16 md:py-24 bg-gradient-soft">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
                whileHover={{ y: -8 }}
              >
                <Link href={`/decorations/${s.id}`}
                  className="group block rounded-2xl overflow-hidden bg-white shadow-card border border-border/70 hover:border-[color:var(--gold)]/60"
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img src={s.items[0]?.img} alt={s.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[900ms]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--purple-deep)]/85 via-[color:var(--purple-deep)]/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="font-script text-2xl text-[color:var(--gold)]">{s.eyebrow}</p>
                      <h3 className="font-display italic text-2xl leading-tight">{s.title}</h3>
                    </div>
                  </div>
                  <div className="p-5 flex items-center justify-between">
                    <p className="text-xs text-muted-foreground line-clamp-2 pr-4">{s.subtitle}</p>
                    <span className="shrink-0 inline-flex items-center gap-1 text-xs font-bold text-[color:var(--pink)] uppercase tracking-widest">
                      View <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
