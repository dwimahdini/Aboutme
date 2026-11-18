"use client";

import { useLanguage } from "./Providers";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="text-center pb-4">
      <p className="text-xs text-gray-500 dark:text-gray-500 leading-relaxed max-w-xl mx-auto">
        © {new Date().getFullYear()} Dwi Mahdini — Pekanbaru, Riau. {t.footer.note}
      </p>
    </footer>
  );
}
