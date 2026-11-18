"use client";

import { motion } from "framer-motion";
import { BookOpen, ExternalLink } from "lucide-react";
import { publications } from "@/data/publications";
import { useLanguage } from "./Providers";

export default function Publications() {
  const { t } = useLanguage();

  return (
    <section
      id="publications"
      className="bg-white dark:bg-[#0f0f13] shadow-xl dark:shadow-none border border-gray-200 dark:border-white/5 rounded-[2rem] p-8 sm:p-10 transition-colors"
    >
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-amber-100 dark:bg-amber-500/10 rounded-xl transition-colors">
          <BookOpen className="w-6 h-6 text-amber-600 dark:text-amber-400" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white transition-colors">{t.experience.publication}</h2>
      </div>
      <div className="space-y-5">
        {publications.map((pub, index) => (
          <motion.article
            key={pub.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="p-5 rounded-2xl border border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-white/[0.02] transition-colors"
          >
            <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-gray-100 leading-snug">
              {t.experience.pubItems[index]?.title || pub.title}
            </h3>
            <p className="mt-1 text-sm font-medium text-amber-600 dark:text-amber-400">
              {t.experience.pubItems[index]?.journal || pub.journal}
            </p>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {t.experience.pubItems[index]?.note || pub.note}
            </p>
            {pub.url && (
              <a
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-cyan-600 dark:text-cyan-400 hover:underline"
              >
                {t.experience.viewJournal} <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </motion.article>
        ))}
      </div>
    </section>
  );
}
