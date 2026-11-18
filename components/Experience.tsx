"use client";

import { motion } from "framer-motion";
import { experience, education } from "@/data/experience";
import { certifications } from "@/data/certifications";
import { useLanguage } from "./Providers";

function TimelineList({ items, dictItems }: { items: typeof experience; dictItems: any[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
      {items.map((item) => {
        const originalIndex = experience.indexOf(item);
        const d = dictItems[originalIndex];
        return (
          <div key={item.title} className="relative pl-6 border-l border-gray-300 dark:border-white/10 transition-colors">
            <div className="absolute w-3 h-3 bg-cyan-500 dark:bg-cyan-400 rounded-full -left-[1.5px] top-1.5 shadow-[0_0_10px_rgba(6,182,212,0.5)] dark:shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
            <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200 transition-colors">{d?.title || item.title}</h4>
            <p className="text-sm font-medium text-cyan-600 dark:text-cyan-400 mb-2 transition-colors">{d?.organization || item.organization} • {d?.period || item.period}</p>
            {item.description && <p className="text-sm text-gray-600 dark:text-gray-500 leading-relaxed transition-colors">{d?.description || item.description}</p>}
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
    <section id="experience" className="flex flex-col gap-8">
      {/* Work */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-[#0f0f13] shadow-xl dark:shadow-none border border-gray-200 dark:border-white/5 rounded-[2rem] p-8 sm:p-10 w-full transition-colors"
      >
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 transition-colors">{t.experience.title}</h2>
        <TimelineList items={work} dictItems={t.experience.items} />
      </motion.div>

      {/* Organization */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-[#0f0f13] shadow-xl dark:shadow-none border border-gray-200 dark:border-white/5 rounded-[2rem] p-8 sm:p-10 w-full transition-colors"
      >
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 transition-colors">{t.experience.orgTitle}</h2>
        <TimelineList items={org} dictItems={t.experience.items} />
      </motion.div>

      {/* Education & Certs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white dark:bg-[#0f0f13] shadow-xl dark:shadow-none border border-gray-200 dark:border-white/5 rounded-[2rem] p-8 sm:p-10 transition-colors"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 transition-colors">{t.experience.education}</h2>
          <div className="space-y-6">
            {education.map((edu: any, index) => (
              <div key={index} className="flex flex-col items-start p-5 rounded-2xl border border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-white/[0.02] hover:bg-gray-100 dark:hover:bg-white/[0.04] transition-colors w-full relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-cyan-400 dark:bg-cyan-500/50 group-hover:bg-cyan-500 dark:group-hover:bg-cyan-400 transition-colors"></div>
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200 transition-colors">{t.experience.eduItems[index]?.degree || edu.degree}</h4>
                  {edu.major && (
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-cyan-100 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-500/20 uppercase tracking-wider transition-colors">
                      {t.experience.eduItems[index]?.major || edu.major}
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium mb-4 transition-colors">{t.experience.eduItems[index]?.institution || edu.institution}</p>
                <div className="flex items-center justify-between w-full mt-auto">
                  <div className="flex items-center gap-1.5 text-xs font-medium text-gray-500 transition-colors">
                    {edu.period}
                  </div>
                  {edu.link && (
                    <a href={edu.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-200 dark:bg-white/5 hover:bg-cyan-100 dark:hover:bg-cyan-500/10 text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 text-xs font-bold transition-colors">
                      {t.experience.viewWebsite}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white dark:bg-[#0f0f13] shadow-xl dark:shadow-none border border-gray-200 dark:border-white/5 rounded-[2rem] p-8 sm:p-10 transition-colors"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 transition-colors">{t.experience.certification}</h2>
          <div className="space-y-4">
            {certifications.map((cert: any, index) => (
              <div key={index} className="flex flex-col items-start p-5 rounded-2xl border border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-white/[0.02] hover:bg-gray-100 dark:hover:bg-white/[0.04] transition-colors w-full relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-orange-400 dark:bg-orange-500/50 group-hover:bg-orange-500 dark:group-hover:bg-orange-400 transition-colors"></div>
                <div className="flex items-center gap-3 mb-2">
                  {cert.icon && (
                    <div className="p-2 bg-orange-100 dark:bg-orange-500/10 rounded-lg text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-500/20 transition-colors">
                      <cert.icon className="w-5 h-5" />
                    </div>
                  )}
                  <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200 transition-colors">{t.experience.certItems[index]?.title || cert.title}</h4>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium mb-1 transition-colors">{t.experience.issuer}: {t.experience.certItems[index]?.issuer || cert.issuer}</p>
                {cert.date && <p className="text-xs text-gray-500 dark:text-gray-500 mb-3">{cert.date}</p>}
                {cert.image && (
                  <a href={cert.image} target="_blank" rel="noopener noreferrer" className="block mb-3 overflow-hidden rounded-xl border border-gray-200 dark:border-white/10 group/img">
                    <img src={cert.image} alt={cert.title} className="w-full h-auto transition-transform duration-300 group-hover/img:scale-[1.02]" loading="lazy" />
                  </a>
                )}
                <div className="flex flex-wrap gap-2">
                  {cert.url && (
                    <a href={cert.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-200 dark:bg-white/5 hover:bg-orange-100 dark:hover:bg-orange-500/10 text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 text-xs font-bold transition-colors">
                      {t.experience.viewCert}
                    </a>
                  )}
                  {cert.file && (
                    <a href={cert.file} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-orange-500 text-white hover:bg-orange-600 text-xs font-bold transition-colors">
                      Lihat File PDF
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
