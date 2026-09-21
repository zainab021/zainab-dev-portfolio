import React from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles, Terminal, BookOpen, Lightbulb, Compass } from 'lucide-react';

export const Personality: React.FC = () => {
  const interests = [
    { name: "HUMAN-AI INTERACTION", icon: Sparkles, desc: "Designing non-coercive, transparent interfaces for probabilistic models" },
    { name: "CREATIVE CODING", icon: Terminal, desc: "Exploring generative vectors, canvas simulations, and algorithmic graphics" },
    { name: "INTERFACE CRAFT", icon: Lightbulb, desc: "Fine-tuning spatial rhythm, typographic contrast, and responsive fluidity" },
    { name: "RAPID ITERATION", icon: Compass, desc: "Building prototypes fast to fail, learn, and improve early" },
  ];

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="glass-panel rounded-3xl p-8 sm:p-12 lg:p-16 border border-white/10 relative overflow-hidden">
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#FF8FD8]/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <span className="text-xs font-mono tracking-[0.2em] text-[#FF8FD8] uppercase mb-3 flex items-center gap-2">
              <Heart className="w-3.5 h-3.5 text-[#FF8FD8]" />
              08 / HUMAN TOUCH
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#F7F2FF] tracking-tight mb-6 leading-snug">
              Beyond the code.
            </h2>

            <p className="text-lg sm:text-xl font-light text-[#F7F2FF]/90 leading-relaxed mb-10 font-sans-main">
              "I like turning complicated ideas into experiences people can{' '}
              <span className="font-serif-editorial italic text-[#E89BFF] font-normal">actually understand</span>{' '}
              and use."
            </p>

            {/* Interest Tiles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {interests.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-3.5"
                  >
                    <div className="p-2 rounded-lg bg-white/[0.04] text-[#B86CFF] shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-xs font-mono font-semibold text-[#F7F2FF] tracking-wider mb-1">
                        {item.name}
                      </h3>
                      <p className="text-xs text-[#81758F] leading-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
