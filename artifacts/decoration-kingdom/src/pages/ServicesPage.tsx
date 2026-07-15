import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Cake, Heart, Baby, Gem, Building2, PartyPopper, Sparkles, Check } from "lucide-react";

import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import svcProposal    from "@/assets/new-proposal.png";
import svcBalloon     from "@/assets/svc-balloon.jpg";
import specCorporate  from "@/assets/spec-corporate.jpg";
import spBirthday     from "@/assets/sp-birthday.jpg";
import spAnniversary  from "@/assets/sp-anniversary.jpg";
import spBabyShower   from "@/assets/sp-babyshower.jpg";
import spWelcomeBaby  from "@/assets/new-welcome-baby.png";
import spHaldi        from "@/assets/sp-haldi.jpg";
import spMehndi       from "@/assets/sp-mehndi.jpg";
import spEngagement   from "@/assets/sp-engagement.jpg";
import spKids         from "@/assets/sp-kids.jpg";

const services = [
  { icon: Cake,       title: "Birthday Decoration",        img: spBirthday,    desc: "Themed room surprises, cake tables, garlands & foil banners for all ages.",                      link: "/packages",    hash: "birthday"    },
  { icon: Heart,      title: "Anniversary Decoration",     img: spAnniversary, desc: "Rose petal art, heart canopies, floral pathways & mood lighting.",                              link: "/packages",    hash: "anniversary" },
  { icon: Baby,       title: "Baby Shower Decoration",     img: spBabyShower,  desc: "Pastel arches, floral cradles & keepsake corners for the little one.",                         link: "/packages",    hash: "baby-shower" },
  { icon: Baby,       title: "Welcome Baby Decoration",    img: spWelcomeBaby, desc: "Warm welcome décor for newborn celebrations and family gatherings.",                            link: "/packages",    hash: "welcome-baby"},
  { icon: Gem,        title: "Proposal Decoration",        img: svcProposal,   desc: "Romantic proposal stages, rose paths and surprise reveal décor.",                              link: "/packages",    hash: "proposal"    },
  { icon: Cake,       title: "Haldi Decoration",           img: spHaldi,       desc: "Traditional haldi décor with bright marigold, drapes and ceremonial charm.",                  link: "/packages",    hash: "haldi"       },
  { icon: Heart,      title: "Mehendi Decoration",         img: spMehndi,      desc: "Colorful mehendi setups with floral canopies, rangoli and rustic seating.",                   link: "/packages",    hash: "mehendi"     },
  { icon: Building2,  title: "Engagement Decoration",      img: spEngagement,  desc: "Elegant engagement staging, backdrops and lounge styling for the big moment.",                link: "/packages",    hash: "engagement"  },
  { icon: Building2,  title: "Corporate Event Decoration", img: specCorporate, desc: "Professional corporate styling, branded backdrops and presentation-ready décor.",             link: "/packages",    hash: "corporate"   },
  { icon: PartyPopper,title: "Kids Theme Decoration",      img: spKids,        desc: "Fun theme décor, character props and playful balloon arrangements.",                           link: "/kids-themes", hash: undefined     },
];

const process = [
  { step: "01", title: "Enquire",  body: "Share your event, date, venue and vibe over call or WhatsApp." },
  { step: "02", title: "Curate",   body: "Our stylist proposes themes, mood boards and a transparent quote." },
  { step: "03", title: "Confirm",  body: "Lock the date with a small advance — we source everything in-house." },
  { step: "04", title: "Celebrate",body: "We arrive early, install on-site, and clean up after your event." },
];

const addons = [
  "Custom neon signage", "Fresh floral arrangements", "LED marquee letters",
  "Photo booth props", "Cake table styling", "Fog & sparkler entry",
  "Live photographer", "Cold pyro (indoor)", "Balloon bouquets for gifts",
];

export function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SiteHeader active="Services" />

      <section className="relative bg-gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 opacity-25"
          style={{ backgroundImage: "radial-gradient(circle at 15% 25%, oklch(0.65 0.24 350 / 0.55), transparent 40%), radial-gradient(circle at 85% 65%, oklch(0.82 0.15 85 / 0.45), transparent 42%)" }} />
        <div className="mx-auto max-w-7xl px-4 py-20 md:py-28 text-center relative">
          <p className="font-script text-5xl md:text-6xl text-[color:var(--gold)]">What We Do</p>
          <h1 className="font-display italic text-4xl md:text-6xl mt-3">
            Full-service <span className="text-[color:var(--gold)]">Celebration</span> Styling
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-white/85 font-light">
            From intimate room surprises to grand wedding stages — we design, source and install every element ourselves.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 md:py-24 bg-gradient-soft">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div key={s.title}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.08, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="group rounded-3xl overflow-hidden bg-white shadow-card border border-border/60">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img src={s.img} alt={s.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--purple-deep)]/60 to-transparent" />
                  <div className="absolute top-4 left-4 w-11 h-11 rounded-xl bg-white/95 text-[color:var(--pink)] grid place-items-center shadow">
                    <s.icon className="w-5 h-5" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display italic text-2xl text-[color:var(--purple-deep)]">{s.title}</h3>
                  <p className="mt-2 text-sm text-foreground/75 leading-relaxed">{s.desc}</p>
                  <a
                    href={s.hash ? `${s.link}/#${s.hash}` : s.link}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[color:var(--pink)] hover:gap-3 transition-all"
                  >
                    Explore <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <p className="font-script text-3xl text-[color:var(--pink)]">How it works</p>
            <h2 className="font-display italic text-3xl md:text-5xl text-[color:var(--purple-deep)]">
              A stress-free process
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <motion.div key={p.step}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative rounded-3xl p-6 bg-gradient-soft border border-[color:var(--gold)]/30">
                <span className="font-display italic text-5xl text-[color:var(--gold)]/70">{p.step}</span>
                <h3 className="mt-2 font-display italic text-xl text-[color:var(--purple-deep)]">{p.title}</h3>
                <p className="mt-2 text-sm text-foreground/75">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-16 md:py-20 bg-gradient-soft">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="font-script text-3xl text-[color:var(--pink)]">Add-ons</p>
          <h2 className="font-display italic text-3xl md:text-4xl text-[color:var(--purple-deep)]">
            Pair any service with these extras
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {addons.map((a) => (
              <span key={a} className="inline-flex items-center gap-2 rounded-full bg-white border border-border/70 px-4 py-2 text-sm text-foreground/80 shadow-sm">
                <Check className="w-3.5 h-3.5 text-[color:var(--pink)]" strokeWidth={3} /> {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-band text-white py-14">
        <div className="mx-auto max-w-7xl px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-script text-4xl text-[color:var(--gold)]">Not sure what you need?</p>
            <h3 className="font-display italic text-2xl md:text-3xl">Get a free consultation</h3>
          </div>
          <div className="flex gap-3">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-gradient-primary text-white font-bold text-sm shadow-pink">
              Contact us <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/packages" className="inline-flex items-center gap-2 rounded-full px-6 py-3 border border-[color:var(--gold)]/50 text-[color:var(--gold)] font-semibold text-sm">
              <Sparkles className="w-4 h-4" /> Packages
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
