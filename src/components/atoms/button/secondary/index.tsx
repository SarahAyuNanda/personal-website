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
        "bg-tertiary hover:bg-tertiary/80 flex items-center justify-center gap-2 rounded-full shadow-inner text-white px-6 py-3 h-max transition-all duration-150 ease-in-out hover:translate-y-px",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
};
