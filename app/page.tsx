import Hero from "@/components/Hero";
import About from "@/components/About";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Highlights from "@/components/Highlights";
import Publications from "@/components/Publications";
import Process from "@/components/Process";
import TechStrip from "@/components/TechStrip";
import Quote from "@/components/Quote";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// Urutan mengikuti struktur Linework (uicookies.com):
// Hero → angka → proyek (filter) → wordmark teknologi → sorotan →
// skill → pengalaman → publikasi → proses → kutipan → CTA kontak.
// (Tanpa seksi layanan/toko — ini portfolio, bukan promosi.)
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <TechStrip />
      <Highlights />
      <Skills />
      <Experience />
      <Publications />
      <Process />
      <Quote />
      <Contact />
      <Footer />
    </>
  );
}
