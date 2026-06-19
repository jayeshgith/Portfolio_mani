import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AntigravityBackground } from "./components/AntigravityEffects";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Manish Kunthoor | AI Engineer",
  description:
    "AI Engineer and Prompt Engineer specializing in PyTorch, Ollama OCR, FastAPI, and React. Experienced in building intelligent systems, prompt optimization, and AI document extraction solutions.",
  keywords: [
    "Manish Kunthoor",
    "AI Engineer",
    "Prompt Engineer",
    "Ollama OCR",
    "DocVerse AI",
    "FastAPI",
    "PyTorch",
    "Portfolio"
  ],
  openGraph: {
    title: "Manish Kunthoor | AI Engineer",
    description: "AI Engineer | Prompt Engineer | PyTorch | Ollama OCR | FastAPI",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className="antialiased">
        <div className="noise-overlay" />
        <AntigravityBackground />
        {children}
      </body>
    </html>
  );
}
