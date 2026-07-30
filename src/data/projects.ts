export type Project = {
  slug: string;
  title: string;
  client: string;
  year: string;
  role: string;
  summary: string;
  outcome: string;
  stack: string[];
  cover: {
    from: string;
    to: string;
    label: string;
  };
  problem: string;
  approach: string[];
  results: { label: string; value: string }[];
  highlights: string[];
};

export const projects: Project[] = [
  {
    slug: "northline-commerce",
    title: "Northline Commerce",
    client: "DTC retail platform",
    year: "2025",
    role: "Lead Full-Stack",
    summary:
      "Rebuilt checkout and catalog flows into a coherent product system with measurable conversion lift.",
    outcome: "+28% checkout completion in 6 weeks",
    stack: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Redis"],
    cover: {
      from: "#0f5c4c",
      to: "#1a2f3a",
      label: "Commerce",
    },
    problem:
      "The storefront looked fine in screenshots but leaked intent at every decision point — slow catalog filters, ambiguous shipping states, and a checkout that felt like three products glued together.",
    approach: [
      "Mapped the real purchase journey with session replay and support tickets, then cut the flow to one decision per screen.",
      "Introduced a typed commerce domain layer so UI, payments, and inventory shared one source of truth.",
      "Rebuilt filter and PDP interactions around perceived performance — optimistic UI, edge caching, and skeleton choreography.",
      "Instrumented funnel events before redesign so every UI change had a conversion baseline.",
    ],
    results: [
      { label: "Checkout completion", value: "+28%" },
      { label: "P95 catalog TTI", value: "1.4s → 0.6s" },
      { label: "Support tickets", value: "−34%" },
    ],
    highlights: [
      "Design system tokens shared between marketing and app shells",
      "Idempotent payment intents with recoverable failure states",
      "A/B harness for shipping messaging without redeploys",
    ],
  },
  {
    slug: "atelier-ops",
    title: "Atelier Ops",
    client: "Operations SaaS",
    year: "2025",
    role: "Product Engineer",
    summary:
      "Turned a dense internal dashboard into a calm operations workspace teams actually finish work inside.",
    outcome: "42% fewer clicks to close a job",
    stack: ["React", "Node.js", "tRPC", "Prisma", "Tailwind"],
    cover: {
      from: "#2a3340",
      to: "#5c6b4a",
      label: "SaaS",
    },
    problem:
      "Operators lived in a maze of modals and tables. Power users memorized workarounds; new hires needed weeks. The product was feature-complete and still slow to use.",
    approach: [
      "Shadowed real shifts and rebuilt navigation around jobs, not database entities.",
      "Collapsed five status workflows into a single progressive disclosure pattern with keyboard-first actions.",
      "Moved heavy analytics off the critical path; the default view answers “what needs me now?”",
      "Shipped an interaction QA checklist so density never returned as accidental complexity.",
    ],
    results: [
      { label: "Clicks to close job", value: "−42%" },
      { label: "Time-to-competence", value: "3w → 5d" },
      { label: "Daily active operators", value: "+19%" },
    ],
    highlights: [
      "Command palette for cross-entity search",
      "Optimistic mutations with conflict-safe rollbacks",
      "Role-aware empty states that teach the next action",
    ],
  },
  {
    slug: "signalroom",
    title: "Signalroom",
    client: "Analytics startup",
    year: "2024",
    role: "Frontend Architect",
    summary:
      "Designed a real-time insight surface where charts, narrative, and alerts share one visual language.",
    outcome: "Launch-ready design system in 5 weeks",
    stack: ["Next.js", "D3", "WebSockets", "Framer Motion", "Zod"],
    cover: {
      from: "#1c3d4a",
      to: "#8b6b4a",
      label: "Data",
    },
    problem:
      "Investors loved the model; users drowned in charts. Every surface invented its own hierarchy, color meaning, and loading behavior.",
    approach: [
      "Defined a strict visual grammar: one accent for action, muted ink for data, motion only for state change.",
      "Built chart primitives that compose — line, band, annotation — instead of one-off dashboard widgets.",
      "Synced live streams with a resilient client store so reconnects never blank the UI.",
      "Wrote usage docs inside Storybook so the next hire extends the system instead of forking it.",
    ],
    results: [
      { label: "Design-to-dev handoff", value: "−60%" },
      { label: "Core Web Vitals", value: "All green" },
      { label: "Feature reuse rate", value: "3×" },
    ],
    highlights: [
      "Tokenized chart themes for light operational contexts",
      "Accessible focus order across dense data panels",
      "Streaming backpressure handled in the UI layer",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
