"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { useLanguage } from "./Providers";

// Grid proyek ala Linework: filter berdasarkan disiplin (seperti filter
// proyek pada template), kartu bento ber-outline tebal dengan bayangan keras,
// chip status warna tinta spot, dan inisial display besar di area gambar.
const statusLabel: Record<string, { id: string; en: string }> = {
  published: { id: "Terpublikasi", en: "Published" },
  completed: { id: "Selesai", en: "Completed" },
  exercise: { id: "Latihan", en: "Exercise" },
};

const statusChip: Record<string, string> = {
  published: "chip-tom",
  completed: "chip-cob",
  exercise: "chip-sun",
};

const initialColors = ["text-tomato", "text-cobalt", "text-ink", "text-tomato-deep"];

function initials(title: string) {
  const words = title.replace(/[^A-Za-z0-9 ]/g, "").split(" ").filter(Boolean);
  return (words[0]?.[0] ?? "") + (words[1]?.[0] ?? "");
}

const categories = ["Semua", "AI & RAG", "Web App", "AI / ML", "Data"] as const;

export default function Projects() {
  const { t, language } = useLanguage();
  const [filter, setFilter] = useState<(typeof categories)[number]>("Semua");

  const visible = projects
    .map((project, i) => ({ project, i }))
    .filter(({ project }) => filter === "Semua" || project.category === filter);

  return (
    <section id="projects" className="bg-paper px-5 py-[64px]">
      <div className="mx-auto w-full max-w-[1240px]">
        <span className="block text-[11px] font-bold uppercase tracking-[2px] text-tomato-deep">
          {t.nav.projects}
        </span>
        <h2 className="mt-3 font-display text-[clamp(34px,5vw,56px)] font-extrabold leading-[1.02] tracking-[-0.02em] text-ink">
          <span className="scribble">{t.projects.title}</span>
        </h2>
        <p className="mt-4 max-w-[680px] text-[15px] leading-[1.7] text-muted">{t.projects.subtitle}</p>

        {/* Filter gaya Linework — dengan jumlah per kategori. */}
        <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter proyek">
          {categories.map((cat) => {
            const count = cat === "Semua" ? projects.length : projects.filter((p) => p.category === cat).length;
            const active = filter === cat;
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                aria-pressed={active}
                className={`chip border-[3px] px-3.5 py-2 text-[11px] shadow-lw-sm transition-transform hover:-translate-y-0.5 ${
                  active ? "bg-ink text-paper" : "chip-paper"
                }`}
              >
                {cat === "Semua" ? (language === "id" ? "Semua" : "All") : cat} ({count})
              </button>
            );
          })}
        </div>
        <p className="mt-3 text-[13px] font-bold text-muted" aria-live="polite">
          {language === "id"
            ? `Menampilkan ${visible.length} dari ${projects.length} proyek`
            : `Showing ${visible.length} of ${projects.length} projects`}
        </p>
        <p className="mt-2 text-[12px] font-bold uppercase tracking-[1.6px] text-muted md:hidden">
          {language === "id" ? "Geser → untuk melihat lainnya" : "Swipe → to see more"}
        </p>

        <div className="mt-6 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-2 md:snap-none md:overflow-visible md:pb-0 lg:grid-cols-3">
          {visible.map(({ project, i }) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
              className={`lw-card lw-card-hover group w-[85%] shrink-0 snap-start overflow-hidden sm:w-[70%] md:w-auto ${project.featured ? "lg:col-span-2" : ""}`}
            >
              <div className="relative grid h-[170px] place-items-center overflow-hidden border-b-[3px] border-ink bg-paper-2">
                <span className={`font-display text-[64px] font-extrabold leading-none ${initialColors[i % initialColors.length]}`} aria-hidden="true">
                  {initials(t.projects.items[i]?.title || project.title)}
                </span>
                <span className={`chip absolute left-3 top-3 ${statusChip[project.status]}`}>
                  <Check className="h-3 w-3" /> {statusLabel[project.status][language]}
                </span>
                <span className="chip chip-paper absolute right-3 top-3">{project.category}</span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-[21px] font-extrabold leading-snug text-ink">
                  {t.projects.items[i]?.title || project.title}
                </h3>
                <p className="mt-2 min-h-[66px] text-[14px] leading-[1.6] text-muted">
                  {t.projects.items[i]?.description || project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span key={tech} className="rounded-full border-2 border-ink bg-paper px-2.5 py-1 text-[11px] font-bold text-ink">
                      {tech}
                    </span>
                  ))}
                </div>
                {project.projectUrl && (
                  <Link
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-[14px] font-bold text-ink underline decoration-tomato decoration-[3px] underline-offset-[5px] transition-colors hover:text-tomato-deep"
                  >
                    {t.experience.viewJournal}
                    <span className="grid h-8 w-8 place-items-center rounded-full border-[3px] border-ink bg-sun text-ink shadow-lw-sm transition-transform group-hover:translate-x-1">
                      <ArrowRight className="h-4 w-4" />
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
