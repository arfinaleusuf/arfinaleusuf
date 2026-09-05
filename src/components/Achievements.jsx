import { motion } from 'framer-motion';
import { Award, Trophy, Star, Mic, Code2, Calendar } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import { achievementsData } from '../data/portfolioData';

const iconMapping = {
  code: Code2,
  award: Trophy,
  star: Star,
  mic: Mic,
};

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding bg-slate-100/50 dark:bg-slate-950/60 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          tag="HONORS"
          title="Achievements"
          subtitle="Milestones across competitive programming, academics, and problem solving."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievementsData.map((item, idx) => {
            const Icon = iconMapping[item.icon] || Award;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between group hover:border-amber-500/40 relative overflow-hidden"
              >
                {/* Glow Corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl group-hover:bg-amber-500/10 transition-colors pointer-events-none" />

                <div>
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-amber-500 dark:text-amber-400 group-hover:scale-110 transition-transform shadow-inner">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="font-mono text-xs font-semibold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider block">
                          {item.category}
                        </span>
                        <span className="font-mono text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                          <Calendar className="w-3 h-3" />
                          {item.date}
                        </span>
                      </div>
                    </div>

                    <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                      {item.issuer}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
