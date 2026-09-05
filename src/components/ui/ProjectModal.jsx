import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Check, Copy, Terminal } from 'lucide-react';

export default function ProjectModal({ project, isOpen, onClose }) {
  const [decInput, setDecInput] = useState('42');
  const [copiedKey, setCopiedKey] = useState(null);

  if (!isOpen || !project) return null;

  // Calculate live conversions if this is the number converter
  const decimalNum = parseInt(decInput, 10);
  const isValidNum = !isNaN(decimalNum) && decimalNum >= 0;

  const conversions = isValidNum
    ? {
        Decimal: decimalNum.toString(10),
        Binary: decimalNum.toString(2).padStart(8, '0'),
        Hexadecimal: '0x' + decimalNum.toString(16).toUpperCase(),
        Octal: '0o' + decimalNum.toString(8),
      }
    : {
        Decimal: 'Invalid',
        Binary: '---',
        Hexadecimal: '---',
        Octal: '---',
      };

  const copyToClipboard = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-2xl max-h-[92vh] flex flex-col bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden z-10 my-auto"
        >
          {/* Header Image */}
          <div className="relative h-44 sm:h-60 overflow-hidden bg-slate-950 shrink-0">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-900 via-transparent to-transparent" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 rounded-full bg-white/80 dark:bg-slate-900/80 hover:bg-white dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700 transition-colors cursor-pointer shadow-sm"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Category Badge */}
            <div className="absolute bottom-3 left-4 sm:bottom-4 sm:left-6">
              <span className="px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/40 text-xs font-mono font-semibold text-indigo-700 dark:text-indigo-300 backdrop-blur-md">
                {project.category}
              </span>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-5 sm:p-8 space-y-5 sm:space-y-6 overflow-y-auto">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                {project.longDescription || project.description}
              </p>
            </div>

            {/* Interactive Widget for Number Converter */}
            {project.id === 'number-converter' && (
              <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-indigo-500/30 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 font-semibold uppercase">
                  <Terminal className="w-4 h-4" />
                  <span>Live Algorithmic Base Converter</span>
                </div>

                <div>
                  <label className="block text-xs text-slate-600 dark:text-slate-400 font-mono mb-1">
                    Enter Decimal Number (Radix 10):
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="10000000"
                    value={decInput}
                    onChange={(e) => setDecInput(e.target.value)}
                    className="w-full px-3 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white font-mono text-sm focus:outline-none focus:border-cyan-500"
                    placeholder="e.g. 255"
                  />
                </div>

                {/* Conversion Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {Object.entries(conversions).map(([label, val]) => (
                    <div
                      key={label}
                      className="p-2.5 rounded-lg bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 flex items-center justify-between shadow-xs"
                    >
                      <div>
                        <span className="block text-[11px] font-mono text-slate-500 dark:text-slate-400">
                          {label}
                        </span>
                        <span className="font-mono text-sm font-semibold text-slate-900 dark:text-white truncate max-w-[130px] block">
                          {val}
                        </span>
                      </div>
                      <button
                        onClick={() => copyToClipboard(val, label)}
                        className="p-1.5 text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded transition-colors"
                        title={`Copy ${label}`}
                      >
                        {copiedKey === label ? (
                          <Check className="w-3.5 h-3.5 text-emerald-500" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Highlights */}
            {project.highlights && (
              <div>
                <h4 className="text-sm font-mono font-semibold text-indigo-600 dark:text-indigo-400 mb-3 uppercase tracking-wider">
                  Key Technical Highlights
                </h4>
                <ul className="space-y-2">
                  {project.highlights.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                    >
                      <span className="text-cyan-600 dark:text-cyan-400 font-mono mt-0.5">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Tags */}
            <div>
              <h4 className="text-sm font-mono font-semibold text-indigo-600 dark:text-indigo-400 mb-2 uppercase tracking-wider">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs font-mono font-medium text-slate-700 dark:text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-end gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-white text-xs sm:text-sm font-medium transition-colors flex items-center gap-2 border border-slate-300 dark:border-slate-700"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              )}

              {project.liveUrl && project.liveUrl !== '#' && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-semibold transition-all shadow-lg shadow-indigo-600/30 flex items-center gap-2"
                >
                  <span>Launch Live App</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
