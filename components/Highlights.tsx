"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./Providers";

// Sorotan portfolio — mengikuti struktur situs referensi:
// kartu dengan tag peran, judul, dan deskripsi singkat.
export default function Highlights() {
  const { t } = useLanguage();

  return (
    <section className="bg-white dark:bg-[#0f0f13] shadow-xl dark:shadow-none border border-gray-200 dark:border-white/5 rounded-[2rem] p-8 sm:p-10 transition-colors">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 transition-colors">{t.highlights.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {t.highlights.items.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="p-6 rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.02] hover:border-cyan-400 dark:hover:border-cyan-500/50 transition-colors"
          >
            <span className="text-[10px] uppercase tracking-wider font-bold text-amber-700 dark:text-amber-400">{item.tag}</span>
            <h3 className="mt-2 text-lg font-bold text-gray-900 dark:text-gray-100">{item.title}</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
