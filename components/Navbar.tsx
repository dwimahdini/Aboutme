"use client";

import { useEffect, useState } from "react";
import { Menu, X, Download, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useLanguage } from "./Providers";

// Header ala Linework: kertas, garis bawah tebal 3px, logo kotak
// kuning matahari dengan bayangan keras, tautan bergaris bawah tomat.
export default function Navbar() {
  const { t, language, setLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#skills", label: t.nav.skills },
    { href: "#experience", label: t.nav.experience },
    { href: "#projects", label: t.nav.projects },
    { href: "#publications", label: t.nav.publications },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b-[3px] border-ink bg-paper/95 backdrop-blur-[10px]">
      <div className="mx-auto flex min-h-[76px] w-full max-w-[1240px] items-center justify-between gap-6 px-5">
        <a href="#about" className="flex min-w-max items-center gap-3">
          <span className="grid h-[42px] w-[42px] place-items-center rounded-[10px] border-[3px] border-ink bg-sun font-display text-[15px] font-extrabold tracking-tight text-ink shadow-lw-sm">
            DM
          </span>
          <span className="grid gap-[2px]">
            <span className="font-display text-[17px] font-extrabold leading-none text-ink">Dwi Mahdini</span>
            <small className="text-[8px] font-bold tracking-[1.6px] text-muted">
              WEB DEVELOPER · AI ENGINEERING
            </small>
          </span>
        </a>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Navigasi utama">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-[13px] font-bold text-ink/80 underline decoration-tomato decoration-[3px] underline-offset-[6px] transition-colors hover:text-ink hover:decoration-cobalt"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="grid h-[40px] w-[40px] place-items-center rounded-[10px] border-[3px] border-ink bg-art text-ink shadow-lw-sm transition-transform hover:-translate-y-0.5"
            title={mounted && theme === "dark" ? "Mode terang / Light mode" : "Mode gelap / Dark mode"}
            aria-label="Ganti tema gelap / terang"
          >
            {mounted && theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            onClick={() => setLanguage(language === "id" ? "en" : "id")}
            className="grid h-[40px] min-w-[40px] place-items-center rounded-[10px] border-[3px] border-ink bg-art px-2 text-[12px] font-bold text-ink shadow-lw-sm transition-transform hover:-translate-y-0.5"
            title="Ganti bahasa / Switch language"
          >
            {language === "id" ? "EN" : "ID"}
          </button>
          <a
            href="/CV-Dwi-Mahdini.pdf"
            download
            className="hidden min-h-[40px] items-center gap-2 rounded-[10px] border-[3px] border-ink bg-ink px-3 py-2 text-[12px] font-bold text-paper shadow-lw-sm transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            <Download className="h-3.5 w-3.5" /> {t.nav.cv}
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-[10px] border-[3px] border-ink bg-art text-ink shadow-lw-sm lg:hidden"
            aria-label="Buka menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t-[3px] border-ink bg-paper px-5 py-4 lg:hidden" aria-label="Menu">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-[10px] px-3 py-2.5 text-[15px] font-bold text-ink hover:bg-paper-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/CV-Dwi-Mahdini.pdf"
              download
              className="btn-lw btn-ink mt-2"
            >
              <Download className="h-4 w-4" /> {t.nav.cv}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
