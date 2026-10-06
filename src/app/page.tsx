import { Header } from "@/components/organisms";
import { AnimatedSection } from "@/components/portfolio/animated-section";
import {
    type ExperienceItem,
    type ProjectItem,
    portfolioData,
} from "@/components/portfolio/data";

export default function MainPage() {
    const { about, email, experiences, headline, location, name, phone, profiles, projects, skills, works } =
        portfolioData;
    const [firstName, middleName, lastName] = name.split(" ");

    return (
        <div className="relative min-h-screen bg-background bg-[radial-gradient(circle,rgba(71,85,105,0.14)_0.9px,transparent_1.5px)] bg-size-[20px_20px] dark:bg-[radial-gradient(circle,rgba(148,163,184,0.12)_0.9px,transparent_1.5px)]">
            <Header />

            <main className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-5 md:px-8">
                <section
                    id="home"
                    className="hero-card relative flex h-dvh flex-col overflow-hidden pt-20 md:pt-24"
                >
                    <div className="mx-auto grid min-h-0 w-full max-w-7xl flex-1 grid-rows-[1fr_auto] gap-8 pb-6 md:grid-cols-[1.05fr_0.95fr] md:grid-rows-1 md:items-stretch md:pb-10">
                        <div className="flex min-h-0 flex-col justify-center space-y-6">
                            <div data-hero-item className="flex items-center gap-3">
                                <span className="h-px w-10 bg-border/70" />
                                <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted">
                                    Available for new opportunities
                                </p>
                            </div>
                            <h1
                                data-hero-item
                                className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl"
                            >
                                Hey, I&apos;m {firstName}{" "}
                                <span className="text-tertiary">
                                    {middleName} {lastName}
                                </span>
                                <br />
                                <span className="bg-linear-to-r from-foreground to-muted bg-clip-text text-transparent">
                                    A Frontend Developer
                                </span>
                            </h1>
                            <p data-hero-item className="max-w-xl text-base leading-7 text-muted md:text-lg">
                                {headline}. A fullstack developer with solid foundations in design, passionate about
                                crafting seamless user experiences where creativity meets functionality.
                            </p>
                            <p data-hero-item className="text-sm text-muted">
                                {location} - {phone} - {email}
                            </p>
                            <div className="flex flex-wrap items-center gap-3">
                                <a
                                    data-cta
                                    className="rounded-md bg-foreground px-4 py-2 text-sm font-semibold text-background transition hover:opacity-90"
                                    href="#contact"
                                >
                                    Contact Me
                                </a>
                                <a
                                    data-cta
                                    className="rounded-md border border-border/60 px-4 py-2 text-sm font-semibold transition hover:bg-foreground/5"
                                    href="#projects"
                                >
                                    View Projects
                                </a>
                                <a
                                    data-cta
                                    className="rounded-md border border-border/60 px-4 py-2 text-sm font-semibold transition hover:bg-foreground/5"
                                    href="/cv"
                                    download
                                >
                                    Download CV
                                </a>
                            </div>
                            <div data-hero-item className="flex flex-wrap gap-4 text-sm text-muted">
                                {profiles.map((profile) => (
                                    <a
                                        key={profile}
                                        href={profile}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="underline-offset-4 transition hover:text-foreground hover:underline"
                                    >
                                        {profile.includes("linkedin") ? "LinkedIn" : "GitHub"}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col justify-end md:min-h-0">
                            <div
                                data-hero-item
                                className="relative isolate mx-auto h-152 w-88 md:h-208 md:w-120"
                            >
                                {/* <Image
                  src="/sarah.png"
                  alt="Sarah Ayu Nanda"
                  fill
                  sizes="(max-width: 768px) 400px, 720px"
                  className="object-contain object-bottom"
                  priority
                /> */}
                            </div>
                        </div>
                    </div>
                </section>

                <AnimatedSection
                    id="about"
                    title="About Me"
                    className="bg-card/35"
                >
                    <p className="max-w-3xl leading-7 text-muted">{about}</p>
                </AnimatedSection>

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
                </AnimatedSection>

                <AnimatedSection
                    id="experience"
                    title="Work Experience Timeline"
                    className="bg-card/25"
                >
                    <TimelineExperience items={experiences} />
                </AnimatedSection>

                <AnimatedSection
                    id="projects"
                    title="Project Timeline"
                    className="bg-card/20"
                >
                    <TimelineProjects items={projects} />
                </AnimatedSection>

                <AnimatedSection
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
                </AnimatedSection>

                <AnimatedSection
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
                </AnimatedSection>

                <footer className="pb-4 pt-2 text-center text-sm text-muted">
                    Built with Next.js, TypeScript, Tailwind CSS, and GSAP.
                </footer>
            </main>
        </div>
    );
}

interface TimelineExperienceProps {
    items: ExperienceItem[];
}

function TimelineExperience({ items }: TimelineExperienceProps) {
    return (
        <div className="relative ml-2 space-y-8 border-l border-border/50 pl-6">
            {items.map((experience) => (
                <article key={`${experience.company}-${experience.period}`} className="relative py-1 pl-1">
                    <span className="absolute left-[-31px] top-7 h-3 w-3 rounded-full bg-foreground" />
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                        {experience.period}
                    </p>
                    <h3 className="mt-1 font-semibold">
                        {experience.role} - {experience.company}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted">{experience.impact}</p>
                </article>
            ))}
        </div>
    );
}

interface TimelineProjectsProps {
    items: ProjectItem[];
}

function TimelineProjects({ items }: TimelineProjectsProps) {
    return (
        <div className="relative ml-2 space-y-8 border-l border-border/50 pl-6">
            {items.map((project) => (
                <article key={project.title} className="relative py-1 pl-1">
                    <span className="absolute left-[-31px] top-7 h-3 w-3 rounded-full bg-foreground" />
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                        {project.period}
                    </p>
                    <h3 className="mt-1 font-semibold">{project.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted">{project.summary}</p>
                    <p className="mt-2 text-xs text-muted">{project.stack.join(" • ")}</p>
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2 inline-flex text-sm font-medium underline-offset-4 hover:underline"
                    >
                        Explore project
                    </a>
                </article>
            ))}
        </div>
    );
}
