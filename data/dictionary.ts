export type Language = "id" | "en";

// Single source of truth untuk semua teks tampilan (prinsip template
// developer-portfolio: konten terpusat, jujur, dan bisa divalidasi).
// URUTAN array di bawah HARUS sama dengan urutan di data/experience.ts,
// data/projects.ts, dan data/certifications.ts — komponen memakai index.
export const dictionaries = {
  id: {
    nav: {
      about: "Tentang",
      skills: "Skill",
      experience: "Pengalaman",
      projects: "Proyek",
      publications: "Publikasi",
      contact: "Kontak",
      cv: "Unduh CV",
    },
    hero: {
      greeting: "Hai, saya",
      role: "WEB DEVELOPER · AI ENGINEERING",
      badge: "Fresh Graduate",
      location: "Pekanbaru, Riau — terbuka untuk kerja full-time & freelance",
      contactBtn: "KONTAK SAYA",
      projectBtn: "LIHAT PROYEK",
      cvBtn: "UNDUH CV",
      aboutTitle: "TENTANG SAYA",
      aboutDesc:
        "Lulusan S1 Teknik Informatika UIN Sultan Syarif Kasim Riau. Saya membangun aplikasi web full-stack dengan Next.js dan Laravel, merancang database yang terstruktur, dan mengintegrasikan AI — termasuk chatbot berbasis Hybrid RAG yang sudah dipublikasikan sebagai jurnal ilmiah. Saya terbiasa memproses data dengan ketelitian dan akurasi tinggi, dari data entry dan data cleaning sampai knowledge base AI.",
      point1: "Full-stack web: Next.js, Laravel, MySQL / PostgreSQL.",
      point2: "AI Engineering: Hybrid RAG, chatbot, Machine Learning, Data Mining (K-Means).",
      point3: "Data yang rapi: data entry, data cleaning, perancangan skema & normalisasi.",
      stats: [
        { value: "2", label: "Aplikasi full-stack di Lab UIN Suska" },
        { value: "1", label: "Jurnal ilmiah terpublikasi (JUPTIK)" },
        { value: "6", label: "Sertifikasi Meta, Google, IBM & freeCodeCamp" },
        { value: "3+", label: "Proyek klien freelance" },
      ],
    },
    skills: {
      title: "SKILLS & PERANGKAT LUNAK",
      subtitle: "Yang saya pakai sehari-hari — sesuai CV, tanpa dilebih-lebihkan.",
      webDev: "WEB DEVELOPMENT",
      database: "DATABASE & DATA",
      aiMl: "AI / ML",
      softSkills: "SOFT SKILLS",
    },
    experience: {
      title: "PENGALAMAN KERJA",
      orgTitle: "PENGALAMAN ORGANISASI",
      education: "PENDIDIKAN",
      certification: "SERTIFIKASI",
      publication: "PUBLIKASI ILMIAH",
      viewWebsite: "Lihat Website",
      viewCert: "Lihat Sertifikat",
      viewJournal: "Baca Jurnal",
      issuer: "Penerbit",
      items: [
        {
          title: "Web Developer",
          organization: "Laboratorium Inkubator Bisnis Teknik Informatika, UIN Suska Riau",
          period: "Feb 2025 — Jul 2025",
          description:
            "Mengembangkan dua aplikasi web full-stack, termasuk sistem pembacaan Al-Qur'an dan Hadis dengan UI interaktif dan responsif. Membangun chatbot pintar berbasis Retrieval-Augmented Generation (RAG) untuk rekomendasi jurusan kuliah. Melakukan data entry dan data cleaning dari literatur fisik/buku ke database, lalu merapikan dataset sebagai knowledge base utama sistem AI.",
        },
        {
          title: "Freelance Web & Android Developer",
          organization: "Freelance",
          period: "Des 2024 — Sekarang",
          description:
            "Merancang dan mengembangkan aplikasi web dan mobile (Android) kustom sesuai kebutuhan klien. Mengimplementasikan arsitektur database, integrasi API, serta framework modern seperti Laravel, Next.js, dan Android Studio. Melakukan pengujian sistem, debugging, dan memastikan antarmuka responsif.",
        },
        {
          title: "Freelance Web Developer",
          organization: "UMKM Es Coklat Roti Kukus Bang Bewok",
          period: "Feb 2024 — Mar 2024",
          description:
            "Merancang dan membangun website penjualan interaktif beserta sistem kasir (Point of Sale) terintegrasi. Mengelola struktur database transaksi penjualan dan inventaris barang, serta memastikan antarmuka mudah digunakan untuk mempercepat pencatatan kasir.",
        },
        {
          title: "Anggota Divisi Technopreneurship",
          organization: "Himpunan Mahasiswa Teknik Informatika (HIMATIF) UIN Suska",
          period: "Jan 2025 — Des 2025",
          description:
            "Terlibat aktif dalam program kewirausahaan berbasis teknologi yang diselenggarakan oleh himpunan.",
        },
        {
          title: "Koordinator Divisi Konsumsi",
          organization: "Aksi Sosial Mahasiswa Teknik Informatika",
          period: "Sep 2025 — Nov 2025",
          description:
            "Bertanggung jawab atas logistik dan konsumsi selama kegiatan bakti sosial berlangsung.",
        },
      ],
      eduItems: [
        {
          degree: "Sarjana (S1)",
          major: "Teknik Informatika",
          institution: "Universitas Islam Negeri Sultan Syarif Kasim Riau (UIN Suska Riau)",
          period: "Agu 2022 — Jul 2026",
        },
        {
          degree: "Madrasah Aliyah",
          major: "MIPA",
          institution: "Madrasah Aliyah Negeri 2 Kota Pekanbaru",
          period: "Jul 2020 — Mei 2022",
        },
      ],
      certItems: [
        { title: "Introduction to Front-End Development", issuer: "Meta — Coursera" },
        { title: "HTML and CSS in Depth", issuer: "Meta — Coursera" },
        { title: "Technical Support Fundamentals", issuer: "Google — Coursera" },
        { title: "Implementing the Application Front End Using React Components", issuer: "IBM" },
        { title: "Responsive Web Design", issuer: "freeCodeCamp" },
        { title: "JavaScript Algorithms and Data Structures", issuer: "freeCodeCamp" },
      ],
      pubItems: [
        {
          title: "Chatbot Generative AI Berbasis Hybrid RAG dengan Integrasi RIASEC untuk Rekomendasi Jurusan",
          journal: "Jurnal Pengembangan Teknologi Informasi dan Komunikasi (JUPTIK)",
          note: "Tugas akhir — chatbot rekomendasi jurusan berbasis Hybrid RAG + RIASEC.",
        },
        {
          title: "Program Maghrib Mengaji dalam Upaya Penuntasan Buta Aksara Al-Qur'an di Desa Dayang Suri",
          journal: "Jurnal Pengabdian Masyarakat dan Penerapan Ilmu Pengetahuan",
          note: "Pengabdian masyarakat.",
        },
      ],
    },
    projects: {
      title: "PROYEK SAYA",
      subtitle: "Proyek unggulan dulu, lalu proyek kuliah dan latihan. Status ditulis jujur — tidak ada yang diklaim sudah production tanpa bukti.",
      viewProject: "Lihat",
      featured: "PROYEK UNGGULAN",
      published: "Terpublikasi di JUPTIK",
      items: [
        {
          title: "Chatbot Rekomendasi Jurusan — Hybrid RAG + RIASEC",
          description:
            "Chatbot Generative AI berbasis Hybrid RAG dengan integrasi RIASEC untuk rekomendasi jurusan kuliah. Proyek tugas akhir, dipublikasikan sebagai jurnal ilmiah di JUPTIK. Saya membangun knowledge base-nya dari data entry dan data cleaning literatur fisik ke database yang terstruktur.",
        },
        {
          title: "Sistem Pembacaan Al-Qur'an & Hadis",
          description:
            "Aplikasi web full-stack untuk pembacaan Al-Qur'an dan Hadis dengan antarmuka interaktif dan responsif. Dibangun selama bekerja di Laboratorium Inkubator Bisnis TI UIN Suska Riau.",
        },
        {
          title: "Website Penjualan + Kasir (POS) — Es Coklat Roti Kukus Bang Bewok",
          description:
            "Website penjualan interaktif untuk UMKM beserta sistem kasir (Point of Sale) terintegrasi, database transaksi penjualan dan inventaris barang, dengan antarmuka yang mudah dipakai kasir.",
        },
        {
          title: "Klasifikasi Kualitas Biji Kopi",
          description:
            "Aplikasi machine learning untuk mengklasifikasikan kualitas biji kopi melalui analisis gambar. Proyek perkuliahan.",
        },
        {
          title: "Sistem Pengenalan Warna untuk Penyandang Buta Warna",
          description:
            "Aplikasi computer vision yang membantu penyandang buta warna mengenali warna benda di sekitarnya. Proyek perkuliahan.",
        },
      ],
    },
    highlights: {
      title: "SOROTAN PORTFOLIO",
      items: [
        {
          tag: "JUPTIK · Jurnal Ilmiah",
          title: "Chatbot Hybrid RAG + RIASEC",
          description:
            "Chatbot Generative AI berbasis Hybrid RAG dengan integrasi RIASEC untuk rekomendasi jurusan, dipublikasikan di JUPTIK. Knowledge base-nya dibangun dari data entry dan data cleaning literatur fisik.",
        },
        {
          tag: "Web Developer · Lab UIN Suska",
          title: "Laboratorium Inkubator Bisnis TI",
          description:
            "Mengembangkan dua aplikasi web full-stack, termasuk sistem pembacaan Al-Qur'an dan Hadis serta chatbot RAG untuk rekomendasi jurusan kuliah.",
        },
        {
          tag: "Freelance · UMKM",
          title: "Es Coklat Roti Kukus Bang Bewok",
          description:
            "Website penjualan interaktif beserta sistem kasir (POS) terintegrasi untuk UMKM — database transaksi dan inventaris yang rapi dan mudah dipakai kasir.",
        },
        {
          tag: "Anggota · Komunitas",
          title: "HIMATIF — Divisi Technopreneurship",
          description:
            "Anggota Divisi Technopreneurship Himpunan Mahasiswa Teknik Informatika UIN Suska, aktif dalam program kewirausahaan berbasis teknologi.",
        },
      ],
    },
    process: {
      eyebrow: "Cara saya bekerja",
      title: "Dari masalah menjadi progres",
      desc: "Saya mengerjakan setiap proyek dengan rasa ingin tahu, peduli pada orang yang akan memakainya, dan fokus pada hasil yang berguna.",
      steps: [
        { title: "Pahami", desc: "Perjelas masalahnya dan siapa yang terdampak — termasuk datanya." },
        { title: "Rancang", desc: "Rencanakan data, sistem, dan pengalamannya." },
        { title: "Bangun", desc: "Buat software yang berguna dan mudah dirawat." },
        { title: "Uji", desc: "Periksa detail, edge case, dan akurasi datanya." },
        { title: "Perbaiki", desc: "Belajar dari feedback dan terus iterasi." },
      ],
    },
    cta: {
      title: "Mari bangun sesuatu yang berguna",
      subtitle: "Punya ide atau peluang?",
      desc: "Saya terbuka untuk pekerjaan yang bermakna, kolaborasi, dan percakapan tentang teknologi.",
      button: "Hubungi Saya",
    },
    contact: {
      title: "MARI TERHUBUNG",
      desc: "Saya selalu terbuka untuk peluang kerja, proyek freelance, dan kolaborasi. Paling cepat dibalas lewat email atau WhatsApp.",
      address: "Alamat",
    },
    footer: {
      note: "Dibangun dengan Next.js & Tailwind CSS. Desain terinspirasi Linework (uicookies.com, gratis) — konten dan data milik Dwi Mahdini.",
    },
  },
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      publications: "Publications",
      contact: "Contact",
      cv: "Download CV",
    },
    hero: {
      greeting: "Hi, I'm",
      role: "WEB DEVELOPER · AI ENGINEERING",
      badge: "Fresh Graduate",
      location: "Pekanbaru, Riau — open to full-time work & freelance",
      contactBtn: "CONTACT ME",
      projectBtn: "VIEW PROJECTS",
      cvBtn: "DOWNLOAD CV",
      aboutTitle: "ABOUT ME",
      aboutDesc:
        "Informatics Engineering graduate from UIN Sultan Syarif Kasim Riau. I build full-stack web apps with Next.js and Laravel, design structured databases, and integrate AI — including a Hybrid RAG chatbot published as a scientific journal article. I handle data with high precision, from data entry and data cleaning to an AI knowledge base.",
      point1: "Full-stack web: Next.js, Laravel, MySQL / PostgreSQL.",
      point2: "AI Engineering: Hybrid RAG, chatbots, Machine Learning, Data Mining (K-Means).",
      point3: "Clean data: data entry, data cleaning, schema design & normalisation.",
      stats: [
        { value: "2", label: "Full-stack apps at UIN Suska Lab" },
        { value: "1", label: "Published journal article (JUPTIK)" },
        { value: "6", label: "Certifications from Meta, Google, IBM & freeCodeCamp" },
        { value: "3+", label: "Freelance client projects" },
      ],
    },
    skills: {
      title: "SKILLS & SOFTWARE",
      subtitle: "What I use day to day — as stated in my CV, nothing exaggerated.",
      webDev: "WEB DEVELOPMENT",
      database: "DATABASE & DATA",
      aiMl: "AI / ML",
      softSkills: "SOFT SKILLS",
    },
    experience: {
      title: "WORK EXPERIENCE",
      orgTitle: "ORGANISATION EXPERIENCE",
      education: "EDUCATION",
      certification: "CERTIFICATIONS",
      publication: "PUBLICATIONS",
      viewWebsite: "View Website",
      viewCert: "View Certificate",
      viewJournal: "Read Journal",
      issuer: "Issuer",
      items: [
        {
          title: "Web Developer",
          organization: "Business Incubator Laboratory of Informatics Engineering, UIN Suska Riau",
          period: "Feb 2025 — Jul 2025",
          description:
            "Built two full-stack web apps, including an interactive, responsive Qur'an and Hadith reading system. Built a Retrieval-Augmented Generation (RAG) chatbot for university-major recommendations. Did comprehensive data entry and data cleaning from physical books into the database, then structured the dataset as the AI system's main knowledge base.",
        },
        {
          title: "Freelance Web & Android Developer",
          organization: "Freelance",
          period: "Dec 2024 — Present",
          description:
            "Design and build custom web and mobile (Android) apps to client specifications. Implement database architecture, API integrations, and modern frameworks such as Laravel, Next.js, and Android Studio. Test, debug, and keep interfaces responsive.",
        },
        {
          title: "Freelance Web Developer",
          organization: "Es Coklat Roti Kukus Bang Bewok (MSME)",
          period: "Feb 2024 — Mar 2024",
          description:
            "Designed and built an interactive sales website with an integrated Point of Sale system. Managed the sales-transaction and inventory database, and kept the interface user-friendly to speed up cashier recording.",
        },
        {
          title: "Technopreneurship Division Member",
          organization: "Informatics Engineering Student Association (HIMATIF), UIN Suska",
          period: "Jan 2025 — Dec 2025",
          description:
            "Actively involved in technology-based entrepreneurship programs run by the student association.",
        },
        {
          title: "Consumption Division Coordinator",
          organization: "Informatics Engineering Student Social Action",
          period: "Sep 2025 — Nov 2025",
          description:
            "Responsible for logistics and catering during social service activities.",
        },
      ],
      eduItems: [
        {
          degree: "Bachelor's Degree (S1)",
          major: "Informatics Engineering",
          institution: "State Islamic University of Sultan Syarif Kasim Riau (UIN Suska Riau)",
          period: "Aug 2022 — Jul 2026",
        },
        {
          degree: "Islamic Senior High School",
          major: "Natural Sciences (MIPA)",
          institution: "State Islamic Senior High School 2 Pekanbaru",
          period: "Jul 2020 — May 2022",
        },
      ],
      certItems: [
        { title: "Introduction to Front-End Development", issuer: "Meta — Coursera" },
        { title: "HTML and CSS in Depth", issuer: "Meta — Coursera" },
        { title: "Technical Support Fundamentals", issuer: "Google — Coursera" },
        { title: "Implementing the Application Front End Using React Components", issuer: "IBM" },
        { title: "Responsive Web Design", issuer: "freeCodeCamp" },
        { title: "JavaScript Algorithms and Data Structures", issuer: "freeCodeCamp" },
      ],
      pubItems: [
        {
          title: "Generative AI Chatbot Based on Hybrid RAG with RIASEC Integration for Major Recommendations",
          journal: "Journal of Information and Communication Technology Development (JUPTIK)",
          note: "Final-year project — Hybrid RAG + RIASEC major-recommendation chatbot.",
        },
        {
          title: "Maghrib Mengaji Program to Eradicate Qur'an Illiteracy in Dayang Suri Village",
          journal: "Journal of Community Service and Applied Science",
          note: "Community service.",
        },
      ],
    },
    projects: {
      title: "MY PROJECTS",
      subtitle: "Featured work first, then coursework and exercises. Statuses are stated honestly — nothing is claimed as production without proof.",
      viewProject: "View",
      featured: "FEATURED PROJECT",
      published: "Published in JUPTIK",
      items: [
        {
          title: "Major-Recommendation Chatbot — Hybrid RAG + RIASEC",
          description:
            "A Generative AI chatbot based on Hybrid RAG with RIASEC integration for university-major recommendations. Final-year project, published as a journal article in JUPTIK. I built its knowledge base from data entry and data cleaning of physical literature into a structured database.",
        },
        {
          title: "Qur'an & Hadith Reading System",
          description:
            "A full-stack web app for reading the Qur'an and Hadith, with an interactive and responsive interface. Built while working at the Business Incubator Laboratory of Informatics Engineering, UIN Suska Riau.",
        },
        {
          title: "Sales Website + POS — Es Coklat Roti Kukus Bang Bewok",
          description:
            "An interactive sales website for an MSME with an integrated Point of Sale system, sales-transaction and inventory database, and a cashier-friendly interface.",
        },
        {
          title: "Coffee Bean Quality Classification",
          description:
            "A machine-learning app that classifies coffee bean quality through image analysis. Coursework project.",
        },
        {
          title: "Colour Recognition System for Colour-Blind Users",
          description:
            "A computer-vision app that helps colour-blind users recognise the colours of surrounding objects. Coursework project.",
        },
      ],
    },
    highlights: {
      title: "PORTFOLIO HIGHLIGHTS",
      items: [
        {
          tag: "JUPTIK · Scientific Journal",
          title: "Hybrid RAG + RIASEC Chatbot",
          description:
            "A Generative AI chatbot based on Hybrid RAG with RIASEC integration for major recommendations, published in JUPTIK. Its knowledge base was built from data entry and data cleaning of physical literature.",
        },
        {
          tag: "Web Developer · UIN Suska Lab",
          title: "Business Incubator Laboratory of Informatics Engineering",
          description:
            "Built two full-stack web apps, including a Qur'an and Hadith reading system and a RAG chatbot for university-major recommendations.",
        },
        {
          tag: "Freelance · MSME",
          title: "Es Coklat Roti Kukus Bang Bewok",
          description:
            "An interactive sales website with an integrated Point of Sale system for an MSME — a clean sales and inventory database that cashiers find easy to use.",
        },
        {
          tag: "Member · Community",
          title: "HIMATIF — Technopreneurship Division",
          description:
            "Member of the Technopreneurship Division of the Informatics Engineering Student Association at UIN Suska, active in technology-based entrepreneurship programs.",
        },
      ],
    },
    process: {
      eyebrow: "My process",
      title: "From problem to progress",
      desc: "I approach each project with curiosity, care for the people who will use it, and a focus on useful outcomes.",
      steps: [
        { title: "Understand", desc: "Clarify the problem and who it affects — including the data." },
        { title: "Design", desc: "Plan the data, system, and experience." },
        { title: "Build", desc: "Create useful, maintainable software." },
        { title: "Test", desc: "Check the details, edge cases, and data accuracy." },
        { title: "Improve", desc: "Learn from feedback and keep iterating." },
      ],
    },
    cta: {
      title: "Let's build something useful",
      subtitle: "Have an idea or an opportunity?",
      desc: "I'm open to meaningful work, collaborations, and conversations about technology.",
      button: "Get in touch",
    },
    contact: {
      title: "LET'S CONNECT",
      desc: "I'm open to job opportunities, freelance projects, and collaboration. Fastest replies via email or WhatsApp.",
      address: "Address",
    },
    footer: {
      note: "Built with Next.js & Tailwind CSS. Design inspired by Linework (uicookies.com, free) — content and data belong to Dwi Mahdini.",
    },
  },
};
