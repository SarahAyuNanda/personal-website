"use client";

import { ErrorBoundaryPage } from "@/components/templates";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { ChevronUp } from "lucide-react";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
import ScrollToTop from "react-scroll-to-top";
import { Toaster } from "sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

export const RootTemplate = ({ children }: { children: ReactNode }) => {
    const queryClient = new QueryClient()

    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                <TooltipProvider>
                    <ErrorBoundaryPage>
                        {children}
                        <Toaster position="top-right" expand={false} richColors />
                        <ScrollToTop
                            smooth
                            component={
                                <ChevronUp className="group-hover:animate-wiggle-more size-6! md:size-8!" />
                            }
                            className={cn(
                                "group bottom-6! h-fit! w-fit! rounded-full! p-3! text-white! bg-primary! shadow-md! transition-all! duration-150! ease-in-out!",
                            )}
                        />
                    </ErrorBoundaryPage>
                </TooltipProvider>
            </ThemeProvider>
        </QueryClientProvider>
    );
};
