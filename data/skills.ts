import { Code, Database, Brain, Users, Lightbulb, Briefcase, MessageSquare, Network, Layout, Server, Braces, Binary, Eye, Timer } from "lucide-react";

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
      { name: "Tailwind CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Responsive Web", icon: Layout }
    ]
  },
  {
    category: "Database",
    skills: [
      { name: "MySQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
      { name: "PostgreSQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
      { name: "Skema Desain", icon: Network },
      { name: "Normalisasi", icon: Database },
      { name: "DBMS", icon: Server }
    ]
  },
  {
    category: "AI / ML",
    skills: [
      { name: "AI Engineering", icon: Brain },
      { name: "RAG", icon: Braces },
      { name: "Machine Learning", icon: Binary },
      { name: "Klasifikasi", icon: Network },
      { name: "Computer Vision", icon: Eye }
    ]
  },
  {
    category: "Soft Skills",
    skills: [
      { name: "Kerja Tim", icon: Users },
      { name: "Problem Solving", icon: Lightbulb },
      { name: "Manajemen Proyek", icon: Briefcase },
      { name: "Komunikasi", icon: MessageSquare },
      { name: "Bekerja di Bawah Tekanan", icon: Timer }
    ]
  }
];
