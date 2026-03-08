import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";
import PremiumCarousel from "@/components/PremiumCarousel";
import TimelineEducation from "@/components/TimelineEducation";

export default function Home() {
  return (
    <div className="scroll-smooth hero-bg text-gray-800 dark:text-gray-100 bg-white dark:bg-[#0a0a0a] transition-colors duration-300 min-h-screen">
      <Header />
      <main className="px-4 md:px-12 max-w-6xl mx-auto pt-10">
        <Hero />
        <About />
        <Skills />
        <PremiumCarousel />
        <TimelineEducation />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
