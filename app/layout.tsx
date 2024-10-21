import type { Metadata } from "next";
import localFont from "next/font/local";
import { League_Spartan, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-league-spartan",
});

export const metadata: Metadata = {
  title: "Excelinsight | An Intelligent Data Insights Platform",
  description:
    "Streamline Financial Insights. Enhance financial predictions and decision-making with AI-powered data processing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${leagueSpartan.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
