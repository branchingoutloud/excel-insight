import type { Metadata } from "next";
import localFont from "next/font/local";
import { League_Spartan, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-league-spartan",
});

export const metadata: Metadata = {
  title: "ExcelInsights",
  description: "Get insights from your excel data",
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
      </body>
    </html>
  );
}
