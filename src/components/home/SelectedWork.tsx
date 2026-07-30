import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { projects } from "@/data/projects";

export function SelectedWork() {
  return (
    <section className="border-t border-line py-20 md:py-28">
      <div className="site-grid">
        <Reveal>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
                Selected work
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
                Case studies, not screenshots
              </h2>
            </div>
            <Link
              href="/work"
              className="text-sm text-accent underline-offset-4 hover:underline"
            >
              Browse all work
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-10 md:mt-16">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.08}>
              <Link
                href={`/work/${project.slug}`}
                className="group grid gap-6 border-t border-line pt-8 md:grid-cols-[1.1fr_0.9fr] md:gap-10"
              >
                <div
                  className="relative min-h-[220px] overflow-hidden md:min-h-[280px]"
                  style={{
                    background: `linear-gradient(145deg, ${project.cover.from}, ${project.cover.to})`,
                  }}
                >
                  <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-[radial-gradient(circle_at_30%_20%,white,transparent_45%)] transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 flex items-end justify-between p-6 text-white">
                    <span className="font-mono text-xs uppercase tracking-[0.2em] opacity-80">
                      {project.cover.label}
                    </span>
                    <span className="font-mono text-xs opacity-80">
                      {project.year}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col justify-center">
                  <p className="text-sm text-muted">{project.client}</p>
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
