import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import GithubActivity from "@/components/github-activity";
import Contact from "@/components/contact";

export default function HomePage() {
  return (
    <main className="bg-background">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <GithubActivity />
      <Contact />
    </main>
  );
}

