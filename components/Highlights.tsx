"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Award, Briefcase, Store, Users } from "lucide-react";
import { useLanguage } from "./Providers";

// Kartu sorotan ala Linework: kertas seni ber-outline tebal, area gambar
// kertas lebih dalam dengan ikon tinta spot, label tomat, judul display.
const icons = [Award, Briefcase, Store, Users];
const iconFills = ["bg-tomato text-art", "bg-cobalt text-art", "bg-sun text-ink", "bg-tomato text-art"];

export default function Highlights() {
  const { t, language } = useLanguage();
  const eyebrow = language === "id" ? "Sorotan Portfolio" : "Portfolio Highlights";

  return (
    <section className="bg-paper px-5 py-[64px]">
      <div className="mx-auto w-full max-w-[1240px]">
        <span className="block text-[11px] font-bold uppercase tracking-[2px] text-tomato-deep">{eyebrow}</span>
        <h2 className="mt-3 font-display text-[clamp(34px,5vw,56px)] font-extrabold leading-[1.02] tracking-[-0.02em] text-ink">
          <span className="scribble">{t.highlights.title}</span>
        </h2>

        <div className="mt-9 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {t.highlights.items.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="lw-card lw-card-hover group relative grid grid-rows-[auto_1fr] overflow-hidden"
              >
                <div className="relative grid aspect-[16/9] place-items-center overflow-hidden border-b-[3px] border-ink bg-paper-2">
                  <Icon className="h-12 w-12 text-ink/80 transition-transform group-hover:-rotate-6 group-hover:scale-110" />
                </div>
                <div className="relative grid content-start justify-items-start gap-2.5 p-5">
                  <span className={`grid h-11 w-11 place-items-center rounded-[10px] border-[3px] border-ink shadow-lw-sm ${iconFills[index % iconFills.length]}`}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="mt-0.5 text-[10px] font-bold uppercase tracking-[1.6px] text-tomato-deep">{item.tag}</span>
                  <strong className="font-display text-[19px] font-extrabold leading-[1.25] text-ink">{item.title}</strong>
                  <span className="line-clamp-3 max-w-[300px] text-[14px] leading-[1.6] text-muted">
                    {item.description}
                  </span>
                  <ArrowUpRight className="absolute right-4 top-4 h-5 w-5 text-ink transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-tomato" />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
