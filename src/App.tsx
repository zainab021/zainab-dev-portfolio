import React, { useState, useEffect } from 'react';
import { AmbientBackground } from './components/AmbientBackground';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Timeline } from './components/Timeline';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Achievements } from './components/Achievements';
import { Personality } from './components/Personality';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = ['home', 'about', 'work', 'skills', 'experience', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0B0714] text-[#F7F2FF] selection:bg-[#B86CFF]/30 selection:text-white font-sans-main overflow-x-hidden">
      {/* Desktop Ambient Interactive Cursor */}
      <CustomCursor />

      {/* Cinematic Deep Atmosphere Background */}
      <AmbientBackground />

      {/* Sticky Translucent Frosted Glass Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <Stats />
        <About />
        <Projects />
        <Skills />
        <Timeline />
        <Services />
        <Process />
        <Achievements />
        <Personality />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
