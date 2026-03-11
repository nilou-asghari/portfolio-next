import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Resume from "@/components/Resume";
import Project from "@/components/Project";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Resume />
      <Project />
      <Contact />
    </main>
  );
}
