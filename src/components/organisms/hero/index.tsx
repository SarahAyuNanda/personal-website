import { PrimaryButton, SkillBadge, TertiaryButton } from "@/components/atoms";
import { Social } from "@/components/molecules";
import { Marquee } from "@/components/ui/marquee";
import { database } from "@/lib/data";
import { Mail, Paperclip } from "lucide-react";

export const Hero = () => {
    return (
        <section
            className="relative h-dvh flex w-full"
        >
            <div className="max-w-7xl mx-auto flex w-full flex-col justify-center items-center gap-6">
                <div className="flex items-center gap-3">
                    <span className="h-3 w-3 border-2 border-muted rounded-full bg-green-600 animate-pulse" />
                    <p className="text-xs font-medium uppercase tracking-wide">
                        Available for new opportunities
                    </p>
                </div>
                <h1
                    className="text-4xl font-semibold leading-tight text-center tracking-tight md:text-6xl"
                >
                    Hey, I&apos;m&nbsp;
                    <span className="text-primary text-7xl font-fuzzy">
                        {database.name}
                    </span>
                    <br />
                    <span className="text-foreground">
                        {database.role}
                    </span>
                </h1>
                <p className="text-base max-w-5xl leading-7 md:text-lg text-center">
                    With 5+ years of experience, I enjoy turning complex ideas and requirements into clean, intuitive interfaces while keeping the codebase structured, maintainable, and built to grow.
                </p>
                <Social />
                <div className="flex flex-wrap items-center justify-center gap-3 mt-4">
                    <PrimaryButton className="group">
                        Connect with me
                        <Mail className="group-hover:animate-wiggle-more" />
                    </PrimaryButton>
                    <TertiaryButton className="group">
                        Preview CV
                        <Paperclip className="group-hover:animate-wiggle-more" />
                    </TertiaryButton>
                </div>
            </div>
            <div className="absolute inset-x-0 w-full bottom-0 overflow-hidden bg-accent/40">
                <Marquee pauseOnHover className="[--duration:60s]">
                    {database.skills.map((skill) => (
                        <SkillBadge key={skill.label} skill={skill.label} icon={skill.icon} />
                    ))}
                </Marquee>
                <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r"></div>
                <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l"></div>

            </div>
        </section>
    );
}