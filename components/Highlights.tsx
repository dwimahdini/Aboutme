"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Award, Briefcase, Store, Users } from "lucide-react";
import { useLanguage } from "./Providers";

// Kartu sorotan mengikuti tema: di mode terang kartunya terang (krem) dengan
// judul hijau, di mode gelap kartunya gelap — label emas huruf kapital,
// panah di kanan atas.
const icons = [Award, Briefcase, Store, Users];

export default function Highlights() {
  const { t, language } = useLanguage();
  const eyebrow = language === "id" ? "Sorotan Portfolio" : "Portfolio Highlights";

  return (
    <section className="bg-page px-6 py-[30px]">
      <div className="mx-auto w-full max-w-[1160px]">
        <span className="block text-[10px] font-bold uppercase tracking-[1.5px] text-coral">{eyebrow}</span>
        <h2 className="mt-2 font-serif text-[clamp(28px,4vw,42px)] font-semibold leading-[1.1] tracking-[-0.02em] text-leaf">
          {t.highlights.title}
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {t.highlights.items.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group relative grid grid-rows-[auto_1fr] overflow-hidden rounded-[5px] border border-line bg-raise text-fg transition-all duration-200 hover:-translate-y-[3px] hover:border-gold/60"
              >
                <div className="relative grid aspect-[16/9] place-items-center overflow-hidden border-b border-line bg-cream-dark">
                  <Icon className="h-10 w-10 text-leaf/70 transition-colors group-hover:text-leaf" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                </div>
                <div className="relative grid content-start justify-items-start gap-2 p-[14px_15px_16px]">
                  <span className="grid h-[39px] w-[39px] place-items-center border border-line bg-soft text-leaf">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="mt-0.5 text-[8px] font-bold uppercase tracking-[1.2px] text-gold">{item.tag}</span>
                  <strong className="text-[16px] font-bold leading-[1.35] text-leaf">{item.title}</strong>
                  <span className="line-clamp-3 max-w-[300px] text-[13px] leading-[1.5] text-muted">
                    {item.description}
                  </span>
                  <ArrowUpRight className="absolute right-[18px] top-[19px] h-[17px] w-[17px] text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
