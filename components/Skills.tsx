"use client";

import { motion } from "framer-motion";
import { Code2, Database, BrainCircuit, Users } from "lucide-react";
import { skills } from "@/data/skills";
import { useLanguage } from "./Providers";

const groupIcons = [Code2, Database, BrainCircuit, Users];
const groupFills = ["bg-tomato text-art", "bg-cobalt text-art", "bg-sun text-ink", "bg-tomato text-art"];

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
    <section id="skills" className="bg-paper px-5 py-[64px]">
      <div className="mx-auto w-full max-w-[1240px] border-t-[3px] border-ink pt-12">
        <span className="block text-[11px] font-bold uppercase tracking-[2px] text-tomato-deep">{t.nav.skills}</span>
        <h2 className="mt-3 font-display text-[clamp(34px,5vw,56px)] font-extrabold leading-[1.02] tracking-[-0.02em] text-ink">
          <span className="scribble">{t.skills.title}</span>
        </h2>
        <p className="mt-4 max-w-[680px] text-[15px] leading-[1.7] text-muted">{t.skills.subtitle}</p>

        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skillGroup, index) => {
            const GroupIcon = groupIcons[index % groupIcons.length];
            return (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="lw-card lw-card-hover p-5"
              >
                <span className={`mb-4 grid h-11 w-11 place-items-center rounded-[10px] border-[3px] border-ink shadow-lw-sm ${groupFills[index % groupFills.length]}`}>
                  <GroupIcon className="h-5 w-5" />
                </span>
                <h3 className="mb-4 font-display text-[18px] font-extrabold text-ink">
                  {getCategoryName(skillGroup.category)}
                </h3>
                <div className="flex flex-col gap-2.5">
                  {skillGroup.skills.map((skill) => (
                    <div key={skill.name} className="flex items-center gap-2.5 text-[14px] font-bold text-ink">
                      <span className="h-2 w-2 shrink-0 rounded-full bg-tomato ring-2 ring-ink/10" aria-hidden="true" />
                      {skill.img ? (
                        <img src={skill.img} alt="" className="h-5 w-5 shrink-0 object-contain" />
                      ) : skill.icon ? (
                        <skill.icon className="h-[18px] w-[18px] shrink-0 text-cobalt" />
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
