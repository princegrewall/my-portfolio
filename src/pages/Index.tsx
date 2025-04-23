
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import CodingProfilesSection from "@/components/CodingProfilesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CodingProfilesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
