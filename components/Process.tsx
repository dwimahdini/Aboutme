"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "./Providers";

// "From problem to progress" — 5 langkah dengan panah penghubung,
// mengikuti situs referensi.
export default function Process() {
  const { t } = useLanguage();
  const steps = t.process.steps;

  return (
    <section className="bg-page px-6 py-[30px]">
      <div className="mx-auto w-full max-w-[1160px] border-t border-line pb-[45px] pt-[90px]">
        <span className="block text-[9px] font-bold uppercase tracking-[1.5px] text-gold">
          {t.process.eyebrow}
        </span>
        <h2 className="mb-[11px] mt-2 font-sans text-[clamp(28px,4vw,42px)] font-semibold leading-[1.1] tracking-[-0.045em] text-fg">
          {t.process.title}
        </h2>
        <p className="mb-[30px] max-w-[680px] text-[14px] leading-[1.7] text-muted">{t.process.desc}</p>

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
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-pine text-[13px] font-bold text-cream">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="font-serif text-[15px] font-bold text-leaf lg:mt-3">{step.title}</h3>
                  <p className="mt-1 max-w-[220px] text-[13px] leading-[1.5] text-muted lg:max-w-[160px]">{step.desc}</p>
                </div>
              </motion.div>
              {index < steps.length - 1 && (
                <span className="hidden pt-2 text-fg lg:grid lg:place-items-start lg:justify-center" aria-hidden="true">
                  <ArrowRight className="h-[18px] w-[18px]" />
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
