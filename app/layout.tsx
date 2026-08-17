import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dwi Mahdini",
  description: "Dwi Mahdini | Developer",
};

import { Providers } from "@/components/Providers";

import LenisProvider from "@/components/LenisProvider";
import MatrixBackground from "@/components/MatrixBackground";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${inter.className} bg-gray-50 dark:bg-[#050505] text-gray-900 dark:text-gray-200 antialiased selection:bg-cyan-500/30 selection:text-cyan-200 transition-colors duration-300`}>
        <LenisProvider>
          <Providers>
            <MatrixBackground />
            <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24 space-y-8 relative">
              {children}
            </main>
          </Providers>
        </LenisProvider>
      </body>
    </html>
  );
}
