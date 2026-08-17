export interface Experience {
  type: 'Work' | 'Organization';
  title: string;
  organization: string;
  period: string;
  description?: string;
}

export const experience: Experience[] = [
  {
    type: 'Work',
    title: "Kerja Praktik",
    organization: "Laboratorium Bisnis Teknik Informatika UIN SUSKA RIAU",
    period: "2024", // Assuming around this time based on graduation 
    description: "Melakukan kerja praktik untuk mengaplikasikan ilmu pengembangan perangkat lunak dan manajemen basis data dalam lingkungan laboratorium bisnis."
  },
  {
    type: 'Organization',
    title: "Anggota Divisi Technopreneurship",
    organization: "HIMATIF UIN SUSKA",
    period: "2025",
    description: "Terlibat aktif dalam program kewirausahaan berbasis teknologi yang diselenggarakan oleh himpunan."
  },
  {
    type: 'Organization',
    title: "Koordinator Divisi Konsumsi",
    organization: "Aksi Sosial Mahasiswa Teknik Informatika",
    period: "2025",
    description: "Bertanggung jawab atas logistik dan konsumsi selama kegiatan bakti sosial berlangsung."
  }
];

export const education = [
  {
    degree: "Sarjana (S1)",
    major: "Teknik Informatika",
    institution: "Universitas Islam Negeri Sultan Syarif Kasim Riau (UIN SUSKA RIAU)",
    period: "2022 - 2026",
    link: "https://www.uin-suska.ac.id/fakultas/"
  },
  {
    degree: "Sekolah Menengah Atas",
    major: "Ilmu Pengetahuan Alam (IPA)",
    institution: "Madrasah Aliyah Negeri 2 Kota Pekanbaru",
    period: "TAHUN 2019 - 2021",
    link: "https://www.m2mpekanbaru.sch.id/"
  }
];
