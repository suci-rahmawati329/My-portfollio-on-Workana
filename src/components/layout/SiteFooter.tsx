import Link from "next/link";
import { nav, projectUrl, site } from "@/data/site";
import { projects } from "@/data/projects";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line">
      <div className="site-grid grid gap-10 py-12 md:grid-cols-[1.1fr_0.9fr_1fr]">
        <div>
          <p className="font-display text-2xl font-semibold tracking-tight">
            {site.name}
          </p>
          <p className="mt-2 max-w-sm text-sm text-muted">{site.summary}</p>
          <a
            href={`${site.baseUrl}/work`}
            className="mt-4 inline-flex text-sm text-accent underline-offset-4 hover:underline"
          >
            View all projects →
          </a>
        </div>

        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            Navigate
          </p>
          <div className="mt-4 flex flex-col gap-2 text-sm text-ink-soft">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-ink">
                {item.label}
              </Link>
            ))}
            <a
              href={site.links.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-ink"
            >
              GitHub
            </a>
          </div>
        </div>

        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            Project links
          </p>
          <ul className="mt-4 space-y-2">
            {projects.map((project) => (
              <li key={project.slug}>
                <a
                  href={projectUrl(project.slug)}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-ink-soft transition hover:text-accent"
                >
                  {project.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="site-grid border-t border-line py-5 text-xs text-muted">
        <p>
          © {new Date().getFullYear()} {site.name}. Built for Workana with
          Next.js, Three.js & intention.
        </p>
      </div>
    </footer>
  );
}
