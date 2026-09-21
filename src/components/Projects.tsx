import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Layers, LayoutGrid, GalleryHorizontalEnd } from 'lucide-react';
import { PROJECTS, PERSONAL_INFO } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { ProjectFanDeck } from './ProjectFanDeck';

export const Projects: React.FC = () => {
  const [viewMode, setViewMode] = useState<'fan' | 'grid'>('fan');
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('ALL');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: ProjectCategory[] = ['ALL', 'AI', 'FRONTEND', 'FULL STACK', 'EXPERIMENTS'];

  const filteredProjects = activeCategory === 'ALL'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-6">
          <div>
            <span className="text-xs font-mono tracking-[0.2em] text-[#E89BFF] uppercase mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#B86CFF]" />
              02 / PORTFOLIO
            </span>
            <h2 className="text-3xl sm:text-5xl font-light text-[#F7F2FF] tracking-tight mb-3">
              Selected work.
            </h2>
            <p className="text-sm sm:text-base text-[#B9AEC8] font-light max-w-lg">
              Projects where AI, engineering and design meet. Real implementations solving concrete challenges.
            </p>
          </div>

          {/* View Mode Switcher + Category Filters */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            {/* View Mode Toggle: Fan Deck vs Grid */}
            <div className="flex p-1 rounded-full glass-panel border border-white/10 bg-[#120B1F]/60">
              <button
                type="button"
                onClick={() => setViewMode('fan')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-300 ${
                  viewMode === 'fan'
                    ? 'bg-[#B86CFF] text-[#0B0714] font-semibold shadow-[0_0_16px_rgba(184,108,255,0.4)]'
                    : 'text-[#B9AEC8] hover:text-[#F7F2FF]'
                }`}
              >
                <GalleryHorizontalEnd className="w-3.5 h-3.5" />
                <span>FAN DECK</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-300 ${
                  viewMode === 'grid'
                    ? 'bg-[#B86CFF] text-[#0B0714] font-semibold shadow-[0_0_16px_rgba(184,108,255,0.4)]'
                    : 'text-[#B9AEC8] hover:text-[#F7F2FF]'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>GRID VIEW</span>
              </button>
            </div>

            {/* Category Filters (active in Grid View) */}
            {viewMode === 'grid' && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex flex-wrap gap-1.5"
              >
                {categories.map((cat) => {
                  const isActive = activeCategory === cat;
                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setActiveCategory(cat)}
                      className={`px-3 py-1.5 rounded-full text-[11px] font-mono tracking-wider transition-all duration-300 ${
                        isActive
                          ? 'bg-white/20 text-[#F7F2FF] font-medium border border-white/30'
                          : 'bg-white/[0.04] hover:bg-white/[0.08] text-[#B9AEC8] hover:text-[#F7F2FF] border border-white/10'
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </motion.div>
            )}
          </div>
        </div>

        {/* Dynamic View: Fanned Deck vs Grid */}
        <AnimatePresence mode="wait">
          {viewMode === 'fan' ? (
            <motion.div
              key="fan-view"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <ProjectFanDeck
                projects={PROJECTS}
                onSelect={(p) => setSelectedProject(p)}
              />
            </motion.div>
          ) : (
            <motion.div
              key="grid-view"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                <AnimatePresence>
                  {filteredProjects.map((project) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      onSelect={(p) => setSelectedProject(p)}
                    />
                  ))}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footnote note */}
        <div className="mt-14 p-6 rounded-2xl glass-panel border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Layers className="w-5 h-5 text-[#E89BFF]" />
            <div>
              <p className="text-xs font-mono text-[#F7F2FF] font-medium">
                CENTRALIZED DATA STRUCTURE
              </p>
              <p className="text-xs text-[#81758F]">
                All case studies and architecture specs are modularly defined and ready for continuous production updates.
              </p>
            </div>
          </div>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-[#E89BFF] hover:text-white flex items-center gap-1.5 transition-colors shrink-0"
          >
            <span>EXPLORE GITHUB ARCHIVES</span>
            <span>→</span>
          </a>
        </div>
      </div>

      {/* Interactive Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
