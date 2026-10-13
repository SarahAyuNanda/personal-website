import { Styles } from "@react-pdf/renderer";

export type Style = Styles[string];

export interface HtmlTextProps {
    html: string;
    style?: Style;
}

export interface HtmlNode {
    tag?: string;
    text?: string;
    children: HtmlNode[];
}
