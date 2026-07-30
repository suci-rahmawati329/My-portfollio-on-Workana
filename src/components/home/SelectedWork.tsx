import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { TiltCover } from "@/components/work/TiltCover";
import { ProjectActions } from "@/components/work/ProjectActions";
import { ButtonLink } from "@/components/ui/ButtonLink";
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
            <ButtonLink href="/work" variant="ghost">
              View all projects
              <span aria-hidden>→</span>
            </ButtonLink>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-10 md:mt-16">
          {featured.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.08}>
              <article className="grid gap-6 border-t border-line pt-8 md:grid-cols-[1.1fr_0.9fr] md:gap-10">
                <Link href={`/work/${project.slug}`} className="block">
                  <TiltCover
                    from={project.cover.from}
                    to={project.cover.to}
                    label={project.cover.label}
                    year={project.year}
                  />
                </Link>

                <div className="flex flex-col justify-center">
                  <p className="text-sm text-muted">
                    {project.category} · {project.budgetBand}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight md:text-3xl">
                    <Link
                      href={`/work/${project.slug}`}
                      className="transition-colors hover:text-accent"
                    >
                      {project.title}
                    </Link>
                  </h3>
                  <p className="mt-4 max-w-md text-pretty text-ink-soft">
                    {project.summary}
                  </p>
                  <p className="mt-5 font-mono text-xs uppercase tracking-[0.18em] text-accent">
                    {project.outcome}
                  </p>
                  <ProjectActions slug={project.slug} className="mt-6" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
