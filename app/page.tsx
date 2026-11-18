import Hero from "@/components/Hero";
import About from "@/components/About";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import Marquee from "@/components/Marquee";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Highlights from "@/components/Highlights";
import Publications from "@/components/Publications";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { ThemeLangToggle } from "@/components/ThemeLangToggle";

// Urutan mengikuti situs referensi developer-portfolio-delta-three.vercel.app:
// Hero (tagline + badge) → Proyek → Sorotan → Skill → Pengalaman →
// Publikasi → Proses 5 langkah → Kontak / CTA.
export default function Home() {
  return (
    <>
      <ThemeLangToggle />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Projects />
      <Highlights />
      <Skills />
      <Experience />
      <Publications />
      <Process />
      <Contact />
      <Footer />
    </>
  );
}
