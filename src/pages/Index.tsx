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
        
        {/* Beyond Tech Section */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
                Explore My Creative Side
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Discover my journey beyond technology - from poster designs and poetry 
                to the videos, music, and creative works that inspire me.
              </p>
              <a
                href="/creative"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-accent text-background rounded-lg hover:scale-105 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-glow"
              >
                Beyond Tech
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
