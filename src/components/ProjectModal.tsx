import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github, CheckCircle2, Layers, Cpu, ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0B0714]/85 backdrop-blur-xl"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl max-h-[88vh] overflow-y-auto rounded-2xl bg-[#120B1F] border border-white/15 p-6 sm:p-10 shadow-[0_25px_70px_rgba(0,0,0,0.8)] z-10"
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-[#B9AEC8] hover:text-[#F7F2FF] transition-colors"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Metadata */}
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs text-[#E89BFF] tracking-widest">
              CASE STUDY {project.number}
            </span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span className="px-2.5 py-0.5 rounded-full bg-[#B86CFF]/15 border border-[#B86CFF]/30 text-[10px] font-mono text-[#E89BFF] uppercase tracking-wider">
              {project.category}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-light text-[#F7F2FF] tracking-tight mb-1">
            {project.name}
          </h2>
          <p className="text-sm font-mono text-[#FF8FD8] tracking-wide uppercase mb-6">
            {project.tagline}
          </p>

          {/* Detailed Narrative */}
          <div className="space-y-4 text-sm sm:text-base text-[#B9AEC8] leading-relaxed mb-8">
            <p>{project.longDescription}</p>
          </div>

          {/* Key Features Grid */}
          <div className="mb-8">
            <h3 className="text-xs font-mono uppercase tracking-[0.14em] text-[#F7F2FF] mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#B86CFF]" />
              CORE HIGHLIGHTS & CAPABILITIES
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.keyFeatures.map((feature, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E89BFF] mt-1.5 shrink-0" />
                  <span className="text-xs text-[#F7F2FF]/90 leading-normal">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Overview Box */}
          <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10 mb-8">
            <div className="flex items-center gap-2 text-xs font-mono text-[#CDB4FF] mb-2 uppercase tracking-wider">
              <Layers className="w-4 h-4 text-[#B86CFF]" />
              TECHNICAL ARCHITECTURE
            </div>
            <p className="text-xs sm:text-sm text-[#B9AEC8] font-mono leading-relaxed">
              {project.architectureOverview}
            </p>
          </div>

          {/* Technology Stack */}
          <div className="mb-8">
            <h3 className="text-xs font-mono uppercase tracking-[0.14em] text-[#81758F] mb-3">
              TECHNOLOGY STACK
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono text-[#F7F2FF]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Modal Action CTA */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-xs font-mono text-[#F7F2FF] flex items-center gap-2 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>VIEW REPOSITORY</span>
              </a>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#6B2C91] to-[#B86CFF] text-white text-xs font-mono font-medium flex items-center gap-2 hover:opacity-95 shadow-md transition-opacity"
                >
                  <span>LAUNCH LIVE DEMO</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              )}
            </div>

            <button
              type="button"
              onClick={onClose}
              className="text-xs font-mono text-[#81758F] hover:text-[#F7F2FF] transition-colors"
            >
              CLOSE WINDOW [ESC]
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
