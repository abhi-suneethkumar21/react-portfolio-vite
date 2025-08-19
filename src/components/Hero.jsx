import React from "react";
import { motion } from "framer-motion";
import myPic from "/linkedinprofile.png";

export default function Hero() {
  return (
    <section id="about" className="pt-16">
      <div className="relative card p-8 md:p-12 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-gradient-to-br from-brand-500/30 to-purple-500/20 blur-3xl rounded-full pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 grid md:grid-cols-[2fr,1fr] gap-6 items-center"
        >
          <div>
            <p className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400">
              Hello, I am
            </p>
            <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold tracking-tight">
              Abhishek Suneeth Kumar
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
              I am passionate about programming with a focus on web, app
              development, and artificial intelligence. I build fast, reliable
              solutions using React, modern APIs, and cloud deployments - always
              driven to learn, grow, and create impactful technology.
            </p>

            <div className="mt-6 flex gap-3">
              <a href="#projects" className="btn-primary">
                View Projects
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end mt-4 md:mt-0">
            <img
              src={myPic}
              alt="Abhishek Suneeth Kumar"
              className="w-36 h-36 sm:w-44 sm:h-44 md:w-60 md:h-60 rounded-full object-cover shadow-lg ring-1 ring-black/10"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
