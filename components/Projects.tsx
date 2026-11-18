"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { useLanguage } from "./Providers";

// Kartu proyek mengikuti situs referensi: border tipis, garis bawah emas,
// chip status hijau tua, tag di atas latar hijau lembut, tautan panah emas.
const statusLabel: Record<string, { id: string; en: string }> = {
  published: { id: "Terpublikasi", en: "Published" },
  completed: { id: "Selesai", en: "Completed" },
  exercise: { id: "Latihan", en: "Exercise" },
};

function initials(title: string) {
  const words = title.replace(/[^A-Za-z0-9 ]/g, "").split(" ").filter(Boolean);
  return (words[0]?.[0] ?? "") + (words[1]?.[0] ?? "");
}

export default function Projects() {
  const { t, language } = useLanguage();

  return (
    <section id="projects" className="bg-page px-6 py-[30px]">
      <div className="mx-auto w-full max-w-[1160px]">
        <span className="block text-[10px] font-bold uppercase tracking-[1.5px] text-coral">
          {t.nav.projects}
        </span>
        <h2 className="mt-2 font-serif text-[clamp(28px,4vw,42px)] font-semibold leading-[1.1] tracking-[-0.02em] text-leaf">
          {t.projects.title}
        </h2>
        <p className="mt-3 max-w-[680px] text-[14px] leading-[1.7] text-muted">{t.projects.subtitle}</p>

        <div className="mt-8 grid grid-cols-1 gap-[13px] md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
              className="group overflow-hidden rounded-[5px] border border-line border-b-2 border-b-gold bg-page transition-all duration-200 hover:-translate-y-0.5 hover:border-gold/60"
            >
              <div className="relative grid h-[150px] place-items-center overflow-hidden bg-cream-dark">
                <span className="font-serif text-[44px] font-bold leading-none text-leaf/25 transition-colors group-hover:text-leaf/40" aria-hidden="true">
                  {initials(t.projects.items[i]?.title || project.title)}
                </span>
                <span className="absolute left-2 top-2 z-[1] inline-flex items-center gap-1 rounded-lg bg-pine px-2 py-1.5 text-[9px] font-bold uppercase tracking-wide text-cream">
                  <Check className="h-[13px] w-[13px]" /> {statusLabel[project.status][language]}
                </span>
              </div>
              <div className="p-[14px]">
                <h3 className="font-serif text-[17px] font-bold leading-snug text-leaf">
                  {t.projects.items[i]?.title || project.title}
                </h3>
                <p className="mt-2 min-h-[63px] text-[13px] leading-[1.5] text-muted">
                  {t.projects.items[i]?.description || project.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span key={tech} className="rounded-[9px] bg-soft px-2 py-1 text-[10px] font-semibold text-fg">
                      {tech}
                    </span>
                  ))}
                </div>
                {project.projectUrl && (
                  <Link
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-[13px] font-bold text-fg transition-colors hover:text-leaf"
                  >
                    {t.experience.viewJournal}
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-gold text-pine transition-transform group-hover:translate-x-[3px]">
                      <ArrowRight className="h-[15px] w-[15px]" />
                    </span>
                  </Link>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
