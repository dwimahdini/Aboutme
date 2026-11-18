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

// Pita CTA hijau tua + detail kontak — mengikuti situs referensi.
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
    <section id="contact" className="bg-page px-6 py-[30px]">
      <div className="mx-auto w-full max-w-[1160px]">
        <div className="flex flex-col justify-between gap-6 overflow-hidden rounded-[6px] bg-pine p-[26px] text-cream md:flex-row md:items-center">
          <div>
            <span className="block text-[10px] font-bold uppercase tracking-[1.5px] text-gold">
              {t.nav.contact}
            </span>
            <h2 className="mt-2 font-serif text-[27px] font-semibold leading-tight">{t.cta.title}</h2>
            <p className="mt-1 text-[13px] leading-[1.6] text-cream/80">
              {t.cta.subtitle} {t.cta.desc}
            </p>
          </div>
          <a
            href="mailto:dwimahdini12@gmail.com"
            className="inline-flex min-h-[44px] shrink-0 items-center justify-center rounded-[5px] bg-cream px-5 text-[13px] font-bold text-pine transition-colors hover:text-gold"
          >
            {t.cta.button}
          </a>
        </div>

        <h2 className="mb-2 mt-10 font-serif text-[clamp(28px,4vw,42px)] font-semibold leading-[1.1] tracking-[-0.02em] text-leaf">
          {t.contact.title}
        </h2>
        <p className="mb-6 max-w-[680px] text-[14px] leading-[1.7] text-muted">{t.contact.desc}</p>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
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
                className="flex items-center gap-3 rounded-[4px] border border-line bg-page p-3 transition-colors hover:border-gold/60"
              >
                <contact.icon className="h-5 w-5 shrink-0 text-leaf" />
                <span className="grid min-w-0 gap-1">
                  <small className="text-[10px] font-semibold uppercase tracking-wide text-muted">{contact.name}</small>
                  <strong className="truncate text-[13px] font-semibold text-fg">{contact.value}</strong>
                </span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
