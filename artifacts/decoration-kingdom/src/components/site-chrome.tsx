import { Link } from "wouter";
import { motion } from "framer-motion";
import { Facebook, Home, Instagram, MessageCircle, Send, Heart, Menu, X } from "lucide-react";
import { useState } from "react";

import { WHATSAPP_BOOKING_URL } from "@/lib/whatsapp";

const navItems: { label: string; to: string }[] = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Packages", to: "/packages" },
  { label: "Blog", to: "/blog" },
  { label: "Contact Us", to: "/contact" },
];

export function SiteHeader({ active }: { active?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="bg-gradient-topbar text-white text-sm">
        <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-[color:var(--pink)] fill-current" />
            <span className="hidden sm:inline">Welcome to Decoration Kingdom – We Decorate Your Moments!</span>
            <span className="sm:hidden">Welcome to Decoration Kingdom</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline">Follow Us :</span>
            <a href="/" aria-label="Home" className="w-7 h-7 rounded-full bg-white/95 text-[color:var(--purple-deep)] grid place-items-center hover:scale-110 transition-transform"><Home className="w-4 h-4" /></a>
            <a href="#" aria-label="Facebook" className="w-7 h-7 rounded-full bg-white/95 text-[color:var(--purple-deep)] grid place-items-center hover:scale-110 transition-transform"><Facebook className="w-4 h-4" /></a>
            <a href="https://www.instagram.com/decorationkingdomdelhincr?utm_source=qr&igsh=NHp0bHZvZmM2dmd1" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-7 h-7 rounded-full bg-white/95 text-[color:var(--pink)] grid place-items-center hover:scale-110 transition-transform"><Instagram className="w-4 h-4" /></a>
            <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-7 h-7 rounded-full bg-[#25D366] text-white grid place-items-center hover:scale-110 transition-transform"><MessageCircle className="w-4 h-4" /></a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-16 h-16 rounded-2xl overflow-hidden bg-white/90 shadow-lg"
              aria-hidden
            >
              <img src="/logo.png" alt="Decoration Kingdom logo" className="h-full w-full object-contain p-2" />
            </motion.div>
            <div className="leading-tight">
              <div className="font-display font-black text-xl tracking-tight text-[color:var(--purple-deep)]">Decoration Kingdom</div>
              <div className="text-xs uppercase tracking-[0.28em] text-[color:var(--pink)] font-semibold">Celebrations</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => {
              const isActive = active === item.label;
              return (
                <Link
                  key={item.label}
                  href={item.to}
                  className={`text-sm font-semibold tracking-wide uppercase transition-colors relative py-2 ${isActive ? "text-[color:var(--pink)]" : "text-[color:var(--purple-deep)] hover:text-[color:var(--pink)]"}`}
                >
                  {item.label}
                  {isActive && <span className="absolute left-1/2 -translate-x-1/2 -bottom-0.5 w-6 h-0.5 rounded-full bg-[color:var(--pink)]" />}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <motion.a
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
              href={WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 rounded-full px-5 py-3 text-white font-semibold text-sm bg-gradient-primary shadow-pink"
            >
              GET A QUOTE
              <span className="w-6 h-6 grid place-items-center rounded-full bg-white/20"><Send className="w-3.5 h-3.5" /></span>
            </motion.a>
            <button onClick={() => setOpen((v) => !v)} className="lg:hidden p-2 rounded-md text-[color:var(--purple-deep)]" aria-label="Toggle menu">
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {open && (
          <div className="lg:hidden border-t border-border bg-white">
            <nav className="px-4 py-3 flex flex-col gap-1">
              {navItems.map((item) => (
                <Link key={item.label} href={item.to} className="py-2 text-sm font-semibold text-[color:var(--purple-deep)]">{item.label}</Link>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-[color:var(--purple-deep)] text-white/90 py-10">
      <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="font-display font-black text-xl">DECORATION KINGDOM</div>
          <div className="text-[10px] tracking-[0.4em] text-[color:var(--pink)] font-semibold">CELEBRATIONS</div>
          <p className="mt-3 text-white/70 leading-relaxed">We bring imagination to life with beautiful balloon decorations for every celebration.</p>
        </div>
        <div>
          <h4 className="font-bold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-white/70">
            {navItems.map((l) => (
              <li key={l.label}><Link href={l.to} className="hover:text-[color:var(--pink)]">{l.label}</Link></li>
            ))}
            <li><Link href="/privacy-policy" className="hover:text-[color:var(--pink)]">Privacy Policy</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-3">Contact Info</h4>
          <ul className="space-y-2 text-white/70">
            <li>support@decorationkingdom.com</li>
            <li>decorationkingdom.com</li>
            <li>Delhi & NCR</li>
            <li>9310854642 / 9971265244</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-3">Follow Us</h4>
          <div className="flex gap-3">
            <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/10 grid place-items-center hover:bg-[color:var(--pink)] transition-colors"><Facebook className="w-4 h-4" /></a>
            <a href="https://www.instagram.com/decorationkingdomdelhincr?utm_source=qr&igsh=NHp0bHZvZmM2dmd1" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/10 grid place-items-center hover:bg-[color:var(--pink)] transition-colors"><Instagram className="w-4 h-4" /></a>
            <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-9 h-9 rounded-full bg-white/10 grid place-items-center hover:bg-[#25D366] transition-colors"><MessageCircle className="w-4 h-4" /></a>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 mt-8 pt-4 border-t border-white/10 text-xs text-white/50 text-center">
        © {new Date().getFullYear()} Decoration Kingdom. All rights reserved.
      </div>
    </footer>
  );
}
