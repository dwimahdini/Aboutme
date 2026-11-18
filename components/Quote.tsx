"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./Providers";

// Pita kutipan ala testimonial Linework — memakai tagline Dwi sendiri,
// bukan testimoni karangan.
export default function Quote() {
  const { t } = useLanguage();

  return (
    <section className="border-y-[3px] border-ink bg-sun px-5 py-[56px]">
      <motion.blockquote
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto w-full max-w-[900px] text-center"
      >
        <p className="font-display text-[clamp(28px,4.5vw,48px)] font-extrabold leading-[1.15] tracking-[-0.02em] text-ink">
          “{t.hero.tagline}”
        </p>
        <footer className="mt-4 text-[12px] font-bold uppercase tracking-[2px] text-ink/70">
          — Dwi Mahdini
        </footer>
      </motion.blockquote>
    </section>
  );
}
