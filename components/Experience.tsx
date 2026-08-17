"use client";

import { motion } from "framer-motion";
import { experience, education } from "@/data/experience";
import { certifications } from "@/data/certifications";
import { useLanguage } from "./Providers";

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section className="flex flex-col gap-8">
      {/* Experience */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-[#0f0f13] shadow-xl dark:shadow-none border border-gray-200 dark:border-white/5 rounded-[2rem] p-8 sm:p-10 w-full transition-colors"
      >
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 transition-colors">{t.experience.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {experience.map((item, index) => (
            <div key={index} className="relative pl-6 border-l border-gray-300 dark:border-white/10 transition-colors">
              <div className="absolute w-3 h-3 bg-cyan-500 dark:bg-cyan-400 rounded-full -left-[1.5px] top-1.5 shadow-[0_0_10px_rgba(6,182,212,0.5)] dark:shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
              <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200 transition-colors">{t.experience.items[index]?.title || item.title}</h4>
              <p className="text-sm font-medium text-cyan-600 dark:text-cyan-400 mb-2 transition-colors">{t.experience.items[index]?.organization || item.organization} • {t.experience.items[index]?.period || item.period}</p>
              {item.description && <p className="text-sm text-gray-600 dark:text-gray-500 leading-relaxed transition-colors">{t.experience.items[index]?.description || item.description}</p>}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Education & Certs Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Education */}
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
                  {edu.period && (
                    <div className="flex items-center gap-1.5 text-xs font-medium text-gray-500 transition-colors">
                      <svg className="w-3.5 h-3.5 text-gray-400 dark:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                      {edu.period}
                    </div>
                  )}
                  {edu.link && (
                    <a 
                      href={edu.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-200 dark:bg-white/5 hover:bg-cyan-100 dark:hover:bg-cyan-500/10 text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 text-xs font-bold transition-colors"
                    >
                      {t.experience.viewWebsite}
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white dark:bg-[#0f0f13] shadow-xl dark:shadow-none border border-gray-200 dark:border-white/5 rounded-[2rem] p-8 sm:p-10 transition-colors"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 transition-colors">{t.experience.certification}</h2>
          <div className="space-y-6">
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
                
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium mb-4 transition-colors">{t.experience.issuer}: {t.experience.certItems[index]?.issuer || cert.issuer}</p>
                
                <div className="flex items-center justify-between w-full mt-auto">
                  {cert.date && (
                    <div className="flex items-center gap-1.5 text-xs font-medium text-gray-500 transition-colors">
                      <svg className="w-3.5 h-3.5 text-gray-400 dark:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                      {cert.date}
                    </div>
                  )}
                  {/* Empty div to push button to right if date is absent */}
                  {!cert.date && <div></div>}
                  {cert.url && (
                    <a 
                      href={cert.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-200 dark:bg-white/5 hover:bg-orange-100 dark:hover:bg-orange-500/10 text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 text-xs font-bold transition-colors"
                    >
                      {t.experience.viewCert}
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
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
