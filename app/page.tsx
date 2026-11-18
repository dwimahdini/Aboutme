import Hero from "@/components/Hero";
import About from "@/components/About";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Highlights from "@/components/Highlights";
import Publications from "@/components/Publications";
import Process from "@/components/Process";
import Services from "@/components/Services";
import TechStrip from "@/components/TechStrip";
import Quote from "@/components/Quote";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// Urutan mengikuti struktur Linework (uicookies.com):
// Hero → angka → proyek (filter) → wordmark teknologi → sorotan →
// skill → layanan & harga → pengalaman → publikasi → proses →
// kutipan → CTA kontak.
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
      <Services />
      <Experience />
      <Publications />
      <Process />
      <Quote />
      <Contact />
      <Footer />
    </>
  );
}
