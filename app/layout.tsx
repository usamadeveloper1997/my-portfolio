import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alex Rivera | Full Stack Developer",
  description:
    "Premium portfolio of Alex Rivera - Expert Full Stack Developer specializing in React, Next.js, Node.js, and cloud architecture. Building the future of web applications.",
  keywords: [
    "full stack developer",
    "web developer",
    "react developer",
    "next.js developer",
    "node.js developer",
    "portfolio",
    "alex rivera",
    "typescript",
    "javascript",
  ],
  authors: [{ name: "Alex Rivera" }],
  creator: "Alex Rivera",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alexrivera.dev",
    siteName: "Alex Rivera Portfolio",
    title: "Alex Rivera | Full Stack Developer",
    description:
      "Expert Full Stack Developer specializing in React, Next.js, Node.js, and cloud architecture. Building the future of web applications.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Alex Rivera - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Rivera | Full Stack Developer",
    description:
      "Expert Full Stack Developer specializing in React, Next.js, Node.js, and cloud architecture.",
    images: ["/og-image.jpg"],
    creator: "@alexrivera",
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${orbitron.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          <div className="relative min-h-screen">
            {/* Animated background elements - dark theme */}
            <div className="fixed inset-0 gradient-bg dark:opacity-100 opacity-0 transition-opacity duration-500" />
            <div className="fixed inset-0 mesh-gradient pointer-events-none dark:opacity-100 opacity-50 transition-opacity duration-500" />
            <div className="fixed inset-0 dot-pattern pointer-events-none dark:opacity-30 opacity-10 transition-opacity duration-500" />
            
            {/* Light theme background */}
            <div className="fixed inset-0 bg-white dark:opacity-0 opacity-100 transition-opacity duration-500" />
            
            {/* Floating orbs */}
            <div className="fixed top-20 left-10 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl animate-float pointer-events-none" />
            <div className="fixed bottom-20 right-10 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl animate-float pointer-events-none" style={{ animationDelay: "1s" }} />
            
            <Navigation />
            <main className="relative z-10 pt-20">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}