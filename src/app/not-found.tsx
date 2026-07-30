import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";

export default function NotFound() {
  return (
    <div className="site-grid flex min-h-[70vh] flex-col items-start justify-center pt-[var(--header-h)]">
      <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
        404
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl">
        This page isn&apos;t in the system.
      </h1>
      <p className="mt-4 max-w-md text-ink-soft">
        The route may have moved. Head back to work or the home composition.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink href="/">Home</ButtonLink>
        <ButtonLink href="/work" variant="ghost">
          Work
        </ButtonLink>
      </div>
      <Link href="/contact" className="mt-6 text-sm text-accent hover:underline">
        Or contact me directly
      </Link>
    </div>
  );
}
