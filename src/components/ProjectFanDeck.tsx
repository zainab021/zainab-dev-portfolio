import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ExternalLink,
  Github,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Activity,
  HeartPulse,
  Calendar,
  Sliders,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { Project } from '../types';

interface ProjectFanDeckProps {
  projects: Project[];
  onSelect: (project: Project) => void;
}

export const ProjectFanDeck: React.FC<ProjectFanDeckProps> = ({ projects, onSelect }) => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [activeCenterIdx, setActiveCenterIdx] = useState<number>(2);

  // Sliders interactive demo states inside the cards
  const [forensicConfidence, setForensicConfidence] = useState<number>(94);
  const [focusInterval, setFocusInterval] = useState<number>(45);
  const [curaitScore, setCuraitScore] = useState<number>(88);
  const [uniSyncCredits, setUniSyncCredits] = useState<number>(18);
  const [guidanceScale, setGuidanceScale] = useState<number>(75);
  const [inferenceSteps, setInferenceSteps] = useState<number>(30);

  // Base angles and offsets for 5 cards to fan out elegantly
  const deckConfig = [
    { rotate: -13, xOffset: -240, yOffset: 24, zIndex: 10 },
    { rotate: -6.5, xOffset: -120, yOffset: 8, zIndex: 15 },
    { rotate: 0, xOffset: 0, yOffset: 0, zIndex: 20 },
    { rotate: 6.5, xOffset: 120, yOffset: 8, zIndex: 15 },
    { rotate: 13, xOffset: 240, yOffset: 24, zIndex: 10 },
  ];

  const handleNext = () => {
    setActiveCenterIdx((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setActiveCenterIdx((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="relative w-full py-8 sm:py-12 flex flex-col items-center">
      {/* Ambient Backdrop Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-gradient-to-r from-[#6B2C91]/20 via-[#B86CFF]/25 to-[#FF8FD8]/20 blur-[120px] pointer-events-none rounded-full" />

      {/* Desktop/Tablet Fan Deck Stage */}
      <div className="relative w-full max-w-5xl h-[520px] sm:h-[560px] md:h-[600px] hidden md:flex items-center justify-center perspective-[1200px] select-none">
        {projects.slice(0, 5).map((project, idx) => {
          const isHovered = hoveredIdx === idx;
          const config = deckConfig[idx] || deckConfig[2];

          // Reorder dynamic rotation and offset around active center
          const relativePos = idx - activeCenterIdx;
          const baseRotate = relativePos * 6.5;
          const baseX = relativePos * 140;
          const baseY = Math.abs(relativePos) * 12;
          const baseZ = 20 - Math.abs(relativePos) * 3;

          return (
            <motion.div
              key={project.id}
              animate={{
                rotate: isHovered ? 0 : baseRotate,
                x: isHovered ? baseX * 1.05 : baseX,
                y: isHovered ? -28 : baseY,
                scale: isHovered ? 1.05 : 1,
                zIndex: isHovered ? 40 : baseZ,
              }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 24,
              }}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              onClick={() => onSelect(project)}
              className={`absolute cursor-pointer rounded-[28px] overflow-hidden transition-shadow duration-300 w-[270px] lg:w-[290px] h-[440px] lg:h-[470px] ${
                idx % 2 === 1
                  ? 'bg-gradient-to-b from-[#FAF8FF] to-[#ECE7F6] text-[#120B1F] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/80'
                  : 'bg-gradient-to-b from-[#180E28] via-[#120B1F] to-[#0D0716] text-[#F7F2FF] shadow-[0_25px_60px_rgba(0,0,0,0.7)] border border-white/[0.15]'
              } ${
                isHovered
                  ? 'ring-2 ring-[#B86CFF] shadow-[0_30px_70px_rgba(184,108,255,0.35)]'
                  : ''
              }`}
            >
              {/* Inner Mockup UI */}
              <div className="relative h-full flex flex-col justify-between p-5">
                {/* Top Notch / Header */}
                <div className="flex items-center justify-between pb-3 border-b border-current/10">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#B86CFF]" />
                    <span className="text-[10px] font-mono tracking-widest uppercase opacity-70">
                      {project.category}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono tracking-widest font-semibold opacity-50">
                    {project.number}
                  </span>
                </div>

                {/* Card Specific Rich Simulated UI */}
                <div className="flex-1 py-3 flex flex-col justify-between overflow-hidden">
                  {/* Title & Tagline */}
                  <div>
                    <h4 className="text-xl font-light tracking-tight mb-0.5 leading-snug">
                      {project.name}
                    </h4>
                    <p className="text-[10px] font-mono tracking-wider text-[#B86CFF] uppercase line-clamp-1">
                      {project.tagline}
                    </p>
                  </div>

                  {/* UI Interactive Widget Body */}
                  {idx === 0 && (
                    <div className="my-2 p-3 rounded-2xl bg-black/40 border border-white/10 flex flex-col gap-2.5">
                      <div className="flex items-center justify-between text-[11px] font-mono">
                        <span className="text-[#CDB4FF] flex items-center gap-1">
                          <ShieldCheck className="w-3.5 h-3.5 text-[#B86CFF]" />
                          MATCH SCORE
                        </span>
                        <span className="text-white font-bold">{forensicConfidence}%</span>
                      </div>
                      {/* Interactive Slider */}
                      <input
                        type="range"
                        min="60"
                        max="99"
                        value={forensicConfidence}
                        onChange={(e) => {
                          e.stopPropagation();
                          setForensicConfidence(Number(e.target.value));
                        }}
                        className="w-full accent-[#B86CFF] h-1.5 bg-white/15 rounded-lg appearance-none cursor-pointer"
                      />
                      <div className="flex justify-between text-[9px] font-mono text-white/50">
                        <span>VECTOR CLUSTER</span>
                        <span>0.003s LATENCY</span>
                      </div>
                    </div>
                  )}

                  {idx === 1 && (
                    <div className="my-2 p-3 rounded-2xl bg-white/70 border border-black/5 shadow-inner flex flex-col gap-2.5 text-[#120B1F]">
                      <div className="flex items-center justify-between text-[11px] font-mono">
                        <span className="flex items-center gap-1 font-medium text-[#6B2C91]">
                          <Activity className="w-3.5 h-3.5 text-[#FF8FD8]" />
                          FOCUS RHYTHM
                        </span>
                        <span className="font-bold">{focusInterval}m</span>
                      </div>
                      <input
                        type="range"
                        min="15"
                        max="90"
                        step="5"
                        value={focusInterval}
                        onChange={(e) => {
                          e.stopPropagation();
                          setFocusInterval(Number(e.target.value));
                        }}
                        className="w-full accent-[#FF8FD8] h-1.5 bg-black/15 rounded-lg appearance-none cursor-pointer"
                      />
                      <div className="flex items-center justify-between text-[9px] font-mono text-black/60">
                        <span>DISTRACTION SHIELD</span>
                        <span className="px-1.5 py-0.5 rounded bg-black/10 font-semibold">ACTIVE</span>
                      </div>
                    </div>
                  )}

                  {idx === 2 && (
                    <div className="my-2 p-3 rounded-2xl bg-black/50 border border-[#B86CFF]/30 flex flex-col gap-2">
                      <div className="flex items-center justify-between text-[11px] font-mono">
                        <span className="text-[#E89BFF] flex items-center gap-1">
                          <HeartPulse className="w-3.5 h-3.5 text-[#FF8FD8]" />
                          CLINICAL TRIAGE
                        </span>
                        <span className="text-white font-bold">{curaitScore}%</span>
                      </div>
                      {/* ECG wave representation */}
                      <div className="h-9 w-full flex items-center justify-center overflow-hidden relative">
                        <svg className="w-full h-8 text-[#FF8FD8] stroke-current fill-none stroke-[1.8]" viewBox="0 0 160 30">
                          <path d="M0 15 L35 15 L42 5 L48 25 L55 2 L62 20 L70 15 L160 15" />
                        </svg>
                      </div>
                      <div className="flex justify-between text-[9px] font-mono text-white/60">
                        <span>74 BPM STABLE</span>
                        <span>DIFFERENTIAL OK</span>
                      </div>
                    </div>
                  )}

                  {idx === 3 && (
                    <div className="my-2 p-3 rounded-2xl bg-white/80 border border-black/5 flex flex-col gap-2 text-[#120B1F]">
                      <div className="flex items-center justify-between text-[11px] font-mono">
                        <span className="flex items-center gap-1 font-medium text-[#6B2C91]">
                          <Calendar className="w-3.5 h-3.5 text-[#B86CFF]" />
                          SEMESTER LOAD
                        </span>
                        <span className="font-bold">{uniSyncCredits} Cr</span>
                      </div>
                      <input
                        type="range"
                        min="12"
                        max="22"
                        value={uniSyncCredits}
                        onChange={(e) => {
                          e.stopPropagation();
                          setUniSyncCredits(Number(e.target.value));
                        }}
                        className="w-full accent-[#B86CFF] h-1.5 bg-black/15 rounded-lg appearance-none cursor-pointer"
                      />
                      <div className="flex justify-between text-[9px] font-mono text-black/60">
                        <span>CLASHES RESOLVED</span>
                        <span className="text-[#6B2C91] font-semibold">0 CONFLICTS</span>
                      </div>
                    </div>
                  )}

                  {idx === 4 && (
                    <div className="my-2 p-3 rounded-2xl bg-black/50 border border-white/10 flex flex-col gap-2">
                      <div className="flex items-center justify-between text-[11px] font-mono">
                        <span className="text-[#FF8FD8] flex items-center gap-1">
                          <Sliders className="w-3.5 h-3.5" />
                          GUIDANCE SCALE
                        </span>
                        <span className="text-white font-bold">{(guidanceScale / 10).toFixed(1)}</span>
                      </div>
                      <input
                        type="range"
                        min="10"
                        max="150"
                        value={guidanceScale}
                        onChange={(e) => {
                          e.stopPropagation();
                          setGuidanceScale(Number(e.target.value));
                        }}
                        className="w-full accent-[#FF8FD8] h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer"
                      />
                      <div className="flex items-center justify-between text-[9px] font-mono text-white/60">
                        <span>INFERENCE STEPS</span>
                        <span>{inferenceSteps}</span>
                      </div>
                    </div>
                  )}

                  {/* Tech stack chips */}
                  <div className="flex flex-wrap gap-1 mt-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className={`text-[9px] font-mono px-2 py-0.5 rounded-md ${
                          idx % 2 === 1
                            ? 'bg-black/5 text-black/80 border border-black/10'
                            : 'bg-white/5 text-white/80 border border-white/10'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Bottom CTA */}
                <div className="pt-2 border-t border-current/10 flex items-center justify-between">
                  <span className="text-[11px] font-mono font-medium tracking-wider flex items-center gap-1 group-hover:underline">
                    VIEW STUDY <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                  <Maximize2 className="w-3.5 h-3.5 opacity-50" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Mobile Horizontal Carousel for smaller screens */}
      <div className="md:hidden w-full overflow-x-auto pb-6 pt-2 px-4 flex gap-4 snap-x snap-mandatory no-scrollbar">
        {projects.map((project, idx) => (
          <div
            key={project.id}
            onClick={() => onSelect(project)}
            className={`shrink-0 w-[270px] h-[430px] rounded-[26px] p-5 snap-center flex flex-col justify-between ${
              idx % 2 === 1
                ? 'bg-gradient-to-b from-[#FAF8FF] to-[#ECE7F6] text-[#120B1F] border border-white/80'
                : 'bg-gradient-to-b from-[#180E28] via-[#120B1F] to-[#0D0716] text-[#F7F2FF] border border-white/15'
            } shadow-xl`}
          >
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-current/10 mb-3">
                <span className="text-[10px] font-mono tracking-widest uppercase opacity-70">
                  {project.category}
                </span>
                <span className="text-[10px] font-mono opacity-50 font-semibold">
                  {project.number}
                </span>
              </div>
              <h4 className="text-xl font-light mb-1">{project.name}</h4>
              <p className="text-[11px] font-mono text-[#B86CFF] uppercase mb-4">
                {project.tagline}
              </p>
              <p className="text-xs opacity-80 line-clamp-3 mb-4 font-light">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1">
                {project.technologies.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className={`text-[9px] font-mono px-2 py-0.5 rounded-md ${
                      idx % 2 === 1 ? 'bg-black/5' : 'bg-white/10'
                    }`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-current/10 flex items-center justify-between text-xs font-mono font-medium">
              <span>EXPLORE CASE STUDY</span>
              <ArrowUpRight className="w-4 h-4 text-[#B86CFF]" />
            </div>
          </div>
        ))}
      </div>

      {/* Deck Controls (Interactive Carousel Navigation & Hint) */}
      <div className="mt-4 sm:mt-6 flex flex-col items-center gap-3">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handlePrev}
            className="p-2.5 rounded-full glass-panel border border-white/10 text-[#B9AEC8] hover:text-[#F7F2FF] hover:border-[#B86CFF]/40 transition-all hover:scale-105 active:scale-95"
            aria-label="Previous card in fan"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Project indicator pills */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-panel border border-white/10">
            {projects.slice(0, 5).map((p, i) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setActiveCenterIdx(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  activeCenterIdx === i
                    ? 'w-6 bg-[#B86CFF] shadow-[0_0_8px_#B86CFF]'
                    : 'bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Select card ${p.name}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={handleNext}
            className="p-2.5 rounded-full glass-panel border border-white/10 text-[#B9AEC8] hover:text-[#F7F2FF] hover:border-[#B86CFF]/40 transition-all hover:scale-105 active:scale-95"
            aria-label="Next card in fan"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <p className="text-[11px] font-mono text-[#81758F] flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[#E89BFF]" />
          Hover over any card to straighten & interact · Click to view comprehensive case study
        </p>
      </div>
    </div>
  );
};
