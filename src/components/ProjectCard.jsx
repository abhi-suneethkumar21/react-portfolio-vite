import React from "react";
import { motion } from "framer-motion";

export default function ProjectCard({ title, description, tags }) {
  return (
    <motion.article
      className="card p-5 cursor-default hover:border-brand-500/30 transition-colors duration-200 h-full"
      whileHover={{
        y: -6,
        boxShadow: "0 20px 40px rgba(37, 99, 235, 0.13)",
      }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <h3 className="text-lg font-semibold text-brand-600 dark:text-brand-400">
        {title}
      </h3>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
        {description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="text-xs px-2 py-1 rounded-lg bg-black/5 dark:bg-white/10"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
