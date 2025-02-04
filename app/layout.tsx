import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "./_components/shared/Header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

// Metadata for SEO & Branding
export const metadata: Metadata = {
  title: "Sudhi S. | Software Developer",
  description:
    "Portfolio of Sudhi S. - MERN Stack Developer specializing in full-stack web applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${plexMono.variable} antialiased  bg-primary text-[#a1a6ac]`}>
      <Header/>

        {children}
      </body>
    </html>
  );
}
