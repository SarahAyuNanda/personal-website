import { Header, Hero } from "@/components/organisms";

export default function MainPage() {
    return (
        <div className="relative w-full min-h-screen bg-background bg-[radial-gradient(circle,rgba(71,85,105,0.14)_0.9px,transparent_1.5px)] bg-size-[20px_20px] dark:bg-[radial-gradient(circle,rgba(148,163,184,0.12)_0.9px,transparent_1.5px)]">
            <Header />

            <main className="mx-auto flex w-full flex-col gap-4 px-5 lg:px-0">
                <Hero />
            </main>
        </div>
    );
}