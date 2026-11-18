"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "./Providers";

// Angka sorotan menghitung naik saat masuk layar — gaya Linework:
// angka besar Bricolage dengan warna tinta spot, di dalam kotak kertas
// ber-outline tebal dan bayangan keras.
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

const numberColors = ["text-tomato", "text-cobalt", "text-ink", "text-tomato-deep"];

export default function About() {
  const { t } = useLanguage();

  return (
    <section aria-label="Highlights" className="bg-paper px-5 pb-2 pt-10">
      <div className="mx-auto w-full max-w-[1240px]">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
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
                className="lw-card lw-card-hover p-5"
              >
                <p className={`font-display text-[44px] font-extrabold leading-none ${numberColors[index % numberColors.length]}`}>
                  <CountUp value={num} suffix={suffix} />
                </p>
                <p className="mt-3 text-[13px] font-bold leading-snug text-muted">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
