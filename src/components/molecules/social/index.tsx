import { BrandIcon } from "@/components/atoms";
import { database } from "@/lib/data";
import Link from "next/link";

export const Social = () => {
    return (
        <div className="flex items-center gap-4">
            {database.profiles.map((profile) => (
                <Link key={profile.id} href={profile.url} target="_blank" rel="noopener noreferrer">
                    <BrandIcon icon={profile.icon} className="size-6 fill-foreground hover:fill-tertiary hover:animate-wiggle transition-all duration-150" />
                </Link>
            ))}
        </div>
    )
}