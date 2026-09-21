import React from 'react';
import { motion } from 'motion/react';
import { Cpu, Layout, Sparkles, Zap, Layers, Check } from 'lucide-react';
import { SERVICES } from '../data/portfolioData';

export const Services: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#B86CFF]" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-[#FF8FD8]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#E89BFF]" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-[#CDB4FF]" />;
      case 'Layers':
      default:
        return <Layers className="w-5 h-5 text-[#B86CFF]" />;
    }
  };

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Heading */}
        <div className="mb-14 sm:mb-20 max-w-2xl">
          <span className="text-xs font-mono tracking-[0.2em] text-[#E89BFF] uppercase mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B86CFF]" />
            05 / SERVICES & ROLES
          </span>
          <h2 className="text-3xl sm:text-5xl font-light text-[#F7F2FF] tracking-tight mb-4">
            What I bring to a project.
          </h2>
          <p className="text-sm sm:text-base text-[#B9AEC8] font-light leading-relaxed">
            Delivering thoughtful digital craft that bridges artificial intelligence pipelines with human-centered product design.
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass-panel rounded-2xl p-7 sm:p-8 flex flex-col justify-between hover:border-[#B86CFF]/40 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono text-[#E89BFF] tracking-widest">
                    {service.number}
                  </span>
                  <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 group-hover:border-[#B86CFF]/30 transition-colors">
                    {getIcon(service.icon)}
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-light text-[#F7F2FF] tracking-tight mb-3 group-hover:text-[#E89BFF] transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm text-[#B9AEC8] font-normal leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <div className="border-t border-white/10 pt-4 space-y-2">
                {service.capabilities.map((cap, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-mono text-[#F7F2FF]/80">
                    <Check className="w-3 h-3 text-[#B86CFF]" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
