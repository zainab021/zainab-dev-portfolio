import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Workflow, ChevronDown, ChevronUp, Sparkles, CheckCircle2 } from 'lucide-react';
import { PROCESS_STEPS } from '../data/portfolioData';
import { MethodologyInfographic } from './MethodologyInfographic';

export const Process: React.FC = () => {
  const [showDetailedStages, setShowDetailedStages] = useState<boolean>(false);

  return (
    <section id="methodology" className="relative py-20 sm:py-28 overflow-hidden border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Heading */}
        <div className="mb-10 sm:mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-mono tracking-[0.2em] text-[#E89BFF] uppercase mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#B86CFF]" />
              06 / METHODOLOGY
            </span>
            <h2 className="text-3xl sm:text-5xl font-light text-[#F7F2FF] tracking-tight mb-4">
              Systematic process.
            </h2>
            <p className="text-sm sm:text-base text-[#B9AEC8] font-light leading-relaxed">
              An end-to-end infographic pipeline connecting human intent, model architecture, rapid component engineering, and verified deployment.
            </p>
          </div>

          {/* Quick Stage Breakdown Toggle Button */}
          <button
            type="button"
            onClick={() => setShowDetailedStages(!showDetailedStages)}
            className="self-start md:self-end flex items-center gap-2 px-4 py-2.5 rounded-full glass-panel border border-white/10 text-xs font-mono text-[#E89BFF] hover:text-white hover:border-[#B86CFF]/40 transition-all hover:scale-105"
          >
            <Workflow className="w-3.5 h-3.5" />
            <span>{showDetailedStages ? 'HIDE DETAILED BREAKDOWN' : 'VIEW 6-STAGE AUDIT MATRIX'}</span>
            {showDetailedStages ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Infographic Main Stage */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full mb-10"
        >
          <MethodologyInfographic />
        </motion.div>

        {/* Optional 6-Stage Engineering Matrix Drawer */}
        <AnimatePresence>
          {showDetailedStages && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden pt-4"
            >
              <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-white/10 mb-8">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#B86CFF]" />
                    <h3 className="text-lg font-light text-[#F7F2FF]">
                      Comprehensive 6-Stage Engineering Matrix
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-[#81758F]">
                    SPECIFICATION BREAKDOWN
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {PROCESS_STEPS.map((step, index) => (
                    <div
                      key={step.number}
                      className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-[#B86CFF]/30 transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded-md bg-[#B86CFF]/15 text-[#E89BFF] border border-[#B86CFF]/30">
                            {step.number}
                          </span>
                          <span className="text-[10px] font-mono tracking-widest text-[#81758F] uppercase">
                            STAGE {index + 1} OF 6
                          </span>
                        </div>

                        <h4 className="text-base font-medium text-[#F7F2FF] mb-0.5">
                          {step.title}
                        </h4>
                        <p className="text-[11px] font-mono text-[#FF8FD8] uppercase mb-2">
                          {step.subtitle}
                        </p>

                        <p className="text-xs text-[#B9AEC8] leading-relaxed mb-4 font-light">
                          {step.description}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#CDB4FF]">
                        <span className="text-[#81758F]">DELIVERABLE:</span>
                        <span className="text-right truncate ml-2 font-medium text-[#F7F2FF]">
                          {step.output}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

