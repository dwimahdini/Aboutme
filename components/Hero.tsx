"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Download } from "lucide-react";
import { useLanguage } from "./Providers";

const ROLES_ID = ["Web Developer", "AI Engineer", "Full-Stack Developer", "Data Enthusiast"];
const ROLES_EN = ["Web Developer", "AI Engineer", "Full-Stack Developer", "Data Enthusiast"];

// Efek mengetik (typewriter) untuk peran — berputar tiap beberapa detik.
function useTypewriter(words: string[]) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex % words.length];
    const speed = deleting ? 45 : 90;
    const timer = setTimeout(() => {
      if (!deleting && text === word) {
        setTimeout(() => setDeleting(true), 1600);
      } else if (deleting && text === "") {
        setDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
      } else {
        setText(word.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [text, deleting, wordIndex, words]);

  return text;
}

export default function Hero() {
  const { t, language } = useLanguage();
  const typed = useTypewriter(language === "id" ? ROLES_ID : ROLES_EN);

  return (
    <section id="about" className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Profile Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-[#0f0f13] shadow-xl dark:shadow-none border border-gray-200 dark:border-white/5 rounded-[2rem] p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden transition-colors"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/5 dark:from-cyan-500/10 to-transparent pointer-events-none transition-colors"></div>

        <div>
          <div className="flex flex-col items-center gap-6 mb-6 text-center">
            <div className="w-60 h-60 sm:w-72 sm:h-72 aspect-square rounded-[2rem] bg-gray-100 dark:bg-black border-2 border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.2)] dark:shadow-[0_0_20px_rgba(34,211,238,0.4)] flex items-center justify-center shrink-0 overflow-hidden relative transition-colors">
              <Image src="/pas-foto.jpg" alt="Dwi Mahdini — foto formal" fill className="object-cover object-top" priority />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium tracking-widest uppercase mb-1 transition-colors">{t.hero.greeting}</p>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white tracking-tight transition-colors">Dwi Mahdini, S.T.</h1>
              <p className="mt-3 text-base font-semibold text-cyan-600 dark:text-cyan-400">{t.hero.role}</p>
              <p className="mt-3 text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white leading-tight">{t.hero.tagline}</p>
              <p className="mt-2 text-base font-semibold text-emerald-600 dark:text-emerald-400 h-6">
                {typed}
                <span className="animate-pulse">|</span>
              </p>
              <span className="mt-4 inline-block px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-500/30">{t.hero.badge}</span>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 flex items-center justify-center gap-1.5">
                <MapPin className="w-4 h-4 shrink-0" /> {t.hero.location}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-3 mt-8">
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl border border-emerald-500/30 dark:border-emerald-500/50 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold hover:bg-emerald-100 dark:hover:bg-emerald-500/20 transition-all flex items-center justify-center gap-2"
          >
            {t.hero.contactBtn}
          </a>
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl border border-indigo-500/30 dark:border-indigo-500/50 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-bold hover:bg-indigo-100 dark:hover:bg-indigo-500/20 transition-all flex items-center justify-center gap-2"
          >
            {t.hero.projectBtn}
          </a>
          <a
            href="/CV-Dwi-Mahdini.pdf"
            download
            className="px-6 py-3 rounded-xl border border-gray-300 dark:border-white/20 bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-200 font-bold hover:bg-gray-200 dark:hover:bg-white/10 transition-all flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4" /> {t.hero.cvBtn}
          </a>
        </div>
      </motion.div>

      {/* Info Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-white dark:bg-[#0f0f13] shadow-xl dark:shadow-none border border-gray-200 dark:border-white/5 rounded-[2rem] p-8 sm:p-10 transition-colors"
      >
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 transition-colors">{t.hero.aboutTitle}</h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 text-justify transition-colors">
          {t.hero.aboutDesc}
        </p>
        <ul className="space-y-4">
          {[t.hero.point1, t.hero.point2, t.hero.point3].map((point) => (
            <li key={point} className="flex items-start gap-3">
              <svg className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              <span className="text-sm text-gray-700 dark:text-gray-300 transition-colors">{point}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
