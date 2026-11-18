"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./Providers";

// "From problem to progress" — 5 langkah, mengikuti situs referensi.
export default function Process() {
  const { t } = useLanguage();

  return (
    <section className="bg-white dark:bg-[#0f0f13] shadow-xl dark:shadow-none border border-gray-200 dark:border-white/5 rounded-[2rem] p-8 sm:p-10 transition-colors">
      <p className="text-sm font-bold tracking-widest uppercase text-cyan-600 dark:text-cyan-400 mb-2">{t.process.eyebrow}</p>
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3 transition-colors">{t.process.title}</h2>
      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-10 max-w-2xl">{t.process.desc}</p>
      <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {t.process.steps.map((step, index) => (
          <motion.li
            key={step.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="relative"
          >
            <p className="text-3xl font-bold text-cyan-500/40 dark:text-cyan-400/30">0{index + 1}</p>
            <h3 className="mt-2 text-lg font-bold text-gray-900 dark:text-gray-100">{step.title}</h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{step.desc}</p>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
