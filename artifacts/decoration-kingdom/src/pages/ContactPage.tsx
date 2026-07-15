
import { motion } from "framer-motion";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Check, Instagram, Facebook } from "lucide-react";

import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { WHATSAPP_BOOKING_URL } from "@/lib/whatsapp";

const contactCards = [
  { icon: Phone, title: "Call us", lines: ["9310854642", "9971265244"], href: "tel:9310854642", accent: "pink" },
  { icon: MessageCircle, title: "WhatsApp", lines: ["Instant reply · 24×7"], href: WHATSAPP_BOOKING_URL, accent: "green" },
  { icon: Mail, title: "Email", lines: ["support@decorationkingdom.com"], href: "mailto:support@decorationkingdom.com", accent: "purple" },
  { icon: MapPin, title: "Service area", lines: ["Delhi · Gurgaon · Noida · Faridabad · Ghaziabad"], accent: "gold" },
];

const accents: Record<string, string> = {
  pink: "text-[color:var(--pink)] bg-[color:var(--pink)]/10",
  green: "text-[#25D366] bg-[#25D366]/10",
  purple: "text-[color:var(--purple)] bg-[color:var(--purple)]/10",
  gold: "text-[color:var(--gold)] bg-[color:var(--gold)]/15",
};

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", occasion: "Birthday", date: "", city: "Delhi", notes: "" });

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hi Decoration Kingdom!\n\nI'd like a quote for a ${form.occasion} decoration.\n\n` +
      `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\n` +
      `Event date: ${form.date}\nCity: ${form.city}\nNotes: ${form.notes || "—"}`
    );
    window.open(`https://wa.me/919310854642?text=${msg}`, "_blank", "noopener");
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SiteHeader active="Contact Us" />

      <section className="relative bg-gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 opacity-25"
          style={{ backgroundImage: "radial-gradient(circle at 15% 25%, oklch(0.65 0.24 350 / 0.55), transparent 40%), radial-gradient(circle at 85% 65%, oklch(0.82 0.15 85 / 0.45), transparent 42%)" }} />
        <div className="mx-auto max-w-7xl px-4 py-20 md:py-24 text-center relative">
          <p className="font-script text-5xl md:text-6xl text-[color:var(--gold)]">Let's talk</p>
          <h1 className="font-display italic text-4xl md:text-6xl mt-3">
            Get in <span className="text-[color:var(--gold)]">Touch</span>
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-white/85 font-light">
            Available 24×7. Reach us the way you prefer — we usually reply within 15 minutes.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="py-14 md:py-16 bg-gradient-soft">
        <div className="mx-auto max-w-7xl px-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {contactCards.map((c, i) => {
            const inner = (
              <>
                <div className={`w-12 h-12 rounded-xl grid place-items-center ${accents[c.accent]}`}>
                  <c.icon className="w-5 h-5" />
                </div>
                <h3 className="mt-4 font-display italic text-xl text-[color:var(--purple-deep)]">{c.title}</h3>
                {c.lines.map((l) => (
                  <p key={l} className="text-sm text-foreground/75 mt-1">{l}</p>
                ))}
              </>
            );
            return (
              <motion.div key={c.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                {c.href ? (
                  <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                    className="block rounded-3xl bg-white p-6 border border-border/60 shadow-card hover:border-[color:var(--gold)]/60 transition h-full">
                    {inner}
                  </a>
                ) : (
                  <div className="rounded-3xl bg-white p-6 border border-border/60 shadow-card h-full">{inner}</div>
                )}
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Form + hours */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 grid lg:grid-cols-[1.4fr_1fr] gap-10">
          <div>
            <p className="font-script text-3xl text-[color:var(--pink)]">Send a message</p>
            <h2 className="font-display italic text-3xl md:text-4xl text-[color:var(--purple-deep)] mt-1">
              Request a free quote
            </h2>
            <p className="text-sm text-muted-foreground mt-2 max-w-lg">
              Fill in a few details and our stylist will send options over WhatsApp with pricing and availability.
            </p>

            {submitted ? (
              <div className="mt-8 rounded-3xl bg-gradient-soft border border-[color:var(--gold)]/40 p-8 text-center shadow-card">
                <div className="w-14 h-14 mx-auto rounded-full bg-[color:var(--pink)]/15 text-[color:var(--pink)] grid place-items-center">
                  <Check className="w-6 h-6" strokeWidth={3} />
                </div>
                <h3 className="mt-4 font-display italic text-2xl text-[color:var(--purple-deep)]">Message sent!</h3>
                <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
                  Your request has opened in WhatsApp. Our stylist will confirm shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="mt-6 grid gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input label="Your name" required value={form.name} onChange={(v) => setForm({ ...form, name: v })} placeholder="Full name" />
                  <Input label="Phone" required type="tel" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} placeholder="9310 854 642" />
                  <Input label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} placeholder="you@email.com" />
                  <div>
                    <Label>Occasion</Label>
                    <select value={form.occasion} onChange={(e) => setForm({ ...form, occasion: e.target.value })}
                      className="mt-1.5 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm focus:outline-none focus:border-[color:var(--pink)]">
                      {["Birthday", "Anniversary", "Baby Shower", "Welcome Baby", "Ring / Proposal", "Wedding", "Corporate", "Other"].map((o) => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                  <Input label="Event date" required type="date" value={form.date} onChange={(v) => setForm({ ...form, date: v })} />
                  <div>
                    <Label>City</Label>
                    <select value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })}
                      className="mt-1.5 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm focus:outline-none focus:border-[color:var(--pink)]">
                      {["Delhi", "Gurgaon", "Noida", "Ghaziabad", "Faridabad", "Other NCR"].map((c) => <option key={c}>{c}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <Label>Notes</Label>
                  <textarea rows={4} value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    placeholder="Theme, colours, venue, guest count..."
                    className="mt-1.5 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm focus:outline-none focus:border-[color:var(--pink)]" />
                </div>
                <button type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 bg-gradient-primary text-white font-bold text-sm uppercase tracking-widest shadow-pink">
                  <Send className="w-4 h-4" /> Send Request
                </button>
              </form>
            )}
          </div>

          <aside className="space-y-5">
            <div className="rounded-3xl bg-gradient-band text-white p-6 shadow-card">
              <p className="font-script text-3xl text-[color:var(--gold)]">Working hours</p>
              <ul className="mt-3 space-y-2 text-sm">
                <li className="flex items-center gap-2"><Clock className="w-4 h-4 text-[color:var(--gold)]" /> Mon – Sun · 24×7 Available</li>
                <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[color:var(--gold)]" /> Delhi & NCR</li>
              </ul>
            </div>
            <div className="rounded-3xl bg-white p-6 border border-border/70 shadow-card">
              <h3 className="font-display italic text-xl text-[color:var(--purple-deep)]">Follow us</h3>
              <p className="text-xs text-muted-foreground mt-1">See our latest setups on social.</p>
              <div className="mt-4 flex gap-3">
                <a href="https://www.instagram.com/decorationkingdomdelhincr?utm_source=qr&igsh=NHp0bHZvZmM2dmd1" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-11 h-11 rounded-full bg-[color:var(--pink)]/10 text-[color:var(--pink)] grid place-items-center hover:bg-[color:var(--pink)] hover:text-white transition"><Instagram className="w-5 h-5" /></a>
                <a href="#" aria-label="Facebook" className="w-11 h-11 rounded-full bg-[color:var(--purple-deep)]/10 text-[color:var(--purple-deep)] grid place-items-center hover:bg-[color:var(--purple-deep)] hover:text-white transition"><Facebook className="w-5 h-5" /></a>
                <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-11 h-11 rounded-full bg-[#25D366]/15 text-[#25D366] grid place-items-center hover:bg-[#25D366] hover:text-white transition"><MessageCircle className="w-5 h-5" /></a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Map */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="rounded-3xl overflow-hidden border border-border/60 shadow-card aspect-[16/7]">
            <iframe
              title="Decoration Kingdom service area — Delhi NCR"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d448159.34!2d76.94!3d28.53!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%" height="100%" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs font-semibold text-[color:var(--purple-deep)] uppercase tracking-widest">
      {children}
    </span>
  );
}

function Input({ label, required, type = "text", value, onChange, placeholder }: {
  label: string; required?: boolean; type?: string; value: string;
  onChange: (v: string) => void; placeholder?: string;
}) {
  return (
    <label className="block">
      <Label>{label} {required && <span className="text-[color:var(--pink)]">*</span>}</Label>
      <input required={required} type={type} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder}
        className="mt-1.5 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm focus:outline-none focus:border-[color:var(--pink)]" />
    </label>
  );
}
