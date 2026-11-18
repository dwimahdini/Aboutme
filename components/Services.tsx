"use client";

import { motion } from "framer-motion";
import { ShoppingBag, MessageCircle } from "lucide-react";
import { useLanguage } from "./Providers";

// Layanan & produk digital ala strip "services with prices" pada Linework.
// Harga terverifikasi langsung dari lynk.id/wikithey (18 Nov 2026).
// Jasa tanpa harga tercantum diarahkan ke WhatsApp — tanpa harga karangan.
const services = [
  {
    nameId: "Jasa Projek Aplikasi & Tugas Akhir",
    nameEn: "App Project & Final Assignment Service",
    descId: "Aplikasi web/mobile untuk perkuliahan — dikerjakan sesuai kebutuhanmu.",
    descEn: "Web/mobile apps for coursework — built to your needs.",
    price: null as string | null,
    oldPrice: null as string | null,
    href: "https://wa.me/6281215660192",
    ctaId: "Tanya via WhatsApp",
    ctaEn: "Ask via WhatsApp",
    wa: true,
  },
  {
    nameId: "Kelas Project PHP",
    nameEn: "PHP Project Class",
    descId: "Belajar membangun proyek PHP nyata dari nol sampai jadi.",
    descEn: "Learn to build a real PHP project from zero to done.",
    price: "Rp149.000",
    oldPrice: "Rp250.000",
    href: "https://lynk.id/wikithey",
    ctaId: "Beli di Lynk.id",
    ctaEn: "Buy on Lynk.id",
    wa: false,
  },
  {
    nameId: "SPK SMART Laravel",
    nameEn: "SPK SMART Laravel",
    descId: "Source code Sistem Pendukung Keputusan metode SMART berbasis Laravel.",
    descEn: "Decision Support System source code (SMART method) built with Laravel.",
    price: "Rp250.000",
    oldPrice: null,
    href: "https://lynk.id/wikithey",
    ctaId: "Beli di Lynk.id",
    ctaEn: "Buy on Lynk.id",
    wa: false,
  },
  {
    nameId: "E-Book Dasar-dasar Pemrograman Web",
    nameEn: "Web Programming Basics E-Book",
    descId: "Dasar-dasar pemrograman web untuk pemula — ringkas dan praktis.",
    descEn: "Web programming basics for beginners — concise and practical.",
    price: "Rp97.975",
    oldPrice: "Rp125.000",
    href: "https://lynk.id/wikithey",
    ctaId: "Beli di Lynk.id",
    ctaEn: "Buy on Lynk.id",
    wa: false,
  },
  {
    nameId: "E-Book Pemrograman Python",
    nameEn: "Python Programming E-Book",
    descId: "Belajar Python dari dasar dengan contoh yang mudah diikuti.",
    descEn: "Learn Python from the basics with easy-to-follow examples.",
    price: "Rp10.000",
    oldPrice: "Rp20.000",
    href: "https://lynk.id/wikithey",
    ctaId: "Beli di Lynk.id",
    ctaEn: "Buy on Lynk.id",
    wa: false,
  },
  {
    nameId: "Paket 70 E-Book Pemrograman",
    nameEn: "70 Programming E-Books Bundle",
    descId: "70 e-book belajar pemrograman (bahasa Inggris) dalam satu paket.",
    descEn: "70 programming e-books (English) in one bundle.",
    price: "Rp10.000",
    oldPrice: "Rp70.000",
    href: "https://lynk.id/wikithey",
    ctaId: "Beli di Lynk.id",
    ctaEn: "Buy on Lynk.id",
    wa: false,
  },
];

export default function Services() {
  const { language } = useLanguage();
  const id = language === "id";

  return (
    <section id="services" className="bg-paper px-5 py-[64px]">
      <div className="mx-auto w-full max-w-[1240px] border-t-[3px] border-ink pt-12">
        <span className="block text-[11px] font-bold uppercase tracking-[2px] text-tomato-deep">
          {id ? "Layanan & Toko Digital" : "Services & Digital Store"}
        </span>
        <h2 className="mt-3 font-display text-[clamp(34px,5vw,56px)] font-extrabold leading-[1.02] tracking-[-0.02em] text-ink">
          <span className="scribble">
            {id ? "Jasa & produk digital" : "Services & digital products"}
          </span>
        </h2>
        <p className="mt-4 max-w-[680px] text-[15px] leading-[1.7] text-muted">
          {id
            ? "Jasa projek, kelas, dan e-book pemrograman — harga sesuai toko Lynk.id saya."
            : "Project services, classes, and programming e-books — priced as on my Lynk.id store."}
        </p>

        <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, index) => (
            <motion.article
              key={s.nameId}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
              className="lw-card lw-card-hover flex flex-col p-5"
            >
              <span className="chip chip-sun self-start">{id ? "Lynk.id / wikithey" : "Lynk.id / wikithey"}</span>
              <h3 className="mt-4 font-display text-[20px] font-extrabold leading-snug text-ink">
                {id ? s.nameId : s.nameEn}
              </h3>
              <p className="mt-2 flex-1 text-[14px] leading-[1.6] text-muted">
                {id ? s.descId : s.descEn}
              </p>
              <p className="mt-4">
                {s.price ? (
                  <>
                    <span className="font-display text-[26px] font-extrabold text-tomato-deep">{s.price}</span>
                    {s.oldPrice && (
                      <span className="ml-2 text-[14px] font-bold text-muted line-through">{s.oldPrice}</span>
                    )}
                  </>
                ) : (
                  <span className="font-display text-[20px] font-extrabold text-ink">
                    {id ? "Harga via WhatsApp" : "Price via WhatsApp"}
                  </span>
                )}
              </p>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn-lw mt-4 w-full ${s.wa ? "btn-cobalt" : "btn-ink"}`}
              >
                {s.wa ? <MessageCircle className="h-4 w-4" /> : <ShoppingBag className="h-4 w-4" />}
                {id ? s.ctaId : s.ctaEn}
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
