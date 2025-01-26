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
  title: "UI-UX HACKATHON-TEMPLATE 0",
  description: "Generated by create next app",
};


