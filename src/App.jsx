import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Common Interactive Components
import CustomCursor from './components/common/CustomCursor';
import ScrollProgress from './components/common/ScrollProgress';
import LoadingScreen from './components/common/LoadingScreen';
import ParticleBackground from './components/common/ParticleBackground';
import GradientBlobs from './components/common/GradientBlobs';

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Section Components
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Articles from './components/sections/Articles';
import CodingProfiles from './components/sections/CodingProfiles';
import Resume from './components/sections/Resume';
import CTA from './components/sections/CTA';
import SocialLinks from './components/sections/SocialLinks';
import Contact from './components/sections/Contact';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');

  // Handle smooth navigation to section
  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll spy to update active section in navbar
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'skills', 'projects', 'articles', 'coding', 'resume', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-grid-pattern" style={{ minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
      {/* Initial Cyber Boot Sequence Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Futuristic Animated Custom Cursor (Desktop Only) */}
      <CustomCursor />

      {/* Top Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Interactive tsParticles Constellation Background */}
      <ParticleBackground />

      {/* Ambient Gradient Blur Background Spheres */}
      <GradientBlobs />

      {/* Floating Glassmorphic Navigation Bar */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Website Structure */}
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero onNavigate={handleNavigate} />
        <About />
        <Skills />
        <Projects />
        <Articles />
        <CodingProfiles />
        <Resume />
        <CTA onNavigate={handleNavigate} />
        <SocialLinks />
        <Contact />
      </main>

      {/* Futuristic Cyber Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
