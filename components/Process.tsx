"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "./Providers";

// "Dari masalah menjadi progres" — 5 langkah ala strip proses Linework:
// lingkaran bernomor berisi warna tinta spot, panah penghubung.
const stepFills = [
  "bg-tomato text-art",
  "bg-cobalt text-art",
  "bg-sun text-ink",
  "bg-tomato text-art",
  "bg-cobalt text-art",
];

export default function Process() {
  const { t } = useLanguage();
  const steps = t.process.steps;

  return (
    <section className="bg-paper px-5 py-[64px]">
      <div className="mx-auto w-full max-w-[1240px] border-t-[3px] border-ink pt-12">
        <span className="block text-[11px] font-bold uppercase tracking-[2px] text-tomato-deep">
          {t.process.eyebrow}
        </span>
        <h2 className="mb-3 mt-3 font-display text-[clamp(34px,5vw,56px)] font-extrabold leading-[1.02] tracking-[-0.02em] text-ink">
          <span className="scribble">{t.process.title}</span>
        </h2>
        <p className="mb-9 max-w-[680px] text-[15px] leading-[1.7] text-muted">{t.process.desc}</p>

        <ol className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_24px_1fr_24px_1fr_24px_1fr_24px_1fr] lg:items-start lg:gap-0">
          {steps.map((step, index) => (
            <li key={step.title} className="contents">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex gap-4 lg:block lg:min-h-[175px] lg:pr-2"
              >
                <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-full border-[3px] border-ink font-display text-[16px] font-extrabold shadow-lw-sm ${stepFills[index % stepFills.length]}`}>
                  0{index + 1}
                </span>
                <div>
                  <h3 className="font-display text-[18px] font-extrabold text-ink lg:mt-3">{step.title}</h3>
                  <p className="mt-1 max-w-[220px] text-[14px] leading-[1.6] text-muted lg:max-w-[170px]">{step.desc}</p>
                </div>
              </motion.div>
              {index < steps.length - 1 && (
                <span className="hidden pt-3 text-ink lg:grid lg:place-items-start lg:justify-center" aria-hidden="true">
                  <ArrowRight className="h-5 w-5" />
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
