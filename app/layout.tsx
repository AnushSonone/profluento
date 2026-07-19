import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--geist-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--geist-mono" });

export const metadata: Metadata = {
  metadataBase: new URL("https://profluento.dev"),
  title: "Profluento — AI-Powered CRM for Wealth Managers",
  description: "Discover high-potential prospects, prepare personalized outreach, and manage client relationships with Profluento’s AI-powered wealth-management CRM.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Profluento — AI-Powered CRM for Wealth Managers",
    description: "Lead intelligence, AI-assisted outreach, and relationship management in one modern workspace for wealth managers and RIAs.",
    url: "https://profluento.dev",
    siteName: "Profluento",
    type: "website",
  },
  icons: { icon: "/assets/images/logo.svg", shortcut: "/assets/images/logo.svg", apple: "/assets/images/logo.svg" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#07090d",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans">{children}<Analytics /></body>
    </html>
  );
}
