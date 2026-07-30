import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { TiltCover } from "@/components/work/TiltCover";
import { getFeaturedProjects } from "@/data/projects";

export function SelectedWork() {
  const featured = getFeaturedProjects();

  return (
    <section className="border-t border-line py-20 md:py-28">
      <div className="site-grid">
        <Reveal>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
                Latest Workana-ready work
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
                Projects clients are hiring for right now
              </h2>
            </div>
            <Link
              href="/work"
              className="text-sm text-accent underline-offset-4 hover:underline"
            >
              View all 6 case studies
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-10 md:mt-16">
          {featured.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.08}>
              <Link
                href={`/work/${project.slug}`}
                className="group grid gap-6 border-t border-line pt-8 md:grid-cols-[1.1fr_0.9fr] md:gap-10"
              >
                <TiltCover
                  from={project.cover.from}
                  to={project.cover.to}
                  label={project.cover.label}
                  year={project.year}
                />

                <div className="flex flex-col justify-center">
                  <p className="text-sm text-muted">
                    {project.category} · {project.budgetBand}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight transition-colors group-hover:text-accent md:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-4 max-w-md text-pretty text-ink-soft">
                    {project.summary}
                  </p>
                  <p className="mt-6 font-mono text-xs uppercase tracking-[0.18em] text-accent">
                    {project.outcome}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
