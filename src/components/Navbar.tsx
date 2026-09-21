import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Sparkles, Github, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'WORK', href: '#work' },
    { name: 'EXPERIENCE', href: '#experience' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'CONTACT', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const navOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-[#0B0714]/80 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.4)]'
            : 'py-4 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Brand Monogram */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center gap-3 text-left focus:outline-none focus:ring-1 focus:ring-[#B86CFF] rounded-lg p-1"
            aria-label="Zainab  Home"
          >
            <div className="w-10 h-10 rounded-xl overflow-hidden bg-gradient-to-br from-[#6B2C91]/60 to-[#B86CFF]/40 border border-white/15 flex items-center justify-center font-bold tracking-wider text-sm text-[#F7F2FF] group-hover:border-[#B86CFF]/60 transition-all shadow-sm group-hover:scale-105">
              {PERSONAL_INFO.avatar ? (
                <img
                  src={PERSONAL_INFO.avatar}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-contain p-0.5"
                />
              ) : (
                <span>{PERSONAL_INFO.monogram}</span>
              )}
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm tracking-wide text-[#F7F2FF] group-hover:text-[#E89BFF] transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[10px] tracking-widest text-[#81758F] uppercase font-mono">
                AI / Frontend
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-medium tracking-[0.14em]" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection.toLowerCase() === link.name.toLowerCase() || 
                (link.name === 'WORK' && (activeSection === 'work' || activeSection === 'projects'));

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative py-1 text-xs tracking-widest transition-colors duration-200 flex items-center gap-1.5 ${
                    isActive ? 'text-[#F7F2FF]' : 'text-[#B9AEC8] hover:text-[#F7F2FF]'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <motion.span
                      layoutId="activeNavDot"
                      className="w-1.5 h-1.5 rounded-full bg-[#B86CFF] shadow-[0_0_8px_#B86CFF]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-[#B9AEC8] hover:text-[#F7F2FF] hover:border-[#B86CFF]/40 transition-colors"
              aria-label="GitHub Profile (zainab021)"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="relative group overflow-hidden px-5 py-2.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 hover:border-[#B86CFF]/50 text-xs font-medium tracking-wider text-[#F7F2FF] transition-all duration-300 shadow-sm flex items-center gap-2"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                LET'S CONNECT
                <ArrowUpRight className="w-3.5 h-3.5 text-[#E89BFF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-[#B86CFF]/20 to-[#FF8FD8]/20 transition-transform duration-300" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-[#F7F2FF] hover:text-[#E89BFF] focus:outline-none focus:ring-1 focus:ring-[#B86CFF]"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-x-0 top-[65px] z-30 bg-[#0B0714]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-8 shadow-2xl lg:hidden"
          >
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-[11px] font-mono tracking-widest text-[#81758F] uppercase">
                  Menu Navigation
                </span>
                <span className="flex items-center gap-1 text-[11px] text-[#E89BFF] font-mono">
                  <Sparkles className="w-3 h-3" />
                  Portfolio 2026
                </span>
              </div>

              {navLinks.map((link) => {
                const isActive = activeSection.toLowerCase() === link.name.toLowerCase();
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`text-lg font-medium tracking-wider flex items-center justify-between py-2 transition-colors ${
                      isActive ? 'text-[#E89BFF]' : 'text-[#F7F2FF] hover:text-[#B86CFF]'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive ? (
                      <span className="w-2 h-2 rounded-full bg-[#B86CFF] shadow-[0_0_8px_#B86CFF]" />
                    ) : (
                      <ArrowUpRight className="w-4 h-4 text-[#81758F]" />
                    )}
                  </a>
                );
              })}

              <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
                

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-center font-mono text-xs text-[#F7F2FF] tracking-wider flex items-center justify-center gap-2"
                >
                  <Github className="w-4 h-4 text-[#B86CFF]" />
                  <span>GITHUB (zainab021)</span>
                </a>

                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#6B2C91] via-[#B86CFF] to-[#FF8FD8] text-center font-medium text-sm text-white shadow-lg tracking-wider"
                >
                  LET'S CONNECT →
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
