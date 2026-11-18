export interface Publication {
  title: string;
  journal: string;
  note: string;
  url?: string;
}

// URUTAN HARUS SAMA dengan dictionaries.*.experience.pubItems
// Hanya JUPTIK yang punya URL terverifikasi — publikasi kedua tanpa URL palsu.
export const publications: Publication[] = [
  {
    title:
      "Chatbot Generative AI Berbasis Hybrid RAG dengan Integrasi RIASEC untuk Rekomendasi Jurusan",
    journal: "Jurnal Pengembangan Teknologi Informasi dan Komunikasi (JUPTIK)",
    note: "Tugas akhir — chatbot rekomendasi jurusan berbasis Hybrid RAG + RIASEC.",
    url: "https://ejournal.ummuba.ac.id/index.php/JUPTIK/en/article/view/4373",
  },
  {
    title:
      "Program Maghrib Mengaji dalam Upaya Penuntasan Buta Aksara Al-Qur'an di Desa Dayang Suri",
    journal: "Jurnal Pengabdian Masyarakat dan Penerapan Ilmu Pengetahuan",
    note: "Pengabdian masyarakat.",
  },
];
