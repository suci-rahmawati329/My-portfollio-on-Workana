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
              Hiring on Workana for WordPress, stores, payments, or MES?
            </h2>
            <p className="mt-5 max-w-lg text-pretty text-ink-soft">
              Open a case study that matches your job — then message me with
              scope and timeline. I reply with fit, plan, and a clear next step.
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
