import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Terminal,
  Brain,
  Cpu,
  Check,
  Copy,
  Layers,
  GraduationCap,
} from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import { personalInfo, terminalCodeSnippet } from '../data/portfolioData';

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
      title: 'Algorithmic Problem Solving',
      description:
        'Dissecting complex problems with mathematical rigor, optimizing time and space complexities, and competing in algorithmic contests.',
      color: 'text-cyan-400',
      border: 'border-cyan-500/20',
      bg: 'bg-cyan-500/5',
    },
    {
      icon: Cpu,
      title: 'Computer Science Core',
      description:
        'Solid grounding in Data Structures, Algorithms, Object-Oriented Programming, and Database Systems.',
      color: 'text-indigo-400',
      border: 'border-indigo-500/20',
      bg: 'bg-indigo-500/5',
    },
    {
      icon: Layers,
      title: 'Full-Stack Software Craft',
      description:
        'Building responsive, accessible web interfaces with React and Tailwind while understanding low-level C++ & backend architectures.',
      color: 'text-emerald-400',
      border: 'border-emerald-500/20',
      bg: 'bg-emerald-500/5',
    },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <SectionHeading
          tag="ABOUT ME"
          title="Engineering Mindset & Passion"
          subtitle="Computer Science student striving for problem-solving elegance and robust software architecture."
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
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <Code2 className="w-6 h-6 text-indigo-400" />
                <span>Who I Am</span>
              </h3>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
                I am a passionate <strong className="text-white font-semibold">Computer Science & Engineering student</strong> based in Bangladesh with a deep-rooted drive for competitive programming, algorithms, and systems engineering.
              </p>

              <p className="text-slate-400 text-base leading-relaxed font-light">
                What began as curiosity with C and simple logic blossomed into a dedicated daily pursuit of competitive programming on platforms like Codeforces and LeetCode. I love the thrill of writing fast, clean code that reduces an <code className="font-mono text-xs text-indigo-300 bg-indigo-950/60 px-1.5 py-0.5 rounded">O(N²)</code> brute force into an optimal <code className="font-mono text-xs text-cyan-300 bg-cyan-950/60 px-1.5 py-0.5 rounded">O(N log N)</code> solution.
              </p>

              <p className="text-slate-400 text-base leading-relaxed font-light">
                Beyond competitive programming, I build modern web applications, combining engineering principles with thoughtful UI/UX design. My goal is to build impactful, scalable software that solves real-world challenges.
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
                    className={`p-5 rounded-2xl ${pillar.bg} border ${pillar.border} backdrop-blur-sm transition-all hover:border-slate-700`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl bg-slate-900 ${pillar.color} shadow-inner`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-white mb-1">
                          {pillar.title}
                        </h4>
                        <p className="text-sm text-slate-400 leading-relaxed font-light">
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
            <div className="rounded-2xl bg-slate-950/90 border border-slate-800 shadow-2xl overflow-hidden">
              {/* Terminal Title Bar */}
              <div className="px-4 py-3 bg-slate-900/80 border-b border-slate-800 flex items-center justify-between">
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
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white font-mono text-xs transition-colors"
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
              <div className="p-5 font-mono text-xs sm:text-sm text-slate-300 overflow-x-auto leading-relaxed bg-[#030712]/95 selection:bg-indigo-600">
                <pre>
                  <code>{terminalCodeSnippet}</code>
                </pre>
              </div>

              {/* Terminal Status Footer */}
              <div className="px-4 py-2.5 bg-slate-900/60 border-t border-slate-800/80 flex items-center justify-between font-mono text-xs text-slate-400">
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
