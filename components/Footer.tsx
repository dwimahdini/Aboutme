"use client";

import { useLanguage } from "./Providers";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-page px-8 pb-[18px] pt-6">
      <div className="mx-auto flex w-full max-w-[1160px] flex-col justify-between gap-2 text-[11px] leading-relaxed text-muted sm:flex-row">
        <span>© {new Date().getFullYear()} Dwi Mahdini — Pekanbaru, Riau.</span>
        <span>{t.footer.note}</span>
      </div>
    </footer>
  );
}
