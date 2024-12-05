import type { Metadata } from "next";
import localFont from "next/font/local";

import Footer from "@/components/Footer";
import SmallHeader from "@/components/SmallHeader";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Salona Singh | The Strategy Studio",
  description:
    "Salona Singh is a strategic business consultant dedicated to helping businesses unlock their full potential and achieve lasting success.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/images/logo.png" type="image/png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        <SmallHeader />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
