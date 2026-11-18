"use client";

import { motion, useScroll, useSpring } from "framer-motion";

// Bilah progres scroll di atas halaman — terisi saat pengguna menggulir.
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-1 z-[60] origin-left bg-gradient-to-r from-cyan-400 via-emerald-400 to-indigo-500"
    />
  );
}
