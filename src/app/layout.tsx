import { RootTemplate } from "@/components/templates";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Sarah Ayu Nanda | Portfolio",
  description:
    "",
};

if (typeof window !== "undefined") {
  if (typeof window !== "undefined") {
    window.addEventListener("unhandledrejection", (event) => {
      console.error("Unhandled promise rejection:", event.reason);
      event.preventDefault();
    });

    window.addEventListener("error", (event) => {
      console.error("Global error handler:", event);
      event.preventDefault();
    });
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} h-full w-full font-poppins antialiased`}
      suppressHydrationWarning
    >
      <body>
        <RootTemplate>{children}</RootTemplate>
      </body>
    </html>
  );
}