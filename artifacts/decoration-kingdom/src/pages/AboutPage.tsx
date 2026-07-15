import { Link } from "wouter";
import { motion } from "framer-motion";
import { Award, Heart, Sparkles, Users, Clock, MapPin, ArrowRight, Phone } from "lucide-react";

import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import heroImg from "@/assets/logo.png";

const stats = [
  { icon: Award, label: "Years of craft", value: "2+" },
  { icon: Users, label: "Happy families", value: "500+" },
  { icon: Sparkles, label: "Themes designed", value: "300+" },
];

const values = [
  { icon: Sparkles, title: "Premium Balloon Decorations", body: "Customized theme setups and surprise decorations for every occasion — styled with premium latex, foil and floral elements." },
  { icon: Heart,    title: "Home & Venue Decoration",     body: "We transform bedrooms, halls, rooftops and outdoor venues across Delhi-NCR into unforgettable celebration spaces." },
  { icon: Clock,    title: "On-Time · Affordable · Quality", body: "From your first call to the final setup, we deliver on time, within budget, with zero compromise on quality." },
];

export function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SiteHeader active="About Us" />

      {/* Hero */}
      <section className="relative bg-gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 opacity-25"
          style={{ backgroundImage: "radial-gradient(circle at 20% 30%, oklch(0.65 0.24 350 / 0.55), transparent 40%), radial-gradient(circle at 80% 60%, oklch(0.82 0.15 85 / 0.45), transparent 42%)" }}
        />
        <div className="mx-auto max-w-7xl px-4 py-20 md:py-28 text-center relative">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="font-script text-5xl md:text-6xl text-[color:var(--gold)]">
            Our Story
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-display italic text-4xl md:text-6xl tracking-tight mt-3">
            We Decorate <span className="text-[color:var(--gold)]">Your Moments</span>
          </motion.h1>
          <p className="mt-5 max-w-3xl mx-auto text-white/85 text-base md:text-lg font-light">
            Welcome to <strong className="text-[color:var(--gold)]">Decoration Kingdom</strong> — We Decorate Moments! 🎈
            Based in Delhi-NCR, we create stunning balloon decorations that transform ordinary spaces into extraordinary celebrations.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24 bg-gradient-soft">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-card border border-[color:var(--gold)]/30">
            <img src={heroImg} alt="Decoration Kingdom studio" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="font-script text-3xl text-[color:var(--pink)]">Who we are</p>
            <h2 className="font-display italic text-3xl md:text-5xl text-[color:var(--purple-deep)] mt-1">
              We Decorate Moments
            </h2>
            <div className="flex items-center gap-3 mt-4">
              <span className="h-px w-12 bg-[color:var(--gold)]" />
              <Heart className="w-4 h-4 text-[color:var(--pink)] fill-current" />
              <span className="h-px w-12 bg-[color:var(--gold)]" />
            </div>
            <p className="mt-5 text-foreground/80 leading-relaxed">
              At <strong>Decoration Kingdom</strong> we believe every celebration deserves to be beautiful, memorable,
              and filled with happiness. Based in Delhi-NCR, we specialize in creating stunning balloon decorations
              that transform ordinary spaces into extraordinary celebrations.
            </p>
            <p className="mt-4 text-foreground/80 leading-relaxed">
              Whether it's a Birthday Party, Anniversary, Baby Shower, Welcome Baby, Haldi, Mehendi, Engagement,
              Wedding, Proposal, Romantic Room Decoration, House Warming, Corporate Event, or any Special Occasion —
              our creative team designs every setup with passion and attention to detail.
            </p>
            <p className="mt-4 text-sm text-foreground/70 italic border-l-4 border-[color:var(--gold)] pl-4">
              "Every Celebration Begins with Decoration Kingdom." 🎈✨
            </p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-[color:var(--pink)]">📍 Serving Across Delhi-NCR</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/packages" className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-gradient-primary text-white font-bold text-sm shadow-pink">
                Browse Packages <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:9310854642" className="inline-flex items-center gap-2 rounded-full px-6 py-3 border-2 border-[color:var(--purple-deep)] text-[color:var(--purple-deep)] font-bold text-sm">
                <Phone className="w-4 h-4" /> Call us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 bg-white border-y border-border/60">
        <div className="mx-auto max-w-7xl px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div key={s.label}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-[color:var(--pink)]/10 text-[color:var(--pink)] grid place-items-center">
                <s.icon className="w-6 h-6" />
              </div>
              <p className="mt-3 font-display italic text-3xl md:text-4xl text-[color:var(--purple-deep)]">{s.value}</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-gradient-soft">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <p className="font-script text-3xl text-[color:var(--pink)]">What we stand for</p>
            <h2 className="font-display italic text-3xl md:text-4xl text-[color:var(--purple-deep)]">Our Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div key={v.title}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-3xl bg-white p-8 border border-border/60 shadow-card">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary text-white grid place-items-center shadow-pink">
                  <v.icon className="w-6 h-6" />
                </div>
                <h3 className="mt-4 font-display italic text-2xl text-[color:var(--purple-deep)]">{v.title}</h3>
                <p className="mt-2 text-sm text-foreground/75 leading-relaxed">{v.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
