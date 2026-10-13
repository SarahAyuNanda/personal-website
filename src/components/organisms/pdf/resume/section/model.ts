import { ViewProps } from "@react-pdf/renderer";
import { PropsWithChildren } from "react";

export interface SectionProps extends PropsWithChildren<ViewProps> {
    title: string;
    compact?: boolean;
}
