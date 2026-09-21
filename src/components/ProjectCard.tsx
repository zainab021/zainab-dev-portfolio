import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Github, ExternalLink, ShieldCheck, Activity, Brain, Server, Palette } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  // Render distinct thematic abstract graphics for each project
  const renderThemeGraphic = () => {
    switch (project.imageTheme) {
      case 'crime-ai':
        return (
          <div className="relative w-full h-full flex flex-col justify-between bg-gradient-to-br from-[#241132] via-[#160B24] to-[#0E0717] p-5 overflow-hidden rounded-2xl border border-white/10">
            <div className="absolute inset-0 bg-[radial-gradient(#B86CFF_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />
            <div className="relative z-10 flex items-center justify-between">
              <span className="text-[10px] font-mono tracking-widest text-[#E89BFF] uppercase flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#B86CFF]" />
                FORENSIC RETRIEVAL MATRIX
              </span>
              <span className="px-2 py-0.5 rounded-full bg-[#B86CFF]/20 text-[9px] font-mono text-[#E89BFF] border border-[#B86CFF]/30">
                CONFIDENCE 94.6%
              </span>
            </div>

            <div className="relative z-10 my-3 flex items-center justify-center">
              <div className="w-16 h-16 rounded-2xl bg-[#B86CFF]/15 border border-[#B86CFF]/40 flex items-center justify-center text-[#E89BFF] group-hover:scale-110 transition-transform duration-500 shadow-[0_0_25px_rgba(184,108,255,0.25)]">
                <ShieldCheck className="w-8 h-8" />
              </div>
            </div>

            <div className="relative z-10 space-y-1.5 bg-black/40 p-2.5 rounded-xl border border-white/10">
              <div className="flex justify-between text-[9px] font-mono text-[#81758F]">
                <span>VECTOR EMBEDDINGS</span>
                <span className="text-white">512 DIMENSIONS</span>
              </div>
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#6B2C91] to-[#B86CFF] w-[94%]" />
              </div>
            </div>
          </div>
        );
      case 'focus-flow':
        return (
          <div className="relative w-full h-full flex flex-col justify-between bg-gradient-to-br from-[#FAF8FF] to-[#ECE7F6] p-5 overflow-hidden rounded-2xl border border-black/10 text-[#120B1F]">
            <div className="relative z-10 flex items-center justify-between">
              <span className="text-[10px] font-mono tracking-widest text-[#6B2C91] uppercase flex items-center gap-1.5 font-medium">
                <Activity className="w-3.5 h-3.5 text-[#FF8FD8]" />
                COGNITIVE LOAD RHYTHM
              </span>
              <span className="px-2 py-0.5 rounded-full bg-black/5 text-[9px] font-mono text-[#120B1F] border border-black/10 font-semibold">
                ACTIVE INTERVAL
              </span>
            </div>

            <div className="relative z-10 my-3 flex items-center justify-center">
              <div className="w-16 h-16 rounded-2xl bg-[#FF8FD8]/20 border border-[#FF8FD8]/50 flex items-center justify-center text-[#6B2C91] group-hover:scale-110 transition-transform duration-500 shadow-[0_0_25px_rgba(255,143,216,0.3)]">
                <Activity className="w-8 h-8 text-[#FF8FD8]" />
              </div>
            </div>

            <div className="relative z-10 space-y-1.5 bg-white/80 p-2.5 rounded-xl border border-black/10">
              <div className="flex justify-between text-[9px] font-mono text-black/60">
                <span>FOCUS INTERVAL</span>
                <span className="font-bold text-[#6B2C91]">45m POMODORO</span>
              </div>
              <div className="w-full h-1.5 bg-black/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#FF8FD8] to-[#6B2C91] w-[75%]" />
              </div>
            </div>
          </div>
        );
      case 'health-ai':
        return (
          <div className="relative w-full h-full flex flex-col justify-between bg-gradient-to-br from-[#1E1330] via-[#140C20] to-[#0A0512] p-5 overflow-hidden rounded-2xl border border-[#CDB4FF]/25">
            <div className="relative z-10 flex items-center justify-between">
              <span className="text-[10px] font-mono tracking-widest text-[#CDB4FF] uppercase flex items-center gap-1.5">
                <Brain className="w-3.5 h-3.5 text-[#FF8FD8]" />
                CLINICAL DECISION SUPPORT
              </span>
              <span className="px-2 py-0.5 rounded-full bg-[#CDB4FF]/15 text-[9px] font-mono text-[#CDB4FF] border border-[#CDB4FF]/30">
                99.2% SENSITIVITY
              </span>
            </div>

            <div className="relative z-10 my-3 flex items-center justify-center">
              <div className="w-16 h-16 rounded-2xl bg-[#CDB4FF]/15 border border-[#CDB4FF]/40 flex items-center justify-center text-[#CDB4FF] group-hover:scale-110 transition-transform duration-500 shadow-[0_0_25px_rgba(205,180,255,0.25)]">
                <Brain className="w-8 h-8" />
              </div>
            </div>

            <div className="relative z-10 space-y-1.5 bg-black/40 p-2.5 rounded-xl border border-white/10">
              <div className="flex justify-between text-[9px] font-mono text-[#81758F]">
                <span>DIFFERENTIAL TRIAGE</span>
                <span className="text-white">URGENCY: MODERATE</span>
              </div>
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#B86CFF] to-[#FF8FD8] w-[88%]" />
              </div>
            </div>
          </div>
        );
      case 'unisync':
        return (
          <div className="relative w-full h-full flex flex-col justify-between bg-gradient-to-br from-[#FAF8FF] to-[#E9E4F5] p-5 overflow-hidden rounded-2xl border border-black/10 text-[#120B1F]">
            <div className="relative z-10 flex items-center justify-between">
              <span className="text-[10px] font-mono tracking-widest text-[#6B2C91] uppercase flex items-center gap-1.5 font-medium">
                <Server className="w-3.5 h-3.5 text-[#B86CFF]" />
                CAMPUS SYNCHRONIZATION
              </span>
              <span className="px-2 py-0.5 rounded-full bg-black/5 text-[9px] font-mono text-[#120B1F] border border-black/10 font-semibold">
                LIVE SYNC
              </span>
            </div>

            <div className="relative z-10 my-3 flex items-center justify-center">
              <div className="w-16 h-16 rounded-2xl bg-[#E89BFF]/25 border border-[#E89BFF]/50 flex items-center justify-center text-[#6B2C91] group-hover:scale-110 transition-transform duration-500 shadow-[0_0_25px_rgba(232,155,255,0.3)]">
                <Server className="w-8 h-8 text-[#6B2C91]" />
              </div>
            </div>

            <div className="relative z-10 space-y-1.5 bg-white/80 p-2.5 rounded-xl border border-black/10">
              <div className="flex justify-between text-[9px] font-mono text-black/60">
                <span>SCHEDULE CONFLICTS</span>
                <span className="font-bold text-[#6B2C91]">0 DETECTED</span>
              </div>
              <div className="w-full h-1.5 bg-black/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#6B2C91] to-[#B86CFF] w-[100%]" />
              </div>
            </div>
          </div>
        );
      case 'neuro-canvas':
      default:
        return (
          <div className="relative w-full h-full flex flex-col justify-between bg-gradient-to-br from-[#241132] via-[#170C24] to-[#0A0512] p-5 overflow-hidden rounded-2xl border border-white/10">
            <div className="relative z-10 flex items-center justify-between">
              <span className="text-[10px] font-mono tracking-widest text-[#B86CFF] uppercase flex items-center gap-1.5">
                <Palette className="w-3.5 h-3.5" />
                LATENT PROMPT DYNAMICS
              </span>
              <span className="px-2 py-0.5 rounded-full bg-[#B86CFF]/20 text-[9px] font-mono text-[#E89BFF] border border-[#B86CFF]/30">
                SAMPLER: EULER A
              </span>
            </div>

            <div className="relative z-10 my-3 flex items-center justify-center">
              <div className="w-16 h-16 rounded-2xl bg-[#B86CFF]/15 border border-[#B86CFF]/40 flex items-center justify-center text-[#B86CFF] group-hover:scale-110 transition-transform duration-500 shadow-[0_0_25px_rgba(184,108,255,0.25)]">
                <Palette className="w-8 h-8" />
              </div>
            </div>

            <div className="relative z-10 space-y-1.5 bg-black/40 p-2.5 rounded-xl border border-white/10">
              <div className="flex justify-between text-[9px] font-mono text-[#81758F]">
                <span>GUIDANCE SCALE</span>
                <span className="text-white">7.5 / 15.0</span>
              </div>
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#FF8FD8] to-[#B86CFF] w-[50%]" />
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-[28px] glass-panel p-6 sm:p-7 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:border-[#B86CFF]/50 hover:shadow-[0_25px_60px_rgba(184,108,255,0.18)] cursor-pointer overflow-hidden border border-white/[0.12]"
      onClick={() => onSelect(project)}
    >
      <div>
        {/* Device Notch & Top Header */}
        <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B86CFF]" />
            <span className="font-mono text-xs text-[#E89BFF] tracking-widest font-semibold">
              {project.number}
            </span>
          </div>
          <span className="px-3 py-0.5 rounded-full bg-white/[0.04] border border-white/10 text-[10px] font-mono tracking-widest text-[#CDB4FF] uppercase font-medium">
            {project.category}
          </span>
        </div>

        {/* Project Title & Tagline */}
        <h3 className="text-2xl sm:text-3xl font-light text-[#F7F2FF] tracking-tight group-hover:text-[#E89BFF] transition-colors mb-1">
          {project.name}
        </h3>
        <p className="text-xs font-mono tracking-wider text-[#FF8FD8] uppercase mb-4">
          {project.tagline}
        </p>

        {/* Visual Preview Graphic Canvas Styled like an App Screen */}
        <div className="w-full h-52 sm:h-60 rounded-2xl overflow-hidden mb-5 relative transition-transform duration-500 group-hover:scale-[1.01]">
          {renderThemeGraphic()}
        </div>

        {/* Short Description */}
        <p className="text-sm text-[#B9AEC8] font-light leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Technologies Pills */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/10 text-[11px] font-mono text-[#F7F2FF]/80 group-hover:border-[#B86CFF]/25 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Action Triggers */}
      <div className="pt-4 border-t border-white/10 flex items-center justify-between">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onSelect(project);
          }}
          className="inline-flex items-center gap-1.5 text-xs font-mono font-medium tracking-widest text-[#F7F2FF] group-hover:text-[#E89BFF] transition-colors"
        >
          <span>EXPLORE PROJECT</span>
          <ArrowUpRight className="w-4 h-4 text-[#B86CFF] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </button>

        <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 text-[#B9AEC8] hover:text-[#F7F2FF] transition-colors"
            aria-label={`View ${project.name} on GitHub`}
          >
            <Github className="w-4 h-4" />
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 text-[#B9AEC8] hover:text-[#F7F2FF] transition-colors"
              aria-label={`Open ${project.name} Live Demo`}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};
