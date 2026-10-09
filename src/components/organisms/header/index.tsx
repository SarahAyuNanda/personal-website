"use client"

import { ThemeToggle } from "@/components/atoms"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

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
        <header className={cn("fixed inset-x-0 top-0 mx-auto z-40 bg-transparent py-4 max-w-7xl", {
            "backdrop-blur-sm bg-background/70 transition-all duration-150": scrolled,
        })}>
            <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-3 px-5 md:px-8">
                <p className="text-base font-bold tracking-tight font-fuzzy">Sarah Ayu Nanda</p>
                <ThemeToggle />
            </div>
        </header>
    )
}