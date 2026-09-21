import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Terminal, Code2, Cpu, Github } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import girlAvatarImg from '../assets/images/girl_no_bg.png';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[calc(100svh-4rem)] flex items-center pt-[clamp(4.5rem,7vh,6.5rem)] pb-8 sm:pb-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start z-10"
          >
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono tracking-[0.14em] text-[#CDB4FF] mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF8FD8] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B86CFF]"></span>
              </span>
              <span>{PERSONAL_INFO.availability}</span>
            </div>

            {/* Small Label */}
            <div className="text-xs sm:text-sm font-mono uppercase tracking-[0.14em] text-[#B9AEC8] mb-3 flex items-center gap-2">
              <span className="text-[#B86CFF]">/</span>
              <span>{PERSONAL_INFO.role}</span>
            </div>

            {/* Main Headline with Serif Italic Emphasis */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-light tracking-tight text-[#F7F2FF] leading-[1.08] mb-4 max-w-2xl">
              I build{' '}
              <span className="font-serif-editorial italic font-normal text-[#E89BFF] relative inline-block pr-1">
                intelligent
                <span className="absolute bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[#B86CFF] to-transparent opacity-60" />
              </span>{' '}
              digital experiences that feel human.
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#B9AEC8] font-normal leading-relaxed mb-6 max-w-xl">
              {PERSONAL_INFO.bioSubheadline}
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <button
                type="button"
                onClick={() => scrollTo('work')}
                className="group relative px-6 py-3.5 rounded-full bg-[#B86CFF] hover:bg-[#a652f7] text-[#0B0714] font-semibold text-xs tracking-widest uppercase transition-all duration-300 shadow-[0_0_24px_rgba(184,108,255,0.35)] flex items-center gap-2"
              >
                <span>VIEW MY WORK</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo('about')}
                className="px-6 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-[#F7F2FF] font-medium text-xs tracking-widest uppercase transition-all duration-300"
              >
                ABOUT ME →
              </button>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#B86CFF]/40 text-[#F7F2FF] hover:text-[#E89BFF] font-medium text-xs tracking-wider flex items-center gap-2 transition-all duration-300"
                aria-label="GitHub Profile (zainab021)"
              >
                <Github className="w-4 h-4 text-[#B86CFF]" />
                <span className="font-mono text-xs">GITHUB</span>
              </a>
            </div>

            {/* Live Terminal Micro-status */}
            <div className="flex items-center gap-3 text-xs text-[#81758F] font-mono border-t border-white/10 pt-5 w-full max-w-md">
              <Terminal className="w-3.5 h-3.5 text-[#B86CFF]" />
              <span>STACK: Python · FastAPI · React · Vector DBs · Tailwind</span>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual with Character PNG Illustration */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[380px] sm:min-h-[440px] md:min-h-[480px]">
            {/* Ambient Backlight Glow */}
            <div className="absolute w-72 h-72 sm:w-[420px] sm:h-[420px] rounded-full bg-gradient-to-tr from-[#6B2C91]/35 via-[#B86CFF]/25 to-[#FF8FD8]/25 blur-[100px] pointer-events-none" />

            {/* Central Orbital Halo System behind Character */}
            <div className="absolute w-72 h-72 sm:w-[380px] sm:h-[380px] flex items-center justify-center pointer-events-none">
              {/* Outer Orbital Ring 1 */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border border-dashed border-[#B86CFF]/30"
              >
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#E89BFF] shadow-[0_0_10px_#E89BFF]" />
              </motion.div>

              {/* Middle Orbital Ring 2 */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-8 rounded-full border border-white/10"
              >
                <div className="absolute bottom-4 right-1/4 w-2 h-2 rounded-full bg-[#FF8FD8] shadow-[0_0_8px_#FF8FD8]" />
              </motion.div>

              {/* Radiant Core Glow */}
              <div className="w-48 h-48 sm:w-60 sm:h-60 rounded-full bg-gradient-to-br from-[#241132]/80 via-[#6B2C91]/40 to-transparent blur-2xl" />
            </div>

            {/* Central Character Figure */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 flex flex-col items-center justify-end group"
            >
              <img
                src={girlAvatarImg}
                onError={(e) => {
                  e.currentTarget.src = '/girl_no_bg.png';
                }}
                alt="Zainab Zia — AI Developer"
                referrerPolicy="no-referrer"
                className="relative z-10 max-h-[380px] sm:max-h-[440px] md:max-h-[min(480px,50vh)] w-auto object-contain drop-shadow-[0_16px_50px_rgba(184,108,255,0.35)] transition-transform duration-700 ease-out group-hover:scale-[1.02] select-none pointer-events-none"
                style={{
                  maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 92%, rgba(0,0,0,0) 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 92%, rgba(0,0,0,0) 100%)',
                }}
              />

              {/* Character Tech Pill / Tag */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute bottom-3 sm:bottom-4 z-20 px-3.5 py-1.5 rounded-full glass-panel border border-[#B86CFF]/30 shadow-[0_4px_24px_rgba(184,108,255,0.2)] backdrop-blur-md flex items-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#E89BFF] animate-pulse" />
                <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-[#F7F2FF] uppercase font-medium">
                  AI × HUMAN
                </span>
                <span className="hidden sm:inline text-[9px] text-[#B9AEC8] font-light">
                  • Autonomous
                </span>
              </motion.div>
            </motion.div>

            {/* Floating Card 01: AI DEVELOPMENT (Top-Left) */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-3 sm:top-2 -left-2 sm:-left-6 glass-panel rounded-2xl p-4 max-w-[210px] shadow-xl border border-white/10 z-20 backdrop-blur-xl"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono text-[#E89BFF] tracking-widest">01</span>
                <Cpu className="w-3.5 h-3.5 text-[#B86CFF]" />
              </div>
              <h2 className="text-xs font-semibold text-[#F7F2FF] tracking-wide mb-1">
                AI DEVELOPMENT
              </h2>
              <p className="text-[11px] text-[#B9AEC8] leading-tight">
                Building intelligent applications with modern AI workflows.
              </p>
            </motion.div>

            {/* Floating Card 02: FRONTEND CRAFT (Bottom-Right) */}
            <motion.div
              animate={{ y: [0, 9, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-5 sm:bottom-2 -right-2 sm:-right-6 glass-panel rounded-2xl p-4 max-w-[220px] shadow-xl border border-white/10 z-20 backdrop-blur-xl"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono text-[#FF8FD8] tracking-widest">02</span>
                <Code2 className="w-3.5 h-3.5 text-[#FF8FD8]" />
              </div>
              <h2 className="text-xs font-semibold text-[#F7F2FF] tracking-wide mb-1">
                FRONTEND CRAFT
              </h2>
              <p className="text-[11px] text-[#B9AEC8] leading-tight">
                Interactive interfaces designed for responsive human ease.
              </p>
            </motion.div>

            {/* Floating Card 03: CURRENTLY EXPLORING (Bottom-Left) */}
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              className="hidden sm:block absolute bottom-12 -left-8 glass-panel rounded-2xl px-4 py-3 max-w-[200px] shadow-lg border border-white/10 z-20 backdrop-blur-xl"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B86CFF]" />
                <span className="text-[10px] font-mono text-[#81758F] uppercase tracking-widest">
                  NOW EXPLORING
                </span>
              </div>
              <p className="text-[11px] font-medium text-[#F7F2FF]">
                AI × Web × Creative Tech
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
