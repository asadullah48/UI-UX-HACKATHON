import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

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
  title: {
    default: "UI-UX HACKATHON-TEMPLATE 0",
    template: "%s | HACKATHON TEMPLATE"
  },
  description: "Innovative UI/UX template for hackathon projects",
  keywords: ["nextjs", "ui", "ux", "template", "hackathon"],
  openGraph: {
    title: "UI-UX HACKATHON-TEMPLATE 0",
    description: "Innovative UI/UX template",
    images: ['/og-image.png']
  },
  robots: {
    index: true,
    follow: true
  }
};export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          antialiased 
          min-h-screen 
          flex 
          flex-col
        `}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
