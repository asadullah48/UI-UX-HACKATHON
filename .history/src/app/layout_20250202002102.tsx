import type { Metadata } from "next";
import localFont from "next/font/local";
import { ErrorBoundary } from 'react-error-boundary';
import { ThemeProvider } from 'next-themes';
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
  preload: true,
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "UI-UX HACKATHON-TEMPLATE 0",
    template: "%s | HACKATHON TEMPLATE",
  },
  description: "Innovative UI/UX template for hackathon projects",
  keywords: ["nextjs", "ui", "ux", "template", "hackathon"],
  openGraph: {
    title: "UI-UX HACKATHON-TEMPLATE 0",
    description: "Innovative UI/UX template",
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  themeColor: "#ffffff",
  twitter: {
    card: "summary_large_image",
  },
};

function ErrorFallback({ error }) {
  return (
    <div>
      <h2>Something went wrong</h2>
      <p>{error.message}</p>
    </div>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <a href="#main-content" className="sr-only focus:not-sr-only">
              Skip to content
            </a>
            <Header />
            <main id="main-content" className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8">
              {children}
            </main>
            <Footer />
          </ErrorBoundary>
        </ThemeProvider>
      </body>
    </html>
  );
}