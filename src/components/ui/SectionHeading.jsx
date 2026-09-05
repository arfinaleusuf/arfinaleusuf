import { motion } from 'framer-motion';

export default function SectionHeading({ tag, title, subtitle, align = 'center' }) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-16 ${isCenter ? 'text-center' : 'text-left'}`}>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
      >
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 mb-3 font-mono text-xs text-indigo-400 font-semibold tracking-wider uppercase ${
            isCenter ? 'mx-auto' : ''
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span>// {tag}</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mt-1 mb-4">
          {title}
        </h2>

        <div
          className={`w-20 h-1 bg-gradient-to-r from-indigo-500 via-cyan-400 to-emerald-400 rounded-full mb-4 ${
            isCenter ? 'mx-auto' : ''
          }`}
        />

        {subtitle && (
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </motion.div>
    </div>
  );
}
