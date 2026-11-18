export interface Project {
  title: string;
  description: string;
  techStack: string[];
  imageUrl?: string;
  projectUrl?: string;
  /** Status jujur ala template developer-portfolio: hanya "published" kalau ada bukti publik. */
  status: "published" | "completed" | "exercise";
  featured?: boolean;
  /** Kategori untuk filter gaya Linework. */
  category: "AI & RAG" | "Web App" | "AI / ML";
}

// URUTAN HARUS SAMA dengan dictionaries.*.projects.items
export const projects: Project[] = [
  {
    title: "Chatbot Rekomendasi Jurusan — Hybrid RAG + RIASEC",
    description:
      "Chatbot Generative AI berbasis Hybrid RAG dengan integrasi RIASEC untuk rekomendasi jurusan kuliah. Proyek tugas akhir, dipublikasikan di JUPTIK.",
    techStack: ["Next.js", "Python", "Hybrid RAG", "RIASEC", "PostgreSQL"],
    projectUrl: "https://ejournal.ummuba.ac.id/index.php/JUPTIK/en/article/view/4373",
    status: "published",
    featured: true,
    category: "AI & RAG",
  },
  {
    title: "Sistem Pembacaan Al-Qur'an & Hadis",
    description:
      "Aplikasi web full-stack untuk pembacaan Al-Qur'an dan Hadis dengan antarmuka interaktif dan responsif.",
    techStack: ["Next.js", "Laravel", "MySQL", "Tailwind CSS"],
    status: "completed",
    category: "Web App",
  },
  {
    title: "Website Penjualan + Kasir (POS) — Es Coklat Roti Kukus Bang Bewok",
    description:
      "Website penjualan interaktif untuk UMKM beserta sistem kasir (POS) terintegrasi, database transaksi dan inventaris.",
    techStack: ["Laravel", "MySQL", "JavaScript", "POS"],
    status: "completed",
    category: "Web App",
  },
  {
    title: "Klasifikasi Kualitas Biji Kopi",
    description:
      "Aplikasi machine learning untuk mengklasifikasikan kualitas biji kopi melalui analisis gambar.",
    techStack: ["Python", "Machine Learning", "Scikit-Learn"],
    status: "completed",
    category: "AI / ML",
  },
  {
    title: "Sistem Pengenalan Warna untuk Penyandang Buta Warna",
    description:
      "Aplikasi computer vision yang membantu penyandang buta warna mengenali warna benda di sekitarnya.",
    techStack: ["Python", "OpenCV", "Computer Vision"],
    status: "completed",
    category: "AI / ML",
  },
];
