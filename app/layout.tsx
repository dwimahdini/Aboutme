import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import LenisProvider from "@/components/LenisProvider";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Dwi Mahdini, S.T. — Web Developer & AI Engineering",
  description:
    "Portfolio Dwi Mahdini: Web Developer (Next.js, Laravel) dan AI Engineering (Hybrid RAG, chatbot, Machine Learning) dari Pekanbaru, Riau. S1 Teknik Informatika UIN Suska Riau, jurnal JUPTIK terpublikasi.",
  openGraph: {
    title: "Dwi Mahdini, S.T. — Web Developer & AI Engineering",
    description:
      "Next.js · Laravel · Hybrid RAG · Machine Learning — Pekanbaru, Riau.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${dmSans.variable} ${playfair.variable} bg-cream font-sans text-ink antialiased`}>
        <LenisProvider>
          <Providers>
            <main>{children}</main>
          </Providers>
        </LenisProvider>
      </body>
    </html>
  );
}
