import About from "@/components/about/about";
import Intro from "@/components/about/intro";
import SectionDivider from "@/components/section-divider";
import Projects from "@/components/about/projects";
import Skills from "@/components/about/skills";
import Experience from "@/components/about/experience";
import Contact from "@/components/about/contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
