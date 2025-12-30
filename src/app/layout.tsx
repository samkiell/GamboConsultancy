import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from 'react-hot-toast';
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gambo Consultancy | Expert Educational, IT & Leadership Consulting",
  description: "Empowering individuals, organizations, and educational institutions to achieve their full potential through expert consultancy in Education, IT, Leadership, Mentorship, and Life Coaching.",
  keywords: "consultancy, educational consulting, IT consulting, leadership development, mentorship, life coaching, Nigeria, professional development",
  authors: [{ name: "Gambo Consultancy" }],
  openGraph: {
    title: "Gambo Consultancy | Expert Consulting Services",
    description: "Transform your potential into excellence with our comprehensive consultancy services.",
    type: "website",
    locale: "en_NG",
    siteName: "Gambo Consultancy",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#333',
              color: '#fff',
            },
            success: {
              style: {
                background: '#28A745',
              },
            },
            error: {
              style: {
                background: '#dc3545',
              },
            },
          }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
