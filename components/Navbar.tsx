"use client";

import { useEffect, useState } from "react";
import { Menu, X, Download, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useLanguage } from "./Providers";

// Topbar tetap di atas, gelap dengan blur — seperti situs referensi.
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
    <header className="fixed top-0 left-0 right-0 z-40 border-b border-white/10 bg-[#080a09f5] backdrop-blur-[14px]">
      <div className="mx-auto flex min-h-[76px] w-full max-w-[1160px] items-center justify-between gap-7 px-6">
        <a href="#about" className="flex min-w-max items-center gap-3">
          <span className="grid h-[38px] w-[38px] place-items-center rounded-[7px] border border-white/15 bg-[#121613] text-[13px] font-bold tracking-tight text-cream">
            DM
          </span>
          <span className="grid gap-[3px]">
            <span className="text-[13px] font-bold leading-none text-cream">Dwi Mahdini</span>
            <small className="text-[8px] font-semibold tracking-[1.4px] text-[#8a8d86]">
              WEB DEVELOPER · AI ENGINEERING
            </small>
          </span>
        </a>

        <nav className="hidden items-center gap-4 lg:flex" aria-label="Navigasi utama">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap border-b-2 border-transparent px-1 py-2 text-[11px] font-semibold text-[#b2b4ae] transition-colors hover:border-gold hover:text-cream"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="grid h-[34px] w-[34px] place-items-center rounded-[5px] border border-white/20 text-[#cbcec8] transition-colors hover:border-gold hover:text-gold"
            title={mounted && theme === "dark" ? "Mode terang / Light mode" : "Mode gelap / Dark mode"}
            aria-label="Ganti tema gelap / terang"
          >
            {mounted && theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            onClick={() => setLanguage(language === "id" ? "en" : "id")}
            className="rounded-[5px] border border-white/20 px-2.5 py-2 text-[11px] font-bold uppercase text-[#cbcec8] transition-colors hover:border-gold hover:text-gold"
            title="Ganti bahasa / Switch language"
          >
            {language === "id" ? "EN" : "ID"}
          </button>
          <a
            href="/CV-Dwi-Mahdini.pdf"
            download
            className="hidden items-center gap-2 rounded-[5px] border border-cream/40 px-3 py-2 text-[11px] font-bold text-cream transition-colors hover:border-gold hover:text-gold sm:inline-flex"
          >
            <Download className="h-3.5 w-3.5" /> {t.nav.cv}
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-[5px] text-cream lg:hidden"
            aria-label="Buka menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-night px-6 py-4 lg:hidden" aria-label="Menu">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-[5px] px-2 py-2.5 text-sm font-semibold text-[#b2b4ae] hover:bg-white/5 hover:text-cream"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/CV-Dwi-Mahdini.pdf"
              download
              className="mt-2 inline-flex items-center gap-2 rounded-[5px] border border-cream/40 px-3 py-2.5 text-sm font-bold text-cream"
            >
              <Download className="h-4 w-4" /> {t.nav.cv}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
