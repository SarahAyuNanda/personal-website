"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

export const PrimaryButton = ({
  children,
  className,
  ...props
}: ComponentProps<typeof Button>) => {
  return (
    <Button
      variant="default"
      className={cn(
        "bg-brand-primary hover:bg-brand-primary-accent flex items-center justify-center gap-2 rounded text-white",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
};
