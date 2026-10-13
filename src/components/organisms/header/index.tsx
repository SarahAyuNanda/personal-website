"use client";

import { ThemeToggle } from "@/components/atoms";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 30);
        };

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    return (
        <header
            className={cn(
                "inset-x-0 top-0 z-40 mx-auto hidden w-full bg-transparent py-4 md:fixed md:flex",
                {
                    "bg-background/70 backdrop-blur-sm transition-all duration-150":
                        scrolled,
                }
            )}
        >
            <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-3 px-5 md:px-8">
                <p className="font-fuzzy text-base font-bold tracking-tight">
                    Sarah Ayu Nanda
                </p>
                <ThemeToggle />
            </div>
        </header>
    );
};
