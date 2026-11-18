"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import Link from "next/link";
import { useLanguage } from "./Providers";

// Kartu miring mengikuti kursor (tilt 3D) — murni JS + CSS transform.
function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    setStyle({ transform: `perspective(900px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-4px)`, transition: "transform 0.1s ease-out" });
  };
  const onLeave = () => setStyle({ transform: "perspective(900px) rotateY(0deg) rotateX(0deg)", transition: "transform 0.4s ease-out" });

  return (
    <motion.div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} style={style} className={className}>
      {children}
    </motion.div>
  );
}

const statusStyle: Record<string, string> = {
  published: "bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/20",
  completed: "bg-cyan-100 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border-cyan-200 dark:border-cyan-500/20",
  exercise: "bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-white/10",
};

const statusLabel: Record<string, { id: string; en: string }> = {
  published: { id: "Terpublikasi", en: "Published" },
  completed: { id: "Selesai", en: "Completed" },
  exercise: { id: "Latihan", en: "Exercise" },
};

export default function Projects() {
  const { t, language } = useLanguage();
  const featured = projects[0];
  const rest = projects.slice(1);

  return (
    <section id="projects" className="bg-white dark:bg-[#0f0f13] shadow-xl dark:shadow-none border border-gray-200 dark:border-white/5 rounded-[2rem] p-8 sm:p-10 transition-colors">
      <div className="flex items-center gap-3 mb-3">
        <div className="p-3 bg-cyan-100 dark:bg-cyan-500/10 rounded-xl transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-600 dark:text-cyan-400"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" /></svg>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white transition-colors">{t.projects.title}</h2>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-8 max-w-2xl">{t.projects.subtitle}</p>

      {/* Featured project — Hybrid RAG chatbot */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative mb-6 rounded-2xl border border-cyan-400/40 dark:border-cyan-500/40 bg-gradient-to-b from-cyan-50 to-white dark:from-cyan-500/10 dark:to-transparent p-6 sm:p-8 overflow-hidden"
      >
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="text-[10px] uppercase tracking-wider font-bold bg-cyan-500 text-white px-2.5 py-1 rounded-md">{t.projects.featured}</span>
          <span className={`text-[10px] uppercase tracking-wider font-bold border px-2.5 py-1 rounded-md ${statusStyle[featured.status]}`}>{statusLabel[featured.status][language]}</span>
          <span className="text-[10px] uppercase tracking-wider font-bold text-amber-700 dark:text-amber-400">{t.projects.published}</span>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{t.projects.items[0]?.title || featured.title}</h3>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6 max-w-3xl">{t.projects.items[0]?.description || featured.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {featured.techStack.map((tech) => (
            <span key={tech} className="text-[10px] uppercase tracking-wider font-bold text-cyan-700 dark:text-cyan-200 bg-cyan-100 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 px-2.5 py-1 rounded-md">{tech}</span>
          ))}
        </div>
        {featured.projectUrl && (
          <Link href={featured.projectUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 text-white text-sm font-bold hover:bg-cyan-600 transition-colors">
            {t.experience.viewJournal} →
          </Link>
        )}
      </motion.article>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rest.map((project, i) => {
          const index = i + 1;
          return (
            <TiltCard
              key={project.title}
              className="group flex flex-col relative bg-gradient-to-b from-gray-50 to-white dark:from-white/[0.03] dark:to-transparent border border-gray-200 dark:border-white/10 hover:border-cyan-400 dark:hover:border-cyan-500/50 rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] dark:hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]"
            >
              <span className={`self-start mb-4 text-[10px] uppercase tracking-wider font-bold border px-2.5 py-1 rounded-md ${statusStyle[project.status]}`}>
                {statusLabel[project.status][language]}
              </span>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">{t.projects.items[index]?.title || project.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-8 flex-grow transition-colors">{t.projects.items[index]?.description || project.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.techStack.map((tech) => (
                  <span key={tech} className="text-[10px] uppercase tracking-wider font-bold text-cyan-700 dark:text-cyan-200 bg-cyan-100 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 px-2.5 py-1 rounded-md transition-colors">{tech}</span>
                ))}
              </div>
              {project.projectUrl && (
                <Link href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10" aria-label={`${t.projects.viewProject} ${project.title}`}></Link>
              )}
            </TiltCard>
          );
        })}
      </div>
    </section>
  );
}
