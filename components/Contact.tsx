"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "./Providers";

// Ikon brand tidak lagi tersedia di lucide-react — didefinisikan sendiri.
const InstagramIcon = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const GithubIcon = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const FacebookIcon = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

// Pita CTA kobalt + kartu kontak ala Linework: outline tebal, bayangan keras.
export default function Contact() {
  const { t } = useLanguage();

  const contactLinks = [
    { name: "Email", value: "dwimahdini12@gmail.com", icon: Mail, href: "mailto:dwimahdini12@gmail.com" },
    { name: "WhatsApp", value: "0812-1566-0192", icon: Phone, href: "https://wa.me/6281215660192" },
    { name: t.contact.address, value: "Pekanbaru, Riau", icon: MapPin, href: "https://maps.google.com/?q=Pekanbaru,Riau" },
    { name: "Instagram", value: "@wikithey", icon: InstagramIcon, href: "https://instagram.com/wikithey" },
    { name: "Facebook", value: "Dwi Mahdini", icon: FacebookIcon, href: "https://facebook.com/dwimahdini" },
    { name: "GitHub", value: "dwimahdini", icon: GithubIcon, href: "https://github.com/dwimahdini" },
    { name: "LinkedIn", value: "dwimahdini", icon: LinkedinIcon, href: "https://linkedin.com/in/dwimahdini" },
  ];

  return (
    <section id="contact" className="bg-paper px-5 py-[64px]">
      <div className="mx-auto w-full max-w-[1240px]">
        <div className="flex flex-col justify-between gap-6 overflow-hidden rounded-[18px] border-[3px] border-ink bg-cobalt p-7 text-art shadow-lw md:flex-row md:items-center">
          <div>
            <span className="block text-[11px] font-bold uppercase tracking-[2px] text-sun">
              {t.nav.contact}
            </span>
            <h2 className="mt-2 font-display text-[clamp(26px,3.5vw,36px)] font-extrabold leading-tight">{t.cta.title}</h2>
            <p className="mt-2 max-w-[520px] text-[14px] leading-[1.6] text-art/85">
              {t.cta.subtitle} {t.cta.desc}
            </p>
          </div>
          <a href="mailto:dwimahdini12@gmail.com" className="btn-lw btn-sun shrink-0">
            {t.cta.button}
          </a>
        </div>

        <h2 className="mb-3 mt-12 font-display text-[clamp(34px,5vw,56px)] font-extrabold leading-[1.02] tracking-[-0.02em] text-ink">
          <span className="scribble">{t.contact.title}</span>
        </h2>
        <p className="mb-7 max-w-[680px] text-[15px] leading-[1.7] text-muted">{t.contact.desc}</p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contactLinks.map((contact, index) => (
            <motion.div
              key={contact.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.06 }}
            >
              <a
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="lw-card lw-card-hover flex items-center gap-3 p-4"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[10px] border-[3px] border-ink bg-sun text-ink shadow-lw-sm">
                  <contact.icon className="h-5 w-5" />
                </span>
                <span className="grid min-w-0 gap-1">
                  <small className="text-[10px] font-bold uppercase tracking-[1.4px] text-muted">{contact.name}</small>
                  <strong className="truncate text-[14px] font-bold text-ink">{contact.value}</strong>
                </span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
