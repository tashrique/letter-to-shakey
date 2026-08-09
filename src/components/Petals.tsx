"use client";

import { useMemo } from "react";

type Petal = {
  left: string;
  size: number;
  duration: number;
  delay: number;
  driftStart: string;
  driftEnd: string;
  opacity: number;
  hue: "rose" | "gold";
};

// Deterministic pseudo-random source (mulberry32) seeded by index, so the
// layout is stable between server and client renders — no Math.random().
function seededRandom(seed: number) {
  let t = (seed + 0x6d2b79f5) | 0;
  return () => {
    t = (t + 0x6d2b79f5) | 0;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

function makePetals(count: number): Petal[] {
  return Array.from({ length: count }).map((_, i) => {
    const rand = seededRandom(i * 97 + 13);
    return {
      left: `${(i / count) * 100 + (rand() * 6 - 3)}%`,
      size: 10 + rand() * 14,
      duration: 14 + rand() * 12,
      delay: -(rand() * 20),
      driftStart: `${rand() * 40 - 20}px`,
      driftEnd: `${rand() * 160 - 80}px`,
      opacity: 0.35 + rand() * 0.35,
      hue: rand() > 0.75 ? "gold" : "rose",
    };
  });
}

function PetalShape({ size, hue }: { size: number; hue: "rose" | "gold" }) {
  const fill = hue === "gold" ? "var(--gold)" : "var(--rose)";
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2C9 6 4 8 4 13a8 8 0 0 0 16 0c0-5-5-7-8-11Z"
        fill={fill}
        opacity={0.9}
      />
    </svg>
  );
}

export default function Petals({ count = 18 }: { count?: number }) {
  const petals = useMemo(() => makePetals(count), [count]);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {petals.map((p, i) => (
        <div
          key={i}
          className="animate-drift absolute top-0"
          style={
            {
              left: p.left,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              "--drift-x-start": p.driftStart,
              "--drift-x-end": p.driftEnd,
              "--drift-opacity": p.opacity,
            } as React.CSSProperties
          }
        >
          <PetalShape size={p.size} hue={p.hue} />
        </div>
      ))}
    </div>
  );
}
