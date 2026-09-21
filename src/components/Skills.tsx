import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cpu, Terminal, Layout, Database, Wrench, Sparkles, Filter } from 'lucide-react';
import { SKILL_GROUPS } from '../data/portfolioData';
import { DualEvolutionBanner } from './DualEvolutionBanner';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const getCategoryIcon = (title: string) => {
    switch (title) {
      case 'AI & MACHINE LEARNING':
        return <Cpu className="w-4 h-4 text-[#B86CFF]" />;
      case 'FRONTEND ENGINEERING':
        return <Layout className="w-4 h-4 text-[#FF8FD8]" />;
      case 'BACKEND & ARCHITECTURE':
        return <Terminal className="w-4 h-4 text-[#E89BFF]" />;
      case 'DATABASE & PERSISTENCE':
        return <Database className="w-4 h-4 text-[#CDB4FF]" />;
      case 'TOOLS & WORKFLOWS':
      default:
        return <Wrench className="w-4 h-4 text-[#81758F]" />;
    }
  };

  const categories = [
    { id: 'ALL', label: 'ALL CAPABILITIES' },
    { id: 'AI & MACHINE LEARNING', label: 'AI & ML' },
    { id: 'FRONTEND ENGINEERING', label: 'FRONTEND' },
    { id: 'BACKEND & ARCHITECTURE', label: 'BACKEND' },
    { id: 'DATABASE & PERSISTENCE', label: 'DATABASES' },
    { id: 'TOOLS & WORKFLOWS', label: 'TOOLS' },
  ];

  const filteredGroups = selectedCategory === 'ALL'
    ? SKILL_GROUPS
    : SKILL_GROUPS.filter(group => group.title === selectedCategory);

  return (
    <section id="skills" className="relative py-24 sm:py-32 overflow-hidden border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Heading */}
        <div className="mb-10 sm:mb-14 max-w-3xl">
          <span className="text-xs font-mono tracking-[0.2em] text-[#E89BFF] uppercase mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B86CFF]" />
            03 / CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-5xl font-light text-[#F7F2FF] tracking-tight mb-4">
            The Dual Creative &amp; Technical Engine.
          </h2>
          <p className="text-sm sm:text-base text-[#B9AEC8] font-light leading-relaxed">
            From curious student to modern full-stack developer &amp; AI application engineer — bridging design intuition with rigorous machine learning pipelines and production software.
          </p>
        </div>

        {/* Centerpiece: Dual Evolution Showcase Banner (Design on Left -> Portrait -> Code on Right) */}
        <div className="mb-14 sm:mb-20">
          <DualEvolutionBanner
            onExploreSkills={(category) => {
              if (category) setSelectedCategory(category);
            }}
          />
        </div>

        {/* Filter Controls for Detailed Skills Matrix */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-white/[0.06]">
          <div className="flex items-center gap-2 text-xs font-mono text-[#A898BE]">
            <Filter className="w-3.5 h-3.5 text-[#B86CFF]" />
            <span>EXPLORE DETAILED TECH STACK</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all ${
                    isActive
                      ? 'bg-[#B86CFF] text-[#0B0714] font-bold shadow-md shadow-[#B86CFF]/20'
                      : 'bg-white/[0.03] hover:bg-white/[0.08] text-[#CDB4FF] border border-white/10'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Categories Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredGroups.map((group) => (
              <motion.div
                key={group.title}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                className="glass-panel rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#B86CFF]/40 transition-all duration-300 group"
              >
                <div>
                  {/* Header */}
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="p-2 rounded-lg bg-white/[0.04] border border-white/10 group-hover:border-[#B86CFF]/30 transition-colors">
                      {getCategoryIcon(group.title)}
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[#F7F2FF] tracking-wide">
                        {group.title}
                      </h3>
                      <p className="text-[11px] text-[#81758F] font-mono">
                        {group.description}
                      </p>
                    </div>
                  </div>

                  {/* Skill Pills */}
                  <div className="flex flex-wrap gap-2 mt-5">
                    {group.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="px-3 py-1.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-[#B86CFF]/40 text-xs font-mono text-[#F7F2FF] transition-all duration-200 flex items-center gap-2 cursor-default group/pill"
                      >
                        <span>{skill.name}</span>
                        {skill.highlight && (
                          <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/[0.06] text-[#E89BFF] font-mono group-hover/pill:text-white transition-colors">
                            {skill.highlight}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

