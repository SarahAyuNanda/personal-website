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
        "bg-muted hover:bg-muted-foreground/25 text-brand-text flex items-center justify-center gap-2 rounded",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
};
