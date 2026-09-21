import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Github, Linkedin, ArrowRight, AlertCircle, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';

// Custom crisp WhatsApp SVG icon
const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.275-.101-.476-.15-.676.15-.2.301-.776.979-.952 1.18-.175.201-.351.226-.652.075-.301-.15-1.27-.468-2.42-1.493-.894-.798-1.498-1.784-1.674-2.085-.175-.301-.019-.464.132-.614.136-.135.301-.351.451-.527.15-.175.2-.301.301-.501.1-.2.05-.376-.025-.526-.075-.15-.676-1.63-.927-2.233-.244-.588-.492-.508-.676-.518l-.577-.01c-.2 0-.526.075-.801.376-.275.301-1.053 1.028-1.053 2.508s1.078 2.909 1.228 3.11c.15.201 2.122 3.24 5.14 4.544.718.31 1.278.496 1.715.635.721.23 1.377.197 1.896.12.578-.087 1.78-.727 2.03-1.43.25-.702.25-1.304.175-1.43-.075-.126-.275-.201-.576-.351z" />
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.174L2.05 21.95a.75.75 0 00.923.923l4.776-1.388A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zM3.5 12a8.5 8.5 0 1114.93 5.57l-.316.495 1.008 3.473-3.473-1.008-.495.316A8.471 8.471 0 0112 20.5 8.5 8.5 0 013.5 12z" />
  </svg>
);

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [lastSentUrl, setLastSentUrl] = useState<string>('');

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please provide your name (at least 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 5) {
      errs.message = 'Please include a brief message (minimum 5 characters).';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    // Formatted WhatsApp message with sender details
    const formattedMessage =
      `*New Portfolio Inquiry*\n\n` +
      `👤 *Name:* ${formData.name.trim()}\n` +
      `📧 *Email:* ${formData.email.trim()}\n\n` +
      `💬 *Message:*\n${formData.message.trim()}`;

    const whatsappUrl = `https://wa.me/${PERSONAL_INFO.whatsappRaw}?text=${encodeURIComponent(formattedMessage)}`;
    setLastSentUrl(whatsappUrl);

    // Open WhatsApp in a new tab/app immediately
    window.open(whatsappUrl, '_blank');

    setIsSuccess(true);

    // Celebratory confetti effect
    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#25D366', '#B86CFF', '#FF8FD8', '#FFFFFF']
      });
    } catch {
      // Safe fallback
    }

    setFormData({ name: '', email: '', message: '' });
    setErrors({});
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading, Context, Direct Channels */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="text-xs font-mono tracking-[0.2em] text-[#E89BFF] uppercase mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#25D366]" />
              09 / CONTACT & INITIATION
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#F7F2FF] tracking-tight leading-[1.1] mb-6">
              Let's build something{' '}
              <span className="font-serif-editorial italic text-[#E89BFF] font-normal">meaningful</span> together.
            </h2>

            <p className="text-base sm:text-lg text-[#B9AEC8] font-light leading-relaxed mb-8 max-w-lg">
              Have an idea, opportunity, or project in mind? Reach out directly on WhatsApp or send a message below.
            </p>

            {/* Direct Connect Buttons */}
            <div className="flex flex-wrap gap-3 w-full sm:w-auto mb-10">
              {/* WhatsApp Direct Button */}
              <a
                href={`https://wa.me/${PERSONAL_INFO.whatsappRaw}?text=${encodeURIComponent("Hi Zainab, I visited your portfolio and would like to connect!")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/50 text-[#25D366] font-semibold text-xs tracking-widest uppercase flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(37,211,102,0.25)]"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>WHATSAPP CHAT</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="px-6 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-[#F7F2FF] text-xs font-mono tracking-wider flex items-center justify-center gap-2 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>EMAIL</span>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-[#F7F2FF] text-xs font-mono tracking-wider flex items-center justify-center gap-2 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GITHUB</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-[#F7F2FF] text-xs font-mono tracking-wider flex items-center justify-center gap-2 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LINKEDIN</span>
              </a>
            </div>

            {/* Response Commitment & Phone Details */}
            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 text-xs text-[#81758F] font-mono flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                <span>WhatsApp: {PERSONAL_INFO.whatsapp}</span>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 text-xs text-[#81758F] font-mono flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Typical response: &lt; 1 hour</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive WhatsApp Contact Form */}
          <div className="lg:col-span-6 w-full">
            <div className="glass-panel rounded-3xl p-7 sm:p-10 border border-white/10 shadow-2xl relative">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-light text-[#F7F2FF] tracking-tight">
                  Direct WhatsApp Message
                </h3>
                <span className="px-3 py-1 rounded-full bg-[#25D366]/15 border border-[#25D366]/30 text-[#25D366] text-[10px] font-mono flex items-center gap-1.5">
                  <WhatsAppIcon className="w-3 h-3" />
                  ONLINE
                </span>
              </div>
              <p className="text-xs text-[#81758F] font-mono mb-6">
                Fill this form to send your message directly to Zainab's WhatsApp.
              </p>

              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-8 text-center flex flex-col items-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#25D366]/15 border border-[#25D366]/40 flex items-center justify-center text-[#25D366] mb-4 shadow-[0_0_25px_rgba(37,211,102,0.3)]">
                      <WhatsAppIcon className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-light text-[#F7F2FF] mb-2">
                      Ready on WhatsApp!
                    </h4>
                    <p className="text-xs text-[#B9AEC8] max-w-sm mb-6 leading-relaxed">
                      WhatsApp has been launched with your message pre-filled. If the window did not open automatically, click the button below:
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                      <a
                        href={lastSentUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-[#0B0714] font-semibold text-xs tracking-widest uppercase flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(37,211,102,0.3)]"
                      >
                        <WhatsAppIcon className="w-4 h-4" />
                        <span>OPEN WHATSAPP CHAT</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                      <button
                        type="button"
                        onClick={() => setIsSuccess(false)}
                        className="px-5 py-3.5 rounded-full bg-white/[0.06] hover:bg-white/[0.1] text-xs font-mono text-[#F7F2FF] transition-colors"
                      >
                        SEND ANOTHER
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-[#B9AEC8] mb-1.5">
                        Your Name <span className="text-[#25D366]">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: undefined });
                        }}
                        placeholder="e.g. Alex Morgan"
                        className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-sm text-[#F7F2FF] placeholder-[#81758F]/60 focus:outline-none transition-all ${
                          errors.name
                            ? 'border-rose-500/60 focus:ring-1 focus:ring-rose-500'
                            : 'border-white/10 focus:border-[#25D366]/60 focus:ring-1 focus:ring-[#25D366]'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] font-mono text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-[#B9AEC8] mb-1.5">
                        Email Address <span className="text-[#25D366]">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        placeholder="alex@company.com"
                        className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-sm text-[#F7F2FF] placeholder-[#81758F]/60 focus:outline-none transition-all ${
                          errors.email
                            ? 'border-rose-500/60 focus:ring-1 focus:ring-rose-500'
                            : 'border-white/10 focus:border-[#25D366]/60 focus:ring-1 focus:ring-[#25D366]'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] font-mono text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Message Field */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label htmlFor="message" className="text-xs font-mono uppercase tracking-wider text-[#B9AEC8]">
                          Message <span className="text-[#25D366]">*</span>
                        </label>
                        <span className="text-[10px] font-mono text-[#81758F]">
                          {formData.message.length} chars
                        </span>
                      </div>
                      <textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => {
                          setFormData({ ...formData, message: e.target.value });
                          if (errors.message) setErrors({ ...errors, message: undefined });
                        }}
                        placeholder="Tell me about your project, idea, or role..."
                        className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-sm text-[#F7F2FF] placeholder-[#81758F]/60 focus:outline-none resize-none transition-all ${
                          errors.message
                            ? 'border-rose-500/60 focus:ring-1 focus:ring-rose-500'
                            : 'border-white/10 focus:border-[#25D366]/60 focus:ring-1 focus:ring-[#25D366]'
                        }`}
                      />
                      {errors.message && (
                        <p className="text-[11px] font-mono text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-[#25D366] via-[#1ebd59] to-[#128C7E] hover:opacity-95 text-[#0B0714] font-bold text-xs tracking-widest uppercase transition-all shadow-[0_4px_25px_rgba(37,211,102,0.3)] flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                      <span>SEND TO WHATSAPP DIRECTLY</span>
                    </button>

                    <p className="text-[11px] font-mono text-center text-[#81758F]">
                      Submitting opens WhatsApp with your pre-formatted message.
                    </p>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};