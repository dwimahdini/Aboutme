"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "./Providers";

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
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export default function Contact() {
  const { t } = useLanguage();

  const contactLinks = [
    {
      name: "Email",
      value: "dwimahdini12@gmail.com",
      icon: Mail,
      href: "mailto:dwimahdini12@gmail.com",
      color: "text-emerald-600 dark:text-emerald-400",
      bg: "bg-emerald-100 dark:bg-emerald-500/10",
      border: "border-emerald-200 dark:border-emerald-500/20",
      hover: "hover:border-emerald-300 dark:hover:border-emerald-500/50 hover:bg-emerald-200 dark:hover:bg-emerald-500/20"
    },
    {
      name: "WhatsApp",
      value: "0812-1566-0192",
      icon: Phone,
      href: "https://wa.me/6281215660192",
      color: "text-green-600 dark:text-green-400",
      bg: "bg-green-100 dark:bg-green-500/10",
      border: "border-green-200 dark:border-green-500/20",
      hover: "hover:border-green-300 dark:hover:border-green-500/50 hover:bg-green-200 dark:hover:bg-green-500/20"
    },
    {
      name: t.contact.address,
      value: "Pekanbaru, Riau",
      icon: MapPin,
      href: "https://maps.google.com/?q=Pekanbaru,Riau",
      color: "text-red-600 dark:text-red-400",
      bg: "bg-red-100 dark:bg-red-500/10",
      border: "border-red-200 dark:border-red-500/20",
      hover: "hover:border-red-300 dark:hover:border-red-500/50 hover:bg-red-200 dark:hover:bg-red-500/20"
    },
    {
      name: "Instagram",
      value: "@wikithey",
      icon: InstagramIcon,
      href: "https://instagram.com/wikithey",
      color: "text-pink-600 dark:text-pink-400",
      bg: "bg-pink-100 dark:bg-pink-500/10",
      border: "border-pink-200 dark:border-pink-500/20",
      hover: "hover:border-pink-300 dark:hover:border-pink-500/50 hover:bg-pink-200 dark:hover:bg-pink-500/20"
    },
    {
      name: "Facebook",
      value: "Dwi Mahdini",
      icon: FacebookIcon,
      href: "https://facebook.com/dwimahdini",
      color: "text-blue-600 dark:text-blue-400",
      bg: "bg-blue-100 dark:bg-blue-500/10",
      border: "border-blue-200 dark:border-blue-500/20",
      hover: "hover:border-blue-300 dark:hover:border-blue-500/50 hover:bg-blue-200 dark:hover:bg-blue-500/20"
    },
    {
      name: "GitHub",
      value: "dwimahdini",
      icon: GithubIcon,
      href: "https://github.com/dwimahdini",
      color: "text-gray-700 dark:text-gray-200",
      bg: "bg-gray-200 dark:bg-gray-500/10",
      border: "border-gray-300 dark:border-gray-500/20",
      hover: "hover:border-gray-400 dark:hover:border-gray-400/50 hover:bg-gray-300 dark:hover:bg-gray-500/20"
    },
    {
      name: "LinkedIn",
      value: "dwimahdini",
      icon: LinkedinIcon,
      href: "https://linkedin.com/in/dwimahdini",
      color: "text-sky-600 dark:text-sky-400",
      bg: "bg-sky-100 dark:bg-sky-500/10",
      border: "border-sky-200 dark:border-sky-500/20",
      hover: "hover:border-sky-300 dark:hover:border-sky-500/50 hover:bg-sky-200 dark:hover:bg-sky-500/20"
    }
  ];

  return (
    <section className="bg-white dark:bg-[#0f0f13] shadow-xl dark:shadow-none border border-gray-200 dark:border-white/5 rounded-[2rem] p-8 sm:p-10 mb-8 transition-colors" id="contact">
      <p className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">{t.cta.title}</p>
      <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">{t.cta.subtitle}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">{t.cta.desc}</p>
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-indigo-100 dark:bg-indigo-500/10 rounded-xl transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600 dark:text-indigo-400"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white transition-colors">{t.contact.title}</h2>
      </div>
      
      <p className="text-gray-600 dark:text-gray-400 mb-10 leading-relaxed max-w-2xl transition-colors">
        {t.contact.desc}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {contactLinks.map((contact, index) => (
          <motion.div
            key={contact.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <a
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-4 p-5 rounded-2xl border bg-gray-50 dark:bg-white/[0.02] border-gray-200 dark:border-white/5 transition-all duration-300 group ${contact.hover}`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-colors ${contact.bg} ${contact.color} ${contact.border}`}>
                <contact.icon strokeWidth={2.5} className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1 transition-colors">{contact.name}</p>
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">{contact.value}</p>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
