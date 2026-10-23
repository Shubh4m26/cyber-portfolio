import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";

import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";
import Architecture from "@/components/architecture/Architecture";
import Contact from "@/components/sections/Contact";
import ExperienceTimeline from "@/components/timeline/ExperienceTimeline";
import Footer from "@/components/layout/Footer";
import HomeBlogSection from "@/components/blog/HomeBlogSection";

export default function Home() {
  return (
    <main className="bg-[#030712] text-white overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <ExperienceTimeline />
      <Projects />
      <Skills />
      <Architecture />
      <HomeBlogSection />
      <Contact />
      <Footer />
    
    </main>
  );
}