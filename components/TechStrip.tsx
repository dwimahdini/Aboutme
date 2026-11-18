"use client";

import { useLanguage } from "./Providers";

// Deretan wordmark teknologi ala seksi "Drawn for" pada Linework —
// statis, tanpa marquee, dari skill yang memang dipakai sehari-hari.
const techs = ["Next.js", "Laravel", "Python", "MySQL", "PostgreSQL", "Tailwind CSS", "Hybrid RAG", "Git", "Excel"];

export default function TechStrip() {
  const { language } = useLanguage();

  return (
    <section className="bg-paper px-5 py-[48px]" aria-label={language === "id" ? "Teknologi yang dipakai" : "Technologies used"}>
      <div className="mx-auto w-full max-w-[1240px]">
        <p className="text-center text-[11px] font-bold uppercase tracking-[2px] text-tomato-deep">
          {language === "id" ? "Dibangun dengan" : "Built with"}
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          {techs.map((tech, i) => (
            <span
              key={tech}
              className={`rounded-full border-[3px] border-ink px-4 py-2 font-display text-[15px] font-extrabold shadow-lw-sm ${
                i % 3 === 0 ? "bg-sun text-ink" : i % 3 === 1 ? "bg-art text-ink" : "bg-paper-2 text-ink"
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
