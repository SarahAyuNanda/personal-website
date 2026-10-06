import { Header, Hero } from "@/components/organisms";

export default function MainPage() {
    return (
        <div className="relative w-full min-h-screen bg-background bg-[radial-gradient(circle,rgba(71,85,105,0.14)_0.9px,transparent_1.5px)] bg-size-[20px_20px] dark:bg-[radial-gradient(circle,rgba(148,163,184,0.12)_0.9px,transparent_1.5px)]">
            <Header />

            <main className="mx-auto flex w-full flex-col gap-4 px-5 md:px-8">
                <Hero />
                {/* <AnimatedSection
                    id="about"
                    title="About Me"
                    className="bg-card/35"
                >
                    <p className="max-w-3xl leading-7 text-muted">{about}</p>
                </AnimatedSection> */}
                {/* 
                <AnimatedSection
                    id="work"
                    title="My Work"
                    className="bg-card/30"
                >
                    <div data-stagger className="grid gap-4 md:grid-cols-3">
                        {works.map((work) => (
                            <article
                                key={work.title}
                                data-tilt
                                className="rounded-lg border border-border/60 bg-card/60 p-4 transition hover:-translate-y-1 hover:border-foreground/30"
                            >
                                <h3 className="mb-2 font-semibold">{work.title}</h3>
                                <p className="text-sm leading-6 text-muted">{work.description}</p>
                            </article>
                        ))}
                    </div>
                </AnimatedSection> */}

                {/* <AnimatedSection
                    id="experience"
                    title="Work Experience Timeline"
                    className="bg-card/25"
                >
                    <TimelineExperience items={experiences} />
                </AnimatedSection> */}

                {/* <AnimatedSection
                    id="projects"
                    title="Project Timeline"
                    className="bg-card/20"
                >
                    <TimelineProjects items={projects} />
                </AnimatedSection> */}

                {/* <AnimatedSection
                    id="skills"
                    title="Skills"
                    className="bg-card/15"
                >
                    <div data-stagger className="flex flex-wrap gap-2">
                        {skills.map((skill) => (
                            <span
                                key={skill}
                                className="rounded-full border border-border/60 bg-card/70 px-3 py-1.5 text-sm"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </AnimatedSection> */}

                {/* <AnimatedSection
                    id="contact"
                    title="Contact"
                    className="bg-card/25"
                >
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-muted">Let&apos;s Talk</p>
                            <p className="max-w-2xl leading-7 text-muted">
                                Share your idea, timeline, and goals. I&apos;ll reply through email with next
                                steps.
                            </p>
                            <p className="text-sm text-muted">
                                {email} • {phone} • {location}
                            </p>
                        </div>
                        <form
                            action={`mailto:${email}`}
                            method="post"
                            encType="text/plain"
                            className="space-y-4"
                        >
                            <div className="grid gap-4 sm:grid-cols-2">
                                <label className="space-y-1.5 text-sm">
                                    <span className="font-medium text-foreground">Your Name</span>
                                    <input
                                        name="name"
                                        type="text"
                                        required
                                        placeholder="Sarah Ayu Nanda"
                                        className="w-full border-b border-border/70 bg-transparent px-0 py-2.5 text-sm outline-none transition focus:border-foreground/60"
                                    />
                                </label>
                                <label className="space-y-1.5 text-sm">
                                    <span className="font-medium text-foreground">Your Email</span>
                                    <input
                                        name="from"
                                        type="email"
                                        required
                                        placeholder="you@email.com"
                                        className="w-full border-b border-border/70 bg-transparent px-0 py-2.5 text-sm outline-none transition focus:border-foreground/60"
                                    />
                                </label>
                            </div>

                            <label className="space-y-1.5 text-sm">
                                <span className="font-medium text-foreground">Subject</span>
                                <input
                                    name="subject"
                                    type="text"
                                    required
                                    placeholder="Project inquiry"
                                    className="w-full border-b border-border/70 bg-transparent px-0 py-2.5 text-sm outline-none transition focus:border-foreground/60"
                                />
                            </label>

                            <label className="space-y-1.5 text-sm">
                                <span className="font-medium text-foreground">Project Details</span>
                                <textarea
                                    name="message"
                                    required
                                    rows={6}
                                    placeholder="Tell me about your project, scope, and expected timeline..."
                                    className="w-full border-b border-border/70 bg-transparent px-0 py-2.5 text-sm outline-none transition focus:border-foreground/60"
                                />
                            </label>

                            <div className="flex flex-wrap items-center justify-between gap-3">
                                <p className="text-xs text-muted">
                                    Submit opens your mail app with the message prefilled.
                                </p>
                                <button
                                    type="submit"
                                    className="rounded-md bg-foreground px-4 py-2 text-sm font-semibold text-background transition hover:opacity-90"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </AnimatedSection> */}

                <footer className="pb-4 pt-2 text-center text-sm text-muted">
                    Built with Next.js, TypeScript, Tailwind CSS, and GSAP.
                </footer>
            </main>
        </div>
    );
}

// interface TimelineExperienceProps {
//     items: ExperienceItem[];
// }

// function TimelineExperience({ items }: TimelineExperienceProps) {
//     return (
//         <div className="relative ml-2 space-y-8 border-l border-border/50 pl-6">
//             {items.map((experience) => (
//                 <article key={`${experience.company}-${experience.period}`} className="relative py-1 pl-1">
//                     <span className="absolute left-[-31px] top-7 h-3 w-3 rounded-full bg-foreground" />
//                     <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
//                         {experience.period}
//                     </p>
//                     <h3 className="mt-1 font-semibold">
//                         {experience.role} - {experience.company}
//                     </h3>
//                     <p className="mt-2 text-sm leading-6 text-muted">{experience.impact}</p>
//                 </article>
//             ))}
//         </div>
//     );
// }

// interface TimelineProjectsProps {
//     items: ProjectItem[];
// }

// function TimelineProjects({ items }: TimelineProjectsProps) {
//     return (
//         <div className="relative ml-2 space-y-8 border-l border-border/50 pl-6">
//             {items.map((project) => (
//                 <article key={project.title} className="relative py-1 pl-1">
//                     <span className="absolute left-[-31px] top-7 h-3 w-3 rounded-full bg-foreground" />
//                     <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
//                         {project.period}
//                     </p>
//                     <h3 className="mt-1 font-semibold">{project.title}</h3>
//                     <p className="mt-2 text-sm leading-6 text-muted">{project.summary}</p>
//                     <p className="mt-2 text-xs text-muted">{project.stack.join(" • ")}</p>
//                     <a
//                         href={project.link}
//                         target="_blank"
//                         rel="noreferrer"
//                         className="mt-2 inline-flex text-sm font-medium underline-offset-4 hover:underline"
//                     >
//                         Explore project
//                     </a>
//                 </article>
//             ))}
//         </div>
//     );
// }
