import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { projectPath, projectUrl } from "@/data/site";

type ProjectActionsProps = {
  slug: string;
  className?: string;
  showShareUrl?: boolean;
  size?: "default" | "compact";
};

export function ProjectActions({
  slug,
  className = "",
  showShareUrl = false,
  size = "default",
}: ProjectActionsProps) {
  const href = projectPath(slug);
  const absolute = projectUrl(slug);

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <div className="flex flex-wrap items-center gap-3">
        <ButtonLink
          href={href}
          className={size === "compact" ? "px-4 py-2.5 text-xs" : ""}
        >
          View project
          <span aria-hidden>→</span>
        </ButtonLink>
        <a
          href={absolute}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 border border-line px-4 py-2.5 text-xs tracking-wide text-ink-soft transition hover:border-ink/40 hover:text-ink md:px-5 md:py-3 md:text-sm"
        >
          Open live link
          <span aria-hidden>↗</span>
        </a>
      </div>
      {showShareUrl ? (
        <p className="break-all font-mono text-[11px] leading-relaxed text-muted">
          Share with clients:{" "}
          <Link href={href} className="text-accent underline-offset-2 hover:underline">
            {absolute}
          </Link>
        </p>
      ) : null}
    </div>
  );
}
