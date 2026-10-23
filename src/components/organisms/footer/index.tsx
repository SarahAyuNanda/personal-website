import { BrandIcon } from "@/components/atoms";
import { database } from "@/lib/data";
import { currentYear } from "@/lib/date";

export const Footer = () => {
    return (
        <footer className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-6 px-5 pt-10 pb-16 md:flex-row md:px-8">
            <p className="text-muted-foreground text-xs">
                &copy; {currentYear()}&nbsp;
                <span className="font-fuzzy text-foreground font-bold">
                    {database.name}
                </span>
            </p>
            <ul className="flex items-center gap-5">
                {database.profiles.map((profile) => (
                    <li key={profile.id}>
                        <a
                            href={profile.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={profile.network}
                        >
                            <BrandIcon
                                icon={profile.icon}
                                className="fill-muted-foreground hover:fill-foreground size-4 transition-colors duration-150 ease-in-out"
                            />
                        </a>
                    </li>
                ))}
            </ul>
        </footer>
    );
};
