import { GithubLight } from "@/components/ui/svgs/githubLight";
import { Linkedin } from "@/components/ui/svgs/linkedin";
import { Motion } from "@/components/ui/svgs/motion";
import { Openai } from "@/components/ui/svgs/openai";
import { TanstackLight } from "@/components/ui/svgs/tanstackLight";
import { WhatsappIcon } from "@/components/ui/svgs/whatsappIcon";
import {
  siAndroidstudio,
  siAntdesign,
  siBehance,
  siBootstrap,
  siClaude,
  siDocker,
  siGit,
  siGo,
  siJavascript,
  siKotlin,
  siMedium,
  siMui,
  siNextdotjs,
  siNuxt,
  siPython,
  siReact,
  siSemanticui,
  siShadcnui,
  siStrapi,
  siTailwindcss,
  siTypescript,
  siVercel,
  siVite,
  siVuedotjs,
} from "simple-icons";

export const database = {
  name: "Sarah Ayu Nanda",
  role: "Frontend Developer",
  headline: "Frontend Developer building thoughtful web products",
  location: "Yogyakarta, Indonesia",
  email: "nanda.sarahayu@gmail.com",
  phone: "+62 813-2848-4322",
  profiles: [
    {
      id: "whatsapp",
      url: "https://wa.me/6281328484322",
      icon: WhatsappIcon,
    },
    {
      id: "linkedin",
      url: "https://www.linkedin.com/in/sarahayunanda/",
      icon: Linkedin,
    },
    {
      id: "github",
      url: "https://github.com/SarahAyuNanda",
      icon: GithubLight,
    },
    {
      id: "medium",
      url: "https://medium.com/@sarah.bugdeveloper",
      icon: siMedium,
    },
    {
      id: "behance",
      url: "https://www.behance.net/sarahayunanda",
      icon: siBehance,
    },
  ],
  skills: [
    {
      label: "Git",
      icon: siGit,
    },
    {
      label: "Javascript",
      icon: siJavascript,
    },
    {
      label: "TypeScript",
      icon: siTypescript,
    },
    {
      label: "Kotlin",
      icon: siKotlin,
    },
    {
      label: "Android Studio",
      icon: siAndroidstudio,
    },
    {
      label: "Go",
      icon: siGo,
    },
    {
      label: "Python",
      icon: siPython,
    },
    {
      label: "Vite",
      icon: siVite,
    },
    {
      label: "React",
      icon: siReact,
    },
    {
      label: "Next.js",
      icon: siNextdotjs,
    },
    {
      label: "Vue.js",
      icon: siVuedotjs,
    },
    {
      label: "Nuxt.js",
      icon: siNuxt,
    },
    {
      label: "React Native",
      icon: siReact,
    },
    {
      label: "Tailwind CSS",
      icon: siTailwindcss,
    },
    {
      label: "Shadcn UI",
      icon: siShadcnui,
    },
    {
      label: "NuxtUI",
      icon: siNuxt,
    },
    {
      label: "Material UI",
      icon: siMui,
    },
    {
      label: "Bootstrap",
      icon: siBootstrap,
    },
    {
      label: "Ant Design",
      icon: siAntdesign,
    },
    {
      label: "Semantic UI",
      icon: siSemanticui,
    },
    {
      label: "Framer Motion",
      icon: Motion,
    },
    {
      label: "Tanstack Query",
      icon: TanstackLight,
    },
    {
      label: "Strapi CMS",
      icon: siStrapi,
    },
    {
      label: "Docker",
      icon: siDocker,
    },
    {
      label: "Vercel",
      icon: siVercel,
    },
    {
      label: "OpenAI",
      icon: Openai,
    },
    {
      label: "Claude",
      icon: siClaude,
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
  ],
} as const;
