import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { getProject, projects } from "@/data/projects";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const next =
    projects[(projects.findIndex((p) => p.slug === slug) + 1) % projects.length];

  return (
    <article className="pt-[var(--header-h)]">
      <header className="site-grid py-14 md:py-20">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
            {project.category} · {project.year} · {project.budgetBand}
          </p>
          <h1 className="mt-3 max-w-4xl font-display text-4xl font-semibold tracking-tight text-balance md:text-6xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-lg text-ink-soft">
            {project.summary}
          </p>
          <dl className="mt-10 grid gap-6 border-t border-line pt-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                Client context
              </dt>
              <dd className="mt-2 text-ink">{project.client}</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                Role
              </dt>
              <dd className="mt-2 text-ink">{project.role}</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                Category
              </dt>
              <dd className="mt-2 text-ink">{project.category}</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                Outcome
              </dt>
              <dd className="mt-2 text-accent">{project.outcome}</dd>
            </div>
          </dl>
        </Reveal>
      </header>

      <div
        className="relative min-h-[280px] overflow-hidden md:min-h-[420px]"
        style={{
          background: `linear-gradient(145deg, ${project.cover.from}, ${project.cover.to})`,
        }}
        aria-hidden
      >
        <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-[radial-gradient(circle_at_25%_20%,white,transparent_42%)]" />
        <div className="absolute inset-0 flex items-end justify-between p-8 text-white md:p-12">
          <span className="font-mono text-xs uppercase tracking-[0.22em] opacity-80">
            {project.cover.label}
          </span>
          <span className="font-display text-2xl font-semibold md:text-4xl">
            {project.title}
          </span>
        </div>
      </div>

      <div className="site-grid grid gap-16 py-16 md:grid-cols-[1fr_0.85fr] md:gap-20 md:py-24">
        <Reveal>
          <section>
            <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
              The problem
            </h2>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-ink-soft">
              {project.problem}
            </p>
          </section>

          <section className="mt-14">
            <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
              Approach
            </h2>
            <ol className="mt-6 space-y-5">
              {project.approach.map((step, i) => (
                <li key={step} className="flex gap-4">
                  <span className="font-mono text-sm text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-pretty text-ink-soft">{step}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-14">
            <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
              What was delivered
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {project.deliverables.map((item) => (
                <li
                  key={item}
                  className="border-l-2 border-accent bg-surface/60 px-4 py-3 text-sm text-ink-soft"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        <Reveal delay={0.1}>
          <aside className="space-y-10 md:sticky md:top-28 md:self-start">
            <div className="border border-line bg-surface p-6 backdrop-blur-sm">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                Results
              </h3>
              <ul className="mt-5 space-y-4">
                {project.results.map((result) => (
                  <li
                    key={result.label}
                    className="flex items-baseline justify-between gap-4 border-b border-line pb-3 last:border-0"
                  >
                    <span className="text-sm text-ink-soft">{result.label}</span>
                    <span className="font-display text-lg font-semibold text-accent">
                      {result.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                Skills matched
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <li
                    key={skill}
                    className="border border-accent/30 bg-accent-mist px-3 py-1.5 text-sm text-accent"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                Stack
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="border border-line px-3 py-1.5 text-sm text-ink-soft"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                Highlights
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-ink-soft">
                {project.highlights.map((item) => (
                  <li key={item} className="border-l-2 border-accent pl-3">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <ButtonLink href="/contact" className="w-full">
              Hire me for a similar project
            </ButtonLink>
          </aside>
        </Reveal>
      </div>

      <section className="border-t border-line py-16 md:py-20">
        <div className="site-grid flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
              Next case study
            </p>
            <Link
              href={`/work/${next.slug}`}
              className="mt-2 inline-block font-display text-2xl font-semibold tracking-tight hover:text-accent md:text-3xl"
            >
              {next.title}
            </Link>
          </div>
          <ButtonLink href="/contact" variant="ghost">
            Discuss a similar project
          </ButtonLink>
        </div>
      </section>
    </article>
  );
}
