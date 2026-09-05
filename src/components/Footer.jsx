import { Code2, Heart, ArrowUp } from 'lucide-react';
import { personalInfo, navLinks } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#02050e] border-t border-slate-900 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-900 items-start">
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-cyan-400">
                <Code2 className="w-4 h-4" />
              </div>
              <span className="font-mono text-lg font-bold text-white tracking-tight">
                {personalInfo.preferredName}
                <span className="text-cyan-400">.dev</span>
              </span>
            </div>

            <p className="text-slate-400 text-sm max-w-md leading-relaxed font-light">
              Competitive Programmer & Computer Science student engineering clean algorithms and responsive digital experiences.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/5 border border-emerald-500/20 px-3 py-1 rounded-full w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-dot" />
              <span>{personalInfo.statusText}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-6 flex flex-col md:items-end space-y-4">
            <span className="font-mono text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Quick Navigation
            </span>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400 md:justify-end">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <span className="text-indigo-400">React</span>,
            <span className="text-cyan-400">Three.js</span> &
            <span className="text-emerald-400">Tailwind</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
