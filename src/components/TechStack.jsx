// src/components/SkillsMatrix.jsx
import React from "react";
import { motion } from "framer-motion";
import skills from "../data/skills.js";
import {
  Code2,
  ServerCog,
  Cloud,
  Lock,
  ListChecks,
  Users,
  BrainCircuit,
  Activity,
} from "lucide-react";

const iconMap = {
  Code2,
  ServerCog,
  Cloud,
  Lock,
  ListChecks,
  Users,
  BrainCircuit,
  Activity,
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function SkillsMatrix() {
  return (
    <section id="skills" className="scroll-mt-24">
      <motion.h2
        className="text-2xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        Skills
      </motion.h2>

      <motion.div
        className="grid gap-6 md:grid-cols-2"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
      >
        {skills.map(({ category, icon, items }) => {
          const Icon = iconMap[icon] || Code2;
          return (
            <motion.div
              key={category}
              variants={cardVariant}
              whileHover={{ y: -4, transition: { duration: 0.2, ease: "easeOut" } }}
              className="card p-5 hover:shadow-lg hover:border-brand-500/30 transition-shadow duration-200"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="p-2 rounded-xl bg-brand-600/10 text-brand-600">
                  <Icon size={18} />
                </span>
                <h3 className="font-semibold">{category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((it) => (
                  <span
                    key={it}
                    className="text-sm px-2.5 py-1.5 rounded-lg bg-black/5 dark:bg-white/10"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
