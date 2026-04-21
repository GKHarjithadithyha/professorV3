import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { EducationSection } from "@/components/EducationSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ResearchSection } from "@/components/ResearchSection";
import { PublicationsSection } from "@/components/PublicationsSection";
import { PatentsAndBooksSection } from "@/components/PatentsAndBooksSection";
import { AwardsSection } from "@/components/AwardsSection";
import { AcademicActivitiesSection } from "@/components/AcademicActivitiesSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <EducationSection />
        <ExperienceSection />
        <ResearchSection />
        <PublicationsSection />
        <PatentsAndBooksSection />
        <AwardsSection />
        <AcademicActivitiesSection />
        <ContactSection />
      </main>

      <footer style={{ backgroundColor: 'var(--zapier-black)', color: 'var(--cream-white)', padding: 'var(--spacing-64) var(--spacing-24)', marginTop: 'var(--spacing-80)' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--spacing-24)' }}>
          <div style={{ display: 'flex', gap: 'var(--spacing-16)' }}>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              LI
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              GH
            </a>
          </div>
          <p className="caption" style={{ color: 'var(--sand)', margin: 0 }}>
            &copy; {new Date().getFullYear()} Dr. N. Bharathiraja. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
