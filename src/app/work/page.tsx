import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { TiltCover } from "@/components/work/TiltCover";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Workana-ready case studies: WordPress, e-commerce, payments, MES, and legacy ERP modernization.",
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
            Recent projects matched to high-demand Workana jobs.
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg text-ink-soft">
            From WordPress optimization and fashion e-commerce to Chilean payment
            raffles, marketplace POCs, industrial MES, and legacy ERP migrations —
            open a case study to see problem, approach, stack, and deliverables.
          </p>
        </Reveal>
      </section>

      <section className="border-t border-line pb-24">
        <div className="site-grid divide-y divide-[var(--line)]">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.05}>
              <Link
                href={`/work/${project.slug}`}
                className="group grid gap-6 py-10 md:grid-cols-[0.9fr_1.1fr_auto] md:items-center md:gap-10"
              >
                <TiltCover
                  from={project.cover.from}
                  to={project.cover.to}
                  label={project.cover.label}
                  year={project.year}
                  className="min-h-[160px] md:min-h-[180px]"
                />
                <div>
                  <p className="text-sm text-muted">
                    {project.category} · {project.budgetBand} · {project.year}
                  </p>
                  <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight transition-colors group-hover:text-accent md:text-3xl">
                    {project.title}
                  </h2>
                  <p className="mt-3 max-w-xl text-pretty text-ink-soft">
                    {project.summary}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.skills.slice(0, 4).map((skill) => (
                      <li
                        key={skill}
                        className="border border-line px-2.5 py-1 text-xs text-muted"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent md:max-w-[11rem] md:text-right">
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
