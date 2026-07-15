import { Link, useParams } from "wouter";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowLeft, ArrowRight, Check, Clock, Heart, MapPin, MessageCircle,
  Phone, Send, Sparkles, Star,
} from "lucide-react";

import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { WHATSAPP_BOOKING_URL } from "@/lib/whatsapp";
import { findPackage, relatedPackages, inr } from "@/lib/packages-data";

function PackageNotFound() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader active="Packages" />
      <div className="max-w-2xl mx-auto px-4 py-24 text-center">
        <p className="font-script text-4xl text-[color:var(--pink)]">Oops</p>
        <h1 className="font-display italic text-3xl md:text-4xl text-[color:var(--purple-deep)] mt-2">
          Package not found
        </h1>
        <p className="text-muted-foreground mt-3">
          This decoration package may have moved or been retired. Explore our full collection instead.
        </p>
        <a
          href="/packages"
          className="mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 bg-gradient-primary text-white font-bold text-sm shadow-pink"
        >
          <ArrowLeft className="w-4 h-4" /> Browse all packages
        </a>
              </div>
      <SiteFooter />
    </div>
  );
}

function PackageError({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader active="Packages" />
      <div className="max-w-2xl mx-auto px-4 py-24 text-center">
        <h1 className="font-display italic text-3xl text-[color:var(--purple-deep)]">
          This page didn't load
        </h1>
        <button onClick={reset} className="mt-6 rounded-full px-6 py-3 bg-gradient-primary text-white font-bold text-sm shadow-pink">
          Try again
        </button>
      </div>
      <SiteFooter />
    </div>
  );
}

export function PackageDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const pkg = findPackage(slug || "");
  if (!pkg) return <PackageNotFound />;
  const related = relatedPackages(pkg.slug, pkg.sectionId);
  const [activeImg, setActiveImg] = useState(pkg.gallery[0]);

  const waMessage = encodeURIComponent(
    `Hi Decoration Kingdom! I'd like to book the "${pkg.title}" package (${inr(pkg.price)}). Please share availability.`
  );
  const waHref = `https://wa.me/919310854642?text=${waMessage}`;

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SiteHeader active="Packages" />

      {/* Breadcrumb */}
      <div className="bg-gradient-soft border-b border-border/60">
        <div className="mx-auto max-w-7xl px-4 py-4 text-xs text-muted-foreground flex items-center gap-2 flex-wrap">
          <a href="/" className="hover:text-[color:var(--pink)]">Home</a>
          <span>/</span>
          <a href="/packages" className="hover:text-[color:var(--pink)]">Packages</a>
          <span>/</span>
          <a href={`/packages#${pkg.sectionId}`} className="hover:text-[color:var(--pink)]">
            {pkg.sectionTitle}
          </a>
          <span>/</span>
          <span className="text-foreground/80 truncate">{pkg.title}</span>
        </div>
      </div>

      {/* Detail */}
      <section className="py-10 md:py-16 bg-gradient-soft">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Gallery */}
          <div>
            <motion.div
              key={activeImg}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-card border border-[color:var(--gold)]/30 bg-white"
            >
              <img
                src={activeImg}
                alt={pkg.title}
                width={800}
                height={1000}
                className="w-full h-full object-cover"
              />
              {pkg.tag && (
                <div className="absolute top-4 left-4 inline-flex items-center gap-1 rounded-full bg-[color:var(--purple-deep)]/95 text-[color:var(--gold)] text-[10px] font-bold tracking-widest uppercase px-3 py-1 border border-[color:var(--gold)]/40">
                  <Star className="w-3 h-3 fill-current" />
                  {pkg.tag}
                </div>
              )}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-[11px]">
                <span className="inline-flex items-center gap-1 bg-black/40 backdrop-blur rounded-full px-3 py-1.5">
                  <MapPin className="w-3 h-3" /> At Your Location · Delhi NCR
                </span>
                <span className="inline-flex items-center gap-1 bg-black/40 backdrop-blur rounded-full px-3 py-1.5">
                  <Star className="w-3 h-3 fill-[color:var(--gold)] text-[color:var(--gold)]" /> 5.0 · 200+ bookings
                </span>
              </div>
            </motion.div>

            {/* Thumbnails */}
            <div className="mt-4 grid grid-cols-5 gap-3">
              {pkg.gallery.map((img: string, i: number) => (
                <button
                  key={img + i}
                  type="button"
                  onClick={() => setActiveImg(img)}
                  className={`aspect-square overflow-hidden rounded-xl border-2 transition ${
                    activeImg === img
                      ? "border-[color:var(--pink)] shadow-pink"
                      : "border-transparent hover:border-[color:var(--gold)]/60"
                  }`}
                >
                  <img src={img} alt={`${pkg.title} view ${i + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Info + booking */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-script text-3xl text-[color:var(--pink)]">{pkg.eyebrow}</p>
            <h1 className="font-display italic text-3xl md:text-5xl text-[color:var(--purple-deep)] leading-tight mt-1">
              {pkg.title}
            </h1>
            <div className="flex items-center gap-3 mt-4">
              <span className="h-px w-12 bg-[color:var(--gold)]" />
              <Heart className="w-4 h-4 text-[color:var(--pink)] fill-current" />
              <span className="h-px w-12 bg-[color:var(--gold)]" />
            </div>

            <p className="mt-5 text-foreground/80 leading-relaxed">{pkg.desc}</p>

            <div className="mt-6 flex items-end gap-6">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Starting at</p>
                <p className="text-4xl md:text-5xl font-black text-gradient-primary leading-none">
                  {inr(pkg.price)}
                </p>
              </div>
              <div className="text-xs text-muted-foreground pb-1">
                <p className="flex items-center gap-1"><Clock className="w-3 h-3" /> 2–4 hr setup</p>
                <p className="flex items-center gap-1 mt-1"><MapPin className="w-3 h-3" /> Delhi NCR</p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              <a
                href="#request-booking"
                className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3.5 bg-gradient-primary text-white font-bold text-sm tracking-widest uppercase shadow-pink hover:scale-[1.02] transition"
              >
                Request Booking <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={WHATSAPP_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3.5 border-2 border-[color:var(--purple-deep)] text-[color:var(--purple-deep)] font-bold text-sm tracking-widest uppercase hover:bg-[color:var(--purple-deep)] hover:text-white transition"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
            </div>
            <a
              href="tel:9310854642"
              className="mt-3 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-[color:var(--pink)]"
            >
              <Phone className="w-4 h-4" /> Or call 9310854642 · Available 24×7
            </a>

            {/* Inclusions */}
            <div className="mt-8 rounded-2xl bg-white border border-border/60 shadow-card p-6">
              <h2 className="font-display italic text-xl text-[color:var(--purple-deep)] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[color:var(--gold)]" /> What's included
              </h2>
              <ul className="mt-4 grid sm:grid-cols-2 gap-x-6 gap-y-3">
                {pkg.inclusions.map((f: string) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-foreground/85">
                    <span className="mt-0.5 w-5 h-5 grid place-items-center rounded-full bg-[color:var(--pink)]/10 text-[color:var(--pink)] shrink-0">
                      <Check className="w-3 h-3" strokeWidth={3} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Request booking form */}
      <section id="request-booking" className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4">
          <div className="text-center">
            <p className="font-script text-4xl text-[color:var(--pink)]">Request Booking</p>
            <h2 className="font-display italic text-3xl md:text-4xl text-[color:var(--purple-deep)] mt-1">
              Reserve your {pkg.title.toLowerCase()} setup
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-sm">
              Share your event details and our stylist will reach out within 30 minutes with availability and a personalised quote.
            </p>
          </div>

          <BookingForm packageTitle={pkg.title} price={pkg.price} waHref={waHref} />
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-16 bg-gradient-soft border-t border-border/60">
          <div className="mx-auto max-w-7xl px-4">
            <div className="flex items-end justify-between mb-8">
              <div>
                <p className="font-script text-3xl text-[color:var(--pink)]">You may also love</p>
                <h2 className="font-display italic text-2xl md:text-3xl text-[color:var(--purple-deep)]">
                  More from {pkg.sectionTitle}
                </h2>
              </div>
              <a
                href={`/packages#${pkg.sectionId}`}
                className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--purple-deep)] hover:text-[color:var(--pink)]"
              >
                View all <ArrowRight className="w-4 h-4" />
              </a>
              </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/packages/${r.slug}`}
                  className="group rounded-2xl overflow-hidden bg-white shadow-card border border-border/70 hover:border-[color:var(--gold)]/60 transition"
                >
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={r.img}
                      alt={r.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-display text-base text-[color:var(--purple-deep)] line-clamp-2 min-h-[3rem] group-hover:text-[color:var(--pink)]">
                      {r.title}
                    </h3>
                    <p className="mt-2 text-xl font-black text-gradient-primary">{inr(r.price)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <SiteFooter />
    </div>
  );
}

function BookingForm({ packageTitle, price, waHref }: { packageTitle: string; price: number; waHref: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", date: "", city: "Delhi", notes: "" });

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hi Decoration Kingdom!\n\nI'd like to book the "${packageTitle}" package (${inr(price)}).\n\n` +
      `Name: ${form.name}\nPhone: ${form.phone}\nEvent date: ${form.date}\nCity: ${form.city}\n` +
      `Notes: ${form.notes || "—"}`
    );
    window.open(`https://wa.me/919310854642?text=${msg}`, "_blank", "noopener");
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="mt-10 rounded-3xl bg-gradient-soft border border-[color:var(--gold)]/40 p-8 text-center shadow-card">
        <div className="w-14 h-14 mx-auto rounded-full bg-[color:var(--pink)]/15 text-[color:var(--pink)] grid place-items-center">
          <Check className="w-6 h-6" strokeWidth={3} />
        </div>
        <h3 className="mt-4 font-display italic text-2xl text-[color:var(--purple-deep)]">
          Request received!
        </h3>
        <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
          Your booking request has opened in WhatsApp. Our stylist will confirm availability shortly.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full px-5 py-3 bg-gradient-primary text-white text-sm font-bold shadow-pink">
            <MessageCircle className="w-4 h-4" /> Open WhatsApp again
          </a>
          <a href="tel:9310854642" className="inline-flex items-center gap-2 rounded-full px-5 py-3 border-2 border-[color:var(--purple-deep)] text-[color:var(--purple-deep)] text-sm font-bold">
            <Phone className="w-4 h-4" /> Call us
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="mt-10 rounded-3xl bg-gradient-soft border border-[color:var(--gold)]/30 p-6 md:p-8 shadow-card grid gap-4"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Your name" required>
          <input
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="e.g. Riya Sharma"
            className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm focus:outline-none focus:border-[color:var(--pink)]"
          />
        </Field>
        <Field label="Phone / WhatsApp" required>
          <input
            required
            type="tel"
            pattern="[0-9+ ]{7,}"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="9310 854 642"
            className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm focus:outline-none focus:border-[color:var(--pink)]"
          />
        </Field>
        <Field label="Event date" required>
          <input
            required
            type="date"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm focus:outline-none focus:border-[color:var(--pink)]"
          />
        </Field>
        <Field label="City">
          <select
            value={form.city}
            onChange={(e) => setForm({ ...form, city: e.target.value })}
            className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm focus:outline-none focus:border-[color:var(--pink)]"
          >
            <option>Delhi</option>
            <option>Gurgaon</option>
            <option>Noida</option>
            <option>Ghaziabad</option>
            <option>Faridabad</option>
            <option>Other NCR</option>
          </select>
        </Field>
      </div>
      <Field label="Add-ons or theme notes (optional)">
        <textarea
          rows={4}
          value={form.notes}
          onChange={(e) => setForm({ ...form, notes: e.target.value })}
          placeholder="Colour preferences, cake table, custom banner text, guest count..."
          className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm focus:outline-none focus:border-[color:var(--pink)]"
        />
      </Field>
      <div className="rounded-xl bg-white border border-border/70 p-4 text-xs text-muted-foreground flex items-center justify-between gap-4">
        <span>
          Booking: <span className="font-semibold text-foreground">{packageTitle}</span>
        </span>
        <span className="font-black text-gradient-primary text-base">{inr(price)}</span>
      </div>
      <div className="flex flex-wrap gap-3">
        <button
          type="submit"
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 bg-gradient-primary text-white font-bold text-sm tracking-widest uppercase shadow-pink hover:scale-[1.01] transition"
        >
          <Send className="w-4 h-4" /> Send Request
        </button>
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 border-2 border-[color:var(--purple-deep)] text-[color:var(--purple-deep)] font-bold text-sm tracking-widest uppercase hover:bg-[color:var(--purple-deep)] hover:text-white transition"
        >
          <MessageCircle className="w-4 h-4" /> Chat instead
        </a>
      </div>
      <p className="text-[11px] text-muted-foreground text-center">
        By submitting, you agree to be contacted by Decoration Kingdom regarding your booking.
      </p>
    </form>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold text-[color:var(--purple-deep)] uppercase tracking-widest">
        {label} {required && <span className="text-[color:var(--pink)]">*</span>}
      </span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}
