"use client";

import { TertiaryButton } from "@/components/atoms";
import { Social, Stack } from "@/components/molecules";
import { ContactForm } from "@/components/organisms/form/contact";
import { PDFDownloadLink } from "@/components/organisms/pdf";
import { Resume } from "@/components/organisms/pdf/resume";
import { Marquee } from "@/components/ui/marquee";
import { database } from "@/lib/data";
import { Download, Loader } from "lucide-react";

export const Hero = () => {
    return (
        <section className="relative flex h-dvh w-full flex-col justify-between md:justify-center">
            <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center gap-6 px-5 lg:px-0">
                <div className="flex items-center gap-3">
                    <span className="border-muted h-3 w-3 animate-pulse rounded-full border-2 bg-green-600" />
                    <p className="text-xs font-medium tracking-wide uppercase">
                        Available for new opportunities
                    </p>
                </div>
                <h1 className="text-center text-2xl leading-tight font-semibold tracking-tight md:text-6xl">
                    Hey, I&apos;m&nbsp;
                    <br className="block lg:hidden" />
                    <span className="text-primary font-fuzzy text-3xl md:text-7xl">
                        {database.name}
                    </span>
                    <br />
                    <span className="text-foreground">{database.role}</span>
                </h1>
                <p className="max-w-5xl text-center text-sm leading-7 md:text-lg">
                    With 5+ years of experience, I enjoy turning complex ideas
                    and requirements into clean, intuitive interfaces while
                    keeping the codebase structured, maintainable, and built to
                    grow.
                </p>
                <Social />
                <div className="mt-4 flex flex-col items-center justify-center gap-3 md:flex-row">
                    <ContactForm />
                    <PDFDownloadLink
                        document={<Resume resume={database} />}
                        fileName="sarahayunanda-ats-resume.pdf"
                        className="flex-1 sm:flex-none"
                    >
                        {({ loading }) => (
                            <TertiaryButton
                                className="group"
                                disabled={loading}
                            >
                                {loading ? "Downloading..." : "Get My Resume"}
                                {loading ? (
                                    <Loader className="animate-spin" />
                                ) : (
                                    <Download className="group-hover:animate-wiggle-more" />
                                )}
                            </TertiaryButton>
                        )}
                    </PDFDownloadLink>
                </div>
            </div>
            <div className="bg-accent/50 relative flex w-full px-0 md:absolute md:inset-x-0 md:bottom-0 md:overflow-hidden">
                <Marquee pauseOnHover className="[--duration:60s]">
                    {database["tech-stacks"].map((stack) => (
                        <Stack
                            key={stack.label}
                            stack={stack.label}
                            icon={stack.icon}
                        />
                    ))}
                </Marquee>
                <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r"></div>
                <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l"></div>
            </div>
        </section>
    );
};
