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
        "bg-muted hover:bg-gray-100 flex items-center justify-center gap-2 rounded-full text-foreground shadow-inner px-6 py-3 h-max transition-all duration-150 ease-in-out hover:translate-y-px",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
};
