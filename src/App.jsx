import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import CompetitiveProgramming from './components/CompetitiveProgramming';
import Projects from './components/Projects';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PWAInstallPrompt from './components/ui/PWAInstallPrompt';

function PortfolioContent() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 450);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#030712] text-slate-800 dark:text-slate-300 antialiased selection:bg-indigo-500 selection:text-white relative overflow-x-hidden transition-colors duration-300">
      {/* Global Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        {/* <CompetitiveProgramming /> */}
        <Projects />
        <Education />
        <Achievements />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            aria-label="Back to top"
            className="fixed bottom-6 right-6 z-40 p-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white backdrop-blur-md shadow-xl shadow-indigo-600/30 border border-indigo-400/30 transition-all cursor-pointer transform hover:-translate-y-1"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
      {/* PWA App Install Banner */}
      <PWAInstallPrompt />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  );
}
