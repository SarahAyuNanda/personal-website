"use client";

import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

type ThemeOption = "light" | "dark" | "system";

const THEME_ORDER: ThemeOption[] = ["light", "dark", "system"];

const THEME_META: Record<ThemeOption, { icon: typeof Sun; label: string }> = {
    light: { icon: Sun, label: "Click for dark theme" },
    dark: { icon: Moon, label: "Click for system theme" },
    system: { icon: Monitor, label: "Click for light theme" },
};

const subscribe = () => () => { };

export const ThemeToggle = ({ className }: { className?: string }) => {
    const { resolvedTheme, systemTheme, theme, setTheme } = useTheme();
    const mounted = useSyncExternalStore(subscribe, () => true, () => false);

    const current: ThemeOption = mounted && THEME_ORDER.includes(theme as ThemeOption)
        ? (theme as ThemeOption)
        : "system";
    const { icon: Icon, label } = THEME_META[current];

    const onHandleCycleTheme = () => {
        const next = THEME_ORDER[(THEME_ORDER.indexOf(current) + 1) % THEME_ORDER.length];
        const nextResolved = next === "system" ? (systemTheme ?? "light") : next;

        /* apply the class synchronously so the view transition snapshots the correct theme; next-themes persists the choice and keeps it in sync. */
        const root = document.documentElement;
        root.classList.toggle("dark", nextResolved === "dark");
        root.style.colorScheme = nextResolved;
        setTheme(next);
    };

    return (
        <Tooltip>
            <TooltipTrigger
                render={
                    <AnimatedThemeToggler
                        theme={resolvedTheme === "dark" ? "dark" : "light"}
                        onThemeChange={onHandleCycleTheme}
                        disabled={!mounted}
                        aria-label={label}
                        icon={mounted ? <Icon className="size-5" aria-hidden /> : null}
                        className={cn(
                            "flex size-10 shadow-inner items-center justify-center rounded-full border border-border bg-card text-foreground transition hover:opacity-80",
                            className,
                        )}
                    />
                }
            />
            <TooltipContent side="bottom" className="text-center">
                <p className="text-sm">{label}</p>
            </TooltipContent>
        </Tooltip>
    );
};
