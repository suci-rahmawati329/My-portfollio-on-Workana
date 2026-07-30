"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import type { MouseEvent, ReactNode } from "react";

type TiltCoverProps = {
  from: string;
  to: string;
  label: string;
  year: string;
  children?: ReactNode;
  className?: string;
};

export function TiltCover({
  from,
  to,
  label,
  year,
  className = "",
}: TiltCoverProps) {
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 160, damping: 18 });
  const sry = useSpring(ry, { stiffness: 160, damping: 18 });
  const transform = useMotionTemplate`perspective(900px) rotateX(${srx}deg) rotateY(${sry}deg)`;

  function onMove(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    rx.set((0.5 - py) * 10);
    ry.set((px - 0.5) * 14);
  }

  function onLeave() {
    rx.set(0);
    ry.set(0);
  }

  return (
    <motion.div
      className={`relative min-h-[220px] overflow-hidden md:min-h-[280px] ${className}`}
      style={{
        transform,
        background: `linear-gradient(145deg, ${from}, ${to})`,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div
        className="absolute inset-0 opacity-45 mix-blend-overlay bg-[radial-gradient(circle_at_30%_20%,white,transparent_45%)]"
        style={{ transform: "translateZ(24px)" }}
      />
      <div
        className="pointer-events-none absolute -right-8 top-8 h-28 w-28 rounded-full border border-white/25"
        style={{ transform: "translateZ(40px)" }}
      />
      <div
        className="pointer-events-none absolute bottom-10 right-10 h-16 w-16 rotate-12 border border-white/20"
        style={{ transform: "translateZ(56px)" }}
      />
      <div
        className="absolute inset-0 flex items-end justify-between p-6 text-white"
        style={{ transform: "translateZ(32px)" }}
      >
        <span className="font-mono text-xs uppercase tracking-[0.2em] opacity-80">
          {label}
        </span>
        <span className="font-mono text-xs opacity-80">{year}</span>
      </div>
    </motion.div>
  );
}
