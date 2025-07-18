import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";
import Project_Carroussels from "@/components/ProjectCarroussels";
import Education from "@/components/Education";

export default function Home() {
  return (
    <>
      <div className="scroll-smooth hero-bg text-gray-800 bg-white">
      <Header />
      <main className="px-4 md:px-12 max-w-6xl mx-auto">
        <Hero />
        <About />
        <Skills />
        <Project_Carroussels />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
    </>
  );
}
