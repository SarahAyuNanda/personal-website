export interface ProjectItem {
  title: string;
  period: string;
  summary: string;
  stack: string[];
  link: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  impact: string;
}

export interface WorkItem {
  title: string;
  description: string;
}

export interface PortfolioData {
  name: string;
  role: string;
  headline: string;
  location: string;
  email: string;
  phone: string;
  profiles: string[];
  skills: string[];
  works: WorkItem[];
  experiences: ExperienceItem[];
  projects: ProjectItem[];
}

export const database: PortfolioData = {
  name: "Sarah Ayu Nanda",
  role: "Frontend Developer",
  headline: "Frontend Developer building thoughtful web products",
  location: "Yogyakarta, Indonesia",
  email: "nanda.sarahayu@gmail.com",
  phone: "+62 813-2848-4322",
  profiles: [
    "https://www.linkedin.com/in/sarahayunanda/",
    "https://github.com/SarahAyuNanda",
  ],
  skills: [
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Shadcn UI",
    "REST API",
    "Vercel",
    "Git",
    "Nuxt.js",
    "Vue.js",
    "NuxtUI",
    "Claude",
  ],
  works: [
    {
      title: "Design System Rollout",
      description:
        "Unified UI components and tokens across product surfaces, reducing design inconsistencies and speeding up delivery.",
    },
    {
      title: "Performance Revamp",
      description:
        "Improved Core Web Vitals by optimizing rendering, image loading, and asset strategy for high-traffic landing pages.",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Built a modular dashboard experience with reusable charts, filters, and role-based content for internal teams.",
    },
  ],
  experiences: [
    {
      role: "Frontend Engineer",
      company: "Acme Digital",
      period: "2024 - Present",
      impact:
        "Led migration to Next.js App Router and delivered a 32% LCP improvement on core marketing pages.",
    },
    {
      role: "Web Developer",
      company: "Nova Studio",
      period: "2022 - 2024",
      impact:
        "Built client websites and web apps end-to-end from planning, development, deployment, and handover.",
    },
  ],
  projects: [
    {
      title: "Portfolio CMS",
      period: "2026",
      summary:
        "A headless CMS-driven portfolio starter with dynamic content blocks and SEO-first pages.",
      stack: ["Next.js", "TypeScript", "Tailwind"],
      link: "https://github.com/",
    },
    {
      title: "Hiring Tracker",
      period: "2025",
      summary:
        "A lightweight app to track application pipeline, interviews, and notes with timeline visualization.",
      stack: ["React", "Node.js", "PostgreSQL"],
      link: "https://github.com/",
    },
    {
      title: "UI Motion Lab",
      period: "2024",
      summary:
        "A playground of production-ready micro-interactions and transitions powered by GSAP.",
      stack: ["GSAP", "React", "Vite"],
      link: "https://github.com/",
    },
  ],
};
