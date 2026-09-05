import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function ThemeToggle({ className = '', showLabel = false }) {
  const { theme, isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`relative inline-flex items-center gap-2 p-2.5 rounded-xl transition-all duration-300 cursor-pointer border select-none ${
        isDark
          ? 'bg-slate-900/90 hover:bg-slate-800 text-amber-400 border-slate-700/80 shadow-md shadow-indigo-950/20 hover:border-amber-400/40'
          : 'bg-white hover:bg-slate-100 text-indigo-600 border-slate-200/90 shadow-md shadow-slate-200/50 hover:border-indigo-400/40'
      } ${className}`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center overflow-hidden">
        <motion.div
          key={theme}
          initial={{ y: -16, opacity: 0, rotate: -45 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 16, opacity: 0, rotate: 45 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          className="flex items-center justify-center"
        >
          {isDark ? (
            <Moon className="w-4 h-4 text-amber-300 fill-amber-300/20 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" />
          ) : (
            <Sun className="w-4 h-4 text-amber-500 fill-amber-500/20 drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
          )}
        </motion.div>
      </div>

      {showLabel && (
        <span className="font-mono text-xs font-semibold text-slate-700 dark:text-slate-300">
          {isDark ? 'Light Theme' : 'Dark Theme'}
        </span>
      )}
    </button>
  );
}
