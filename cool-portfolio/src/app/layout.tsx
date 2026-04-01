import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import type { ReactNode } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arun Kumar A — AI Engineer",
  description:
    "Final-year B.Tech AI student building production-grade GenAI systems, RAG pipelines, and intelligent agents. Open to opportunities.",
  metadataBase: new URL("https://my-portfolio-purplecolor.vercel.app"),
  openGraph: {
    title: "Arun Kumar A — AI Engineer",
    description:
      "Building production-grade GenAI systems, RAG pipelines, and AI agents. Final-year B.Tech AI student open to opportunities.",
    url: "https://my-portfolio-purplecolor.vercel.app",
    siteName: "Arun Kumar A",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Arun Kumar A — AI Engineer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arun Kumar A — AI Engineer",
    description:
      "Building production-grade GenAI systems, RAG pipelines, and AI agents.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  keywords: [
    "AI Engineer",
    "GenAI",
    "RAG",
    "LLM",
    "AI Agents",
    "Python",
    "Portfolio",
    "Arun Kumar",
  ],
  authors: [{ name: "Arun Kumar A" }],
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
