import { RootTemplate } from "@/components/templates";
import type { Metadata } from "next";
import { Fuzzy_Bubbles, Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { database } from "@/lib/data";

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

const fuzzy = Fuzzy_Bubbles({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  variable: "--font-fuzzy",
})

export const metadata: Metadata = {
  title: database.name,
  description: database.headline,
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
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${fuzzy.variable} h-full w-full font-poppins antialiased`}
      suppressHydrationWarning
    >
      <body>
        <RootTemplate>{children}</RootTemplate>
      </body>
    </html>
  );
}