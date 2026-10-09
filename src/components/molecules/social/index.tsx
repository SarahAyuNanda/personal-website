"use client"

import { BrandIcon } from "@/components/atoms";
import { Dock, DockIcon } from "@/components/ui/dock";
import { database } from "@/lib/data";
import Link from "next/link";

export const Social = () => {
    return (
        <div className="relative">
            <Dock direction="middle" className="border-none bg-transparent backdrop-blur-none mt-0 p-0">
                {database.profiles.map((profile) => (
                    <DockIcon key={profile.id}>
                        <Link href={profile.url} target="_blank" rel="noopener noreferrer">
                            <BrandIcon icon={profile.icon} className="size-6 fill-foreground hover:fill-tertiary transition-colors ease-in-out duration-150" />
                        </Link>
                    </DockIcon>
                ))}
            </Dock>
        </div>
    )
}