import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";

export default function About() {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 bg-slate-100/50 dark:bg-slate-950/40"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeading
          title="About Me"
          subtitle="A little about my journey, interests, and what I enjoy."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 max-w-3xl mx-auto"
        >
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm">

            <p className="text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              I'm a Computer Science & Engineering student and a programming
              enthusiast. My programming journey started with C and gradually
              grew into competitive programming, Data Structures & Algorithms,
              and full-stack web development.
            </p>

            <p className="mt-5 text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
              I enjoy solving programming problems, learning new technologies,
              and building useful web applications. I like taking on
              challenging problems and improving my skills step by step.
            </p>

            <div className="mt-7">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                Outside Programming
              </h3>

              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                Outside of programming, I enjoy playing cricket, football, and
                badminton. I also love singing, which is one of my favorite
                hobbies.
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
