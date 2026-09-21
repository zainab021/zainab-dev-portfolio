import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Sun, Moon, ArrowRight, CheckCircle2, ChevronRight, Layers } from 'lucide-react';

interface MethodologyInfographicProps {
  onStepSelect?: (stepIndex: number) => void;
}

export const MethodologyInfographic: React.FC<MethodologyInfographicProps> = ({ onStepSelect }) => {
  // Theme toggle: 'dark' (Dark Canopy) is the default, seamlessly matching the dark twilight portfolio aesthetic
  const [theme, setTheme] = useState<'warm' | 'dark'>('dark');
  const [activeStep, setActiveStep] = useState<number>(0);

  const isWarm = theme === 'warm';

  // 4 Core Methodology Steps matching the 4-phase infographic reference
  const steps = [
    {
      number: "01",
      title: "Design & UX Tokens",
      subtitle: "Problem Framing & Visual Foundation",
      description: "Deconstructing constraints, user journey, accessible color harmony, and foundational design tokens.",
      deliverable: "User Story Matrix & Core UX System",
      color: "#F59E0B", // Warm gold / amber
      badgeColor: "bg-amber-500",
      accentBg: isWarm ? "bg-amber-50 text-amber-950" : "bg-amber-500/10 text-amber-300",
      details: [
        "Human intent discovery and user journey mapping",
        "WCAG AA contrast checking & mathematical spacing scales",
        "Design token definitions (color, typography, radiuses)"
      ]
    },
    {
      number: "02",
      title: "Ideate & Model Logic",
      subtitle: "Model Capabilities & Prototyping",
      description: "Evaluating model suitability, latency trade-offs, structured agentic prompts, and interactive wireframes.",
      deliverable: "Technical Schema & AI Prompt Spec",
      color: "#10B981", // Emerald / Mint green
      badgeColor: "bg-emerald-500",
      accentBg: isWarm ? "bg-emerald-50 text-emerald-950" : "bg-emerald-500/10 text-emerald-300",
      details: [
        "Prompt boundary dynamics & token streaming tests",
        "Vector embedding clusters & latency trade-offs",
        "Interactive wireframes and state flow validation"
      ]
    },
    {
      number: "03",
      title: "Code & Architecture",
      subtitle: "Frontend Craft & API Plumbing",
      description: "Developing modular component hierarchies, wiring asynchronous endpoints, and styling with strict spatial math.",
      deliverable: "Full-Stack Functional Prototype",
      color: "#F43F5E", // Coral / Red-orange
      badgeColor: "bg-rose-500",
      accentBg: isWarm ? "bg-rose-50 text-rose-950" : "bg-rose-500/10 text-rose-300",
      details: [
        "Type-safe React & Vite component architecture",
        "FastAPI / Express REST service integration",
        "Zero-latency client state & encrypted caching"
      ]
    },
    {
      number: "04",
      title: "Verify & Deploy",
      subtitle: "QA, Polish & Live Production",
      description: "Validating edge cases, zero-latency caching, responsive verification, and deploying production-ready builds.",
      deliverable: "Live, Functional Digital Product",
      color: "#EC4899", // Vivid Magenta / Pink
      badgeColor: "bg-pink-500",
      accentBg: isWarm ? "bg-pink-50 text-pink-950" : "bg-pink-500/10 text-pink-300",
      details: [
        "Cross-viewport responsiveness & error boundary checks",
        "60FPS micro-interactions & motion transition polish",
        "Production deployment, telemetry, and SEO optimization"
      ]
    }
  ];

  return (
    <div className="w-full flex flex-col items-center">
      {/* Infographic Main Board Container */}
      <div
        className={`w-full rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 lg:p-12 transition-colors duration-500 relative overflow-hidden shadow-2xl border ${
          isWarm
            ? 'bg-[#FBF7F0] border-[#E8DFD1] text-[#221C35]'
            : 'bg-[#120B1F]/90 border-white/10 text-[#F7F2FF]'
        }`}
      >
        {/* Abstract Background Blob Accents matching the reference image */}
        {isWarm ? (
          <>
            {/* Top-left organic star/blob */}
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-[#F2E8D9] rounded-full blur-2xl opacity-70 pointer-events-none" />
            {/* Top-right large soft blob */}
            <div className="absolute top-0 -right-20 w-80 h-80 bg-[#EFE3CF] rounded-[60px] rotate-12 blur-3xl opacity-60 pointer-events-none" />
            {/* Bottom-center soft wave blob */}
            <div className="absolute -bottom-16 left-1/3 w-96 h-48 bg-[#F4EAD9] rounded-full blur-2xl opacity-60 pointer-events-none" />
          </>
        ) : (
          <>
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#6B2C91]/25 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute top-1/2 -right-20 w-80 h-80 bg-[#B86CFF]/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute -bottom-20 left-1/3 w-96 h-60 bg-[#FF8FD8]/15 rounded-full blur-[100px] pointer-events-none" />
          </>
        )}

        {/* Top Control Bar: Mode Switcher */}
        <div className="relative z-10 flex items-center justify-between pb-6 sm:pb-8 border-b border-current/10">
          <div className="flex items-center gap-2">
            <span
              className={`w-2.5 h-2.5 rounded-full ${
                isWarm ? 'bg-[#E94E77]' : 'bg-[#B86CFF]'
              }`}
            />
            <span className="text-[11px] font-mono tracking-widest uppercase opacity-70 font-semibold">
              SECTION 06 / METHODOLOGY INFOGRAPHIC
            </span>
          </div>

          {/* Theme Pill Toggle */}
          <div
            className={`flex items-center p-1 rounded-full border text-xs font-mono transition-all ${
              isWarm
                ? 'bg-[#EFE6D8] border-[#DED1C1]'
                : 'bg-black/40 border-white/10'
            }`}
          >
            <button
              type="button"
              onClick={() => setTheme('warm')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full transition-all ${
                isWarm
                  ? 'bg-white text-[#221C35] font-semibold shadow-sm'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              <Sun className="w-3.5 h-3.5 text-amber-500" />
              <span>WARM CANVAS</span>
            </button>
            <button
              type="button"
              onClick={() => setTheme('dark')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full transition-all ${
                !isWarm
                  ? 'bg-[#B86CFF] text-[#0B0714] font-semibold shadow-sm'
                  : 'text-black/60 hover:text-black'
              }`}
            >
              <Moon className="w-3.5 h-3.5 text-[#120B1F]" />
              <span>DARK CANOPY</span>
            </button>
          </div>
        </div>

        {/* Infographic Center Header (matching reference: Title + Tracked INFOGRAPHIC + Subtext) */}
        <div className="relative z-10 text-center pt-8 pb-12 sm:pb-16 max-w-2xl mx-auto">
          <h3
            className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-2 ${
              isWarm ? 'text-[#221C35]' : 'text-[#FAF5FF]'
            }`}
          >
            Web Designer & AI Engineer
          </h3>
          <p
            className={`text-xs sm:text-sm font-mono tracking-[0.3em] uppercase font-bold mb-4 ${
              isWarm ? 'text-[#E94E77]' : 'text-[#FF8FD8]'
            }`}
          >
            I N F O G R A P H I C
          </p>
          <p
            className={`text-xs sm:text-sm font-light leading-relaxed max-w-lg mx-auto ${
              isWarm ? 'text-[#5E546F]' : 'text-[#CDB4FF]'
            }`}
          >
            A systematic four-phase delivery pipeline connecting human intent, model architecture, rapid component engineering, and verified deployment.
          </p>
        </div>

        {/* =========================================================================
            DESKTOP / TABLET INFOGRAPHIC STAGE (CONTINUOUS STEPPED PIPELINE)
            ========================================================================= */}
        <div className="relative z-10 hidden lg:block w-full my-4">
          {/* Stepped Horizontal Waveform Line */}
          {/* 
              Line travels:
              Starts at Left (x: 0%, y: 72%)
              -> Enters Step 1 area at bottom
              -> Steps UP between Col 1 & 2 (x: 25%, y: 28%)
              -> Traverses top of Col 2
              -> Steps DOWN between Col 2 & 3 (x: 50%, y: 72%)
              -> Traverses bottom of Col 3
              -> Steps UP between Col 3 & 4 (x: 75%, y: 28%)
              -> Traverses top of Col 4
              -> Exits to Right (x: 100%, y: 28%)
          */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            viewBox="0 0 1000 480"
            fill="none"
            preserveAspectRatio="none"
          >
            {/* Stepped Main Path */}
            <path
              d="M 0,350 L 250,350 L 250,130 L 500,130 L 500,350 L 750,350 L 750,130 L 1000,130"
              stroke={isWarm ? "#8E7D99" : "#B86CFF"}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeOpacity={isWarm ? "0.6" : "0.5"}
            />

            {/* Pulsing Light Packet traversing the path */}
            <motion.path
              d="M 0,350 L 250,350 L 250,130 L 500,130 L 500,350 L 750,350 L 750,130 L 1000,130"
              stroke={isWarm ? "#E94E77" : "#FF8FD8"}
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="40 300"
              initial={{ strokeDashoffset: 680 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "linear" }}
            />
          </svg>

          {/* 4 Alternating Infographic Columns */}
          <div className="relative z-10 grid grid-cols-4 gap-6 min-h-[480px]">
            {/* -------------------------------------------------------------
                COLUMN 01: Top Text -> Dashed Line -> Bottom Palette Illustration
                ------------------------------------------------------------- */}
            <div
              onClick={() => {
                setActiveStep(0);
                onStepSelect?.(0);
              }}
              className={`flex flex-col justify-between p-3 rounded-2xl cursor-pointer transition-all ${
                activeStep === 0
                  ? isWarm
                    ? 'bg-white/60 shadow-lg ring-2 ring-[#F59E0B]'
                    : 'bg-white/5 ring-2 ring-[#F59E0B]'
                  : 'hover:bg-black/[0.02]'
              }`}
            >
              {/* TOP: Number & Text */}
              <div className="flex flex-col items-start pr-2">
                <span className="text-4xl sm:text-5xl font-black font-sans tracking-tight text-[#F59E0B] mb-1">
                  01
                </span>
                <h4
                  className={`text-base font-bold tracking-tight mb-1 ${
                    isWarm ? 'text-[#221C35]' : 'text-white'
                  }`}
                >
                  {steps[0].title}
                </h4>
                <p
                  className={`text-[11px] leading-relaxed font-light ${
                    isWarm ? 'text-[#5E546F]' : 'text-[#B9AEC8]'
                  }`}
                >
                  {steps[0].description}
                </p>
              </div>

              {/* MIDDLE: Dashed Line down to Illustration */}
              <div className="w-full flex flex-col items-center my-3">
                <div
                  className="w-0.5 h-12 border-l-2 border-dashed border-[#F59E0B]/70"
                />
                <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B] shadow-[0_0_8px_#F59E0B]" />
              </div>

              {/* BOTTOM: Color Palette & Swatch Illustration */}
              <div className="w-full flex items-center justify-center pt-2">
                <div className="relative w-44 h-36 flex items-center justify-center">
                  {/* Organic Backdrop Blob */}
                  <div
                    className={`absolute inset-0 rounded-[36px] rotate-[-6deg] transition-colors ${
                      isWarm ? 'bg-[#EBDDC8]' : 'bg-[#2A1B3D]'
                    }`}
                  />

                  {/* Swatch Palette Fan Blades */}
                  <div className="relative z-10 flex items-center justify-center">
                    {/* Fan blade 1: Cyan */}
                    <div className="absolute -left-6 bottom-4 w-7 h-16 rounded-md bg-[#06B6D4] rotate-[-35deg] shadow-md border border-white/40" />
                    {/* Fan blade 2: Mint */}
                    <div className="absolute -left-3 bottom-5 w-7 h-16 rounded-md bg-[#10B981] rotate-[-18deg] shadow-md border border-white/40" />
                    {/* Fan blade 3: Pink */}
                    <div className="absolute left-1 bottom-5 w-7 h-16 rounded-md bg-[#EC4899] rotate-[2deg] shadow-md border border-white/40" />
                    {/* Fan blade 4: Purple */}
                    <div className="absolute left-5 bottom-4 w-7 h-16 rounded-md bg-[#8B5CF6] rotate-[22deg] shadow-md border border-white/40" />

                    {/* Rectangular Swatch Palette Card with 8 Color Chips */}
                    <div
                      className={`relative z-20 translate-y-3 -translate-x-3 p-2.5 rounded-xl shadow-xl border ${
                        isWarm
                          ? 'bg-white border-black/10'
                          : 'bg-[#180E28] border-white/20'
                      }`}
                    >
                      <div className="grid grid-cols-4 gap-1.5 w-28">
                        <div className="w-5 h-5 rounded-md bg-[#3B0764]" />
                        <div className="w-5 h-5 rounded-md bg-[#EC4899]" />
                        <div className="w-5 h-5 rounded-md bg-[#F59E0B]" />
                        <div className="w-5 h-5 rounded-md bg-[#10B981]" />
                        <div className="w-5 h-5 rounded-md bg-[#8B5CF6]" />
                        <div className="w-5 h-5 rounded-md bg-[#F43F5E]" />
                        <div className="w-5 h-5 rounded-md bg-[#06B6D4]" />
                        <div className="w-5 h-5 rounded-md bg-[#D97706]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* -------------------------------------------------------------
                COLUMN 02: Top Bulb/Pencil Illustration -> Dashed Line -> Bottom Text
                ------------------------------------------------------------- */}
            <div
              onClick={() => {
                setActiveStep(1);
                onStepSelect?.(1);
              }}
              className={`flex flex-col justify-between p-3 rounded-2xl cursor-pointer transition-all ${
                activeStep === 1
                  ? isWarm
                    ? 'bg-white/60 shadow-lg ring-2 ring-[#10B981]'
                    : 'bg-white/5 ring-2 ring-[#10B981]'
                  : 'hover:bg-black/[0.02]'
              }`}
            >
              {/* TOP: Bulb & Pencil Illustration */}
              <div className="w-full flex items-center justify-center pb-2">
                <div className="relative w-44 h-36 flex items-center justify-center">
                  {/* Organic Backdrop Blob */}
                  <div
                    className={`absolute inset-0 rounded-[40px] rotate-[8deg] transition-colors ${
                      isWarm ? 'bg-[#EADBC6]' : 'bg-[#1E2E28]'
                    }`}
                  />

                  {/* Dark Organic Green Leaf */}
                  <div className="absolute top-2 left-6 w-12 h-14 rounded-full bg-[#059669] rotate-[-25deg] opacity-80" />

                  {/* Large Stylized Angled Pencil */}
                  <div className="absolute -top-1 right-5 w-7 h-24 rounded-full bg-[#F87171] rotate-[28deg] shadow-lg border border-black/10 flex flex-col items-center justify-between p-1 z-10">
                    <div className="w-4 h-4 rounded-full bg-[#E11D48]" />
                    <div className="w-2 h-4 border-t border-black/20" />
                    <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[10px] border-t-[#18181B]" />
                  </div>

                  {/* Incandescent Lightbulb */}
                  <div className="relative z-20 -translate-x-3 translate-y-1 flex flex-col items-center">
                    {/* Glass Envelope */}
                    <div className="w-14 h-16 rounded-full bg-[#FBBF24] border-2 border-[#1E1B2E] shadow-md flex items-center justify-center relative">
                      {/* Filament */}
                      <div className="w-5 h-6 border-2 border-t-0 border-[#1E1B2E] rounded-b-lg" />
                    </div>
                    {/* Screw Base */}
                    <div className="w-8 h-4 bg-[#94A3B8] border-2 border-[#1E1B2E] rounded-b-md flex flex-col justify-around py-0.5">
                      <div className="w-full h-0.5 bg-[#475569]" />
                      <div className="w-full h-0.5 bg-[#475569]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* MIDDLE: Dashed Line down to Text */}
              <div className="w-full flex flex-col items-center my-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#10B981] shadow-[0_0_8px_#10B981]" />
                <div
                  className="w-0.5 h-12 border-l-2 border-dashed border-[#10B981]/70"
                />
              </div>

              {/* BOTTOM: Number & Text */}
              <div className="flex flex-col items-start pr-2">
                <span className="text-4xl sm:text-5xl font-black font-sans tracking-tight text-[#10B981] mb-1">
                  02
                </span>
                <h4
                  className={`text-base font-bold tracking-tight mb-1 ${
                    isWarm ? 'text-[#221C35]' : 'text-white'
                  }`}
                >
                  {steps[1].title}
                </h4>
                <p
                  className={`text-[11px] leading-relaxed font-light ${
                    isWarm ? 'text-[#5E546F]' : 'text-[#B9AEC8]'
                  }`}
                >
                  {steps[1].description}
                </p>
              </div>
            </div>

            {/* -------------------------------------------------------------
                COLUMN 03: Top Text -> Dashed Line -> Bottom Code Editor Illustration
                ------------------------------------------------------------- */}
            <div
              onClick={() => {
                setActiveStep(2);
                onStepSelect?.(2);
              }}
              className={`flex flex-col justify-between p-3 rounded-2xl cursor-pointer transition-all ${
                activeStep === 2
                  ? isWarm
                    ? 'bg-white/60 shadow-lg ring-2 ring-[#F43F5E]'
                    : 'bg-white/5 ring-2 ring-[#F43F5E]'
                  : 'hover:bg-black/[0.02]'
              }`}
            >
              {/* TOP: Number & Text */}
              <div className="flex flex-col items-start pr-2">
                <span className="text-4xl sm:text-5xl font-black font-sans tracking-tight text-[#F43F5E] mb-1">
                  03
                </span>
                <h4
                  className={`text-base font-bold tracking-tight mb-1 ${
                    isWarm ? 'text-[#221C35]' : 'text-white'
                  }`}
                >
                  {steps[2].title}
                </h4>
                <p
                  className={`text-[11px] leading-relaxed font-light ${
                    isWarm ? 'text-[#5E546F]' : 'text-[#B9AEC8]'
                  }`}
                >
                  {steps[2].description}
                </p>
              </div>

              {/* MIDDLE: Dashed Line down to Illustration */}
              <div className="w-full flex flex-col items-center my-3">
                <div
                  className="w-0.5 h-12 border-l-2 border-dashed border-[#F43F5E]/70"
                />
                <div className="w-2.5 h-2.5 rounded-full bg-[#F43F5E] shadow-[0_0_8px_#F43F5E]" />
              </div>

              {/* BOTTOM: Code Window / Editor Illustration */}
              <div className="w-full flex items-center justify-center pt-2">
                <div className="relative w-44 h-36 flex items-center justify-center">
                  {/* Organic Backdrop Blob */}
                  <div
                    className={`absolute inset-0 rounded-[44px] rotate-[-5deg] transition-colors ${
                      isWarm ? 'bg-[#EBDDC8]' : 'bg-[#351628]'
                    }`}
                  />

                  {/* Browser / Code Window */}
                  <div className="relative z-10 w-36 h-28 rounded-2xl bg-[#E11D48] p-2 shadow-2xl border-2 border-black/10 flex flex-col justify-between">
                    {/* Top Bar with 3 Circles */}
                    <div className="flex items-center gap-1.5 pb-1.5 border-b border-white/20">
                      <div className="w-2 h-2 rounded-full bg-white/70" />
                      <div className="w-2 h-2 rounded-full bg-white/70" />
                      <div className="w-2 h-2 rounded-full bg-white/70" />
                    </div>

                    {/* Colored Syntax Highlight Code Lines */}
                    <div className="space-y-1.5 py-1">
                      <div className="w-3/4 h-1.5 rounded-full bg-white/80" />
                      <div className="w-1/2 h-1.5 rounded-full bg-[#10B981]" />
                      <div className="w-4/5 h-1.5 rounded-full bg-[#FBBF24]" />
                      <div className="w-2/3 h-1.5 rounded-full bg-[#8B5CF6]" />
                      <div className="w-1/3 h-1.5 rounded-full bg-[#06B6D4]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* -------------------------------------------------------------
                COLUMN 04: Top Tech Badges & Cursor -> Dashed Line -> Bottom Text
                ------------------------------------------------------------- */}
            <div
              onClick={() => {
                setActiveStep(3);
                onStepSelect?.(3);
              }}
              className={`flex flex-col justify-between p-3 rounded-2xl cursor-pointer transition-all ${
                activeStep === 3
                  ? isWarm
                    ? 'bg-white/60 shadow-lg ring-2 ring-[#EC4899]'
                    : 'bg-white/5 ring-2 ring-[#EC4899]'
                  : 'hover:bg-black/[0.02]'
              }`}
            >
              {/* TOP: Badges & Cursor Illustration */}
              <div className="w-full flex items-center justify-center pb-2">
                <div className="relative w-44 h-36 flex items-center justify-center">
                  {/* Organic Backdrop Blob */}
                  <div
                    className={`absolute inset-0 rounded-[40px] rotate-[10deg] transition-colors ${
                      isWarm ? 'bg-[#EADBC6]' : 'bg-[#32132F]'
                    }`}
                  />

                  {/* Badges Container */}
                  <div className="relative z-10 flex flex-col items-center">
                    {/* Top Coral Badge: JAVA / AI */}
                    <div className="px-3.5 py-1.5 rounded-xl bg-[#EF4444] text-white font-mono font-black text-xs tracking-wider shadow-lg border border-white/20 mb-1">
                      AI & TS
                    </div>

                    {/* Bottom Row: Code tag and Pointer */}
                    <div className="flex items-center gap-1.5">
                      {/* Code Tag Badge */}
                      <div className="px-2.5 py-1.5 rounded-lg bg-[#F59E0B] text-white font-mono font-extrabold text-xs shadow-md border border-white/20">
                        &lt;/&gt;
                      </div>
                      {/* Cursor Pointer Circle */}
                      <div className="w-8 h-8 rounded-full bg-[#047857] shadow-lg flex items-center justify-center border border-white/30">
                        {/* Cursor arrow SVG */}
                        <svg className="w-4 h-4 text-white fill-current" viewBox="0 0 24 24">
                          <path d="M4 2l16 10-7 2-4 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* MIDDLE: Dashed Line down to Text */}
              <div className="w-full flex flex-col items-center my-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#EC4899] shadow-[0_0_8px_#EC4899]" />
                <div
                  className="w-0.5 h-12 border-l-2 border-dashed border-[#EC4899]/70"
                />
              </div>

              {/* BOTTOM: Number & Text */}
              <div className="flex flex-col items-start pr-2">
                <span className="text-4xl sm:text-5xl font-black font-sans tracking-tight text-[#EC4899] mb-1">
                  04
                </span>
                <h4
                  className={`text-base font-bold tracking-tight mb-1 ${
                    isWarm ? 'text-[#221C35]' : 'text-white'
                  }`}
                >
                  {steps[3].title}
                </h4>
                <p
                  className={`text-[11px] leading-relaxed font-light ${
                    isWarm ? 'text-[#5E546F]' : 'text-[#B9AEC8]'
                  }`}
                >
                  {steps[3].description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            MOBILE / TABLET RESPONSIVE VIEW (< LG)
            Clean horizontal cards with scroll + quick step selector
            ========================================================================= */}
        <div className="lg:hidden relative z-10 w-full flex flex-col gap-4">
          <div className="flex overflow-x-auto pb-4 gap-4 snap-x snap-mandatory no-scrollbar">
            {steps.map((step, idx) => (
              <div
                key={step.number}
                onClick={() => {
                  setActiveStep(idx);
                  onStepSelect?.(idx);
                }}
                className={`shrink-0 w-72 p-5 rounded-2xl border snap-center flex flex-col justify-between transition-all ${
                  isWarm
                    ? 'bg-white/80 border-[#E8DFD1] text-[#221C35]'
                    : 'bg-white/5 border-white/10 text-white'
                } ${activeStep === idx ? 'ring-2' : ''}`}
                style={{
                  borderColor: activeStep === idx ? step.color : undefined,
                }}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className="text-3xl font-black font-sans"
                      style={{ color: step.color }}
                    >
                      {step.number}
                    </span>
                    <span className="text-[10px] font-mono tracking-widest opacity-60">
                      PHASE {idx + 1} OF 4
                    </span>
                  </div>
                  <h4 className="text-lg font-bold mb-1">{step.title}</h4>
                  <p className="text-xs opacity-75 font-light leading-relaxed mb-3">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-current/10 flex items-center justify-between text-[11px] font-mono">
                  <span className="opacity-60">DELIVERABLE:</span>
                  <span className="font-semibold" style={{ color: step.color }}>
                    {step.deliverable}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Swipe indicator dots */}
          <div className="flex items-center justify-center gap-1.5 pt-2">
            {steps.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveStep(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  activeStep === i ? 'w-6 bg-[#E94E77]' : 'bg-current/20'
                }`}
                aria-label={`Go to step ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* =========================================================================
            DETAILED STAGE DELIVERABLE EXPANDER (INTERACTIVE AUDIT DRAWER)
            ========================================================================= */}
        <div
          className={`mt-10 sm:mt-14 p-6 sm:p-7 rounded-2xl border transition-all ${
            isWarm
              ? 'bg-white/90 border-[#E8DFD1] shadow-md text-[#221C35]'
              : 'bg-black/40 border-white/10 text-[#F7F2FF]'
          }`}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-current/10">
            <div className="flex items-center gap-3">
              <span
                className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-black font-mono text-sm shadow-md"
                style={{ backgroundColor: steps[activeStep].color }}
              >
                {steps[activeStep].number}
              </span>
              <div>
                <h5 className="text-base font-bold">
                  {steps[activeStep].title} — Deliverables & Architecture
                </h5>
                <p className="text-xs font-mono opacity-70">
                  {steps[activeStep].subtitle}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-mono opacity-60">CORE DELIVERABLE:</span>
              <span
                className="px-3 py-1 rounded-full text-xs font-mono font-bold text-white shadow-sm"
                style={{ backgroundColor: steps[activeStep].color }}
              >
                {steps[activeStep].deliverable}
              </span>
            </div>
          </div>

          {/* Key Engineering Activities in this phase */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
            {steps[activeStep].details.map((item, index) => (
              <div
                key={index}
                className={`p-3 rounded-xl border flex items-start gap-2 text-xs leading-relaxed ${
                  isWarm
                    ? 'bg-[#FAF5EC] border-[#E8DFD1] text-[#3B324D]'
                    : 'bg-white/5 border-white/10 text-[#CDB4FF]'
                }`}
              >
                <CheckCircle2
                  className="w-4 h-4 shrink-0 mt-0.5"
                  style={{ color: steps[activeStep].color }}
                />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
