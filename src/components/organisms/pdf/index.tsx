"use client";

import { TertiaryButton } from "@/components/atoms";
import { Font } from "@react-pdf/renderer";
import { Loader } from "lucide-react";
import dynamic from "next/dynamic";

Font.register({
    family: "Ubuntu",
    fonts: [
        {
            fontStyle: "normal",
            fontWeight: 400,
            src: "https://fonts.gstatic.com/s/ubuntu/v20/4iCs6KVjbNBYlgo6eA.ttf",
        },
        {
            fontStyle: "italic",
            fontWeight: 400,
            src: "https://fonts.gstatic.com/s/ubuntu/v20/4iCu6KVjbNBYlgoKeg7z.ttf",
        },
        {
            fontStyle: "normal",
            fontWeight: 700,
            src: "https://fonts.gstatic.com/s/ubuntu/v20/4iCv6KVjbNBYlgoCxCvTtw.ttf",
        },
    ],
});

Font.register({
    family: "Geist",
    fonts: [
        {
            fontStyle: "normal",
            fontWeight: 400,
            src: "https://fonts.gstatic.com/s/geist/v1/gyBhhwUxId8gMGYQMKR3pzfaWI_RnOM4nQ.ttf",
        },
        {
            fontStyle: "normal",
            fontWeight: 700,
            src: "https://fonts.gstatic.com/s/geist/v1/gyBhhwUxId8gMGYQMKR3pzfaWI_Re-Q4nQ.ttf",
        },
    ],
});

export const PDFViewer = dynamic(
    () => import("@react-pdf/renderer").then((m) => m.PDFViewer),
    { ssr: false, loading: () => <>Loading...</> }
);

export const PDFDownloadLink = dynamic(
    () => import("@react-pdf/renderer").then((m) => m.PDFDownloadLink),
    {
        ssr: false,
        loading: () => (
            <TertiaryButton disabled>
                Loading...
                <Loader className="animate-spin" />
            </TertiaryButton>
        ),
    }
);
