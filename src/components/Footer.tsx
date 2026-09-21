import React from 'react';
import { ArrowUp, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative z-10 py-16 border-t border-white/[0.08] bg-[#0B0714] text-[#81758F]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/[0.06]">
          {/* Left: Branding */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl overflow-hidden bg-white/[0.04] border border-white/10 flex items-center justify-center shrink-0">
              {PERSONAL_INFO.avatar ? (
                <img
                  src={PERSONAL_INFO.avatar}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-contain p-0.5"
                />
              ) : (
                <span className="font-bold text-xs text-[#F7F2FF]">{PERSONAL_INFO.monogram}</span>
              )}
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm tracking-wider text-[#F7F2FF]">
                {PERSONAL_INFO.name.toUpperCase()}
              </span>
              <span className="text-xs font-mono tracking-widest text-[#B86CFF]">
                AI DEVELOPER · FRONTEND ENGINEER
              </span>
            </div>
          </div>

          {/* Center: Quick Links */}
          <nav className="flex flex-wrap items-center gap-6 text-xs font-mono tracking-widest" aria-label="Footer Navigation">
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, 'home')}
              className="hover:text-[#F7F2FF] transition-colors"
            >
              HOME
            </a>
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, 'about')}
              className="hover:text-[#F7F2FF] transition-colors"
            >
              ABOUT
            </a>
            <a
              href="#work"
              onClick={(e) => scrollToSection(e, 'work')}
              className="hover:text-[#F7F2FF] transition-colors"
            >
              WORK
            </a>
            <a
              href="#skills"
              onClick={(e) => scrollToSection(e, 'skills')}
              className="hover:text-[#F7F2FF] transition-colors"
            >
              SKILLS
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="hover:text-[#F7F2FF] transition-colors"
            >
              CONTACT
            </a>
          </nav>

          {/* Right: Socials, Download ZIP & Back to Top */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-mono tracking-wider">
          
            <a
              href={`https://wa.me/${PERSONAL_INFO.whatsappRaw}?text=${encodeURIComponent("Hi Zainab, I visited your portfolio!")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#25D366] transition-colors"
            >
              WHATSAPP
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F7F2FF] transition-colors"
            >
              GITHUB
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F7F2FF] transition-colors"
            >
              LINKEDIN
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-[#F7F2FF] border border-white/10 transition-colors flex items-center gap-1 text-[11px]"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-3.5 h-3.5 text-[#E89BFF]" />
            </button>
          </div>
        </div>

        {/* Bottom Legal / Year */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono gap-4">
          <p>© 2026 Zainab . Engineered with React, TypeScript & Tailwind CSS.</p>
          <p className="text-[#81758F]">
            Designed with dark cinematic atmosphere & mathematical typography.
          </p>
        </div>
      </div>
    </footer>
  );
};
