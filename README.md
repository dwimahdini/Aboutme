# Portfolio — Dwi Mahdini, S.T.

Portfolio Web Developer & AI Engineering. S1 Teknik Informatika, UIN Suska Riau — Pekanbaru, Riau.

**Live / repo asal:** `https://github.com/dwimahdini/Aboutme` (Next.js 16, Tailwind CSS v4, TypeScript)

## Yang berubah di perombakan ini (18 Nov 2026, sesuai CV_ATS_Dwi_Mahdini.pdf)

Desain dasar mengikuti prinsip template **Developer Portfolio** (randifajar/developer-portfolio, MIT):
konten terpusat di `data/`, status proyek ditulis jujur, dan tidak ada link yang dikarang.

### Isi — diperbaiki agar sama dengan CV
- **Hero:** role `Web Developer · AI Engineering`, lokasi + status terbuka kerja/freelance, tombol **Unduh CV** (`public/CV-Dwi-Mahdini.pdf`).
- **Statistik:** 2 aplikasi full-stack di Lab UIN Suska, 1 jurnal terpublikasi, 5 sertifikasi, 3+ proyek freelance.
- **Pengalaman Kerja (baru, dulu salah):** Web Developer Lab Inkubator Bisnis TI UIN Suska **Feb–Jul 2025** (dulu tertulis "Kerja Praktik 2024"), Freelance Web & Android **Des 2024–Sekarang**, Freelance Web Developer UMKM Es Coklat Roti Kukus Bang Bewok **Feb–Mar 2024**. Kerja dan organisasi kini dipisah.
- **Pendidikan (tanggal diperbaiki):** S1 Agu 2022–Jul 2026; MAN 2 Kota Pekanbaru, MIPA, **Jul 2020–Mei 2022** (dulu 2019–2021).
- **Sertifikasi (2 → 5):** ditambah Meta Introduction to Front-End Development, Meta HTML and CSS in Depth, dan Google Technical Support Fundamentals. Hanya 2 sertifikat freeCodeCamp yang diberi tombol verifikasi — 3 lainnya tanpa link, karena URL-nya tidak ada di CV.
- **Publikasi (baru):** Jurnal JUPTIK — Chatbot Hybrid RAG + RIASEC (dengan link jurnal terverifikasi) dan Jurnal Pengabdian Masyarakat — Program Maghrib Mengaji.
- **Proyek (3 → 6):** Chatbot Hybrid RAG dijadikan **Featured Project** dengan badge Terpublikasi; ditambah Sistem Pembacaan Al-Qur'an & Hadis, Website + POS Bang Bewok, dan K-Means Kualitas Udara Pekanbaru. K-Means diberi label **Latihan** dan keterangan eksplisit "bukan skripsi".
- **Skill:** ditambah Python, HTML5, CSS3, Android Studio, Data Entry, Data Cleaning, Microsoft Excel, Google Sheets, Hybrid RAG, Chatbot. Soft skill disamakan dengan CV (Ketelitian & Akurasi Tinggi, Problem Solving, Kerja Sama Tim, Manajemen Waktu).
- **Kontak:** ditambah WhatsApp 0812-1566-0192. Alamat rumah lengkap dari CV **tidak** ditampilkan di portfolio — hanya "Pekanbaru, Riau".
- **Baru:** Navbar (navigasi + Unduh CV), section Publikasi, Footer, metadata/SEO.

### File yang diubah / ditambah
`data/dictionary.ts`, `data/experience.ts`, `data/projects.ts`, `data/skills.ts`, `data/certifications.ts`, `data/publications.ts` (baru), `components/Hero.tsx`, `components/About.tsx`, `components/Navbar.tsx` (baru), `components/Experience.tsx`, `components/Projects.tsx`, `components/Publications.tsx` (baru), `components/Skills.tsx`, `components/Contact.tsx`, `components/Footer.tsx` (baru), `app/page.tsx`, `app/layout.tsx`, `public/CV-Dwi-Mahdini.pdf` (baru).

## Cara pakai
1. Di VS Code, buka repo `Aboutme` kamu.
2. Copy semua file dari folder ini ke repo itu, timpa file yang sama namanya. Jangan copy folder `.next/` dan `node_modules/`.
3. `npm install`, lalu `npm run dev` — cek di http://localhost:3000.
4. `npm run build` untuk memastikan tidak ada error, lalu commit & push seperti biasa dari VS Code kamu.

## Menjalankan
```bash
npm install
npm run dev
```
Buka http://localhost:3000
