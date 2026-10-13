import { IconName } from "@/components/organisms/pdf/resume/icon/model";

type Type = "text" | "link";

export interface IconTextProps {
    icon: IconName;
    text: string;
    type?: Type;
    label?: string;
    color?: string;
}
