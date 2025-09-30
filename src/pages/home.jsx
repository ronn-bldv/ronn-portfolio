import { ThemeToggle } from "../assets/components/ThemeToggle";
import { StarBackground } from "../assets/components/StarBackground";
import { Navbar } from "../assets/components/Navbar";
import { HeroSection } from "../assets/components/HeroSection";
import { AboutSection } from "../assets/components/AboutSection";
import { SkillsSection } from "../assets/components/SkillsSection";
import { ProjectSection } from "../assets/components/ProjectSection";
import { ContactSection } from "../assets/components/ContactSection";

export const Home = () => {
    return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <ThemeToggle />

        <StarBackground />

        <Navbar />

        <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectSection />
            <ContactSection />
        </main>
    </div>
    );
};