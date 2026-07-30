import Link from "next/link";
import { nav, site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line">
      <div className="site-grid flex flex-col gap-8 py-12 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-2xl font-semibold tracking-tight">
            {site.name}
          </p>
          <p className="mt-2 max-w-sm text-sm text-muted">{site.summary}</p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-ink-soft">
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
      <div className="site-grid border-t border-line py-5 text-xs text-muted">
        <p>
          © {new Date().getFullYear()} {site.name}. Built for Workana with
          Next.js, Three.js & intention.
        </p>
      </div>
    </footer>
  );
}
