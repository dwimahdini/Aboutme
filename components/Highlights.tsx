"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Award, Briefcase, Store, Users } from "lucide-react";
import { useLanguage } from "./Providers";

// Kartu sorotan gelap mengikuti situs referensi: gambar gelap, ikon emas,
// label emas huruf kapital, judul biru terang, panah di kanan atas.
const icons = [Award, Briefcase, Store, Users];

export default function Highlights() {
  const { t, language } = useLanguage();
  const eyebrow = language === "id" ? "Sorotan Portfolio" : "Portfolio Highlights";

  return (
    <section className="bg-cream px-6 py-[30px]">
      <div className="mx-auto w-full max-w-[1160px]">
        <span className="block text-[10px] font-bold uppercase tracking-[1.5px] text-coral">{eyebrow}</span>
        <h2 className="mt-2 font-serif text-[clamp(28px,4vw,42px)] font-semibold leading-[1.1] tracking-[-0.02em] text-pine">
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
                className="group relative grid grid-rows-[auto_1fr] overflow-hidden rounded-[5px] border border-line bg-night text-cream transition-all duration-200 hover:-translate-y-[3px] hover:border-[#9be3a58c]"
              >
                <div className="relative grid aspect-[16/9] place-items-center overflow-hidden border-b border-line bg-[#101512]">
                  <Icon className="h-10 w-10 text-gold/70 transition-colors group-hover:text-gold" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080a093d] via-transparent to-transparent" />
                </div>
                <div className="relative grid content-start justify-items-start gap-2 p-[14px_15px_16px]">
                  <span className="grid h-[39px] w-[39px] place-items-center border border-line bg-[#151b16] text-gold">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="mt-0.5 text-[8px] font-bold uppercase tracking-[1.2px] text-gold">{item.tag}</span>
                  <strong className="text-[16px] font-bold leading-[1.35] text-[#83b6ff]">{item.title}</strong>
                  <span className="line-clamp-3 max-w-[300px] text-[13px] leading-[1.5] text-[#a9ada6]">
                    {item.description}
                  </span>
                  <ArrowUpRight className="absolute right-[18px] top-[19px] h-[17px] w-[17px] text-cream transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
