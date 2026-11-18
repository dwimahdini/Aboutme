"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Mail, MapPin, GraduationCap, Briefcase, Pencil } from "lucide-react";
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

// Hero ala Linework: kertas, headline display Bricolage dengan coretan tomat,
// papan gambar ber-outline tebal dengan bayangan keras, dan mode sketsa
// pensil biru untuk foto — seperti mode sketch pada template Linework.
export default function Hero() {
  const { t, language } = useLanguage();
  const [sketch, setSketch] = useState(false);

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
      <section id="about" className="relative overflow-hidden bg-paper pt-[calc(76px+clamp(36px,6vh,72px))]">
        <div className="relative z-[2] mx-auto grid w-full max-w-[1240px] grid-cols-1 items-center gap-12 px-5 pb-[clamp(48px,7vh,80px)] lg:grid-cols-[minmax(0,1.1fr)_minmax(300px,0.9fr)] lg:gap-[clamp(32px,5vw,80px)]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-[720px]"
          >
            <p className="mb-6 inline-flex items-center gap-2.5 rounded-full border-[3px] border-ink bg-art px-4 py-2 text-[11px] font-bold uppercase tracking-[1.6px] text-ink shadow-lw-sm">
              <span className="h-2.5 w-2.5 rounded-full bg-tomato ring-2 ring-tomato/30" />
              {t.hero.role}
            </p>
            <h1 className="font-display text-[clamp(56px,8vw,104px)] font-extrabold leading-[0.95] tracking-[-0.03em] text-ink">
              Dwi <span className="scribble">Mahdini</span>
            </h1>
            <p className="mt-2 text-[15px] font-bold text-ink">
              {t.hero.badge} · {t.hero.location}
            </p>
            <p className="mt-4 max-w-[520px] text-[16px] leading-[1.7] text-muted">
              {t.hero.aboutDesc}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#projects" className="btn-lw btn-tomato">
                {t.hero.projectBtn} <ArrowRight className="h-[17px] w-[17px]" />
              </a>
              <a href="#contact" className="btn-lw btn-paper">
                {t.hero.contactBtn}
              </a>
            </div>
            <div className="mt-7 flex items-center gap-3">
              <a href="https://github.com/dwimahdini" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="grid h-11 w-11 place-items-center rounded-[10px] border-[3px] border-ink bg-art text-ink shadow-lw-sm transition-transform hover:-translate-y-0.5 hover:text-tomato">
                <GithubIcon className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/in/dwimahdini" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="grid h-11 w-11 place-items-center rounded-[10px] border-[3px] border-ink bg-art text-ink shadow-lw-sm transition-transform hover:-translate-y-0.5 hover:text-cobalt">
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <a href="mailto:dwimahdini12@gmail.com" aria-label="Email" className="grid h-11 w-11 place-items-center rounded-[10px] border-[3px] border-ink bg-art text-ink shadow-lw-sm transition-transform hover:-translate-y-0.5 hover:text-tomato">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative mx-auto w-full max-w-[420px]"
          >
            {/* Hiasan khas Linework: matahari dan bintang kobalt. */}
            <span className="absolute -top-5 -right-2 z-[3] h-14 w-14 rounded-full border-[3px] border-ink bg-sun shadow-lw-sm" aria-hidden="true" />
            <svg className="absolute -left-4 top-8 z-[3] h-9 w-9 text-cobalt" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 0l2.4 9.6L24 12l-9.6 2.4L12 24l-2.4-9.6L0 12l9.6-2.4z" />
            </svg>
            <div className="lw-card relative overflow-hidden p-4 sm:p-5">
              <div className="flex items-center justify-between gap-2 pb-3">
                <span className="chip chip-paper">{sketch ? "Sketsa pensil biru" : "Final"}</span>
                <button
                  onClick={() => setSketch((v) => !v)}
                  className="inline-flex items-center gap-1.5 rounded-full border-2 border-ink bg-paper px-3 py-1.5 text-[11px] font-bold text-ink transition-colors hover:bg-sun"
                  aria-pressed={sketch}
                >
                  <Pencil className="h-3.5 w-3.5" />
                  {sketch ? "Lihat final" : "Lihat sketsa"}
                </button>
              </div>
              <div className="relative mx-auto aspect-square w-full max-w-[288px] overflow-hidden rounded-[10px] border-[3px] border-ink bg-paper-2">
                <Image
                  src="/pas-foto.jpg"
                  alt="Dwi Mahdini — foto formal"
                  fill
                  className={
                    sketch
                      ? "object-cover object-top grayscale sepia hue-rotate-[190deg] saturate-[2.4] contrast-[1.05] brightness-[1.12]"
                      : "object-cover object-top"
                  }
                  priority
                />
              </div>
              <p className="pt-3 text-center text-[11px] font-bold uppercase tracking-[1.6px] text-muted">
                Dwi Mahdini
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Strip profil di bawah hero — panel kertas lebih dalam, outline tebal. */}
      <div className="bg-paper px-5">
        <div className="mx-auto w-full max-w-[1240px] rounded-[18px] border-[3px] border-ink bg-paper-2 p-5 shadow-lw sm:p-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {strip.map((item, i) => (
              <div key={item.label} className="flex items-start gap-3">
                <span
                  className={`grid h-11 w-11 shrink-0 place-items-center rounded-[10px] border-[3px] border-ink text-ink shadow-lw-sm ${
                    i === 0 ? "bg-tomato text-art" : i === 1 ? "bg-cobalt text-art" : "bg-sun"
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[1.6px] text-tomato-deep">{item.label}</p>
                  <p className="mt-1 text-[16px] font-bold text-ink">{item.value}</p>
                  <p className="mt-0.5 text-[13px] text-muted">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
