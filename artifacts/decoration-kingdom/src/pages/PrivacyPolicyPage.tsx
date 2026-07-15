import { Link } from "wouter";
import { motion } from "framer-motion";
import { Heart, Mail, Phone, Shield } from "lucide-react";

import { SiteHeader, SiteFooter } from "@/components/site-chrome";

type Section = { title: string; body?: string; list?: string[]; sublist?: { intro: string; items: string[] }[] };

const sections: Section[] = [
  {
    title: "1. Information We Collect",
    body: "We may collect:",
    list: [
      "Full Name",
      "Mobile Number",
      "Email Address (if provided)",
      "Event Address",
      "Event Date & Time",
      "Payment Details (only for processing payments)",
      "Photos or videos of decorations (only with your permission)",
    ],
  },
  {
    title: "2. How We Use Your Information",
    body: "We use your information to:",
    list: [
      "Confirm and manage your bookings.",
      "Communicate regarding your event.",
      "Process payments.",
      "Improve our services.",
      "Send offers and updates (only if you choose to receive them).",
    ],
  },
  {
    title: "3. Information Sharing",
    body: "We do not sell, rent, or trade your personal information to third parties. We may share your information only:",
    list: [
      "With trusted service partners involved in delivering our services.",
      "When required by law or government authorities.",
    ],
  },
  {
    title: "4. Data Security",
    body: "We take reasonable measures to protect your personal information from unauthorized access, misuse, or disclosure.",
  },
  {
    title: "5. Photos & Social Media",
    body: "With your consent, we may use photographs or videos of our decoration work for marketing purposes on our website and social media platforms. If you do not wish your event photos to be shared, please inform us before the event.",
  },
  {
    title: "6. Cancellation & Refund",
    body: "Cancellation and refund requests are subject to our Booking and Cancellation Policy.",
  },
  {
    title: "7. Your Rights",
    body: "You may request to:",
    list: [
      "Access your personal information.",
      "Correct inaccurate information.",
      "Delete your information where legally permitted.",
      "Opt out of promotional communications.",
    ],
  },
  {
    title: "8. Changes to This Policy",
    body: "We may update this Privacy Policy from time to time. The latest version will always be available upon request or on our official platforms.",
  },
];

export function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SiteHeader />

      <section className="relative bg-gradient-hero text-white overflow-hidden">
        <div className="mx-auto max-w-4xl px-4 py-14 md:py-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            className="w-14 h-14 mx-auto rounded-full bg-white/10 grid place-items-center"
          >
            <Shield className="w-7 h-7 text-[color:var(--gold)]" />
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="font-script text-4xl text-[color:var(--pink)] mt-3">
            Your privacy matters
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-display font-black text-3xl md:text-4xl tracking-tight mt-1">
            PRIVACY POLICY
          </motion.h1>
          <div className="flex items-center justify-center gap-2 mt-3">
            <span className="h-px w-14 bg-[color:var(--pink)]" />
            <Heart className="w-4 h-4 text-[color:var(--pink)] fill-current" />
            <span className="h-px w-14 bg-[color:var(--pink)]" />
          </div>
          <p className="mt-4 text-white/80 text-sm">Effective Date: [Add Date]</p>
        </div>
      </section>

      <main className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4">
          <div className="rounded-3xl bg-white shadow-card border border-border p-6 md:p-10">
            <p className="text-foreground/80 leading-relaxed">
              At <span className="font-semibold text-[color:var(--purple-deep)]">Decoration Kingdom</span>, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you contact us or use our services.
            </p>

            <div className="mt-8 space-y-8">
              {sections.map((s, i) => (
                <motion.section
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.04 }}
                >
                  <h2 className="font-display font-bold text-lg md:text-xl text-[color:var(--purple-deep)]">{s.title}</h2>
                  {s.body && <p className="mt-2 text-foreground/80 leading-relaxed">{s.body}</p>}
                  {s.list && (
                    <ul className="mt-3 space-y-1.5 pl-1">
                      {s.list.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-foreground/80">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[color:var(--pink)] shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.section>
              ))}

              <motion.section
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="rounded-2xl bg-gradient-soft border border-border p-5"
              >
                <h2 className="font-display font-bold text-lg md:text-xl text-[color:var(--purple-deep)]">9. Contact Us</h2>
                <div className="mt-3 space-y-2 text-foreground/80">
                  <div className="font-semibold text-[color:var(--purple-deep)]">Decoration Kingdom</div>
                  <div>Delhi–NCR</div>
                  <div className="flex flex-wrap items-center gap-4">
                    <a href="tel:9310854642" className="inline-flex items-center gap-2 hover:text-[color:var(--pink)]">
                      <Phone className="w-4 h-4 text-[color:var(--pink)]" /> 9310854642
                    </a>
                    <a href="tel:9971265244" className="inline-flex items-center gap-2 hover:text-[color:var(--pink)]">
                      <Phone className="w-4 h-4 text-[color:var(--pink)]" /> 9971265244
                    </a>
                  </div>
                  <a href="mailto:support@decorationkingdom.com" className="inline-flex items-center gap-2 hover:text-[color:var(--pink)] break-all">
                    <Mail className="w-4 h-4 text-[color:var(--pink)]" /> support@decorationkingdom.com
                  </a>
                  <div className="text-sm text-muted-foreground">Business Hours: 24 hours Available</div>
                </div>
              </motion.section>
            </div>

            <div className="mt-10 text-center">
              <Link href="/" className="inline-flex items-center gap-2 rounded-full px-5 py-3 bg-gradient-primary text-white font-bold text-sm shadow-pink">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
