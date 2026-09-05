import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Send,
  Check,
  Copy,
  Github,
  Linkedin,
  Clock,
  Sparkles,
  AlertCircle,
  MessageSquare,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import SectionHeading from './ui/SectionHeading';
import { personalInfo, socialLinks } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email';
    }
    if (!formData.subject.trim()) errs.subject = 'Please provide a subject';
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Message should be at least 10 characters';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate sending request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger celebratory confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#6366f1', '#06b6d4', '#10b981'],
      });
    }, 1200);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <section id="contact" className="section-padding bg-slate-950/80 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          tag="GET IN TOUCH"
          title="Let's Build & Solve Together"
          subtitle="Whether you have an opportunity, a technical question, or an algorithmic challenge to discuss, feel free to reach out."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact & Social Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-6">
              <div>
                <span className="font-mono text-xs font-semibold text-indigo-400 uppercase tracking-wider block mb-1">
                  Direct Channel
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Contact Information
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed font-light">
                  I check messages regularly and welcome conversations regarding competitive programming, software engineering, and collaborative projects.
                </p>
              </div>

              {/* Email Card with Copy Button */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <span className="block text-[11px] font-mono text-slate-500 uppercase">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="font-mono text-xs sm:text-sm text-slate-200 hover:text-cyan-400 transition-colors truncate block"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors cursor-pointer shrink-0"
                  title="Copy email address"
                  aria-label="Copy email"
                >
                  {emailCopied ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Response Time Indicator */}
              <div className="flex items-center gap-3 text-xs font-mono text-slate-400 bg-slate-900/40 p-3 rounded-xl border border-slate-800/80">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Typical response time: Within 24 hours</span>
              </div>

              {/* Social Channels List */}
              <div className="space-y-3 pt-2">
                <span className="font-mono text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                  Find Me Online
                </span>

                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 hover:border-indigo-500/40 transition-all flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-white group"
                    >
                      <span className="text-cyan-400 group-hover:translate-x-0.5 transition-transform">
                        ▹
                      </span>
                      <span>{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Validated Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-lg shadow-emerald-500/10">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-slate-400 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out, <strong className="text-white">{formData.name}</strong>. I've received your note and will get back to you promptly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 text-xs font-mono transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name Input */}
                    <div>
                      <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                        Your Name <span className="text-indigo-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Morgan"
                        className={`w-full px-4 py-3 bg-slate-900/90 border rounded-xl text-white text-sm font-sans placeholder-slate-500 focus:outline-none transition-colors ${
                          errors.name
                            ? 'border-red-500/70 focus:border-red-500'
                            : 'border-slate-800 focus:border-indigo-500'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-xs text-red-400 font-mono mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email Input */}
                    <div>
                      <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                        Your Email <span className="text-indigo-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. alex@example.com"
                        className={`w-full px-4 py-3 bg-slate-900/90 border rounded-xl text-white text-sm font-sans placeholder-slate-500 focus:outline-none transition-colors ${
                          errors.email
                            ? 'border-red-500/70 focus:border-red-500'
                            : 'border-slate-800 focus:border-indigo-500'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-400 font-mono mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject Input */}
                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                      Subject <span className="text-indigo-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Collaboration on Algorithmic Project"
                      className={`w-full px-4 py-3 bg-slate-900/90 border rounded-xl text-white text-sm font-sans placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.subject
                          ? 'border-red-500/70 focus:border-red-500'
                          : 'border-slate-800 focus:border-indigo-500'
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-xs text-red-400 font-mono mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message Input */}
                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                      Message <span className="text-indigo-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message or inquiry here..."
                      className={`w-full px-4 py-3 bg-slate-900/90 border rounded-xl text-white text-sm font-sans placeholder-slate-500 focus:outline-none transition-colors resize-none ${
                        errors.message
                          ? 'border-red-500/70 focus:border-red-500'
                          : 'border-slate-800 focus:border-indigo-500'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-400 font-mono mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-700 text-white font-semibold text-sm transition-all shadow-lg shadow-indigo-600/25 flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span className="font-mono text-xs">Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
