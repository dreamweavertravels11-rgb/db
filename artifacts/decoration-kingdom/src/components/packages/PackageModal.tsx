import { AnimatePresence, motion } from "framer-motion";
import { Check, Clock, MapPin, MessageCircle, Phone, Plus, X } from "lucide-react";
import { useEffect } from "react";

import { WHATSAPP_BOOKING_URL } from "@/lib/whatsapp";
import { inr, type PackageItem } from "@/lib/packages-catalog";

export function PackageModal({ pkg, onClose }: { pkg: PackageItem | null; onClose: () => void }) {
  useEffect(() => {
    if (!pkg) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [pkg]);

  useEffect(() => {
    if (!pkg) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [pkg, onClose]);

  const whatsappHref = pkg ? WHATSAPP_BOOKING_URL : "#";

  return (
    <AnimatePresence>
      {pkg && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop — same blur treatment used across the site */}
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

            <div className="grid sm:grid-cols-2">
              {/* Large image */}
              <div className="relative aspect-[4/5] sm:aspect-auto sm:h-full min-h-[240px] overflow-hidden">
                <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[color:var(--purple-deep)]">
                  {pkg.categoryLabel}
                  {pkg.subcategoryLabel ? ` · ${pkg.subcategoryLabel}` : ""}
                </div>
              </div>

              {/* Details */}
              <div className="p-6 sm:p-7 flex flex-col">
                <h3 className="font-display italic text-2xl md:text-3xl text-[color:var(--purple-deep)] leading-snug">
                  {pkg.name}
                </h3>
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

                {pkg.addons.length > 0 && (
                  <div className="mt-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-[color:var(--purple-deep)] mb-2">
                      Add-ons Available
                    </p>
                    <ul className="space-y-1.5">
                      {pkg.addons.map((a) => (
                        <li key={a} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Plus className="w-3.5 h-3.5 mt-1 shrink-0 text-[color:var(--gold)]" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Standard Notes */}
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

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    href="tel:9310854642"
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
