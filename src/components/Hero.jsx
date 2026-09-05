import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Mail,
  Github,
  Linkedin,
  Terminal,
  Code,
  Sparkles,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import AlgorithmCanvas from './3d/AlgorithmCanvas';
import AnimatedCounter from './ui/AnimatedCounter';

const typingWords = [
  personalInfo.name,
  'Competitive Programmer',
  'CSE Student',
  'DSA Enthusiast',
  'Software Developer',
];

export default function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = typingWords[currentWordIndex % typingWords.length];

    let timer;
    if (!isDeleting) {
      if (currentText.length < currentWord.length) {
        timer = setTimeout(() => {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        }, 90);
      } else {
        // Pause after typing complete word
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    } else {
      if (currentText.length > 0) {
        timer = setTimeout(() => {
          setCurrentText(currentWord.slice(0, currentText.length - 1));
        }, 45);
      } else {
        // Move to next word after deleting
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % typingWords.length);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden bg-grid-pattern"
    >
      {/* Subtle Background Glow Spheres */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Narrative */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Status Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 shadow-md backdrop-blur-md"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 pulse-dot" />
              <span className="font-mono text-xs font-medium text-slate-300">
                {personalInfo.statusText}
              </span>
            </motion.div>

            {/* Title & Identity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-3"
            >
              <div className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-indigo-400 uppercase flex items-center justify-center lg:justify-start gap-2">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>Competitive Programmer · CSE Student · Software Developer</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight min-h-[130px] sm:min-h-[180px] lg:min-h-[210px] flex flex-col justify-start">
                <span className="text-slate-100">Hi, I'm</span>
                <span className="inline-flex items-center justify-center lg:justify-start">
                  <span className="text-gradient font-black inline-block">
                    {currentText}
                  </span>
                  <span className="inline-block w-1 sm:w-1.5 h-[0.85em] bg-cyan-400 ml-2 align-middle animate-pulse shadow-sm shadow-cyan-400/80 rounded-full" />
                </span>
              </h1>
            </motion.div>

            {/* Short Introduction */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-300 text-base sm:text-lg lg:text-xl font-light leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Passionate about programming, algorithmic problem solving,{' '}
              <span className="text-cyan-300 font-normal">Data Structures & Algorithms</span>,
              and engineering high-performance, accessible software.
            </motion.p>

            {/* CTA Buttons & Socials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <a
                href="#projects"
                className="group px-7 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/50 flex items-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="px-7 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-white font-semibold text-sm border border-slate-700 hover:border-slate-600 transition-all flex items-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0 shadow-md"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contact Me</span>
              </a>

              {/* GitHub Button */}
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 hover:border-slate-500 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>

              {/* LinkedIn Button */}
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-700 hover:border-cyan-500/50 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </motion.div>

            {/* Quick Metrics Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl mx-auto lg:mx-0"
            >
              {personalInfo.quickStats.map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <div className="text-xl sm:text-2xl font-black text-white font-mono flex items-center justify-center lg:justify-start gap-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400 font-medium mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: 3D Algorithm Canvas & Profile Integration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col items-center justify-center"
          >
            <div className="relative w-full max-w-[460px] aspect-square rounded-3xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-xl p-4 shadow-2xl overflow-hidden group">
              {/* Corner Glow Accents */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl pointer-events-none" />

              {/* Three.js Algorithm Graph Canvas */}
              <AlgorithmCanvas />

              {/* Floating Avatar Overlay at Bottom Right */}
              <div className="absolute bottom-4 left-4 flex items-center gap-3 p-2.5 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-slate-800 shadow-xl max-w-[280px]">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-12 h-12 rounded-xl object-cover ring-2 ring-indigo-500/50"
                />
                <div className="text-left overflow-hidden">
                  <span className="block text-xs font-bold text-white truncate">
                    {personalInfo.name}
                  </span>
                  <span className="block text-[11px] font-mono text-cyan-400 truncate">
                    C++ · DSA · Full-Stack
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
