import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
  fallback: ["monospace"],
});

const SITE_URL = "https://promptgod.pro";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AI Master Prompt Generator - Buat Prompt Elite untuk Semua AI",
    template: "%s | AI Master Prompt Generator",
  },
  description:
    "Generator Master Prompt gratis untuk ChatGPT, Claude, Gemini, dan semua model AI. Buat prompt level elite dengan Chain of Thought, Expert Persona, dan Quality Gates. Hasilkan output AI yang lebih detail, spesifik, dan actionable.",
  keywords: [
    "AI prompt generator",
    "Master Prompt",
    "ChatGPT prompt",
    "Claude prompt",
    "Gemini prompt",
    "prompt engineering",
    "AI prompt terbaik",
    "cara membuat prompt AI",
    "prompt generator Indonesia",
    "AI tools Indonesia",
    "prompt ChatGPT Indonesia",
    "prompt Claude Indonesia",
    "master prompt AI",
    "elite prompt",
    "chain of thought prompt",
    "prompt engineering Indonesia",
    "generator prompt gratis",
    "AI prompt optimizer",
    "prompt template AI",
    "cara pakai ChatGPT",
  ],
  authors: [{ name: "AI Master Prompt Generator" }],
  creator: "AI Master Prompt Generator",
  publisher: "AI Master Prompt Generator",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_URL,
    siteName: "AI Master Prompt Generator",
    title: "AI Master Prompt Generator - Buat Prompt Elite untuk Semua AI",
    description:
      "Generator Master Prompt gratis untuk ChatGPT, Claude, Gemini. Buat prompt level elite yang menghasilkan output AI lebih detail dan spesifik.",
  },
  twitter: {
    card: "summary",
    title: "AI Master Prompt Generator - Buat Prompt Elite untuk Semua AI",
    description:
      "Generator Master Prompt gratis untuk ChatGPT, Claude, Gemini. Hasilkan output AI level expert.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta name="google-site-verification" content="eOePvsEyJClgkF7CgCxJvM4NvupiOcwQJwjr1xHZi44" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="min-h-screen flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-indigo-600 focus:text-white focus:rounded-lg"
        >
          Langsung ke konten utama
        </a>
        {children}
      </body>
    </html>
  );
}
