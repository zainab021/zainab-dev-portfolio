import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, CheckCircle2, ArrowDownUp, Compass, ArrowRight, GraduationCap, Layers, ChevronDown, ChevronUp } from 'lucide-react';
import { TIMELINE, KEY_MILESTONES, TIMELINE_SUMMARY } from '../data/portfolioData';

export const Timeline: React.FC = () => {
  // Default to compact summary mode showing the 3 core milestones (Govt School, KIPS, UMT)
  const [viewMode, setViewMode] = useState<'summary' | 'detailed'>('summary');
  const [order, setOrder] = useState<'chronological' | 'reverse'>('chronological');

  const activeItems = viewMode === 'summary'
    ? KEY_MILESTONES
    : (order === 'chronological' ? [...TIMELINE] : [...TIMELINE].reverse());

  return (
    <section id="experience" className="relative py-24 sm:py-32 overflow-hidden border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Heading & Mode Switchers */}
        <div className="mb-12 sm:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-mono tracking-[0.2em] text-[#E89BFF] uppercase mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#B86CFF]" />
              04 / TRAJECTORY
            </span>
            <h2 className="text-3xl sm:text-5xl font-light text-[#F7F2FF] tracking-tight mb-4">
              {TIMELINE_SUMMARY.headline}
            </h2>
            <p className="text-sm sm:text-base text-[#B9AEC8] font-light leading-relaxed">
              {viewMode === 'summary'
                ? "Core academic & education milestones: Government School, KIPS College, and UMT."
                : TIMELINE_SUMMARY.subheadline}
            </p>
          </div>

          {/* Controls: View Mode & Order Switchers */}
          <div className="flex flex-wrap items-center gap-3 self-start md:self-end">
            {/* View Mode Toggle: Summary vs In-Depth */}
            <div className="inline-flex p-1 rounded-full glass-panel border border-white/10 text-xs font-mono shadow-sm">
              <button
                type="button"
                onClick={() => setViewMode('summary')}
                className={`px-3.5 py-1.5 rounded-full transition-all flex items-center gap-1.5 cursor-pointer ${
                  viewMode === 'summary'
                    ? 'bg-[#B86CFF] text-[#0B0714] font-bold shadow-md'
                    : 'text-[#B9AEC8] hover:text-[#F7F2FF]'
                }`}
                title="Show core milestones (Gov School · KIPS · UMT)"
              >
                <GraduationCap className="w-3.5 h-3.5" />
                <span>CORE MILESTONES (3)</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('detailed')}
                className={`px-3.5 py-1.5 rounded-full transition-all flex items-center gap-1.5 cursor-pointer ${
                  viewMode === 'detailed'
                    ? 'bg-[#B86CFF] text-[#0B0714] font-bold shadow-md'
                    : 'text-[#B9AEC8] hover:text-[#F7F2FF]'
                }`}
                title="Show complete 7-stage trajectory"
              >
                <Layers className="w-3.5 h-3.5" />
                <span>IN-DEPTH JOURNEY (7)</span>
              </button>
            </div>

            {/* In Detailed Mode: Order Switcher */}
            {viewMode === 'detailed' && (
              <div className="inline-flex p-1 rounded-full glass-panel border border-white/10 text-xs font-mono">
                <button
                  type="button"
                  onClick={() => setOrder('chronological')}
                  className={`px-3 py-1.5 rounded-full transition-all text-[11px] cursor-pointer ${
                    order === 'chronological'
                      ? 'bg-white/10 text-[#F7F2FF] font-semibold'
                      : 'text-[#81758F] hover:text-[#B9AEC8]'
                  }`}
                >
                  <span>2022 → 2026</span>
                </button>
                <button
                  type="button"
                  onClick={() => setOrder('reverse')}
                  className={`px-3 py-1.5 rounded-full transition-all text-[11px] flex items-center gap-1 cursor-pointer ${
                    order === 'reverse'
                      ? 'bg-white/10 text-[#F7F2FF] font-semibold'
                      : 'text-[#81758F] hover:text-[#B9AEC8]'
                  }`}
                >
                  <ArrowDownUp className="w-3 h-3" />
                  <span>LATEST FIRST</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* View Indicator Badge */}
        {viewMode === 'summary' && (
          <div className="mb-8 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B86CFF]/10 border border-[#B86CFF]/20 text-[11px] font-mono text-[#E89BFF]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B86CFF] animate-pulse" />
            <span>SUMMARY VIEW: Showing 3 Key Education Pillars (Govt School · KIPS College · UMT)</span>
          </div>
        )}

        {/* Timeline List */}
        <div className="relative pl-6 sm:pl-10 md:pl-12 border-l border-[#B86CFF]/20 space-y-10 sm:space-y-14">
          {/* Glowing central indicator */}
          <div className="absolute top-0 bottom-0 left-[-1px] w-[2px] bg-gradient-to-b from-[#B86CFF] via-[#E89BFF] to-transparent pointer-events-none" />

          <AnimatePresence mode="popLayout">
            {activeItems.map((item, index) => {
              const isCurrent = item.status === 'current';

              return (
                <motion.div
                  key={`${item.year}-${item.title}-${viewMode}`}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                  className="relative group"
                >
                  {/* Node Bullet on the vertical line */}
                  <div
                    className={`absolute -left-[31px] sm:-left-[47px] md:-left-[55px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                      isCurrent
                        ? 'bg-[#B86CFF] border-[#E89BFF] shadow-[0_0_12px_#B86CFF]'
                        : 'bg-[#0B0714] border-white/30 group-hover:border-[#B86CFF]'
                    }`}
                  />

                  {/* Content Card */}
                  <div
                    className={`glass-panel rounded-2xl p-6 sm:p-8 hover:border-[#B86CFF]/40 transition-all duration-300 ${
                      isCurrent ? 'ring-1 ring-[#B86CFF]/30 bg-white/[0.04]' : ''
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <div className="inline-flex flex-wrap items-center gap-2">
                        {/* Year pill */}
                        <span className="font-mono text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#B86CFF]/20 text-[#E89BFF] border border-[#B86CFF]/30">
                          {item.year}
                        </span>

                        {/* Category tag */}
                        {item.category && (
                          <span className="text-[10px] font-mono tracking-wider px-2 py-0.5 rounded-full bg-white/[0.06] text-[#CDB4FF] border border-white/10 uppercase">
                            {item.category}
                          </span>
                        )}

                        {isCurrent && (
                          <span className="flex items-center gap-1 text-[11px] font-mono text-[#FF8FD8] font-medium animate-pulse">
                            <Sparkles className="w-3 h-3 text-[#FF8FD8]" />
                            ACTIVE STAGE
                          </span>
                        )}
                      </div>

                      <span className="text-xs font-mono text-[#E89BFF] font-medium">
                        {item.role}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-light text-[#F7F2FF] tracking-tight mb-2 group-hover:text-[#E89BFF] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-sm text-[#CDB4FF] font-light leading-relaxed mb-5">
                      {item.description}
                    </p>

                    <div className="space-y-2 border-t border-white/10 pt-4">
                      {item.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-[#EADCFE]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#B86CFF] mt-0.5 shrink-0" />
                          <span className="leading-relaxed">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Quick toggle at bottom */}
          <div className="pt-4 flex justify-start">
            {viewMode === 'summary' ? (
              <button
                type="button"
                onClick={() => setViewMode('detailed')}
                className="group px-6 py-3 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-[#B86CFF]/40 hover:border-[#B86CFF] text-xs font-mono tracking-wider text-[#F7F2FF] transition-all flex items-center gap-2.5 shadow-[0_0_20px_rgba(184,108,255,0.15)] hover:shadow-[0_0_25px_rgba(184,108,255,0.3)] cursor-pointer"
              >
                <span>VIEW FULL IN-DEPTH JOURNEY (7 STAGES)</span>
                <ChevronDown className="w-4 h-4 text-[#E89BFF] group-hover:translate-y-0.5 transition-transform" />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setViewMode('summary')}
                className="group px-5 py-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-mono text-[#B9AEC8] hover:text-[#F7F2FF] transition-colors flex items-center gap-2 cursor-pointer"
              >
                <ChevronUp className="w-4 h-4 text-[#E89BFF] group-hover:-translate-y-0.5 transition-transform" />
                <span>COLLAPSE TO CORE MILESTONES ONLY (GOV SCHOOL · KIPS · UMT)</span>
              </button>
            )}
          </div>
        </div>

        {/* Where I Am Now — Culmination Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 sm:mt-20 p-8 sm:p-10 rounded-3xl relative overflow-hidden glass-panel border border-[#B86CFF]/30 bg-gradient-to-br from-[#6B2C91]/20 via-[#180E28] to-[#0B0714]"
        >
          {/* Ambient background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#B86CFF]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B86CFF]/20 border border-[#B86CFF]/40 text-[#E89BFF] text-xs font-mono tracking-wider mb-3">
                <Compass className="w-3.5 h-3.5 text-[#FF8FD8]" />
                <span>{TIMELINE_SUMMARY.currentReflectionTitle.toUpperCase()}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-light text-white tracking-tight mb-3">
                The Confluence of AI & Human Interface
              </h3>
              <p className="text-sm sm:text-base text-[#D7C8EC] font-light leading-relaxed">
                {TIMELINE_SUMMARY.currentReflectionText}
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#6B2C91] via-[#B86CFF] to-[#FF8FD8] hover:opacity-95 text-white font-medium text-xs tracking-wider shadow-lg hover:shadow-[#B86CFF]/30 hover:scale-105 transition-all duration-300 shrink-0"
            >
              <span>CONNECT OR COLLABORATE</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
