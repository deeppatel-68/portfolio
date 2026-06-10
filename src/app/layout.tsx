import type { Metadata } from "next";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-kappa-nine-b19kcnl03e.vercel.app"),
  title: "Deep Patel — Software Engineering Graduate",
  description:
    "Brisbane-based Software Engineering graduate from QUT building practical tools across data, automation, geospatial systems, and AI.",
  openGraph: {
    title: "Deep Patel — Software Engineering Graduate",
    description:
      "Brisbane-based Software Engineering graduate from QUT building practical tools across data, automation, geospatial systems, and AI.",
    url: "/",
    siteName: "Deep Patel — Portfolio",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deep Patel — Software Engineering Graduate",
    description:
      "Brisbane-based Software Engineering graduate from QUT building practical tools across data, automation, geospatial systems, and AI.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
