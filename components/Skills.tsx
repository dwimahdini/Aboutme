"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import { useLanguage } from "./Providers";

const glowColors = [
  "text-cyan-600 dark:text-cyan-400 border-cyan-500/20 dark:border-cyan-400/30 bg-cyan-500/5 dark:bg-cyan-400/5 hover:bg-cyan-500/10 dark:hover:bg-cyan-400/10",
  "text-emerald-600 dark:text-emerald-400 border-emerald-500/20 dark:border-emerald-400/30 bg-emerald-500/5 dark:bg-emerald-400/5 hover:bg-emerald-500/10 dark:hover:bg-emerald-400/10",
  "text-purple-600 dark:text-purple-400 border-purple-500/20 dark:border-purple-400/30 bg-purple-500/5 dark:bg-purple-400/5 hover:bg-purple-500/10 dark:hover:bg-purple-400/10",
  "text-orange-600 dark:text-orange-400 border-orange-500/20 dark:border-orange-400/30 bg-orange-500/5 dark:bg-orange-400/5 hover:bg-orange-500/10 dark:hover:bg-orange-400/10"
];

export default function Skills() {
  const { t } = useLanguage();
  
  // Helper to map English/Indonesian fallback for category
  const getCategoryName = (originalCat: string) => {
    switch (originalCat) {
      case "WEB DEVELOPMENT": return t.skills.webDev;
      case "DATABASE & DATA": return t.skills.database;
      case "AI / ML": return t.skills.aiMl;
      case "SOFT SKILLS": return t.skills.softSkills;
      default: return originalCat;
    }
  };

  return (
    <section id="skills" className="bg-white dark:bg-[#0f0f13] shadow-xl dark:shadow-none border border-gray-200 dark:border-white/5 rounded-[2rem] p-8 sm:p-10 transition-colors">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 transition-colors">{t.skills.title}</h2>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">{t.skills.subtitle}</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {skills.map((skillGroup, index) => (
          <motion.div
            key={skillGroup.category}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <h3 className="text-sm font-bold text-gray-500 tracking-widest uppercase mb-4 transition-colors">
              {getCategoryName(skillGroup.category)}
            </h3>
            <div className="flex flex-col gap-3">
              {skillGroup.skills.map((skill) => (
                <div 
                  key={skill.name} 
                  className={`px-4 py-3 rounded-xl border flex items-center gap-3 transition-all ${glowColors[index % glowColors.length]}`}
                >
                  {skill.img ? (
                    <img 
                      src={skill.img} 
                      alt={skill.name} 
                      className={`w-6 h-6 object-contain shrink-0 ${skill.name === 'Next.js' ? 'dark:bg-white bg-transparent rounded-full p-0.5' : ''}`}
                    />
                  ) : skill.icon ? (
                    <skill.icon className="w-5 h-5 shrink-0" />
                  ) : null}
                  <span className="text-sm font-medium text-gray-800 dark:text-white/90 transition-colors">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
