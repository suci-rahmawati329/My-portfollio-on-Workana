import type { Metadata } from "next";
import { Reveal } from "@/components/motion/Reveal";
import { site } from "@/data/site";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.name} for Workana projects and product collaborations.`,
};

export default function ContactPage() {
  return (
    <div className="pt-[var(--header-h)]">
      <section className="site-grid grid gap-14 py-16 md:grid-cols-[1fr_0.95fr] md:gap-20 md:py-24">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
            Contact
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-balance md:text-6xl">
            Tell me what you&apos;re building.
          </h1>
          <p className="mt-6 max-w-md text-pretty text-lg text-ink-soft">
            Share goals, timeline, and constraints. I reply with fit, next steps,
            and an honest scope recommendation.
          </p>

          <dl className="mt-10 space-y-6 border-t border-line pt-8">
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                Email
              </dt>
              <dd className="mt-2">
                <a
                  href={`mailto:${site.email}`}
                  className="text-lg text-accent hover:underline"
                >
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                Presence
              </dt>
              <dd className="mt-2 text-ink-soft">{site.location}</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                GitHub
              </dt>
              <dd className="mt-2">
                <a
                  href={site.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-ink-soft hover:text-accent"
                >
                  github.com/suci-rahmawati329
                </a>
              </dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </section>
    </div>
  );
}
