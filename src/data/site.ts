export const site = {
  name: "Suci Rahmawati",
  shortName: "Suci",
  role: "Senior Full-Stack Developer",
  tagline:
    "I ship WordPress, e-commerce, payments, and industrial web systems that clients can trust.",
  summary:
    "Workana freelancer for high-demand jobs — WordPress SEO/performance, WooCommerce, payment gateways, marketplace POCs, MES PWAs, and legacy ERP modernization.",
  email: "hello@sucirahmawati.dev",
  location: "Available worldwide · Workana",
  baseUrl: "https://my-portfollio-on-workana.vercel.app",
  links: {
    workana: "https://www.workana.com",
    github: "https://github.com/suci-rahmawati329",
    work: "/work",
  },
} as const;

export const nav = [
  { href: "/work", label: "Projects" },
  { href: "/approach", label: "Approach" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export function projectPath(slug: string) {
  return `/work/${slug}`;
}

export function projectUrl(slug: string) {
  return `${site.baseUrl}/work/${slug}`;
}

