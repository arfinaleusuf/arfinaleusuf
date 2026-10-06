import { useState } from 'react';
import {
  Mail,
  Check,
  Copy,
  Clock,
  Phone,
  MessageCircle,
} from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import { personalInfo, socialLinks } from '../data/portfolioData';

export default function Contact() {
  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);

  // jodi personalInfo te whatsapp/phone na thake tahole fallback hisebe eta use hobe
  const whatsappNumber = personalInfo?.phone || '+8801608037801';
  const cleanNumber = whatsappNumber.replace(/[^0-9]/g, '');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(whatsappNumber);
    setPhoneCopied(true);
    setTimeout(() => setPhoneCopied(false), 2000);
  };

  return (
    <section id="contact" className="section-padding bg-slate-100/50 dark:bg-slate-950/80 relative">
      <div className="max-w-5xl mx-auto px-4">
        <SectionHeading
          title="Get In Touch"
          subtitle="Open for internships, engineering opportunities, and technical discussions."
        />

        {/* Centered & Enlarged Single Card Container */}
        <div className="max-w-2xl mx-auto mt-8">
          <div className="glass-card rounded-3xl p-8 sm:p-12 space-y-8 shadow-xl border border-slate-200/80 dark:border-slate-800">
            <div className="text-center space-y-3">
              <span className="font-mono text-xs sm:text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest block">
                Direct Channel
              </span>
              <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
                Let's Connect
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed max-w-lg mx-auto">
                Have an engineering opportunity or an interesting problem to solve? Send an email or reach out directly via WhatsApp.
              </p>
            </div>

            <div className="space-y-4">
              {/* Email Card with Copy Button */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4 transition-all hover:border-indigo-500/40">
                <div className="flex items-center gap-4 overflow-hidden">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="truncate">
                    <span className="block text-xs font-mono text-slate-500 uppercase tracking-wider">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="font-mono text-sm sm:text-base text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors truncate block"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 transition-colors cursor-pointer shrink-0"
                  title="Copy email address"
                  aria-label="Copy email"
                >
                  {emailCopied ? (
                    <Check className="w-5 h-5 text-emerald-500" />
                  ) : (
                    <Copy className="w-5 h-5" />
                  )}
                </button>
              </div>

              {/* WhatsApp & Phone Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4 transition-all hover:border-emerald-500/40">
                <div className="flex items-center gap-4 overflow-hidden">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div className="truncate">
                    <span className="block text-xs font-mono text-slate-500 uppercase tracking-wider">
                      WhatsApp / Phone
                    </span>
                    <a
                      href={`https://wa.me/${cleanNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-sm sm:text-base text-slate-800 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors truncate block"
                    >
                      {whatsappNumber}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={`https://wa.me/${cleanNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 hover:bg-emerald-100 dark:hover:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 transition-colors inline-flex items-center justify-center"
                    title="Chat on WhatsApp"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </a>
                  <button
                    onClick={handleCopyPhone}
                    className="p-2.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 transition-colors cursor-pointer"
                    title="Copy phone number"
                    aria-label="Copy phone"
                  >
                    {phoneCopied ? (
                      <Check className="w-5 h-5 text-emerald-500" />
                    ) : (
                      <Copy className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Response Time Indicator */}
            <div className="flex items-center justify-center gap-3 text-xs sm:text-sm font-mono text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/40 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800/80">
              <Clock className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
              <span>Typical response time: Within 24 hours</span>
            </div>

            {/* Social Channels List */}
            <div className="space-y-4 pt-2">
              <span className="font-mono text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block text-center">
                Find Me Online
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 hover:bg-slate-100 dark:hover:bg-slate-800/80 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/40 transition-all flex items-center justify-center gap-2 text-xs sm:text-sm font-mono text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white group"
                  >
                    <span className="text-cyan-600 dark:text-cyan-400 group-hover:translate-x-0.5 transition-transform">
                      ▹
                    </span>
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}