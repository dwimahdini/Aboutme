import {
  Brain,
  Users,
  Lightbulb,
  Network,
  Layout,
  Server,
  Braces,
  Binary,
  Eye,
  Timer,
  Database,
  FileSpreadsheet,
  Smartphone,
  CheckCircle2,
} from "lucide-react";

export interface SkillItem {
  name: string;
  icon?: any;
  img?: string;
}

export interface SkillCategory {
  category: string;
  skills: SkillItem[];
}

export const skills: SkillCategory[] = [
  {
    category: "Web Development",
    skills: [
      { name: "Next.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
      { name: "Laravel", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
      { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
      { name: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
      { name: "HTML5", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
      { name: "CSS3", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
      { name: "Tailwind CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Android Studio", icon: Smartphone },
      { name: "Responsive Web", icon: Layout },
    ],
  },
  {
    category: "Database & Data",
    skills: [
      { name: "MySQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
      { name: "PostgreSQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
      { name: "Perancangan Skema", icon: Network },
      { name: "Normalisasi", icon: Database },
      { name: "Data Entry", icon: CheckCircle2 },
      { name: "Data Cleaning", icon: CheckCircle2 },
      { name: "Microsoft Excel", icon: FileSpreadsheet },
      { name: "Google Sheets", icon: FileSpreadsheet },
    ],
  },
  {
    category: "AI / ML",
    skills: [
      { name: "AI Engineering", icon: Brain },
      { name: "Hybrid RAG", icon: Braces },
      { name: "Chatbot", icon: Braces },
      { name: "Machine Learning", icon: Binary },
      { name: "Data Mining (K-Means)", icon: Network },
      { name: "Computer Vision", icon: Eye },
    ],
  },
  {
    category: "Soft Skills",
    skills: [
      { name: "Ketelitian & Akurasi Tinggi", icon: CheckCircle2 },
      { name: "Problem Solving", icon: Lightbulb },
      { name: "Kerja Sama Tim", icon: Users },
      { name: "Manajemen Waktu", icon: Timer },
      { name: "Kerja Mandiri", icon: Server },
    ],
  },
];
