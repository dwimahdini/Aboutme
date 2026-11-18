"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "./Providers";

// Angka statistik menghitung naik (count-up) saat masuk layar.
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
    <section aria-label="Highlights">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
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
              whileHover={{ y: -4, scale: 1.02 }}
              className="bg-white dark:bg-[#0f0f13] border border-gray-200 dark:border-white/5 rounded-3xl p-6 text-center shadow-xl dark:shadow-none transition-colors"
            >
              <p className="text-3xl sm:text-4xl font-bold text-cyan-600 dark:text-cyan-400">
                <CountUp value={num} suffix={suffix} />
              </p>
              <p className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-snug">{stat.label}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
