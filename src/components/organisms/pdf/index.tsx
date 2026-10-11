'use client'

import { TertiaryButton } from "@/components/atoms"
import { Loader } from "lucide-react"
import dynamic from "next/dynamic"

export const PDFViewer = dynamic(
    () => import("@react-pdf/renderer").then(m => m.PDFViewer),
    { ssr: false, loading: () => <>Loading...</> }
)

export const PDFDownloadLink = dynamic(
    () => import("@react-pdf/renderer").then(m => m.PDFViewer),
    {
        ssr: false,
        loading: () => (
            <TertiaryButton disabled>
                Loading...
                <Loader className='animate-spin' />
            </TertiaryButton>
        ),
    },
)