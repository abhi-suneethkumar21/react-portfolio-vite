import React from "react";
import { motion } from "framer-motion";
import myPic from "/linkedinprofile.png";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const fadeScale = {
  hidden: { opacity: 0, scale: 0.88 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section id="about" className="pt-16">
      <div className="relative card p-8 md:p-12 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-gradient-to-br from-brand-500/25 to-purple-500/15 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-tr from-cyan-500/15 to-brand-500/10 blur-3xl rounded-full pointer-events-none" />

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="relative z-10 grid md:grid-cols-[2fr,1fr] gap-6 items-center"
        >
          <div>
            <motion.p variants={fadeUp} className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400">
              Hello, I am
            </motion.p>
            <motion.h1 variants={fadeUp} className="mt-2 text-4xl sm:text-5xl font-extrabold tracking-tight">
              Abhishek Suneeth Kumar
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
              AI Engineer with experience delivering scalable internal platforms,
              automation systems, and intelligent, data-driven applications. I specialize in
              end-to-end ownership — from designing user-facing interfaces to building backend
              services, deploying cloud-native solutions, and building AI Agents.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-6 flex gap-3">
              <a href="#projects" className="btn-primary">
                View Projects
              </a>
            </motion.div>
          </div>

          <motion.div variants={fadeScale} className="flex justify-center md:justify-end mt-4 md:mt-0">
            <div className="relative">
              {/* Pulsing glow ring */}
              <motion.div
                className="absolute inset-0 rounded-full bg-brand-500/20"
                animate={{ scale: [1, 1.18, 1], opacity: [0.6, 0, 0.6] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <img
                src={myPic}
                alt="Abhishek Suneeth Kumar"
                className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-60 md:h-60 rounded-full object-cover shadow-lg ring-2 ring-brand-500/30"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
