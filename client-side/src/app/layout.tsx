import type { Metadata } from "next";
import { Geist, Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

// The three families the Figma file uses.
const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "600"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "Acquila — Certification & Management System Support",
  description:
    "Acquila supports organisations across management system and industry standards with practical implementation, training, and readiness support.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${jakarta.variable} ${outfit.variable} h-full`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
