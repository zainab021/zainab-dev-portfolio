import React, { useState } from 'react';
import { motion } from 'motion/react';
import heroGirlImg from '../assets/images/hero-girl.png';
import {
  MousePointer,
  Crop,
  Type,
  PenTool,
  Square,
  Sparkles,
  Search,
  Code2,
  Terminal,
  Globe,
  Braces,
  Image as ImageIcon,
  ArrowRight,
  GraduationCap,
  Laptop,
  CheckCircle2,
} from 'lucide-react';

interface DualEvolutionBannerProps {
  onExploreSkills?: (category?: string) => void;
}

export const DualEvolutionBanner: React.FC<DualEvolutionBannerProps> = ({ onExploreSkills }) => {
  const [activeTool, setActiveTool] = useState<string | null>(null);

  const designTools = [
    { id: 'select', icon: MousePointer, label: 'Selection & Alignment' },
    { id: 'crop', icon: Crop, label: 'Artboard & Layout Frame' },
    { id: 'text', icon: Type, label: 'Typography & Optical Kern' },
    { id: 'pen', icon: PenTool, label: 'Vector Paths & Bezier Curves' },
    { id: 'shape', icon: Square, label: 'Atomic Geometry & Radius' },
    { id: 'gradient', icon: Sparkles, label: 'Color Space & Gradient Tokens' },
    { id: 'search', icon: Search, label: 'Design System Asset Search' },
  ];

  return (
    <div className="w-full relative rounded-[32px] sm:rounded-[40px] overflow-hidden shadow-2xl border border-white/10 bg-[#0E071A]">
      {/* =========================================================================
          MAIN PANORAMIC SPLIT CANVAS (NO BLOCKING PICTURE)
          Left: Luminous Warm/White Design Studio & Student Genesis
          Center: Luminous Transition Seam with Interactive Bridge Capsule
          Right: Deep Twilight Coding IDE & AI Systems
          ========================================================================= */}
      <div className="relative w-full min-h-[500px] sm:min-h-[540px] lg:min-h-[580px] flex flex-col lg:flex-row items-stretch overflow-hidden">
        
        {/* Background split gradient: Warm Cream/White Studio on Left -> Deep Indigo Dark IDE on Right */}
        <div className="absolute inset-0 z-0 flex">
          {/* Left studio background: High-contrast light studio paper with soft radial illumination */}
          <div className="w-full lg:w-[50%] bg-gradient-to-br from-[#FAF6EE] via-[#F4EDE2] to-[#EAE0D3] relative overflow-hidden">
            {/* Soft designer dot-grid pattern on the left */}
            <div
              className="absolute inset-0 opacity-[0.18]"
              style={{
                backgroundImage: 'radial-gradient(#4A3B60 1px, transparent 1px)',
                backgroundSize: '20px 20px',
              }}
            />
            {/* Soft lilac ambient glow */}
            <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-[#E8D4FF]/40 blur-3xl pointer-events-none" />
          </div>

          {/* Right developer background: Deep dark cosmos IDE with subtle matrix/circuit ambient glow */}
          <div className="hidden lg:block w-[50%] bg-gradient-to-bl from-[#180C2C] via-[#0E061A] to-[#080311] relative overflow-hidden">
            {/* Subtle cyber code grid on the right */}
            <div
              className="absolute inset-0 opacity-[0.12]"
              style={{
                backgroundImage: 'linear-gradient(to right, #B86CFF 1px, transparent 1px), linear-gradient(to bottom, #B86CFF 1px, transparent 1px)',
                backgroundSize: '32px 32px',
              }}
            />
            {/* Glowing violet backlights */}
            <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-[#6B2C91]/30 blur-3xl pointer-events-none" />
            <div className="absolute bottom-10 right-1/4 w-80 h-80 rounded-full bg-[#B86CFF]/20 blur-3xl pointer-events-none" />
          </div>
        </div>

        {/* =====================================================================
            BRIDGING FIGURE: Zainab standing across the seam — literally the
            student stepping out of the design studio into the code realm
            ===================================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="hidden lg:block absolute bottom-0 left-1/2 -translate-x-1/2 z-[8] pointer-events-none"
        >
          {/* Soft contact shadow to ground her on the seam */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-48 h-8 bg-black/30 rounded-full blur-2xl" />
          <img
            src={heroGirlImg}
            alt="Zainab"
            className="relative h-[440px] xl:h-[500px] w-auto object-contain object-bottom drop-shadow-[0_25px_35px_rgba(0,0,0,0.45)]"
          />
        </motion.div>

        {/* =====================================================================
            LEFT HALF: THE FOUNDATIONAL & DESIGN REALM ("From Student")
            ===================================================================== */}
        <div className="relative z-10 w-full lg:w-[50%] p-6 sm:p-10 lg:p-12 flex flex-col justify-between text-[#1E1B2E]">
          
          {/* Top Left: Floating Vertical Design Toolbar & Color Palette Strip */}
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="flex items-start gap-4">
              {/* Adobe / Figma Style Floating Vertical Toolbar */}
              <div className="shrink-0 bg-[#281E3B]/85 backdrop-blur-md rounded-2xl p-1.5 shadow-xl border border-white/20 flex flex-col gap-1 text-white">
                {designTools.map((tool) => {
                  const IconComponent = tool.icon;
                  const isSelected = activeTool === tool.id;
                  return (
                    <button
                      key={tool.id}
                      type="button"
                      onClick={() => setActiveTool(isSelected ? null : tool.id)}
                      title={tool.label}
                      className={`p-2 rounded-xl transition-all relative group ${
                        isSelected
                          ? 'bg-[#B86CFF] text-[#0B0714] shadow-md'
                          : 'text-white/70 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <IconComponent className="w-4 h-4" />
                      {/* Tooltip on hover */}
                      <span className="hidden sm:group-hover:block absolute left-full ml-3 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-lg bg-[#180E28] text-white text-[10px] font-mono tracking-wide whitespace-nowrap shadow-xl border border-white/10 z-50 pointer-events-none">
                        {tool.label}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Top Color Palette Swatch Strip */}
              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] font-mono tracking-widest text-[#5E5175] uppercase font-bold">
                  COLOR PALETTE
                </span>
                <div className="flex items-center gap-1.5 p-1.5 rounded-xl bg-white/70 backdrop-blur-sm border border-black/10 shadow-sm">
                  <div className="w-5 h-5 rounded-md bg-[#240A34] shadow-inner" title="#240A34 Deep Plum" />
                  <div className="w-5 h-5 rounded-md bg-[#4B196C] shadow-inner" title="#4B196C Royal Violet" />
                  <div className="w-5 h-5 rounded-md bg-[#7427A5] shadow-inner" title="#7427A5 Electric Orchid" />
                  <div className="w-5 h-5 rounded-md bg-[#9F3EDF] shadow-inner" title="#9F3EDF Bright Violet" />
                  <div className="w-5 h-5 rounded-md bg-[#C56CF0] shadow-inner" title="#C56CF0 Lilac Bloom" />
                  <div className="w-5 h-5 rounded-md bg-[#E5B6F8] shadow-inner" title="#E5B6F8 Soft Lavender" />
                </div>
              </div>
            </div>

            {/* Academic / Learning Genesis Tag */}
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/60 backdrop-blur-sm border border-black/10 text-[11px] font-mono text-[#5F249F] font-semibold">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>ACADEMIC FOUNDATION</span>
            </div>
          </div>

          {/* Core Typography Banner: "From Student to Web Developer & AI Application Engineer" */}
          <div className="my-8 sm:my-10 max-w-lg">
            <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#160E26] block leading-none">
              From
            </span>
            <span className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#5F249F] block leading-[1.05] mt-1 drop-shadow-sm">
              Student
            </span>
            
            {/* "— to —" script connector */}
            <div className="flex items-center gap-3 my-2 text-[#4A3C60]">
              <span className="w-12 h-[1.5px] bg-[#4A3C60]/40" />
              <span className="font-serif italic text-2xl sm:text-3xl font-light text-[#5F249F]">
                to
              </span>
              <span className="w-12 h-[1.5px] bg-[#4A3C60]/40" />
            </div>

            <span className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#160E26] block leading-[1.05]">
              Web Developer
            </span>
            <span className="text-xs sm:text-sm font-mono tracking-wider text-[#685980] block mt-3 uppercase font-medium">
              &amp; AI Application Engineer
            </span>
          </div>

          {/* Floating Vector Pen Tool & Typography Design Artifacts */}
          <div className="relative pt-2">
            <div className="flex flex-wrap items-center gap-3">
              {/* Pen Tool Nib with Bounding Vector Box */}
              <div className="inline-flex items-center gap-2 p-2 rounded-xl bg-white/80 backdrop-blur-sm border border-dashed border-[#5F249F]/40 shadow-sm">
                <div className="w-7 h-7 rounded-lg bg-[#5F249F] text-white flex items-center justify-center shadow-sm">
                  <PenTool className="w-4 h-4" />
                </div>
                <div className="text-[11px] font-mono leading-tight">
                  <span className="font-bold text-[#160E26] block">Vector Bezier</span>
                  <span className="text-[#6D5E84]">Anchor &amp; Handles</span>
                </div>
              </div>

              {/* Typography "Aa" Bounding Box */}
              <div className="inline-flex items-center gap-2 p-2 rounded-xl bg-white/80 backdrop-blur-sm border border-dashed border-[#5F249F]/40 shadow-sm">
                <span className="font-serif font-black text-lg text-[#5F249F] px-1">Aa</span>
                <span className="text-[10px] font-mono text-[#6D5E84] pr-1">Typography</span>
              </div>

              {/* Color Swatch Fan */}
              <div className="flex items-center gap-2 text-xs font-mono text-[#6D5E84] ml-auto">
                <div className="flex -space-x-2">
                  <div className="w-5 h-8 rounded-sm bg-[#5F249F] rotate-[-18deg] shadow-sm border border-white" />
                  <div className="w-5 h-8 rounded-sm bg-[#9F3EDF] rotate-[-8deg] shadow-sm border border-white" />
                  <div className="w-5 h-8 rounded-sm bg-[#C56CF0] rotate-[4deg] shadow-sm border border-white" />
                  <div className="w-5 h-8 rounded-sm bg-[#E5B6F8] rotate-[16deg] shadow-sm border border-white" />
                </div>
                <span className="text-[11px] font-mono pl-3 text-[#5A4B70]">Harmonic Palettes</span>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================================
            CENTER DIVIDER: SEAMLESS SEAM & TRANSFORMATION BRIDGE (NO PICTURE)
            ===================================================================== */}
        <div className="hidden lg:flex flex-col items-center justify-center relative z-20 w-0">
          <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-[#B86CFF]/40 to-transparent" />
          
          {/* Centered Bridge Pill connecting both worlds */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-[#160B29] border border-[#B86CFF]/50 text-[#E89BFF] text-xs font-mono tracking-wider shadow-2xl flex items-center gap-2.5 whitespace-nowrap z-30">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span>DESIGN INTUITION × AI ARCHITECTURE</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#B86CFF]" />
          </div>
        </div>

        {/* =====================================================================
            RIGHT HALF: THE CODE & AI ENGINEERING REALM
            Dark IDE environment with interactive floating code windows and badges
            ===================================================================== */}
        <div className="relative z-10 w-full lg:w-[50%] p-6 sm:p-10 lg:p-12 flex flex-col justify-between text-[#F7F2FF] bg-[#0E061A] lg:bg-transparent border-t lg:border-t-0 border-white/10">
          
          {/* Top Right: Code Editor Window (IDE Mockup) */}
          <div className="w-full flex justify-end">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full sm:w-[340px] lg:w-[380px] rounded-2xl bg-[#140A24]/90 backdrop-blur-md border border-white/15 p-4 shadow-2xl relative group hover:border-[#B86CFF]/40 transition-all"
            >
              {/* Window Header Dots */}
              <div className="flex items-center justify-between pb-3 mb-2 border-b border-white/10">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                </div>
                <span className="text-[10px] font-mono text-[#A798C0]">index.html · TypeScript</span>
              </div>

              {/* Code Snippet lines */}
              <div className="font-mono text-[11px] leading-relaxed text-[#D2C5E8] space-y-0.5">
                <p><span className="text-[#A855F7]">&lt;!DOCTYPE</span> <span className="text-[#38BDF8]">html</span><span className="text-[#A855F7]">&gt;</span></p>
                <p><span className="text-[#A855F7]">&lt;html</span> <span className="text-[#38BDF8]">lang</span>=<span className="text-[#34D399]">"en"</span><span className="text-[#A855F7]">&gt;</span></p>
                <p className="pl-2"><span className="text-[#A855F7]">&lt;head&gt;</span></p>
                <p className="pl-4"><span className="text-[#A855F7]">&lt;meta</span> <span className="text-[#38BDF8]">charset</span>=<span className="text-[#34D399]">"UTF-8"</span><span className="text-[#A855F7]">&gt;</span></p>
                <p className="pl-4"><span className="text-[#A855F7]">&lt;title&gt;</span><span className="text-[#F7F2FF]">Zainab · AI Portfolio</span><span className="text-[#A855F7]">&lt;/title&gt;</span></p>
                <p className="pl-2"><span className="text-[#A855F7]">&lt;/head&gt;</span></p>
                <p className="pl-2"><span className="text-[#A855F7]">&lt;body&gt;</span></p>
                <p className="pl-4"><span className="text-[#A855F7]">&lt;header&gt;</span></p>
                <p className="pl-6 text-[#FBBF24]">&lt;h1&gt;Building Digital Experiences&lt;/h1&gt;</p>
                <p className="pl-4"><span className="text-[#A855F7]">&lt;/header&gt;</span></p>
                <p className="pl-2"><span className="text-[#A855F7]">&lt;/body&gt;</span></p>
              </div>

              {/* Top-Right floating "</>" badge */}
              <div className="absolute -top-3 -right-3 w-10 h-10 rounded-xl bg-gradient-to-br from-[#6B2C91] to-[#3B82F6] shadow-lg border border-white/30 flex items-center justify-center text-white">
                <Code2 className="w-5 h-5" />
              </div>
            </motion.div>
          </div>

          {/* Middle Right: Floating Badges & Wireframe Browser Mockup */}
          <div className="my-6 flex flex-col sm:flex-row items-end sm:items-center justify-end gap-4">
            {/* Floating "{ }" Badge */}
            <div className="p-3 rounded-2xl bg-[#1C1030]/90 backdrop-blur-md border border-white/10 shadow-xl text-[#B86CFF] hover:text-white transition-colors">
              <Braces className="w-6 h-6" />
            </div>

            {/* Browser Wireframe Mockup Window */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full sm:w-60 rounded-2xl bg-[#170D2B]/90 backdrop-blur-md border border-white/15 p-3 shadow-2xl"
            >
              {/* Browser bar */}
              <div className="flex items-center gap-1 pb-2 border-b border-white/10 mb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
              </div>
              {/* Content Mockup: Landscape Image Card + Text Lines */}
              <div className="w-full h-16 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center text-white/40 mb-2">
                <ImageIcon className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="w-3/4 h-1.5 rounded-full bg-white/30" />
                <div className="w-1/2 h-1.5 rounded-full bg-[#B86CFF]/60" />
              </div>
            </motion.div>
          </div>

          {/* Bottom Right: Micro Terminal & Globe Network Badge */}
          <div className="flex items-center justify-end gap-3 pt-2">
            {/* Terminal Live Command Pill */}
            <div className="px-3.5 py-2 rounded-xl bg-black/50 backdrop-blur-md border border-white/10 text-[11px] font-mono text-[#34D399] flex items-center gap-2 shadow-lg">
              <Terminal className="w-3.5 h-3.5 text-[#B86CFF]" />
              <span>$ fastapi --reload &amp; vite</span>
            </div>

            {/* Globe Network Badge */}
            <div className="w-10 h-10 rounded-xl bg-[#20123A] border border-white/15 shadow-xl flex items-center justify-center text-[#B86CFF]">
              <Globe className="w-5 h-5" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
