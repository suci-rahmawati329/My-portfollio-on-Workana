import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { TiltCover } from "@/components/work/TiltCover";
import { ProjectActions } from "@/components/work/ProjectActions";
import { projects } from "@/data/projects";
import { projectUrl, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Workana-ready case studies: WordPress, e-commerce, payments, MES, and legacy ERP modernization.",
};

export default function WorkPage() {
  return (
    <div className="pt-[var(--header-h)]">
      <section className="site-grid py-16 md:py-24">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
            All projects
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight text-balance md:text-6xl">
            Open any project link and send it to your client.
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg text-ink-soft">
            Each case study has a direct live URL. Use{" "}
            <span className="font-medium text-ink">View project</span> on this
            site, or <span className="font-medium text-ink">Open live link</span>{" "}
            for a shareable Workana proposal URL.
          </p>
          <p className="mt-4 font-mono text-xs text-muted">
            Portfolio hub:{" "}
            <a
              href={`${site.baseUrl}/work`}
              className="text-accent underline-offset-2 hover:underline"
            >
              {site.baseUrl}/work
            </a>
          </p>
        </Reveal>
      </section>

      <section className="border-t border-line pb-10">
        <div className="site-grid py-10">
          <Reveal>
            <h2 className="font-display text-xl font-semibold tracking-tight md:text-2xl">
              Quick links for proposals
            </h2>
            <ul className="mt-6 grid gap-3 md:grid-cols-2">
              {projects.map((project) => (
                <li key={project.slug}>
                  <a
                    href={projectUrl(project.slug)}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-start justify-between gap-4 border border-line bg-surface/70 px-4 py-3 transition hover:border-accent/40"
                  >
                    <span>
                      <span className="block text-sm font-medium text-ink group-hover:text-accent">
                        {project.title}
                      </span>
                      <span className="mt-1 block break-all font-mono text-[11px] text-muted">
                        {projectUrl(project.slug)}
                      </span>
                    </span>
                    <span className="shrink-0 text-sm text-accent" aria-hidden>
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line pb-24">
        <div className="site-grid divide-y divide-[var(--line)]">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.05}>
              <article className="grid gap-6 py-10 md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-10">
                <Link href={`/work/${project.slug}`} className="block">
                  <TiltCover
                    from={project.cover.from}
                    to={project.cover.to}
                    label={project.cover.label}
                    year={project.year}
                    className="min-h-[160px] md:min-h-[180px]"
                  />
                </Link>
                <div>
                  <p className="text-sm text-muted">
                    {project.category} · {project.budgetBand} · {project.year}
                  </p>
                  <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight md:text-3xl">
                    <Link
                      href={`/work/${project.slug}`}
                      className="transition-colors hover:text-accent"
                    >
                      {project.title}
                    </Link>
                  </h2>
                  <p className="mt-3 max-w-xl text-pretty text-ink-soft">
                    {project.summary}
                  </p>
                  <p className="mt-4 font-mono text-xs uppercase tracking-[0.16em] text-accent">
                    {project.outcome}
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
                  <ProjectActions
                    slug={project.slug}
                    className="mt-6"
                    showShareUrl
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
