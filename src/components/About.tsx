import React from 'react';
import { motion } from 'motion/react';
import { Compass, Sparkles, Brain, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import girlAvatarImg from '../assets/images/girl_no_bg.png';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Section Indicator */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="sticky top-28">
              <span className="text-xs font-mono tracking-[0.2em] text-[#E89BFF] uppercase mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#B86CFF]" />
                01 / ABOUT
              </span>
              <h2 className="text-2xl sm:text-3xl font-light text-[#F7F2FF] tracking-tight mb-4">
                The Philosophy
              </h2>
              <p className="text-sm text-[#81758F] font-normal leading-relaxed max-w-xs mb-6">
                Merging the computational power of artificial intelligence with the empathy of human-first interaction design.
              </p>

              {/* Portrait Preview Card */}
              <div className="glass-panel rounded-2xl p-2.5 border border-white/10 max-w-xs mb-6 overflow-hidden relative group">
                <div className="relative w-full h-44 rounded-xl overflow-hidden bg-gradient-to-b from-[#281345] to-[#0F071D] flex items-end justify-center">
                  <img
                    src={girlAvatarImg}
                    onError={(e) => {
                      e.currentTarget.src = '/girl_no_bg.png';
                    }}
                    alt="Zainab - AI Application Engineer"
                    className="h-full w-auto object-contain object-bottom drop-shadow-[0_8px_20px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-2 left-2 right-2 px-2.5 py-1 rounded-lg bg-[#0E061A]/90 backdrop-blur-md border border-white/10 flex items-center justify-between text-[10px] font-mono text-[#E89BFF]">
                    <span>ZAINAB </span>
                    <span className="text-[#34D399] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                      ONLINE
                    </span>
                  </div>
                </div>
              </div>

              {/* Status Badge */}
              <div className="glass-panel rounded-2xl p-5 border border-white/10 max-w-xs">
                <div className="flex items-center gap-2 text-xs font-mono text-[#CDB4FF] mb-2">
                  <Compass className="w-4 h-4 text-[#B86CFF]" />
                  <span>LOCATION & REACH</span>
                </div>
                <p className="text-xs text-[#F7F2FF] font-medium mb-1">
                  {PERSONAL_INFO.location}
                </p>
                <p className="text-[11px] text-[#81758F] leading-tight">
                  Open to remote internships, student collaborations, and AI frontend engineering roles.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Exploring Pills */}
          <div className="lg:col-span-8 flex flex-col">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#F7F2FF] leading-snug tracking-tight mb-8"
            >
              "Technology should feel as{' '}
              <span className="font-serif-editorial italic text-[#FF8FD8] font-normal">thoughtful</span> as it is{' '}
              <span className="font-serif-editorial italic text-[#E89BFF] font-normal">powerful</span>."
            </motion.h3>

            <div className="space-y-6 text-[#B9AEC8] text-base sm:text-lg leading-relaxed font-normal mb-12">
              {PERSONAL_INFO.aboutParagraphs.map((para, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {para}
                </motion.p>
              ))}
            </div>

            {/* Currently Exploring Grid / Pills */}
            <div className="border-t border-white/10 pt-8">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-4 h-4 text-[#B86CFF]" />
                <span className="text-xs font-mono uppercase tracking-[0.14em] text-[#81758F]">
                  CURRENTLY EXPLORING & EXPERIMENTING
                </span>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {PERSONAL_INFO.currentlyExploring.map((topic, i) => (
                  <motion.div
                    key={topic}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="group px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#B86CFF]/40 text-xs font-mono text-[#F7F2FF] transition-all duration-300 flex items-center gap-2 cursor-default"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B86CFF]/60 group-hover:bg-[#FF8FD8] transition-colors" />
                    <span>{topic}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
