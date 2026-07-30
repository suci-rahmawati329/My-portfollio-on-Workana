import type { Metadata } from "next";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";

export const metadata: Metadata = {
  title: "Approach",
  description:
    "How I discover, design, build, and ship product software as a senior full-stack developer.",
};

const pillars = [
  {
    title: "Start from friction",
    body: "I don’t decorate features. I find where users hesitate, drop, or invent workarounds — then redesign the decision, not only the screen.",
  },
  {
    title: "Systems over screens",
    body: "Tokens, domain models, and interaction patterns come first. That keeps velocity high after launch and stops every ticket from becoming a one-off.",
  },
  {
    title: "Ship in thin slices",
    body: "Working software in production beats perfect mocks. Each slice includes instrumentation so we learn before we scale the wrong idea.",
  },
  {
    title: "Own the whole path",
    body: "UI quality dies when frontend and backend disagree. I work across the stack so loading states, errors, and data contracts stay honest.",
  },
];

const phases = [
  {
    label: "01 Discover",
    text: "Goals, constraints, analytics, and the real workflow — including what support tickets already know.",
  },
  {
    label: "02 Frame",
    text: "A crisp problem statement, success metrics, and a visual direction that won’t age into a template.",
  },
  {
    label: "03 Build",
    text: "Typed interfaces, accessible components, performance budgets, and reviewable pull requests.",
  },
  {
    label: "04 Prove",
    text: "Launch with measurement. Iterate on evidence. Document decisions so the next engineer inherits clarity.",
  },
];

export default function ApproachPage() {
  return (
    <div className="pt-[var(--header-h)]">
      <section className="site-grid py-16 md:py-24">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
            Approach
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight text-balance md:text-6xl">
            Senior work is taste plus process — not more libraries.
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg text-ink-soft">
            Clients hire me when the interface has to feel premium and the
            delivery has to stay dependable. Here’s how that usually unfolds.
          </p>
        </Reveal>
      </section>

      <section className="border-t border-line py-16 md:py-24">
        <div className="site-grid grid gap-10 md:grid-cols-2">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 0.06}>
              <div className="border-t border-line pt-6">
                <h2 className="font-display text-2xl font-semibold tracking-tight">
                  {pillar.title}
                </h2>
                <p className="mt-4 text-pretty text-ink-soft">{pillar.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-line py-16 md:py-24">
        <div className="site-grid">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Engagement rhythm
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {phases.map((phase, index) => (
              <Reveal key={phase.label} delay={index * 0.07}>
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                    {phase.label}
                  </p>
                  <p className="mt-4 text-pretty text-ink-soft">{phase.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <div className="mt-14">
              <ButtonLink href="/contact">Discuss fit for your project</ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
