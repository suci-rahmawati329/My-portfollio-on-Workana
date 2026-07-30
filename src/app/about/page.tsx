import type { Metadata } from "next";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name} — ${site.role} available on Workana.`,
};

const strengths = [
  {
    title: "Interface craft",
    body: "Typography, hierarchy, motion, and state design that make complex products feel calm.",
  },
  {
    title: "Engineering depth",
    body: "TypeScript-first apps, API design, data modeling, and performance work that hold up after launch.",
  },
  {
    title: "Client communication",
    body: "Clear updates, honest tradeoffs, and demos that show progress — not just activity.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-[var(--header-h)]">
      <section className="site-grid py-16 md:py-24">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
            About
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight text-balance md:text-6xl">
            {site.name}
          </h1>
          <p className="mt-3 text-lg text-accent">{site.role}</p>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-ink-soft">
            I help founders and product teams turn ambitious ideas into interfaces
            people trust. On Workana I focus on engagements where UI quality and
            delivery reliability both matter — landing systems, product rebuilds,
            and full-stack features that need a senior pair of hands.
          </p>
          <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-ink-soft">
            Outside the editor: I care about quiet software, readable code, and
            portfolios that prove judgment — which is why this site is a product,
            not a résumé dump.
          </p>
        </Reveal>
      </section>

      <section className="border-t border-line py-16 md:py-24">
        <div className="site-grid grid gap-10 md:grid-cols-3">
          {strengths.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <div className="border-t border-line pt-6">
                <h2 className="font-display text-xl font-semibold tracking-tight">
                  {item.title}
                </h2>
                <p className="mt-4 text-pretty text-ink-soft">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-line py-16 md:py-24">
        <div className="site-grid flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
                Availability
              </p>
              <p className="mt-3 max-w-lg font-display text-3xl font-semibold tracking-tight text-balance">
                {site.location}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <ButtonLink href="/contact">Get in touch</ButtonLink>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
