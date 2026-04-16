import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Highlights from "@/components/highlights";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center px-4 pb-16">
      <Intro />
      <SectionDivider />
      <Highlights />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
