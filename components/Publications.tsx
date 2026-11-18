"use client";

import { motion } from "framer-motion";
import { ExternalLink, BookOpen } from "lucide-react";
import { publications } from "@/data/publications";
import { useLanguage } from "./Providers";

export default function Publications() {
  const { t } = useLanguage();

  return (
    <section id="publications" className="bg-paper px-5 py-[64px]">
      <div className="mx-auto w-full max-w-[1240px]">
        <div className="lw-card p-6 sm:p-8">
          <span className="block text-[11px] font-bold uppercase tracking-[2px] text-tomato-deep">
            {t.nav.publications}
          </span>
          <h2 className="mb-6 mt-3 font-display text-[clamp(34px,5vw,56px)] font-extrabold leading-[1.02] tracking-[-0.02em] text-ink">
            <span className="scribble">{t.experience.publication}</span>
          </h2>
          <div>
            {publications.map((pub, index) => (
              <motion.article
                key={pub.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex gap-4 border-t-[3px] border-ink/10 py-5 first:border-t-0 first:pt-0 last:pb-0"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[10px] border-[3px] border-ink bg-cobalt text-art shadow-lw-sm">
                  <BookOpen className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-[19px] font-extrabold leading-snug text-ink">
                    {t.experience.pubItems[index]?.title || pub.title}
                  </h3>
                  <p className="mt-1 text-[12px] font-bold uppercase tracking-[1.4px] text-tomato-deep">
                    {t.experience.pubItems[index]?.journal || pub.journal}
                  </p>
                  <p className="mt-1 text-[14px] leading-[1.6] text-muted">
                    {t.experience.pubItems[index]?.note || pub.note}
                  </p>
                  {pub.url && (
                    <a
                      href={pub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1.5 text-[14px] font-bold text-ink underline decoration-tomato decoration-[3px] underline-offset-4 hover:text-tomato-deep"
                    >
                      {t.experience.viewJournal} <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
