import { BrandIcon, BrandIconSource } from "@/components/atoms/icon/brand";
import { cn } from "@/lib/utils";

export const SkillBadge = ({
    skill,
    icon,
    className,
}: {
    skill: string;
    icon: BrandIconSource;
    className?: string;
}) => {
    return (
        <div
            className={cn(
                "text-foreground flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium",
                className
            )}
        >
            <BrandIcon icon={icon} />
            {skill}
        </div>
    );
};
