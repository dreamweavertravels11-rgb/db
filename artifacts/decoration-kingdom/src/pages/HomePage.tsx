import { Link } from "wouter";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  Facebook, Instagram, MessageCircle, Send, ArrowRight, Phone,
  PartyPopper, Lightbulb, Users, Truck, Package, BadgeCheck, Shield,
  Trophy, Smile, MapPin, Heart, Mail, Menu, X,
} from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import heroImg from "@/assets/hero-birthday.jpg";
import specBirthday from "@/assets/spec-birthday.jpg";
import { WHATSAPP_BOOKING_URL } from "@/lib/whatsapp";
import specWedding from "@/assets/spec-wedding.jpg";
import homeHaldi from "@/assets/home-haldi.jpg";
import specCorporate from "@/assets/spec-corporate.jpg";
import specBaby from "@/assets/spec-baby.jpg";
import specTheme from "@/assets/spec-theme.jpg";
import specProposal from "@/assets/new-proposal.png";
import pkgKids from "@/assets/pkg-kids.jpg";
import celebRomantic from "@/assets/celeb-romantic-date.jpg";
import mehndiDecor from "@/assets/mehndi-decor.jpg";
import celebProposal from "@/assets/new-proposal.png";

import celebAnniversary from "@/assets/celeb-anniversary.jpg";
import celebBabyShower from "@/assets/baby-shower-new.jpg";
import celebBabyWelcome from "@/assets/new-welcome-baby.png";
import kidsThemesNew from "@/assets/kids-themes-new.jpg";
import celebNaming from "@/assets/celeb-naming.jpg";
import celebCar from "@/assets/celeb-car.jpg";
import spBirthday   from "@/assets/sp-birthday.jpg";
import spAnniversary from "@/assets/sp-anniversary.jpg";
import spBabyShower  from "@/assets/sp-babyshower.jpg";
import spWelcomeBaby from "@/assets/new-welcome-baby.png";
import spHaldi       from "@/assets/sp-haldi.jpg";
import spMehndi      from "@/assets/sp-mehndi.jpg";
import spEngagement  from "@/assets/sp-engagement.jpg";
import spKids        from "@/assets/sp-kids.jpg";
import { categories as collectionCategories } from "@/lib/packages-catalog";
import { CollectionBanner } from "@/components/packages/CollectionBanner";

const romanticCelebrations = [
  { title: "Romantic Dates", img: celebRomantic, to: "/packages", hash: "anniversary" },
  { title: "Proposal", img: celebProposal, to: "/packages", hash: "ring" },
  { title: "Anniversary Decoration", img: celebAnniversary, to: "/packages", hash: "anniversary" },
];

const babyCelebrations = [
  { title: "Baby Shower", img: celebBabyShower, to: "/packages", hash: "baby-shower" },
  { title: "Baby Welcome", img: celebBabyWelcome, to: "/packages", hash: "welcome-baby" },
  { title: "Naming Ceremony", img: celebNaming, to: "/packages", hash: "welcome-baby" },
  { title: "Kids Themes", img: kidsThemesNew, to: "/kids-themes" },
];

const navItems = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/", hash: "services" },
  { label: "Packages", to: "/packages" },
  { label: "Blog", to: "/blog" },
  { label: "Contact Us", to: "/", hash: "contact" },
];

const features = [
  { icon: PartyPopper, label: "Balloons\nof All Types" },
  { icon: Lightbulb, label: "Creative & Unique\nDecor Ideas" },
  { icon: Users, label: "Professional\nTeam" },
  { icon: Truck, label: "On-Time\nDelivery" },
  { icon: Package, label: "Affordable\nPackages" },
  { icon: Shield, label: "Premium Quality\nAssurance" },
];

const specialties = [
  { title: "Birthday Decoration",       img: spBirthday,    to: "/packages/collection/birthday"    },
  { title: "Anniversary Decoration",    img: spAnniversary, to: "/packages/collection/anniversary" },
  { title: "Baby Shower Decoration",    img: spBabyShower,  to: "/packages/collection/baby-shower" },
  { title: "Welcome Baby Decoration",   img: spWelcomeBaby, to: "/packages/collection/welcome-baby"},
  { title: "Proposal Decoration",       img: celebProposal, to: "/packages/collection/proposal"    },
  { title: "Haldi Decoration",          img: spHaldi,       to: "/packages/collection/haldi"       },
  { title: "Mehendi Decoration",        img: spMehndi,      to: "/packages/collection/mehendi"     },
  { title: "Engagement Decoration",     img: spEngagement,  to: "/packages/collection/engagement"  },
  { title: "Corporate Event Decoration",img: specCorporate, to: "/packages/collection/corporate"   },
  { title: "Kids Theme Decoration",     img: kidsThemesNew, to: "/kids-themes"                     },
];

const stats = [
  { icon: Trophy, value: "500+", label: "Successful Events" },
  { icon: Smile, value: "100%", label: "Client Satisfaction" },
  { icon: PartyPopper, value: "2+", label: "Years Experience" },
  { icon: MapPin, value: "2 Cities", label: "Serving in Delhi & NCR" },
];

/* ─────────────────────────────────────────────────────
   BALLOON SCENE
   ───────────────────────────────────────────────────── */

type BalloonDef = {
  id: number;
  x: string;           // CSS left % (spread across full width)
  startY: string;      // CSS top % at rest
  size: number;        // px width of balloon body
  color: string;
  gloss?: boolean;
  transparent?: boolean;
  layer: "bg" | "mid" | "fg";
  floatDuration: number;
  floatDelay: number;
  parallaxStrength: number;
  mobileHide?: boolean;
};

const BALLOONS: BalloonDef[] = [
  // ─ Background layer — wide spread, behind content, adds depth texture ─
  {
    id: 1, x: "3%",   startY: "5%",  size: 56, color: "oklch(0.42 0.22 300)",   // deep purple
    layer: "bg", floatDuration: 10, floatDelay: 0,   parallaxStrength: 0.14, mobileHide: true,
  },
  {
    id: 2, x: "45%",  startY: "2%",  size: 48, color: "oklch(0.55 0.24 350)",   // magenta-pink
    layer: "bg", floatDuration: 12, floatDelay: 1.6, parallaxStrength: 0.12, mobileHide: true,
  },
  {
    id: 3, x: "87%",  startY: "8%",  size: 54, color: "oklch(0.74 0.18 85)",    // gold
    gloss: true,
    layer: "bg", floatDuration: 11, floatDelay: 0.8, parallaxStrength: 0.13, mobileHide: true,
  },
  {
    id: 4, x: "18%",  startY: "62%", size: 44, color: "oklch(0.72 0.16 355)",   // rose
    transparent: true,
    layer: "bg", floatDuration: 13, floatDelay: 2.2, parallaxStrength: 0.15, mobileHide: true,
  },

  // ─ Mid layer — LEFT edge ─
  {
    id: 5, x: "-1%",  startY: "18%", size: 74, color: "oklch(0.55 0.26 350)",   // hot pink
    gloss: true,
    layer: "mid", floatDuration: 7.5, floatDelay: 0.2, parallaxStrength: 0.30,
  },
  {
    id: 6, x: "4%",   startY: "58%", size: 64, color: "oklch(0.74 0.18 85)",    // gold gloss
    gloss: true,
    layer: "mid", floatDuration: 9,   floatDelay: 1.8, parallaxStrength: 0.26, mobileHide: true,
  },
  // ─ Mid layer — RIGHT edge ─
  {
    id: 7, x: "88%",  startY: "22%", size: 72, color: "oklch(0.42 0.22 295)",   // deep violet
    gloss: true,
    layer: "mid", floatDuration: 8,   floatDelay: 1.0, parallaxStrength: 0.28,
  },
  {
    id: 8, x: "92%",  startY: "60%", size: 62, color: "oklch(0.88 0.06 85)",    // champagne transparent
    transparent: true,
    layer: "mid", floatDuration: 10,  floatDelay: 2.6, parallaxStrength: 0.22,
  },

  // ─ Foreground layer — LEFT edge, largest, most vivid ─
  {
    id: 9,  x: "-2%", startY: "45%", size: 90, color: "oklch(0.60 0.28 355)",   // vivid pink
    gloss: true,
    layer: "fg", floatDuration: 6.5, floatDelay: 0.1, parallaxStrength: 0.44,
  },
  {
    id: 11, x: "3%",  startY: "76%", size: 78, color: "oklch(0.76 0.20 85)",    // warm gold
    layer: "fg", floatDuration: 8,   floatDelay: 1.9, parallaxStrength: 0.36, mobileHide: true,
  },
  // ─ Foreground layer — RIGHT edge ─
  {
    id: 10, x: "90%", startY: "10%", size: 86, color: "oklch(0.44 0.24 295)",   // vivid violet
    gloss: true,
    layer: "fg", floatDuration: 7,   floatDelay: 0.9, parallaxStrength: 0.40,
  },
  {
    id: 12, x: "88%", startY: "65%", size: 80, color: "oklch(0.60 0.28 355)",   // vivid pink transparent
    transparent: true,
    layer: "fg", floatDuration: 6,   floatDelay: 0.4, parallaxStrength: 0.42,
  },
];

const LAYER_CONFIG = {
  bg:  { opacity: 0.28, blur: "blur-[1px]", zIndex: "z-[1]" }, // behind content — subtle
  mid: { opacity: 0.42, blur: "",            zIndex: "z-[1]" }, // behind content — subtle
  fg:  { opacity: 0.50, blur: "",            zIndex: "z-[2]" }, // behind content — subtle
};

function BalloonSvg({
  color, size, gloss, transparent,
}: {
  color: string; size: number; gloss?: boolean; transparent?: boolean;
}) {
  const w = size;
  const h = Math.round(size * 1.25);
  const knotSize = Math.max(5, Math.round(size * 0.12));
  const stringLen = Math.round(size * 1.6);

  if (transparent) {
    // Confetti inside balloon
    const confettiColors = ["oklch(0.65 0.24 350)","oklch(0.82 0.15 85)","oklch(0.5 0.22 300)","oklch(0.65 0.24 30)"];
    return (
      <svg width={w} height={h + stringLen} viewBox={`0 0 ${w} ${h + stringLen}`} fill="none">
        <defs>
          <radialGradient id={`tg-${size}`} cx="35%" cy="30%" r="65%">
            <stop offset="0%" stopColor="white" stopOpacity="0.55" />
            <stop offset="100%" stopColor={color} stopOpacity="0.18" />
          </radialGradient>
        </defs>
        <ellipse cx={w/2} cy={h/2} rx={w/2 - 1} ry={h/2 - 1}
          fill={`url(#tg-${size})`} stroke={color} strokeOpacity="0.45" strokeWidth="1.5" />
        {/* Inner confetti dots */}
        {confettiColors.map((c, i) => (
          <rect key={i}
            x={w * 0.2 + (i % 3) * w * 0.2}
            y={h * 0.25 + Math.floor(i / 3) * h * 0.2}
            width={Math.max(3, size * 0.06)} height={Math.max(2, size * 0.04)}
            rx="1" fill={c} opacity="0.75"
            transform={`rotate(${i * 35} ${w/2} ${h/2})`}
          />
        ))}
        {/* Gloss */}
        <ellipse cx={w * 0.37} cy={h * 0.28} rx={w * 0.12} ry={h * 0.08} fill="white" opacity="0.55" />
        {/* Knot */}
        <ellipse cx={w/2} cy={h - 1} rx={knotSize/2} ry={knotSize * 0.35} fill={color} opacity="0.6" />
        {/* String */}
        <path d={`M ${w/2} ${h + knotSize * 0.3} Q ${w/2 - 8} ${h + stringLen * 0.5} ${w/2 + 4} ${h + stringLen}`}
          stroke={color} strokeOpacity="0.35" strokeWidth="1" fill="none" />
      </svg>
    );
  }

  return (
    <svg width={w} height={h + stringLen} viewBox={`0 0 ${w} ${h + stringLen}`} fill="none">
      <defs>
        {gloss ? (
          <radialGradient id={`gg-${size}-${color.slice(-3)}`} cx="32%" cy="28%" r="68%">
            <stop offset="0%"   stopColor="white"  stopOpacity="0.70" />
            <stop offset="45%"  stopColor={color}  stopOpacity="0.90" />
            <stop offset="100%" stopColor={color}  stopOpacity="1.00" />
          </radialGradient>
        ) : (
          <radialGradient id={`bg-${size}-${color.slice(-3)}`} cx="30%" cy="28%" r="72%">
            <stop offset="0%"   stopColor="white"  stopOpacity="0.45" />
            <stop offset="60%"  stopColor={color}  stopOpacity="0.92" />
            <stop offset="100%" stopColor={color}  stopOpacity="1.00" />
          </radialGradient>
        )}
      </defs>
      {/* Shadow */}
      <ellipse cx={w/2 + 3} cy={h/2 + 4} rx={w/2 - 2} ry={h/2 - 2} fill="black" opacity="0.10" />
      {/* Body */}
      <ellipse cx={w/2} cy={h/2} rx={w/2 - 1} ry={h/2 - 1}
        fill={`url(#${gloss ? "gg" : "bg"}-${size}-${color.slice(-3)})`} />
      {/* Gloss highlight */}
      <ellipse cx={w * 0.34} cy={h * 0.27} rx={w * 0.14} ry={h * 0.09} fill="white" opacity={gloss ? 0.65 : 0.40} />
      <ellipse cx={w * 0.28} cy={h * 0.20} rx={w * 0.05} ry={h * 0.04} fill="white" opacity={gloss ? 0.85 : 0.60} />
      {/* Knot */}
      <ellipse cx={w/2} cy={h - 1} rx={knotSize/2} ry={knotSize * 0.4} fill={color} />
      {/* String with gentle curve */}
      <path d={`M ${w/2} ${h + knotSize * 0.35} Q ${w/2 - 10} ${h + stringLen * 0.55} ${w/2 + 5} ${h + stringLen}`}
        stroke={color} strokeOpacity="0.40" strokeWidth="1.2" fill="none" />
    </svg>
  );
}

/* Tiny ribbon curl near a balloon */
function Ribbon({ x, y, color }: { x: number; y: number; color: string }) {
  return (
    <svg
      className="absolute pointer-events-none"
      style={{ left: x, top: y, width: 24, height: 60 }}
      viewBox="0 0 24 60" fill="none"
    >
      <path
        d="M 12 0 C 20 10, 4 20, 12 30 C 20 40, 4 50, 12 60"
        stroke={color}
        strokeOpacity="0.50"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

/* Floating sparkle / heart / confetti particle */
type ParticleDef = {
  id: number;
  x: number; // % of container
  kind: "star" | "heart" | "confetti" | "dot";
  color: string;
  size: number;
  startDelay: number;
  duration: number;
};

function FloatingParticles({ count = 18, isMobile }: { count?: number; isMobile?: boolean }) {
  const reduce = useReducedMotion();
  const n = isMobile ? Math.ceil(count * 0.55) : count;
  const particles = useMemo<ParticleDef[]>(() => {
    const colors = [
      "oklch(0.65 0.24 350)", "oklch(0.82 0.15 85)",
      "oklch(0.5 0.22 300)", "oklch(0.65 0.24 30)",
      "oklch(0.70 0.18 60)",
    ];
    return Array.from({ length: n }, (_, i) => ({
      id: i,
      x: 5 + (i / n) * 90,
      kind: (["star","heart","confetti","dot"] as const)[i % 4],
      color: colors[i % colors.length],
      size: 4 + (i % 5) * 2,
      startDelay: (i * 1.1) % 6,
      duration: 7 + (i % 5) * 1.8,
    }));
  }, [n]);

  if (reduce) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute"
          style={{ left: `${p.x}%`, bottom: "-20px" }}
          animate={{
            y: [0, -(320 + p.id * 12)],
            opacity: [0, 0.85, 0.85, 0],
            x: [0, (p.id % 2 === 0 ? 1 : -1) * (8 + (p.id % 3) * 6)],
          }}
          transition={{
            duration: p.duration,
            delay: p.startDelay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {p.kind === "star" && (
            <svg width={p.size} height={p.size} viewBox="0 0 24 24">
              <path
                d="M12 2 L13.5 9 L20 9 L14.5 13.5 L16.5 21 L12 17 L7.5 21 L9.5 13.5 L4 9 L10.5 9 Z"
                fill={p.color}
                opacity="0.85"
              />
            </svg>
          )}
          {p.kind === "heart" && (
            <svg width={p.size} height={p.size} viewBox="0 0 24 24">
              <path
                d="M12 21C12 21 3 14 3 8.5C3 5.5 5.5 3 8.5 3C10 3 11.5 3.7 12 5C12.5 3.7 14 3 15.5 3C18.5 3 21 5.5 21 8.5C21 14 12 21 12 21Z"
                fill={p.color}
                opacity="0.80"
              />
            </svg>
          )}
          {p.kind === "confetti" && (
            <div
              style={{
                width: p.size,
                height: p.size * 0.5,
                background: p.color,
                borderRadius: 2,
                opacity: 0.80,
                transform: `rotate(${p.id * 37}deg)`,
              }}
            />
          )}
          {p.kind === "dot" && (
            <div
              style={{
                width: p.size * 0.7,
                height: p.size * 0.7,
                background: p.color,
                borderRadius: "50%",
                opacity: 0.70,
              }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
}

/* Twinkling stars layered across hero */
function TwinkleStars({ count = 10 }: { count?: number }) {
  const reduce = useReducedMotion();
  const stars = useMemo(
    () => Array.from({ length: count }, (_, i) => ({
      id: i,
      x: 5 + (i * 9.5) % 92,
      y: 5 + (i * 13.7) % 88,
      size: 3 + (i % 4),
      delay: (i * 0.7) % 3,
      duration: 1.8 + (i % 3) * 0.8,
    })),
    [count],
  );
  if (reduce) return null;
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
      {stars.map((s) => (
        <motion.div
          key={s.id}
          className="absolute"
          style={{ left: `${s.x}%`, top: `${s.y}%` }}
          animate={{ opacity: [0.1, 0.9, 0.1], scale: [0.6, 1.2, 0.6] }}
          transition={{ duration: s.duration, delay: s.delay, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width={s.size + 4} height={s.size + 4} viewBox="0 0 16 16">
            <path
              d="M8 1 L9 6.5 L15 8 L9 9.5 L8 15 L7 9.5 L1 8 L7 6.5 Z"
              fill="oklch(0.82 0.15 85)"
              opacity="0.75"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}

/* Main balloon scene */
function BalloonScene({ isMobile }: { isMobile: boolean }) {
  const reduce = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const nx = ((e.clientX - rect.left) / rect.width  - 0.5) * 2;
    const ny = ((e.clientY - rect.top)  / rect.height - 0.5) * 2;
    setMousePos({ x: nx, y: ny });
  }, []);

  useEffect(() => {
    const el = containerRef.current?.parentElement;
    if (!el || reduce) return;
    el.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => el.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove, reduce]);

  const visibleBalloons = isMobile
    ? BALLOONS.filter((b) => !b.mobileHide)
    : BALLOONS;

  return (
    /* overflow: visible so edge balloons aren't clipped; particles container handles its own clipping */
    <div ref={containerRef} className="absolute inset-0 pointer-events-none" style={{ overflow: "visible" }} aria-hidden>
      {/* Particles + stars get their own clipped container so they don't overflow the hero */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingParticles count={18} isMobile={isMobile} />
        {!isMobile && <TwinkleStars count={12} />}
      </div>

      {/* Ribbons */}
      {!isMobile && !reduce && (
        <>
          <Ribbon x={22} y={110} color="oklch(0.55 0.24 340)" />
          <Ribbon x={-8} y={280} color="oklch(0.82 0.15 85)" />
        </>
      )}

      {/* Balloons — outer entrance, inner float loop */}
      {visibleBalloons.map((b) => {
        const cfg    = LAYER_CONFIG[b.layer];
        const floatY = reduce ? 0 : 18 + b.floatDuration * 0.85;
        const sway   = reduce ? 0 : 7  + b.floatDuration * 0.38;
        const mx     = reduce ? 0 : mousePos.x * b.parallaxStrength * 18;
        const my     = reduce ? 0 : mousePos.y * b.parallaxStrength * 12;

        return (
          <motion.div
            key={b.id}
            className={`absolute ${cfg.zIndex} ${cfg.blur}`}
            style={{
              left: b.x,
              top: b.startY,
              filter: `drop-shadow(0 8px 18px oklch(0 0 0 / ${b.layer === "fg" ? 0.22 : 0.12}))`,
            }}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: my, opacity: cfg.opacity }}
            transition={{
              y:       { duration: 1.3, delay: 0.15 + b.floatDelay * 0.22, ease: [0.22, 1, 0.36, 1] },
              opacity: { duration: 0.9, delay: 0.10 + b.floatDelay * 0.22, ease: "easeOut" },
            }}
          >
            <motion.div
              animate={{
                y:      [-floatY, floatY * 0.25, -floatY],
                x:      [-sway + mx, sway + mx, -sway + mx],
                rotate: [-2.8, 2.8, -2.8],
              }}
              transition={{
                y:      { duration: b.floatDuration,        repeat: Infinity, ease: "easeInOut", delay: b.floatDelay },
                x:      { duration: b.floatDuration * 1.2,  repeat: Infinity, ease: "easeInOut", delay: b.floatDelay + 0.5 },
                rotate: { duration: b.floatDuration * 1.35, repeat: Infinity, ease: "easeInOut", delay: b.floatDelay + 0.3 },
              }}
            >
              <BalloonSvg
                color={b.color}
                size={b.size}
                gloss={b.gloss}
                transparent={b.transparent}
              />
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}

/* Confetti burst — one-shot on page load */
function ConfettiBurst({ count = 60 }: { count?: number }) {
  const reduce = useReducedMotion();
  const pieces = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => {
        const angle = (Math.PI * 2 * i) / count + Math.random() * 0.4;
        const distance = 220 + Math.random() * 260;
        const colors = [
          "oklch(0.65 0.24 350)", "oklch(0.5 0.22 300)", "oklch(0.82 0.15 85)",
          "oklch(0.7 0.18 60)", "oklch(0.75 0.18 300)", "oklch(0.55 0.24 340)",
        ];
        return {
          x: Math.cos(angle) * distance,
          y: Math.sin(angle) * distance - 40,
          rot: Math.random() * 720 - 360,
          color: colors[i % colors.length],
          size: 6 + Math.random() * 8,
          shape: i % 3,
          delay: Math.random() * 0.15,
        };
      }),
    [count],
  );
  if (reduce) return null;
  return (
    <div className="absolute inset-0 pointer-events-none overflow-visible" aria-hidden>
      <div className="absolute left-1/2 top-1/2">
        {pieces.map((p, i) => (
          <motion.span
            key={i}
            className="absolute block"
            style={{
              width: p.size,
              height: p.shape === 1 ? p.size * 0.5 : p.size,
              background: p.color,
              borderRadius: p.shape === 2 ? "9999px" : p.shape === 1 ? "2px" : "0",
              left: 0, top: 0,
            }}
            initial={{ x: 0, y: 0, rotate: 0, opacity: 1, scale: 0 }}
            animate={{ x: p.x, y: p.y, rotate: p.rot, opacity: [1, 1, 0], scale: [0, 1, 0.8] }}
            transition={{ duration: 1.6, delay: p.delay, ease: [0.16, 1, 0.3, 1] }}
          />
        ))}
      </div>
    </div>
  );
}

/* Section wrapper: fade + slide on scroll into view */
function Reveal({
  children, delay = 0, y = 30, className,
}: { children: React.ReactNode; delay?: number; y?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function ThemedCollection({
  eyebrow, title, highlight, subtitle, items, bg,
}: {
  eyebrow: string; title: string; highlight: string; subtitle?: string;
  items: { title: string; img: string; to: string; hash?: string }[]; bg?: string;
}) {
  return (
    <section className={`py-16 md:py-20 relative overflow-hidden ${bg ?? ""}`}>
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-10">
          <p className="font-script text-3xl md:text-5xl text-[color:var(--pink)]">{eyebrow}</p>
          <h2 className="font-display font-black text-3xl md:text-4xl text-[color:var(--purple-deep)] tracking-tight mt-1">
            {title} <span className="text-[color:var(--pink)]">{highlight}</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-3">
            <span className="h-px w-14 bg-[color:var(--pink)]" />
            <Heart className="w-4 h-4 text-[color:var(--pink)] fill-current" />
            <span className="h-px w-14 bg-[color:var(--pink)]" />
          </div>
          {subtitle && <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-sm md:text-base">{subtitle}</p>}
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {items.map((it, i) => (
            <motion.a
              key={it.title}
              href={it.hash ? `${it.to === "/" ? "" : it.to}/#${it.hash}` : it.to}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              className="group relative rounded-[2rem] overflow-hidden shadow-card bg-white block"
            >
              <div className="absolute -top-3 -right-3 z-10 w-10 h-10 rotate-12 pointer-events-none">
                <Heart className="w-10 h-10 text-[color:var(--pink)] fill-current drop-shadow-lg" />
              </div>
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={it.img} alt={it.title} loading="lazy" width={800} height={1000}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-4 pt-14 bg-gradient-to-t from-[color:var(--purple-deep)]/95 via-[color:var(--purple-deep)]/60 to-transparent">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-display font-bold text-white text-sm md:text-base tracking-wide">{it.title}</h3>
                  <span className="w-8 h-8 grid place-items-center rounded-full bg-gradient-primary text-white shadow-pink shrink-0">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomePage() {
  const [open, setOpen] = useState(false);
  const [burst, setBurst] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setBurst(1);
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Top bar */}
      <div className="bg-gradient-topbar text-white text-sm">
        <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-[color:var(--pink)] fill-current" />
            <span className="hidden sm:inline">Welcome to Decoration Kingdom – We Decorate Your Moments!</span>
            <span className="sm:hidden">Welcome to Decoration Kingdom</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline">Follow Us :</span>
            <a href="#" aria-label="Facebook" className="w-7 h-7 rounded-full bg-white/95 text-[color:var(--purple-deep)] grid place-items-center hover:scale-110 transition-transform">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://www.instagram.com/decorationkingdomdelhincr?utm_source=qr&igsh=NHp0bHZvZmM2dmd1" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-7 h-7 rounded-full bg-white/95 text-[color:var(--pink)] grid place-items-center hover:scale-110 transition-transform">
              <Instagram className="w-4 h-4" />
            </a>
            <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-7 h-7 rounded-full bg-[#25D366] text-white grid place-items-center hover:scale-110 transition-transform">
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between gap-4">
          <a href="/" className="flex items-center gap-3">
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
          </a>

          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item, i) => {
              const isAnchor = item.to === "/" && item.hash;
              const commonClasses = `text-sm font-semibold tracking-wide uppercase transition-colors relative py-2 ${
                i === 0 ? "text-[color:var(--pink)]" : "text-[color:var(--purple-deep)] hover:text-[color:var(--pink)]"
              }`;
              return isAnchor ? (
                <a key={item.label} href={`/${item.to === "/" ? "" : item.to}#${item.hash}`} className={commonClasses}>
                  {item.label}
                </a>
              ) : (
                <Link key={item.label} href={item.to} className={commonClasses}>
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href={WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 rounded-full px-5 py-3 text-white font-semibold text-sm bg-gradient-primary shadow-pink"
            >
              GET A QUOTE
              <span className="w-6 h-6 grid place-items-center rounded-full bg-white/20">
                <Send className="w-3.5 h-3.5" />
              </span>
            </motion.a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden p-2 rounded-md text-[color:var(--purple-deep)]"
              aria-label="Toggle menu"
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {open && (
          <div className="lg:hidden border-t border-border bg-white">
            <nav className="px-4 py-3 flex flex-col gap-1">
              {navItems.map((item) => {
                const isAnchor = item.to === "/" && item.hash;
                return isAnchor ? (
                  <a key={item.label} href={`/#${item.hash}`} className="py-2 text-sm font-semibold text-[color:var(--purple-deep)]">
                    {item.label}
                  </a>
                ) : (
                  <Link key={item.label} href={item.to} className="py-2 text-sm font-semibold text-[color:var(--purple-deep)]">
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </header>

      {/* ═══════════════════════════════════════
          HERO
          ═══════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ perspective: 1400, background: "linear-gradient(135deg, oklch(0.94 0.06 320) 0%, oklch(0.96 0.04 290) 40%, oklch(0.93 0.07 350) 100%)" }}>
        {/* Radial colour washes behind the balloons */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden style={{ background: "radial-gradient(ellipse 55% 60% at 8% 50%, oklch(0.80 0.14 320 / 0.35), transparent), radial-gradient(ellipse 45% 55% at 95% 45%, oklch(0.78 0.18 350 / 0.32), transparent), radial-gradient(ellipse 40% 40% at 50% 100%, oklch(0.82 0.12 85 / 0.22), transparent)" }} />
        {/* Full-hero balloon scene (layered, mouse-reactive, entrance-animated) */}
        <BalloonScene isMobile={isMobile} />

        <div className="mx-auto max-w-7xl px-4 py-12 md:py-20 flex justify-center relative z-10">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
            }}
            className="relative z-10 max-w-2xl text-center"
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20, rotateX: -30 },
                show: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
              }}
              className="font-script text-4xl md:text-5xl text-[color:var(--pink)] mb-2"
              style={{ transformOrigin: "left bottom" }}
            >
              We Decorate
            </motion.p>
            <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight">
              {["YOUR MOMENTS,", "YOU CHERISH", "FOREVER!"].map((line, i) => (
                <motion.span
                  key={line}
                  variants={{
                    hidden: { opacity: 0, y: 40, rotateX: -60, filter: "blur(6px)" },
                    show: {
                      opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)",
                      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                  className={`block ${i === 2 ? "text-gradient-primary" : "text-[color:var(--purple-deep)]"}`}
                  style={{ transformOrigin: "left bottom", transformStyle: "preserve-3d" }}
                >
                  {line}
                </motion.span>
              ))}
            </h1>
            <motion.div
              variants={{ hidden: { opacity: 0, scaleX: 0 }, show: { opacity: 1, scaleX: 1, transition: { duration: 0.6 } } }}
              className="flex items-center gap-2 mt-4 origin-left"
            >
              <span className="h-px w-16 bg-[color:var(--pink)]" />
              <Heart className="w-4 h-4 text-[color:var(--pink)] fill-current" />
              <span className="h-px w-16 bg-[color:var(--pink)]" />
            </motion.div>
            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
              className="mt-5 text-muted-foreground max-w-md leading-relaxed"
            >
              From birthdays to weddings, we bring your dream celebrations to life with beautiful balloon decorations.
            </motion.p>
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link
                href="/services"
                className="inline-flex items-center gap-3 rounded-full pl-6 pr-2 py-2 text-white font-bold text-sm bg-gradient-primary shadow-pink hover:scale-105 transition-transform"
              >
                OUR SERVICES
                <span className="w-9 h-9 grid place-items-center rounded-full bg-white/25">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
              <a
                href="/packages"
                className="inline-flex items-center gap-3 rounded-full pl-6 pr-2 py-2 text-[color:var(--purple-deep)] font-bold text-sm border-2 border-[color:var(--purple-deep)]/20 bg-white hover:scale-105 transition-transform"
              >
                VIEW PACKAGES
                <span className="w-9 h-9 grid place-items-center rounded-full bg-gradient-primary text-white">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Features strip */}
        <div className="mx-auto max-w-7xl px-4 pb-12 relative z-10">
          <div className="bg-white rounded-3xl shadow-card px-4 md:px-8 py-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-14 h-14 rounded-2xl grid place-items-center text-[color:var(--pink)] group-hover:scale-110 transition-transform">
                  <f.icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <div className="mt-2 text-xs font-bold tracking-wide uppercase text-[color:var(--purple-deep)] whitespace-pre-line">
                  {f.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIALTIES */}
      <section id="services" className="py-16 md:py-20 relative">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <p className="font-script text-4xl md:text-5xl text-[color:var(--pink)]">Our Specialties</p>
            <h2 className="font-display font-black text-3xl md:text-4xl text-[color:var(--purple-deep)] tracking-tight mt-1">
              DECORATIONS <span className="text-[color:var(--pink)]">FOR EVERY OCCASION</span>
            </h2>
            <div className="flex items-center justify-center gap-2 mt-3">
              <span className="h-px w-14 bg-[color:var(--pink)]" />
              <Heart className="w-4 h-4 text-[color:var(--pink)] fill-current" />
              <span className="h-px w-14 bg-[color:var(--pink)]" />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
            {specialties.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl overflow-hidden shadow-card group"
              >
                <a href={s.to} className="block">
                  <div className="overflow-hidden">
                    <img
                      src={s.img} alt={s.title} loading="lazy" width={640} height={640}
                      className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="px-3 py-4 text-center">
                    <h3 className="text-xs md:text-sm font-bold uppercase text-[color:var(--purple-deep)] leading-tight">{s.title}</h3>
                    <div className="mt-3 mx-auto w-8 h-8 grid place-items-center rounded-full bg-gradient-primary text-white shadow-pink group-hover:rotate-45 transition-transform">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/packages"
              className="inline-flex items-center gap-3 rounded-full pl-6 pr-2 py-2 bg-gradient-band text-white font-bold text-sm hover:scale-105 transition-transform"
            >
              VIEW ALL SERVICES
              <span className="w-9 h-9 grid place-items-center rounded-full bg-gradient-primary">
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative bg-gradient-band text-white py-10 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 grid grid-cols-2 md:grid-cols-4 gap-6 relative">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 justify-center md:justify-start"
            >
              <div className="w-12 h-12 rounded-full grid place-items-center bg-white/10 text-[color:var(--gold)]">
                <s.icon className="w-6 h-6" />
              </div>
              <div>
                <div className="font-display font-black text-2xl md:text-3xl text-[color:var(--gold)]">{s.value}</div>
                <div className="text-xs md:text-sm text-white/80">{s.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BABY CELEBRATIONS */}
      <ThemedCollection
        eyebrow="Little Wonders"
        title="Baby"
        highlight="Celebrations"
        subtitle="Dreamy pastel setups to welcome your little star into the world."
        items={babyCelebrations}
        bg="bg-gradient-soft"
      />

      {/* TESTIMONIALS */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <p className="font-script text-4xl md:text-5xl text-[color:var(--pink)]">What Our Customers Say</p>
            <h2 className="font-display font-black text-3xl md:text-4xl text-[color:var(--purple-deep)] tracking-tight mt-1">
              HAPPY <span className="text-[color:var(--pink)]">CELEBRATIONS</span>
            </h2>
            <div className="flex items-center justify-center gap-2 mt-3">
              <span className="h-px w-14 bg-[color:var(--pink)]" />
              <Heart className="w-4 h-4 text-[color:var(--pink)] fill-current" />
              <span className="h-px w-14 bg-[color:var(--pink)]" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Priya Sharma", location: "Delhi", rating: 5, review: "Amazing balloon decoration for my daughter's 1st birthday! The team was so professional and creative. The pastel setup was exactly what I imagined — absolutely magical!" },
              { name: "Rahul & Divya Verma", location: "Noida", rating: 5, review: "Booked for our 10th anniversary surprise and they exceeded every expectation. The rose petal bed decor with fairy lights left us speechless. Highly recommend!" },
              { name: "Neha Gupta", location: "Gurgaon", rating: 5, review: "Perfect baby shower decoration! The pink & gold theme was dreamy and the team arrived on time. Everything was set up neatly and looked stunning in photos." },
              { name: "Amit Singh", location: "Delhi", rating: 5, review: "Got the proposal setup done on a rooftop. My girlfriend was completely surprised and emotional. The team handled everything perfectly — best decision ever!" },
              { name: "Sunita Malhotra", location: "Faridabad", rating: 5, review: "Gorgeous naming ceremony decoration! Very elegant and traditional backdrop. Everyone at the event was asking for the decorator's contact. Will definitely book again." },
              { name: "Vikram Khanna", location: "Ghaziabad", rating: 5, review: "Quick response, professional team, and stunning results. My son's superhero birthday theme looked straight out of a movie! The kids loved every bit of it." },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="rounded-2xl bg-gradient-soft border border-border/60 shadow-card p-6 flex flex-col gap-3"
              >
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <svg key={s} className="w-4 h-4 text-[color:var(--gold)] fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  ))}
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed flex-1">"{t.review}"</p>
                <div className="flex items-center gap-3 pt-2 border-t border-border/40">
                  <div className="w-9 h-9 rounded-full bg-gradient-primary grid place-items-center text-white font-bold text-sm shrink-0">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-[color:var(--purple-deep)]">{t.name}</p>
                    <p className="text-xs text-muted-foreground flex items-center gap-1"><MapPin className="w-3 h-3" /> {t.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT BAND */}
      <section id="contact" className="bg-gradient-band text-white py-10">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-4 gap-6 items-center">
          <div>
            <p className="font-script text-3xl text-[color:var(--pink)]">Let's Make Your Event</p>
            <h3 className="font-display font-black text-2xl tracking-tight">UNFORGETTABLE!</h3>
            <div className="flex items-center gap-2 mt-2">
              <span className="h-px w-10 bg-[color:var(--pink)]" />
              <Heart className="w-3 h-3 text-[color:var(--pink)] fill-current" />
              <span className="h-px w-10 bg-[color:var(--pink)]" />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-gradient-primary grid place-items-center animate-pulse-ring">
                <Phone className="w-5 h-5" />
              </div>
            </div>
            <div className="text-sm">
              <div className="text-white/70">Call Us Now</div>
              <div className="font-bold text-[color:var(--gold)]">9310854642</div>
              <div className="font-bold text-[color:var(--gold)]">9971265244</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#25D366] grid place-items-center animate-pulse-ring">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div className="text-sm">
              <div className="text-white/70">WhatsApp Us</div>
              <div className="font-bold">Quick Reply</div>
              <div className="font-bold">on WhatsApp</div>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end">
            <a
              href={WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full pl-6 pr-2 py-2 bg-gradient-primary text-white font-bold text-sm shadow-pink hover:scale-105 transition-transform"
            >
              GET A FREE QUOTE
              <span className="w-9 h-9 grid place-items-center rounded-full bg-white/25">
                <ArrowRight className="w-4 h-4" />
              </span>
            </a>
            <p className="text-xs text-white/70 mt-2">We'll get back to you!</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[color:var(--purple-deep)] text-white/90 py-10">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-4 gap-8 text-sm">
          <div>
            <div className="font-display font-black text-xl">DECORATION KINGDOM</div>
            <div className="text-[10px] tracking-[0.4em] text-[color:var(--pink)] font-semibold">CELEBRATIONS</div>
            <p className="mt-3 text-white/70 leading-relaxed">
              We bring imagination to life with beautiful balloon decorations for every celebration.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-white/70">
              {[
                { label: "Home", to: "/" },
                { label: "About Us", to: "/about" },
                { label: "Services", to: "/services" },
                { label: "Packages", to: "/packages" },
                { label: "Blog", to: "/blog" },
                { label: "Contact Us", to: "/contact" },
                { label: "Privacy Policy", to: "/privacy-policy" },
              ].map(({ label, to }) => (
                <li key={label}><a href={to} className="hover:text-[color:var(--pink)]">{label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3">Contact Info</h4>
            <ul className="space-y-2 text-white/70">
              <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-[color:var(--pink)]" /> support@decorationkingdom.com</li>
              <li className="flex items-center gap-2"><BadgeCheck className="w-4 h-4 text-[color:var(--pink)]" /> decorationkingdom.com</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[color:var(--pink)]" /> Delhi &amp; NCR</li>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-[color:var(--pink)]" /> 9310854642</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3">Follow Us</h4>
            <div className="flex gap-3">
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/10 grid place-items-center hover:bg-[color:var(--pink)] transition-colors"><Facebook className="w-4 h-4" /></a>
              <a href="https://www.instagram.com/decorationkingdomdelhincr?utm_source=qr&igsh=NHp0bHZvZmM2dmd1" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/10 grid place-items-center hover:bg-[color:var(--pink)] transition-colors"><Instagram className="w-4 h-4" /></a>
              <a href="https://wa.me/919310854642" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-9 h-9 rounded-full bg-white/10 grid place-items-center hover:bg-[#25D366] transition-colors"><MessageCircle className="w-4 h-4" /></a>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-4 mt-8 pt-4 border-t border-white/10 text-xs text-white/50 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} Decoration Kingdom. All rights reserved.</span>
          <a href="/privacy-policy" className="hover:text-[color:var(--pink)] transition-colors">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
}
