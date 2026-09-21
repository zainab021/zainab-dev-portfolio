import React from 'react';
import { motion } from 'motion/react';
import { QUICK_STATS } from '../data/portfolioData';

export const Stats: React.FC = () => {
  return (
    <section className="relative z-10 py-8 sm:py-10 border-y border-white/[0.08] bg-[#120B1F]/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {QUICK_STATS.map((stat, idx) => {
            const isLongText = stat.value.length > 5;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-start md:items-center text-left md:text-center group min-h-[110px] sm:min-h-[120px]"
              >
                <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#81758F] mb-1.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B86CFF]/60 group-hover:bg-[#E89BFF] transition-colors" />
                  {stat.label}
                </span>
                
                {/* Fixed equal height value block to guarantee strict size alignment */}
                <div className="h-12 sm:h-14 lg:h-16 flex items-center justify-start md:justify-center my-0.5 w-full">
                  <span
                    className={`font-light tracking-tight text-[#F7F2FF] font-sans-main group-hover:text-[#E89BFF] transition-colors ${
                      isLongText
                        ? 'text-lg sm:text-xl lg:text-2xl font-normal tracking-normal whitespace-nowrap'
                        : 'text-3xl sm:text-4xl lg:text-5xl leading-none'
                    }`}
                  >
                    {stat.value}
                  </span>
                </div>

                <span className="text-xs text-[#B9AEC8] font-light mt-auto">
                  {stat.subtext}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
