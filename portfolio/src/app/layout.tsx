import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Manish Kunthoor | Full-Stack Developer",
  description:
    "Entry-level Full-Stack Developer with hands-on experience in Next.js, React, Node.js, and MongoDB. Specializing in scalable web applications, REST APIs, and responsive design.",
  keywords: [
    "Manish Kunthoor",
    "Full Stack Developer",
    "Next.js",
    "React Developer",
    "Node.js",
    "MongoDB",
    "Portfolio",
    "Web Developer",
  ],
  openGraph: {
    title: "Manish Kunthoor | Full-Stack Developer",
    description: "Full-Stack Developer | Next.js | React | Node.js | MongoDB",
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
      <body className="antialiased">{children}</body>
    </html>
  );
}
