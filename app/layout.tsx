import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: "Abdulganiy Ibrahim - Software Developer | Laitech",
  description: "I build fast, modern, and scalable websites for businesses and startups using Next.js, React, and Tailwind CSS.",
  keywords: ['Abdulganiy Ibrahim', 'Laitech', 'FullStack Developer', 'Next.Js Developer', 'React Developer', 'Node.Js Developer']
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${inter.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
