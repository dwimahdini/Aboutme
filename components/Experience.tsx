"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Users, GraduationCap, Award } from "lucide-react";
import { experience, education } from "@/data/experience";
import { certifications } from "@/data/certifications";
import { useLanguage } from "./Providers";

const iconFills = ["bg-tomato text-art", "bg-cobalt text-art", "bg-sun text-ink"];

function TimelineList({ items, dictItems, icon: Icon, fill }: { items: typeof experience; dictItems: any[]; icon: any; fill: string }) {
  return (
    <div className="space-y-4">
      {items.map((item) => {
        const originalIndex = experience.indexOf(item);
        const d = dictItems[originalIndex];
        return (
          <div key={item.title} className="lw-card flex max-w-[720px] gap-4 p-5">
            <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-[10px] border-[3px] border-ink shadow-lw-sm ${fill}`}>
              <Icon className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <p className="text-[11px] font-bold uppercase tracking-[1.4px] text-tomato-deep">{d?.period || item.period}</p>
              <h3 className="mt-1 font-display text-[19px] font-extrabold leading-snug text-ink">{d?.title || item.title}</h3>
              <p className="mt-0.5 text-[13px] font-bold text-cobalt">{d?.organization || item.organization}</p>
              {item.description && (
                <p className="mt-2 text-[14px] leading-[1.6] text-muted">{d?.description || item.description}</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function Experience() {
  const { t, language } = useLanguage();
  // Di HP hanya 2 sertifikat yang tampil dulu, sisanya lewat tombol "Lihat semua".
  const [showAllCerts, setShowAllCerts] = useState(false);
  const work = experience.filter((e) => e.type === "Work");
  const org = experience.filter((e) => e.type === "Organization");

  return (
    <section id="experience" className="bg-paper px-5 py-[64px]">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-12">
        {/* Work */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border-t-[3px] border-ink pt-12"
        >
          <span className="block text-[11px] font-bold uppercase tracking-[2px] text-tomato-deep">{t.nav.experience}</span>
          <h2 className="mb-7 mt-3 font-display text-[clamp(34px,5vw,56px)] font-extrabold leading-[1.02] tracking-[-0.02em] text-ink">
            <span className="scribble">{t.experience.title}</span>
          </h2>
          <TimelineList items={work} dictItems={t.experience.items} icon={Briefcase} fill="bg-tomato text-art" />
        </motion.div>

        {/* Organization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border-t-[3px] border-ink pt-12"
        >
          <h2 className="mb-7 font-display text-[clamp(34px,5vw,56px)] font-extrabold leading-[1.02] tracking-[-0.02em] text-ink">
            {t.experience.orgTitle}
          </h2>
          <TimelineList items={org} dictItems={t.experience.items} icon={Users} fill="bg-cobalt text-art" />
        </motion.div>

        {/* Education & Certs */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border-t-[3px] border-ink pt-12"
          >
            <h2 className="mb-7 font-display text-[clamp(34px,5vw,56px)] font-extrabold leading-[1.02] tracking-[-0.02em] text-ink">
              {t.experience.education}
            </h2>
            <div className="space-y-4">
              {education.map((edu: any, index) => (
                <div key={index} className="lw-card flex max-w-[720px] gap-4 p-5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[10px] border-[3px] border-ink bg-sun text-ink shadow-lw-sm">
                    <GraduationCap className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[11px] font-bold uppercase tracking-[1.4px] text-tomato-deep">{edu.period}</p>
                    <h3 className="mt-1 font-display text-[19px] font-extrabold leading-snug text-ink">
                      {t.experience.eduItems[index]?.degree || edu.degree}
                    </h3>
                    {edu.major && (
                      <span className="chip chip-paper mt-2">
                        {t.experience.eduItems[index]?.major || edu.major}
                      </span>
                    )}
                    <p className="mt-2 text-[14px] leading-[1.6] text-muted">
                      {t.experience.eduItems[index]?.institution || edu.institution}
                    </p>
                    {edu.link && (
                      <a href={edu.link} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-[13px] font-bold text-ink underline decoration-tomato decoration-[3px] underline-offset-4 hover:text-tomato-deep">
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
            className="border-t-[3px] border-ink pt-12"
          >
            <h2 className="mb-7 font-display text-[clamp(34px,5vw,56px)] font-extrabold leading-[1.02] tracking-[-0.02em] text-ink">
              {t.experience.certification}
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {certifications.map((cert: any, index) => (
                <div key={index} className={`lw-card p-4 ${index >= 2 && !showAllCerts ? "hidden sm:block" : ""}`}>
                  <span className="mb-3 grid h-9 w-9 place-items-center rounded-[10px] border-[3px] border-ink bg-tomato text-art shadow-lw-sm">
                    <Award className="h-4 w-4" />
                  </span>
                  <strong className="block font-display text-[16px] font-extrabold leading-snug text-ink">
                    {t.experience.certItems[index]?.title || cert.title}
                  </strong>
                  <p className="mt-1 min-h-[32px] text-[13px] leading-[1.4] text-muted">
                    {t.experience.certItems[index]?.issuer || cert.issuer}
                    {cert.date ? ` · ${cert.date}` : ""}
                  </p>
                  {cert.image && (
                    <a href={cert.image} target="_blank" rel="noopener noreferrer" className="mt-2 block overflow-hidden rounded-[10px] border-[3px] border-ink bg-art">
                      <img src={cert.image} alt={cert.title} className="h-auto w-full object-contain" loading="lazy" />
                    </a>
                  )}
                  <div className="mt-3 flex flex-wrap gap-2">
                    {cert.url && (
                      <a href={cert.url} target="_blank" rel="noopener noreferrer" className="text-[13px] font-bold text-ink underline decoration-tomato decoration-[3px] underline-offset-4 hover:text-tomato-deep">
                        {t.experience.viewCert} →
                      </a>
                    )}
                    {cert.file && (
                      <a href={cert.file} target="_blank" rel="noopener noreferrer" className="rounded-[8px] border-[3px] border-ink bg-ink px-2.5 py-1.5 text-[11px] font-bold text-paper shadow-lw-sm transition-transform hover:-translate-y-0.5">
                        Lihat File PDF
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => setShowAllCerts((v) => !v)}
              className="btn-lw btn-paper mt-4 w-full sm:hidden"
              aria-expanded={showAllCerts}
            >
              {showAllCerts
                ? (language === "id" ? "Tampilkan lebih sedikit" : "Show less")
                : (language === "id"
                    ? `Lihat semua sertifikat (${certifications.length})`
                    : `See all certificates (${certifications.length})`)}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
