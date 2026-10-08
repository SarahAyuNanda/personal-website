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
        "bg-primary flex items-center justify-center gap-2 rounded-full shadow-inner text-white px-6 py-3 h-max transition-all duration-150 ease-in-out",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
};
