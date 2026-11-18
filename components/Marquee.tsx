"use client";

// Pita teknologi berjalan — animasi CSS murni (lihat .animate-marquee di globals.css).
const TECHS = [
  "Next.js", "Laravel", "React", "TypeScript", "JavaScript", "Python",
  "Hybrid RAG", "Machine Learning", "MySQL", "PostgreSQL", "Tailwind CSS",
  "Android Studio", "Data Cleaning", "K-Means",
];

export default function Marquee() {
  const row = [...TECHS, ...TECHS];
  return (
    <div aria-hidden className="overflow-hidden rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0f0f13] py-3 shadow-xl dark:shadow-none">
      <div className="animate-marquee flex w-max items-center gap-8 whitespace-nowrap">
        {row.map((tech, i) => (
          <span key={i} className="flex items-center gap-8 text-sm font-bold tracking-wide text-gray-500 dark:text-gray-400">
            {tech} <span className="text-cyan-500">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
