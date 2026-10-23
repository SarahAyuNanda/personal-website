export const formatDate = (d: string) =>
    new Date(d).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
    });

export const renderDates = (start: string, end?: string | null) =>
    `${formatDate(start)} - ${end ? formatDate(end) : "Present"}`;

export const yearsSinceStart = () => {
    const pastDate = new Date("2020-11-16T07:00:00.000Z");
    const currentDate = new Date();
    return currentDate.getFullYear() - pastDate.getFullYear();
};

export const currentYear = () => new Date().getFullYear();
