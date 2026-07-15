import { Link, useParams } from "wouter";
import { motion } from "framer-motion";
import { Heart, MessageCircle, Phone, Plus, X, Sparkles as SparkleIcon, CheckCircle2, ArrowRight } from "lucide-react";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { getKidsTheme } from "@/lib/kids-themes-data";
import { getKidsThemePackages, type KidsThemePackage } from "@/lib/kids-theme-packages";

const WHATSAPP_NUMBER = "919310854642";
const PHONE_NUMBER = "9310854642";

function inr(n: number) {
  return "₹" + n.toLocaleString("en-IN");
}

function buildWhatsappUrl(pkg: KidsThemePackage) {
  const msg = encodeURIComponent(
    `Hello Decoration Kingdom,\nI'm interested in the *${pkg.name}* (${inr(pkg.price)}) from Kids Theme Decoration.\nPlease share availability and booking details.\nThank you!`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
}

/* ─────────── Package Card ─────────── */
function KidsPackageCard({
  pkg,
  index,
  onView,
}: {
  pkg: KidsThemePackage;
  index: number;
  onView: (p: KidsThemePackage) => void;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group relative rounded-2xl overflow-hidden bg-white shadow-card border border-border/70 hover:border-[color:var(--gold)]/60 transition-colors flex flex-col"
    >
      {/* Image */}
      <button
        onClick={() => onView(pkg)}
        className="block w-full aspect-[4/3] overflow-hidden relative text-left flex-shrink-0"
      >
        <img
          src={pkg.image}
          alt={pkg.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--purple-deep)]/70 via-transparent to-transparent opacity-80" />
        <div className="absolute bottom-3 left-3 right-3 text-white text-[11px]">
          <span className="inline-flex items-center gap-1 bg-black/40 backdrop-blur rounded-full px-2 py-1">
            {pkg.duration}
          </span>
        </div>
      </button>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <p className="text-[10px] uppercase tracking-widest text-[color:var(--pink)] font-semibold">{pkg.categoryLabel}</p>
        <h3 className="font-display text-lg leading-snug text-[color:var(--purple-deep)] line-clamp-2 mt-1 min-h-[3.25rem]">
          {pkg.name}
        </h3>
        <p className="mt-1 text-xs text-muted-foreground line-clamp-2 min-h-[2rem]">{pkg.description}</p>

        {/* Price */}
        <div className="mt-4">
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Starting at</p>
          <p className="text-2xl font-black text-gradient-primary leading-none">{inr(pkg.price)}</p>
        </div>

        {/* Inclusions preview */}
        <ul className="mt-4 space-y-1.5 flex-1">
          {pkg.includes.slice(0, 4).map((item) => (
            <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
              <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[color:var(--gold)]" />
              {item}
            </li>
          ))}
          {pkg.includes.length > 4 && (
            <li className="text-xs text-[color:var(--pink)] font-semibold pl-5">
              +{pkg.includes.length - 4} more inclusions
            </li>
          )}
        </ul>

        {/* Buttons */}
        <div className="mt-5 flex flex-col gap-2">
          <button
            onClick={() => onView(pkg)}
            className="w-full inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-[color:var(--purple-deep)] font-semibold text-xs tracking-widest uppercase border border-[color:var(--purple-deep)]/30 hover:bg-[color:var(--purple-deep)]/5 transition-colors"
          >
            Get Quote
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <a
            href={buildWhatsappUrl(pkg)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-white font-semibold text-xs tracking-widest uppercase bg-[#25D366] hover:bg-[#1fb85a] transition-colors shadow-card"
          >
            <MessageCircle className="w-4 h-4" />
            Book Now
          </a>
        </div>
      </div>
    </motion.article>
  );
}

/* ─────────── Package Modal ─────────── */
function KidsPackageModal({
  pkg,
  onClose,
}: {
  pkg: KidsThemePackage | null;
  onClose: () => void;
}) {
  if (!pkg) return null;
  const whatsappHref = buildWhatsappUrl(pkg);

  return (
    <AnimatePresence>
      {pkg && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-card hover:bg-white transition-colors"
            >
              <X className="w-5 h-5 text-[color:var(--purple-deep)]" />
            </button>

            {/* Image */}
            <div className="aspect-[16/7] relative flex-shrink-0">
              <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--purple-deep)]/80 to-transparent" />
              <div className="absolute bottom-4 left-5 right-5 text-white">
                <p className="text-[10px] uppercase tracking-widest text-[color:var(--gold)] font-semibold">{pkg.categoryLabel}</p>
                <h2 className="font-display italic text-2xl md:text-3xl leading-tight mt-1">{pkg.name}</h2>
              </div>
            </div>

            {/* Scrollable body */}
            <div className="overflow-y-auto flex-1 p-5 md:p-6">
              {/* Price + meta */}
              <div className="flex items-center justify-between flex-wrap gap-3">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Starting at</p>
                  <p className="text-3xl font-black text-gradient-primary leading-none">{inr(pkg.price)}</p>
                </div>
                <div className="flex gap-4 text-sm text-muted-foreground">
                  <span>⏱ {pkg.duration}</span>
                  <span>📐 {pkg.area}</span>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{pkg.description}</p>

              {/* Inclusions */}
              <div className="mt-5">
                <p className="text-xs font-bold uppercase tracking-widest text-[color:var(--purple-deep)] mb-3">
                  Package Includes
                </p>
                <ul className="space-y-2">
                  {pkg.includes.map((inc) => (
                    <li key={inc} className="flex items-start gap-2.5 text-sm text-foreground">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-[color:var(--gold)]" />
                      {inc}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Addons */}
              {pkg.addons.length > 0 && (
                <div className="mt-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-[color:var(--purple-deep)] mb-3">
                    Add-ons Available
                  </p>
                  <ul className="space-y-2">
                    {pkg.addons.map((a) => (
                      <li key={a} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <Plus className="w-3.5 h-3.5 mt-1 shrink-0 text-[color:var(--gold)]" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTA Buttons */}
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href={`tel:${PHONE_NUMBER}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3.5 text-white font-bold text-sm bg-gradient-primary shadow-pink"
                >
                  <Phone className="w-4 h-4" /> Book Now
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3.5 text-white font-bold text-sm bg-[#25D366] shadow-card"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ─────────── Page ─────────── */
export function KidsThemePage() {
  const { theme } = useParams<{ theme: string }>();
  const selected = getKidsTheme(theme || "");
  const packages = getKidsThemePackages(theme || "");
  const [active, setActive] = useState<KidsThemePackage | null>(null);

  if (!selected) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <SiteHeader active="Kids Themes" />
        <div className="mx-auto max-w-3xl px-4 py-24 text-center">
          <h1 className="font-display italic text-4xl text-[color:var(--purple-deep)]">Theme not found</h1>
          <p className="text-muted-foreground mt-3">We couldn't find the theme you're looking for.</p>
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
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-20 text-center relative">
          <p className="text-xs uppercase tracking-widest text-white/60">
            <Link href="/kids-themes" className="hover:text-[color:var(--gold)] transition-colors">
              Kids Themes
            </Link>{" "}
            · {selected.title}
          </p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-script text-5xl md:text-6xl text-[color:var(--gold)] drop-shadow mt-2"
          >
            Kids Theme Decoration
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display italic text-4xl md:text-6xl tracking-tight mt-3 leading-tight"
          >
            {selected.title}
          </motion.h1>
          <div className="flex items-center justify-center gap-3 mt-5">
            <span className="h-px w-16 bg-[color:var(--gold)]/70" />
            <SparkleIcon className="w-4 h-4 text-[color:var(--gold)]" />
            <span className="h-px w-16 bg-[color:var(--gold)]/70" />
          </div>
          <p className="mt-5 max-w-2xl mx-auto text-white/85 text-base md:text-lg font-light">
            Choose from our {selected.title} theme decoration packages. Each one is styled by our expert team with premium balloon décor, custom backdrops and themed props.
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <main className="py-16 md:py-20 bg-gradient-soft">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <p className="font-script text-3xl text-[color:var(--pink)]">Choose Your Package</p>
            <h2 className="font-display italic text-3xl md:text-4xl text-[color:var(--purple-deep)] mt-1">
              {selected.title} Decoration Packages
            </h2>
            <p className="mt-3 max-w-xl mx-auto text-sm text-muted-foreground">
              All packages include professional setup, premium materials, and post-event cleanup support. Prices are starting rates — contact us for customizations.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, i) => (
              <KidsPackageCard key={pkg.id} pkg={pkg} index={i} onView={setActive} />
            ))}
          </div>

          {/* Back link */}
          <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/kids-themes"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 border border-[color:var(--gold)]/50 text-[color:var(--purple-deep)] font-semibold text-sm hover:bg-[color:var(--gold)]/10 transition-colors"
            >
              <Heart className="w-4 h-4" /> All Kids Themes
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-gradient-primary text-white font-semibold text-sm shadow-pink"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />

      <KidsPackageModal pkg={active} onClose={() => setActive(null)} />
    </div>
  );
}
