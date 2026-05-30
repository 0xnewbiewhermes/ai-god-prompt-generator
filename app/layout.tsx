import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://ai-god-prompt.vercel.app";

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
    default: "AI God Prompt Generator - Buat Prompt Elite untuk Semua AI",
    template: "%s | AI God Prompt Generator",
  },
  description:
    "Generator God Prompt gratis untuk ChatGPT, Claude, Gemini, dan semua model AI. Buat prompt level elite dengan Chain of Thought, Expert Persona, dan Quality Gates. Hasilkan output AI yang lebih detail, spesifik, dan actionable.",
  keywords: [
    "AI prompt generator",
    "God Prompt",
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
  authors: [{ name: "AI God Prompt Generator" }],
  creator: "AI God Prompt Generator",
  publisher: "AI God Prompt Generator",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_URL,
    siteName: "AI God Prompt Generator",
    title: "AI God Prompt Generator - Buat Prompt Elite untuk Semua AI",
    description:
      "Generator God Prompt gratis untuk ChatGPT, Claude, Gemini. Buat prompt level elite yang menghasilkan output AI lebih detail dan spesifik.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI God Prompt Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI God Prompt Generator - Buat Prompt Elite untuk Semua AI",
    description:
      "Generator God Prompt gratis untuk ChatGPT, Claude, Gemini. Hasilkan output AI level expert.",
    images: ["/og-image.png"],
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
  verification: {
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  category: "technology",
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "AI God Prompt Generator",
  description:
    "Generator God Prompt gratis untuk ChatGPT, Claude, Gemini, dan semua model AI",
  url: SITE_URL,
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "IDR",
  },
  featureList: [
    "God Prompt Generator untuk ChatGPT",
    "God Prompt Generator untuk Claude",
    "God Prompt Generator untuk Gemini",
    "Chain of Thought Prompting",
    "Expert Persona Prompting",
    "Quality Gates Verification",
    "Output Terstruktur",
    "Bahasa Indonesia",
  ],
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
        <meta name="google-site-verification" content="8ho-Ft8hHuMcLCLP8D9BTO2MQjkx5SRls8GRqBAV-Mo" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
