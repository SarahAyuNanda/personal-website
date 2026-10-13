"use client";

import { BrandIcon } from "@/components/atoms";
import { Dock, DockIcon } from "@/components/ui/dock";
import { database } from "@/lib/data";
import Link from "next/link";

export const Social = () => {
    return (
        <div className="relative">
            <Dock
                direction="middle"
                className="mt-0 border-none bg-transparent p-0 backdrop-blur-none"
            >
                {database.profiles.map((profile) => (
                    <DockIcon key={profile.id}>
                        <Link
                            href={profile.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <BrandIcon
                                icon={profile.icon}
                                className="fill-foreground hover:fill-tertiary size-6 transition-colors duration-150 ease-in-out"
                            />
                        </Link>
                    </DockIcon>
                ))}
            </Dock>
        </div>
    );
};
