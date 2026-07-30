"use client";

import dynamic from "next/dynamic";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import type { MouseEvent } from "react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { site } from "@/data/site";

const HeroScene = dynamic(
  () =>
    import("@/components/home/HeroScene").then((mod) => mod.HeroScene),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,color-mix(in_oklab,var(--accent)_18%,transparent),transparent_55%)]" />
    ),
  },
);

export function Hero() {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 80, damping: 20 });
  const sy = useSpring(my, { stiffness: 80, damping: 20 });
  const textTransform = useMotionTemplate`translate3d(${sx}px, ${sy}px, 0)`;

  function onMove(event: MouseEvent<HTMLElement>) {
    if (reduce) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    mx.set(x * -18);
    my.set(y * -10);
  }

  function onLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <section
      className="relative isolate min-h-[100svh] overflow-hidden pt-[var(--header-h)]"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-y-0 right-0 w-full md:w-[62%]">
          {reduce ? (
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_45%,color-mix(in_oklab,var(--accent)_22%,transparent),transparent_58%)]" />
          ) : (
            <HeroScene />
          )}
        </div>
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,color-mix(in_oklab,var(--bg)_94%,transparent)_0%,color-mix(in_oklab,var(--bg)_58%,transparent)_40%,transparent_66%)] md:bg-[linear-gradient(90deg,color-mix(in_oklab,var(--bg)_96%,transparent)_0%,color-mix(in_oklab,var(--bg)_72%,transparent)_36%,transparent_60%)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[color-mix(in_oklab,var(--bg-deep)_80%,transparent)] to-transparent" />
      </div>

      <div className="site-grid relative flex min-h-[calc(100svh-var(--header-h))] flex-col justify-end pb-16 pt-16 md:justify-center md:pb-24 md:pt-8">
        <motion.div
          className="max-w-xl md:max-w-2xl"
          style={reduce ? undefined : { transform: textTransform }}
        >
          <motion.p
            className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl md:text-6xl lg:text-7xl"
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {site.name}
          </motion.p>

          <motion.h1
            className="mt-6 max-w-lg text-balance text-xl font-medium leading-snug text-ink-soft sm:text-2xl md:text-[1.7rem]"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            {site.tagline}
          </motion.h1>

          <motion.p
            className="mt-5 max-w-md text-pretty text-base text-muted"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            {site.role} on Workana — WordPress, WooCommerce, payments, marketplace
            POCs, MES, and legacy ERP work with clear delivery.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center gap-3"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            <ButtonLink href="/work">View selected work</ButtonLink>
            <ButtonLink href="/contact" variant="ghost">
              Start a project
            </ButtonLink>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
