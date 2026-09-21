import React from 'react';
import { motion } from 'motion/react';
import { Award, ShieldCheck, Sparkles, Trophy } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Heading */}
        <div className="mb-14 sm:mb-20 max-w-2xl">
          <span className="text-xs font-mono tracking-[0.2em] text-[#E89BFF] uppercase mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B86CFF]" />
            07 / RECOGNITION & PROGRAMS
          </span>
          <h2 className="text-3xl sm:text-5xl font-light text-[#F7F2FF] tracking-tight mb-4">
            Verified milestones.
          </h2>
          <p className="text-sm sm:text-base text-[#B9AEC8] font-light leading-relaxed">
            Hands-on cohorts, competitive sprints, and industry program recognitions validating practical capabilities.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {ACHIEVEMENTS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#B86CFF]/30 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#B86CFF]/15 border border-[#B86CFF]/30 text-[10px] font-mono tracking-widest text-[#E89BFF] uppercase font-medium">
                    {item.badge}
                  </span>
                  <span className="text-xs font-mono text-[#81758F]">
                    {item.year}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-light text-[#F7F2FF] tracking-tight mb-1 group-hover:text-[#E89BFF] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs font-mono text-[#FF8FD8] uppercase mb-4">
                  {item.issuer}
                </p>

                <p className="text-sm text-[#B9AEC8] font-normal leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#81758F] uppercase tracking-wider">
                  DOMAIN: {item.category}
                </span>
                <ShieldCheck className="w-4 h-4 text-[#B86CFF]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
