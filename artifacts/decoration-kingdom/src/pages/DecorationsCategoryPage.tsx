import { Link, useParams } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Heart, MapPin, Phone, Sparkles as SparkleIcon, Star } from "lucide-react";

import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { sections, inr } from "@/lib/packages-data";

export function DecorationsCategoryPage() {
  const { category } = useParams<{ category: string }>();
  const section = sections.find((s) => s.id === category);
  if (!section) return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="font-display italic text-4xl text-[color:var(--purple-deep)]">Category not found</h1>
        <p className="text-muted-foreground mt-3">The decoration category you're looking for doesn't exist.</p>
        <Link href="/decorations" className="inline-flex items-center gap-2 mt-6 rounded-full px-6 py-3 bg-gradient-primary text-white font-semibold text-sm">
          Browse all categories <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
      <SiteFooter />
    </div>
  );

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SiteHeader active="Decorations" />

      <section className="relative bg-gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30"
          style={{ backgroundImage: "radial-gradient(circle at 15% 25%, oklch(0.65 0.24 350 / 0.55), transparent 40%), radial-gradient(circle at 85% 65%, oklch(0.82 0.15 85 / 0.45), transparent 42%)" }}
        />
        <div className="mx-auto max-w-7xl px-4 py-20 md:py-24 text-center relative">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="font-script text-4xl md:text-5xl text-[color:var(--gold)]">
            {section.eyebrow}
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display italic text-4xl md:text-6xl mt-2">
            {section.title}
          </motion.h1>
          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="h-px w-16 bg-[color:var(--gold)]/70" />
            <SparkleIcon className="w-4 h-4 text-[color:var(--gold)]" />
            <span className="h-px w-16 bg-[color:var(--gold)]/70" />
          </div>
          <p className="mt-5 max-w-2xl mx-auto text-white/85 text-base md:text-lg font-light">{section.subtitle}</p>
          <div className="mt-6 text-sm text-white/70">
            <Link href="/decorations" className="hover:text-[color:var(--gold)]">All Decorations</Link> · {section.title}
          </div>
        </div>
      </section>

      <main className="py-16 md:py-20 bg-gradient-soft">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {section.items.map((p: (typeof section.items)[number], i: number) => (
              <motion.article
                key={p.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
                whileHover={{ y: -8 }}
                className={`group relative rounded-2xl overflow-hidden bg-white shadow-card border ${p.featured ? "border-[color:var(--gold)]/60 shadow-pink" : "border-border/70"}`}
              >
                {p.tag && (
                  <div className="absolute top-3 left-3 z-10 inline-flex items-center gap-1 rounded-full bg-[color:var(--purple-deep)]/95 text-[color:var(--gold)] text-[10px] font-bold tracking-widest uppercase px-3 py-1 border border-[color:var(--gold)]/40">
                    <Star className="w-3 h-3 fill-current" /> {p.tag}
                  </div>
                )}
                <Link href={`/packages/${p.slug}`} className="block aspect-[4/5] overflow-hidden relative">
                  <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[900ms]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--purple-deep)]/70 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-[11px]">
                    <span className="inline-flex items-center gap-1 bg-black/40 backdrop-blur rounded-full px-2 py-1"><MapPin className="w-3 h-3" /> At Your Location</span>
                    <span className="inline-flex items-center gap-1 bg-black/40 backdrop-blur rounded-full px-2 py-1"><Star className="w-3 h-3 fill-[color:var(--gold)] text-[color:var(--gold)]" /> 5.0</span>
                  </div>
                </Link>
                <div className="p-5">
                  <Link href={`/packages/${p.slug}`}>
                    <h3 className="font-display text-lg leading-snug text-[color:var(--purple-deep)] line-clamp-2 min-h-[3.25rem] hover:text-[color:var(--pink)] transition-colors">{p.title}</h3>
                  </Link>
                  <p className="mt-1 text-xs text-muted-foreground line-clamp-2 min-h-[2rem]">{p.desc}</p>
                  <div className="mt-4 flex items-end justify-between">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Starting at</p>
                      <p className="text-2xl font-black text-gradient-primary leading-none">{inr(p.price)}</p>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[10px] text-muted-foreground"><Clock className="w-3 h-3" /> 2–4 hrs</span>
                  </div>
                  <Link href={`/packages/${p.slug}`} className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-white font-semibold text-xs tracking-widest uppercase bg-gradient-primary shadow-pink hover:scale-[1.02] transition-transform">
                    View Details <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </main>

      <section className="bg-gradient-band text-white py-14 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 flex flex-col md:flex-row items-center justify-between gap-6 relative">
          <div>
            <p className="font-script text-4xl text-[color:var(--gold)]">Love this collection?</p>
            <h3 className="font-display italic text-2xl md:text-3xl mt-1">Book your {section.eyebrow.toLowerCase()} today</h3>
            <p className="text-white/70 text-sm mt-1">Available 24×7 · Delhi NCR</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="tel:9310854642" className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-gradient-primary text-white font-bold text-sm shadow-pink"><Phone className="w-4 h-4" /> Call 9310854642</a>
            <Link href="/decorations" className="inline-flex items-center gap-2 rounded-full px-6 py-3 border border-[color:var(--gold)]/50 text-[color:var(--gold)] font-semibold text-sm hover:bg-[color:var(--gold)]/10"><Heart className="w-4 h-4" /> Browse All Categories</Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
