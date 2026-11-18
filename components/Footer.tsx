"use client";

import { useLanguage } from "./Providers";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="border-t-[3px] border-ink bg-paper-2 px-5 pb-6 pt-8">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col justify-between gap-2 text-[12px] font-bold leading-relaxed text-muted sm:flex-row">
        <span>© {new Date().getFullYear()} Dwi Mahdini — Pekanbaru, Riau.</span>
        <span>{t.footer.note}</span>
      </div>
    </footer>
  );
}
