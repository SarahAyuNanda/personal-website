"use client"

import { ThemeToggle } from "@/components/atoms"
import { cn } from "@/lib/utils"
import { Suspense, useEffect, useState } from "react"

export const Header = () => {
    const [scrolled, setScrolled] = useState(false)

    const onScroll = () => {
        setScrolled(window.scrollY > 30)
    }

    if (typeof window !== "undefined") {
        window.addEventListener("scroll", onScroll)
    }

    useEffect(() => {
        return () => {
            window.removeEventListener("scroll", onScroll)
        }
    }, [])

    return (
        <header className={cn("fixed inset-x-0 top-0 z-40 bg-transparent py-4", {
            "backdrop-blur-sm bg-background/70 transition-all duration-150": scrolled,
        })}>
            <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-3 px-5 md:px-8">
                <p className="text-sm font-semibold tracking-tight">Sarah Ayu Nanda</p>
                <nav className="flex items-center gap-4 text-sm text-muted md:gap-6">
                    <a href="#home" className="transition-colors hover:text-foreground">
                        Home
                    </a>
                    <a href="#projects" className="transition-colors hover:text-foreground">
                        Projects
                    </a>
                    <a href="#experience" className="transition-colors hover:text-foreground">
                        Experience
                    </a>
                    <a href="#contact" className="transition-colors hover:text-foreground">
                        Contact
                    </a>
                </nav>
                <Suspense fallback={null}>
                    <ThemeToggle />
                </Suspense>
            </div>
        </header>
    )
}