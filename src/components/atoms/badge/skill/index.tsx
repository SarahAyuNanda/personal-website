import { cn } from "@/lib/utils";
import { Webhook } from "lucide-react";
import {
  siClaude,
  siGit,
  siNextdotjs,
  siNuxt,
  siReact,
  siShadcnui,
  siTailwindcss,
  siTypescript,
  siVercel,
  siVuedotjs,
  type SimpleIcon,
} from "simple-icons";

const MONOCHROME = new Set(["000000"]);

const SKILL_ICONS: Record<string, SimpleIcon> = {
  TypeScript: siTypescript,
  React: siReact,
  "Next.js": siNextdotjs,
  "Tailwind CSS": siTailwindcss,
  "Shadcn UI": siShadcnui,
  Vercel: siVercel,
  Git: siGit,
  "Nuxt.js": siNuxt,
  "Vue.js": siVuedotjs,
  NuxtUI: siNuxt,
  Claude: siClaude,
};

export const SkillBadge = ({
  skill,
  className,
}: {
  skill: string;
  className?: string;
}) => {
  const icon = SKILL_ICONS[skill];

  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-sm font-medium text-foreground",
        className
      )}
    >
      {icon ? (
        <svg
          role="img"
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="size-4 shrink-0"
          fill={MONOCHROME.has(icon.hex) ? "currentColor" : `#${icon.hex}`}
        >
          <path d={icon.path} />
        </svg>
      ) : (
        <Webhook className="size-4 shrink-0" aria-hidden="true" />
      )}
      {skill}
    </div>
  );
};
