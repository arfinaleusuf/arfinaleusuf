import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Brain,
  Cpu,
  Check,
  Copy,
  Layers,
} from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import { terminalCodeSnippet } from '../data/portfolioData';

export default function About() {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(terminalCodeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const corePillars = [
    {
      icon: Brain,
      title: 'Algorithmic Precision',
      description:
        'Rigorous problem solving in C++, analyzing asymptotic bounds, and competing in rated algorithmic rounds.',
      color: 'text-cyan-600 dark:text-cyan-400',
      border: 'border-cyan-500/20',
      bg: 'bg-cyan-500/5',
    },
    {
      icon: Cpu,
      title: 'Systems & Fundamentals',
      description:
        'Solid grounding in Data Structures, Algorithms, Object-Oriented design, and relational database systems.',
      color: 'text-indigo-600 dark:text-indigo-400',
      border: 'border-indigo-500/20',
      bg: 'bg-indigo-500/5',
    },
    {
      icon: Layers,
      title: 'Software Engineering',
      description:
        'Building responsive, accessible interfaces with clean component architectures and modern tooling.',
      color: 'text-emerald-600 dark:text-emerald-400',
      border: 'border-emerald-500/20',
      bg: 'bg-emerald-500/5',
    },
  ];

  return (
    <section id="about" className="section-padding bg-slate-100/40 dark:bg-slate-950/40 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <SectionHeading
          tag="ABOUT"
          title="Engineering Mindset"
          subtitle="Focused on algorithmic rigor, systems thinking, and clean software design."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Narrative & Core Pillars */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                <Code2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <span>Background & Philosophy</span>
              </h3>

              <p className="text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
                I'm a <strong className="text-slate-900 dark:text-white font-semibold">Computer Science & Engineering student</strong> dedicated to competitive programming, algorithmic complexity, and clean software architecture.
              </p>

              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                My daily work centers on competitive problem solving in C++ across Codeforces and LeetCode—focusing on graph algorithms, dynamic programming, and data structures. I look for optimal time and space trade-offs, turning brute-force approaches into lean <code className="font-mono text-xs text-indigo-600 dark:text-cyan-300 bg-indigo-50 dark:bg-cyan-950/60 border border-indigo-200/60 dark:border-cyan-900/50 px-1.5 py-0.5 rounded">O(N log N)</code> solutions.
              </p>

              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                Alongside algorithmic training, I build modern web applications using React, Tailwind, and Python/FastAPI, emphasizing minimalist design, accessibility, and robust API design.
              </p>
            </motion.div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 gap-4 pt-2">
              {corePillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className={`p-5 rounded-2xl bg-white/90 dark:bg-slate-900/40 border border-slate-200/90 dark:border-slate-800 shadow-xs dark:shadow-none backdrop-blur-sm transition-all hover:border-indigo-500/40`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl bg-slate-100 dark:bg-slate-900 ${pillar.color} shadow-inner`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                          {pillar.title}
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right: Simulated Developer Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6"
          >
            <div className="rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden">
              {/* Terminal Title Bar */}
              <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-xs text-slate-400">
                    arfin_developer.cpp
                  </span>
                </div>

                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white font-mono text-xs transition-colors cursor-pointer"
                  title="Copy code"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Terminal Code Display */}
              <div className="p-5 font-mono text-xs sm:text-sm text-slate-300 overflow-x-auto leading-relaxed bg-[#030712] selection:bg-indigo-600">
                <pre>
                  <code>{terminalCodeSnippet}</code>
                </pre>
              </div>

              {/* Terminal Status Footer */}
              <div className="px-4 py-2.5 bg-slate-900/70 border-t border-slate-800/80 flex items-center justify-between font-mono text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Compilation: Success (g++ -O3)</span>
                </div>
                <span className="text-slate-500">UTF-8 · LF · C++20</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
