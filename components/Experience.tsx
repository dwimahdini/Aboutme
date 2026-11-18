"use client";

import { motion } from "framer-motion";
import { Briefcase, Users, GraduationCap, Award } from "lucide-react";
import { experience, education } from "@/data/experience";
import { certifications } from "@/data/certifications";
import { useLanguage } from "./Providers";

function TimelineList({ items, dictItems, icon: Icon }: { items: typeof experience; dictItems: any[]; icon: any }) {
  return (
    <div className="space-y-4">
      {items.map((item) => {
        const originalIndex = experience.indexOf(item);
        const d = dictItems[originalIndex];
        return (
          <div key={item.title} className="flex max-w-[680px] gap-4 rounded-[5px] border border-line bg-page p-4">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-pine text-cream">
              <Icon className="h-[18px] w-[18px]" />
            </span>
            <div className="min-w-0">
              <p className="text-[10px] font-bold tracking-wide text-gold">{d?.period || item.period}</p>
              <h3 className="mt-1 font-serif text-[17px] font-bold leading-snug text-leaf">{d?.title || item.title}</h3>
              <p className="mt-0.5 text-[12px] font-semibold text-leaf/80">{d?.organization || item.organization}</p>
              {item.description && (
                <p className="mt-2 text-[13px] leading-[1.5] text-muted">{d?.description || item.description}</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function Experience() {
  const { t } = useLanguage();
  const work = experience.filter((e) => e.type === "Work");
  const org = experience.filter((e) => e.type === "Organization");

  return (
    <section id="experience" className="bg-page px-6 py-[30px]">
      <div className="mx-auto flex w-full max-w-[1160px] flex-col gap-10">
        {/* Work */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border-t border-line pt-8"
        >
          <span className="block text-[10px] font-bold uppercase tracking-[1.5px] text-coral">{t.nav.experience}</span>
          <h2 className="mb-6 mt-2 font-serif text-[clamp(28px,4vw,42px)] font-semibold leading-[1.1] tracking-[-0.02em] text-leaf">
            {t.experience.title}
          </h2>
          <TimelineList items={work} dictItems={t.experience.items} icon={Briefcase} />
        </motion.div>

        {/* Organization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border-t border-line pt-8"
        >
          <h2 className="mb-6 font-serif text-[clamp(28px,4vw,42px)] font-semibold leading-[1.1] tracking-[-0.02em] text-leaf">
            {t.experience.orgTitle}
          </h2>
          <TimelineList items={org} dictItems={t.experience.items} icon={Users} />
        </motion.div>

        {/* Education & Certs */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border-t border-line pt-8"
          >
            <h2 className="mb-6 font-serif text-[clamp(28px,4vw,42px)] font-semibold leading-[1.1] tracking-[-0.02em] text-leaf">
              {t.experience.education}
            </h2>
            <div className="space-y-4">
              {education.map((edu: any, index) => (
                <div key={index} className="flex max-w-[680px] gap-4 rounded-[5px] border border-line bg-page p-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-pine text-cream">
                    <GraduationCap className="h-[18px] w-[18px]" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[10px] font-bold tracking-wide text-gold">{edu.period}</p>
                    <h3 className="mt-1 font-serif text-[17px] font-bold leading-snug text-leaf">
                      {t.experience.eduItems[index]?.degree || edu.degree}
                    </h3>
                    {edu.major && (
                      <span className="mt-1 inline-block rounded-[9px] bg-soft px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-fg">
                        {t.experience.eduItems[index]?.major || edu.major}
                      </span>
                    )}
                    <p className="mt-1.5 text-[13px] leading-[1.5] text-muted">
                      {t.experience.eduItems[index]?.institution || edu.institution}
                    </p>
                    {edu.link && (
                      <a href={edu.link} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-[12px] font-bold text-leaf hover:text-gold">
                        {t.experience.viewWebsite} →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border-t border-line pt-8"
          >
            <h2 className="mb-6 font-serif text-[clamp(28px,4vw,42px)] font-semibold leading-[1.1] tracking-[-0.02em] text-leaf">
              {t.experience.certification}
            </h2>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {certifications.map((cert: any, index) => (
                <div key={index} className="rounded-[4px] border border-line bg-page p-[13px_11px]">
                  <span className="mb-2 grid h-[25px] w-[25px] place-items-center rounded-full bg-pine text-gold">
                    <Award className="h-[15px] w-[15px]" />
                  </span>
                  <strong className="block font-serif text-[14px] font-bold leading-snug text-leaf">
                    {t.experience.certItems[index]?.title || cert.title}
                  </strong>
                  <p className="mt-1 min-h-[28px] text-[12px] leading-[1.35] text-muted">
                    {t.experience.certItems[index]?.issuer || cert.issuer}
                    {cert.date ? ` · ${cert.date}` : ""}
                  </p>
                  {cert.image && (
                    <a href={cert.image} target="_blank" rel="noopener noreferrer" className="mt-2 block overflow-hidden rounded-[4px] border border-line bg-white">
                      <img src={cert.image} alt={cert.title} className="h-auto w-full object-contain" loading="lazy" />
                    </a>
                  )}
                  <div className="mt-3 flex flex-wrap gap-2">
                    {cert.url && (
                      <a href={cert.url} target="_blank" rel="noopener noreferrer" className="text-[12px] font-bold text-leaf hover:text-gold">
                        {t.experience.viewCert} →
                      </a>
                    )}
                    {cert.file && (
                      <a href={cert.file} target="_blank" rel="noopener noreferrer" className="rounded-[5px] bg-pine px-2.5 py-1.5 text-[11px] font-bold text-cream transition-colors hover:bg-pine/85">
                        Lihat File PDF
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
