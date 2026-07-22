import { Link, useParams } from "wouter";
import { motion } from "framer-motion";
import { Heart, MessageCircle, Phone, X, Sparkles as SparkleIcon, CheckCircle2, ArrowRight, Check, ChevronDown, ChevronUp, Clock, MapPin, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
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
  const [showAddons, setShowAddons] = useState(false);

  useEffect(() => {
    if (!pkg) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [pkg]);

  useEffect(() => {
    if (!pkg) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [pkg, onClose]);

  const whatsappHref = pkg ? buildWhatsappUrl(pkg) : "#";

  const extraAddons = {
    foilBalloons: [
      { name: "Number Foil Balloon", price: "₹299 each", desc: '32" Large Silver/Gold/Rose Gold Number 0–9' },
      { name: "Alphabet Foil Balloon", price: "₹99 per letter", desc: '16" Silver/Gold Letters – Name spell karne ke liye' },
      { name: "Theme Foil Balloon", price: "₹350 each", desc: "Spiderman, Barbie, Unicorn, Dinosaur, Car, Princess etc." },
      { name: "Star / Heart Foil Balloon", price: "₹250 each", desc: '18" Silver, Gold, Pink, Blue, Red' },
      { name: "Confetti Foil Balloon", price: "₹300 each", desc: '24" Clear with Silver/Gold Confetti' },
    ],
    decorAddons: [
      { name: "Extra Balloon Garland", price: "₹999", desc: "10ft additional balloon garland in theme colors" },
      { name: "Helium Balloons with Weight", price: "₹80/piece", desc: "Metallic + Confetti balloons with ribbon & weight" },
      { name: "Themed Table Setup", price: "₹1,499", desc: "Theme tablecloth, runner, plates, cups, napkins for 10 people" },
      { name: "Fairy Lights Setup", price: "₹799", desc: "LED fairy lights for backdrop + floor" },
      { name: "Fog Entry / Smoke Machine", price: "₹1,200", desc: "10 minutes fog for cake cutting" },
      { name: "Cold Pyro / Sparklers", price: "₹500 for 2", desc: "Safe cold pyros for cake cutting moment" },
      { name: "Themed Props Corner", price: "₹1,999", desc: "Photo booth props + Standing cutouts as per theme" },
      { name: "Welcome Board + Easel", price: "₹999", desc: "Custom name + photo welcome board" },
      { name: "Balloon Drop", price: "₹1,500", desc: "200 balloons drop during cake cutting" },
      { name: "Cake Table Decoration", price: "₹1,299", desc: "Cake table with fairy lights, flowers & theme decor" },
      { name: "Photographer for 2 Hours", price: "₹3,500", desc: "Professional photos + 20 edited pics" },
      { name: "Character Mascot Entry", price: "₹4,500", desc: "15 min entry – Mickey, Minnie, Spiderman, Barbie, etc." },
    ],
  };

  return (
    <AnimatePresence>
      {pkg && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-[color:var(--purple-deep)]/60 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full sm:max-w-3xl max-h-[92vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl bg-white shadow-2xl border border-[color:var(--gold)]/30"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 z-10 w-9 h-9 grid place-items-center rounded-full bg-white/90 text-[color:var(--purple-deep)] shadow-card hover:bg-white hover:scale-110 transition-transform"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col">
              {/* Image — object-contain so nothing is cropped */}
              <div className="relative w-full bg-[color:var(--purple-deep)]/5 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full max-h-[55vh] object-contain"
                />
                <div className="absolute top-4 left-4 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[color:var(--purple-deep)]">
                  {pkg.categoryLabel}
                </div>
              </div>

              {/* Details */}
              <div className="p-6 sm:p-7 flex flex-col">
                <h3 className="font-display italic text-2xl md:text-3xl text-[color:var(--purple-deep)] leading-snug">
                  {pkg.name}
                </h3>
                <p className="mt-3 font-bold text-sm text-[color:var(--pink)] tracking-wide">
                  ✨ All packages are fully customizable — tell us your vision!
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{pkg.description}</p>

                <div className="mt-4 flex items-end gap-2">
                  <p className="text-[11px] uppercase tracking-widest text-muted-foreground">Starting at</p>
                </div>
                <p className="text-3xl font-black text-gradient-primary leading-none">{inr(pkg.price)}</p>

                <div className="mt-4 flex flex-wrap gap-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1 bg-muted rounded-full px-3 py-1.5">
                    <Clock className="w-3.5 h-3.5" /> {pkg.duration}
                  </span>
                  <span className="inline-flex items-center gap-1 bg-muted rounded-full px-3 py-1.5">
                    <MapPin className="w-3.5 h-3.5" /> {pkg.area}
                  </span>
                </div>

                {/* Inclusions */}
                <div className="mt-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-[color:var(--purple-deep)] mb-2">
                    What's Included
                  </p>
                  <ul className="space-y-1.5">
                    {pkg.includes.map((inc) => (
                      <li key={inc} className="flex items-start gap-2 text-sm text-foreground/85">
                        <Check className="w-4 h-4 mt-0.5 shrink-0 text-[color:var(--pink)]" />
                        {inc}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Extra Add-ons (collapsible) */}
                <div className="mt-5 rounded-2xl border border-[color:var(--gold)]/40 overflow-hidden">
                  <button
                    onClick={() => setShowAddons((v) => !v)}
                    className="w-full flex items-center justify-between px-4 py-3 bg-gradient-to-r from-[color:var(--purple-deep)]/5 to-[color:var(--gold)]/10 hover:from-[color:var(--purple-deep)]/10 transition-colors"
                  >
                    <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[color:var(--purple-deep)]">
                      <Sparkles className="w-3.5 h-3.5 text-[color:var(--gold)]" />
                      Extra Add-ons Available
                    </span>
                    {showAddons ? <ChevronUp className="w-4 h-4 text-[color:var(--purple-deep)]" /> : <ChevronDown className="w-4 h-4 text-[color:var(--purple-deep)]" />}
                  </button>

                  {showAddons && (
                    <div className="px-4 pb-4 pt-3 space-y-4 bg-white">
                      {/* Foil Balloons */}
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-[color:var(--pink)] mb-2">🎈 Foil Balloons</p>
                        <ul className="space-y-2">
                          {extraAddons.foilBalloons.map((a) => (
                            <li key={a.name} className="flex items-start justify-between gap-3">
                              <div>
                                <p className="text-xs font-semibold text-foreground">{a.name}</p>
                                <p className="text-[11px] text-muted-foreground">{a.desc}</p>
                              </div>
                              <span className="shrink-0 text-xs font-bold text-[color:var(--purple-deep)] whitespace-nowrap">{a.price}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Decor Add-ons */}
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-[color:var(--pink)] mb-2">✨ Decor Add-ons</p>
                        <ul className="space-y-2">
                          {extraAddons.decorAddons.map((a) => (
                            <li key={a.name} className="flex items-start justify-between gap-3">
                              <div>
                                <p className="text-xs font-semibold text-foreground">{a.name}</p>
                                <p className="text-[11px] text-muted-foreground">{a.desc}</p>
                              </div>
                              <span className="shrink-0 text-xs font-bold text-[color:var(--purple-deep)] whitespace-nowrap">{a.price}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Add-on Notes */}
                      <div className="pt-2 border-t border-border/50 space-y-1">
                        {["All add-ons can be added to any package.", "Price may vary by location.", "Book 24 hours in advance.", "Setup time will increase by 30 mins with add-ons."].map((n) => (
                          <p key={n} className="text-[11px] text-muted-foreground flex items-start gap-1.5">
                            <span className="text-green-500 mt-0.5">✔</span> {n}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Important Notes */}
                <div className="mt-5 rounded-2xl bg-amber-50 border border-amber-200/70 p-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-amber-700 mb-2">
                    📋 Important Notes
                  </p>
                  <ul className="space-y-1.5">
                    {[
                      "Free setup by professional decorators.",
                      "Decoration lasts approximately 24–48 hours (indoors).",
                      "Colours may vary slightly based on availability.",
                      "Cake, table, photographer and venue are not included unless mentioned.",
                      "Decoration should be booked at least 24 hours in advance.",
                      "Extra customization is available at additional cost.",
                      "Travel charges may apply for locations outside the service area.",
                      "Images are for reference only; the final setup may vary slightly due to space and product availability.",
                    ].map((note) => (
                      <li key={note} className="flex items-start gap-2 text-xs text-amber-800/90 leading-relaxed">
                        <span className="mt-0.5 shrink-0 text-amber-500">•</span>
                        {note}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Buttons */}
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    href={`tel:${PHONE_NUMBER}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-white font-bold text-sm bg-gradient-primary shadow-pink"
                  >
                    <Phone className="w-4 h-4" /> Book Now
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-white font-bold text-sm bg-[#25D366] shadow-card"
                  >
                    <MessageCircle className="w-4 h-4" /> WhatsApp
                  </motion.a>
                </div>
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
