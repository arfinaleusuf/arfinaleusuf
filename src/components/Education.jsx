import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, CheckCircle } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="section-padding relative overflow-hidden">
      {/* Background Gradient Accent */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto">
        <SectionHeading
          tag="ACADEMIC BACKGROUND"
          title="Education & Coursework"
          subtitle="Formal computer science education and technical foundational milestones."
        />

        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 space-y-12 pl-6 sm:pl-10">
          {educationData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Timeline Indicator Dot */}
              <div
                className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full border-4 border-[#030712] transition-transform duration-300 group-hover:scale-125 ${
                  item.highlight
                    ? 'bg-indigo-500 shadow-lg shadow-indigo-500/50'
                    : 'bg-slate-700 group-hover:bg-cyan-400'
                }`}
              />

              {/* Card Container */}
              <div
                className={`glass-card rounded-2xl p-6 sm:p-8 relative ${
                  item.highlight
                    ? 'border-indigo-500/40 bg-slate-900/80 shadow-xl'
                    : ''
                }`}
              >
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <span className="font-mono text-xs text-indigo-400 font-semibold tracking-wider uppercase">
                      {item.period} · {item.status}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                      {item.degree}
                    </h3>
                  </div>

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-mono font-semibold w-fit ${
                      item.highlight
                        ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/40'
                        : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                    }`}
                  >
                    {item.badge}
                  </span>
                </div>

                {/* Institution */}
                <h4 className="text-base text-cyan-300 font-medium mb-4 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-cyan-400" />
                  <span>{item.institution}</span>
                </h4>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
                  {item.description}
                </p>

                {/* Coursework Highlight for University Degree */}
                {item.coursework && (
                  <div className="mb-6 pt-4 border-t border-slate-800/80">
                    <h5 className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                      <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                      <span>Relevant Core Coursework</span>
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {item.coursework.map((course) => (
                        <span
                          key={course}
                          className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Achievements List */}
                {item.achievements && (
                  <div className="space-y-2 pt-2">
                    <h5 className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                      <Award className="w-3.5 h-3.5 text-amber-400" />
                      <span>Key Highlights & Honors</span>
                    </h5>
                    {item.achievements.map((ach, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-xs sm:text-sm text-slate-300"
                      >
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
