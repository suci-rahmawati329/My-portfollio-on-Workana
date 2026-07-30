import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function HomeClose() {
  return (
    <section className="border-t border-line py-20 md:py-28">
      <div className="site-grid">
        <Reveal>
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
              Next step
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-balance md:text-5xl">
              Looking for someone who ships with taste and systems thinking?
            </h2>
            <p className="mt-5 max-w-lg text-pretty text-ink-soft">
              I take on focused product and interface engagements on Workana —
              clear scope, strong communication, and work you can put in front
              of users.
            </p>
            <div className="mt-8">
              <ButtonLink href="/contact">Let&apos;s talk</ButtonLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
