import { Highlighter } from "@/components/ui/highlighter";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { database } from "@/lib/data";
import { yearsSinceStart } from "@/lib/date";
import Image from "next/image";

export const Expertise = () => {
    return (
        <section
            id="expertise"
            className="mx-auto flex min-h-dvh w-full max-w-7xl flex-1 flex-col items-center justify-center gap-10 px-5 pt-32 pb-16 md:px-8 lg:h-dvh lg:pt-80 lg:pb-40"
        >
            <div className="flex flex-col items-center gap-4">
                <div className="flex items-center gap-3">
                    <p className="text-xs font-medium tracking-wide uppercase">
                        <Highlighter
                            action="highlight"
                            color="rgba(192, 57, 43, 0.25)"
                            isView
                        >
                            What I do best
                        </Highlighter>
                    </p>
                </div>
                <h2 className="text-center text-2xl leading-tight font-semibold tracking-tight md:text-4xl">
                    Products that work, <br />
                    <span className="text-primary font-fuzzy text-3xl md:text-5xl">
                        delivered with care
                    </span>
                </h2>
                <p className="max-w-3xl text-center text-sm leading-7 md:text-base">
                    I build web applications that teams can rely on every day
                    <br />
                    clear to use, stable when it matters, and structured so
                    they&apos;re easy to grow and maintain
                </p>
            </div>

            <div className="grid min-h-0 flex-1 grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
                <div className="relative mb-10 flex h-80 items-center justify-center sm:h-96 lg:mb-0 lg:h-full">
                    <div className="group/visual relative aspect-4/5 h-full">
                        <div className="from-tertiary/70 via-tertiary to-tertiary ring-tertiary/30 ring-offset-background absolute bottom-0 aspect-square w-full overflow-hidden rounded-full bg-linear-to-b shadow-[0_24px_60px_-20px_rgba(15,23,42,0.25)] ring-2 ring-offset-4">
                            <div className="bg-accent/50 absolute bottom-0 left-1/2 aspect-square w-3/4 -translate-x-1/2 translate-y-1/3 rounded-full blur-3xl" />
                        </div>

                        <div className="absolute inset-0 overflow-hidden rounded-b-full">
                            <Image
                                src="/sarah.png"
                                alt={database.name}
                                fill
                                sizes="(min-width: 1024px) 450px, 320px"
                                className="origin-bottom scale-125 object-contain object-bottom"
                            />
                        </div>

                        <ShimmerButton className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 cursor-default items-center gap-2 rounded-full px-4 py-2 text-xs font-medium whitespace-nowrap shadow-xl backdrop-blur-sm lg:top-[30%] lg:bottom-auto lg:-left-10 lg:translate-x-0">
                            <span className="relative flex size-2">
                                <span className="absolute inline-flex size-full rounded-full bg-green-500 opacity-75 motion-safe:animate-ping" />
                                <span className="relative inline-flex size-2 rounded-full bg-green-600" />
                            </span>
                            Open to new projects
                        </ShimmerButton>

                        <ShimmerButton className="motion-safe:animate-float absolute -right-6 bottom-12 hidden cursor-default items-center gap-3 rounded-full px-4 py-2 shadow-xl backdrop-blur-sm lg:-right-8 lg:flex">
                            <span className="font-fuzzy text-tertiary text-xl font-bold">
                                {yearsSinceStart()}+
                            </span>
                            <span className="text-xs leading-1 font-medium">
                                years experience
                            </span>
                        </ShimmerButton>

                        <p className="absolute top-full left-1/2 mt-7 flex -translate-x-1/2 items-baseline gap-1.5 text-xs font-medium whitespace-nowrap lg:hidden">
                            <span className="font-fuzzy text-primary text-xl font-bold">
                                {yearsSinceStart()}+
                            </span>
                            years experience
                        </p>
                    </div>
                </div>

                <ul className="flex flex-col gap-1">
                    {database.expertise.map(({ title, description }, index) => (
                        <li
                            key={title}
                            className="group flex items-center gap-4 rounded-2xl p-4 transition-all duration-200 ease-in-out"
                        >
                            <span className="font-fuzzy text-primary/25 group-hover:text-primary text-xl font-bold transition-all duration-200 ease-in-out">
                                {String(index + 1).padStart(2, "0")}
                            </span>
                            <div className="flex flex-1 flex-col gap-0.5">
                                <h3 className="group-hover:text-primary text-base font-semibold tracking-tight transition-all duration-200 ease-in-out">
                                    {title}
                                </h3>
                                <p className="text-muted-foreground text-sm leading-6">
                                    {description}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};
