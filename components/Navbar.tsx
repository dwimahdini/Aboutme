"use client";

import { useLanguage } from "./Providers";

export default function Navbar() {
  const { t } = useLanguage();
  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#skills", label: t.nav.skills },
    { href: "#experience", label: t.nav.experience },
    { href: "#projects", label: t.nav.projects },
    { href: "#publications", label: t.nav.publications },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <nav className="sticky top-4 z-40 mb-8 flex flex-wrap items-center justify-between gap-3 rounded-full bg-white/80 dark:bg-black/60 backdrop-blur-md border border-gray-200 dark:border-white/10 px-5 py-3 shadow-lg">
      <a href="#about" className="font-bold text-gray-900 dark:text-white tracking-tight">
        Dwi Mahdini<span className="text-cyan-500">.</span>
      </a>
      <div className="flex flex-wrap items-center gap-1 sm:gap-2">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
          >
            {link.label}
          </a>
        ))}
        <a
          href="/CV-Dwi-Mahdini.pdf"
          download
          className="ml-1 px-3 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-cyan-500 text-white hover:bg-cyan-600 transition-colors"
        >
          {t.nav.cv}
        </a>
      </div>
    </nav>
  );
}
