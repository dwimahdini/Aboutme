export type Language = "id" | "en";

export const dictionaries = {
  id: {
    hero: {
      greeting: "Hai, Selamat Datang di Profil",
      contactBtn: "KONTAK SAYA",
      projectBtn: "PROYEK SAYA",
      aboutTitle: "TENTANG SAYA",
      aboutDesc: "Lulusan baru Teknik Informatika dari UIN Sultan Syarif Kasim Riau. Saya berfokus pada pengembangan web menggunakan ekosistem modern seperti React, Next.js dan laravel, dipadukan dengan desain antarmuka yang memukau. Kemudian saya juga memahami perkembangan AI dan penggunaan nya.",
      point1: "Merancang dan membangun aplikasi web fullstack yang handal.",
      point2: "Mengeksplorasi integrasi AI (RAG, Machine Learning) ke dalam produk web.",
      point3: "Berdedikasi untuk menulis kode yang bersih dan mudah dirawat."
    },
    skills: {
      title: "SKILLS & PERANGKAT LUNAK",
      webDev: "WEB DEVELOPMENT",
      database: "DATABASE",
      aiMl: "AI / ML",
      softSkills: "SOFT SKILLS"
    },
    experience: {
      title: "PENGALAMAN PERKULIAHAN",
      education: "PENDIDIKAN",
      certification: "SERTIFIKASI",
      viewWebsite: "Lihat Website",
      viewCert: "Lihat Sertifikat",
      issuer: "Penerbit",
      items: [
        {
          title: "Kerja Praktik",
          organization: "Laboratorium Bisnis Teknik Informatika UIN SUSKA RIAU",
          period: "2024",
          description: "Melakukan kerja praktik untuk mengaplikasikan ilmu pengembangan perangkat lunak dan manajemen basis data dalam lingkungan laboratorium bisnis."
        },
        {
          title: "Anggota Divisi Technopreneurship",
          organization: "HIMATIF UIN SUSKA",
          period: "2025",
          description: "Terlibat aktif dalam program kewirausahaan berbasis teknologi yang diselenggarakan oleh himpunan."
        },
        {
          title: "Koordinator Divisi Konsumsi",
          organization: "Aksi Sosial Mahasiswa Teknik Informatika",
          period: "2025",
          description: "Bertanggung jawab atas logistik dan konsumsi selama kegiatan bakti sosial berlangsung."
        }
      ],
      eduItems: [
        {
          degree: "Sarjana (S1)",
          major: "Teknik Informatika",
          institution: "Universitas Islam Negeri Sultan Syarif Kasim Riau (UIN SUSKA RIAU)",
          period: "2022 - 2026"
        },
        {
          degree: "Sekolah Menengah Atas",
          major: "Ilmu Pengetahuan Alam (IPA)",
          institution: "Madrasah Aliyah Negeri 2 Kota Pekanbaru",
          period: "TAHUN 2019 - 2021"
        }
      ],
      certItems: [
        {
          title: "Responsive Web Design",
          issuer: "FreeCodeCamp"
        },
        {
          title: "JavaScript Algorithms and Data Structures",
          issuer: "FreeCodeCamp"
        }
      ]
    },
    projects: {
      title: "PROYEK SAYA",
      viewProject: "Lihat",
      items: [
        {
          title: "Chatbot Rekomendasi Jurusan Kuliah",
          description: "Sistem chatbot untuk memberikan rekomendasi jurusan kuliah berdasarkan minat dan bakat calon mahasiswa. Merupakan proyek tugas akhir perkuliahan."
        },
        {
          title: "Klasifikasi Kualitas Biji Kopi",
          description: "Aplikasi berbasis machine learning untuk mengklasifikasikan kualitas biji kopi melalui analisis gambar."
        },
        {
          title: "Sistem Pengenalan Warna",
          description: "Aplikasi computer vision yang dirancang khusus untuk membantu penyandang buta warna dalam mengenali warna benda di sekitarnya."
        }
      ]
    },
    contact: {
      title: "MARI TERHUBUNG",
      desc: "Saya selalu terbuka untuk mendiskusikan proyek baru, ide-ide kreatif, atau peluang kolaborasi. Silakan hubungi saya melalui salah satu platform di bawah ini!",
      address: "Alamat"
    }
  },
  en: {
    hero: {
      greeting: "Hi, Welcome to My Profile",
      contactBtn: "CONTACT ME",
      projectBtn: "MY PROJECTS",
      aboutTitle: "ABOUT ME",
      aboutDesc: "A fresh graduate in Informatics Engineering from UIN Sultan Syarif Kasim Riau. I focus on web development using modern ecosystems like React, Next.js, and Laravel, combined with stunning user interface design. I also have an understanding of AI advancements and their applications.",
      point1: "Designing and building reliable fullstack web applications.",
      point2: "Exploring AI integration (RAG, Machine Learning) into web products.",
      point3: "Dedicated to writing clean and maintainable code."
    },
    skills: {
      title: "SKILLS & SOFTWARE",
      webDev: "WEB DEVELOPMENT",
      database: "DATABASE",
      aiMl: "AI / ML",
      softSkills: "SOFT SKILLS"
    },
    experience: {
      title: "COLLEGE EXPERIENCE",
      education: "EDUCATION",
      certification: "CERTIFICATIONS",
      viewWebsite: "View Website",
      viewCert: "View Certificate",
      issuer: "Issuer",
      items: [
        {
          title: "Internship",
          organization: "Business Laboratory of Informatics Engineering UIN SUSKA RIAU",
          period: "2024",
          description: "Conducted internship to apply software development and database management skills in a business laboratory environment."
        },
        {
          title: "Technopreneurship Division Member",
          organization: "HIMATIF UIN SUSKA",
          period: "2025",
          description: "Actively involved in technology-based entrepreneurship programs organized by the student association."
        },
        {
          title: "Consumption Division Coordinator",
          organization: "Informatics Engineering Student Social Action",
          period: "2025",
          description: "Responsible for logistics and catering during social service activities."
        }
      ],
      eduItems: [
        {
          degree: "Bachelor's Degree (S1)",
          major: "Informatics Engineering",
          institution: "State Islamic University of Sultan Syarif Kasim Riau (UIN SUSKA RIAU)",
          period: "2022 - 2026"
        },
        {
          degree: "High School",
          major: "Natural Sciences (IPA)",
          institution: "State Islamic Senior High School 2 Pekanbaru",
          period: "2019 - 2021"
        }
      ],
      certItems: [
        {
          title: "Responsive Web Design",
          issuer: "FreeCodeCamp"
        },
        {
          title: "JavaScript Algorithms and Data Structures",
          issuer: "FreeCodeCamp"
        }
      ]
    },
    projects: {
      title: "MY PROJECTS",
      viewProject: "View",
      items: [
        {
          title: "College Major Recommendation Chatbot",
          description: "A chatbot system to provide college major recommendations based on prospective students' interests and talents. This is a final year college project."
        },
        {
          title: "Coffee Bean Quality Classification",
          description: "A machine learning-based application to classify the quality of coffee beans through image analysis."
        },
        {
          title: "Color Recognition System",
          description: "A computer vision application specifically designed to help color-blind people recognize the colors of surrounding objects."
        }
      ]
    },
    contact: {
      title: "LET'S CONNECT",
      desc: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to contact me through any of the platforms below!",
      address: "Address"
    }
  }
};
