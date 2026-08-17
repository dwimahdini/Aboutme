export interface Project {
  title: string;
  description: string;
  techStack: string[];
  imageUrl?: string;
  projectUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Chatbot Rekomendasi Jurusan Kuliah",
    description: "Sistem chatbot untuk memberikan rekomendasi jurusan kuliah berdasarkan minat dan bakat calon mahasiswa. Merupakan proyek tugas akhir perkuliahan.",
    techStack: ["Next.js", "Python", "RAG", "Tailwind CSS"],
  },
  {
    title: "Klasifikasi Kualitas Biji Kopi",
    description: "Aplikasi berbasis machine learning untuk mengklasifikasikan kualitas biji kopi melalui analisis gambar.",
    techStack: ["Python", "Machine Learning", "Scikit-Learn"],
  },
  {
    title: "Sistem Pengenalan Warna",
    description: "Aplikasi computer vision yang dirancang khusus untuk membantu penyandang buta warna dalam mengenali warna benda di sekitarnya.",
    techStack: ["Python", "OpenCV", "Computer Vision"],
  }
];
