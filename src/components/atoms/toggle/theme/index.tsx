"use client";

import { cn } from "@/lib/utils";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

type ThemeOption = "light" | "dark" | "system";

const THEME_ORDER: ThemeOption[] = ["light", "dark", "system"];

const THEME_META: Record<ThemeOption, { icon: typeof Sun; label: string }> = {
    light: { icon: Sun, label: "Theme: light. Click for dark." },
    dark: { icon: Moon, label: "Theme: dark. Click for system." },
    system: { icon: Monitor, label: "Theme: system. Click for light." },
};

const subscribe = () => () => { };

export const ThemeToggle = ({ className }: { className?: string }) => {
    const { theme, setTheme } = useTheme();
    const mounted = useSyncExternalStore(subscribe, () => true, () => false);

    const current: ThemeOption = mounted && THEME_ORDER.includes(theme as ThemeOption)
        ? (theme as ThemeOption)
        : "system";
    const { icon: Icon, label } = THEME_META[current];

    const onHandleCycleTheme = () => {
        setTheme(THEME_ORDER[(THEME_ORDER.indexOf(current) + 1) % THEME_ORDER.length]);
    };

    return (
        <button
            type="button"
            onClick={onHandleCycleTheme}
            disabled={!mounted}
            aria-label={label}
            title={label}
            className={cn(
                "flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition hover:opacity-80",
                className,
            )}
        >
            {mounted && <Icon className="size-5" aria-hidden />}
        </button>
    );
};
