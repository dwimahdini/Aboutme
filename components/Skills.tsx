"use client";

import { motion } from "framer-motion";
import { Code2, Database, BrainCircuit, Users } from "lucide-react";
import { skills } from "@/data/skills";
import { useLanguage } from "./Providers";

const groupIcons = [Code2, Database, BrainCircuit, Users];

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
    <section id="skills" className="bg-page px-6 py-[30px]">
      <div className="mx-auto w-full max-w-[1160px] border-t border-line pt-8">
        <span className="block text-[10px] font-bold uppercase tracking-[1.5px] text-coral">{t.nav.skills}</span>
        <h2 className="mt-2 font-serif text-[clamp(28px,4vw,42px)] font-semibold leading-[1.1] tracking-[-0.02em] text-leaf">
          {t.skills.title}
        </h2>
        <p className="mt-3 max-w-[680px] text-[14px] leading-[1.7] text-muted">{t.skills.subtitle}</p>

        <div className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skillGroup, index) => {
            const GroupIcon = groupIcons[index % groupIcons.length];
            return (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <span className="mb-3 grid h-[29px] w-[29px] place-items-center rounded-full bg-soft text-leaf">
                  <GroupIcon className="h-[18px] w-[18px]" />
                </span>
                <h3 className="mb-4 font-serif text-[15px] font-bold text-leaf">
                  {getCategoryName(skillGroup.category)}
                </h3>
                <div className="flex flex-col gap-2.5">
                  {skillGroup.skills.map((skill) => (
                    <div key={skill.name} className="flex items-center gap-2.5 text-[13px] font-medium text-fg transition-colors hover:text-leaf">
                      {skill.img ? (
                        <img src={skill.img} alt="" className="h-5 w-5 shrink-0 object-contain" />
                      ) : skill.icon ? (
                        <skill.icon className="h-[18px] w-[18px] shrink-0 text-leaf" />
                      ) : null}
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
