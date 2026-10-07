import { database } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Webhook } from "lucide-react";
import {
  siAndroidstudio,
  siAntdesign,
  siBootstrap,
  siClaude,
  siDocker,
  siGit,
  siGo,
  siJavascript,
  siKotlin,
  siMui,
  siNextdotjs,
  siNuxt,
  siPython,
  siReact,
  siSemanticui,
  siShadcnui,
  siStrapi,
  siTailwindcss,
  siTanstack,
  siTypescript,
  siVercel,
  siVite,
  siVuedotjs,
  type SimpleIcon
} from "simple-icons";

const MONOCHROME = new Set(["000000"]);

type Skill = typeof database.skills[number]

const SKILL_ICONS: Record<Skill, SimpleIcon> = {
  "Git": siGit,
  "Javascript": siJavascript,
  "TypeScript": siTypescript,
  "Kotlin": siKotlin,
  "Android Studio": siAndroidstudio,
  "Go": siGo,
  "Python": siPython,
  "Vite": siVite,
  "React": siReact,
  "Next.js": siNextdotjs,
  "Vue.js": siVuedotjs,
  "Nuxt.js": siNuxt,
  "React Native": siReact,
  "Tailwind CSS": siTailwindcss,
  "Shadcn UI": siShadcnui,
  "NuxtUI": siNuxt,
  "Material UI": siMui,
  "Bootstrap": siBootstrap,
  "Ant Design": siAntdesign,
  "Semantic UI": siSemanticui,
  "Tanstack Query": siTanstack,
  "Strapi CMS": siStrapi,
  "Docker": siDocker,
  "Vercel": siVercel,
  "Claude": siClaude,
};

export const SkillBadge = ({
  skill,
  className,
}: {
  skill: Skill;
  className?: string;
}) => {
  const icon = SKILL_ICONS[skill];

  return (
    <div
      className={cn(
        "flex justify-center items-center gap-2 px-4 py-3 text-sm font-medium text-foreground min-w-32",
        className
      )}
    >
      {icon ? (
        <svg
          role="img"
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="size-5 shrink-0"
          fill={MONOCHROME.has(icon.hex) ? "currentColor" : `#${icon.hex}`}
        >
          <path d={icon.path} />
        </svg>
      ) : (
        <Webhook className="size-5 shrink-0" aria-hidden="true" />
      )}
      {skill}
    </div>
  );
};
