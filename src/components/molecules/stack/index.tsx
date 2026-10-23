import { BrandIcon, BrandIconSource } from "@/components/atoms/icon/brand";
import { cn } from "cn";

export const Stack = ({
    stack,
    icon,
    className,
}: {
    stack: string;
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
            {stack}
        </div>
    );
};
