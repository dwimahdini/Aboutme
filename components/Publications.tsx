"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { publications } from "@/data/publications";
import { useLanguage } from "./Providers";

export default function Publications() {
  const { t } = useLanguage();

  return (
    <section id="publications" className="bg-page px-6 py-[30px]">
      <div className="mx-auto w-full max-w-[1160px]">
        <div className="rounded-[6px] border border-line bg-page p-[22px]">
          <span className="block text-[10px] font-bold uppercase tracking-[1.5px] text-coral">
            {t.nav.publications}
          </span>
          <h2 className="mb-5 mt-2 font-serif text-[clamp(28px,4vw,42px)] font-semibold leading-[1.1] tracking-[-0.02em] text-leaf">
            {t.experience.publication}
          </h2>
          <div>
            {publications.map((pub, index) => (
              <motion.article
                key={pub.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="border-b border-line py-4 last:border-b-0 last:pb-0 first:pt-0"
              >
                <h3 className="font-serif text-[17px] font-bold leading-snug text-leaf">
                  {t.experience.pubItems[index]?.title || pub.title}
                </h3>
                <p className="mt-1 text-[12px] font-bold text-coral">
                  {t.experience.pubItems[index]?.journal || pub.journal}
                </p>
                <p className="mt-1 text-[13px] leading-[1.5] text-muted">
                  {t.experience.pubItems[index]?.note || pub.note}
                </p>
                {pub.url && (
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 text-[13px] font-bold text-leaf hover:text-gold"
                  >
                    {t.experience.viewJournal} <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
