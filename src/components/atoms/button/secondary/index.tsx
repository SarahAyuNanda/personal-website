"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

export const SecondaryButton = ({
  children,
  className,
  ...props
}: ComponentProps<typeof Button>) => {
  return (
    <Button
      variant="secondary"
      className={cn(
        "bg-brand-secondary hover:bg-brand-secondary-accent flex items-center justify-center gap-2 rounded text-white",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
};
