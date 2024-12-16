import type { Metadata } from 'next'
import Navbar from './Components/Navbar';
import { Poppins } from "next/font/google";
const pop = Poppins({ subsets: ['latin'],
  weight: ['400', '700'],
});
import './globals.css'
import Footer from './Components/Footer';


export const metadata: Metadata = {
  title: 'UI | UX ',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={pop.className}>
      <Navbar />
      {children}
      <Footer />
      </body>
    </html>
  )
}