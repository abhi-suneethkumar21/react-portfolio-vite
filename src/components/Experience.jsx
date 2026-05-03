import React from "react";
import { motion } from "framer-motion";
import exp from "../data/experience.js";

const entryVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24">
      <motion.h2
        className="text-2xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        Experience
      </motion.h2>

      <ol className="relative border-s border-black/10 dark:border-white/10 space-y-8 ps-6">
        {exp.map((e, i) => (
          <motion.li
            key={i}
            className="ms-4"
            variants={entryVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="absolute w-3 h-3 bg-brand-600 rounded-full mt-1.5 -start-1.5 border border-white dark:border-[#0b1220]" />
            <h3 className="text-lg font-semibold">
              {e.role} ·{" "}
              <span className="text-brand-600 dark:text-brand-400">{e.company}</span>
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {e.range} · {e.location}
            </p>
            <ul className="mt-2 text-sm list-disc ps-5 space-y-1">
              {e.points.map((p, idx) => (
                <li key={idx}>{p}</li>
              ))}
            </ul>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
