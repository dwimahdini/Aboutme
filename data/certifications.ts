import { Layout, Braces, Code, Wrench, Atom } from "lucide-react";

export interface Certification {
  title: string;
  issuer: string;
  date?: string;
  url?: string;
  /** File sertifikat di public/certificates/ — dibuka di tab baru. */
  file?: string;
  /** Gambar sertifikat (khusus freeCodeCamp PNG). */
  image?: string;
  icon?: any;
}

// URUTAN HARUS SAMA dengan dictionaries.*.experience.certItems
// Semua tanggal & link verifikasi dibaca langsung dari file sertifikat
// yang diunggah 18 Nov 2026 — tidak ada yang dikarang.
export const certifications: Certification[] = [
  {
    title: "Introduction to Front-End Development",
    issuer: "Meta — Coursera",
    date: "18 Agu 2026",
    url: "https://coursera.org/verify/DXIP03SSFWK2",
    file: "/certificates/meta-intro-front-end.pdf",
    icon: Code,
  },
  {
    title: "HTML and CSS in Depth",
    issuer: "Meta — Coursera",
    icon: Layout,
  },
  {
    title: "Technical Support Fundamentals",
    issuer: "Google — Coursera",
    date: "31 Okt 2026",
    url: "https://coursera.org/verify/PKE6GST0YQZH",
    file: "/certificates/google-technical-support-fundamentals.pdf",
    icon: Wrench,
  },
  {
    title: "Implementing the Application Front End Using React Components",
    issuer: "IBM",
    date: "04 Sep 2026",
    file: "/certificates/ibm-react-front-end.pdf",
    icon: Atom,
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "25 Sep 2025",
    url: "https://www.freecodecamp.org/certification/dwimahdini12/responsive-web-design",
    image: "/certificates/freecodecamp-responsive-web-design.png",
    icon: Layout,
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    url: "https://www.freecodecamp.org/certification/fcc-317e0a09-8e62-485f-9a8c-ad5b3c7359ab/javascript-algorithms-and-data-structures-v8",
    icon: Braces,
  },
];
