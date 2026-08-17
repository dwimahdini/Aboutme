"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import Link from "next/link";
import { useLanguage } from "./Providers";

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="bg-white dark:bg-[#0f0f13] shadow-xl dark:shadow-none border border-gray-200 dark:border-white/5 rounded-[2rem] p-8 sm:p-10 transition-colors">
      <div className="flex items-center gap-3 mb-10">
        <div className="p-3 bg-cyan-100 dark:bg-cyan-500/10 rounded-xl transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-600 dark:text-cyan-400"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white transition-colors">{t.projects.title}</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div 
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group flex flex-col relative bg-gradient-to-b from-gray-50 to-white dark:from-white/[0.03] dark:to-transparent border border-gray-200 dark:border-white/10 hover:border-cyan-400 dark:hover:border-cyan-500/50 rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] dark:hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] hover:-translate-y-1"
          >
            {/* Top right icon */}
            <div className="absolute top-6 right-6 opacity-40 group-hover:opacity-100 transition-opacity duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-500 dark:text-cyan-400 group-hover:rotate-45 transition-transform duration-300"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
            </div>
            
            {/* Title & Description */}
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 pr-8 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">{t.projects.items[index]?.title || project.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-8 flex-grow transition-colors">{t.projects.items[index]?.description || project.description}</p>
            
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.techStack.map((tech) => (
                <span key={tech} className="text-[10px] uppercase tracking-wider font-bold text-cyan-700 dark:text-cyan-200 bg-cyan-100 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 px-2.5 py-1 rounded-md transition-colors">
                  {tech}
                </span>
              ))}
            </div>
            
            {project.projectUrl && (
              <Link 
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10"
                aria-label={`${t.projects.viewProject} ${project.title}`}
              ></Link>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
