/**
 * CelebrationBackground
 * ─────────────────────────────────────────────────────────────
 * Fixed-position festive layer visible on every page:
 *   • Helium balloons floating UP across the full viewport
 *   • Periodical party-popper confetti explosions from the edges
 *   • Continuous falling confetti / streamers
 *   • Twinkling gold sparkle stars
 *
 * pointer-events: none  → never blocks any click or scroll
 * Respects prefers-reduced-motion
 */

import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

/* ─── colour palette ────────────────────────────────────────── */
const COLORS = [
  "#e91e8c",   // vivid pink
  "#9c27b0",   // purple
  "#ffd700",   // gold
  "#ff4081",   // hot-pink
  "#7b1fa2",   // deep violet
  "#f8bbd0",   // blush / pearl
  "#ff6f61",   // coral
  "#b39ddb",   // lavender
];

/* ─── BalloonSvg ────────────────────────────────────────────── */
function BalloonSvg({ color, size, transparent }: { color: string; size: number; transparent?: boolean }) {
  const w  = size;
  const h  = Math.round(size * 1.22);
  const sl = Math.round(size * 1.6);
  const id = `bcb-${color.replace(/[^a-z0-9]/gi, "")}-${size}`;

  return (
    <svg width={w} height={h + sl} viewBox={`0 0 ${w} ${h + sl}`} fill="none">
      <defs>
        <radialGradient id={id} cx="35%" cy="28%" r="68%">
          <stop offset="0%"   stopColor="white"  stopOpacity={transparent ? 0.55 : 0.65} />
          <stop offset="50%"  stopColor={color}  stopOpacity={transparent ? 0.55 : 0.88} />
          <stop offset="100%" stopColor={color}  stopOpacity={transparent ? 0.70 : 1.00} />
        </radialGradient>
      </defs>
      {/* shadow */}
      <ellipse cx={w / 2 + 3} cy={h / 2 + 4} rx={w / 2 - 2} ry={h / 2 - 2}
        fill="black" opacity="0.07" />
      {/* body */}
      <ellipse cx={w / 2} cy={h / 2} rx={w / 2 - 1} ry={h / 2 - 1}
        fill={`url(#${id})`} />
      {/* gloss highlight */}
      <ellipse cx={w * 0.34} cy={h * 0.26} rx={w * 0.12} ry={h * 0.075}
        fill="white" opacity="0.70" />
      <ellipse cx={w * 0.26} cy={h * 0.18} rx={w * 0.045} ry={h * 0.032}
        fill="white" opacity="0.90" />
      {/* knot */}
      <ellipse cx={w / 2} cy={h} rx={w * 0.09} ry={w * 0.05} fill={color} />
      {/* string */}
      <path
        d={`M ${w / 2} ${h + w * 0.06} Q ${w / 2 - 11} ${h + sl * 0.5} ${w / 2 + 8} ${h + sl}`}
        stroke={color} strokeOpacity="0.35" strokeWidth="1.3" fill="none"
      />
    </svg>
  );
}

/* ─── single rising balloon ─────────────────────────────────── */
type BalloonCfg = {
  id:          number;
  x:           number;   // vw %
  size:        number;
  color:       string;
  transparent: boolean;
  riseDur:     number;   // seconds to cross viewport
  swayAmp:     number;   // px horizontal sway
  swayDur:     number;
  phase:       number;   // 0-1 — starting point in cycle → immediate visibility
};

function RisingBalloon({ b }: { b: BalloonCfg }) {
  // Each balloon travels from BELOW viewport to ABOVE viewport.
  // "phase" pre-advances it so some are already mid-screen at load time.
  const vpH   = typeof window !== "undefined" ? window.innerHeight : 900;
  const totalH = vpH + 260;            // extra for balloon height + string
  const fromY  =  totalH;              // below viewport  (positive = down)
  const toY    = -(vpH * 0.18 + 20);  // just above viewport top

  // Apply phase offset so balloon appears at a pre-advanced height
  const phaseY = fromY - b.phase * (fromY - toY);

  return (
    <motion.div
      className="absolute pointer-events-none select-none"
      style={{
        left:        `${b.x}%`,
        top:         `-260px`,          // anchor point above-fold
        willChange:  "transform",
        filter:      "drop-shadow(0 4px 8px rgba(0,0,0,0.18))",
      }}
      initial={{ y: phaseY, x: 0, rotate: 0 }}
      animate={{
        y:      [phaseY, toY],
        x:      [-b.swayAmp, b.swayAmp, -b.swayAmp],
        rotate: [-5, 5, -5],
      }}
      transition={{
        y: {
          duration:    b.riseDur * (1 - b.phase),  // remaining time in 1st cycle
          repeat:      Infinity,
          repeatDelay: 0,
          ease:        "linear",
          onRepeat: () => { /* on subsequent loops, full duration */ },
        },
        x: {
          duration: b.swayDur,
          repeat:   Infinity,
          ease:     "easeInOut",
        },
        rotate: {
          duration: b.swayDur * 1.15,
          repeat:   Infinity,
          ease:     "easeInOut",
        },
      }}
    >
      <BalloonSvg color={b.color} size={b.size} transparent={b.transparent} />
    </motion.div>
  );
}

/* ─── continuous falling confetti piece ─────────────────────── */
type ConfettiCfg = {
  id:      number;
  x:       number;   // vw %
  color:   string;
  shape:   "sq" | "rect" | "dot";
  w:       number;
  h:       number;
  fallDur: number;
  delay:   number;
  rotEnd:  number;
  driftX:  number;
  startY:  number;   // initial y (vh %) for immediate visibility
};

function FallingConfetti({ c }: { c: ConfettiCfg }) {
  const vpH   = typeof window !== "undefined" ? window.innerHeight : 900;
  const fromY = -c.startY * vpH / 100;       // above viewport (fraction pre-fallen)
  const toY   = vpH + 30;

  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        left:        `${c.x}%`,
        top:         0,
        width:       c.w,
        height:      c.h,
        background:  c.color,
        borderRadius: c.shape === "dot" ? "50%" : "2px",
        willChange:  "transform, opacity",
      }}
      initial={{ y: fromY, x: 0, rotate: 0, opacity: 0.9 }}
      animate={{
        y:       [fromY, toY],
        x:       [0, c.driftX],
        rotate:  [0, c.rotEnd],
        opacity: [0.9, 0.85, 0],
      }}
      transition={{
        duration:    c.fallDur,
        delay:       c.delay,
        repeat:      Infinity,
        repeatDelay: Math.random() * 2,
        ease:        "linear",
      }}
    />
  );
}

/* ─── party-popper burst ─────────────────────────────────────── */
type BurstParticle = {
  angle: number; speed: number; color: string; size: number; shape: number;
};

function PartyBurst({ ox, oy, onDone }: { ox: number; oy: number; onDone: () => void }) {
  const particles = useMemo<BurstParticle[]>(() => (
    Array.from({ length: 65 }, (_, i) => ({
      angle:  (Math.PI * 2 * i) / 65 + (Math.random() - 0.5) * 0.8,
      speed:  90 + Math.random() * 230,
      color:  COLORS[i % COLORS.length],
      size:   4 + Math.random() * 9,
      shape:  i % 3,
    }))
  ), []);

  useEffect(() => {
    const t = setTimeout(onDone, 2400);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <div
      className="fixed pointer-events-none"
      style={{ left: ox, top: oy, zIndex: 9995 }}
      aria-hidden
    >
      {particles.map((p, i) => {
        const tx = Math.cos(p.angle) * p.speed;
        const ty = Math.sin(p.angle) * p.speed + 40; // slight gravity
        const pw = p.shape === 1 ? p.size * 0.4 : p.size;
        const ph = p.shape === 1 ? p.size * 1.6 : p.size;
        return (
          <motion.span
            key={i}
            className="absolute block"
            style={{
              width:        pw,
              height:       ph,
              background:   p.color,
              borderRadius: p.shape === 2 ? "50%" : "2px",
            }}
            initial={{ x: 0, y: 0, rotate: 0, opacity: 1, scale: 0.2 }}
            animate={{
              x:       tx,
              y:       ty,
              rotate:  Math.random() * 720 - 360,
              opacity: [1, 1, 0],
              scale:   [0.2, 1, 0.7],
            }}
            transition={{
              duration: 1.9 + Math.random() * 0.5,
              delay:    Math.random() * 0.1,
              ease:     [0.2, 1, 0.35, 1],
            }}
          />
        );
      })}
    </div>
  );
}

/* ─── twinkling star ─────────────────────────────────────────── */
function TwinkleStar({ x, y, s, delay, dur }: {
  x: number; y: number; s: number; delay: number; dur: number;
}) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ left: `${x}%`, top: `${y}%` }}
      animate={{ opacity: [0, 0.9, 0], scale: [0.4, 1.4, 0.4] }}
      transition={{ duration: dur, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg width={s + 4} height={s + 4} viewBox="0 0 20 20">
        <path
          d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z"
          fill="oklch(0.82 0.18 85)"
        />
      </svg>
    </motion.div>
  );
}

/* ─── main component ─────────────────────────────────────────── */
export function CelebrationBackground() {
  const reduce = useReducedMotion();

  /* ── Balloons ── 6 across full width, subtle */
  const balloons = useMemo<BalloonCfg[]>(() => {
    // xPositions — fewer, only edges + loose spread
    const xs = [3, 18, 38, 62, 82, 95];
    return xs.map((x, i) => ({
      id:          i,
      x,
      size:        48 + (i % 6) * 10,          // 48 – 98 px
      color:       COLORS[i % COLORS.length],
      transparent: i % 4 === 2,
      riseDur:     16 + (i % 7) * 3.5,         // 16 – 37.5 s
      swayAmp:     16 + (i % 5) * 8,
      swayDur:     4  + (i % 4) * 1.2,
      phase:       (i * 0.071) % 1,            // 0–1, spreads balloons across vertical space
    }));
  }, []);

  /* ── Confetti ── 45 pieces spread at random starting heights */
  const confetti = useMemo<ConfettiCfg[]>(() => {
    const shapes: ConfettiCfg["shape"][] = ["sq", "rect", "dot"];
    return Array.from({ length: 16 }, (_, i) => {
      const shape = shapes[i % 3];
      const base  = 5 + (i % 5) * 2;
      return {
        id:      i,
        x:       1 + (i * 2.2) % 98,
        color:   COLORS[i % COLORS.length],
        shape,
        w:       shape === "rect" ? base * 0.38 : base,
        h:       shape === "rect" ? base * 1.6  : base,
        fallDur: 6 + (i % 7) * 2,
        delay:   (i * 0.35) % 8,
        rotEnd:  200 + (i % 4) * 100,
        driftX:  -45 + (i % 6) * 18,
        startY:  (i * 2.3) % 100,              // spread pieces throughout viewport
      };
    });
  }, []);

  /* ── Stars ── 20 twinkling across the viewport */
  const stars = useMemo(() =>
    Array.from({ length: 8 }, (_, i) => ({
      id:    i,
      x:     2 + (i * 4.9) % 96,
      y:     2 + (i * 4.7) % 95,
      s:     4 + (i % 4),
      delay: (i * 0.55) % 5,
      dur:   1.6 + (i % 5) * 0.4,
    })),
  []);

  /* ── Party-popper bursts ── fire from the side edges every ~6 s */
  type BurstEntry = { id: number; x: number; y: number };
  const [bursts, setBursts] = useState<BurstEntry[]>([]);
  const burstIdx = useRef(0);
  const burstId  = useRef(0);

  const fireBurst = useCallback(() => {
    if (typeof window === "undefined") return;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    // cycle through 6 edge positions
    const origins = [
      { x: vw * 0.02, y: vh * 0.75 },
      { x: vw * 0.98, y: vh * 0.75 },
      { x: vw * 0.02, y: vh * 0.45 },
      { x: vw * 0.98, y: vh * 0.45 },
      { x: vw * 0.50, y: vh * 0.95 },
      { x: vw * 0.02, y: vh * 0.20 },
    ];
    const o  = origins[burstIdx.current % origins.length];
    burstIdx.current++;
    const id = burstId.current++;
    setBursts((p) => [...p, { id, x: o.x, y: o.y }]);
  }, []);

  const killBurst = useCallback((id: number) => {
    setBursts((p) => p.filter((b) => b.id !== id));
  }, []);

  useEffect(() => {
    if (reduce) return;
    // First burst at 8 s, then every 20 s — infrequent, not distracting
    const t0 = setTimeout(fireBurst, 8000);
    const iv = setInterval(fireBurst, 20000);
    return () => { clearTimeout(t0); clearInterval(iv); };
  }, [reduce, fireBurst]);

  if (reduce) return null;

  return (
    <>
      {/* Fixed canvas — balloons + confetti + stars */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 0, overflow: "hidden" }}
        aria-hidden
      >
        {/* Stars */}
        {stars.map((s) => (
          <TwinkleStar key={s.id} x={s.x} y={s.y} s={s.s} delay={s.delay} dur={s.dur} />
        ))}

        {/* Balloons */}
        {balloons.map((b) => (
          <RisingBalloon key={b.id} b={b} />
        ))}

        {/* Confetti */}
        {confetti.map((c) => (
          <FallingConfetti key={c.id} c={c} />
        ))}
      </div>

      {/* Party-popper bursts — outside overflow:hidden so they spread freely */}
      <AnimatePresence>
        {bursts.map((burst) => (
          <PartyBurst
            key={burst.id}
            ox={burst.x}
            oy={burst.y}
            onDone={() => killBurst(burst.id)}
          />
        ))}
      </AnimatePresence>
    </>
  );
}
