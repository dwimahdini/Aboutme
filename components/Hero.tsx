"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "./Providers";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Profile Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-[#0f0f13] shadow-xl dark:shadow-none border border-gray-200 dark:border-white/5 rounded-[2rem] p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden transition-colors"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/5 dark:from-cyan-500/10 to-transparent pointer-events-none transition-colors"></div>
        
        <div>
          <div className="flex flex-col items-center gap-6 mb-8 text-center">
            <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-gray-100 dark:bg-black border-2 border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.2)] dark:shadow-[0_0_20px_rgba(34,211,238,0.4)] flex items-center justify-center shrink-0 overflow-hidden relative transition-colors">
              <Image src="/foto-saya.png" alt="Dwi Mahdini" fill className="object-cover" />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium tracking-widest uppercase mb-1 transition-colors">{t.hero.greeting}</p>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white tracking-tight transition-colors">Dwi Mahdini, S.T</h1>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <a 
            href="#contact"
            className="px-6 py-3 rounded-xl border border-emerald-500/30 dark:border-emerald-500/50 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold hover:bg-emerald-100 dark:hover:bg-emerald-500/20 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] dark:hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            {t.hero.contactBtn}
          </a>
          <a 
            href="#projects"
            className="px-6 py-3 rounded-xl border border-indigo-500/30 dark:border-indigo-500/50 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-bold hover:bg-indigo-100 dark:hover:bg-indigo-500/20 hover:shadow-[0_0_15px_rgba(99,102,241,0.2)] dark:hover:shadow-[0_0_15px_rgba(99,102,241,0.3)] transition-all flex items-center justify-center gap-2"
          >
            {t.hero.projectBtn}
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
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors">{t.hero.aboutTitle}</h2>
        </div>
        
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 text-justify transition-colors">
          {t.hero.aboutDesc}
        </p>
        
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            <span className="text-sm text-gray-700 dark:text-gray-300 transition-colors">{t.hero.point1}</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            <span className="text-sm text-gray-700 dark:text-gray-300 transition-colors">{t.hero.point2}</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            <span className="text-sm text-gray-700 dark:text-gray-300 transition-colors">{t.hero.point3}</span>
          </li>
        </ul>
      </motion.div>
    </section>
  );
}
