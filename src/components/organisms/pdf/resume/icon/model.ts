import { FC } from "react";

const icons = ["at", "link", "location", "calendar", "dot", "phone"] as const;

export type IconName = (typeof icons)[number];
export type IconMap = { [key in IconName]: FC<{ color: string }> };

export interface IconProps {
    name: IconName;
    size?: number;
    color?: string;
}
