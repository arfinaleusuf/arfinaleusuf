import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  GitCommit,
  GitFork,
  Star,
  ExternalLink,
  Github,
  Code2,
} from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import { githubData } from '../data/portfolioData';

export default function GithubActivity() {
  const [hoveredCell, setHoveredCell] = useState(null);

  // Generate realistic commit heatmap matrix (52 weeks x 7 days)
  const weeks = 40;
  const days = 7;
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Deterministic contribution level generator simulating active developer
  const getCommitLevel = (w, d) => {
    // Generate realistic streaks and variations
    const hash = (w * 13 + d * 7 + 19) % 100;
    if (hash > 85) return 4;
    if (hash > 65) return 3;
    if (hash > 40) return 2;
    if (hash > 18) return 1;
    return 0;
  };

  const levelColors = [
    'bg-slate-900 border border-slate-800/80',
    'bg-emerald-950 border border-emerald-900/60',
    'bg-emerald-800 border border-emerald-700/60',
    'bg-emerald-600 border border-emerald-500/60',
    'bg-emerald-400 border border-emerald-300/80',
  ];

  return (
    <section id="activity" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          tag="ACTIVITY"
          title="Developer Activity"
          subtitle="Commit consistency, repository highlights, and language metrics."
        />

        {/* GitHub Metrics Banner */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-800/80">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-white shadow-inner">
                <Github className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <span>@{githubData.username}</span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    Active Committer
                  </span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                  {githubData.totalContributions}
                </p>
              </div>
            </div>

            <a
              href={githubData.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-mono font-medium border border-slate-700 transition-all flex items-center gap-2 w-fit"
            >
              <span>View Full GitHub Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Simulated Contribution Heatmap */}
          <div className="py-6">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs text-slate-300 font-semibold flex items-center gap-2">
                <GitCommit className="w-4 h-4 text-emerald-400" />
                <span>Contribution Activity Matrix</span>
              </span>

              {/* Legend */}
              <div className="flex items-center gap-2 text-[11px] font-mono text-slate-500">
                <span>Less</span>
                <div className="flex gap-1">
                  {levelColors.map((col, i) => (
                    <div key={i} className={`w-3 h-3 rounded-[2px] ${col}`} />
                  ))}
                </div>
                <span>More</span>
              </div>
            </div>

            {/* Matrix Scroll Container */}
            <div className="overflow-x-auto pb-2">
              <div className="text-[11px] font-mono text-cyan-400/80 sm:hidden block mb-2">
                ← Swipe horizontally to explore commit history →
              </div>
              <div className="inline-grid grid-rows-7 grid-flow-col gap-1.5 min-w-[660px]">
                {Array.from({ length: weeks }).map((_, w) =>
                  Array.from({ length: days }).map((_, d) => {
                    const level = getCommitLevel(w, d);
                    const isHovered =
                      hoveredCell &&
                      hoveredCell.w === w &&
                      hoveredCell.d === d;

                    return (
                      <div
                        key={`${w}-${d}`}
                        onMouseEnter={() => setHoveredCell({ w, d, level })}
                        onMouseLeave={() => setHoveredCell(null)}
                        className={`w-3.5 h-3.5 rounded-[3px] transition-transform duration-150 cursor-pointer ${
                          levelColors[level]
                        } ${isHovered ? 'scale-125 z-10' : ''}`}
                        title={`Day ${d + 1}, Week ${w + 1}: ${level * 3} contributions`}
                      />
                    );
                  })
                )}
              </div>
            </div>

            {hoveredCell && (
              <div className="font-mono text-xs text-cyan-400 mt-2">
                Selected: {hoveredCell.level === 0 ? 'No' : `${hoveredCell.level * 3}`} contributions on {daysOfWeek[hoveredCell.d]}
              </div>
            )}
          </div>

          {/* Language Breakdown Bar */}
          <div className="pt-6 border-t border-slate-800/80">
            <div className="flex justify-between items-center mb-3">
              <span className="font-mono text-xs text-slate-300 font-semibold flex items-center gap-2">
                <Code2 className="w-4 h-4 text-indigo-400" />
                <span>Primary Language Distribution</span>
              </span>
            </div>

            {/* Progress Stack */}
            <div className="w-full h-2.5 rounded-full overflow-hidden flex bg-slate-900 gap-0.5">
              {githubData.languages.map((lang) => (
                <div
                  key={lang.name}
                  style={{ width: `${lang.percentage}%` }}
                  className={`h-full ${lang.color}`}
                  title={`${lang.name}: ${lang.percentage}%`}
                />
              ))}
            </div>

            {/* Language Badges */}
            <div className="flex flex-wrap gap-4 mt-3">
              {githubData.languages.map((lang) => (
                <div
                  key={lang.name}
                  className="flex items-center gap-2 font-mono text-xs text-slate-400"
                >
                  <span className={`w-2.5 h-2.5 rounded-full ${lang.color}`} />
                  <span>{lang.name}</span>
                  <span className="text-slate-500 font-semibold">
                    {lang.percentage}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pinned Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {githubData.pinnedRepos.map((repo, idx) => (
            <motion.div
              key={repo.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between group hover:border-cyan-500/40"
            >
              <div>
                <div className="flex items-start justify-between mb-3">
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors flex items-center gap-2"
                  >
                    <span>{repo.name}</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>

                  <span className="px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-slate-400">
                    Public
                  </span>
                </div>

                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                  {repo.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-800/80 font-mono text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${
                      repo.language === 'C++'
                        ? 'bg-blue-500'
                        : repo.language === 'JavaScript'
                        ? 'bg-yellow-400'
                        : 'bg-emerald-400'
                    }`}
                  />
                  <span>{repo.language}</span>
                </div>

                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1 hover:text-white transition-colors">
                    <Star className="w-3.5 h-3.5 text-amber-400" />
                    <span>{repo.stars}</span>
                  </span>
                  <span className="flex items-center gap-1 hover:text-white transition-colors">
                    <GitFork className="w-3.5 h-3.5 text-slate-400" />
                    <span>{repo.forks}</span>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
