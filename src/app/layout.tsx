import type { Metadata } from "next";
import { Geist_Mono, Manrope, Sora } from "next/font/google";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { siteConfig } from "@/content/site";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Frans Budi Kashira - Flutter Mobile Developer",
    template: "%s | Frans Budi Kashira",
  },
  description: siteConfig.description,
  keywords: [
    "Frans Budi Kashira",
    "Flutter Developer",
    "Mobile Developer",
    "Fintech App Developer",
    "Next.js",
    "Firebase",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    title: "Frans Budi Kashira - Flutter Mobile Developer",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [{ url: "/media/og-portfolio.webp", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frans Budi Kashira - Flutter Mobile Developer",
    description: siteConfig.description,
    images: ["/media/og-portfolio.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${sora.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
