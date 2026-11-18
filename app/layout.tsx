import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import LenisProvider from "@/components/LenisProvider";

// Font mengikuti sistem Linework: Bricolage Grotesque (display) + DM Sans (body).
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  weight: ["400", "500", "600", "700", "800"],
});
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "700"],
});

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
    <html lang="id" suppressHydrationWarning>
      <body className={`${bricolage.variable} ${dmSans.variable} bg-paper font-sans text-ink antialiased`}>
        <LenisProvider>
          <Providers>
            <main>{children}</main>
          </Providers>
        </LenisProvider>
      </body>
    </html>
  );
}
