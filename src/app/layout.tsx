import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gambo Consultancy | Consulting & Innovation for Better Education",
  description: "Gambo Consultancy Services provides expert solutions, training, and support for schools, parents, and students to achieve educational excellence.",
  keywords: ["Consultancy", "Education", "IT Strategy", "Staff Recruitment", "Software Development", "Management Consultancy", "Nigeria", "OAU"],
  openGraph: {
    title: "Gambo Consultancy Services",
    description: "Expert solutions, training, and support for schools, parents, and students.",
    url: "https://gamboconsultancy.com",
    siteName: "Gambo Consultancy",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-[var(--primary)] selection:text-white`}>
        <Navbar />
        {children}
        <Footer />
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
