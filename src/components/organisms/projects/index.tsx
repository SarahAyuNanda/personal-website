import { Highlighter } from "@/components/ui/highlighter";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { database } from "@/lib/data";
import { cn } from "cn";
import { ArrowUpRight, Lock } from "lucide-react";
import Image from "next/image";

type Project = (typeof database.projects)[number];

const panelStyles = [
    // "bg-primary",
    // "bg-tertiary",
    // "bg-secondary",
    // "bg-accent dark:bg-accent/90",
    "bg-background dark:bg-card",
];

const statusStyles: Record<string, { label: string; dot: string }> = {
    live: { label: "Live", dot: "bg-green-600" },
    "in-progress": { label: "In Progress", dot: "bg-amber-500" },
    "under-maintenance": { label: "Under Maintenance", dot: "bg-slate-500" },
};

const ProjectVisual = ({
    project,
    index,
}: {
    project: Project;
    index: number;
}) => {
    const host = project.link
        ? new URL(project.link).hostname
        : "internal system";

    return (
        <div
            className={cn(
                "relative flex h-full min-h-72 items-center justify-center overflow-hidden rounded-3xl p-6 md:min-h-96 md:p-10",
                panelStyles[index % panelStyles.length]
            )}
        >
            <div className="bg-background text-foreground relative flex w-full max-w-xl flex-col overflow-hidden rounded-xl shadow-2xl transition-transform duration-500 group-hover:-translate-y-2 group-hover:-rotate-1">
                <div className="bg-muted flex shrink-0 items-center gap-2 px-4 py-3">
                    <span className="size-2.5 rounded-full bg-red-400" />
                    <span className="size-2.5 rounded-full bg-amber-400" />
                    <span className="size-2.5 rounded-full bg-green-400" />
                    <span className="bg-background text-muted-foreground ml-3 w-1/2 truncate rounded-full px-3 py-1 text-[10px]">
                        {host}
                    </span>
                </div>
                {project.image ? (
                    <div className="relative aspect-3/2">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            sizes="(min-width: 1024px) 576px, 90vw"
                            className="object-fill object-center"
                        />
                    </div>
                ) : (
                    <div className="flex flex-col gap-3 p-6 md:p-8">
                        <p className="font-fuzzy text-primary text-2xl font-bold md:text-3xl">
                            {project.title}
                        </p>
                        <span className="bg-muted h-2 w-full rounded-full" />
                        <span className="bg-muted h-2 w-4/5 rounded-full" />
                        <span className="bg-muted h-2 w-3/5 rounded-full" />
                        <div className="mt-2 grid grid-cols-3 gap-2">
                            <span className="bg-primary/15 h-16 rounded-lg" />
                            <span className="bg-muted h-16 rounded-lg" />
                            <span className="bg-muted h-16 rounded-lg" />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export const Projects = () => {
    return (
        <section
            id="projects"
            className="mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center gap-12 px-5 py-16 md:px-8 lg:py-40"
        >
            <div className="flex flex-col items-center gap-4">
                <div className="flex items-center gap-3">
                    <p className="text-xs font-medium tracking-wide uppercase">
                        <Highlighter
                            action="highlight"
                            color="rgba(192, 57, 43, 0.25)"
                            isView
                        >
                            Latest projects
                        </Highlighter>
                    </p>
                </div>
                <h2 className="text-center text-2xl leading-tight font-semibold tracking-tight md:text-4xl">
                    Complex systems, <br />
                    <span className="text-primary font-fuzzy text-3xl md:text-5xl">
                        simple experiences
                    </span>
                </h2>
                <p className="max-w-3xl text-center text-sm leading-7 md:text-base">
                    I turn domain-heavy processes in retail, finance, and public
                    administration into reliable, intuitive platforms that teams
                    and citizens use every day.
                </p>
            </div>

            {/* mobile version */}
            <ul className="flex w-full flex-col gap-1 lg:hidden">
                {database.projects.map((project, index) => {
                    const status = statusStyles[project.status];

                    return (
                        <li
                            key={project.title}
                            className="group flex items-start gap-4 rounded-2xl p-4 transition-all duration-200 ease-in-out"
                        >
                            <span className="font-fuzzy text-primary/25 group-hover:text-primary text-xl font-bold transition-all duration-200 ease-in-out">
                                {String(index + 1).padStart(2, "0")}
                            </span>
                            <div className="flex flex-1 flex-col gap-1.5">
                                <div className="flex items-start justify-between gap-3">
                                    <h3 className="group-hover:text-primary flex items-center gap-2 text-base font-semibold tracking-tight transition-all duration-200 ease-in-out">
                                        {project.title}
                                        {project.projectType === "private" && (
                                            <Lock
                                                aria-label="Internal access only"
                                                className="text-muted-foreground size-3.5"
                                            />
                                        )}
                                    </h3>
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group/link text-primary flex shrink-0 items-center gap-1 text-sm font-medium"
                                        >
                                            Visit
                                            <ArrowUpRight className="size-4 transition-transform duration-150 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                                        </a>
                                    )}
                                </div>
                                <div className="flex flex-wrap items-center gap-2 text-[10px] font-medium tracking-wide uppercase">
                                    {status && (
                                        <span className="flex items-center gap-1.5">
                                            <span
                                                className={cn(
                                                    "size-1.5 rounded-full",
                                                    status.dot
                                                )}
                                            />
                                            {status.label}
                                        </span>
                                    )}
                                    <span className="text-muted-foreground">
                                        · {project.period}
                                    </span>
                                </div>
                                <p className="text-muted-foreground text-sm leading-6">
                                    {project.summary}
                                </p>
                                <p className="text-foreground/70 text-xs leading-5 font-medium">
                                    {project.stack.join(" · ")}
                                </p>
                            </div>
                        </li>
                    );
                })}
            </ul>

            {/* desktop version */}
            <div className="hidden flex-col gap-10 md:gap-14 lg:flex">
                {database.projects.map((project, index) => {
                    const status = statusStyles[project.status];

                    return (
                        <article
                            key={project.title}
                            className="group bg-background dark:bg-card grid grid-cols-1 overflow-hidden rounded-3xl shadow-[0_24px_60px_-20px_rgba(15,23,42,0.18)] backdrop-blur-sm transition-shadow duration-300 lg:grid-cols-2 dark:shadow-[0_24px_60px_-20px_rgba(0,0,0,0.6)]"
                        >
                            <div
                                className={cn({
                                    "lg:order-2": index % 2 === 1,
                                })}
                            >
                                <ProjectVisual
                                    project={project}
                                    index={index}
                                />
                            </div>

                            <div className="flex flex-col justify-center gap-5 p-8 md:p-12">
                                <div className="flex items-center gap-3 text-xs font-medium tracking-wide uppercase">
                                    {status && (
                                        <span className="flex items-center gap-2">
                                            <span
                                                className={cn(
                                                    "size-2 rounded-full",
                                                    status.dot
                                                )}
                                            />
                                            {status.label}
                                        </span>
                                    )}
                                    <span className="text-muted-foreground">
                                        · {project.period}
                                    </span>
                                </div>
                                <h3 className="flex items-center gap-3 text-2xl font-semibold tracking-tight md:text-3xl">
                                    {project.title}
                                    {project.projectType === "private" && (
                                        <Tooltip>
                                            <TooltipTrigger
                                                aria-label="Internal access only"
                                                className="text-muted-foreground hover:text-foreground flex cursor-help items-center transition-colors duration-150"
                                            >
                                                <Lock className="size-5" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                Internal access only
                                            </TooltipContent>
                                        </Tooltip>
                                    )}
                                </h3>
                                <p className="text-muted-foreground text-sm leading-7 md:text-base">
                                    {project.summary}
                                </p>
                                <ul className="flex flex-wrap gap-2">
                                    {project.stack.map((item) => (
                                        <li
                                            key={item}
                                            className="bg-accent/60 text-accent-foreground rounded-full px-3 py-1 text-xs font-medium"
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group/link bg-primary mt-2 flex w-fit items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white shadow-inner transition-all duration-150 ease-in-out hover:translate-y-px"
                                    >
                                        Visit Website
                                        <ArrowUpRight className="size-4 transition-transform duration-150 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                                    </a>
                                )}
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};
