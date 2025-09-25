import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import CoursesAchievements from "@/components/CoursesAchievements";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-playfair">
      <Navbar />
      <main>
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <CoursesAchievements />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
