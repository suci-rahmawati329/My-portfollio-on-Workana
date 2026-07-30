export type Project = {
  slug: string;
  title: string;
  client: string;
  year: string;
  role: string;
  summary: string;
  outcome: string;
  featured: boolean;
  category: string;
  budgetBand: string;
  stack: string[];
  skills: string[];
  deliverables: string[];
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
    slug: "moda-commerce-store",
    title: "Moda Atelier Commerce",
    client: "Fashion retail startup · LatAm",
    year: "2026",
    role: "Lead WooCommerce Developer",
    featured: true,
    category: "E-commerce",
    budgetBand: "USD 250 – 500",
    summary:
      "Full clothing e-commerce with catalog filters, secure checkout, payments, inventory, and customer accounts — built to convert on mobile first.",
    outcome: "Store live in 3 weeks · mobile conversion ready",
    stack: ["WordPress", "WooCommerce", "PHP", "MySQL", "HTML/CSS", "JavaScript"],
    skills: [
      "WordPress",
      "WooCommerce",
      "PHP",
      "MySQL",
      "Responsive Web Design",
      "SEO basics",
      "Payment gateways",
    ],
    deliverables: [
      "Responsive storefront (mobile + desktop)",
      "Product catalog with size / color / type filters",
      "Cart + secure checkout",
      "Payment gateway integration",
      "Admin inventory & order management",
      "Customer accounts + purchase history",
      "Basic on-page SEO setup",
    ],
    cover: { from: "#3a2f2a", to: "#8b5a4a", label: "E-commerce" },
    problem:
      "A clothing brand needed a serious online store — not a template dump. Shoppers had to filter by size and color fast, pay safely, and trust the brand on mobile. The owner needed simple inventory and order control without hiring a full ops team.",
    approach: [
      "Mapped the buy journey: browse → filter → PDP → cart → checkout → account, then removed every step that did not earn trust or money.",
      "Built a WooCommerce catalog with high-quality image discipline, clear variants, and filters that stay fast on mid-range phones.",
      "Integrated popular payment gateways with clear success / failure states and recoverable checkout errors.",
      "Configured inventory, order statuses, and customer accounts so the owner can update products without breaking the storefront.",
      "Applied basic SEO foundations: titles, slugs, schema-ready product structure, and Core Web Vitals hygiene.",
    ],
    results: [
      { label: "Mobile LCP", value: "< 2.5s" },
      { label: "Checkout path", value: "3 steps" },
      { label: "Admin training", value: "1 session" },
    ],
    highlights: [
      "Variant-aware catalog with size / color / garment type filters",
      "Secure checkout with payment gateway + order emails",
      "Owner-friendly product updates without developer dependency",
    ],
  },
  {
    slug: "wordpress-seo-performance-blog",
    title: "WordPress SEO & Performance Overhaul",
    client: "Business site · organic growth",
    year: "2026",
    role: "WordPress Performance & SEO Lead",
    featured: true,
    category: "WordPress",
    budgetBand: "USD 100 – 250",
    summary:
      "Full WordPress optimization: SEO audit, plugin cleanup, load-speed tuning, and a properly integrated blog inside the existing site structure.",
    outcome: "Faster loads · cleaner SEO · blog live",
    stack: ["WordPress", "PHP", "MySQL", "HTML", "CSS", "JavaScript", "Apache"],
    skills: [
      "WordPress",
      "SEO",
      "PHP",
      "MySQL",
      "HTML/CSS/JS",
      "Responsive Web Design",
      "QA / Testing",
      "Apache",
    ],
    deliverables: [
      "SEO audit + on-page improvements",
      "Plugin audit / removal of dead weight",
      "Caching, image, and asset performance pass",
      "Blog architecture integrated into current theme",
      "Technical QA checklist + handover notes",
    ],
    cover: { from: "#0f5c4c", to: "#1a3340", label: "WordPress" },
    problem:
      "The WordPress site looked acceptable but underperformed everywhere that mattered: weak search visibility, heavy plugins, slow pages, and no content engine. The client needed one coherent optimization — SEO, performance, and a blog that fits the existing design system.",
    approach: [
      "Ran a technical SEO + performance baseline (crawl, Core Web Vitals, plugin inventory, database bloat).",
      "Removed or replaced unnecessary plugins, fixed render-blocking assets, and optimized images/caching without breaking layouts.",
      "Improved titles, headings, internal links, sitemap/robots hygiene, and indexable templates.",
      "Designed and configured a blog section that inherits the site’s visual language and publishing workflow.",
      "Delivered a QA pass across desktop/mobile plus a short maintenance guide for the client.",
    ],
    results: [
      { label: "Page weight", value: "−40%" },
      { label: "Lighthouse perf.", value: "90+" },
      { label: "Publish workflow", value: "Client-ready" },
    ],
    highlights: [
      "SEO + speed treated as one system, not separate tickets",
      "Blog integrated into current IA — not a bolted-on theme clash",
      "Lean plugin stack with clear ownership of each remaining tool",
    ],
  },
  {
    slug: "camper-sorteo-chile",
    title: "Camper Raffle Platform · Chile",
    client: "Promotional campaign · Chile",
    year: "2026",
    role: "Designer & Full-Stack Developer",
    featured: true,
    category: "Web + Payments",
    budgetBand: "USD 100 – 250",
    summary:
      "Modern, mobile-first raffle site for a camper giveaway with Flow, WebPay, and Mercado Pago ticket checkout.",
    outcome: "Ticket purchase flow live with local gateways",
    stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Flow", "WebPay", "Mercado Pago"],
    skills: [
      "UI design",
      "Responsive Web Design",
      "PHP",
      "MySQL",
      "API integrations",
      "Payment gateways (Chile)",
    ],
    deliverables: [
      "High-impact campaign landing experience",
      "Clear ticket purchase UX",
      "Flow + WebPay + Mercado Pago integrations",
      "Mobile-optimized checkout",
      "Order / ticket confirmation states",
    ],
    cover: { from: "#1c3d4a", to: "#c45d2a", label: "Campaign" },
    problem:
      "A camper raffle in Chile needed more than a pretty landing page. Participants had to feel excitement, understand the prize, and buy tickets safely through local and international payment options — especially on phones.",
    approach: [
      "Designed an emotion-led first viewport: prize as hero, one clear CTA to buy tickets, zero clutter.",
      "Built a ticket purchase path with transparent pricing, quantity, and confirmation states.",
      "Integrated Flow, WebPay, and Mercado Pago with idempotent payment handling and clear failure recovery.",
      "Stress-tested mobile UX so thumbs can complete purchase without zooming or guessing.",
      "Hardened basic fraud hygiene: validation, server-side amount checks, and payment webhook reconciliation.",
    ],
    results: [
      { label: "Payment options", value: "3 gateways" },
      { label: "Primary UX", value: "Mobile-first" },
      { label: "Checkout clarity", value: "1 primary CTA" },
    ],
    highlights: [
      "Chile-ready payment stack (Flow, WebPay, Mercado Pago)",
      "Campaign visuals that sell the dream without slowing the buy",
      "Secure ticket confirmation after successful payment",
    ],
  },
  {
    slug: "orders-marketplace-poc",
    title: "Orders Portal & Marketplace POC",
    client: "Marketplace concept · VPS hosted",
    year: "2025",
    role: "Full-Stack Web Developer",
    featured: true,
    category: "Web App",
    budgetBand: "USD 50 – 100",
    summary:
      "Proof-of-concept site with visual home replica, working auth, order accept/decline flow, 24h delivery timer, uploads, and a special-orders marketplace.",
    outcome: "POC accepted · auth + order loop working",
    stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "VPS"],
    skills: [
      "HTML/CSS/JS",
      "PHP",
      "MySQL",
      "Auth systems",
      "Responsive Web Design",
      "VPS deployment",
    ],
    deliverables: [
      "Home visual replica (POC-level)",
      "Working login + registration",
      "Authenticated order board (accept / decline)",
      "24-hour delivery countdown after accept",
      "Content upload tab (video / photo / audio)",
      "Marketplace for special orders",
      "Deployed on client VPS + domain",
    ],
    cover: { from: "#243044", to: "#4a6b5c", label: "POC" },
    problem:
      "The client needed a fast proof of concept: look like the reference home, but make auth and the order workflow real. Creators had to accept jobs, race a 24-hour clock, upload deliverables, then see payment-in-progress — plus browse special marketplace orders.",
    approach: [
      "Split scope clearly: static visual home vs fully functional auth/order modules — so the POC stays honest and shippable.",
      "Implemented registration/login with session security and redirect into the authenticated workspace.",
      "Built order cards with accept/decline, starting a server-side 24h timer on accept.",
      "Added an upload surface for video, photo, and audio with completion state → “payment in process”.",
      "Shipped a marketplace tab for special orders and deployed on the client’s VPS + domain.",
    ],
    results: [
      { label: "Auth", value: "Fully functional" },
      { label: "Order timer", value: "24h server-side" },
      { label: "Hosting", value: "Client VPS" },
    ],
    highlights: [
      "Clear POC boundary: visual home + real product loop",
      "Accept → countdown → upload → payment-pending state machine",
      "Marketplace section for selectable special orders",
    ],
  },
  {
    slug: "mes-pwa-trazabilidad",
    title: "MES PWA · Production & Traceability",
    client: "Industrial manufacturing · ERP-connected",
    year: "2025",
    role: "Senior .NET / PWA Engineer",
    featured: false,
    category: "Industrial / MES",
    budgetBand: "USD 1,000 – 3,000",
    summary:
      "Responsive MES Progressive Web App for tablets and PCs: production progress, QR labeling, quality holds, shipments, dashboards — integrated with SQL Server / ERP.",
    outcome: "Floor-ready MES phases with full audit trail",
    stack: ["ASP.NET Core", "C#", "SQL Server", "PWA", "JavaScript", "IIS", "API"],
    skills: [
      "ASP.NET Core",
      "C#",
      "SQL Server",
      "PWA",
      "API design",
      "System analysis",
      "IIS deployment",
      "Software testing",
    ],
    deliverables: [
      "Role-based security + full action audit log",
      "Production order status & progress capture",
      "Good / scrap / reject / rework quantities",
      "Thermal label printing with QR + reprint control",
      "Piece / lot / serial / job traceability",
      "Quality photos, release/hold, shipment validation",
      "Dashboards, alerts, exportable reports",
      "ERP integration API + IIS deploy + docs + training",
    ],
    cover: { from: "#1a2a32", to: "#3d5c4a", label: "MES" },
    problem:
      "Plant operators needed a tablet-friendly MES that speaks to the existing ERP — not another siloed spreadsheet. Traceability, label integrity, quality holds, and shipment validation had to work under shop-floor conditions with flaky connectivity and zero tolerance for duplicate data.",
    approach: [
      "Phased delivery: requirements → labeling → production capture → quality/scrap → shipments → dashboards.",
      "Modeled security around users, roles, and permissions with an immutable audit trail for every critical action.",
      "Built production recording for cycle times, good pieces, scrap, rejects, rework, and in-plant location moves.",
      "Implemented thermal QR labeling with reprint controls to prevent duplicate identity on the floor.",
      "Designed offline-tolerant patterns and duplicate protection, then exposed secure APIs into the known ERP database model for IIS deployment with docs, test plan, and key-user training.",
    ],
    results: [
      { label: "Clients", value: "Tablet + PC PWA" },
      { label: "Traceability", value: "Piece → shipment" },
      { label: "Integration", value: "SQL Server / ERP API" },
    ],
    highlights: [
      "Shop-floor UX: large targets, clear states, minimal typing",
      "QR label lifecycle with controlled reprints",
      "Audit-grade quality photos, holds, and shipment checks",
    ],
  },
  {
    slug: "erp-vb6-sqlserver-migration",
    title: "Legacy ERP/MRP · Access → SQL Server",
    client: "Industrial ERP modernization · Stage 1",
    year: "2025",
    role: "Senior VB6 / SQL Migration Engineer",
    featured: false,
    category: "Desktop / Legacy",
    budgetBand: "USD 1,000 – 3,000",
    summary:
      "Stage-1 modernization of a critical VB6 ERP/MRP (~300k LOC, 25 ActiveX DLLs): migrate data layer from MS Access to SQL Server with 1:1 business-rule compatibility.",
    outcome: "Stable SQL Server data layer · zero Access locks",
    stack: ["VB6", "MS Access", "SQL Server", "T-SQL", "AI-assisted refactor"],
    skills: [
      "Visual Basic 6",
      "Microsoft Access",
      "SQL Server",
      "SQL refactoring",
      "ERP systems",
      "System analysis",
      "AI-assisted development",
    ],
    deliverables: [
      "Access → SQL Server schema & data migration",
      "VB6 / ActiveX DLL data-access adaptation",
      "Refactor of concatenated SQL (# dates, Nz())",
      "Stability pass: lock elimination & corruption risk removal",
      "1:1 business-rule compatibility across 5 modules",
      "AI-accelerated analysis playbook for remaining debt",
    ],
    cover: { from: "#2a2438", to: "#4a5568", label: "Legacy ERP" },
    problem:
      "A mission-critical industrial ERP/MRP — Purchasing, Inventory, Production, Quality, Sales — still ran on MS Access behind a large VB6 executable and 25 ActiveX DLLs. Network locks and corruption risk blocked growth. Stage 1 required a full data-layer move to SQL Server without rewriting business rules.",
    approach: [
      "Inventoried data access across the main EXE + 25 DLLs; classified queries by risk (dates with #, Nz(), concatenated SQL, implicit transactions).",
      "Designed SQL Server schema parity and migration scripts with validation checksums for critical tables.",
      "Refactored data access to parameterized T-SQL, replacing Access-only idioms while preserving 1:1 business behavior.",
      "Used AI copilots (ChatGPT / Claude / Copilot) to accelerate pattern discovery and bulk rewrite of repetitive SQL shapes — always human-reviewed for ERP correctness.",
      "Load-tested concurrent module use to confirm lock elimination and stable multi-user operation.",
    ],
    results: [
      { label: "Modules preserved", value: "5 / 5" },
      { label: "Access locks", value: "Eliminated" },
      { label: "Business rules", value: "1:1 compatibility" },
    ],
    highlights: [
      "Proven playbook for VB6/Access → SQL Server stage-1 migrations",
      "Systematic rewrite of # date literals and Nz() patterns in DLLs",
      "AI-assisted analysis with senior review on every business-critical change",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}
