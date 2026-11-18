export interface Experience {
  type: "Work" | "Organization";
  title: string;
  organization: string;
  period: string;
  description?: string;
}

// URUTAN HARUS SAMA dengan dictionaries.*.experience.items
export const experience: Experience[] = [
  {
    type: "Work",
    title: "Web Developer",
    organization: "Laboratorium Inkubator Bisnis Teknik Informatika, UIN Suska Riau",
    period: "Feb 2025 — Jul 2025",
    description:
      "Mengembangkan dua aplikasi web full-stack, termasuk sistem pembacaan Al-Qur'an dan Hadis. Membangun chatbot RAG untuk rekomendasi jurusan. Data entry & data cleaning dari literatur fisik ke database sebagai knowledge base AI.",
  },
  {
    type: "Work",
    title: "Freelance Web & Android Developer",
    organization: "Freelance",
    period: "Des 2024 — Sekarang",
    description:
      "Aplikasi web dan mobile (Android) kustom sesuai kebutuhan klien. Arsitektur database, integrasi API, Laravel, Next.js, Android Studio. Pengujian sistem, debugging, antarmuka responsif.",
  },
  {
    type: "Work",
    title: "Freelance Web Developer",
    organization: "UMKM Es Coklat Roti Kukus Bang Bewok",
    period: "Feb 2024 — Mar 2024",
    description:
      "Website penjualan interaktif + sistem kasir (POS) terintegrasi. Database transaksi penjualan dan inventaris barang, antarmuka user-friendly untuk kasir.",
  },
  {
    type: "Organization",
    title: "Anggota Divisi Technopreneurship",
    organization: "HIMATIF UIN Suska",
    period: "Jan 2025 — Des 2025",
    description:
      "Terlibat aktif dalam program kewirausahaan berbasis teknologi yang diselenggarakan oleh himpunan.",
  },
  {
    type: "Organization",
    title: "Koordinator Divisi Konsumsi",
    organization: "Aksi Sosial Mahasiswa Teknik Informatika",
    period: "Sep 2025 — Nov 2025",
    description:
      "Bertanggung jawab atas logistik dan konsumsi selama kegiatan bakti sosial berlangsung.",
  },
];

export const education = [
  {
    degree: "Sarjana (S1)",
    major: "Teknik Informatika",
    institution: "Universitas Islam Negeri Sultan Syarif Kasim Riau (UIN Suska Riau)",
    period: "Agu 2022 — Jul 2026",
    link: "https://www.uin-suska.ac.id/fakultas/",
  },
  {
    degree: "Madrasah Aliyah",
    major: "MIPA",
    institution: "Madrasah Aliyah Negeri 2 Kota Pekanbaru",
    period: "Jul 2020 — Mei 2022",
    link: "https://www.m2mpekanbaru.sch.id/",
  },
];
