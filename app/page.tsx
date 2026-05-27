import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Resume from "@/components/resume";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0f1124] p-4 sm:p-6">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-xl border-2 border-[#5e6af2] bg-[#f1f2fb]">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
