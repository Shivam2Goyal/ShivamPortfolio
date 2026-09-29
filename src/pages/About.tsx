import Navbar from "@/components/Navbar";
import AboutSidebar from "@/components/AboutSidebar";
import { ProfilePhoto, ProfileIntro, LanguageChips } from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import CoursesAchievements from "@/components/CoursesAchievements";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const AboutPage = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          window.history.replaceState(null, "", window.location.pathname);
        }
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen font-sans relative">
      <Navbar />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 pt-28 lg:grid-cols-[160px_200px_minmax(0,1fr)] lg:gap-12 lg:px-10 lg:pt-36">
        <AboutSidebar />

        <div className="flex justify-center lg:block">
          <div className="flex flex-col items-center gap-3 lg:sticky lg:top-36">
            <ProfilePhoto />
            <LanguageChips />
          </div>
        </div>

        <main className="min-w-0 space-y-20 pb-20">
          <div id="about" className="scroll-mt-32">
            <ProfileIntro />
          </div>
          <Experience />
          <Projects />
          <Skills />
          <CoursesAchievements />

          <p className="text-center text-muted-foreground">
            Open to collaborations, internships, research opportunities, and creative
            partnerships.
          </p>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;
