"use client";

import { FormEvent, useState } from "react";
import { site } from "@/data/site";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const project = String(data.get("project") || "").trim();
    const budget = String(data.get("budget") || "").trim();

    const subject = encodeURIComponent(`Workana inquiry from ${name || "client"}`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        `Budget / range: ${budget || "—"}`,
        "",
        "Project:",
        project,
      ].join("\n"),
    );

    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  return (
    <form
      onSubmit={onSubmit}
      className="border border-line bg-surface p-6 backdrop-blur-sm md:p-8"
    >
      <div className="grid gap-5">
        <label className="grid gap-2 text-sm">
          <span className="text-muted">Name</span>
          <input
            name="name"
            required
            autoComplete="name"
            className="border border-line bg-white/50 px-3 py-3 text-ink outline-none transition focus:border-accent"
          />
        </label>

        <label className="grid gap-2 text-sm">
          <span className="text-muted">Email</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className="border border-line bg-white/50 px-3 py-3 text-ink outline-none transition focus:border-accent"
          />
        </label>

        <label className="grid gap-2 text-sm">
          <span className="text-muted">Budget range</span>
          <input
            name="budget"
            placeholder="Optional"
            className="border border-line bg-white/50 px-3 py-3 text-ink outline-none transition focus:border-accent placeholder:text-muted/70"
          />
        </label>

        <label className="grid gap-2 text-sm">
          <span className="text-muted">Project overview</span>
          <textarea
            name="project"
            required
            rows={6}
            className="resize-y border border-line bg-white/50 px-3 py-3 text-ink outline-none transition focus:border-accent"
          />
        </label>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center bg-accent px-5 py-3 text-sm tracking-wide text-white transition hover:bg-accent-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        Open email draft
      </button>

      {status === "sent" ? (
        <p className="mt-4 text-sm text-ink-soft">
          Your mail client should open with the details filled in. If it
          doesn&apos;t, write directly to{" "}
          <a className="text-accent underline" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          .
        </p>
      ) : (
        <p className="mt-4 text-sm text-muted">
          Opens your email app with a prefilled message — no spammy backend.
        </p>
      )}
    </form>
  );
}
