"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

export const TertiaryButton = ({
    children,
    className,
    ...props
}: ComponentProps<typeof Button>) => {
    return (
        <Button
            variant="ghost"
            className={cn(
                "bg-muted text-foreground flex h-max items-center justify-center gap-2 rounded-full px-6 py-3 shadow-inner transition-all duration-150 ease-in-out hover:translate-y-px hover:bg-gray-100",
                className
            )}
            {...props}
        >
            {children}
        </Button>
    );
};
