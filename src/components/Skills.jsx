import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Terminal, Database, Cpu, Layers } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import { skillsData } from '../data/portfolioData';

const categoryIcons = {
  programming: Terminal,
  cs: Cpu,
  frontend: Layers,
  backend: Database,
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Skills' },
    ...skillsData.categories,
  ];

  const filteredSkills =
    activeCategory === 'all'
      ? skillsData.skills
      : skillsData.skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="section-padding bg-slate-950/60 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          tag="TECH STACK & CORE"
          title="Technical Capabilities"
          subtitle="A comprehensive toolkit spanning low-level algorithms, computer science foundations, and modern web software engineering."
        />

        {/* Category Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-slate-400 hover:text-white bg-slate-900/60 border border-slate-800'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="skill-cat-pill"
                    className="absolute inset-0 bg-indigo-600 rounded-xl -z-10 shadow-lg shadow-indigo-600/30"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredSkills.map((skill, index) => {
              const Icon = categoryIcons[skill.category] || Code;
              return (
                <motion.div
                  layout
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: index * 0.04 }}
                  className="glass-card rounded-2xl p-6 flex flex-col justify-between group hover:border-indigo-500/40"
                >
                  <div>
                    {/* Card Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:text-indigo-400 transition-colors shadow-inner">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-bold text-white text-lg group-hover:text-cyan-300 transition-colors">
                            {skill.name}
                          </h3>
                          <span className="font-mono text-[11px] text-slate-500 uppercase tracking-wider">
                            {skill.category.toUpperCase()}
                          </span>
                        </div>
                      </div>

                      {/* Badge */}
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium text-indigo-300 bg-indigo-500/10 border border-indigo-500/20">
                        {skill.badge}
                      </span>
                    </div>

                    {/* Skill Description */}
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                      {skill.description}
                    </p>

                    {/* Topic Chips */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {skill.topics.map((topic) => (
                        <span
                          key={topic}
                          className="px-2 py-0.5 rounded-md bg-slate-900/90 border border-slate-800 text-[11px] font-mono text-slate-400"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Proficiency Meter */}
                  <div>
                    <div className="flex justify-between text-xs font-mono text-slate-400 mb-1.5">
                      <span>Proficiency</span>
                      <span className="text-white font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
