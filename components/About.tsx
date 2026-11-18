"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "./Providers";

// Angka sorotan menghitung naik saat masuk layar — gaya referensi:
// angka besar Playfair hijau tua, label abu-abu, tanpa kartu.
function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const duration = 1200;
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

export default function About() {
  const { t } = useLanguage();

  return (
    <section aria-label="Highlights" className="bg-page px-6 pb-4 pt-10">
      <div className="mx-auto w-full max-w-[1160px] border-t border-line pt-8">
        <div className="flex flex-wrap gap-x-12 gap-y-6">
          {t.hero.stats.map((stat, index) => {
            const match = stat.value.match(/^(\d+)(\+?)$/);
            const num = match ? parseInt(match[1], 10) : 0;
            const suffix = match ? match[2] : "";
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <p className="font-serif text-[40px] font-bold leading-none text-leaf">
                  <CountUp value={num} suffix={suffix} />
                </p>
                <p className="mt-2 max-w-[190px] text-[13px] leading-snug text-muted">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
