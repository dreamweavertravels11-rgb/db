import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";

import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import blogBalloon    from "@/assets/blog-p1.jpg"; // rainbow balloon arch — Balloon Backdrop article
import blogRoom       from "@/assets/blog-p2.jpg"; // red anniversary arch — Surprise Room article
import blogKids       from "@/assets/blog-p3.jpg"; // mermaid birthday — Kids Themes article
import blogAnniv      from "@/assets/blog-p4.jpg"; // black/silver ring — Anniversary Colours article
import blogBabyShower from "@/assets/blog-p5.jpg"; // decoration setup — Baby Shower article
import blogProposal   from "@/assets/new-proposal.png"; // Proposal decoration — Proposal article

const posts = [
  { title: "Rainbow Balloon Arches: Delhi's Most Colourful Birthday Trend Right Now",  tag: "Birthday",     date: "Jun 12, 2026", read: "6 min", img: blogBalloon,    excerpt: "Neon-lit multi-colour fringe backdrops paired with macaron balloon garlands — the setups our clients can't stop sharing on Instagram." },
  { title: "How to Style a Showstopping Anniversary Backdrop at Home",                  tag: "Anniversary",  date: "May 28, 2026", read: "5 min", img: blogRoom,       excerpt: "From sequin shimmer walls to rose-gold neon signs, here's how we design anniversary setups that feel grand without leaving home." },
  { title: "Mermaid Birthday Themes: Magical Under-the-Sea Parties for Kids",           tag: "Kids",         date: "May 14, 2026", read: "7 min", img: blogKids,       excerpt: "Shell balloons, teal fringe curtains and pastel garlands — everything you need to create an ocean-inspired birthday your child will remember forever." },
  { title: "Black & Silver Birthday Décor: Elegant Setups That Steal the Show",         tag: "Birthday",     date: "Apr 30, 2026", read: "4 min", img: blogAnniv,      excerpt: "Chrome ring arches, star balloons and metallic accents — why monochrome birthday setups are the top choice for milestone celebrations." },
  { title: "Baby Shower Décor Etiquette: The Small Details That Matter Most",           tag: "Baby Shower",  date: "Apr 09, 2026", read: "6 min", img: blogBabyShower, excerpt: "Fresh pastels, personalised banners, baby foil props and fairy lights — the styling secrets behind our most-loved baby shower setups." },
  { title: "Proposal Setups That Say More Than the Ring",                                tag: "Proposal",     date: "Mar 22, 2026", read: "5 min", img: blogProposal,   excerpt: "How lighting, pathway design and a single custom sign can make the moment unforgettable — and keep her saying yes." },
];

export function BlogPage() {
  const [featured, ...rest] = posts;
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SiteHeader active="Blog" />

      <section className="relative bg-gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 opacity-25"
          style={{ backgroundImage: "radial-gradient(circle at 15% 25%, oklch(0.65 0.24 350 / 0.55), transparent 40%), radial-gradient(circle at 85% 65%, oklch(0.82 0.15 85 / 0.45), transparent 42%)" }} />
        <div className="mx-auto max-w-7xl px-4 py-20 md:py-24 text-center relative">
          <p className="font-script text-5xl md:text-6xl text-[color:var(--gold)]">The Journal</p>
          <h1 className="font-display italic text-4xl md:text-6xl mt-3">
            Ideas from our <span className="text-[color:var(--gold)]">decor studio</span>
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-white/85 font-light">
            Themes, planning tips and behind-the-scenes stories from real celebrations.
          </p>
        </div>
      </section>

      {/* Featured */}
      <section className="py-14 md:py-20 bg-gradient-soft">
        <div className="mx-auto max-w-7xl px-4">
          <motion.article
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-8 bg-white rounded-3xl overflow-hidden shadow-card border border-[color:var(--gold)]/30"
          >
            <div className="aspect-[4/3] lg:aspect-auto overflow-hidden">
              <img src={featured.img} alt={featured.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <span className="inline-flex self-start items-center gap-1 rounded-full bg-[color:var(--pink)]/10 text-[color:var(--pink)] text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                Featured · {featured.tag}
              </span>
              <h2 className="mt-4 font-display italic text-2xl md:text-4xl text-[color:var(--purple-deep)] leading-tight">
                {featured.title}
              </h2>
              <p className="mt-3 text-foreground/75">{featured.excerpt}</p>
              <div className="mt-5 flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {featured.date}</span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {featured.read}</span>
              </div>
              <Link
                href="/contact"
                className="mt-6 self-start inline-flex items-center gap-2 rounded-full px-5 py-3 bg-gradient-primary text-white font-bold text-xs uppercase tracking-widest shadow-pink"
              >
                Read the story <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.article>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-16 md:pb-24 bg-gradient-soft">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post, i) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.08 }}
                whileHover={{ y: -6 }}
                className="group rounded-3xl overflow-hidden bg-white shadow-card border border-border/70"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={post.img} alt={post.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <span className="text-[10px] uppercase tracking-widest text-[color:var(--pink)] font-bold">{post.tag}</span>
                  <h3 className="mt-2 font-display italic text-xl text-[color:var(--purple-deep)] leading-snug">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-foreground/70 line-clamp-2">{post.excerpt}</p>
                  <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.read}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gradient-band text-white py-14">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <p className="font-script text-4xl text-[color:var(--gold)]">Stay inspired</p>
          <h2 className="font-display italic text-2xl md:text-3xl mt-1">Get new themes in your inbox</h2>
          <form onSubmit={(e) => { e.preventDefault(); }} className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" required placeholder="your@email.com"
              className="flex-1 rounded-full px-5 py-3 text-foreground bg-white text-sm focus:outline-none" />
            <button className="rounded-full px-6 py-3 bg-gradient-primary text-white font-bold text-sm shadow-pink">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
