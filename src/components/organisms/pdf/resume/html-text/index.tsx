import {
    HtmlNode,
    HtmlTextProps,
    Style,
} from "@/components/organisms/pdf/resume/html-text/model";
import { Text } from "@react-pdf/renderer";
import { ReactNode } from "react";

const tagStyles: Record<string, Style> = {
    strong: { fontWeight: 700 },
    b: { fontWeight: 700 },
    em: { fontStyle: "italic" },
    i: { fontStyle: "italic" },
    u: { textDecoration: "underline" },
};

const decodeEntities = (text: string) =>
    text
        .replace(/&nbsp;/g, " ")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/&#39;|&apos;/g, "'")
        .replace(/&amp;/g, "&");

const parse = (html: string): HtmlNode[] => {
    const root: HtmlNode = { children: [] };
    const stack: HtmlNode[] = [root];
    const tokenRegex = /<\/?([a-zA-Z0-9]+)[^>]*?(\/?)>|([^<]+)/g;
    let match: RegExpExecArray | null;

    while ((match = tokenRegex.exec(html)) !== null) {
        const [token, tagName, selfClosing, text] = match;
        const parent = stack[stack.length - 1];

        if (text !== undefined) {
            parent.children.push({ text: decodeEntities(text), children: [] });
            continue;
        }

        const tag = tagName.toLowerCase();
        if (tag === "br") {
            parent.children.push({ text: "\n", children: [] });
        } else if (token.startsWith("</")) {
            const index = stack.findLastIndex((node) => node.tag === tag);
            if (index > 0) stack.length = index;
        } else if (!selfClosing) {
            const node: HtmlNode = { tag, children: [] };
            parent.children.push(node);
            stack.push(node);
        }
    }

    return root.children;
};

const renderNodes = (nodes: HtmlNode[]): ReactNode[] =>
    nodes.map((node, index) =>
        node.tag === undefined ? (
            node.text
        ) : (
            <Text key={index} style={tagStyles[node.tag]}>
                {renderNodes(node.children)}
            </Text>
        )
    );

export const HtmlText = ({ html, style }: HtmlTextProps) => {
    return <Text style={style}>{renderNodes(parse(html))}</Text>;
};
