import type { Metadata, Viewport } from "next";
import { Geist, Outfit, Plus_Jakarta_Sans } from "next/font/google";
import { SmoothScroll } from "@/components/SmoothScroll";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { TouchPress } from "@/components/TouchPress";
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

const SITE_DESCRIPTION =
  "Acquila supports organisations across management system and industry standards with practical implementation, training, and readiness support.";

export const metadata: Metadata = {
  // Absolute base for the share-image URL. Set NEXT_PUBLIC_SITE_URL to the
  // live domain at deploy time; the fallback assumes the email's domain.
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://acquilacert.com"),
  title: "Acquila — Certification & Management System Support",
  description: SITE_DESCRIPTION,
  // og:image and twitter:image come from app/opengraph-image.tsx.
  openGraph: {
    type: "website",
    siteName: "Acquila",
    title: "Acquila — Certification & Management System Support",
    description: SITE_DESCRIPTION,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Acquila — Certification & Management System Support",
    description: SITE_DESCRIPTION,
  },
};

// Phones lay the page out at their own width instead of a zoomed-out desktop canvas.
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${jakarta.variable} ${outfit.variable} h-full`}
    >
      <body className="min-h-full">
        <SmoothScroll />
        <RevealOnScroll />
        <TouchPress />
        {children}
      </body>
    </html>
  );
}
