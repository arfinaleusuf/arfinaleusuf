import { motion } from 'framer-motion';
import {
  Trophy,
  ExternalLink,
  Flame,
  Binary,
  Code2,
  CheckCircle2,
} from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import AnimatedCounter from './ui/AnimatedCounter';
import { cpData } from '../data/portfolioData';

export default function CompetitiveProgramming() {
  return (
    <section id="cp" className="section-padding relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <SectionHeading
          tag="COMPETITIVE PROGRAMMING"
          title="Algorithmic Problem Solving"
          subtitle="Tackling competitive programming challenges, optimizing complexities, and competing on global coding platforms."
        />

        {/* Animated Key Statistics Counters */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {cpData.stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-card rounded-2xl p-6 text-center group hover:border-emerald-500/40 relative overflow-hidden"
            >
              <div className="absolute -right-6 -bottom-6 w-20 h-20 bg-emerald-500/5 rounded-full blur-xl group-hover:bg-emerald-500/15 transition-colors" />

              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-2 flex items-center justify-center gap-1">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>

              <h4 className="text-sm font-bold text-slate-200 mb-1">
                {stat.label}
              </h4>
              <p className="text-xs text-slate-400 font-light">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Platform Cards Showcase */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Trophy className="w-5 h-5 text-amber-400" />
            <span>Coding Profiles & Platforms</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cpData.platforms.map((platform, idx) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="glass-card rounded-2xl p-6 flex flex-col justify-between group hover:border-indigo-500/50 relative"
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-black text-white group-hover:text-cyan-400 transition-colors">
                        {platform.name}
                      </h4>
                      <span className="font-mono text-xs text-slate-400">
                        @{platform.handle}
                      </span>
                    </div>

                    <span
                      className={`px-2.5 py-1 rounded-full text-xs font-mono font-semibold border ${platform.badgeColor}`}
                    >
                      {platform.rank}
                    </span>
                  </div>

                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                    {platform.tagline}
                  </p>

                  {/* Highlights Grid */}
                  <div className="space-y-2 py-3 border-t border-b border-slate-800/80 mb-6 font-mono text-xs">
                    <div className="flex justify-between text-slate-300">
                      <span className="text-slate-500">Peak / Status:</span>
                      <span className="font-semibold text-white">
                        {platform.rating}
                      </span>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span className="text-slate-500">Solved:</span>
                      <span className="font-semibold text-emerald-400">
                        {platform.solved}
                      </span>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span className="text-slate-500">Rounds:</span>
                      <span className="font-semibold text-indigo-300">
                        {platform.contests}
                      </span>
                    </div>
                  </div>
                </div>

                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 text-xs font-mono font-medium transition-all flex items-center justify-center gap-2 group-hover:border-indigo-500/40"
                >
                  <span>Visit Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Algorithmic Topics Breakdown */}
        <div className="glass-card rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Binary className="w-5 h-5 text-cyan-400" />
                <span>Key Algorithmic Strengths</span>
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mt-1">
                Frequently practiced problem classifications and core concepts.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full w-fit">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>C++ STL & Fast I/O Verified</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cpData.topics.map((topic, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-colors"
              >
                <div className="flex justify-between items-center mb-1.5">
                  <h4 className="font-bold text-sm text-white">
                    {topic.name}
                  </h4>
                  <span className="font-mono text-xs font-semibold text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded">
                    {topic.solved} solved
                  </span>
                </div>
                <p className="font-mono text-xs text-slate-400 leading-relaxed">
                  {topic.algorithms}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
