import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected case studies spanning commerce, SaaS, and data products.",
};

export default function WorkPage() {
  return (
    <div className="pt-[var(--header-h)]">
      <section className="site-grid py-16 md:py-24">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
            Work
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight text-balance md:text-6xl">
            Products rebuilt with clarity, speed, and measurable outcomes.
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg text-ink-soft">
            Each engagement below is framed as a case study — problem, decisions,
            and results — so you can evaluate how I think, not only what shipped.
          </p>
        </Reveal>
      </section>

      <section className="border-t border-line pb-24">
        <div className="site-grid divide-y divide-[var(--line)]">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.06}>
              <Link
                href={`/work/${project.slug}`}
                className="group grid gap-6 py-10 md:grid-cols-[0.9fr_1.1fr_auto] md:items-center md:gap-10"
              >
                <div
                  className="min-h-[160px] md:min-h-[180px]"
                  style={{
                    background: `linear-gradient(145deg, ${project.cover.from}, ${project.cover.to})`,
                  }}
                />
                <div>
                  <p className="text-sm text-muted">
                    {project.client} · {project.year}
                  </p>
                  <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight transition-colors group-hover:text-accent md:text-3xl">
                    {project.title}
                  </h2>
                  <p className="mt-3 max-w-xl text-pretty text-ink-soft">
                    {project.summary}
                  </p>
                </div>
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent md:text-right">
                  {project.outcome}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
