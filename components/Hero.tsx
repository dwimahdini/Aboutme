"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Mail, MapPin, GraduationCap, Briefcase } from "lucide-react";
import { useLanguage } from "./Providers";

// Ikon brand tidak lagi tersedia di lucide-react — didefinisikan sendiri.
const GithubIcon = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

// Hero gelap mengikuti situs referensi: grid halus, status ber-titik emas,
// tagline sebagai eyebrow, nama besar DM Sans, foto 1:1 dalam bingkai gelap.
export default function Hero() {
  const { t, language } = useLanguage();

  const strip =
    language === "id"
      ? [
          { label: "Lokasi", value: "Pekanbaru, Riau", sub: "Indonesia — WIB (UTC+7)", icon: MapPin },
          { label: "Pendidikan", value: "S1 Teknik Informatika", sub: "UIN Suska Riau · 2022 — 2026", icon: GraduationCap },
          { label: "Status", value: "Fresh Graduate", sub: "Terbuka untuk kerja & freelance", icon: Briefcase },
        ]
      : [
          { label: "Location", value: "Pekanbaru, Riau", sub: "Indonesia — WIB (UTC+7)", icon: MapPin },
          { label: "Education", value: "BSc Informatics Engineering", sub: "UIN Suska Riau · 2022 — 2026", icon: GraduationCap },
          { label: "Status", value: "Fresh Graduate", sub: "Open to work & freelance", icon: Briefcase },
        ];

  return (
    <>
      <section id="about" className="relative overflow-hidden bg-night text-cream">
        <div className="hero-grid-overlay absolute inset-0" aria-hidden="true" />
        <div className="relative z-[2] mx-auto grid w-full max-w-[1160px] grid-cols-1 items-center gap-12 px-6 pb-[clamp(52px,7vh,82px)] pt-[calc(76px+clamp(40px,7vh,82px))] lg:min-h-[640px] lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] lg:gap-[clamp(32px,6vw,100px)]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-[740px]"
          >
            <p className="mb-[22px] inline-flex items-center gap-2.5 rounded-[4px] border border-white/15 px-3 py-2 text-[9px] font-semibold uppercase tracking-[1.4px] text-[#cbcec8]">
              <span className="h-2 w-2 rounded-full bg-gold shadow-[0_0_13px_rgba(214,168,79,0.6)]" />
              {t.hero.role}
            </p>
            <span className="mb-[14px] block text-[10px] font-bold uppercase tracking-[1.8px] text-gold">
              {t.hero.tagline}
            </span>
            <h1 className="text-[clamp(54px,7.2vw,96px)] font-bold leading-[0.92] tracking-[-0.075em] text-[#f6f5f1]">
              Dwi Mahdini
            </h1>
            <p className="mt-[15px] font-serif text-[15px] font-semibold text-[#d1d2cc]">
              {t.hero.badge} · {t.hero.location}
            </p>
            <p className="mt-4 max-w-[520px] text-[15px] leading-[1.65] text-[#a9ada6]">
              {t.hero.aboutDesc}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-[5px] bg-pine px-5 text-[13px] font-bold text-cream transition-shadow hover:shadow-[0_0_0_1px_#d6a84f]"
              >
                {t.hero.projectBtn} <ArrowRight className="h-[17px] w-[17px]" />
              </a>
              <a
                href="#contact"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-[5px] border border-pine/40 bg-cream px-5 text-[13px] font-bold text-pine transition-colors hover:border-gold"
              >
                {t.hero.contactBtn}
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-[#d1d2cc]">
              <a href="https://github.com/dwimahdini" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition-colors hover:text-gold">
                <GithubIcon className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/in/dwimahdini" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-gold">
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <a href="mailto:dwimahdini12@gmail.com" aria-label="Email" className="transition-colors hover:text-gold">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative flex min-h-[250px] items-end justify-center"
          >
            <div className="relative h-60 w-60 overflow-hidden rounded-lg border-[7px] border-[#141816] bg-[#171d18] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1),0_2px_8px_rgba(0,0,0,0.45)] sm:h-72 sm:w-72">
              <Image src="/pas-foto.jpg" alt="Dwi Mahdini — foto formal" fill className="object-cover object-top" priority />
            </div>
            <span className="absolute bottom-[26px] right-6 hidden text-[9px] tracking-[1.5px] text-[#777b74] lg:block" aria-hidden="true">
              DM—01
            </span>
          </motion.div>
        </div>
      </section>

      {/* Strip profil di bawah hero — seperti situs referensi. */}
      <div className="bg-page px-6">
        <div className="mx-auto mt-8 w-[min(1160px,100%-48px)] rounded-[4px] border border-line bg-raise p-5 shadow-none sm:p-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {strip.map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-soft text-leaf">
                  <item.icon className="h-[18px] w-[18px]" />
                </span>
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[1.4px] text-gold">{item.label}</p>
                  <p className="mt-1 text-[15px] font-bold text-fg">{item.value}</p>
                  <p className="mt-0.5 text-[12px] text-muted">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
